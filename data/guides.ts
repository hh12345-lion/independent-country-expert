export type Guide = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sections: { heading: string; content: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "expert-independence-guide",
    metaTitle: "Expert Independence in Immigration Tribunals | Solicitor's Guide 2025–2026",
    metaDescription:
      "Complete solicitor's guide to expert independence in UK immigration tribunals. Ikarian Reefer, CPR Part 35, Practice Direction 2024, Adam Pipe 2025, and cross-examination readiness.",
    h1: "Expert Independence in Immigration Tribunals: Complete Solicitor's Guide",
    sections: [
      {
        heading: "The Paramount Duty Under Ikarian Reefer",
        content: [
          "Under Ikarian Reefer [1993] 2 Lloyd's Rep 68, expert witnesses owe a paramount duty to the tribunal to provide independent, objective evidence — regardless of who instructs or pays them. Country experts must not advocate for the instructing party. This duty is the defining quality of expert evidence in UK immigration tribunals.",
          "Solicitors should assess independence before instruction: review previous reports for advocacy language, check whether the expert has only ever been instructed by claimant firms, and evaluate whether the expert's conclusions follow inexorably from assumed facts without independent verification.",
        ],
      },
      {
        heading: "CPR Part 35 and Practice Direction 2024",
        content: [
          "CPR Part 35 governs expert evidence and is applied by analogy in immigration tribunal proceedings. Practice Direction 2024 introduces mandatory report structure, a default 20-page limit, and strict exchange deadlines. Non-compliant expert evidence may be refused or given reduced weight.",
          "Solicitors should ensure letters of instruction comply with PD 2024 requirements and that experts understand the mandatory report sections before commencing work.",
        ],
      },
      {
        heading: "Adam Pipe Guidance 2025",
        content: [
          "The October 2025 guidance by Adam Pipe reinforces that experts must distinguish assumed facts from independent analysis. Reports that read as advocacy — where conclusions follow inexorably from assumed facts without independent verification — damage credibility and may result in reduced tribunal weight.",
          "Experts must state limitations clearly, cite dated primary sources, and avoid language that suggests they are advancing the client's case rather than assisting the tribunal.",
        ],
      },
      {
        heading: "Cross-Examination Readiness",
        content: [
          "Independence is tested under cross-examination. Solicitors should prepare experts by ensuring consistency between written and oral testimony, rehearsing methodology and source selection, and anticipating challenges on independence, dated sources, and assumed facts.",
          "Experts must give honest answers even where they do not support the instructing party's case. Preparation that encourages experts to defend the client's position rather than assist the tribunal is a serious professional conduct risk.",
        ],
      },
    ],
  },
  {
    slug: "instructing-country-expert-guide",
    metaTitle: "Instructing an Independent Country Expert | Solicitor's Guide",
    metaDescription:
      "How to instruct an independent country expert witness. Letter of instruction, documents needed, Legal Aid prior authority, tribunal exchange deadlines, and network routing.",
    h1: "Instructing an Independent Country Expert: A Solicitor's Guide",
    sections: [
      {
        heading: "Letter of Instruction",
        content: [
          "The letter of instruction should set out the expert's duty to the tribunal, the questions to be addressed, assumed facts (clearly distinguished from matters requiring independent analysis), documents enclosed, and the deadline for the report. Practice Direction 2024 specifies mandatory content for expert instructions.",
          "Include the appellant's full profile: nationality, ethnicity, clan, region, political associations, and the specific harm feared. Generic instructions produce generic reports that tribunals give reduced weight.",
        ],
      },
      {
        heading: "Documents and Materials",
        content: [
          "Provide the expert with the Home Office refusal letter, screening interview record, witness statement, any previous country evidence relied upon by the Home Office, relevant CPINs, and country guidance decisions. For fresh claims, include the previous determination and any new material.",
          "Do not withhold adverse material. Experts who discover withheld documents during preparation or cross-examination face serious credibility challenges.",
        ],
      },
      {
        heading: "Legal Aid Prior Authority",
        content: [
          "Legal Aid cases require prior authority from the Legal Aid Agency before instructing an expert. Apply early with a clear scope of work, proposed fee, and justification for why expert evidence is necessary. CRM documentation should record the instruction timeline.",
          "Independent Country Expert provides fee estimates compatible with LAA expert witness rates for standard country condition reports across all major jurisdictions.",
        ],
      },
      {
        heading: "Network Routing",
        content: [
          "Independent Country Expert coordinates instruction across the network — routing Somalia cases to Somalia Expert, Nigeria to Nigeria Expert, Pakistan to Pakistan Country Expert, and multi-country African or South Asian cases to the appropriate regional specialist.",
          "Submit your case details via the contact form specifying country/jurisdiction and expertise needed. We respond within one business day with proposed expert, scope, and timeline.",
        ],
      },
    ],
  },
  {
    slug: "cpin-vs-expert-report-guide",
    metaTitle: "CPIN vs Independent Expert Report | When Solicitors Need Both",
    metaDescription:
      "CPIN vs independent expert report guide for UK asylum solicitors. CPIN limitations, expert added value, challenge methodology, and tribunal weight.",
    h1: "CPIN vs Independent Expert Report: When Solicitors Need Both",
    sections: [
      {
        heading: "What CPINs Provide",
        content: [
          "Home Office Country Policy Information Notes (CPINs) provide generic country policy summaries based on Home Office country of origin information. They are the starting point for country evidence but are not binding on tribunals and may be challenged with independent expert analysis.",
          "CPINs are updated periodically but may lag behind current conditions. They address general country situations rather than the specific profile, region, and circumstances of the individual appellant.",
        ],
      },
      {
        heading: "What Independent Experts Add",
        content: [
          "Independent country experts address the individual appellant's profile with dated primary sources and expert analysis. They assess regional variation, profile-specific risk, state protection for the appellant's circumstances, and internal relocation viability — going beyond CPIN generalisations.",
          "Under Ikarian Reefer, experts owe a paramount duty to the tribunal. Their analysis is independent of Home Office policy positions and must be evidence-led rather than advocacy-driven.",
        ],
      },
      {
        heading: "When to Instruct Both",
        content: [
          "Solicitors frequently cite the relevant CPIN in submissions while instructing an expert to provide profile-specific analysis that supplements or challenges CPIN conclusions. This is particularly important where the CPIN does not address the appellant's profile or relies on outdated sources.",
          "Expert reports that merely restate CPIN content without independent analysis are identified as a red flag in the Adam Pipe 2025 guidance.",
        ],
      },
      {
        heading: "Tribunal Weight",
        content: [
          "Tribunals weigh all evidence. Independent expert reports demonstrating methodology, dated sources, and profile-specific analysis frequently carry significant weight — particularly where CPIN material is generic or outdated. The expert's independence and oral evidence performance also affect weight.",
        ],
      },
    ],
  },
  {
    slug: "choosing-country-expert-guide",
    metaTitle: "Choosing the Right Country Expert for Your Asylum Case",
    metaDescription:
      "How to choose the right country expert witness. Jurisdiction matching, profile expertise, independence indicators, network routing, and qualifications checklist.",
    h1: "Choosing the Right Country Expert for Your Asylum Case",
    sections: [
      {
        heading: "Jurisdiction Matching",
        content: [
          "The most critical factor is genuine expertise in the relevant country. An expert with broad 'Africa' or 'South Asia' experience but no deep knowledge of the specific jurisdiction will produce reports that tribunals give reduced weight. Match the expert to the country, not the region.",
          "Independent Country Expert routes instructions to jurisdiction-specific specialists across the network, ensuring solicitors instruct experts with demonstrated field expertise.",
        ],
      },
      {
        heading: "Profile Expertise",
        content: [
          "Beyond country knowledge, assess whether the expert has experience with the appellant's specific profile — LGBTQ+ persecution, clan analysis, political opposition, FGM, trafficking, or linguistic identity. Profile expertise affects report quality and tribunal acceptance.",
        ],
      },
      {
        heading: "Independence Indicators",
        content: [
          "Review previous reports for advocacy language, assess whether the expert has been instructed by both claimant and respondent firms, check tribunal acceptance records, and evaluate methodology transparency. Experts who have only ever supported one side raise independence concerns.",
        ],
      },
      {
        heading: "Qualifications Checklist",
        content: [
          "Assess: deep country-specific field expertise; relevant language capability; academic and professional background; prior tribunal acceptance record; demonstrable independence; UNHCR, NGO, or government advisory experience where relevant; and compliance with CPR Part 35 and Practice Direction 2024.",
        ],
      },
    ],
  },
  {
    slug: "oral-evidence-country-expert-guide",
    metaTitle: "Oral Evidence from Country Experts at the FTT | Preparation Guide",
    metaDescription:
      "Country expert oral evidence preparation guide. FTT hearing procedure, cross-examination, joint statements, and independence under questioning.",
    h1: "Oral Evidence from Country Experts at the FTT: Preparation Guide",
    sections: [
      {
        heading: "Hearing Procedure",
        content: [
          "Country experts attending FTT hearings confirm their written report, may provide supplementary oral evidence within their area of expertise, and face cross-examination from both parties. The tribunal may also question the expert directly. Experts must take the oath or affirm before giving evidence.",
        ],
      },
      {
        heading: "Preparation",
        content: [
          "Ensure consistency between written and oral testimony. Rehearse methodology and source selection. Anticipate challenges on independence, dated sources, assumed facts, and areas where the expert's conclusions do not support the client's case. Provide the expert with the hearing bundle and any supplementary documents.",
        ],
      },
      {
        heading: "Joint Expert Meetings",
        content: [
          "Where multiple experts are instructed, Practice Direction 2024 requires joint meetings before the hearing. Experts must engage genuinely, identify areas of agreement and disagreement, and produce a joint statement reflecting authentic positions — not collusion or negotiated advocacy.",
        ],
      },
      {
        heading: "Independence Under Questioning",
        content: [
          "Cross-examination tests independence. Experts must give honest answers even where they do not support the instructing party's case. Solicitors should not prepare experts to defend the client's position — preparation should focus on assisting the tribunal with clear, honest, evidence-based testimony.",
        ],
      },
    ],
  },
  {
    slug: "legal-aid-country-expert-guide",
    metaTitle: "Legal Aid and Country Expert Witness Fees | 2026 Guide",
    metaDescription:
      "Legal Aid country expert witness fees 2026 guide. Prior authority, fee rates, exceptional cases, CRM documentation, and instruction timeline.",
    h1: "Legal Aid and Country Expert Witness Fees: 2026 Guide",
    sections: [
      {
        heading: "Prior Authority Requirements",
        content: [
          "Legal Aid cases require prior authority from the Legal Aid Agency before instructing an expert witness. Apply with a clear scope of work, proposed fee within LAA rates, and justification for why expert evidence is necessary to the case. Do not instruct before authority is granted.",
        ],
      },
      {
        heading: "Fee Rates 2026",
        content: [
          "LAA expert witness fee rates for country experts are set annually. Standard country condition reports typically fall within the published rates for expert witness work in immigration proceedings. Complex reports, oral evidence, and urgent instructions may require exceptional funding applications.",
          "Independent Country Expert provides fee estimates compatible with LAA rates. Contact us with your case details for a scope-specific estimate before applying for prior authority.",
        ],
      },
      {
        heading: "CRM Documentation",
        content: [
          "Record the instruction timeline in your CRM: date of prior authority application, date granted, date of instruction, report delivery deadline, and date of exchange. Accurate CRM records support LAA audit and billing.",
        ],
      },
      {
        heading: "Exceptional Cases",
        content: [
          "Where standard rates are insufficient — for example, complex multi-country analysis, urgent hearings, or extended oral evidence — apply for exceptional funding with detailed justification. The LAA considers the complexity of the case and the necessity of the expert evidence.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
