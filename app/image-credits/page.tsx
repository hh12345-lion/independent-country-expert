import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { imageCredits } from "@/lib/images";

export const metadata = createMetadata({
  title: "Image Credits | Independent Country Expert",
  description: "Sources and licences for photographs and maps used on IndependentCountryExpert.com",
  path: "/image-credits",
  noindex: true,
  follow: true,
});

export default function ImageCreditsPage() {
  return (
    <PageShell
      title="Image Credits"
      subtitle="Photographs and historical maps on this site come from Wikimedia Commons. They are shown in greyscale with a colour wash."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
    >
      <ul className="divide-y divide-[#D0CFC9] border-y border-[#D0CFC9]">
        {imageCredits.map((c) => (
          <li key={c.source} className="py-5">
            <p className="font-display text-xl text-[#171D1E]">{c.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-[#364142]">
              {c.author}.{" "}
              {c.licenseUrl ? (
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="text-[#406383] hover:underline">
                  {c.license}
                </a>
              ) : (
                c.license
              )}
              .{" "}
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-[#406383] hover:underline">
                View source
              </a>
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
