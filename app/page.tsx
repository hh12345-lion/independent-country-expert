import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { TonedImage } from "@/components/ui/TonedImage";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { SITE_REGION_NOTICE } from "@/lib/constants";
import { images } from "@/lib/images";
import { expertiseAreas } from "@/data/expertise-areas";
import { countries } from "@/data/countries";
import { caseTypes } from "@/data/case-types";

const PILLARS = [
  {
    kicker: "Duty",
    title: "The tribunal, not the party",
    body: "Under Ikarian Reefer and CPR Part 35, the expert’s paramount duty is to the tribunal, not the instructing party. Independence is the product, not a disclaimer.",
  },
  {
    kicker: "Sources",
    title: "Beyond CPIN summaries",
    body: "Home Office CPIN documents are starting points. Profile-specific analysis uses dated primary sources, country guidance, and jurisdiction-specific expertise the generic summary cannot supply.",
  },
  {
    kicker: "Form",
    title: "Practice Direction 2024 ready",
    body: "Reports follow mandatory structure, independence standards, and exchange discipline. Adam Pipe 2025 guidance on assumed facts versus independent opinion is built into the brief.",
  },
] as const;

const CREDENTIALS = [
  {
    label: "CPR Part 35 duties",
    note: "Owed to the tribunal",
    icon: "M12 3v18M5 7h14M5 7l-3 7a3 3 0 006 0L5 7zm14 0l-3 7a3 3 0 006 0l-3-7zM8 21h8",
  },
  {
    label: "Practice Direction 2024",
    note: "Mandatory report structure",
    icon: "M7 3h7l5 5v13H7V3zm7 0v5h5M10 13h6M10 17h6",
  },
  {
    label: "Legal Aid compatible",
    note: "Routing with funding in mind",
    icon: "M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zm-3 9l2 2 4-4",
  },
  {
    label: "Jurisdiction specialists",
    note: "Routed to the right expert",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18zm3-12l-2 4-4 2 2-4 4-2z",
  },
] as const;

const COMPARISON = [
  {
    point: "Written for",
    cpin: "Home Office decision makers",
    expert: "The tribunal deciding this appeal",
  },
  {
    point: "Scope",
    cpin: "A general position on a country or category of claim",
    expert: "The appellant’s own profile, region, and circumstances",
  },
  {
    point: "Sources",
    cpin: "Summarised material, current at publication",
    expert: "Dated primary sources, cited so they can be checked",
  },
  {
    point: "Duty",
    cpin: "Sets out the policy position",
    expert: "Paramount duty to the tribunal, not the instructing party",
  },
  {
    point: "Testing",
    cpin: "No author to question",
    expert: "A named expert who can be cross-examined",
  },
] as const;

const CASE_TABS = [
  {
    label: "Appeals",
    slugs: ["ftt-asylum-appeal", "upper-tribunal-appeal", "country-guidance-challenges"],
  },
  {
    label: "Removal & protection",
    slugs: ["deportation-removal-article-3", "article-15c-subsidiary-protection", "fresh-claims-further-submissions"],
  },
  {
    label: "Review & directions",
    slugs: ["judicial-review-expert-evidence", "single-joint-expert-directions"],
  },
];

const STEPS = [
  {
    t: "Send a short brief",
    d: "Name, firm, email, and what you need: country, proceedings, and deadline if known.",
  },
  {
    t: "We route the case",
    d: "You receive a proposed expert, scope, and timeline, Legal Aid compatible.",
  },
  {
    t: "Tribunal-ready evidence",
    d: "Independent report structured for Practice Direction 2024, with sources you can test in cross-examination.",
  },
];

