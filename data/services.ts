export type Service = {
  id: string;
  title: string;
  navLabel: string;
  description: string;
  expertiseSlug: string;
};

export const services: Service[] = [
  {
    id: "country-condition-reports",
    title: "Independent Country Condition Reports",
    navLabel: "Country Condition Reports",
    description:
      "Profile-specific country condition analysis with dated primary sources — security, governance, human rights, and regional variation beyond generic Home Office CPIN summaries.",
    expertiseSlug: "country-condition-analysis",
  },
  {
    id: "state-protection",
    title: "State Protection Analysis",
    navLabel: "State Protection Analysis",
    description:
      "Willing/able framework assessment, actors of protection analysis, and evaluation of police, military, clan, and informal protection mechanisms for the appellant's profile.",
    expertiseSlug: "state-protection-assessment",
  },
  {
    id: "internal-relocation",
    title: "Internal Relocation Assessment",
    navLabel: "Internal Relocation",
    description:
      "Viability analysis for internal relocation — reasonable in country, unduly harsh test, economic subsistence, and clan networks at the proposed destination.",
    expertiseSlug: "internal-relocation-analysis",
  },
  {
    id: "cpin-challenge",
    title: "CPIN Challenge Reports",
    navLabel: "CPIN Challenge Reports",
    description:
      "Independent rebuttal of Home Office CPIN positions with dated primary sources, identifying gaps, outdated material, and profile-specific conditions not addressed in CPIN analysis.",
    expertiseSlug: "cpin-challenge-reports",
  },
  {
    id: "linguistic-identity",
    title: "Linguistic & Identity Analysis",
    navLabel: "Linguistic & Identity",
    description:
      "Dialect analysis, clan plausibility assessment, geographic consistency, and cultural knowledge evaluation where nationality or identity is disputed.",
    expertiseSlug: "linguistic-clan-identity",
  },
  {
    id: "return-deportation",
    title: "Return & Deportation Risk Reports",
    navLabel: "Return & Deportation Risk",
    description:
      "Article 3 ECHR return risk assessment for deportation and removal cases — security, subsistence, diaspora networks, and destitution threshold analysis.",
    expertiseSlug: "return-deportation-risk",
  },
  {
    id: "fresh-claim-updates",
    title: "Fresh Claim Country Updates",
    navLabel: "Fresh Claim Updates",
    description:
      "Country condition update reports for fresh claims and further submissions — changed conditions, new CPIN material, and post-decision security developments.",
    expertiseSlug: "fresh-claim-updates",
  },
  {
    id: "oral-evidence",
    title: "Oral Evidence at Tribunal",
    navLabel: "Oral Evidence",
    description:
      "FTT and UT hearing attendance — confirming written reports, supplementary oral evidence, cross-examination, and joint expert meetings.",
    expertiseSlug: "oral-evidence-tribunal",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
