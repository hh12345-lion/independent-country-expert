import Image from "next/image";
import Link from "next/link";
import {
  caseTypesNavLinks,
  countriesNavLinks,
  expertiseNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileNavReset } from "@/components/layout/MobileNavReset";

const NAV = [
  { label: "Expertise", href: "/expertise-areas", items: expertiseNavLinks },
  { label: "Countries", href: "/countries", items: countriesNavLinks },
  { label: "Case types", href: "/case-types", items: caseTypesNavLinks },
  { label: "Resources", href: "/guides", items: resourcesNavLinks },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <MobileNavReset />
      <input id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-hidden tabIndex={-1} />

      <div className="header-bar relative bg-[#EFECE4] shadow-[0_1px_0_#D0CFC9,0_10px_24px_-18px_rgba(23,29,30,0.45)]">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Seal: the monogram hangs from the bar on a shield-cut tab */}
          <Link href="/" className="group flex shrink-0 items-start gap-3 self-start" aria-label="Independent Country Expert home">
            <span className="ice-seal relative flex h-[92px] w-[62px] shrink-0 items-start justify-center bg-[#1A4346] pt-3 transition-colors group-hover:bg-[#406383]">
              <Image src="/brand/monogram-light.svg" alt="" width={252} height={352} unoptimized preload className="w-[34px]" />
            </span>
            <Image
              src="/brand/wordmark.svg"
              alt="Independent Country Expert"
              width={840}
              height={108}
              unoptimized
              preload
              className="mt-[22px] w-[160px] sm:mt-[20px] sm:w-[210px]"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Main">
            {NAV.map((n, i) => (
              <div key={n.href} className="flex items-center">
                {i > 0 && <span aria-hidden className="mx-1 h-4 w-px bg-[#D0CFC9]" />}
                <NavDropdown label={n.label} href={n.href} items={n.items} scrollable index={i + 1} />
              </div>
            ))}
          </nav>

          <Link
            href="/contact"
            className="ml-auto hidden min-h-[42px] items-center gap-2 rounded-[4px] bg-[#406383] px-5 text-[13px] font-medium tracking-wide text-[#EFECE4] shadow-[0_6px_16px_-8px_rgba(64,99,131,0.8)] transition-colors hover:bg-[#1A4346] lg:inline-flex"
          >
            Route a case
            <span aria-hidden>→</span>
          </Link>

          <label
            htmlFor="mobile-nav-toggle"
            className="ml-auto inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-[4px] border border-[#D0CFC9] px-3 text-[12px] font-medium tracking-wide text-[#171D1E] lg:hidden"
          >
            <span className="menu-label-open">Index</span>
            <span className="menu-label-close hidden">Close</span>
            <svg className="icon-open h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
            <svg className="icon-close hidden h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100vh-68px)] overflow-y-auto border-b border-[#D0CFC9] bg-[#EFECE4] peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 pb-6 pt-10">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 font-display text-lg text-[#171D1E]">{group.title}</p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="flex min-h-[44px] items-center text-[#364142] hover:text-[#406383]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            className="flex min-h-[48px] w-full items-center justify-center rounded-[4px] bg-[#406383] text-[13px] font-medium text-[#EFECE4]"
          >
            Route a case
          </Link>
        </div>
      </nav>
    </header>
  );
}
