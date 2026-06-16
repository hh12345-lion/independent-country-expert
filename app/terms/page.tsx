import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Use | Independent Country Expert",
  description: "Terms of use for IndependentCountryExpert.com",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}>
      <p className="text-[#374151] leading-relaxed">
        IndependentCountryExpert.com is an information and instruction routing service connecting UK immigration
        solicitors with independent country expert witnesses. We are not a law firm and do not provide legal advice.
        Content on this site is for general information purposes and does not constitute legal advice.
      </p>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Expert witness services are provided by independent experts within our network, not by
        IndependentCountryExpert.com directly. Fees, scope, and timelines are agreed between the instructing
        solicitor and the appointed expert.
      </p>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Outbound links to network sites are provided for convenience. We are not responsible for the content of
        third-party sites. For enquiries, contact {SITE_EMAIL}.
      </p>
    </PageShell>
  );
}
