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

export const COLORS = {
  primary: "#2C3E50",
  primaryHover: "#243342",
  accent: "#B87333",
  accentHover: "#9A6129",
  accentLight: "#D4956A",
  background: "#FFFFFF",
  sectionAlt: "#F5F7FA",
  border: "#CBD5E1",
  heading: "#2C3E50",
  body: "#374151",
} as const;
