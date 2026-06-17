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
    <header className="sticky top-0 z-50 border-b border-[#CBD5E1] bg-white shadow-sm">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-h-[44px] min-w-0 shrink items-center gap-2 font-bold text-[#2C3E50]"
        >
          <span className="truncate text-sm sm:text-base lg:text-lg">
            Independent Country Expert
          </span>
          <span className="shrink-0 rounded-[4px] bg-[#B87333] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:px-2 sm:text-[10px]">
            UK
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded-[4px] px-2 py-2 text-sm text-[#374151] hover:bg-[#F5F7FA] hover:text-[#2C3E50]"
          >
            Home
          </Link>
          <NavDropdown label="Expertise" href="/expertise-areas" items={expertiseNavLinks} scrollable />
          <NavDropdown label="Countries" href="/countries" items={countriesNavLinks} scrollable />
          <NavDropdown label="Case Types" href="/case-types" items={caseTypesNavLinks} scrollable />
          <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-[4px] bg-[#B87333] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9A6129]"
          >
            Contact Us
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-[4px] border border-[#CBD5E1] lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg className="icon-open h-6 w-6 text-[#2C3E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="icon-close hidden h-6 w-6 text-[#2C3E50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        id="mobile-menu"
        className="hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-[#CBD5E1] bg-white peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-4">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#2C3E50]">
                {group.title}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[44px] items-center rounded-[4px] px-3 text-[#374151] hover:bg-[#F5F7FA]"
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
            className="flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#B87333] font-semibold text-white"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
