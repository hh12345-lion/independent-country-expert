import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { countries, getCountry } from "@/data/countries";
import { getCountryRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return createMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/countries/${slug}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Countries", href: "/countries" },
    { label: country.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={country.faqs} />
      <PageShell title={country.h1} breadcrumbs={crumbs}>
        {country.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#33403A] leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-lg font-bold text-[#0F241C]">Key Asylum Profiles</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {country.keyProfiles.map((profile) => (
            <li
              key={profile}
              className="rounded-[8px] border border-[#B8C4BE] bg-[#E7ECE8] px-3 py-2 text-sm text-[#33403A]"
            >
              {profile}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[8px] border border-[#B8C4BE] bg-[#E7ECE8] p-6">
          <h2 className="text-lg font-bold text-[#0F241C]">
            Specialist {country.title} Expert Evidence
          </h2>
          <p className="mt-2 text-[#33403A]">
            For comprehensive {country.title}-specific asylum profiles, CPIN analysis, and deep country content,
            visit our dedicated network site. This page provides a solicitor-focused overview — detailed MOJ
            analysis, profile pages, and country-deep content are maintained on the specialist site.
          </p>
          <a
            href={country.outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-[8px] bg-[#2B7A78] px-6 py-3 font-semibold text-white hover:bg-[#236663]"
          >
            Visit {country.outboundLabel} →
          </a>
          <p className="mt-2 text-sm text-[#33403A]">
            {country.networkSite}
          </p>
        </div>

        <FAQSection faqs={country.faqs} title={`${country.title}: Frequently Asked Questions`} />
        <RelatedLinks links={getCountryRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
