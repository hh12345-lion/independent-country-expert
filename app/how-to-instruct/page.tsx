import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Independent Country Expert UK | Step-by-Step",
  description:
    "Step-by-step guide for UK solicitors on instructing an independent country expert witness. Letter of instruction, Legal Aid prior authority, PD 2024, and network routing.",
  path: "/how-to-instruct",
});

const steps = [
  {
    n: 1,
    title: "Identify Jurisdiction and Profile",
    body: "Determine the appellant's country of origin and specific asylum profile. This determines which network specialist to route the instruction to and which CPINs are relevant.",
  },
  {
    n: 2,
    title: "Legal Aid or Privately Funded?",
    body: "Confirm funding status. Legal Aid cases require prior authority from the LAA before instruction. Privately funded cases follow agreed fee schedules.",
  },
  {
    n: 3,
    title: "Apply for LAA Prior Authority (if Legal Aid)",
    body: "Apply with expert CV, proposed scope, estimated hours, and fee within LAA rates. Do not instruct before authority is granted.",
  },
  {
    n: 4,
    title: "Submit Instruction Request",
    body: "Use our contact form specifying country/jurisdiction, expertise needed, case type, and funding. We route to the appropriate network specialist within one business day.",
  },
  {
    n: 5,
    title: "Letter of Instruction",
    body: "Provide a detailed letter specifying the expert's duty to the tribunal, questions to address, assumed facts (clearly distinguished), hearing date, and relevant CPINs. Comply with Practice Direction 2024 requirements.",
  },
  {
    n: 6,
    title: "Provide All Relevant Materials",
    body: "Include screening record, asylum interview, refusal letter, witness statement, previous expert reports, and relevant CPINs. Do not withhold adverse material.",
  },
  {
    n: 7,
    title: "Report Exchange and Oral Evidence",
    body: "Confirm tribunal exchange deadlines. Prepare the expert for oral evidence and cross-examination if directed. Ensure consistency between written and oral testimony.",
  },
];

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct an Independent Country Expert"
        subtitle="Seven steps for UK solicitors instructing country expert witnesses in asylum and immigration proceedings."
        breadcrumbs={crumbs}
      >
        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C3E50] text-lg font-bold text-white">
                {step.n}
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#2C3E50]">{step.title}</h2>
                <p className="mt-2 text-[#374151] leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <RelatedLinks
          links={[
            { label: "Expert Independence Framework", href: "/expert-independence-framework" },
            { label: "Report Standards", href: "/report-standards" },
            { label: "Legal Aid Guide", href: "/guides/legal-aid-country-expert-guide" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded-[8px] bg-[#B87333] px-6 py-3 font-semibold text-white hover:bg-[#9A6129]"
        >
          Instruct an Expert
        </Link>
      </PageShell>
    </>
  );
}
