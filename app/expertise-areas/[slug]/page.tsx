import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { expertiseAreas, getExpertiseArea } from "@/data/expertise-areas";
import { getAllExpertiseFaqs } from "@/data/expertise-faq-extra";
import { getExpertiseRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return expertiseAreas.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);
  if (!area) return {};
  return createMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/expertise-areas/${slug}`,
  });
}

export default async function ExpertiseAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getExpertiseArea(slug);
  if (!area) notFound();

  const allFaqs = getAllExpertiseFaqs(slug, area.faqs);

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Expertise Areas", href: "/expertise-areas" },
    { label: area.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={allFaqs} />
      <PageShell title={area.h1} breadcrumbs={crumbs}>
        {area.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#33403A] leading-relaxed">
            {p}
          </p>
        ))}
        {area.relatedExpertise.length > 0 && (
          <>
            <h2 className="mt-8 text-lg font-bold text-[#0F241C]">Related Expertise</h2>
            <ul className="mt-4 space-y-2">
              {area.relatedExpertise.map((s) => {
                const related = getExpertiseArea(s);
                return (
                  <li key={s}>
                    <Link
                      href={`/expertise-areas/${s}`}
                      className="inline-flex min-h-[44px] items-center text-[#2B7A78] hover:underline"
                    >
                      {related?.title ?? s}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <RelatedLinks links={getExpertiseRelatedLinks(slug)} />
      </PageShell>
      <div className="border-t border-[#B8C4BE] bg-[#E7ECE8]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <FAQSection
            faqs={allFaqs}
            title={`${area.title}: Frequently Asked Questions`}
            variant="full"
          />
        </div>
      </div>
    </>
  );
}
