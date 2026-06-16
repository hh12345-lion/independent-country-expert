import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedExpertise: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "ftt-asylum-appeal",
    title: "FTT Asylum Appeal",
    metaTitle: "Independent Country Expert for FTT Asylum Appeals | First-tier Tribunal UK",
    metaDescription:
      "Independent country expert witness for First-tier Tribunal asylum appeals. CPR Part 35 compliant reports, Practice Direction 2024, state protection, and CPIN challenge.",
    h1: "Independent Country Expert for First-tier Tribunal Asylum Appeals",
    content: [
      "First-tier Tribunal (Immigration and Asylum Chamber) appeals are the primary forum for challenging Home Office refusals. Independent country expert reports provide the objective, profile-specific evidence tribunals require to assess credibility, risk on return, state protection, and internal relocation.",
      "Reports must comply with Immigration Tribunal Practice Direction 2024 and the Adam Pipe October 2025 guide on expert reports. The default 20-page limit, mandatory report structure, and independence standards apply to all country expert evidence in FTT proceedings.",
      "Early instruction is critical. Allow 2 to 3 weeks for a standard report. Independent Country Expert routes FTT instructions to the appropriate jurisdiction-specific expert across the network.",
    ],
    faqs: [
      {
        question: "When should I instruct a country expert for a First-tier Tribunal appeal?",
        answer:
          "Instruct as soon as the appeal is lodged and grounds are identified. Allow 2 to 3 weeks for a standard report. Urgent instructions are available for imminent hearings.",
      },
      {
        question: "What should a country expert report for the FTT contain?",
        answer:
          "Reports should address country conditions relevant to the claim, state protection analysis, internal relocation feasibility, consistency with current CPINs, and source citations to dated primary material — with clear distinction between assumed facts and independent opinion.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "state-protection-assessment", "cpin-challenge-reports"],
  },
  {
    slug: "upper-tribunal-appeal",
    title: "Upper Tribunal Appeal",
    metaTitle: "Independent Country Expert Upper Tribunal | UT Asylum Appeals UK",
    metaDescription:
      "Independent country expert witness for Upper Tribunal asylum appeals. Country guidance, departure cases, oral evidence, and highest evidential standards.",
    h1: "Independent Country Expert for Upper Tribunal Proceedings",
    content: [
      "Upper Tribunal (Immigration and Asylum Chamber) proceedings include appeals from FTT decisions, country guidance applications, and departure from guidance cases. Expert evidence in UT work must meet the highest evidential standards under CPR Part 35 and Practice Direction 2024.",
      "Oral evidence is more common in Upper Tribunal proceedings, particularly country guidance cases. Experts must be prepared for rigorous cross-examination on methodology, source selection, and independence.",
      "Independent Country Expert coordinates UT instructions to specialists with tribunal acceptance records and experience in country guidance and complex multi-jurisdictional analysis.",
    ],
    faqs: [
      {
        question: "When is oral evidence required in Upper Tribunal cases?",
        answer:
          "Oral evidence is most common in country guidance cases or where the tribunal directs. Experts should be prepared to give evidence on current country conditions and profile-specific risk under cross-examination.",
      },
      {
        question: "What standards apply to UT expert reports?",
        answer:
          "CPR Part 35, Practice Direction 2024, and Adam Pipe 2025 guidance all apply. UT reports require the highest methodological rigour, dated primary sources, and demonstrable independence.",
      },
    ],
    relatedExpertise: ["oral-evidence-tribunal", "cpin-challenge-reports", "country-condition-analysis"],
  },
  {
    slug: "deportation-removal-article-3",
    title: "Deportation & Removal (Article 3)",
    metaTitle: "Deportation Country Expert Witness UK | Article 3 Return Risk",
    metaDescription:
      "Independent country expert for deportation and removal cases. Article 3 ECHR return risk, failed asylum seeker profiles, and destitution threshold analysis.",
    h1: "Independent Country Expert for Deportation & Removal Cases",
    content: [
      "Deportation and removal cases engage Article 3 and Article 8 ECHR rather than Refugee Convention persecution. Country experts assess conditions the appellant would face on return — security risk, economic subsistence, social networks, and state hostility to returnees.",
      "Failed asylum seeker return profiles, deportation with criminal convictions, and voluntary return refusals each require distinct analytical frameworks. Country-specific tests apply: the MOJ diaspora test for Somalia; destitution analysis for returnees without family support.",
      "Return risk experts work alongside human rights experts where treaty standards are in dispute. Both must maintain independence under CPR Part 35.",
    ],
    faqs: [
      {
        question: "How does deportation expert evidence differ from asylum appeals?",
        answer:
          "Deportation engages Article 3 and Article 8 ECHR rather than Refugee Convention persecution. Country experts assess return conditions; human rights experts address treaty standards.",
      },
      {
        question: "What is the Article 3 threshold for return?",
        answer:
          "Conditions on return must reach a minimum level of severity to engage Article 3. Country experts assess factual conditions; the tribunal determines whether the threshold is met.",
      },
    ],
    relatedExpertise: ["return-deportation-risk", "state-protection-assessment"],
  },
  {
    slug: "fresh-claims-further-submissions",
    title: "Fresh Claims & Further Submissions",
    metaTitle: "Fresh Claim Country Expert Witness UK | Further Submissions",
    metaDescription:
      "Independent country expert for fresh claims and further submissions. Changed country conditions, new CPIN material, and post-decision security developments.",
    h1: "Independent Country Expert for Fresh Claims & Further Submissions",
    content: [
      "Fresh claims and further submissions require new or previously unconsidered material that materially affects the risk assessment. Country experts provide update reports addressing changed conditions since the last decision.",
      "Source currency is critical. Adam Pipe 2025 requires dated primary sources demonstrating awareness of conditions at the report date. Generic country deterioration without profile-specific application is unlikely to satisfy the fresh claim threshold.",
      "Independent Country Expert routes fresh claim instructions urgently where deadlines are tight, ensuring experts with current knowledge of the relevant jurisdiction are available.",
    ],
    faqs: [
      {
        question: "When is expert evidence needed for a fresh claim?",
        answer:
          "When new or previously unconsidered country conditions materially affect the risk assessment — security deterioration, new country guidance, or updated CPIN material the previous decision did not address.",
      },
      {
        question: "How current must sources be for fresh claims?",
        answer:
          "Experts must demonstrate awareness of conditions at the date of the report with dated primary sources. Reports citing outdated conditions carry little weight in fresh claim proceedings.",
      },
    ],
    relatedExpertise: ["fresh-claim-updates", "cpin-challenge-reports"],
  },
  {
    slug: "country-guidance-challenges",
    title: "Country Guidance Challenges",
    metaTitle: "Country Guidance Challenge Expert Witness UK | CG Cases",
    metaDescription:
      "Independent country expert for country guidance challenges. Highest methodological rigour, oral evidence, and tribunal-wide precedent analysis.",
    h1: "Independent Country Expert for Country Guidance Challenges",
    content: [
      "Country guidance (CG) cases establish tribunal-wide precedent binding on First-tier Tribunals unless distinguished. Expert evidence in CG challenges requires the highest methodological rigour — dated primary sources, transparent limitations, and analysis that addresses the guidance question directly.",
      "CG challenges frequently involve oral evidence and rigorous cross-examination. Experts must be prepared to defend their methodology and conclusions under questioning from multiple parties and the tribunal itself.",
      "Independent Country Expert coordinates CG instructions to senior experts with Upper Tribunal experience and demonstrated independence in previous country guidance proceedings.",
    ],
    faqs: [
      {
        question: "What makes country guidance expert evidence different?",
        answer:
          "CG cases establish binding precedent. Expert evidence must meet the highest evidential standards, address the guidance question directly, and withstand rigorous cross-examination at the Upper Tribunal.",
      },
      {
        question: "Which experts handle country guidance challenges?",
        answer:
          "Independent Country Expert routes CG instructions to senior network experts with Upper Tribunal experience and demonstrated independence in country guidance proceedings.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "oral-evidence-tribunal", "cpin-challenge-reports"],
  },
  {
    slug: "judicial-review-expert-evidence",
    title: "Judicial Review Expert Evidence",
    metaTitle: "Judicial Review Country Expert Witness UK | JR Proceedings",
    metaDescription:
      "Independent country expert evidence for judicial review proceedings. Country conditions material to JR grounds, expedited instruction, and CPR Part 35 compliance.",
    h1: "Independent Country Expert for Judicial Review Proceedings",
    content: [
      "Judicial review proceedings may require country expert evidence where country conditions are material to the grounds of challenge — for example, where the Home Office failed to consider relevant country evidence or misapplied country guidance.",
      "JR expert reports must be prepared to tight deadlines. Independent Country Expert coordinates expedited instructions where JR permission or substantive hearing dates require urgent expert analysis.",
      "Experts in JR proceedings must maintain the same independence standards as tribunal proceedings under CPR Part 35. Reports prepared for JR may subsequently be relied upon in related tribunal proceedings.",
    ],
    faqs: [
      {
        question: "When is country expert evidence needed in judicial review?",
        answer:
          "Where country conditions are material to the JR grounds — for example, failure to consider relevant country evidence, misapplication of country guidance, or reliance on outdated CPIN material.",
      },
      {
        question: "Can JR expert reports be used in tribunal proceedings?",
        answer:
          "Yes — reports prepared for JR may subsequently be relied upon in related tribunal proceedings, subject to exchange requirements and tribunal directions.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "cpin-challenge-reports"],
  },
  {
    slug: "article-15c-subsidiary-protection",
    title: "Article 15(c) Subsidiary Protection",
    metaTitle: "Article 15(c) Country Expert Witness UK | Subsidiary Protection",
    metaDescription:
      "Independent country expert for Article 15(c) subsidiary protection claims. Conflict zones, indiscriminate violence, and Qualification Directive analysis.",
    h1: "Independent Country Expert for Article 15(c) Subsidiary Protection",
    content: [
      "Article 15(c) of the Qualification Directive provides subsidiary protection where the appellant faces a real risk of serious harm from indiscriminate violence in situations of international or internal armed conflict. Country experts assess conflict conditions, security situation, and whether the appellant's specific circumstances engage Article 15(c).",
      "Article 15(c) analysis differs from individual persecution assessment under the Refugee Convention. Experts must address the level of indiscriminate violence in the relevant region and whether the appellant would face a real risk by virtue of presence in the conflict zone.",
      "Conflict zones including Somalia, Afghanistan, Sudan, and parts of Nigeria and Pakistan frequently engage Article 15(c). Network routing ensures jurisdiction-specific conflict analysis.",
    ],
    faqs: [
      {
        question: "How does Article 15(c) differ from Refugee Convention claims?",
        answer:
          "Article 15(c) engages indiscriminate violence in conflict situations rather than individual persecution. Country experts assess conflict conditions and whether the appellant faces real risk from presence in the conflict zone.",
      },
      {
        question: "Which countries commonly engage Article 15(c)?",
        answer:
          "Somalia, Afghanistan, Sudan, and parts of Nigeria, Pakistan, and other conflict-affected countries. Jurisdiction-specific conflict analysis is essential.",
      },
    ],
    relatedExpertise: ["country-condition-analysis", "return-deportation-risk"],
  },
  {
    slug: "single-joint-expert-directions",
    title: "Single Joint Expert Directions",
    metaTitle: "Single Joint Expert Country Witness UK | SJE Directions",
    metaDescription:
      "Independent country expert for Single Joint Expert directions. Joint instructions, joint meetings, and independence under shared appointment.",
    h1: "Independent Country Expert for Single Joint Expert Directions",
    content: [
      "Single Joint Expert (SJE) directions appoint one expert instructed jointly by both parties. The expert owes the same paramount duty to the tribunal under Ikarian Reefer, regardless of joint instruction. Independence must be maintained throughout.",
      "Joint expert meetings before hearings must be genuine — identifying areas of agreement and disagreement without collusion. Joint statements should reflect authentic expert positions, not negotiated advocacy.",
      "SJE directions are common where identity, linguistic capability, or country conditions are disputed but the tribunal considers a single expert appropriate. Independent Country Expert provides SJE-qualified experts across the network.",
    ],
    faqs: [
      {
        question: "Does a Single Joint Expert owe a duty to both parties?",
        answer:
          "No — the SJE owes a paramount duty to the tribunal under Ikarian Reefer, regardless of joint instruction. The expert must assist the tribunal, not either party.",
      },
      {
        question: "When are SJE directions used for country experts?",
        answer:
          "Where identity, linguistic capability, or country conditions are disputed but the tribunal considers a single expert appropriate. Common in linguistic/clan identity disputes.",
      },
    ],
    relatedExpertise: ["linguistic-clan-identity", "oral-evidence-tribunal"],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
