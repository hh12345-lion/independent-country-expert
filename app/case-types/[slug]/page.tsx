import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes, getCaseType } from "@/data/case-types";
import { getExpertiseArea } from "@/data/expertise-areas";
import { getCaseTypeRelatedLinks } from "@/data/related-links";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) return {};
  return createMetadata({
    title: ct.metaTitle,
    description: ct.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ct = getCaseType(slug);
  if (!ct) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Case Types", href: "/case-types" },
    { label: ct.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={ct.faqs} />
      <PageShell title={ct.h1} breadcrumbs={crumbs}>
        {ct.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#3A4148] leading-relaxed">
            {p}
          </p>
        ))}
        <FAQSection faqs={ct.faqs} />
        <h3 className="mt-8 font-semibold text-[#191B22]">Related expertise areas</h3>
        <ul className="mt-2 space-y-1">
          {ct.relatedExpertise.map((s) => {
            const area = getExpertiseArea(s);
            return (
              <li key={s}>
                <Link href={`/expertise-areas/${s}`} className="text-[#0B6E99] hover:underline">
                  {area?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>
        <RelatedLinks links={getCaseTypeRelatedLinks(slug)} title="Related resources" />
      </PageShell>
    </>
  );
}
