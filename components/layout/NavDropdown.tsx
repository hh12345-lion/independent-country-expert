import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
  /** Folio number shown before the label */
  index?: number;
};

export function NavDropdown({ label, href, items, scrollable, index }: NavDropdownProps) {
  const cols = scrollable && items.length > 8 ? 2 : 1;

  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-[#364142] transition-colors hover:text-[#171D1E]"
      >
        {index !== undefined && (
          <span aria-hidden className="font-display text-[11px] text-[#406383]">
            {String(index).padStart(2, "0")}
          </span>
        )}
        {label}
        <svg
          className="h-3 w-3 text-[#406383] transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`nav-folio-panel absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
          scrollable ? "w-[min(92vw,28rem)]" : "w-[min(92vw,18rem)]"
        }`}
      >
        <div className="overflow-hidden rounded-md border border-[#D0CFC9] border-t-[3px] border-t-[#1A4346] bg-[#EFECE4] shadow-[0_18px_36px_-12px_rgba(23,29,30,0.28)]">
          <div className="flex items-baseline justify-between border-b border-[#D0CFC9] px-4 py-2.5">
            <Link href={href} className="font-display text-lg text-[#171D1E] hover:text-[#406383]">
              {label}
            </Link>
            <Link
              href={href}
              className="text-[11px] tracking-wide text-[#406383] hover:underline"
            >
              Index
            </Link>
          </div>
          <ul
            className={`p-1 ${cols === 2 ? "grid grid-cols-2" : ""} ${
              scrollable ? "max-h-[min(60vh,20rem)] overflow-y-auto" : ""
            }`}
          >
            {items.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[40px] items-baseline gap-2 px-3 py-2 text-sm text-[#364142] hover:bg-[#E3E1DC] hover:text-[#171D1E]"
                >
                  <span className="w-5 shrink-0 font-display text-[11px] text-[#406383]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
