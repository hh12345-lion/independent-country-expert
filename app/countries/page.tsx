import { HubPageLinks } from "@/components/ui/HubPageLinks";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { countries } from "@/data/countries";

export const metadata = createMetadata({
  title: "Country Expert Witness by Jurisdiction UK | Network Routing",
  description:
    "Route asylum cases to jurisdiction-specific independent country experts. Somalia, Nigeria, Pakistan, Afghanistan, and 8 more countries with outbound links to specialist network sites.",
  path: "/countries",
});

export default function CountriesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Countries" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Independent Country Expert Witness by Jurisdiction"
        subtitle="Solicitor-focused country overviews with routing to dedicated network sites for deep country content."
        breadcrumbs={crumbs}
      >
        <HubPageLinks />
        <p className="mb-8 text-[#374151] leading-relaxed">
          Each country page provides a brief overview of asylum complexity and key profiles, with a prominent
          outbound link to the dedicated network site for country-deep content. We do not duplicate Somalia MOJ
          analysis, Pakistan Ahmadi profiles, or other jurisdiction-specific deep content — we route you to the
          right specialist.
        </p>
        <CardGrid
          items={countries.map((c) => ({
            title: c.title,
            description: c.metaDescription.slice(0, 120) + "...",
            href: `/countries/${c.slug}`,
          }))}
        />
        <Link href="/expert-independence-framework" className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline">
          Expert Independence Framework
        </Link>
        <Link href="/network" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#B87333] hover:underline sm:ml-6">
          View full network directory
        </Link>
      </PageShell>
    </>
  );
}
