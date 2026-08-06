import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { regions } from "@/data/regions";

export const metadata = createMetadata({
  title: "Regional Country Expert Witness UK | Africa, South Asia, Middle East",
  description:
    "Regional independent country expert witness routing for UK asylum tribunals. Africa, South Asia, Middle East & Central Asia, Europe & Balkans.",
  path: "/regions",
});

export default function RegionsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Regions" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Regional Independent Country Expert Witness Coverage"
        subtitle="Pan-regional routing to jurisdiction-specific specialists across four major asylum regions."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <CardGrid
          items={regions.map((r) => ({
            title: r.title,
            description: r.metaDescription.slice(0, 120) + "...",
            href: `/regions/${r.slug}`,
          }))}
        />
        <Link href="/countries" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#2B7A78] hover:underline">
          Browse by country
        </Link>
      </PageShell>
    </>
  );
}
