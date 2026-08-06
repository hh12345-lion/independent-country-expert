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
import { MeridianMark } from "@/components/ui/AtlasVisual";
import { SITE_EMAIL } from "@/lib/constants";

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
    <header className="sticky top-0 z-50">
      {/* Masthead rail */}
      <div className="hidden border-b border-[#0F241C]/bg-[#0F241C] text-[#E7ECE8] sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[11px] tracking-[0.08em] sm:px-6 lg:px-8">
          <p className="uppercase text-[#4A9B98]">UK tribunals · England · Wales · Scotland · NI</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="truncate text-[#E7ECE8]/hover:text-white"
          >
            {SITE_EMAIL}
          </a>
        </div>
      </div>

      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar border-b border-[#B8C4BE] bg-[#FAFBFA]/backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-stretch gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-h-[64px] min-w-0 shrink items-center gap-3 py-2"
          >
            <MeridianMark className="h-9 w-9 shrink-0 text-[#2B7A78] transition-transform duration-300 group-hover:rotate-12" />
            <span className="min-w-0">
              <span className="font-display block truncate text-xl leading-none tracking-tight text-[#0F241C] sm:text-2xl">
                Independent Country Expert
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-[#2B7A78]">
                Country evidence for UK tribunals
              </span>
            </span>
          </Link>

          <nav
            className="ml-auto hidden items-center gap-0.5 lg:flex"
            aria-label="Main"
          >
            <NavDropdown label="Expertise" href="/expertise-areas" items={expertiseNavLinks} scrollable />
            <NavDropdown label="Countries" href="/countries" items={countriesNavLinks} scrollable />
            <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
            <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[40px] items-center border border-[#0F241C] bg-[#0F241C] px-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E7ECE8] transition-colors hover:border-[#2B7A78] hover:bg-[#2B7A78]"
            >
              Instruct
            </Link>
          </nav>

          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label ml-auto inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2 self-center border border-[#B8C4BE] px-3 text-[12px] font-medium uppercase tracking-[0.1em] text-[#0F241C] lg:hidden"
          >
            <span className="menu-label-open">Menu</span>
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
        className="hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-[#B8C4BE] bg-[#FAFBFA] peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="atlas-panel px-4 py-5">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 font-display text-lg text-[#0F241C]">{group.title}</p>
              <ul className="space-y-0.5 border-l border-[#B8C4BE] pl-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center text-[#33403A] hover:text-[#2B7A78]"
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
            className="flex min-h-[48px] w-full items-center justify-center bg-[#0F241C] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E7ECE8]"
            onClick={closeMobileMenu}
          >
            Instruct an expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
