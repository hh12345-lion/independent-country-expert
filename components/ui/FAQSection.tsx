import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  variant = "default",
}: {
  faqs: FAQ[];
  title?: string;
  variant?: "default" | "full";
}) {
  const isFull = variant === "full";

  return (
    <section className={isFull ? "py-0" : "py-12"}>
      <h2
        className={`mb-8 font-bold text-[#2C3E50] ${isFull ? "text-3xl" : "text-2xl"}`}
      >
        {title}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-[8px] border border-[#CBD5E1] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold text-[#2C3E50]">{faq.question}</h3>
            <p className="mt-3 text-[#374151] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
