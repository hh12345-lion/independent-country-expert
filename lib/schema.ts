import { SITE_EMAIL, SITE_URL } from "./constants";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

const NETWORK_SITES = [
  "https://www.linkedin.com/company/IndependentCountryExpert",
  "https://www.somaliaexpert.com",
  "https://www.nigeriaexpert.com",
  "https://www.pakistancountryexpert.com",
  "https://www.afghanistancountryexpert.com",
  "https://www.albaniaexpertwitness.com",
  "https://www.africaexpertwitness.com",
  "https://www.southasiaexpert.com",
  "https://www.southasiareports.com",
  "https://www.persecutionexpert.com",
  "https://www.humanrightsexperts.com",
  "https://www.immigrationexpertwitnesses.com",
  "https://www.immigrationexpertreports.com",
];

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name ?? item.label ?? "",
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Independent Country Expert",
    url: SITE_URL,
    email: SITE_EMAIL,
    description:
      "Independent country expert witness instruction routing for UK immigration and asylum tribunals only.",
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    sameAs: NETWORK_SITES,
  };
}

export function professionalServiceSchema() {
  const services = [
    "Independent Country Condition Reports",
    "State Protection Analysis",
    "Internal Relocation Assessment",
    "CPIN Challenge Reports",
    "Linguistic & Identity Analysis",
    "Return & Deportation Risk Reports",
    "Fresh Claim Country Updates",
    "Oral Evidence at Tribunal",
  ];
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Independent Country Expert Witness Services",
    url: SITE_URL,
    serviceType: "Independent Country Expert Witness",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    audience: {
      "@type": "Audience",
      audienceType: "UK immigration solicitors and Legal Aid practitioners",
      geographicArea: { "@type": "Country", name: "United Kingdom" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Independent Country Expert Witness Services",
      itemListElement: services.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function homepageGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), professionalServiceSchema()],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Independent Country Expert",
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/glossary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
