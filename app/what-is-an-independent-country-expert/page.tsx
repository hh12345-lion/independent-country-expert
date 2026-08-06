import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is an Independent Country Expert? | UK Immigration Tribunal Role",
  description:
    "An independent country expert provides objective country condition evidence to UK immigration tribunals — paramount duty to the tribunal under Ikarian Reefer, beyond Home Office CPIN.",
  path: "/what-is-an-independent-country-expert",
});

export default function WhatIsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What Is an Independent Country Expert?" },
  ];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is an Independent Country Expert?"
        subtitle="The tribunal-duty role of country expert witnesses in UK asylum and immigration proceedings — United Kingdom tribunals only."
        breadcrumbs={crumbs}
      >
        <p className="text-[#33403A] leading-relaxed">
          An independent country expert is a specialist who provides objective country condition evidence to UK
          immigration tribunals. Unlike partisan country reporting or generic Home Office CPIN summaries, the
          independent country expert assesses conditions in the appellant&apos;s country of origin as they apply
          to the individual&apos;s specific profile — with dated primary sources and transparent methodology.
        </p>
        <p className="mt-4 text-[#33403A] leading-relaxed">
          Under Ikarian Reefer [1993] 2 Lloyd&apos;s Rep 68, country expert witnesses owe a paramount duty to the
          tribunal to provide independent, objective evidence — regardless of who instructs or pays them. This
          duty is the defining quality that distinguishes expert evidence from advocacy. Immigration tribunal
          country experts must not advocate for the instructing party.
        </p>
        <h2 className="mt-8 text-xl font-bold text-[#0F241C]">What Independent Country Experts Do</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#33403A]">
          <li>Assess country conditions relevant to the appellant&apos;s specific profile and region</li>
          <li>Analyse state protection — whether authorities are willing and able to protect the appellant</li>
          <li>Evaluate internal relocation viability for the individual appellant</li>
          <li>Challenge or supplement Home Office CPIN positions with dated primary sources</li>
          <li>Provide oral evidence at FTT and UT hearings under cross-examination</li>
          <li>Maintain independence under CPR Part 35 and Practice Direction 2024</li>
        </ul>
        <h2 className="mt-8 text-xl font-bold text-[#0F241C]">Independent vs Generic Country Evidence</h2>
        <p className="mt-4 text-[#33403A] leading-relaxed">
          Home Office CPINs provide generic country policy. Independent country experts go further — addressing
          the appellant&apos;s clan, ethnicity, political associations, sexuality, gender, and regional origin with
          expert analysis that tribunals can weigh alongside Home Office country evidence. In 2025–2026, tribunals
          increasingly push back on generic or copy-paste country reports that lack profile-specific methodology.
        </p>
        <p className="mt-4 text-[#33403A] leading-relaxed">
          Independent Country Expert coordinates instruction across a specialist network, routing cases to
          jurisdiction-specific experts while maintaining the independence standards UK tribunals require. Read our{" "}
          <Link href="/expert-independence-framework" className="font-semibold text-[#2B7A78] hover:underline">
            Expert Independence Framework
          </Link>{" "}
          for the complete solicitor&apos;s guide.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[8px] bg-[#2B7A78] px-6 py-3 font-semibold text-white hover:bg-[#236663]"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
