import type { FAQ } from "@/lib/schema";

/** Additional FAQs per expertise area — merged with base faqs on each expertise page */
export const expertiseFaqExtra: Record<string, FAQ[]> = {
  "country-condition-analysis": [
    {
      question: "What primary sources should a country condition report cite?",
      answer:
        "Dated primary sources include ACLED conflict data, UNHCR position papers, FCO travel advice, NGO field reports, and peer-reviewed research. Experts must state source dates and limitations under Practice Direction 2024 and Adam Pipe 2025 guidance.",
    },
    {
      question: "How long does a country condition report take to prepare?",
      answer:
        "Standard reports typically require 2 to 3 weeks. Urgent instructions are available for imminent hearings. Early instruction avoids tribunal exchange deadline issues.",
    },
    {
      question: "Is country condition evidence required for every asylum appeal?",
      answer:
        "Not every appeal requires expert evidence, but it is essential where the Home Office relies on generic CPIN positions, profile-specific risk is disputed, or country conditions have changed materially since the last decision.",
    },
    {
      question: "Can country experts address regional variation within a country?",
      answer:
        "Yes — effective country condition analysis must address regional variation. Conditions in Mogadishu differ from Somaliland; Lagos from the Niger Delta; urban centres from rural areas. Generic national summaries are insufficient.",
    },
  ],
  "state-protection-assessment": [
    {
      question: "What is the willing and able test for state protection?",
      answer:
        "The tribunal asks whether the state (or other actors of protection) is willing and able to provide effective protection from the feared harm. Experts assess governance capacity, law enforcement effectiveness, and judicial independence applied to the appellant's profile.",
    },
    {
      question: "How does EUAA actors of protection guidance apply in UK tribunals?",
      answer:
        "EUAA Country Guidance on actors of protection is persuasive in UK proceedings. Experts assess whether identified protection actors — police, military, clan structures — can realistically protect the specific appellant.",
    },
    {
      question: "When does state protection fail in expert analysis?",
      answer:
        "Protection fails where authorities are unwilling (complicit or indifferent) or unable (lack capacity or reach) to protect the appellant. Experts must give honest assessments even where limited protection exists.",
    },
    {
      question: "Should state protection analysis be separate from country conditions?",
      answer:
        "State protection is often addressed within a comprehensive country condition report but may be instructed as a distinct question where the Home Office relies heavily on actors of protection arguments.",
    },
  ],
  "internal-relocation-analysis": [
    {
      question: "What is the unduly harsh test for internal relocation?",
      answer:
        "Relocation must not be unduly harsh for the specific appellant considering personal circumstances — age, health, gender, economic subsistence, and social networks. Experts assess viability, not just geographic distance.",
    },
    {
      question: "When will the Home Office argue internal relocation?",
      answer:
        "The Home Office frequently argues relocation to major cities is viable. Independent experts challenge generic CPIN positions with profile-specific analysis of whether persecutors have national reach.",
    },
    {
      question: "Does Article 15(c) affect internal relocation analysis?",
      answer:
        "In conflict-zone claims, Article 15(c) subsidiary protection and individual risk frameworks interact with relocation analysis. Experts must apply the correct legal framework for the claim type and country.",
    },
    {
      question: "Can economic conditions make relocation unduly harsh?",
      answer:
        "Yes — where the appellant cannot subsist economically at the relocation destination without family or clan support, and no viable livelihood exists, experts assess whether relocation would be unduly harsh.",
    },
  ],
  "cpin-challenge-reports": [
    {
      question: "How do experts identify gaps in Home Office CPINs?",
      answer:
        "Experts compare CPIN sources and dates against current primary material, identify profile-specific conditions not addressed, and assess whether CPIN generalisations mischaracterise conditions for the appellant's region or community.",
    },
    {
      question: "Can a CPIN challenge report stand alone without a full country report?",
      answer:
        "Yes — focused CPIN challenge reports rebut specific CPIN findings with dated primary sources. Comprehensive country condition reports may also incorporate CPIN challenge analysis.",
    },
    {
      question: "What weight do tribunals give expert evidence vs CPIN?",
      answer:
        "Tribunals weigh all evidence. Independent expert reports with methodology, dated sources, and profile-specific analysis frequently carry significant weight where CPIN material is generic or outdated.",
    },
    {
      question: "How does Adam Pipe 2025 affect CPIN challenge reports?",
      answer:
        "Experts must distinguish assumed facts from independent analysis and avoid advocacy. CPIN challenges must be evidence-led with transparent methodology, not partisan disagreement with Home Office policy.",
    },
  ],
  "linguistic-clan-identity": [
    {
      question: "What is the difference between linguistic and country expert identity analysis?",
      answer:
        "Linguistic experts assess dialect, vocabulary, and cultural knowledge. Country experts assess clan plausibility against geographic and demographic patterns. Both maintain independence under CPR Part 35.",
    },
    {
      question: "When are Single Joint Expert directions used for identity?",
      answer:
        "SJE directions appoint one expert jointly instructed by both parties where identity is the primary disputed issue. The expert owes a paramount duty to the tribunal under Ikarian Reefer.",
    },
    {
      question: "Can linguistic analysis alone prove nationality?",
      answer:
        "Linguistic capability alone does not prove claimed identity. Experts distinguish between speaking a dialect and belonging to a claimed clan, ethnicity, or region.",
    },
    {
      question: "How do experts assess geographic consistency of identity claims?",
      answer:
        "Country experts assess whether claimed clan, ethnic, or regional origin is plausible given known demographic patterns, migration history, and the appellant's stated background.",
    },
  ],
  "return-deportation-risk": [
    {
      question: "What is the Article 3 threshold for return?",
      answer:
        "Conditions on return must reach a minimum level of severity to engage Article 3 ECHR. Country experts assess factual conditions; the tribunal determines whether the threshold is met.",
    },
    {
      question: "How does the Somalia MOJ diaspora test apply to return risk?",
      answer:
        "In Somalia deportation cases, experts assess whether the appellant has viable diaspora support networks in Mogadishu and whether return conditions engage Article 3 for the specific profile.",
    },
    {
      question: "Do failed asylum seekers face different return risk analysis?",
      answer:
        "Yes — failed asylum seeker profiles engage destitution, social stigma, and state hostility to returnees. Experts assess conditions specific to failed asylum seekers, not just general country conditions.",
    },
    {
      question: "Should human rights experts be instructed alongside country experts?",
      answer:
        "For deportation cases engaging Article 3 and Article 8, country experts assess factual return conditions while human rights experts address treaty standards. Both must maintain independence.",
    },
  ],
  "fresh-claim-updates": [
    {
      question: "What qualifies as a fresh claim requiring expert evidence?",
      answer:
        "New or previously unconsidered material that materially affects the risk assessment — security deterioration, new country guidance, changed personal circumstances, or updated CPIN material not addressed in the previous decision.",
    },
    {
      question: "How do experts document changed country conditions?",
      answer:
        "Update reports identify what changed since the previous decision, cite dated primary sources documenting the change, and explain how the change affects the appellant's specific risk profile.",
    },
    {
      question: "Can an update report reference the previous expert report?",
      answer:
        "Yes — experts should address the previous decision and any prior expert evidence, explaining what new material exists and why it was not previously considered or is now materially different.",
    },
    {
      question: "What is the timeline for fresh claim expert reports?",
      answer:
        "Fresh claims often have tight deadlines. Instruct as soon as new material is identified. Urgent reports are available where tribunal or Home Office deadlines require expedited analysis.",
    },
  ],
  "oral-evidence-tribunal": [
    {
      question: "When does the tribunal direct oral evidence from country experts?",
      answer:
        "The tribunal may direct oral evidence in country guidance cases, where expert evidence is hotly disputed, or where written reports require clarification. Parties may also request expert attendance.",
    },
    {
      question: "What happens at a joint expert meeting?",
      answer:
        "Under Practice Direction 2024, experts meet before hearing to identify agreement and disagreement. Meetings must be genuine — not collusion. Joint statements reflect authentic expert positions.",
    },
    {
      question: "Can experts give evidence beyond their written report?",
      answer:
        "Experts may give supplementary oral evidence within their area of expertise but must not introduce new opinions not foreshadowed in the written report without tribunal permission.",
    },
    {
      question: "What cross-examination challenges should experts expect?",
      answer:
        "Challenges on independence, source dating, assumed facts, methodology, and consistency between written and oral testimony. Experts must give honest answers even where they do not support the instructing party.",
    },
  ],
};

export function getAllExpertiseFaqs(slug: string, baseFaqs: FAQ[]): FAQ[] {
  const extra = expertiseFaqExtra[slug] ?? [];
  return [...baseFaqs, ...extra];
}
