"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import {
  CASE_TYPES,
  EXPERTISE_NEEDED,
  FUNDING_OPTIONS,
  JURISDICTIONS,
} from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 rounded-[8px] border border-[#CBD5E1] px-4 py-3 text-base text-[#374151] focus:border-[#2C3E50] focus:outline-none focus:ring-1 focus:ring-[#2C3E50] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#2C3E50]";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      jurisdiction: String(data.get("jurisdiction") ?? "").trim(),
      expertise: String(data.get("expertise") ?? "").trim(),
      caseType: String(data.get("case_type") ?? "").trim(),
      funding: String(data.get("funding") ?? "").trim(),
      deadline: String(data.get("deadline") ?? "").trim(),
      summary: String(data.get("summary") ?? "").trim(),
    };

    const ok = await postSubmitLead(payload);
    if (ok) router.push("/thank-you");
    else setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 space-y-5">
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="law_firm">
            Law Firm *
          </label>
          <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
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
          <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="jurisdiction">
            Country / Jurisdiction
          </label>
          <select id="jurisdiction" name="jurisdiction" className={inputClass}>
            <option value="">Select jurisdiction</option>
            {JURISDICTIONS.map((j) => (
              <option key={j} value={j}>
                {j}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="expertise">
            Expertise Needed
          </label>
          <select id="expertise" name="expertise" className={inputClass}>
            <option value="">Select expertise</option>
            {EXPERTISE_NEEDED.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="case_type">
            Case Type
          </label>
          <select id="case_type" name="case_type" className={inputClass}>
            <option value="">Select case type</option>
            {CASE_TYPES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="funding">
            Funding
          </label>
          <select id="funding" name="funding" className={inputClass}>
            <option value="">Select funding</option>
            {FUNDING_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="deadline">
          Deadline / hearing date
        </label>
        <input id="deadline" type="date" name="deadline" className={inputClass} />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief case description *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email us at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[8px] bg-[#B87333] px-6 py-3 text-base font-semibold text-white hover:bg-[#9A6129] disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting..." : "Instruct an Expert"}
      </button>
    </form>
  );
}
