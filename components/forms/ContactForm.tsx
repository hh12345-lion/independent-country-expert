"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";

const inputClass =
  "w-full min-w-0 border-0 border-b border-[#B8C4BE] bg-transparent px-0 py-3 text-base text-[#33403A] placeholder:text-[#B8C4BE] focus:border-[#2B7A78] focus:outline-none focus:ring-0 min-h-[44px]";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F241C]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Lead_notification_setup.md — API requires fullName, email, phone
    const fullName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    const ok = await postSubmitLead({
      fullName,
      email,
      phone,
      organisation: String(data.get("law_firm") ?? "").trim(),
      deadline: String(data.get("deadline") ?? "").trim(),
      summary: String(data.get("summary") ?? "").trim(),
    });

    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 max-w-lg space-y-6">
      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+44 …"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm *
        </label>
        <input
          id="law_firm"
          name="law_firm"
          required
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          placeholder="Country, case type, and what you need"
          className={`${inputClass} min-h-[88px] resize-y`}
        />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="deadline">
          Hearing date
        </label>
        <input id="deadline" type="date" name="deadline" className={inputClass} />
      </div>

      {status === "error" && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[48px] w-full items-center justify-center bg-[#0F241C] px-6 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#E7ECE8] transition-colors hover:bg-[#2B7A78] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Send brief"}
      </button>
    </form>
  );
}
