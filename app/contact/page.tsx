import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_REGION_NOTICE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Instruct an Independent Country Expert UK | Contact",
  description:
    "Instruct an independent country expert witness for UK asylum tribunals only. Submit a short brief for routing to the right jurisdiction-specific specialist. Response within one business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Instruct an expert"
        subtitle="Short brief. We reply within one business day with proposed expert, scope, and timeline."
        breadcrumbs={crumbs}
      >
        <p className="mb-2 max-w-xl text-sm text-[#33403A]">{SITE_REGION_NOTICE}</p>
        <p className="mb-10 max-w-xl text-[#33403A] leading-relaxed">
          Prefer email?{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-[#2B7A78] hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
        <ContactForm />
      </PageShell>
    </>
  );
}
