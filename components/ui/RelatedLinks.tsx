import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border-t border-[#D0CFC9] pt-8">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#406383]">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-1 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-sm text-[#171D1E] hover:text-[#406383]"
              >
                {link.label} ↗
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-flex min-h-[44px] items-center text-sm text-[#171D1E] hover:text-[#406383]"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
