import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { HubPageLinks } from "@/components/ui/HubPageLinks";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "CPIN & Country Guidance Framework UK | Asylum Solicitor Guide",
  description:
    "Guide to Home Office CPINs, Country Guidance cases, EUAA guidance, and independent expert reports for UK asylum solicitors. Framework comparison and challenge methodology.",
  path: "/cpin-country-guidance",
});

const frameworkTable = [
  ["Home Office CPIN", "Generic country policy", "Starting point; may be challenged"],
  ["Country Guidance (CG) cases", "Tribunal-wide precedent", "Binding on FTT unless distinguished"],
  ["EUAA Country Guidance", "EU context; persuasive UK", "Actors of protection methodology"],
  ["Independent expert report", "Individual appellant", "Profile-specific; dated sources"],
  ["CPR Part 35 / PD 2024", "All expert evidence", "Independence and structure"],
];

const cpinVsExpertTable = [
  ["Source", "Home Office country of origin information", "Independent field research and primary sources"],
  ["Scope", "Generic national policy summary", "Individual appellant profile and region"],
  ["Binding weight", "Persuasive; not binding on tribunal", "Expert evidence weighed on methodology"],
  ["Independence", "Home Office policy document", "Paramount duty to tribunal (Ikarian Reefer)"],
  ["Currency", "May lag current conditions", "Dated sources at report date required"],
  ["Challenge use", "Starting point for respondent", "Rebuttal with profile-specific analysis"],
];

const cpinFaqs = [
  {
    question: "Is a Home Office CPIN binding on the tribunal?",
    answer:
      "No — CPINs provide generic country policy summaries and are a starting point for country evidence. Tribunals weigh independent expert reports with dated primary sources and profile-specific analysis.",
  },
  {
    question: "When should solicitors instruct a CPIN challenge expert?",
    answer:
      "When the CPIN does not address the appellant's profile, relies on outdated sources, or mischaracterises country conditions. Independent experts provide dated primary source rebuttal.",
  },
  {
    question: "What is the difference between CPIN and Country Guidance?",
    answer:
      "CPINs are Home Office policy documents. Country Guidance (CG) cases are Upper Tribunal decisions binding on First-tier Tribunals unless distinguished. Both differ from independent expert reports.",
  },
];

export default function CpinCountryGuidancePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "CPIN & Country Guidance" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={cpinFaqs} />
      <PageShell
        title="CPIN & Country Guidance Framework: A Guide for UK Asylum Solicitors"
        subtitle="How Home Office CPINs, Country Guidance, and independent expert reports interact in tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <p className="text-[#33403A] leading-relaxed">
          UK asylum tribunals weigh multiple sources of country evidence. Understanding how Home Office CPINs,
          binding Country Guidance decisions, EUAA guidance, and independent expert reports interact is essential
          for effective tribunal submissions. This guide provides the framework — country-specific CG analysis is
          maintained on dedicated network sites.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0F241C]">Framework Comparison</h2>
        <div className="mt-6">
          <ResponsiveTableWrap label="Swipe to view framework table">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#B8C4BE] bg-[#E7ECE8]">
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Framework</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Applies To</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Key Principle</th>
                </tr>
              </thead>
              <tbody>
                {frameworkTable.map(([framework, applies, principle]) => (
                  <tr key={framework} className="border-b border-[#B8C4BE]">
                    <td className="px-3 py-3 font-medium text-[#0F241C] sm:px-4">{framework}</td>
                    <td className="px-3 py-3 text-[#33403A] sm:px-4">{applies}</td>
                    <td className="px-3 py-3 text-[#33403A] sm:px-4">{principle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#0F241C]">CPIN vs Independent Country Expert Report</h2>
        <div className="mt-6">
          <ResponsiveTableWrap label="Swipe to view CPIN vs expert comparison">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#B8C4BE] bg-[#E7ECE8]">
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Dimension</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Home Office CPIN</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#0F241C] sm:px-4">Independent Expert Report</th>
                </tr>
              </thead>
              <tbody>
                {cpinVsExpertTable.map(([dimension, cpin, expert]) => (
                  <tr key={dimension} className="border-b border-[#B8C4BE]">
                    <td className="px-3 py-3 font-medium text-[#0F241C] sm:px-4">{dimension}</td>
                    <td className="px-3 py-3 text-[#33403A] sm:px-4">{cpin}</td>
                    <td className="px-3 py-3 text-[#33403A] sm:px-4">{expert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#0F241C]">Country-Specific Guidance Resources</h2>
        <p className="mt-4 text-[#33403A] leading-relaxed">
          Country-specific Country Guidance and CPIN analysis is maintained on dedicated network sites. Do not
          duplicate deep country content here — route to the appropriate specialist:
        </p>
        <ul className="mt-4 space-y-2 text-[#33403A]">
          <li>
            <a href="https://www.somaliaexpert.com/moj-country-guidance" target="_blank" rel="noopener noreferrer" className="text-[#2B7A78] hover:underline">
              Somalia MOJ Country Guidance
            </a>{" "}
            — Somalia Expert
          </li>
          <li>
            <a href="https://www.pakistancountryexpert.com/cpin-country-guidance" target="_blank" rel="noopener noreferrer" className="text-[#2B7A78] hover:underline">
              Pakistan CPIN & MN Country Guidance
            </a>{" "}
            — Pakistan Country Expert
          </li>
          <li>
            <a href="https://www.nigeriaexpert.com/cpin-country-guidance" target="_blank" rel="noopener noreferrer" className="text-[#2B7A78] hover:underline">
              Nigeria CPIN & Country Guidance
            </a>{" "}
            — Nigeria Expert
          </li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/guides/cpin-vs-expert-report-guide" className="inline-flex min-h-[44px] items-center font-semibold text-[#2B7A78] hover:underline">
            CPIN vs Independent Expert Report guide
          </Link>
          <Link href="/expertise-areas/cpin-challenge-reports" className="inline-flex min-h-[44px] items-center font-semibold text-[#2B7A78] hover:underline">
            CPIN challenge expertise
          </Link>
        </div>

        <FAQSection faqs={cpinFaqs} title="CPIN & Country Guidance: Frequently Asked Questions" />
      </PageShell>
    </>
  );
}
