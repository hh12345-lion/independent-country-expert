export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.independentcountryexpert.com";
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
