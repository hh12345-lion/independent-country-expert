import { SITE_URL } from "../constants";
import { expertiseAreas } from "../../data/expertise-areas";
import { countries } from "../../data/countries";
import { regions } from "../../data/regions";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";

export type PublicUrlEntry = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const APP_STATIC_PATHS: PublicUrlEntry[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/expert-independence-framework", priority: 0.95, changefreq: "monthly" },
  { path: "/countries", priority: 0.93, changefreq: "monthly" },
  { path: "/expertise-areas", priority: 0.93, changefreq: "monthly" },
  { path: "/report-standards", priority: 0.9, changefreq: "monthly" },
  { path: "/network", priority: 0.9, changefreq: "monthly" },
  { path: "/what-is-an-independent-country-expert", priority: 0.9, changefreq: "monthly" },
  { path: "/cpin-country-guidance", priority: 0.88, changefreq: "monthly" },
  { path: "/services", priority: 0.88, changefreq: "monthly" },
  { path: "/case-types", priority: 0.88, changefreq: "monthly" },
  { path: "/qualifications", priority: 0.88, changefreq: "monthly" },
  { path: "/how-to-instruct", priority: 0.88, changefreq: "monthly" },
  { path: "/guides", priority: 0.85, changefreq: "monthly" },
  { path: "/regions", priority: 0.91, changefreq: "monthly" },
  { path: "/glossary", priority: 0.75, changefreq: "monthly" },
];

export const NON_INDEXABLE_PATHS = ["/contact", "/thank-you", "/privacy", "/terms"] as const;

export const ROBOTS_DISALLOW_PATHS = ["/thank-you", "/api/"] as const;

function dynamicEntries(): PublicUrlEntry[] {
  return [
    ...countries.map((c) => ({
      path: `/countries/${c.slug}`,
      priority: 0.9,
      changefreq: "monthly" as const,
    })),
    ...expertiseAreas.map((e) => ({
      path: `/expertise-areas/${e.slug}`,
      priority: 0.9,
      changefreq: "monthly" as const,
    })),
    ...regions.map((r) => ({
      path: `/regions/${r.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...caseTypes.map((c) => ({
      path: `/case-types/${c.slug}`,
      priority: 0.88,
      changefreq: "monthly" as const,
    })),
    ...guides.map((g) => ({
      path: `/guides/${g.slug}`,
      priority: 0.82,
      changefreq: "monthly" as const,
    })),
  ];
}

export type PublicUrlInventory = {
  siteUrl: string;
  entries: PublicUrlEntry[];
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(siteUrl: string = SITE_URL): PublicUrlInventory {
  const origin = siteUrl.replace(/\/$/, "");
  const merged = [...APP_STATIC_PATHS, ...dynamicEntries()];

  const byPath = new Map<string, PublicUrlEntry>();
  for (const entry of merged) {
    const path = entry.path.startsWith("/") ? entry.path : `/${entry.path}`;
    if (NON_INDEXABLE_PATHS.includes(path as (typeof NON_INDEXABLE_PATHS)[number])) continue;
    byPath.set(path, { ...entry, path });
  }

  const entries = [...byPath.values()].sort((a, b) => a.path.localeCompare(b.path));
  const allPaths = entries.map((e) => e.path);
  const allUrls = allPaths.map((p) => (p === "/" ? origin : `${origin}${p}`));

  return { siteUrl: origin, entries, allPaths, allUrls };
}
