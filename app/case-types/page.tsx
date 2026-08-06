import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Country Expert Witness Case Types UK | FTT, UT, Deportation",
  description:
    "Independent country expert witness evidence for all UK immigration case types — FTT asylum appeals, UT, deportation, fresh claims, CG challenges, and SJE directions.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Independent Country Expert Witness by Case Type"
        subtitle="Expert evidence for every stage of UK immigration and asylum proceedings."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.metaDescription.slice(0, 120) + "...",
            href: `/case-types/${c.slug}`,
          }))}
        />
        <Link href="/how-to-instruct" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#2B7A78] hover:underline">
          How to instruct
        </Link>
      </PageShell>
    </>
  );
}
