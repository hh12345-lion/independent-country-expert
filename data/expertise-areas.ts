import type { FAQ } from "@/lib/schema";

export type ExpertiseArea = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedExpertise: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "country-condition-analysis",
    title: "Country Condition Analysis",
    metaTitle: "Country Condition Analysis Expert Witness UK | Independent Reports",
    metaDescription:
      "Independent country condition expert witness reports for UK asylum tribunals. Security, governance, human rights, profile-specific risk beyond Home Office CPIN with dated primary sources.",
    h1: "Country Condition Analysis Expert Witness UK | Independent Reports",
    content: [
      "Country condition analysis is the foundation of most asylum and immigration tribunal appeals. An independent country expert assesses security, governance, human rights, and socio-political conditions in the appellant's country of origin — applied to their specific profile, region, and circumstances rather than generic Home Office policy summaries.",
      "Under Ikarian Reefer [1993] 2 Lloyd's Rep 68, country experts owe a paramount duty to the tribunal. Reports must cite dated primary sources including ACLED conflict data, UNHCR position papers, FCO travel advice, NGO field reports, and academic research. Regional variation within countries is critical: conditions in Mogadishu differ radically from Somaliland; Lagos from the Niger Delta; Karachi from rural Punjab.",
      "Immigration Tribunal Practice Direction 2024 requires structured expert reports with a default 20-page limit. Adam Pipe guidance (October 2025) reinforces that experts must distinguish assumed facts from independent analysis and avoid advocacy. Tribunals increasingly scrutinise generic or copy-paste country reports that merely restate CPIN content without profile-specific methodology.",
    ],
    faqs: [
      {
        question: "What does a country condition expert report cover?",
        answer:
          "A country condition expert report provides independent evidence on conditions in the appellant's country of origin relevant to their specific profile — security, human rights, state protection, internal relocation, and return risk. Unlike Home Office CPINs, it addresses the individual appellant's circumstances with dated primary sources and expert analysis.",
      },
      {
        question: "Why instruct an independent country expert rather than rely on the CPIN?",
        answer:
          "CPINs provide generic country policy summaries. Independent country experts assess profile-specific risk, regional conditions, and current developments not captured in CPIN updates — with the paramount duty to the tribunal under Ikarian Reefer.",
      },
    ],
    relatedExpertise: ["state-protection-assessment", "cpin-challenge-reports", "fresh-claim-updates"],
  },
  {
    slug: "state-protection-assessment",
    title: "State Protection Assessment",
    metaTitle: "State Protection Assessment Expert Witness UK | Asylum Tribunals",
    metaDescription:
      "State protection expert witness reports for UK asylum tribunals. Willing/able framework, actors of protection, police, military, and clan structures assessed with profile-specific analysis.",
    h1: "State Protection Assessment Expert Witness UK | Asylum Tribunals",
    content: [
      "State protection analysis determines whether the authorities in the country of origin are willing and able to provide effective protection from the feared harm. Country experts assess governance capacity, security forces, judicial systems, and informal protection mechanisms — including clan structures, tribal authorities, and community networks — applied to the appellant's specific profile and area of origin.",
      "The EUAA actors of protection methodology, increasingly cited in UK tribunal decisions, requires granular analysis of which protection actors are relevant to the appellant's circumstances. A police force that protects some communities may be complicit in persecuting others. Clan protection may be effective for members but unavailable to those outside the structure.",
      "Expert witnesses must maintain independence under CPR Part 35 and give honest assessments even where state protection appears available. Reports that automatically conclude protection is unavailable without methodology damage credibility as much as those that uncritically accept CPIN positions on actors of protection.",
    ],
    faqs: [
      {
        question: "How do country experts assess state protection?",
        answer:
          "Experts assess whether the state (or other actors of protection) are willing and able to provide effective protection from the feared harm. This requires analysis of governance capacity, security forces, judicial systems, and informal protection mechanisms such as clan structures — applied to the appellant's specific profile and area of origin.",
      },
      {
        question: "Can clan protection constitute effective protection?",
        answer:
          "In some jurisdictions, clan structures provide genuine protection to members. Expert witnesses assess whether the appellant's clan membership provides viable protection in their specific circumstances — a question frequently central in Somalia MOJ claims and similar analyses.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "internal-relocation-analysis", "return-deportation-risk"],
  },
  {
    slug: "internal-relocation-analysis",
    title: "Internal Relocation Analysis",
    metaTitle: "Internal Relocation Expert Witness UK | Asylum Analysis",
    metaDescription:
      "Internal relocation expert witness reports for UK asylum tribunals. Reasonable in country, unduly harsh test, viability by profile, economic subsistence, and clan networks at relocation destination.",
    h1: "Internal Relocation Expert Witness UK | Asylum Analysis",
    content: [
      "Internal relocation analysis assesses whether the appellant can safely and reasonably relocate to another part of their country of origin. Country experts evaluate security at the proposed destination, economic subsistence prospects, availability of clan or family networks, and whether relocation would be unduly harsh given the appellant's personal circumstances.",
      "The legal framework varies by country and claim type. Somalia MOJ governs Mogadishu return viability; Article 15(c) subsidiary protection applies in conflict zones; Pakistan and Nigeria have distinct relocation jurisprudence shaped by country guidance cases. Experts must apply the correct legal framework while providing country-specific factual analysis.",
      "Home Office internal relocation arguments frequently rely on generic CPIN positions about major cities. Independent experts challenge these with profile-specific analysis: an LGBTQ+ appellant cannot safely relocate to a city where persecution networks operate nationally; a woman fleeing honour-based violence may face the same family structures at the relocation destination.",
    ],
    faqs: [
      {
        question: "What is the expert's role in internal relocation analysis?",
        answer:
          "Country experts assess whether internal relocation to another part of the country is viable for the specific appellant — considering security, economic subsistence, clan or family networks, and whether relocation would be unduly harsh.",
      },
      {
        question: "How does internal relocation differ between countries?",
        answer:
          "The legal framework varies — Somalia MOJ governs Mogadishu return; Article 15(c) applies in conflict zones; Pakistan and Nigeria have distinct relocation jurisprudence. Experts provide country-specific relocation analysis routed through the network.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "state-protection-assessment", "return-deportation-risk"],
  },
  {
    slug: "cpin-challenge-reports",
    title: "CPIN Challenge Reports",
    metaTitle: "CPIN Challenge Expert Report UK | Immigration Tribunal",
    metaDescription:
      "CPIN challenge expert reports for UK immigration tribunals. Identifying CPIN gaps, dated primary source rebuttal, profile-specific conditions, and tribunal weight of expert vs Home Office evidence.",
    h1: "CPIN Challenge Expert Report UK | Immigration Tribunal",
    content: [
      "Home Office Country Policy Information Notes (CPINs) provide the starting point for country evidence in asylum appeals but are not binding on tribunals. Independent country experts identify gaps, outdated material, and mischaracterisations in CPIN analysis — providing dated primary source rebuttal tailored to the appellant's specific profile.",
      "Effective CPIN challenge reports do not simply disagree with Home Office conclusions. They demonstrate methodology: which sources the CPIN relied on, what more recent material exists, how regional or profile-specific conditions differ from the CPIN's general findings, and what limitations apply to the expert's own analysis.",
      "Tribunals weigh all evidence. Independent expert reports demonstrating methodology, dated sources, and profile-specific analysis frequently carry significant weight — particularly where CPIN material is generic, outdated, or fails to address the appellant's circumstances. Adam Pipe 2025 guidance warns against reports that read as advocacy; CPIN challenges must be evidence-led.",
    ],
    faqs: [
      {
        question: "When should solicitors instruct a CPIN challenge expert?",
        answer:
          "When the Home Office CPIN does not address the appellant's specific profile, relies on outdated sources, or mischaracterises country conditions. Independent experts provide dated primary source analysis that rebuts or supplements CPIN conclusions.",
      },
      {
        question: "Do tribunals prefer CPIN or independent expert evidence?",
        answer:
          "Tribunals weigh all evidence. Independent expert reports that demonstrate methodology, dated sources, and profile-specific analysis frequently carry significant weight — particularly where CPIN material is generic or outdated.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "fresh-claim-updates", "country-condition-analysis"],
  },
  {
    slug: "linguistic-clan-identity",
    title: "Linguistic & Clan Identity",
    metaTitle: "Linguistic & Clan Identity Expert Witness UK | Asylum Evidence",
    metaDescription:
      "Linguistic and clan identity expert witness evidence for UK asylum tribunals. Dialect analysis, clan plausibility, geographic consistency, and cultural knowledge assessment.",
    h1: "Linguistic & Clan Identity Expert Witness UK | Asylum Evidence",
    content: [
      "Where the appellant's claimed nationality, ethnicity, clan membership, or regional origin is disputed, linguistic and identity analysis becomes central to the appeal. Linguistic experts assess dialect, vocabulary, accent, and cultural knowledge. Country experts assess clan plausibility against known geographic and demographic patterns.",
      "Single Joint Expert (SJE) directions are common where identity is the primary disputed issue. Both experts must maintain independence under CPR Part 35 and Ikarian Reefer. Reports must distinguish between linguistic capability and claimed identity — an appellant may speak a dialect without belonging to the claimed clan or region.",
      "Experienced country experts with deep knowledge of clan structures often assess plausibility as part of country condition reports. Dedicated linguistic experts may be instructed where identity is the sole disputed issue or where tribunal directions require independent linguistic analysis separate from country conditions evidence.",
    ],
    faqs: [
      {
        question: "When is a linguistic or clan identity expert needed?",
        answer:
          "Where the appellant's claimed nationality, ethnicity, clan membership, or regional origin is disputed by the Home Office. Linguistic experts assess dialect, vocabulary, and cultural knowledge; country experts assess clan plausibility against known geographic and demographic patterns.",
      },
      {
        question: "Can country experts assess clan identity without a separate linguist?",
        answer:
          "Experienced country experts with deep knowledge of clan structures often assess plausibility as part of country condition reports. Dedicated linguistic experts may be instructed where identity is the sole disputed issue or where SJE directions require independent linguistic analysis.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "oral-evidence-tribunal"],
  },
  {
    slug: "return-deportation-risk",
    title: "Return & Deportation Risk",
    metaTitle: "Return & Deportation Risk Expert Witness UK | Article 3 Analysis",
    metaDescription:
      "Return and deportation risk expert witness reports for UK tribunals. Article 3 ECHR return risk, failed asylum seeker profiles, diaspora support networks, and destitution threshold analysis.",
    h1: "Return & Deportation Risk Expert Witness UK | Article 3 Analysis",
    content: [
      "Return risk assessment evaluates conditions the appellant would face on return to their country of origin. This engages Article 3 ECHR in deportation and removal cases, distinct from Refugee Convention persecution analysis in asylum appeals. Country experts assess security risk, economic subsistence, social networks, state hostility to returnees, and whether conditions reach the Article 3 threshold.",
      "Deportation cases with criminal convictions, failed asylum seeker profiles, and voluntary return refusals each require distinct analytical frameworks. Country-specific tests apply: the MOJ diaspora test for Somalia; destitution and Article 3 analysis for failed asylum seekers returned to countries without family support; political risk for those whose asylum claims have been publicised.",
      "Return risk experts work alongside human rights experts where treaty standards are in dispute. Both must maintain independence under CPR Part 35. The country expert addresses factual conditions on return; the human rights expert addresses how those conditions engage ECHR protections.",
    ],
    faqs: [
      {
        question: "What does a return risk expert assess for deportation cases?",
        answer:
          "Experts assess conditions the appellant would face on return — security risk, economic subsistence, social networks, state hostility to returnees, and whether conditions reach the Article 3 threshold. Country-specific frameworks apply (e.g. MOJ diaspora test for Somalia).",
      },
      {
        question: "Are deportation cases different from asylum appeals for expert evidence?",
        answer:
          "Yes — deportation engages Article 3 and Article 8 ECHR rather than Refugee Convention persecution. Country experts assess return conditions; human rights experts address treaty standards. Both must maintain independence under CPR Part 35.",
      },
    ],
    relatedExpertise: ["state-protection-assessment", "internal-relocation-analysis", "fresh-claim-updates"],
  },
  {
    slug: "fresh-claim-updates",
    title: "Fresh Claim Updates",
    metaTitle: "Fresh Claim Country Update Expert Witness UK",
    metaDescription:
      "Fresh claim country condition update expert reports for UK immigration tribunals. Changed conditions since last decision, new CPIN material, security deterioration, and post-decision events.",
    h1: "Fresh Claim Country Update Expert Witness UK",
    content: [
      "Fresh claims and further submissions rely on new or previously unconsidered material that materially affects the risk assessment. Country experts provide update reports addressing changed conditions since the last decision — security deterioration, new country guidance, changed personal circumstances, or updated CPIN material the previous decision did not address.",
      "Source currency is critical for fresh claims. Adam Pipe 2025 and tribunal practice require dated primary sources demonstrating awareness of conditions at the date of the report. An expert report citing conditions from two years ago will carry little weight in a fresh claim relying on changed circumstances.",
      "Update reports should clearly identify what has changed since the previous decision, which sources document the change, and how the change affects the appellant's specific risk profile. Generic country deterioration without profile-specific application is unlikely to satisfy the fresh claim threshold.",
    ],
    faqs: [
      {
        question: "When is expert evidence needed for a fresh claim?",
        answer:
          "When new or previously unconsidered country conditions materially affect the risk assessment — security deterioration, new country guidance, changed personal circumstances, or updated CPIN material that the previous decision did not address.",
      },
      {
        question: "How current must expert sources be?",
        answer:
          "Adam Pipe 2025 and tribunal practice require dated primary sources. Experts must demonstrate awareness of conditions at the date of the report — particularly critical for fresh claims relying on changed circumstances.",
      },
    ],
    relatedExpertise: ["cpin-challenge-reports", "country-condition-analysis", "return-deportation-risk"],
  },
  {
    slug: "oral-evidence-tribunal",
    title: "Oral Evidence at Tribunal",
    metaTitle: "Oral Evidence Country Expert UK | FTT & UT Hearings",
    metaDescription:
      "Country expert oral evidence at FTT and UT hearings. Confirming written reports, supplementary evidence, cross-examination preparation, and independence under questioning.",
    h1: "Oral Evidence Country Expert UK | FTT & UT Hearings",
    content: [
      "Country experts may be directed to give oral evidence at First-tier Tribunal and Upper Tribunal hearings. The expert confirms their written report, may provide supplementary oral evidence within their area of expertise, and faces cross-examination from both parties. Independence is tested under questioning — experts must give honest answers even where they do not support the instructing party's case.",
      "Immigration Tribunal Practice Direction 2024 governs joint expert meetings before hearings. Experts must engage genuinely, identify areas of agreement and disagreement, and must not collude. Joint statements should reflect authentic expert positions, not negotiated advocacy positions.",
      "Solicitors should prepare experts for cross-examination by ensuring consistency between written and oral testimony, rehearsing methodology and source selection, and anticipating challenges on independence, dated sources, and assumed facts. Experts who appear partisan or unprepared damage both their credibility and the client's case.",
    ],
    faqs: [
      {
        question: "Do country experts give oral evidence at tribunal hearings?",
        answer:
          "Yes — where directed by the tribunal or requested by parties. The expert confirms their report, may give supplementary evidence within their expertise, and faces cross-examination. Independence is tested under questioning.",
      },
      {
        question: "How should solicitors prepare experts for cross-examination?",
        answer:
          "Ensure consistency between written and oral testimony; rehearse methodology and source selection; anticipate challenges on independence, dated sources, and assumed facts. Experts must give honest answers even where they do not support the instructing party's case.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "linguistic-clan-identity", "cpin-challenge-reports"],
  },
];

export function getExpertiseArea(slug: string): ExpertiseArea | undefined {
  return expertiseAreas.find((e) => e.slug === slug);
}
