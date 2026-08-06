import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-0 border-t border-[#B8C4BE] sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex min-h-[44px] flex-col border-b border-r border-[#B8C4BE] bg-[#FAFBFA] p-5 transition-colors hover:bg-[#E7ECE8] sm:p-6"
        >
          <h3 className="font-display text-xl tracking-tight text-[#0F241C] group-hover:text-[#2B7A78]">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#33403A]">{item.description}</p>
          <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2B7A78]">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
