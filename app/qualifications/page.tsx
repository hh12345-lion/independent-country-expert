import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Independent Country Expert Qualifications UK | Expert Witness Credentials",
  description:
    "Qualifications and credentials for independent country expert witnesses. Field expertise, language capability, tribunal acceptance, CPR Part 35 compliance, and independence indicators.",
  path: "/qualifications",
});

const qualifications = [
  "Deep country-specific field expertise in the relevant jurisdiction",
  "Relevant language capability for source assessment and identity analysis",
  "Academic and professional background in area studies, human rights, or related fields",
  "Prior tribunal acceptance record with demonstrated oral evidence experience",
  "Demonstrable independence in previous reports and cross-examination performance",
  "UNHCR, NGO, or government advisory experience where relevant to the jurisdiction",
  "Compliance with CPR Part 35 and Immigration Tribunal Practice Direction 2024",
  "Transparent methodology with dated primary source citation standards",
];

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Independent Country Expert Qualifications & Credentials"
        subtitle="What UK solicitors should assess when choosing an independent country expert witness."
        breadcrumbs={crumbs}
      >
        <p className="text-[#374151] leading-relaxed">
          Independent country experts across our network are assessed against rigorous qualification criteria.
          Under Ikarian Reefer and CPR Part 35, the expert&apos;s independence and methodology matter as much as
          their field knowledge. Solicitors should verify credentials before instruction.
        </p>
        <ul className="mt-8 space-y-4">
          {qualifications.map((q) => (
            <li key={q} className="flex gap-3 text-[#374151]">
              <span className="mt-1 text-[#B87333]" aria-hidden="true">✓</span>
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[#374151] leading-relaxed">
          Read our{" "}
          <Link href="/guides/choosing-country-expert-guide" className="font-semibold text-[#B87333] hover:underline">
            guide to choosing the right country expert
          </Link>{" "}
          and the{" "}
          <Link href="/expert-independence-framework" className="font-semibold text-[#B87333] hover:underline">
            Expert Independence Framework
          </Link>{" "}
          for detailed assessment criteria.
        </p>
      </PageShell>
    </>
  );
}
