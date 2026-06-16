import type { Metadata } from "next";
import { SITE_URL } from "./constants";

const OG_IMAGE_ALT =
  "Independent Country Expert — UK Immigration Tribunal Expert Witness Services";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Independent Country Expert",
      locale: "en_GB",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: noindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
