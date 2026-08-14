import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const cols = scrollable && items.length > 8 ? 2 : 1;

  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-1 px-2.5 py-2 text-[13px] text-[#3A4148] transition-colors hover:text-[#191B22]"
      >
        {label}
        <svg
          className="h-3 w-3 text-[#0B6E99] transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`nav-folio-panel absolute left-1/2 top-full z-50 -translate-x-1/2 pt-0 ${
          scrollable ? "w-[min(92vw,28rem)]" : "w-[min(92vw,18rem)]"
        }`}
      >
        <div className="border border-t-0 border-[#C9C4BA] bg-[#F7F4EF] shadow-[0_16px_32px_rgba(25,27,34,0.08)]">
          <div className="flex items-baseline justify-between border-b border-[#C9C4BA] px-4 py-2.5">
            <Link href={href} className="font-display text-lg text-[#191B22] hover:text-[#0B6E99]">
              {label}
            </Link>
            <Link
              href={href}
              className="text-[11px] tracking-wide text-[#0B6E99] hover:underline"
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
                  className="flex min-h-[40px] items-baseline gap-2 px-3 py-2 text-sm text-[#3A4148] hover:bg-[#E8EDF2] hover:text-[#191B22]"
                >
                  <span className="w-5 shrink-0 font-display text-[11px] text-[#0B6E99]">
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
