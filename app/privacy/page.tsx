import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy | Independent Country Expert",
  description: "Privacy policy for IndependentCountryExpert.com",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}>
      <p className="text-[#3A4148] leading-relaxed">
        IndependentCountryExpert.com connects UK solicitors with independent country expert witnesses across our
        specialist network. We collect personal data submitted through our contact form (name, law firm, email,
        phone, and case details) solely to respond to instruction requests and route cases to appropriate experts.
      </p>
      <p className="mt-4 text-[#3A4148] leading-relaxed">
        Contact form submissions are processed via our secure lead API and forwarded to our notification
        service. We retain data only as long as necessary to fulfil your request. We do not sell personal data.
        You may request deletion by emailing {SITE_EMAIL}. Optional cookies and tracking scripts load only after
        you grant consent via our cookie banner or Cookie Settings in the footer.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#191B22]">Your Rights (UK GDPR)</h2>
      <p className="mt-4 text-[#3A4148] leading-relaxed">
        You have the right to access, rectify, erase, restrict processing, and port your personal data. You may
        withdraw consent for non-essential cookies at any time via Cookie Settings in the footer. To exercise your
        rights, contact {SITE_EMAIL}.
      </p>
    </PageShell>
  );
}
