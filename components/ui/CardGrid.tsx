import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="ice-card group flex min-h-[44px] flex-col p-5 sm:p-6"
        >
          <h3 className="font-display text-xl tracking-tight text-[#171D1E] group-hover:text-[#406383]">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#364142]">{item.description}</p>
          <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#406383]">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
