/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://independentcountryexpert.com";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
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
export const SITE_REGION = "United Kingdom";
/** Sitewide copy: service is UK tribunals only */
export const SITE_REGION_NOTICE =
  "UK immigration & asylum tribunals only — for solicitors and Legal Aid practitioners in England, Wales, Scotland, and Northern Ireland.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/independent-country-expert";

/** Gazette ledger — graphite ink + lagoon (not the sister-site palettes) */
export const COLORS = {
  primary: "#191B22",
  primaryHover: "#101218",
  accent: "#0B6E99",
  accentHover: "#085578",
  accentLight: "#3D8FB5",
  background: "#F7F4EF",
  sectionAlt: "#E8EDF2",
  border: "#C9C4BA",
  heading: "#191B22",
  body: "#3A4148",
} as const;
