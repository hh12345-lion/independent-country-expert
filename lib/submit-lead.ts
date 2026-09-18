function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://independentcountryexpert.com";
  try {
    return new URL(raw).hostname.replace(/^www\./, "");
  } catch {
    return "independentcountryexpert.com";
  }
}

export const LEAD_BRAND_NAME = "Independent Country Expert";

/** Fields required by Lead_notification_setup.md for /api/submit-lead */
export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
};

/** Extra fields stored in Google Sheets when configured */
export type SubmitLeadPayload = SubmitLeadInput & {
  organisation?: string;
  jurisdiction?: string;
  expertise?: string;
  caseType?: string;
  funding?: string;
  deadline?: string;
  summary?: string;
};

/**
 * Outbound webhook JSON for Lead_notification_url / n8n.
 */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    "Brand name": LEAD_BRAND_NAME,
    domain: getSiteDomain(),
    message: input.message ?? "",
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

/**
 * Client-side: POST to /api/submit-lead.
 * On Netlify this is force-redirected to netlify/functions/submit-lead.js.
 * Always send fullName, email, phone (phone may be "").
 */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone ?? "",
        organisation: payload.organisation,
        jurisdiction: payload.jurisdiction,
        expertise: payload.expertise,
        caseType: payload.caseType,
        funding: payload.funding,
        deadline: payload.deadline,
        summary: payload.summary,
        message: payload.message ?? payload.summary ?? "",
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
