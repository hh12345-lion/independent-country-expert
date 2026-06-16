import { PageShell } from "@/components/layout/PageShell";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";

export const metadata = createMetadata({
  title: "Independent Country Expert Glossary UK | Asylum & Tribunal Terms",
  description:
    "30 definition-first terms for UK immigration practitioners: Ikarian Reefer, CPR Part 35, CPIN, Practice Direction 2024, Adam Pipe 2025, state protection, and more.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];
  const faqItems = glossaryTerms.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={faqItems} />
      <PageShell
        title="Independent Country Expert & Asylum Law Glossary"
        subtitle="30 definition-first terms for UK immigration practitioners."
        breadcrumbs={crumbs}
      >
        <GlossarySearch terms={glossaryTerms} />
      </PageShell>
    </>
  );
}
