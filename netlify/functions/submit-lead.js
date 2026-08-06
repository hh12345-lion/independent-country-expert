/**
 * Netlify Function: contact form → Lead_notification_url (+ optional Google Sheets).
 *
 * Lead_notification_setup.md — outbound webhook JSON uses ONLY:
 *   Full Name | Email | Phone Number | Brand name
 *
 * Update BRAND_NAME when copying to another brand site.
 */
const BRAND_NAME = "Independent Country Expert";

const SHEET_HEADERS = [
  "Timestamp",
  "Brand name",
  "Name",
  "Firm",
  "Email",
  "Phone",
  "Jurisdiction",
  "Expertise",
  "Case type",
  "Funding",
  "Deadline",
  "Brief",
];

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    ""
  );
}

function isSheetsConfigured() {
  return Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY
  );
}

function sanitize(str) {
  return String(str ?? "")
    .replace(/<[^>]*>/g, "")
    .trim();
}

/**
 * Lead_notification_setup.md — API body must include fullName, email, phone
 * (phone may be an empty string). Extra fields are kept for Google Sheets.
 */
function parseBody(json) {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return { error: "Invalid JSON body", status: 400 };
  }

  if (
    typeof json.fullName !== "string" ||
    typeof json.email !== "string" ||
    typeof json.phone !== "string"
  ) {
    return {
      error: "fullName, email, and phone must be strings",
      status: 400,
    };
  }

  const fullName = sanitize(json.fullName);
  const email = sanitize(json.email).toLowerCase();
  const phone = sanitize(json.phone);

  if (!fullName || !email) {
    return { error: "fullName and email are required", status: 400 };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Invalid email address", status: 400 };
  }

  return {
    ok: {
      fullName,
      email,
      phone,
      organisation: sanitize(json.organisation),
      jurisdiction: sanitize(json.jurisdiction),
      expertise: sanitize(json.expertise),
      caseType: sanitize(json.caseType),
      funding: sanitize(json.funding),
      deadline: sanitize(json.deadline),
      summary: sanitize(json.summary),
    },
  };
}

async function appendToSheet(lead) {
  const { google } = require("googleapis");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  const escaped = sheetName.replace(/'/g, "''");

  const row = [
    new Date().toISOString(),
    BRAND_NAME,
    lead.fullName,
    lead.organisation,
    lead.email,
    lead.phone,
    lead.jurisdiction,
    lead.expertise,
    lead.caseType,
    lead.funding,
    lead.deadline,
    lead.summary,
  ];

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `'${escaped}'!A1:L1`,
  });
  const hasHeader = Boolean(existing.data.values?.[0]?.some((c) => String(c).trim()));
  if (!hasHeader) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `'${escaped}'!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [SHEET_HEADERS] },
    });
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${escaped}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });

  return response.data.updates?.updatedRange;
}

/** Build the exact four-key payload for n8n / Lead_notification_url */
function buildOutboundWebhook(lead) {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  let json;
  try {
    json = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "Invalid JSON" });
  }

  const parsed = parseBody(json);
  if (parsed.error) {
    return jsonResponse(parsed.status, { error: parsed.error });
  }

  const webhookUrl = getLeadNotificationUrl();
  const sheetsOk = isSheetsConfigured();

  if (!webhookUrl && !sheetsOk) {
    console.error("[submit-lead] Lead_notification_url is not configured");
    return jsonResponse(503, {
      error:
        "Lead notification URL is not configured. Set Lead_notification_url (or Google Sheets env vars).",
    });
  }

  // Google Sheets (optional secondary store — never blocks webhook below)
  if (sheetsOk) {
    try {
      const range = await appendToSheet(parsed.ok);
      console.info("[submit-lead] Sheet row appended:", range);
    } catch (error) {
      console.error("[submit-lead] Google Sheets write failed:", {
        message: error?.message,
        code: error?.code,
        timestamp: new Date().toISOString(),
      });
      if (!webhookUrl) {
        return jsonResponse(500, { error: "Failed to save submission" });
      }
    }
  }

  // Lead_notification_setup.md — primary: POST four keys to webhook
  if (webhookUrl) {
    const outbound = buildOutboundWebhook(parsed.ok);
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 12_000);
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outbound),
        signal: ac.signal,
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[submit-lead] Webhook failed", res.status, text);
        return jsonResponse(502, {
          error: "Lead notification endpoint returned an error",
        });
      }
    } catch (err) {
      console.error("[submit-lead] Webhook error", err);
      return jsonResponse(502, {
        error: "Could not reach lead notification endpoint",
      });
    } finally {
      clearTimeout(t);
    }
  }

  return jsonResponse(200, { ok: true });
};
