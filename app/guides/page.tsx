import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Country Expert Witness Guides for UK Solicitors | 2025–2026",
  description:
    "Solicitor guides on independent country expert evidence — independence, instruction, CPIN vs expert reports, oral evidence, and Legal Aid fees.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Solicitor Guides: Independent Country Expert Evidence"
        subtitle="Practical guides for UK immigration practitioners on instructing and using independent country expert witnesses."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <CardGrid
          items={guides.map((g) => ({
            title: g.h1.split(":")[0],
            description: g.metaDescription.slice(0, 120) + "...",
            href: `/guides/${g.slug}`,
          }))}
        />
        <Link href="/expert-independence-framework" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#0B6E99] hover:underline">
          Expert Independence Framework (pillar guide)
        </Link>
      </PageShell>
    </>
  );
}
