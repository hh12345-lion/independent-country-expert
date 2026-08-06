import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { AtlasHeroArt } from "@/components/ui/AtlasVisual";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { expertiseAreas } from "@/data/expertise-areas";
import { countries } from "@/data/countries";
import { caseTypes } from "@/data/case-types";

const PILLARS = [
  {
    num: "01",
    title: "Duty to the tribunal",
    body: "Under Ikarian Reefer and CPR Part 35, the expert’s paramount duty is to the tribunal — not the instructing party. Independence is the product, not a disclaimer.",
  },
  {
    num: "02",
    title: "Beyond CPIN summaries",
    body: "Home Office CPIN documents are starting points. Profile-specific analysis uses dated primary sources, country guidance, and jurisdiction-specific expertise the generic summary cannot supply.",
  },
  {
    num: "03",
    title: "Practice Direction 2024 ready",
    body: "Reports follow mandatory structure, independence standards, and exchange discipline. Adam Pipe 2025 guidance on assumed facts versus independent opinion is built into the brief.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero — brand-first, one composition */}
      <section className="atlas-field relative min-h-[min(88vh,720px)] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-50 sm:opacity-60" aria-hidden>
          <AtlasHeroArt className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto flex min-h-[min(88vh,720px)] max-w-6xl flex-col justify-end px-4 pb-14 pt-20 sm:px-6 sm:pb-20 lg:px-8">
          <p className="animate-atlas-rise text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4A9B98]">
            UK immigration &amp; asylum tribunals
          </p>
          <h1 className="animate-atlas-rise-delay font-display mt-4 max-w-3xl text-[clamp(2.5rem,8vw,4.75rem)] leading-[1.05] tracking-tight text-[#E7ECE8]">
            Independent Country Expert
          </h1>
          <p className="animate-atlas-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-[#B8C4BE] sm:text-lg">
            We connect UK solicitors and Legal Aid practitioners with truly independent country expert
            witnesses — CPR Part 35 reports that go beyond Home Office CPIN.
          </p>
          <div className="animate-atlas-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-[#2B7A78] px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#4A9B98]"
            >
              Instruct an expert
            </Link>
            <Link
              href="/expert-independence-framework"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#B8C4BE]/px-7 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E7ECE8] transition-colors hover:border-[#4A9B98] hover:text-[#4A9B98]"
            >
              Independence framework
            </Link>
          </div>
        </div>
      </section>

      {/* Independence — editorial, not cards */}
      <section className="bg-[#FAFBFA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B7A78]">
              Why this hub exists
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-[#0F241C] sm:text-4xl">
              Tribunals test independence. Generic country notes fail that test.
            </h2>
            <p className="mt-4 text-[#33403A] leading-relaxed">
              UK First-tier and Upper Tribunal proceedings need experts who can state sources, date them,
              separate assumed facts from opinion, and answer the profile before the court — across England,
              Wales, Scotland, and Northern Ireland only.
            </p>
          </div>

          <ol className="mt-12 space-y-0 border-t border-[#B8C4BE]">
            {PILLARS.map((item) => (
              <li
                key={item.num}
                className="grid gap-4 border-b border-[#B8C4BE] py-8 sm:grid-cols-[5rem_1fr] sm:gap-8"
              >
                <span className="font-display text-3xl text-[#2B7A78]">{item.num}</span>
                <div>
                  <h3 className="font-display text-2xl text-[#0F241C]">{item.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-[#33403A]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/expert-independence-framework"
            className="mt-8 inline-flex min-h-[44px] items-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2B7A78] hover:text-[#0F241C]"
          >
            Read the full framework →
          </Link>
        </div>
      </section>

      {/* Expertise index — readable list, not card farm */}
      <section className="border-t border-[#B8C4BE] bg-[#E7ECE8] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B7A78]">
                Expertise
              </p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#0F241C] sm:text-4xl">
                What experts are instructed to do
              </h2>
            </div>
            <Link
              href="/expertise-areas"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F241C] hover:text-[#2B7A78]"
            >
              All areas →
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-[#B8C4BE] border-y border-[#B8C4BE]">
            {expertiseAreas.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/expertise-areas/${e.slug}`}
                  className="group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-xl text-[#0F241C] group-hover:text-[#2B7A78]">
                    {e.title}
                  </span>
                  <span className="max-w-md text-sm text-[#33403A] sm:text-right">
                    {e.metaDescription.slice(0, 110)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Country meridian index */}
      <section className="bg-[#FAFBFA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B7A78]">
            Country routing
          </p>
          <h2 className="font-display mt-2 max-w-xl text-3xl tracking-tight text-[#0F241C] sm:text-4xl">
            Jurisdiction-specific experts across the network
          </h2>
          <p className="mt-4 max-w-2xl text-[#33403A] leading-relaxed">
            This hub routes instructing solicitors to dedicated country sites. Each overview page explains
            the fit for UK asylum and immigration work and links out to the specialist.
          </p>

          <div className="meridian-rule mt-10" />
          <ul className="mt-8 flex flex-wrap gap-x-1 gap-y-3">
            {countries.map((c, i) => (
              <li key={c.slug} className="flex items-center">
                <Link
                  href={`/countries/${c.slug}`}
                  className="font-display text-2xl text-[#0F241C] transition-colors hover:text-[#2B7A78] sm:text-3xl"
                >
                  {c.title}
                </Link>
                {i < countries.length - 1 && (
                  <span className="mx-3 text-[#B8C4BE]" aria-hidden>
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="meridian-rule mt-8" />

          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="/countries"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2B7A78] hover:text-[#0F241C]"
            >
              Country index →
            </Link>
            <Link
              href="/network"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2B7A78] hover:text-[#0F241C]"
            >
              Network directory →
            </Link>
          </div>
        </div>
      </section>

      {/* Case types — compact columns */}
      <section className="border-t border-[#B8C4BE] bg-[#0F241C] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4A9B98]">
                Proceedings
              </p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#E7ECE8] sm:text-4xl">
                Case types we support
              </h2>
            </div>
            <Link
              href="/case-types"
              className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#4A9B98] hover:text-[#E7ECE8]"
            >
              All case types →
            </Link>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {caseTypes.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/case-types/${c.slug}`}
                  className="group flex min-h-[44px] items-baseline gap-3 border-b border-white/10 py-3"
                >
                  <span className="shrink-0 text-[#2B7A78]" aria-hidden>
                    —
                  </span>
                  <span className="text-[#E7ECE8] transition-colors group-hover:text-[#4A9B98]">
                    {c.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How instruct works — short high-value strip */}
      <section className="bg-[#FAFBFA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-tight text-[#0F241C] sm:text-4xl">
            From brief to report
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              {
                t: "Send a short brief",
                d: "Name, firm, email, and what you need — country, proceedings, and deadline if known.",
              },
              {
                t: "We route the case",
                d: "Within one business day you receive a proposed expert, scope, and timeline — Legal Aid compatible.",
              },
              {
                t: "Tribunal-ready evidence",
                d: "Independent report structured for Practice Direction 2024, with sources you can test in cross-examination.",
              },
            ].map((step, i) => (
              <li key={step.t}>
                <p className="font-display text-5xl text-[#2B7A78]/opacity-40">{i + 1}</p>
                <h3 className="mt-2 font-display text-xl text-[#0F241C]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#33403A]">{step.d}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/how-to-instruct"
            className="mt-10 inline-flex min-h-[44px] items-center text-[12px] font-semibold uppercase tracking-[0.14em] text-[#2B7A78] hover:text-[#0F241C]"
          >
            Full instruction guide →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
