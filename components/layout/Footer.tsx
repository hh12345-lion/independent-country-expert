import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";
import { expertiseNavLinks, countriesNavLinks } from "@/data/navigation";

const RESOURCES = [
  { label: "What is an ICE?", href: "/what-is-an-independent-country-expert" },
  { label: "Independence framework", href: "/expert-independence-framework" },
  { label: "Report standards", href: "/report-standards" },
  { label: "CPIN & country guidance", href: "/cpin-country-guidance" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Network", href: "/network" },
];

const COLUMNS = [
  { title: "Expertise", href: "/expertise-areas", links: expertiseNavLinks.slice(0, 6) },
  { title: "Countries", href: "/countries", links: countriesNavLinks.slice(0, 6) },
  { title: "Resources", href: "/guides", links: RESOURCES },
];

const linkClass = "inline-flex min-h-[36px] items-center text-sm text-[#D0CFC9] transition-colors hover:text-[#EFECE4]";

export function Footer() {
  return (
    <footer className="border-t border-[#EFECE4]/15 bg-[#171D1E] text-[#D0CFC9]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12 lg:px-8">
        <div>
          <Image
            src="/brand/logo-light.svg"
            alt={SITE_NAME}
            width={1009}
            height={174}
            unoptimized
            className="w-60"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Independent country evidence for immigration and asylum tribunals. Not a law firm.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-3 inline-flex min-h-[44px] items-center text-sm text-[#EFECE4] underline underline-offset-4"
          >
            {SITE_EMAIL}
          </a>
        </div>

        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <Link href={col.href} className="font-display text-lg text-[#EFECE4] hover:underline">
              {col.title}
            </Link>
            <ul className="mt-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-[#EFECE4]/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-[12px] tracking-wide sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
          <nav className="flex flex-wrap items-center gap-x-5" aria-label="Legal">
            <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-[#EFECE4]">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-[#EFECE4]">
              Terms
            </Link>
            <Link href="/image-credits" className="inline-flex min-h-[44px] items-center hover:text-[#EFECE4]">
              Image credits
            </Link>
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
