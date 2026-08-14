import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { HubPageLinks } from "@/components/ui/HubPageLinks";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Independent Country Expert Report Standards 2025–2026 | PD 2024",
  description:
    "Independent country expert report standards for UK immigration tribunals. Practice Direction 2024 structure, 20-page default, Adam Pipe 2025, source citation, and avoiding advocacy.",
  path: "/report-standards",
});

const checklistTable = [
  ["Mandatory report sections (PD 2024)", "Qualifications, instructions, opinion, statement of truth, duty declaration"],
  ["Default page limit", "20 pages unless tribunal directs otherwise"],
  ["Assumed facts distinction", "Clear separation per Adam Pipe 2025"],
  ["Source dating", "All sources dated; primary sources identified"],
  ["Independence declaration", "Paramount duty to tribunal stated"],
  ["Limitations stated", "Scope, assumptions, and gaps acknowledged"],
  ["Advocacy language avoided", "No partisan or case-advancing tone"],
  ["Exchange deadlines", "Confirmed with instructing solicitor before work begins"],
];

const reportFaqs = [
  {
    question: "What is the default page limit for country expert reports?",
    answer:
      "Practice Direction 2024 sets a default 20-page limit unless the tribunal directs otherwise or parties agree an extension. Reports exceeding this without justification may be refused or given reduced weight.",
  },
  {
    question: "What must a PD 2024 compliant expert report include?",
    answer:
      "Qualifications and experience, substance of instructions, expert opinion with reasons, statement of truth, declaration of compliance with the duty to the tribunal, and identification of all sources relied upon.",
  },
  {
    question: "How does Adam Pipe 2025 affect report standards?",
    answer:
      "Experts must distinguish assumed facts from independent opinion, cite dated primary sources, state limitations explicitly, and avoid advocacy language where conclusions follow inexorably from assumed facts.",
  },
];

export default function ReportStandardsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Report Standards" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={reportFaqs} />
      <PageShell
        title="Independent Country Expert Report Standards 2025–2026"
        subtitle="Practice Direction 2024 compliance, Adam Pipe 2025 requirements, and tribunal exchange standards."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <h2 className="text-xl font-bold text-[#191B22]">Independence-Focused Quality Checklist</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Independent country expert reports for UK immigration tribunals must meet Practice Direction 2024 structure,
          Adam Pipe 2025 assumed-facts requirements, and CPR Part 35 independence standards. Use this checklist when
          reviewing draft reports or instructing experts.
        </p>
        <div className="mt-6">
          <ResponsiveTableWrap label="Swipe to view report standards checklist">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#C9C4BA] bg-[#E8EDF2]">
                  <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Standard</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Requirement</th>
                </tr>
              </thead>
              <tbody>
                {checklistTable.map(([standard, requirement]) => (
                  <tr key={standard} className="border-b border-[#C9C4BA]">
                    <td className="px-3 py-3 font-medium text-[#191B22] sm:px-4">{standard}</td>
                    <td className="px-3 py-3 text-[#3A4148] sm:px-4">{requirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">Practice Direction 2024 Structure</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Immigration Tribunal Practice Direction 2024 mandates expert report structure for all country expert
          evidence. Reports must include: the expert&apos;s qualifications and relevant experience; the substance
          of all material instructions; the expert&apos;s opinion with reasons; a statement of truth; a declaration
          of compliance with the duty to the tribunal; and identification of all sources relied upon.
        </p>
        <h2 className="mt-8 text-xl font-bold text-[#191B22]">Adam Pipe 2025 Requirements</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          The October 2025 guidance requires clear distinction between assumed facts and independent expert opinion.
          Experts must cite dated primary sources, state limitations and assumptions explicitly, and avoid advocacy
          language. Reports where conclusions follow inexorably from assumed facts without independent verification
          are identified as non-compliant.
        </p>
        <p className="mt-6 text-[#3A4148]">
          For the complete independence framework, see{" "}
          <Link href="/expert-independence-framework" className="font-semibold text-[#0B6E99] hover:underline">
            Expert Independence Framework
          </Link>
          . For report methodology standards across the network, visit{" "}
          <a
            href="https://www.immigrationexpertreports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0B6E99] hover:underline"
          >
            Immigration Expert Reports
          </a>
          .
        </p>

        <FAQSection faqs={reportFaqs} title="Report Standards: Frequently Asked Questions" />
      </PageShell>
    </>
  );
}