const kicker = "text-[11px] font-medium uppercase tracking-[0.2em] text-[#406383]";
const textLink = "inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-[#406383] hover:underline";

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero: deep teal, reading room behind, monogram as watermark */}
      <section className="relative isolate bg-[#1A4346] text-[#EFECE4]">
        <TonedImage src={images.readingRoom} strength={0.2} preload className="-z-10" />
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A4346] via-[#1A4346]/80 to-[#1A4346]/30" />
          <Image
            src="/brand/monogram-light.svg"
            alt=""
            width={252}
            height={352}
            unoptimized
            className="absolute -right-10 top-1/2 w-[26rem] -translate-y-1/2 opacity-[0.07] lg:right-[4%]"
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:gap-16 lg:px-8 lg:pb-24">
          <div>
            <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.06] tracking-tight">
              Independent country experts, routed by jurisdiction.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#E3E1DC] sm:text-lg">
              We connect solicitors and Legal Aid practitioners with truly independent country expert
              witnesses, for CPR Part 35 reports that go beyond Home Office CPIN.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[4px] bg-[#EFECE4] px-8 text-[14px] font-medium tracking-wide text-[#171D1E] shadow-[0_14px_28px_-16px_rgba(0,0,0,0.7)] transition-colors hover:bg-[#406383] hover:text-[#EFECE4]"
              >
                Route a case
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/expert-independence-framework"
                className="inline-flex min-h-[48px] items-center justify-center text-[14px] font-medium text-[#EFECE4] underline decoration-[#EFECE4]/40 underline-offset-[6px] hover:decoration-[#EFECE4]"
              >
                Independence framework
              </Link>
            </div>
            <p className="mt-10 max-w-xl border-t border-[#EFECE4]/20 pt-4 text-[13px] leading-relaxed text-[#D0CFC9]">
              {SITE_REGION_NOTICE}
            </p>
          </div>

          <aside className="relative z-10 self-end rounded-md border-t-4 border-[#406383] bg-[#EFECE4] p-6 text-[#364142] shadow-[0_26px_50px_-24px_rgba(0,0,0,0.75)] sm:p-7 lg:-mb-44">
            <p className="font-display text-sm uppercase tracking-[0.16em] text-[#171D1E]">Filed</p>
            <ul className="mt-4 divide-y divide-[#D0CFC9] text-sm leading-relaxed">
              <li className="pb-3">Immigration and asylum tribunal instructions.</li>
              <li className="py-3">First-tier Tribunal and Upper Tribunal asylum &amp; immigration.</li>
              <li className="pt-3">Legal Aid compatible.</li>
            </ul>
            <Link href="/how-to-instruct" className={`mt-4 ${textLink}`}>
              How we route a case <span aria-hidden>→</span>
            </Link>
          </aside>
        </div>
      </section>

      {/* Credentials */}
      <section aria-label="Standards" className="border-b border-[#D0CFC9] bg-[#EFECE4]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid divide-y divide-[#D0CFC9] sm:grid-cols-2 sm:divide-y-0 lg:mr-[23rem] xl:mr-[24rem]">
            {CREDENTIALS.map((c, i) => (
              <li
                key={c.label}
                className={`flex items-center gap-4 py-5 sm:py-6 ${i % 2 === 1 ? "sm:border-l sm:border-[#D0CFC9] sm:pl-6" : "sm:pr-6"} ${
                  i > 1 ? "sm:border-t sm:border-[#D0CFC9]" : ""
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1A4346] text-[#EFECE4]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <path d={c.icon} />
                  </svg>
                </span>
                <span>
                  <span className="block font-display text-lg leading-tight text-[#171D1E]">{c.label}</span>
                  <span className="block text-[13px] text-[#364142]">{c.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#E3E1DC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className={kicker}>Why this hub exists</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-[#171D1E] sm:text-4xl">
              Tribunals test independence. Generic country notes fail that test.
            </h2>
            <p className="mt-4 leading-relaxed text-[#364142]">
              First-tier and Upper Tribunal proceedings need experts who can state sources, date them,
              separate assumed facts from opinion, and answer the profile before the court.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PILLARS.map((item, i) => (
              <article key={item.title} className="ice-card relative overflow-hidden p-6 pt-8 sm:p-8 sm:pt-10">
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-[#406383]" />
                <span aria-hidden className="font-display absolute right-5 top-3 text-6xl leading-none text-[#D0CFC9]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={`relative ${kicker}`}>{item.kicker}</p>
                <h3 className="font-display relative mt-2 text-2xl text-[#171D1E]">{item.title}</h3>
                <p className="relative mt-3 leading-relaxed text-[#364142]">{item.body}</p>
              </article>
            ))}
          </div>

          <Link href="/expert-independence-framework" className={`mt-8 ${textLink}`}>
            Read the full framework <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Expertise index with hover preview */}
      <section className="bg-[#EFECE4] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={kicker}>Expertise</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#171D1E] sm:text-4xl">
                What experts are asked to address
              </h2>
            </div>
            <Link href="/expertise-areas" className={textLink}>
              All areas <span aria-hidden>→</span>
            </Link>
          </div>

          <ol className="ice-index relative mt-10 border-t border-[#171D1E] lg:min-h-[30rem] lg:pr-[48%]">
            {expertiseAreas.map((e, i) => (
              <li key={e.slug} className="border-b border-[#D0CFC9]">
                <Link
                  href={`/expertise-areas/${e.slug}`}
                  className="group flex min-h-[56px] items-center gap-4 py-3 transition-[padding] hover:pl-2 focus-visible:pl-2 focus-visible:outline-none"
                >
                  <span className="font-display w-8 shrink-0 text-[#406383]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display flex-1 text-xl text-[#171D1E] group-hover:text-[#406383] group-focus-visible:text-[#406383]">
                    {e.title}
                  </span>
                  <span aria-hidden className="text-[#406383] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    →
                  </span>
                </Link>
                <div
                  aria-hidden
                  className="ice-preview pointer-events-none absolute right-0 top-0 hidden h-full w-[44%] overflow-hidden rounded-md text-[#EFECE4] shadow-[0_26px_50px_-28px_rgba(23,29,30,0.7)] lg:block"
                >
                  <TonedImage src={images.fieldHouse} strength={0.22} sizes="480px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A4346] via-[#1A4346]/85 to-[#1A4346]/40" />
                  <div className="relative flex h-full flex-col justify-end p-8">
                    <span className="font-display text-7xl leading-none text-[#EFECE4]/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-display mt-4 text-3xl leading-tight">{e.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#E3E1DC]">{e.metaDescription}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CPIN versus independent report */}
      <section className="relative isolate bg-[#171D1E] py-16 text-[#EFECE4] sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#D0CFC9]">The difference</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight sm:text-4xl">
              What a CPIN gives you, and what an independent report adds
            </h2>
            <p className="mt-4 leading-relaxed text-[#D0CFC9]">
              A Country Policy and Information Note is the Home Office position. An independent report
              is evidence addressed to the tribunal about the person in front of it.
            </p>
            <Link
              href="/guides/cpin-vs-expert-report-guide"
              className="mt-6 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-[#EFECE4] underline decoration-[#EFECE4]/40 underline-offset-[6px] hover:decoration-[#EFECE4]"
            >
              CPIN vs expert report guide <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
          <div className="overflow-hidden rounded-md border border-[#EFECE4]/15">
            <div className="hidden grid-cols-[8rem_1fr_1fr] text-[11px] font-medium uppercase tracking-[0.16em] sm:grid">
              <span className="p-4" />
              <span className="bg-[#EFECE4]/5 p-4 text-[#D0CFC9]">Home Office CPIN</span>
              <span className="bg-[#406383] p-4 text-[#EFECE4]">Independent expert report</span>
            </div>
            {COMPARISON.map((row) => (
              <div key={row.point} className="grid border-t border-[#EFECE4]/15 sm:grid-cols-[8rem_1fr_1fr]">
                <p className="font-display px-4 pt-4 text-lg sm:p-4">{row.point}</p>
                <p className="px-4 pt-2 text-sm leading-relaxed text-[#D0CFC9] sm:bg-[#EFECE4]/5 sm:p-4">
                  <span className="mr-2 text-[11px] uppercase tracking-[0.14em] text-[#D0CFC9]/70 sm:hidden">CPIN</span>
                  {row.cpin}
                </p>
                <p className="px-4 pb-4 pt-2 text-sm leading-relaxed sm:bg-[#1A4346] sm:p-4">
                  <span className="mr-2 text-[11px] uppercase tracking-[0.14em] text-[#D0CFC9] sm:hidden">Report</span>
                  {row.expert}
                </p>
              </div>
            ))}
          </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="ice-shield relative hidden aspect-[4/5] w-28 shrink-0 sm:block">
                <TonedImage
                  src={images.archive}
                  alt="Archive shelves holding rolled and boxed records"
                  tone="blue"
                  strength={0.55}
                  sizes="112px"
                />
              </div>
              <p className="font-display max-w-md text-xl leading-snug text-[#E3E1DC]">
                A good report does not ignore the CPIN. It engages with it, and says where the
                appellant’s circumstances differ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Country routing */}
      <section className="bg-[#EFECE4] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className={kicker}>Country routing</p>
          <h2 className="font-display mt-2 max-w-xl text-3xl tracking-tight text-[#171D1E] sm:text-4xl">
            Jurisdiction-specific experts across the network
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#364142]">
            This hub routes solicitors to dedicated country sites. Each overview page explains the fit
            for UK asylum and immigration work and links out to the specialist.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/countries/${c.slug}`}
                  className="ice-card group flex min-h-[56px] items-center justify-between gap-2 px-4 py-3"
                >
                  <span className="font-display text-xl text-[#171D1E] group-hover:text-[#406383]">{c.title}</span>
                  <span aria-hidden className="text-[#406383]">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/countries" className={textLink}>
              Country index <span aria-hidden>→</span>
            </Link>
            <Link href="/network" className={textLink}>
              Network directory <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case types as tabs */}
      <section className="border-y border-[#D0CFC9] bg-[#E3E1DC] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={kicker}>Proceedings</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#171D1E] sm:text-4xl">
                Case types we support
              </h2>
            </div>
            <Link href="/case-types" className={textLink}>
              All case types <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="ice-tabs mt-8">
            {CASE_TABS.map((tab, i) => (
              <input
                key={tab.label}
                type="radio"
                name="case-tabs"
                id={`case-tab-${i}`}
                defaultChecked={i === 0}
                className="sr-only"
                aria-label={tab.label}
              />
            ))}
            <div className="ice-tablist flex flex-wrap gap-2">
              {CASE_TABS.map((tab, i) => (
                <label
                  key={tab.label}
                  htmlFor={`case-tab-${i}`}
                  className="inline-flex min-h-[44px] cursor-pointer items-center rounded-[4px] border border-[#171D1E]/30 px-5 text-[13px] font-medium tracking-wide text-[#171D1E] transition-colors hover:border-[#1A4346]"
                >
                  {tab.label}
                </label>
              ))}
            </div>
            <div className="ice-panels mt-6">
              {CASE_TABS.map((tab) => (
                <div key={tab.label} className="ice-panel gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tab.slugs.map((slug) => {
                    const c = caseTypes.find((x) => x.slug === slug);
                    if (!c) return null;
                    return (
                      <Link key={slug} href={`/case-types/${slug}`} className="ice-card group flex flex-col p-6">
                        <h3 className="font-display text-2xl leading-tight text-[#171D1E] group-hover:text-[#406383]">
                          {c.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#364142]">{c.metaDescription}</p>
                        <span className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#406383]">
                          Open <span aria-hidden>→</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#EFECE4] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className={kicker}>Process</p>
          <h2 className="font-display mt-2 text-3xl tracking-tight text-[#171D1E] sm:text-4xl">From brief to report</h2>
          <ol className="relative mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8 sm:before:absolute sm:before:inset-x-0 sm:before:top-6 sm:before:h-px sm:before:bg-[#D0CFC9]">
            {STEPS.map((step, i) => (
              <li key={step.t} className="relative">
                <p className="font-display relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1A4346] text-lg text-[#EFECE4] ring-8 ring-[#EFECE4]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-5 text-xl text-[#171D1E]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#364142]">{step.d}</p>
              </li>
            ))}
          </ol>
          <Link href="/how-to-instruct" className={`mt-10 ${textLink}`}>
            How we route a case <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
