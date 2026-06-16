import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Cookie Policy | Independent Country Expert",
  description:
    "Cookie policy for IndependentCountryExpert.com — categories, third-party scripts, retention, and your GDPR rights.",
  path: "/cookie-policy",
  noindex: true,
  follow: true,
});

const COOKIE_TABLE = [
  ["ice_cookie_consent_v1", "Necessary", "localStorage", "365 days", "Stores your cookie consent choices"],
  ["_ga / _gid", "Analytics", "Google Analytics", "Up to 2 years", "Loaded only if you allow Analytics"],
  ["_hj*", "Analytics", "Hotjar", "Session / 365 days", "Loaded only if you allow Analytics"],
  ["_fbp", "Marketing", "Meta Pixel", "90 days", "Loaded only if you allow Marketing"],
  ["li_*", "Marketing", "LinkedIn Insight Tag", "Varies", "Loaded only if you allow Marketing"],
];

export default function CookiePolicyPage() {
  return (
    <PageShell title="Cookie Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cookie Policy" }]}>
      <p className="text-[#374151] leading-relaxed">
        This Cookie Policy explains how IndependentCountryExpert.com (&quot;we&quot;, &quot;us&quot;) uses cookies
        and similar technologies. We comply with the UK GDPR, the EU ePrivacy Directive (as implemented in UK
        PECR), and apply CCPA-informed controls for California visitors.
      </p>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">What are cookies?</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Cookies are small text files stored on your device. We also use localStorage for consent records.
        Strictly necessary technologies run the site; optional cookies require your consent before loading.
      </p>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">Cookie categories</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
        <li>
          <strong>Necessary</strong> — Required for security, consent storage, and core functionality. Always
          active.
        </li>
        <li>
          <strong>Analytics</strong> — Google Analytics, Google Tag Manager, Hotjar (aggregated usage insights).
          Off by default.
        </li>
        <li>
          <strong>Marketing</strong> — Meta Pixel, LinkedIn Insight Tag (campaign measurement). Off by default.
        </li>
        <li>
          <strong>Preferences</strong> — Remember display or language choices. Off by default.
        </li>
      </ul>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">Third-party scripts (consent-gated)</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Non-essential scripts are blocked until you grant consent. We use Google Consent Mode v2 so Google tags
        respect your choices immediately when you update preferences.
      </p>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">Cookie inventory</h2>
      <div className="mt-4 overflow-x-auto rounded-[8px] border border-[#CBD5E1]">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-[#CBD5E1] bg-[#F5F7FA]">
              <th className="px-3 py-3 text-left font-semibold text-[#2C3E50]">Name</th>
              <th className="px-3 py-3 text-left font-semibold text-[#2C3E50]">Category</th>
              <th className="px-3 py-3 text-left font-semibold text-[#2C3E50]">Provider</th>
              <th className="px-3 py-3 text-left font-semibold text-[#2C3E50]">Retention</th>
              <th className="px-3 py-3 text-left font-semibold text-[#2C3E50]">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {COOKIE_TABLE.map(([name, cat, provider, retention, purpose]) => (
              <tr key={name} className="border-b border-[#CBD5E1]">
                <td className="px-3 py-3 font-mono text-xs text-[#2C3E50]">{name}</td>
                <td className="px-3 py-3 text-[#374151]">{cat}</td>
                <td className="px-3 py-3 text-[#374151]">{provider}</td>
                <td className="px-3 py-3 text-[#374151]">{retention}</td>
                <td className="px-3 py-3 text-[#374151]">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">Managing your preferences</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        Use <strong>Cookie Settings</strong> in the site footer to reopen the preference centre at any time.
        Consent is stored for 365 days, after which we will ask again. Withdrawing consent stops optional scripts
        from loading on subsequent page views.
      </p>

      <h2 className="mt-8 text-lg font-bold text-[#2C3E50]">Your rights</h2>
      <p className="mt-4 text-[#374151] leading-relaxed">
        You may access, rectify, or erase personal data processed via cookies. See our{" "}
        <Link href="/privacy" className="font-semibold text-[#B87333] hover:underline">
          Privacy Policy
        </Link>{" "}
        for full GDPR rights and contact details.
      </p>

      <p className="mt-6 text-sm text-[#374151]">
        Last updated: June 2026
      </p>
    </PageShell>
  );
}
