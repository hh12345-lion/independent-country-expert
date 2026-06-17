import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_REGION_NOTICE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Instruct an Independent Country Expert UK | Contact",
  description:
    "Instruct an independent country expert witness for UK asylum tribunals only. Submit case details for routing to the right jurisdiction-specific specialist. Response within one business day.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Contact Independent Country Expert (UK)"
        subtitle="Submit your case details for confidential routing to the right jurisdiction-specific expert — UK tribunals only."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          {SITE_REGION_NOTICE}
        </p>
        <p className="mb-8 text-[#374151] leading-relaxed">
          Complete the form below and we will respond within one business day with proposed expert, scope, and
          timeline. For urgent instructions, include your hearing date. You can also email us directly at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#B87333] hover:underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
        <ContactForm />
      </PageShell>
    </>
  );
}
