"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";

/**
 * Fixed bottom consent bar — no document flow shift (zero CLS).
 * Lion Group–aligned premium palette: judicial navy base, burnished bronze accent, gold top edge.
 */
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
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2C3E50] text-white shadow-[0_-8px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-md"
        >
          {/* Lion Group signature gold edge */}
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#B87333] via-[#D4956A] to-[#B87333]"
            aria-hidden
          />

          <div className="p-5 pt-6 sm:p-7 sm:pt-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87333]">
                  Privacy &amp; cookies
                </p>
                <h2
                  id="cookie-banner-title"
                  className="mt-2 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl"
                >
                  Your privacy, our standard
                </h2>
                <p
                  id="cookie-banner-desc"
                  className="mt-2 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-[15px]"
                >
                  We use cookies to run this site securely, understand how it is used when you allow it,
                  and — only with your permission — measure marketing performance. You can change your mind
                  anytime via <strong className="font-medium text-white">Cookie Settings</strong> in the
                  footer.
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                  <span>GDPR · ePrivacy · CCPA-informed controls</span>
                  <span className="text-white/30" aria-hidden>
                    |
                  </span>
                  <Link
                    href="/cookie-policy"
                    className="font-medium text-[#B87333] underline-offset-2 hover:text-[#D4956A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87333]"
                  >
                    Cookie Policy
                  </Link>
                  <span className="text-white/30" aria-hidden>
                    ·
                  </span>
                  <Link
                    href="/privacy"
                    className="font-medium text-[#B87333] underline-offset-2 hover:text-[#D4956A] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87333]"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap lg:min-w-[220px] lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="order-1 min-h-[44px] rounded-xl bg-[#B87333] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#B87333]/25 transition hover:bg-[#9A6129] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4956A] motion-reduce:transition-none sm:order-none"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={rejectNonEssential}
                  className="min-h-[44px] rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="min-h-[44px] rounded-xl border border-[#B87333]/50 bg-[#B87333]/10 px-5 py-3 text-sm font-semibold text-[#D4956A] transition hover:bg-[#B87333]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87333] motion-reduce:transition-none"
                >
                  Customize Preferences
                </button>
              </div>
            </div>

            <p className="mt-5 border-t border-white/10 pt-4 text-[11px] leading-snug text-white/45">
              Strictly necessary cookies are always active. Analytics, marketing, and preference cookies
              load only after you choose to allow them. Non-essential scripts (Google Analytics, GTM, Meta
              Pixel, LinkedIn Insight Tag, Hotjar) are blocked until consent is granted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
