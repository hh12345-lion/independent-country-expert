/**
 * Local-only test for Google Sheets credentials.
 * Run: npm run sheets:test
 * Requires .env.local with GOOGLE_* variables (see Google_sheets_setup.md).
 * Delete or skip this script in production deploys if desired — it is not imported by the app.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const path = resolve(process.cwd(), ".env.local");
  if (!existsSync(path)) return;
  const text = readFileSync(path, "utf8");
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnvLocal();

const {
  appendLeadToSheet,
  CONTACT_SHEET_HEADERS,
} = await import("../lib/contact-sheet");
const {
  getSpreadsheetInfo,
  isGoogleSheetsConfigured,
  readRows,
} = await import("../lib/google-sheets");

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");
  console.log("Expected headers (row 1):");
  console.log(" ", CONTACT_SHEET_HEADERS.join(" | "));

  if (!isGoogleSheetsConfigured()) {
    console.error(
      "\n❌ Missing GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID in .env.local"
    );
    process.exit(1);
  }

  try {
    const info = await getSpreadsheetInfo();
    console.log("\n✅ Spreadsheet found:", info.title);
    console.log("   Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("❌ Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    const ok = await appendLeadToSheet({
      fullName: "Test Entry",
      organisation: "Test Firm LLP",
      email: "test@example.com",
      phone: "",
      jurisdiction: "UK",
      expertise: "",
      caseType: "",
      funding: "",
      deadline: "",
      summary: "This is a test row from scripts/test-sheets.ts.",
    });
    if (!ok) {
      console.error("❌ Failed to write row (see logs above)");
      process.exit(1);
    }
    console.log("✅ Row written");
  } catch (error) {
    console.error("❌ Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`✅ Read ${result.rows.length} rows (including header)`);
    console.log("   Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("❌ Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
