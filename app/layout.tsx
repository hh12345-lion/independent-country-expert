import type { Metadata } from "next";
import { Figtree, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { UkRegionBar } from "@/components/layout/UkRegionBar";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider } from "@/components/cookies";
import { ConsentDefaultsScript } from "@/components/cookies/ConsentDefaultsScript";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
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
      "Independent Country Expert UK | Expert Witness Reports for Asylum & Immigration Tribunals",
    template: "%s | Independent Country Expert",
  },
  description:
    "Independent country expert witness reports for UK immigration and asylum tribunals only. Serving UK solicitors and Legal Aid practitioners — CPR Part 35, Practice Direction 2024, state protection, internal relocation, and CPIN challenge.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${figtree.variable} ${instrument.variable} h-full`}>
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
