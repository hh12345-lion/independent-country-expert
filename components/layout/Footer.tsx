import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";
import { MeridianMark } from "@/components/ui/AtlasVisual";

export function Footer() {
  return (
    <footer className="border-t border-[#0F241C] bg-[#0F241C] text-[#E7ECE8]">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <MeridianMark className="h-7 w-7 shrink-0 text-[#4A9B98]" />
            <p className="font-display text-2xl tracking-tight text-[#E7ECE8]">{SITE_NAME}</p>
          </div>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#B8C4BE]">
            Independent country evidence for UK immigration and asylum tribunals. Not a law firm.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-3 inline-flex min-h-[44px] items-center text-sm text-[#4A9B98] hover:text-[#E7ECE8]"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.12em] text-[#B8C4BE]"
          aria-label="Footer"
        >
          <Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-[#E7ECE8]">
            Instruct
          </Link>
          <Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-[#E7ECE8]">
            Network
          </Link>
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-[#E7ECE8]">
            Privacy
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-[#E7ECE8]">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
        </nav>
      </div>
    </footer>
  );
}
