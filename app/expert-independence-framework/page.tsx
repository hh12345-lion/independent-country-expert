import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const PAGE_DESCRIPTION =
  "Complete guide to independent country expert witness duties for UK solicitors — Ikarian Reefer, CPR Part 35, Practice Direction 2024, Adam Pipe 2025, assumed facts, and tribunal obligations.";

export const metadata = createMetadata({
  title:
    "Expert Independence Framework UK | CPR Part 35 & Ikarian Reefer Guide 2025–2026",
  description: PAGE_DESCRIPTION,
  path: "/expert-independence-framework",
});

const faqs = [
  {
    question: "What is the paramount duty of a country expert witness?",
    answer:
      "Under Ikarian Reefer [1993], country expert witnesses owe a paramount duty to the tribunal to provide independent, objective evidence — regardless of who instructs or pays them.",
  },
  {
    question: "Does CPR Part 35 apply to immigration tribunals?",
    answer:
      "Yes — CPR Part 35 governs expert evidence and is applied by analogy in UK immigration tribunal proceedings. The expert's overriding obligation is to assist the tribunal within their area of expertise.",
  },
  {
    question: "How does Adam Pipe 2025 affect country expert reports?",
    answer:
      "Adam Pipe October 2025 guidance requires experts to distinguish assumed facts from independent analysis, cite dated primary sources, and avoid advocacy language that damages tribunal credibility.",
  },
];

const frameworkComparison = [
  ["Ikarian Reefer [1993]", "Paramount duty to tribunal", "Independence over instructing party"],
  ["CPR Part 35", "Expert evidence rules (civil, applied by analogy)", "Assist tribunal; state instructions"],
  ["Practice Direction 2024", "Immigration tribunal expert procedure", "Report structure; 20-page default; exchange deadlines"],
  ["Adam Pipe Oct 2025", "Expert report quality guidance", "Assumed facts vs opinion; advocacy risk"],
];

const dutiesTable = [
  ["Paramount duty to tribunal", "Ikarian Reefer [1993]", "Expert must assist tribunal, not party"],
  ["Report structure and length", "Practice Direction 2024", "Default 20-page limit; mandatory sections"],
  ["Assumed facts vs opinion", "Adam Pipe Oct 2025", "Clear distinction required; no advocacy"],
  ["Source dating and methodology", "CPR Part 35; Adam Pipe 2025", "Dated primary sources; limitations stated"],
  ["Independence at oral evidence", "CPR Part 35.4", "Honest answers under cross-examination"],
  ["Joint expert meetings", "Practice Direction 2024", "Genuine agreement; no collusion"],
  ["Legal Aid compliance", "LAA prior authority", "Fee rates; instruction before exchange"],
];

export default function ExpertIndependenceFrameworkPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Expert Independence Framework" },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={faqs}
        extra={articleSchema({
          headline:
            "Independent Country Expert Witnesses in UK Immigration Tribunals: A Complete Guide for Solicitors",
          description: PAGE_DESCRIPTION,
          path: "/expert-independence-framework",
        })}
      />
      <PageShell
        title="Independent Country Expert Witnesses in UK Immigration Tribunals: A Complete Guide for Solicitors"
        subtitle="Ikarian Reefer, CPR Part 35, Practice Direction 2024, and Adam Pipe 2025 — the definitive independence framework for UK asylum practitioners."
        breadcrumbs={crumbs}
      >
        <HubPageLinks showIndependence={false} />

        <h2
          id="ikarian-reefer"
          className="scroll-mt-24 text-xl font-bold text-[#191B22]"
        >
          What Independence Means for Country Experts
        </h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Under Ikarian Reefer [1993] 2 Lloyd&apos;s Rep 68, country expert witnesses owe a paramount duty to the
          tribunal to provide independent, objective evidence — regardless of who instructs or pays them. Immigration
          tribunal country experts must not advocate for the instructing party. This duty is the defining quality
          that distinguishes expert evidence from partisan country reporting.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Tribunals in 2025–2026 increasingly scrutinise expert reports for advocacy language, conclusions that follow
          inexorably from assumed facts without independent verification, and reliance on outdated or generic Home
          Office CPIN material without profile-specific analysis. Solicitors who instruct truly independent country
          experts strengthen their clients&apos; cases; those who instruct partisan experts risk reduced tribunal
          weight and adverse costs consequences.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">The Independence Framework — Key Duties Table</h2>
        <div className="mt-6">
        <ResponsiveTableWrap label="Swipe to view independence duties table">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#C9C4BA] bg-[#E8EDF2]">
                <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Duty</th>
                <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Legal Source</th>
                <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">2025–2026 Tribunal Expectation</th>
              </tr>
            </thead>
            <tbody>
              {dutiesTable.map(([duty, source, expectation]) => (
                <tr key={duty} className="border-b border-[#C9C4BA]">
                  <td className="px-3 py-3 font-medium text-[#191B22] sm:px-4">{duty}</td>
                  <td className="px-3 py-3 text-[#3A4148] sm:px-4">{source}</td>
                  <td className="px-3 py-3 text-[#3A4148] sm:px-4">{expectation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">
          Three-Framework Comparison for Country Experts
        </h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          UK immigration tribunal country experts must comply with Ikarian Reefer independence principles, CPR Part 35
          expert duties, and Practice Direction 2024 procedural requirements — with Adam Pipe 2025 guidance on
          assumed facts and advocacy risk.
        </p>
        <div className="mt-6">
          <ResponsiveTableWrap label="Swipe to view framework comparison table">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#C9C4BA] bg-[#E8EDF2]">
                  <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Framework</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Scope</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#191B22] sm:px-4">Country Expert Application</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map(([framework, scope, application]) => (
                  <tr key={framework} className="border-b border-[#C9C4BA]">
                    <td className="px-3 py-3 font-medium text-[#191B22] sm:px-4">{framework}</td>
                    <td className="px-3 py-3 text-[#3A4148] sm:px-4">{scope}</td>
                    <td className="px-3 py-3 text-[#3A4148] sm:px-4">{application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2
          id="cpr-part-35"
          className="scroll-mt-24 mt-10 text-xl font-bold text-[#191B22]"
        >
          CPR Part 35 Applied to Immigration Tribunals
        </h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          CPR Part 35 governs expert evidence and is applied by analogy in UK immigration tribunal proceedings. The
          expert&apos;s overriding obligation is to assist the tribunal within their area of expertise. Part 35.3
          requires experts to provide independent assistance uninfluenced by the pressures of litigation. Part 35.4
          requires experts to state the substance of all material instructions, whether written or oral.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          For country experts, this means reports must address the tribunal&apos;s questions honestly, cite sources
          transparently, state limitations clearly, and distinguish between assumed facts provided by the instructing
          solicitor and independent expert analysis. Experts who have only ever been instructed by claimant firms
          raise legitimate independence concerns that respondents and tribunals will explore at hearing.
        </p>

        <h2
          id="practice-direction-2024"
          className="scroll-mt-24 mt-10 text-xl font-bold text-[#191B22]"
        >
          Practice Direction 2024 — Report Requirements
        </h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Immigration Tribunal Practice Direction 2024 introduces mandatory expert report structure, a default
          20-page limit, independence standards, and strict exchange deadlines. Reports must include: the expert&apos;s
          qualifications and experience; the substance of instructions; a statement of truth; a declaration of
          compliance with the expert&apos;s duty to the tribunal; and clear identification of sources.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Non-compliant expert evidence may be refused or given reduced weight at hearing. Solicitors should ensure
          letters of instruction comply with PD 2024 requirements and that experts understand mandatory sections
          before commencing work. Late exchange of expert reports risks adjournment applications and adverse
          inference.
        </p>

        <h2
          id="adam-pipe-2025"
          className="scroll-mt-24 mt-10 text-xl font-bold text-[#191B22]"
        >
          Adam Pipe Guidance 2025 — Assumed Facts and Advocacy Risk
        </h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          October 2025 guidance by Adam Pipe of No.8 Chambers reinforces that experts must distinguish assumed facts
          from independent analysis. Reports that read as advocacy — conclusions following inexorably from assumed
          facts without independent verification — damage credibility and may result in the tribunal giving the
          report reduced weight or disregarding it entirely.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          The guidance identifies red flags including: reports that merely restate CPIN content; conclusions that
          mirror the instructing party&apos;s case theory without independent analysis; failure to cite dated primary
          sources; and language suggesting the expert is advancing the client&apos;s case rather than assisting the
          tribunal. Country experts must engage with adverse material and give honest assessments even where they do
          not support the instructing party&apos;s position.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">Country Expert vs Home Office CPIN</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Home Office Country Policy Information Notes (CPINs) provide generic country policy summaries based on
          Home Office country of origin information. They are the starting point for country evidence but are not
          binding on tribunals. Independent country experts address the individual appellant&apos;s profile, region,
          and current conditions with dated primary sources — going beyond CPIN summaries with profile-specific
          methodology.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          The expert&apos;s role is not to reproduce CPIN content but to provide independent analysis of whether the
          appellant&apos;s specific circumstances create a real risk, applying current field research and source
          citations. Where CPIN material is outdated or fails to address the appellant&apos;s profile, the
          independent expert provides the dated primary source analysis tribunals require.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">Oral Evidence and Cross-Examination</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          At FTT and UT hearings, country experts confirm their report, may give supplementary oral evidence within
          their expertise, and face cross-examination from both parties. Independence is tested under questioning —
          experts must give honest answers even where they do not support the client&apos;s case.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Practice Direction 2024 governs joint expert meetings before hearings. Experts must engage genuinely,
          identify areas of agreement and disagreement, and produce joint statements reflecting authentic positions.
          Solicitors should prepare experts for cross-examination by ensuring consistency between written and oral
          testimony and rehearsing methodology and source selection.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">Choosing an Independent Country Expert</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Solicitors should assess: field expertise in the relevant country; language capability; prior tribunal
          acceptance record; methodology transparency; and demonstrable independence in previous reports and oral
          evidence. Review previous reports for advocacy language. Check whether the expert has been instructed by
          both claimant and respondent firms. Evaluate whether conclusions follow inexorably from assumed facts.
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Independent Country Expert coordinates instruction across the network, routing cases to jurisdiction-specific
          specialists with demonstrated independence and field expertise. Submit your case details via our contact
          form for routing to the appropriate expert within one business day.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#191B22]">Network Routing by Jurisdiction</h2>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Independent Country Expert coordinates instruction across the specialist network — Somalia Expert, Nigeria
          Expert, Pakistan Country Expert, Afghanistan Country Expert, Albania Expert Witness, Africa Expert Witness,
          South Asia Expert, and thematic sites for persecution analysis (Persecution Expert), human rights frameworks
          (Human Rights Experts), witness taxonomy (Immigration Expert Witnesses), and report standards
          (Immigration Expert Reports).
        </p>
        <p className="mt-4 text-[#3A4148] leading-relaxed">
          This hub-and-spoke model ensures solicitors instruct experts with genuine jurisdiction-specific expertise
          while maintaining the independence standards that UK tribunals require. Visit our{" "}
          <Link href="/network" className="font-semibold text-[#0B6E99] hover:underline">
            network directory
          </Link>{" "}
          for outbound links to all specialist sites.
        </p>

        <p className="mt-4 text-[#3A4148] leading-relaxed">
          Related definitions:{" "}
          <Link href="/glossary#ikarian-reefer" className="font-semibold text-[#0B6E99] hover:underline">
            Ikarian Reefer glossary
          </Link>
          ,{" "}
          <Link href="/glossary#cpr-part-35" className="font-semibold text-[#0B6E99] hover:underline">
            CPR Part 35
          </Link>
          , and{" "}
          <Link href="/report-standards" className="font-semibold text-[#0B6E99] hover:underline">
            report standards
          </Link>
          .
        </p>

        <FAQSection faqs={faqs} title="Expert Independence: Frequently Asked Questions" />

        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#0B6E99] px-6 py-3 font-semibold text-white hover:bg-[#085578] sm:w-auto"
        >
          Contact Us
        </Link>
      </PageShell>
    </>
  );
}
