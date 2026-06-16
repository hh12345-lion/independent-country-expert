import type { FAQ } from "@/lib/schema";

export type Region = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  outboundUrl: string;
  outboundLabel: string;
  subRegions: string[];
};

export const regions: Region[] = [
  {
    slug: "africa",
    title: "Africa",
    metaTitle: "Africa Independent Country Expert Witness UK | Pan-African Asylum",
    metaDescription:
      "Africa independent country expert witness routing for UK asylum tribunals. Horn of Africa, West Africa, East Africa, Southern Africa. FGM, LGBTQI+, political persecution, conflict.",
    h1: "Africa Independent Country Expert Witness UK",
    content: [
      "Africa generates diverse asylum claims across Horn of Africa (Somalia, Eritrea, Ethiopia, Sudan), West Africa (Nigeria, Ghana, Sierra Leone), East Africa (Kenya, Uganda, DRC), and Southern Africa (Zimbabwe, South Africa). Each jurisdiction requires deep country-specific expertise — no single expert can cover the entire continent effectively.",
      "Common African asylum expert profiles include FGM and gender-based violence, LGBTQI+ persecution, political opinion, forced conscription (Eritrea), conflict-related Article 15(c) claims, and clan/ethnic minority persecution. Independent Country Expert routes instructions to Africa Expert Witness for multi-country African coverage, or to dedicated sites for Nigeria and Somalia.",
      "Tribunals increasingly scrutinise generic 'Africa' expert reports that lack jurisdiction-specific methodology. Network routing ensures solicitors instruct experts with genuine field expertise in the relevant country.",
    ],
    subRegions: ["Horn of Africa", "West Africa", "East Africa", "Southern Africa"],
    outboundUrl: "https://www.africaexpertwitness.com",
    outboundLabel: "Africa Expert Witness",
    faqs: [
      {
        question: "Can one expert cover all African countries?",
        answer:
          "No — effective country expert evidence requires deep jurisdiction-specific knowledge. Independent Country Expert routes instructions to specialists — Africa Expert Witness for multi-country African coverage, or dedicated sites for Nigeria and Somalia.",
      },
      {
        question: "What are the most common African asylum expert profiles?",
        answer:
          "FGM and gender-based violence, LGBTQI+ persecution, political opinion, forced conscription (Eritrea), conflict-related Article 15(c) claims, and clan/ethnic minority persecution.",
      },
    ],
  },
  {
    slug: "south-asia",
    title: "South Asia",
    metaTitle: "South Asia Independent Country Expert Witness UK | Pakistan, India, Bangladesh",
    metaDescription:
      "South Asia independent country expert witness routing for UK asylum tribunals. Pakistan, India, Bangladesh, Sri Lanka, Nepal. Blasphemy, Hindutva, caste, political persecution.",
    h1: "South Asia Independent Country Expert Witness UK",
    content: [
      "South Asia generates high-volume UK asylum claims from Pakistan, India, Bangladesh, Sri Lanka, and Nepal. Each country presents distinct legal and factual challenges: Pakistan's blasphemy and Ahmadi persecution; India's Hindutva targeting and caste discrimination; Bangladesh's political transition and minority persecution; Sri Lanka's KK country guidance on Tamils.",
      "Independent Country Expert routes South Asia instructions to South Asia Expert for multi-country coverage, or to Pakistan Country Expert for Pakistan-specific claims requiring deep blasphemy, Ahmadi, and MN country guidance expertise.",
      "Regional experts must address internal relocation arguments, which the Home Office deploys heavily across South Asian countries citing major urban centres. Profile-specific analysis of whether persecutors have national reach is critical to effective expert evidence.",
    ],
    subRegions: ["Pakistan", "India", "Bangladesh", "Sri Lanka", "Nepal"],
    outboundUrl: "https://www.southasiaexpert.com",
    outboundLabel: "South Asia Expert",
    faqs: [
      {
        question: "Which South Asian countries have UK country guidance?",
        answer:
          "Pakistan has MN and Others [2012] CG; Sri Lanka has KK [2021] UKUT 00245 on Tamils. India, Bangladesh, and Nepal have no current binding UK country guidance, making independent expert evidence especially valuable.",
      },
      {
        question: "When should I use Pakistan Country Expert vs South Asia Expert?",
        answer:
          "Pakistan Country Expert for Pakistan-specific claims requiring deep blasphemy, Ahmadi, and MN CG expertise. South Asia Expert for India, Bangladesh, Sri Lanka, Nepal, and cross-regional South Asian analysis.",
      },
    ],
  },
  {
    slug: "middle-east-central-asia",
    title: "Middle East & Central Asia",
    metaTitle: "Middle East & Central Asia Country Expert Witness UK | Afghanistan, Iraq, Iran",
    metaDescription:
      "Middle East and Central Asia independent country expert witness routing for UK asylum tribunals. Afghanistan, Iraq, Iran, Syria, Yemen. Taliban, sectarian, and conflict-related claims.",
    h1: "Middle East & Central Asia Independent Country Expert Witness UK",
    content: [
      "Middle East and Central Asia asylum claims engage some of the most rapidly changing country conditions in UK immigration tribunals. Afghanistan post-Taliban takeover, Iraq sectarian conflict, Syrian civil war legacy, Yemeni humanitarian crisis, and Iranian political and religious persecution each require specialist expertise.",
      "Independent Country Expert routes Afghanistan instructions to Afghanistan Country Expert. Iraq, Iran, Syria, and Yemen cases are coordinated to network specialists with current field expertise and dated primary sources. Generic Middle East analysis without country-specific methodology carries limited tribunal weight.",
      "Article 15(c) subsidiary protection and Article 3 return risk frameworks frequently apply alongside Refugee Convention persecution analysis in this region. Experts must maintain independence under CPR Part 35 across all frameworks.",
    ],
    subRegions: ["Afghanistan", "Iraq", "Iran", "Syria", "Yemen"],
    outboundUrl: "https://www.afghanistancountryexpert.com",
    outboundLabel: "Afghanistan Country Expert",
    faqs: [
      {
        question: "How do Middle East country conditions affect expert report currency?",
        answer:
          "Conditions in Afghanistan, Iraq, Syria, and Yemen change rapidly. Expert reports must cite the most current dated primary sources. Reports relying on pre-2021 Afghanistan analysis, for example, will carry little weight without addressing current Taliban governance.",
      },
      {
        question: "Where are Afghanistan expert resources available?",
        answer:
          "Afghanistan Country Expert (afghanistancountryexpert.com) provides specialist Afghanistan asylum profiles and regional analysis for UK solicitors.",
      },
    ],
  },
  {
    slug: "europe-balkans",
    title: "Europe & Balkans",
    metaTitle: "Europe & Balkans Country Expert Witness UK | Albania, Kosovo, Western Balkans",
    metaDescription:
      "Europe and Balkans independent country expert witness routing for UK asylum tribunals. Albania blood feud, Kosovo, Serbia, North Macedonia. Organised crime and ethnic persecution.",
    h1: "Europe & Balkans Independent Country Expert Witness UK",
    content: [
      "Western Balkans asylum claims in UK tribunals frequently engage Albania (blood feud, trafficking), Kosovo (ethnic and political persecution), Serbia (minority targeting), and North Macedonia. While claim volumes are lower than African and South Asian nationalities, cases are often legally complex.",
      "Albania Expert Witness provides specialist coverage for blood feud (gjakmarrja), trafficking return, and LGBTQ+ persecution. Other Balkan jurisdictions are routed to network specialists with current field expertise in the relevant country.",
      "EU accession progress and changing country conditions in the Western Balkans require experts with dated primary sources. Internal relocation to capital cities is frequently contested and requires profile-specific analysis.",
    ],
    subRegions: ["Albania", "Kosovo", "Serbia", "North Macedonia", "Bosnia"],
    outboundUrl: "https://www.albaniaexpertwitness.com",
    outboundLabel: "Albania Expert Witness",
    faqs: [
      {
        question: "What are the main Balkans asylum profiles in UK tribunals?",
        answer:
          "Albania blood feud and trafficking, Kosovo ethnic persecution, Serbian minority targeting, and organised crime-related claims. Each requires jurisdiction-specific expert analysis rather than generic Balkans overview.",
      },
      {
        question: "Where is Albania expert evidence guidance available?",
        answer:
          "Albania Expert Witness (albaniaexpertwitness.com) provides specialist Albania asylum profiles and expert evidence resources.",
      },
    ],
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
