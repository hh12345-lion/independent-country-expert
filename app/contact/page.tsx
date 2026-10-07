import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL, SITE_REGION_NOTICE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Route a case | Independent Country Expert UK",
  description:
    "Instruct an independent country expert witness for UK asylum tribunals only. Submit a short brief for routing to the right jurisdiction-specific specialist.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Route a case"
        subtitle="Short brief. We reply with proposed expert, scope, and timeline."
        breadcrumbs={crumbs}
      >
        <p className="mb-2 max-w-xl text-sm text-[#364142]">{SITE_REGION_NOTICE}</p>
        <p className="mb-10 max-w-xl text-[#364142] leading-relaxed">
          Prefer email?{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium text-[#406383] hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
        <ContactForm />
      </PageShell>
    </>
  );
}
