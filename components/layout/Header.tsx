"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  countriesNavLinks,
  expertiseNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { FolioMark } from "@/components/ui/AtlasVisual";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Newspaper masthead — scrolls away */}
      <div className="bg-[#F7F4EF] px-4 pt-5 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#0B6E99]">
            United Kingdom · First-tier &amp; Upper Tribunal
          </p>
          <Link href="/" className="mt-2 inline-flex flex-col items-center gap-2">
            <FolioMark className="h-7 w-7 text-[#191B22]" />
            <span className="font-display text-[clamp(1.65rem,4.5vw,2.75rem)] leading-none tracking-tight text-[#191B22]">
              Independent Country Expert
            </span>
          </Link>
          <p className="mt-2 text-[11px] tracking-[0.04em] text-[#3A4148]">
            Independent country evidence · routed to jurisdiction specialists
          </p>
        </div>
      </div>
      <div className="folio-rule mx-4 sm:mx-6 lg:mx-8" />

      <div className="sticky top-0 z-50 bg-[#F7F4EF]">
        <input
          ref={toggleRef}
          id="mobile-nav-toggle"
          type="checkbox"
          className="peer sr-only"
          aria-hidden
        />

        <div className="header-bar border-b border-[#C9C4BA] bg-[#F7F4EF]">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
            <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label="Main">
              <NavDropdown label="Expertise" href="/expertise-areas" items={expertiseNavLinks} scrollable />
              <NavDropdown label="Countries" href="/countries" items={countriesNavLinks} scrollable />
              <NavDropdown label="Case types" href="/case-types" items={caseTypesNavLinks} scrollable />
              <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
            </nav>

            <Link
              href="/contact"
              className="ml-auto hidden min-h-[40px] items-center border border-[#191B22] px-4 text-[12px] font-medium tracking-wide text-[#191B22] transition-colors hover:border-[#0B6E99] hover:text-[#0B6E99] lg:inline-flex"
            >
              Route a case
            </Link>

            <label
              htmlFor="mobile-nav-toggle"
              className="mobile-nav-label inline-flex min-h-[44px] cursor-pointer items-center gap-2 py-2 text-[12px] font-medium tracking-wide text-[#191B22] lg:hidden"
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
          className="hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-[#C9C4BA] bg-[#F7F4EF] peer-checked:block lg:hidden"
          aria-label="Mobile"
        >
          <div className="px-4 py-5">
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="mb-2 font-display text-lg text-[#191B22]">{group.title}</p>
                <ul className="space-y-0.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex min-h-[44px] items-center text-[#3A4148] hover:text-[#0B6E99]"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="flex min-h-[48px] w-full items-center justify-center border border-[#191B22] text-[13px] font-medium text-[#191B22]"
              onClick={closeMobileMenu}
            >
              Route a case
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
