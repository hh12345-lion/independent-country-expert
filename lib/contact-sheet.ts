import {
  getGoogleSheetsConfigMissing,
  isGoogleSheetsConfigured,
  readRows,
  safeAppendRow,
  updateRange,
  type CellValue,
} from "@/lib/google-sheets";
import { LEAD_BRAND_NAME, type SubmitLeadPayload } from "@/lib/submit-lead";

/**
 * Row 1 headers for GOOGLE_SHEET_TAB_NAME — keep order in sync with leadRowValues().
 */
export const CONTACT_SHEET_HEADERS = [
  "Timestamp",
  "Brand name",
  "Name",
  "Firm",
  "Email",
  "Phone",
  "Jurisdiction",
  "Expertise",
  "Case type",
  "Funding",
  "Deadline",
  "Brief",
] as const;

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export function leadRowValues(data: SubmitLeadPayload): CellValue[] {
  return [
    new Date().toISOString(),
    LEAD_BRAND_NAME,
    sanitize(data.fullName ?? ""),
    sanitize(data.organisation ?? ""),
    (data.email ?? "").toLowerCase().trim(),
    sanitize(data.phone ?? ""),
    sanitize(data.jurisdiction ?? ""),
    sanitize(data.expertise ?? ""),
    sanitize(data.caseType ?? ""),
    sanitize(data.funding ?? ""),
    data.deadline ?? "",
    sanitize(data.summary ?? ""),
  ];
}

async function ensureHeaderRow(): Promise<void> {
  const existing = await readRows("A1:L1");
  const hasHeader = Boolean(existing.rows[0]?.some((c) => String(c ?? "").trim()));
  if (!hasHeader) {
    await updateRange("A1", [Array.from(CONTACT_SHEET_HEADERS)]);
  }
}

/**
 * Append one contact / instruct lead. Never throws — logs errors only.
 */
export async function appendLeadToSheet(data: SubmitLeadPayload): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) {
    const missing = getGoogleSheetsConfigMissing();
    console.warn(
      `[contact-sheet] Skipped — missing in env: ${missing.join(", ")}. Restart the server after saving .env.local.`
    );
    return false;
  }

  try {
    await ensureHeaderRow();
  } catch (error) {
    console.error("[contact-sheet] Header check failed:", {
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }

  return safeAppendRow(leadRowValues(data), "appendLeadToSheet");
}
