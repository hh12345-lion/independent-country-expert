import type { NavLink } from "./navigation";
import { getCountry } from "./countries";
import { getExpertiseArea } from "./expertise-areas";
import { caseTypes } from "./case-types";
import { guides } from "./guides";

export type RelatedLink = NavLink & { external?: boolean };

const HUB_LINKS = {
  independence: {
    label: "Expert Independence Framework",
    href: "/expert-independence-framework",
  },
  network: { label: "Network Directory", href: "/network" },
  cpin: { label: "CPIN & Country Guidance", href: "/cpin-country-guidance" },
  reportStandards: { label: "Report Standards", href: "/report-standards" },
  howToInstruct: { label: "How we route a case", href: "/how-to-instruct" },
  contact: { label: "Contact", href: "/contact" },
  countries: { label: "All Countries", href: "/countries" },
} as const;

function caseTypeLink(slug: string): RelatedLink | undefined {
  const ct = caseTypes.find((c) => c.slug === slug);
  return ct ? { label: ct.title, href: `/case-types/${slug}` } : undefined;
}

function guideLink(slug: string): RelatedLink | undefined {
  const g = guides.find((x) => x.slug === slug);
  return g ? { label: g.h1.split(":")[0], href: `/guides/${slug}` } : undefined;
}

function expertiseLink(slug: string): RelatedLink | undefined {
  const e = getExpertiseArea(slug);
  return e ? { label: e.title, href: `/expertise-areas/${slug}` } : undefined;
}

const EXPERTISE_MATRIX: Record<
  string,
  { caseType: string; guide: string; internal?: string[]; external?: RelatedLink[] }
> = {
  "country-condition-analysis": {
    caseType: "ftt-asylum-appeal",
    guide: "choosing-country-expert-guide",
    internal: ["/countries"],
  },
  "state-protection-assessment": {
    caseType: "ftt-asylum-appeal",
    guide: "cpin-vs-expert-report-guide",
    external: [
      {
        label: "Persecution expert witness UK",
        href: "https://www.persecutionexpert.com",
        external: true,
      },
    ],
  },
  "internal-relocation-analysis": {
    caseType: "upper-tribunal-appeal",
    guide: "expert-independence-guide",
    external: [
      {
        label: "Persecution expert witness UK",
        href: "https://www.persecutionexpert.com",
        external: true,
      },
    ],
  },
  "cpin-challenge-reports": {
    caseType: "country-guidance-challenges",
    guide: "cpin-vs-expert-report-guide",
    external: [
      {
        label: "Immigration expert reports UK",
        href: "https://www.immigrationexpertreports.com",
        external: true,
      },
    ],
  },
  "linguistic-clan-identity": {
    caseType: "ftt-asylum-appeal",
    guide: "instructing-country-expert-guide",
    external: [
      {
        label: "Immigration expert witnesses UK",
        href: "https://www.immigrationexpertwitnesses.com",
        external: true,
      },
    ],
  },
  "return-deportation-risk": {
    caseType: "deportation-removal-article-3",
    guide: "oral-evidence-country-expert-guide",
    external: [
      {
        label: "Human rights expert witness UK",
        href: "https://www.humanrightsexperts.com",
        external: true,
      },
    ],
  },
  "fresh-claim-updates": {
    caseType: "fresh-claims-further-submissions",
    guide: "instructing-country-expert-guide",
  },
  "oral-evidence-tribunal": {
    caseType: "ftt-asylum-appeal",
    guide: "oral-evidence-country-expert-guide",
    external: [
      {
        label: "Oral evidence at tribunal (witness hub)",
        href: "https://www.immigrationexpertwitnesses.com/oral-evidence",
        external: true,
      },
    ],
  },
};

const COUNTRY_MATRIX: Record<
  string,
  { expertise: string; guide: string }
> = {
  somalia: { expertise: "linguistic-clan-identity", guide: "choosing-country-expert-guide" },
  nigeria: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  pakistan: { expertise: "country-condition-analysis", guide: "cpin-vs-expert-report-guide" },
  afghanistan: { expertise: "return-deportation-risk", guide: "choosing-country-expert-guide" },
  albania: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  eritrea: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  ethiopia: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  sudan: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  zimbabwe: { expertise: "state-protection-assessment", guide: "choosing-country-expert-guide" },
  india: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  bangladesh: { expertise: "country-condition-analysis", guide: "choosing-country-expert-guide" },
  iraq: { expertise: "return-deportation-risk", guide: "choosing-country-expert-guide" },
};

function dedupeLinks(links: (RelatedLink | undefined)[]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const link of links) {
    if (!link || seen.has(link.href)) continue;
    seen.add(link.href);
    out.push(link);
  }
  return out;
}

export function getExpertiseRelatedLinks(slug: string): RelatedLink[] {
  const matrix = EXPERTISE_MATRIX[slug];
  const internalPaths = matrix?.internal ?? [];

  return dedupeLinks([
    HUB_LINKS.independence,
    HUB_LINKS.network,
    matrix ? caseTypeLink(matrix.caseType) : undefined,
    matrix ? guideLink(matrix.guide) : undefined,
    slug === "cpin-challenge-reports" ? HUB_LINKS.cpin : undefined,
    ...internalPaths.map((path) => {
      if (path === "/countries") return HUB_LINKS.countries;
      return { label: path, href: path };
    }),
    ...(matrix?.external ?? []),
    HUB_LINKS.reportStandards,
    HUB_LINKS.howToInstruct,
    HUB_LINKS.contact,
  ]);
}

export function getCountryRelatedLinks(slug: string): RelatedLink[] {
  const country = getCountry(slug);
  const matrix = COUNTRY_MATRIX[slug];

  return dedupeLinks([
    HUB_LINKS.independence,
    HUB_LINKS.network,
    HUB_LINKS.cpin,
    country
      ? {
          label: `${country.outboundLabel} (specialist site)`,
          href: country.outboundUrl,
          external: true,
        }
      : undefined,
    matrix ? expertiseLink(matrix.expertise) : undefined,
    matrix ? guideLink(matrix.guide) : undefined,
    HUB_LINKS.countries,
    HUB_LINKS.howToInstruct,
    HUB_LINKS.contact,
  ]);
}

export function getRegionRelatedLinks(_slug: string): RelatedLink[] {
  return [
    HUB_LINKS.independence,
    HUB_LINKS.network,
    { label: "All Regions", href: "/regions" },
    HUB_LINKS.countries,
    HUB_LINKS.contact,
  ];
}

export function getCaseTypeRelatedLinks(_slug: string): RelatedLink[] {
  return [
    HUB_LINKS.independence,
    HUB_LINKS.network,
    { label: "All Case Types", href: "/case-types" },
    HUB_LINKS.howToInstruct,
    HUB_LINKS.contact,
  ];
}

export function getGuideRelatedLinks(_slug: string): RelatedLink[] {
  return [
    HUB_LINKS.independence,
    HUB_LINKS.network,
    { label: "All Guides", href: "/guides" },
    HUB_LINKS.reportStandards,
    HUB_LINKS.contact,
  ];
}
