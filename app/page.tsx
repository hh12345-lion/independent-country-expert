import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { expertiseAreas } from "@/data/expertise-areas";
import { services } from "@/data/services";
import { countries } from "@/data/countries";
import { caseTypes } from "@/data/case-types";

const FEATURED_EXPERTISE = [
  "country-condition-analysis",
  "state-protection-assessment",
  "cpin-challenge-reports",
  "oral-evidence-tribunal",
] as const;

export default function HomePage() {
  const featuredAreas = FEATURED_EXPERTISE.map((slug) =>
    expertiseAreas.find((e) => e.slug === slug)
  ).filter(Boolean);

  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#2C3E50] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#B87333] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Independent Country Expert Witness UK: Tribunal-Duty Reports for Asylum Appeals
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Independent Country Expert connects UK immigration solicitors, law firms, and Legal Aid practitioners
            with truly independent country expert witnesses — CPR Part 35 compliant, Practice Direction 2024
            ready, with profile-specific analysis beyond Home Office CPIN summaries.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#B87333] px-6 py-3 font-semibold text-white hover:bg-[#9A6129] sm:w-auto sm:px-8"
            >
              Contact Us
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white/60 px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
            <Link
              href="/expert-independence-framework"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              Expert Independence Framework
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl md:text-3xl">
            Why Independence Matters in Country Expert Evidence
          </h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            UK tribunals increasingly scrutinise expert evidence for independence, methodology, and source quality.
            Under Ikarian Reefer, country experts owe a paramount duty to the tribunal — not the instructing party.
            Solicitors need experts with dated primary sources and profile-specific analysis beyond generic Home Office
            CPIN summaries.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ikarian Reefer Duty",
                desc: "Paramount duty to the tribunal under CPR Part 35 — independent, objective evidence regardless of who instructs or pays.",
              },
              {
                title: "Practice Direction 2024",
                desc: "Mandatory report structure, default 20-page limit, independence standards, and strict exchange deadlines.",
              },
              {
                title: "Adam Pipe 2025",
                desc: "Assumed facts vs independent opinion; source dating; advocacy risk identified and avoided in compliant reports.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                <h3 className="font-semibold text-[#2C3E50]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/expert-independence-framework"
            className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
          >
            Read the complete Expert Independence Framework
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl">Core Expertise Areas</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Four primary areas of independent country expert evidence for UK asylum and immigration tribunals.
          </p>
          <div className="mt-8">
            <CardGrid
              items={featuredAreas.map((e) => ({
                title: e!.title,
                description: e!.metaDescription.slice(0, 120) + "...",
                href: `/expertise-areas/${e!.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/expertise-areas"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
            >
              View all expertise areas
            </Link>
            <Link
              href="/network"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
            >
              Network directory
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl">All Expertise Areas</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Eight core areas of independent country expert evidence for UK asylum and immigration tribunals.
          </p>
          <div className="mt-8">
            <CardGrid
              items={expertiseAreas.map((e) => ({
                title: e.title,
                description: e.metaDescription.slice(0, 120) + "...",
                href: `/expertise-areas/${e.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl">Country Routing</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Route cases to jurisdiction-specific experts across our specialist network — overview pages with
            outbound links to dedicated country sites.
          </p>
          <div className="mt-8">
            <CardGrid
              items={countries.slice(0, 8).map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 100) + "...",
                href: `/countries/${c.slug}`,
              }))}
            />
          </div>
          <Link
            href="/countries"
            className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
          >
            View all countries
          </Link>
          <Link
            href="/network"
            className="ml-0 mt-3 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline sm:ml-6 sm:mt-8"
          >
            Network directory
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl">Expert Witness Services</h2>
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              href: `/expertise-areas/${s.expertiseSlug}`,
            }))}
          />
        </div>
      </section>

      <section className="bg-[#F5F7FA] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2C3E50] sm:text-2xl">Case Types</h2>
          <CardGrid
            items={caseTypes.slice(0, 6).map((c) => ({
              title: c.title,
              description: c.metaDescription.slice(0, 100) + "...",
              href: `/case-types/${c.slug}`,
            }))}
          />
          <Link
            href="/case-types"
            className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline"
          >
            View all case types
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
