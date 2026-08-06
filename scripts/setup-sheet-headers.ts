/**
 * One-time: write CONTACT_SHEET_HEADERS to row 1 if the sheet is empty.
 * Run: npx tsx scripts/setup-sheet-headers.ts
 * Use --force to overwrite row 1.
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

const { CONTACT_SHEET_HEADERS } = await import("../lib/contact-sheet");
const { isGoogleSheetsConfigured, readRows, updateRange } = await import(
  "../lib/google-sheets"
);

async function main() {
  if (!isGoogleSheetsConfigured()) {
    console.error("Missing Google Sheets env vars in .env.local");
    process.exit(1);
  }

  const force = process.argv.includes("--force");
  const existing = await readRows("A1:L1");
  const hasHeader = Boolean(existing.rows[0]?.some((c) => String(c ?? "").trim()));

  if (hasHeader && !force) {
    console.log("Row 1 already has data — skipping. Pass --force to overwrite.");
    console.log("Current:", existing.rows[0]);
    return;
  }

  await updateRange("A1", [Array.from(CONTACT_SHEET_HEADERS)]);
  console.log("Wrote headers to row 1:");
  console.log(CONTACT_SHEET_HEADERS.join(" | "));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
