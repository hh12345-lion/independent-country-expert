import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { regions, getRegion } from "@/data/regions";
import { getRegionRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return regions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) return {};
  return createMetadata({
    title: region.metaTitle,
    description: region.metaDescription,
    path: `/regions/${slug}`,
  });
}

export default async function RegionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Regions", href: "/regions" },
    { label: region.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={region.faqs} />
      <PageShell title={region.h1} breadcrumbs={crumbs}>
        {region.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#33403A] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-lg font-bold text-[#0F241C]">Sub-Regions & Countries</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {region.subRegions.map((sub) => (
            <li
              key={sub}
              className="rounded-[8px] border border-[#B8C4BE] bg-[#E7ECE8] px-3 py-2 text-sm text-[#33403A]"
            >
              {sub}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[8px] border border-[#B8C4BE] bg-[#E7ECE8] p-6">
          <h2 className="text-lg font-bold text-[#0F241C]">Regional Expert Network</h2>
          <p className="mt-2 text-[#33403A]">
            For specialist regional expert evidence and country-deep content, visit our dedicated network site.
          </p>
          <a
            href={region.outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-[8px] bg-[#2B7A78] px-6 py-3 font-semibold text-white hover:bg-[#236663]"
          >
            Visit {region.outboundLabel} →
          </a>
        </div>

        <FAQSection faqs={region.faqs} />
        <RelatedLinks links={getRegionRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
