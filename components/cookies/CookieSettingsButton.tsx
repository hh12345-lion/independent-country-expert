"use client";

import { useCookieConsent } from "./CookieConsentContext";

type Props = {
  className?: string;
  variant?: "footer" | "inline";
};

export function CookieSettingsButton({ className = "", variant = "footer" }: Props) {
  const { openPreferences } = useCookieConsent();

  const base =
    variant === "footer"
      ? "inline-flex min-h-[44px] items-center text-[12px] tracking-wide text-inherit hover:text-[#EFECE4] focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] items-center text-sm font-medium text-[#406383] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#406383]";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookies
    </button>
  );
}
