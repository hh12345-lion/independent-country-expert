import { google, sheets_v4 } from "googleapis";

// ─── Auth ────────────────────────────────────────────────────────────────────

function getAuthClient() {
  const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

  if (process.env.GOOGLE_KEY_FILE_PATH) {
    return new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_KEY_FILE_PATH,
      scopes,
    });
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes,
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type CellValue = string | number | boolean | null;

export interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

export interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

export interface ReadResult {
  success: boolean;
  rows: CellValue[][];
}

/** A1 notation for a tab name (handles spaces and special characters). */
export function sheetRange(sheetName: string, cellRange: string): string {
  const escaped = sheetName.replace(/'/g, "''");
  return `'${escaped}'!${cellRange}`;
}

function resolveTarget(target?: SheetTarget) {
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName =
    target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error(
      "Missing spreadsheet ID: set GOOGLE_SHEET_ID or pass spreadsheetId"
    );
  }

  return { spreadsheetId, sheetName };
}

export function getGoogleSheetsConfigMissing(): string[] {
  const missing: string[] = [];
  if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");
  if (process.env.GOOGLE_KEY_FILE_PATH) return missing;
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
  return missing;
}

export function isGoogleSheetsConfigured(): boolean {
  return getGoogleSheetsConfigMissing().length === 0;
}

// ─── Write Operations ────────────────────────────────────────────────────────

/**
 * Append a single row to the bottom of a sheet.
 * Values must be in column order matching your header row.
 */
export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange(sheetName, "A:A"),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

/**
 * Append multiple rows at once (batch insert).
 */
export async function appendRows(
  rows: CellValue[][],
  target?: SheetTarget
): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: sheetRange(sheetName, "A:A"),
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: rows,
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

/**
 * Update a specific range (overwrites existing data).
 */
export async function updateRange(
  range: string,
  values: CellValue[][],
  target?: SheetTarget
): Promise<{ success: boolean }> {
  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);
  const fullRange = range.includes("!") ? range : sheetRange(sheetName, range);

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: fullRange,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });

  return { success: true };
}

/**
 * Retry with exponential backoff for transient Sheets API errors (429/500/503).
 */
export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const err = error as { code?: number };
      const isRetryable =
        err?.code === 429 || err?.code === 503 || err?.code === 500;

      if (isRetryable && attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}

export function logSheetsError(context: string, error: unknown) {
  const err = error as {
    message?: string;
    code?: number;
    response?: { status?: number };
  };
  console.error("Google Sheets error:", {
    context,
    message: err?.message,
    code: err?.code,
    status: err?.response?.status,
    spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
    timestamp: new Date().toISOString(),
  });
}

/**
 * Non-throwing append for form handlers — logs and returns false on failure.
 */
export async function safeAppendRow(
  values: CellValue[],
  context: string,
  target?: SheetTarget
): Promise<boolean> {
  try {
    await appendRowWithRetry(values, 2, target);
    return true;
  } catch (error) {
    logSheetsError(context, error);
    return false;
  }
}

// ─── Read Operations ─────────────────────────────────────────────────────────

export async function readRows(
  range?: string,
  target?: SheetTarget
): Promise<ReadResult> {
  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);
  const fullRange =
    range && !range.includes("!")
      ? sheetRange(sheetName, range)
      : range || sheetName;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: fullRange,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getRowCount(target?: SheetTarget): Promise<number> {
  const result = await readRows(undefined, target);
  return result.rows.length;
}

// ─── Delete Operations ───────────────────────────────────────────────────────

export async function clearRange(
  range: string,
  target?: SheetTarget
): Promise<{ success: boolean }> {
  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);
  const fullRange = range.includes("!") ? range : sheetRange(sheetName, range);

  await sheets.spreadsheets.values.clear({
    spreadsheetId,
    range: fullRange,
  });

  return { success: true };
}

// ─── Sheet Metadata ──────────────────────────────────────────────────────────

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = spreadsheetId || process.env.GOOGLE_SHEET_ID;

  if (!id) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.get({
    spreadsheetId: id,
  });

  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
      rowCount: s.properties?.gridProperties?.rowCount,
      columnCount: s.properties?.gridProperties?.columnCount,
    })),
  };
}
