"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

/** Fixed bottom consent bar — no document flow shift (zero CLS). */
export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();

  if (status !== "pending") return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] motion-reduce:transform-none"
      aria-hidden={false}
    >
      <div className="pointer-events-auto mx-auto max-w-5xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4 sm:pb-6 animate-[slideUp_0.4s_ease-out] motion-reduce:animate-none">
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          aria-modal="false"
          className="relative overflow-hidden border border-[#C9C4BA] bg-[#191B22] text-[#E8EDF2] shadow-[0_-8px_40px_rgba(15,36,28,0.35)]"
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-[#0B6E99]" aria-hidden />

          <div className="p-5 pt-6 sm:p-7 sm:pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3D8FB5]">
                  Privacy &amp; cookies
                </p>
                <h2
                  id="cookie-banner-title"
                  className="font-display mt-2 text-xl leading-snug tracking-tight text-[#E8EDF2] sm:text-2xl"
                >
                  Your choices on this site
                </h2>
                <p
                  id="cookie-banner-desc"
                  className="mt-2 max-w-2xl text-sm leading-relaxed text-[#C9C4BA] sm:text-[15px]"
                >
                  Necessary cookies keep the site secure. Analytics and marketing load only if you allow
                  them. Change your mind anytime via Cookie Settings in the footer.
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                  <Link
                    href="/cookie-policy"
                    className="font-medium text-[#3D8FB5] underline-offset-2 hover:text-[#E8EDF2] hover:underline"
                  >
                    Cookie Policy
                  </Link>
                  <span className="text-white/30" aria-hidden>
                    ·
                  </span>
                  <Link
                    href="/privacy"
                    className="font-medium text-[#3D8FB5] underline-offset-2 hover:text-[#E8EDF2] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap lg:min-w-[220px] lg:flex-col">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="order-1 min-h-[44px] bg-[#0B6E99] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#3D8FB5] sm:order-none"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="min-h-[44px] border border-white/25 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#E8EDF2] transition hover:bg-white/10"
                >
                  Necessary only
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="min-h-[44px] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#3D8FB5] transition hover:text-[#E8EDF2]"
                >
                  Customize
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
