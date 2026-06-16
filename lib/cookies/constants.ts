import type { CookieCategory } from "./types";

/** localStorage key — bump version suffix to re-prompt after policy changes */
export const CONSENT_STORAGE_KEY = "ice_cookie_consent_v1";

/** Increment to invalidate stored consent and show banner again */
export const CONSENT_VERSION = 1;

/** GDPR common practice: re-ask annually */
export const CONSENT_EXPIRY_DAYS = 365;

export const CATEGORY_META: Record<
  CookieCategory,
  { label: string; description: string; required: boolean }
> = {
  necessary: {
    label: "Necessary",
    description:
      "Required for the site to function (security, consent storage, load balancing). Cannot be disabled.",
    required: true,
  },
  analytics: {
    label: "Analytics",
    description:
      "Help us understand how visitors use the site (Google Analytics, Hotjar). Data is aggregated where possible.",
    required: false,
  },
  marketing: {
    label: "Marketing",
    description:
      "Used to measure ad performance and reach relevant audiences (Meta Pixel, LinkedIn Insight Tag).",
    required: false,
  },
  preferences: {
    label: "Preferences",
    description: "Remember choices such as language or display settings to improve your experience.",
    required: false,
  },
};
