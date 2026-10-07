/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://independentcountryexpert.com";

/** Public origin for sitemap/canonicals, never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();
export const SITE_NAME = "Independent Country Expert";
export const SITE_EMAIL = "cases@independentcountryexpert.com";
/** Soft geo, avoid stacking marketplace country names in chrome. */
export const SITE_REGION = "Worldwide";
/** Sitewide copy: tribunal routing without over-stacking jurisdiction geography */
export const SITE_REGION_NOTICE =
  "Country expert routing for immigration and asylum tribunal instructions, for solicitors and Legal Aid practitioners.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/independent-country-expert";

/** Gazette ledger, graphite ink + lagoon (not the sister-site palettes) */
export const COLORS = {
  primary: "#171D1E",
  primaryHover: "#0E1213",
  accent: "#406383",
  accentHover: "#1A4346",
  accentLight: "#48696B",
  background: "#EFECE4",
  sectionAlt: "#E3E1DC",
  border: "#D0CFC9",
  heading: "#171D1E",
  body: "#364142",
} as const;
