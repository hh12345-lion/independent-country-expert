import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  /** Wider panel and scroll for long lists (e.g. countries) */
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const cols = scrollable && items.length > 8 ? 2 : 1;

  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-1.5 px-2.5 py-2 text-[13px] tracking-wide text-[#33403A]/transition-colors hover:text-[#0F241C]"
      >
        <span className="relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#2B7A78] after:transition-all after:duration-200 group-hover:after:w-full group-focus-within:after:w-full">
          {label}
        </span>
        <svg
          className="h-3 w-3 text-[#2B7A78] opacity-70 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`nav-atlas-panel absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
          scrollable ? "w-[min(92vw,28rem)]" : "w-[min(92vw,18rem)]"
        }`}
      >
        <div className="atlas-panel overflow-hidden rounded-[2px] border border-[#B8C4BE] shadow-[0_12px_40px_rgba(15,36,28,0.12)]">
          <div className="flex items-center justify-between border-b border-[#B8C4BE] bg-[#0F241C] px-4 py-3">
            <Link
              href={href}
              className="font-display text-lg tracking-tight text-[#E7ECE8] hover:text-white"
            >
              {label}
            </Link>
            <Link
              href={href}
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#4A9B98] hover:text-[#E7ECE8]"
            >
              View all
            </Link>
          </div>
          <ul
            className={`p-2 ${cols === 2 ? "grid grid-cols-2 gap-x-1" : ""} ${
              scrollable ? "max-h-[min(60vh,20rem)] overflow-y-auto" : ""
            }`}
          >
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-[40px] items-center border-l-2 border-transparent px-3 py-2 text-sm text-[#33403A] transition-colors hover:border-[#2B7A78] hover:bg-[#E7ECE8]/hover:text-[#0F241C]"
                >
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
