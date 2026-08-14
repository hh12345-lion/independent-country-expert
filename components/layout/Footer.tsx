import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#191B22] bg-[#F7F4EF] text-[#3A4148]">
      <div className="folio-rule" />
      <div className="mx-auto max-w-xl px-4 py-10 text-center sm:px-6">
        <p className="font-display text-2xl tracking-tight text-[#191B22]">{SITE_NAME}</p>
        <p className="mt-3 text-sm leading-relaxed">
          Independent country evidence for UK immigration and asylum tribunals. Not a law firm.
        </p>
        <a
          href={`mailto:${SITE_EMAIL}`}
          className="mt-3 inline-flex min-h-[44px] items-center text-sm text-[#0B6E99] hover:underline"
        >
          {SITE_EMAIL}
        </a>
        <nav
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[12px] tracking-wide"
          aria-label="Footer"
        >
          <Link href="/contact" className="inline-flex min-h-[44px] items-center hover:text-[#0B6E99]">
            Route a case
          </Link>
          <Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-[#0B6E99]">
            Network
          </Link>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-[#0B6E99]">
            Privacy
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-[#0B6E99]">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
    </footer>
  );
}
