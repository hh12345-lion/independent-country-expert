import { NextResponse } from "next/server";
import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  buildLeadWebhookPayload,
  getLeadWebhookUrl,
  LEAD_BRAND_NAME,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsOk = isGoogleSheetsConfigured();

  if (!sheetsOk && !webhookUrl) {
    const missing: string[] = [];
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) missing.push("GOOGLE_SERVICE_ACCOUNT_EMAIL");
    if (!process.env.GOOGLE_PRIVATE_KEY) missing.push("GOOGLE_PRIVATE_KEY");
    if (!process.env.GOOGLE_SHEET_ID) missing.push("GOOGLE_SHEET_ID");
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Add Google Sheets vars to .env.local and restart the dev server.",
        ...(process.env.NODE_ENV === "development" && { missing }),
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

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(body.phone ?? "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.jurisdiction ?? ""),
    sanitize(body.expertise ?? ""),
    sanitize(body.caseType ?? ""),
    sanitize(body.funding ?? ""),
    body.deadline ?? "",
    sanitize(body.summary ?? ""),
    LEAD_BRAND_NAME,
  ];

  if (sheetsOk) {
    try {
      await appendRow(row);
    } catch (error) {
      console.error("Google Sheets write failed:", {
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
      }
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
      if (!res.ok && !sheetsOk) {
        return NextResponse.json({ error: "Lead notification endpoint returned an error" }, { status: 502 });
      }
    } catch {
      if (!sheetsOk) {
        return NextResponse.json({ error: "Could not reach lead notification endpoint" }, { status: 502 });
      }
      console.error("Lead webhook request failed");
    }
  }

  return NextResponse.json({ ok: true });
}
