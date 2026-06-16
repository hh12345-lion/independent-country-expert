import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Independent Country Expert Witness Services UK | Asylum Tribunals",
  description:
    "Eight independent country expert witness services for UK asylum tribunals — country conditions, state protection, internal relocation, CPIN challenge, and oral evidence.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Independent Country Expert Witness Services"
        subtitle="CPR Part 35 and Practice Direction 2024 compliant reports routed to jurisdiction-specific specialists."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Independent Country Expert provides eight specialist services for UK immigration solicitors, law firms,
          and Legal Aid practitioners. All reports are prepared by qualified country experts with demonstrable
          independence and current primary source knowledge.
        </p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/expertise-areas/${s.expertiseSlug}`,
          }))}
        />
        <p className="mt-8 text-[#374151]">
          <Link href="/how-to-instruct" className="font-semibold text-[#B87333] hover:underline">
            How to instruct
          </Link>
          {" · "}
          <Link href="/contact" className="font-semibold text-[#B87333] hover:underline">
            Contact us
          </Link>
        </p>
      </PageShell>
    </>
  );
}
