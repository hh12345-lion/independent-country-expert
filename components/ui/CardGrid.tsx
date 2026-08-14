import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-0 border-t border-[#C9C4BA] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex min-h-[44px] flex-col border-b border-r border-[#C9C4BA] bg-[#F7F4EF] p-5 transition-colors hover:bg-[#E8EDF2] sm:p-6"
        >
          <h3 className="font-display text-xl tracking-tight text-[#191B22] group-hover:text-[#0B6E99]">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#3A4148]">{item.description}</p>
          <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B6E99]">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
