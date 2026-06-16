import { expertiseAreas } from "./expertise-areas";
import { countries } from "./countries";
import { regions } from "./regions";
import { caseTypes } from "./case-types";
import { guides } from "./guides";

export type NavLink = { label: string; href: string };

export const expertiseNavLinks: NavLink[] = expertiseAreas.map((e) => ({
  label: e.title,
  href: `/expertise-areas/${e.slug}`,
}));

export const countriesNavLinks: NavLink[] = countries.map((c) => ({
  label: c.title,
  href: `/countries/${c.slug}`,
}));

export const regionsNavLinks: NavLink[] = regions.map((r) => ({
  label: r.title,
  href: `/regions/${r.slug}`,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Expert Independence Framework", href: "/expert-independence-framework" },
  { label: "Report Standards", href: "/report-standards" },
  { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  { label: "Guides", href: "/guides" },
  { label: "Glossary", href: "/glossary" },
  { label: "Network", href: "/network" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "How to Instruct", href: "/how-to-instruct" },
];

export const mobileNavGroups = [
  {
    title: "Expertise",
    links: [
      { label: "All Expertise Areas", href: "/expertise-areas" },
      ...expertiseNavLinks.slice(0, 4),
    ],
  },
  {
    title: "Countries & Regions",
    links: [
      { label: "All Countries", href: "/countries" },
      { label: "All Regions", href: "/regions" },
      ...countriesNavLinks.slice(0, 4),
    ],
  },
  {
    title: "Case Types & Services",
    links: [
      { label: "Case Types", href: "/case-types" },
      { label: "Services", href: "/services" },
      ...caseTypesNavLinks.slice(0, 3),
    ],
  },
  {
    title: "Resources",
    links: resourcesNavLinks,
  },
];

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.h1.split(":")[0],
  href: `/guides/${g.slug}`,
}));
