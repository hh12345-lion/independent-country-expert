import Link from "next/link";

export function CTASection({
  title = "Need a specialist for this jurisdiction?",
  description = "Send a short brief. We route to an independent country expert — UK tribunals only. Reply within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-[#191B22] bg-[#E8EDF2] py-12 sm:py-16">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl tracking-tight text-[#191B22] sm:text-4xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#3A4148] sm:text-base">{description}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center border border-[#191B22] bg-[#191B22] px-8 text-[13px] font-medium tracking-wide text-[#F7F4EF] transition-colors hover:bg-[#0B6E99] hover:border-[#0B6E99]"
        >
          Route a case
        </Link>
        <p className="mt-4">
          <Link
            href="/how-to-instruct"
            className="text-sm text-[#0B6E99] underline-offset-4 hover:underline"
          >
            How we route a case
          </Link>
        </p>
      </div>
    </section>
  );
}
