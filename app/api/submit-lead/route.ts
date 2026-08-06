import { NextResponse } from "next/server";
import { appendLeadToSheet } from "@/lib/contact-sheet";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  buildLeadWebhookPayload,
  getLeadWebhookUrl,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

/**
 * Local / Next.js path for lead submit.
 * On Netlify production, netlify.toml force-redirects /api/submit-lead
 * to netlify/functions/submit-lead.js (Lead_notification_setup.md).
 */
export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsOk = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsOk) {
    return NextResponse.json(
      {
        error:
          "Lead_notification_url is not configured. Set it in .env / Netlify env (see Lead_notification_setup.md).",
        ...(process.env.NODE_ENV === "development" && {
          hint: "Also accepts LEAD_NOTIFICATION_URL. Google Sheets vars are an optional secondary store.",
        }),
      },
      { status: 503 }
    );
  }

  let body: SubmitLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    typeof body.fullName !== "string" ||
    typeof body.email !== "string" ||
    typeof body.phone !== "string"
  ) {
    return NextResponse.json(
      { error: "fullName, email, and phone must be strings" },
      { status: 400 }
    );
  }

  const fullName = sanitize(body.fullName);
  const email = body.email.toLowerCase().trim();
  const phone = sanitize(body.phone);

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const lead: SubmitLeadPayload = {
    fullName,
    email,
    phone,
    organisation: sanitize(body.organisation ?? ""),
    jurisdiction: sanitize(body.jurisdiction ?? ""),
    expertise: sanitize(body.expertise ?? ""),
    caseType: sanitize(body.caseType ?? ""),
    funding: sanitize(body.funding ?? ""),
    deadline: body.deadline ?? "",
    summary: sanitize(body.summary ?? ""),
  };

  if (sheetsOk) {
    const sheetWritten = await appendLeadToSheet(lead);
    if (!sheetWritten && !webhookUrl) {
      return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
    }
  }

  if (webhookUrl) {
    const outbound = buildLeadWebhookPayload({ fullName, email, phone });
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
        signal: AbortSignal.timeout(12_000),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "Lead notification endpoint returned an error" },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Could not reach lead notification endpoint" },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
