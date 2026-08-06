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

/** Cartographic evidence desk — peat ink + archival teal */
export const COLORS = {
  primary: "#0F241C",
  primaryHover: "#0A1914",
  accent: "#2B7A78",
  accentHover: "#236663",
  accentLight: "#4A9B98",
  background: "#FAFBFA",
  sectionAlt: "#E7ECE8",
  border: "#B8C4BE",
  heading: "#0F241C",
  body: "#33403A",
} as const;
