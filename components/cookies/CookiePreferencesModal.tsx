"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META } from "@/lib/cookies/constants";
import { trapFocus } from "@/lib/cookies/focus-trap";
import type { CategoryConsent, CookieCategory } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";

const CATEGORIES: CookieCategory[] = ["necessary", "analytics", "marketing", "preferences"];

function CategoryToggle({
  category,
  checked,
  onChange,
}: {
  category: CookieCategory;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const meta = CATEGORY_META[category];
  const inputId = `cookie-toggle-${category}`;

  return (
    <li className="rounded-[8px] border border-[#C9C4BA] p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <label htmlFor={inputId} className="font-semibold text-[#191B22]">
            {meta.label}
            {meta.required && (
              <span className="ml-2 text-xs font-normal text-[#3A4148]">(always on)</span>
            )}
          </label>
          <p className="mt-1 text-sm text-[#3A4148]">{meta.description}</p>
        </div>
        <button
          id={inputId}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-readonly={meta.required}
          disabled={meta.required}
          onClick={() => !meta.required && onChange(!checked)}
          className={`relative inline-flex h-7 w-12 shrink-0 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E99] motion-reduce:transition-none ${
            meta.required
              ? "cursor-not-allowed bg-[#191B22]/40"
              : checked
                ? "bg-[#191B22]"
                : "bg-[#C9C4BA]"
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-6 w-6 translate-y-0.5 rounded-full bg-white shadow transition-transform motion-reduce:transition-none ${
              checked ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
          <span className="sr-only">{meta.label} cookies</span>
        </button>
      </div>
    </li>
  );
}

export function CookiePreferencesModal() {
  const {
    isPreferencesOpen,
    closePreferences,
    choices,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CategoryConsent>(choices);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
  }, [isPreferencesOpen, choices]);

  useEffect(() => {
    if (!isPreferencesOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
      if (dialogRef.current) trapFocus(dialogRef.current, e);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreferencesOpen, closePreferences]);

  const toggle = useCallback((key: CookieCategory, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  }, []);

  if (!isPreferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] motion-reduce:backdrop-blur-none"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-[#C9C4BA] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.2)] sm:rounded-2xl animate-[fadeIn_0.25s_ease-out] motion-reduce:animate-none"
      >
        <div className="relative border-b border-[#C9C4BA] bg-[#191B22] px-5 py-4 sm:px-6">
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B6E99] via-[#3D8FB5] to-[#0B6E99]"
            aria-hidden
          />
          <h2 id="cookie-prefs-title" className="pt-1 text-lg font-bold text-white">
            Customize cookie preferences
          </h2>
          <p className="mt-1 text-sm text-white/75">
            Manage how we use cookies. Changes apply immediately via Google Consent Mode.{" "}
            <Link
              href="/cookie-policy"
              className="text-[#0B6E99] hover:underline"
              onClick={closePreferences}
            >
              Cookie Policy
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <ul className="space-y-4">
            {CATEGORIES.map((key) => (
              <CategoryToggle
                key={key}
                category={key}
                checked={draft[key]}
                onChange={(v) => toggle(key, v)}
              />
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-[#3A4148]">
            California residents: we do not sell personal information. You may opt out of non-essential
            cookies using the controls above — equivalent to &quot;Do Not Sell or Share&quot; for cookie-based
            analytics and advertising where applicable.
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#C9C4BA] bg-[#E8EDF2] p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[44px] rounded-[8px] border border-[#C9C4BA] px-4 py-2 text-sm font-medium text-[#3A4148] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191B22]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-[8px] border border-[#191B22] px-4 py-2 text-sm font-semibold text-[#191B22] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#191B22]"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] rounded-[8px] bg-[#191B22] px-4 py-2 text-sm font-semibold text-white hover:bg-[#101218] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E99]"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-[8px] bg-[#0B6E99] px-4 py-2 text-sm font-semibold text-white hover:bg-[#085578] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D8FB5]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
