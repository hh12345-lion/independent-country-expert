import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { expertiseAreas } from "@/data/expertise-areas";
import { countries } from "@/data/countries";
import { caseTypes } from "@/data/case-types";

const PILLARS = [
  {
    kicker: "Duty",
    title: "The tribunal, not the party",
    body: "Under Ikarian Reefer and CPR Part 35, the expert’s paramount duty is to the tribunal — not the instructing party. Independence is the product, not a disclaimer.",
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Gazette lead: light, two-column — not a dark full-bleed hero */}
      <section className="bg-[#F7F4EF] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:gap-16 lg:items-start">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B6E99]">
              Country evidence · UK tribunals
            </p>
            <h1 className="font-display mt-3 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.12] tracking-tight text-[#191B22]">
              Independent country experts, routed by jurisdiction.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#3A4148] sm:text-lg">
              We connect UK solicitors and Legal Aid practitioners with truly independent country expert
              witnesses — CPR Part 35 reports that go beyond Home Office CPIN.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center bg-[#191B22] px-7 text-[13px] font-medium tracking-wide text-[#F7F4EF] transition-colors hover:bg-[#0B6E99]"
              >
                Route a case
              </Link>
              <Link
                href="/expert-independence-framework"
                className="inline-flex min-h-[48px] items-center justify-center text-[13px] font-medium text-[#0B6E99] underline-offset-4 hover:underline"
              >
                Independence framework
              </Link>
            </div>
          </div>

          <aside className="border border-[#191B22] bg-[#E8EDF2] p-6">
            <p className="font-display text-sm uppercase tracking-[0.16em] text-[#191B22]">Filed</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#3A4148]">
              <li>England, Wales, Scotland, Northern Ireland only.</li>
              <li>First-tier Tribunal and Upper Tribunal asylum &amp; immigration.</li>
              <li>Reply within one business day · Legal Aid compatible.</li>
            </ul>
            <Link
              href="/how-to-instruct"
              className="mt-6 inline-flex min-h-[44px] items-center text-sm font-medium text-[#0B6E99] hover:underline"
            >
              How we route a case →
            </Link>
          </aside>
        </div>
      </section>

      <div className="folio-rule mx-4 sm:mx-6 lg:mx-8" />

      <section className="bg-[#F7F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B6E99]">
              Why this hub exists
            </p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-[#191B22] sm:text-4xl">
              Tribunals test independence. Generic country notes fail that test.
            </h2>
            <p className="mt-4 leading-relaxed text-[#3A4148]">
              UK First-tier and Upper Tribunal proceedings need experts who can state sources, date them,
              separate assumed facts from opinion, and answer the profile before the court — across England,
              Wales, Scotland, and Northern Ireland only.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-[#C9C4BA] sm:grid-cols-3">
            {PILLARS.map((item) => (
              <article key={item.title} className="bg-[#F7F4EF] p-6 sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0B6E99]">
                  {item.kicker}
                </p>
                <h3 className="font-display mt-2 text-2xl text-[#191B22]">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-[#3A4148]">{item.body}</p>
              </article>
            ))}
          </div>

          <Link
            href="/expert-independence-framework"
            className="mt-8 inline-flex min-h-[44px] items-center text-sm font-medium text-[#0B6E99] hover:underline"
          >
            Read the full framework →
          </Link>
        </div>
      </section>

      <section className="border-y border-[#C9C4BA] bg-[#E8EDF2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B6E99]">Expertise</p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#191B22] sm:text-4xl">
                What experts are asked to address
              </h2>
            </div>
            <Link
              href="/expertise-areas"
              className="text-sm font-medium text-[#191B22] hover:text-[#0B6E99]"
            >
              All areas →
            </Link>
          </div>

          <ol className="mt-10 columns-1 gap-x-12 sm:columns-2">
            {expertiseAreas.map((e, i) => (
              <li key={e.slug} className="mb-4 break-inside-avoid">
                <Link href={`/expertise-areas/${e.slug}`} className="group flex gap-3">
                  <span className="font-display w-7 shrink-0 text-[#0B6E99]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg text-[#191B22] group-hover:text-[#0B6E99]">
                    {e.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#F7F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B6E99]">
            Country routing
          </p>
          <h2 className="font-display mt-2 max-w-xl text-3xl tracking-tight text-[#191B22] sm:text-4xl">
            Jurisdiction-specific experts across the network
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#3A4148]">
            This hub routes solicitors to dedicated country sites. Each overview page explains the fit
            for UK asylum and immigration work and links out to the specialist.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4">
            {countries.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/countries/${c.slug}`}
                  className="inline-flex min-h-[44px] items-center font-display text-xl text-[#191B22] hover:text-[#0B6E99]"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-6">
            <Link href="/countries" className="text-sm font-medium text-[#0B6E99] hover:underline">
              Country index →
            </Link>
            <Link href="/network" className="text-sm font-medium text-[#0B6E99] hover:underline">
              Network directory →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#C9C4BA] bg-[#F7F4EF] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0B6E99]">
                Proceedings
              </p>
              <h2 className="font-display mt-2 text-3xl tracking-tight text-[#191B22] sm:text-4xl">
                Case types we support
              </h2>
            </div>
            <Link href="/case-types" className="text-sm font-medium text-[#0B6E99] hover:underline">
              All case types →
            </Link>
          </div>

          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {caseTypes.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/case-types/${c.slug}`}
                  className="flex min-h-[44px] items-center border-b border-[#C9C4BA] py-3 text-[#191B22] hover:text-[#0B6E99]"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[#C9C4BA] bg-[#E8EDF2] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl tracking-tight text-[#191B22] sm:text-4xl">
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
                <p className="font-display text-4xl text-[#0B6E99]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-xl text-[#191B22]">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3A4148]">{step.d}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/how-to-instruct"
            className="mt-10 inline-flex min-h-[44px] items-center text-sm font-medium text-[#0B6E99] hover:underline"
          >
            How we route a case →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
