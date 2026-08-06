import Link from "next/link";

export function CTASection({
  title = "Ready to instruct?",
  description = "Send a short brief. We route to a jurisdiction-specific independent expert — UK tribunals only. Reply within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-[#B8C4BE] bg-[#E7ECE8] py-12 sm:py-14 md:py-16">
      <div className="mx-auto flex min-w-0 max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2B7A78]">
            Next step
          </p>
          <h2 className="font-display mt-2 text-3xl tracking-tight text-[#0F241C] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#33403A] sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center bg-[#0F241C] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E7ECE8] transition-colors hover:bg-[#2B7A78]"
          >
            Contact
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center border border-[#0F241C] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0F241C] transition-colors hover:border-[#2B7A78] hover:text-[#2B7A78]"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
