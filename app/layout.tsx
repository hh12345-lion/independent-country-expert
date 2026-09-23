import type { Metadata } from "next";
import { Outfit, Zilla_Slab } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { UkRegionBar } from "@/components/layout/UkRegionBar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-zilla",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Independent Country Expert | Expert Witness Reports for Asylum & Immigration Tribunals",
    template: "%s | Independent Country Expert",
  },
  description:
    "Independent country expert witness reports for immigration and asylum tribunals. Serving solicitors and Legal Aid practitioners — CPR Part 35, Practice Direction 2024, state protection, internal relocation, and CPIN challenge.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      en: SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${zilla.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <Header />
          <UkRegionBar />
          <div className="flex-1">{children}</div>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
