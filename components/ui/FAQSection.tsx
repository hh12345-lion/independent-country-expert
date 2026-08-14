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
        className={`mb-8 font-display tracking-tight text-[#191B22] ${isFull ? "text-3xl" : "text-2xl"}`}
      >
        {title}
      </h2>
      <div className="divide-y divide-[#C9C4BA] border-y border-[#C9C4BA]">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-6">
            <h3 className="font-display text-xl text-[#191B22]">{faq.question}</h3>
            <p className="mt-3 leading-relaxed text-[#3A4148]">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
