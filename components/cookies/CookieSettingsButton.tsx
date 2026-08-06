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
      ? "inline-flex min-h-[44px] items-center text-[12px] uppercase tracking-[0.12em] text-[#B8C4BE] hover:text-[#E7ECE8] focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] items-center text-sm font-medium text-[#2B7A78] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B7A78]";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookies
    </button>
  );
}
