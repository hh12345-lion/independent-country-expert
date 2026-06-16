import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";
import { expertiseAreas } from "@/data/expertise-areas";
import { countries } from "@/data/countries";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#CBD5E1] bg-[#2C3E50] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 font-semibold text-[#B87333]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/expertise-areas/${s.expertiseSlug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B87333]">Expertise Areas</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {expertiseAreas.slice(0, 5).map((e) => (
                <li key={e.slug}>
                  <Link href={`/expertise-areas/${e.slug}`} className="hover:text-white">
                    {e.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/expertise-areas" className="text-[#B87333] hover:underline">
                  View all expertise areas
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B87333]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/expert-independence-framework" className="hover:text-white">
                  Expert Independence Framework
                </Link>
              </li>
              <li>
                <Link href="/cpin-country-guidance" className="hover:text-white">
                  CPIN & Country Guidance
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white">
                  Solicitor Guides
                </Link>
              </li>
              <li>
                <Link href="/how-to-instruct" className="hover:text-white">
                  How to Instruct
                </Link>
              </li>
              <li>
                <Link href="/network" className="hover:text-white">
                  Network
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="hover:text-white">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/what-is-an-independent-country-expert" className="hover:text-white">
                  What Is an Independent Country Expert?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B87333]">Network Sites</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="https://www.immigrationexpertwitnesses.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  Immigration Expert Witnesses UK
                </a>
              </li>
              <li>
                <a
                  href="https://www.immigrationexpertreports.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  Immigration Expert Reports UK
                </a>
              </li>
              <li>
                <a
                  href="https://www.persecutionexpert.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  Persecution Expert UK
                </a>
              </li>
              <li>
                <a
                  href="https://www.humanrightsexperts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  Human Rights Experts UK
                </a>
              </li>
              <li>
                <Link href="/network" className="inline-flex min-h-[44px] items-center text-[#B87333] hover:underline">
                  Full network directory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B87333]">Countries</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {countries.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/countries/${c.slug}`} className="hover:text-white">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/countries" className="text-[#B87333] hover:underline">
                  View all countries
                </Link>
              </li>
            </ul>
            <h3 className="mb-4 mt-8 font-semibold text-[#B87333]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-[#B87333] hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          IndependentCountryExpert.com connects UK solicitors with truly independent country expert witnesses
          across our specialist network. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
