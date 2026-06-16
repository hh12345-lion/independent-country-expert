import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { HubPageLinks } from "@/components/ui/HubPageLinks";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { networkSites } from "@/data/network";

export const metadata = createMetadata({
  title: "Country Expert Witness Network UK | Specialist Sites Directory",
  description:
    "Directory of independent country expert witness network sites. Somalia, Nigeria, Pakistan, Afghanistan, Africa, South Asia, persecution, and human rights specialists.",
  path: "/network",
});

const networkFaqs = [
  {
    question: "What is the Independent Country Expert network?",
    answer:
      "A hub-and-spoke directory of twelve specialist country and thematic expert sites. Independent Country Expert routes UK solicitor instructions to jurisdiction-specific experts while maintaining independence standards under CPR Part 35.",
  },
  {
    question: "How do I choose the right network site for my case?",
    answer:
      "Match the appellant's country of origin to the dedicated country site (e.g. Somalia Expert for Somalia). Use thematic sites for persecution frameworks (Persecution Expert) or human rights analysis (Human Rights Experts).",
  },
  {
    question: "Does Independent Country Expert duplicate country-deep content?",
    answer:
      "No — ICE provides routing and independence framework depth only. MOJ analysis, country-specific CPIN depth, and asylum profile pages are maintained on dedicated network sites linked from this directory.",
  },
];

export default function NetworkPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Network" }];
  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={networkFaqs} />
      <PageShell
        title="Independent Country Expert Witness Network"
        subtitle="Specialist network sites for jurisdiction-specific country expert evidence across all major asylum regions."
        breadcrumbs={crumbs}
      >
        <HubPageLinks showNetwork={false} />
        <p className="mb-8 text-[#374151] leading-relaxed">
          Independent Country Expert coordinates instruction across twelve specialist network sites. Each site
          provides deep jurisdiction-specific content, asylum profiles, and CPIN analysis. This hub routes
          solicitors to the right specialist while maintaining independence standards across the network.
        </p>

        <h2 className="text-xl font-bold text-[#2C3E50]">Network Directory</h2>
        <div className="mt-6">
          <ResponsiveTableWrap label="Swipe to view full network directory">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#CBD5E1] bg-[#F5F7FA]">
                  <th className="px-3 py-3 text-left font-semibold text-[#2C3E50] sm:px-4">Site</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#2C3E50] sm:px-4">Role</th>
                  <th className="px-3 py-3 text-left font-semibold text-[#2C3E50] sm:px-4">URL</th>
                </tr>
              </thead>
              <tbody>
                {networkSites.map((site) => (
                  <tr key={site.url} className="border-b border-[#CBD5E1]">
                    <td className="px-3 py-3 font-medium text-[#2C3E50] sm:px-4">{site.name}</td>
                    <td className="px-3 py-3 text-[#374151] sm:px-4">{site.expertise}</td>
                    <td className="px-3 py-3 sm:px-4">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all font-medium text-[#B87333] hover:underline"
                      >
                        {site.url.replace("https://www.", "")}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTableWrap>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {networkSites.map((site) => (
            <article
              key={site.url}
              className="rounded-[8px] border border-[#CBD5E1] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:p-6"
            >
              <h2 className="text-lg font-bold text-[#2C3E50]">{site.name}</h2>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">{site.description}</p>
              <p className="mt-3 text-xs font-medium text-[#B87333]">{site.expertise}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#B87333] hover:underline"
              >
                Visit {site.name} →
              </a>
            </article>
          ))}
        </div>

        <FAQSection faqs={networkFaqs} title="Network Directory: Frequently Asked Questions" />
      </PageShell>
    </>
  );
}
