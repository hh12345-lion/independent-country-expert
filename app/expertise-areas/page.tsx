import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { expertiseAreas } from "@/data/expertise-areas";

export const metadata = createMetadata({
  title: "Country Expert Witness Expertise Areas UK | Independent Reports",
  description:
    "Eight core areas of independent country expert evidence for UK asylum tribunals — country conditions, state protection, internal relocation, CPIN challenge, and more.",
  path: "/expertise-areas",
});

export default function ExpertiseAreasPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Expertise Areas" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Independent Country Expert Witness Expertise Areas"
        subtitle="Eight specialist areas of country expert evidence for UK immigration and asylum tribunals."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <p className="mb-8 text-[#374151] leading-relaxed">
          Independent Country Expert coordinates instruction across all core areas of country expert evidence.
          Each area requires CPR Part 35 compliance, Practice Direction 2024 structure, and demonstrable
          independence under Ikarian Reefer.
        </p>
        <CardGrid
          items={expertiseAreas.map((e) => ({
            title: e.title,
            description: e.metaDescription.slice(0, 140) + "...",
            href: `/expertise-areas/${e.slug}`,
          }))}
        />
        <Link href="/contact" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline">
          Instruct an expert
        </Link>
      </PageShell>
    </>
  );
}
