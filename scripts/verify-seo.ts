#!/usr/bin/env npx tsx
/**
 * Verifies public/sitemap.xml matches buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { SITE_URL } from "../lib/constants";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

import { glossaryTerms } from "../data/glossary";
import { glossaryAnchorId } from "../lib/glossary";

const CRITICAL_GLOSSARY_ANCHORS: Record<string, string> = {
  "ikarian-reefer": "Ikarian Reefer",
  "cpr-part-35": "CPR Part 35",
  "practice-direction-2024": "Practice Direction 2024",
  "adam-pipe-guidance-2025": "Adam Pipe Guidance 2025",
};

function verifyGlossaryAnchors(): string[] {
  const errors: string[] = [];
  for (const [anchor, term] of Object.entries(CRITICAL_GLOSSARY_ANCHORS)) {
    const found = glossaryTerms.find((t) => t.term === term);
    if (!found) {
      errors.push(`Glossary missing term for anchor #${anchor}: ${term}`);
      continue;
    }
    if (glossaryAnchorId(found.term) !== anchor) {
      errors.push(
        `Glossary anchor mismatch for "${term}": expected #${anchor}, got #${glossaryAnchorId(found.term)}`
      );
    }
  }
  return errors;
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }

  const glossaryErrors = verifyGlossaryAnchors();
  if (glossaryErrors.length > 0) {
    failed = true;
    console.error("Glossary anchor errors:");
    glossaryErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    console.error("\nSEO verification failed. Run: npm run seo:generate");
    process.exit(1);
  }

  console.log(`SEO verify OK: ${actual.length} sitemap URLs match inventory.`);
}

main();
