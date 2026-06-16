import type { FAQ } from "@/lib/schema";

export type Country = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  keyProfiles: string[];
  outboundUrl: string;
  outboundLabel: string;
  networkSite: string;
};

export const countries: Country[] = [
  {
    slug: "somalia",
    title: "Somalia",
    metaTitle: "Somalia Independent Country Expert Witness UK | MOJ & Asylum Tribunals",
    metaDescription:
      "Somalia independent country expert witness for UK asylum tribunals. MOJ framework, clan analysis, Al-Shabaab risk, FGM, and Mogadishu return. Routed to Somalia Expert for deep content.",
    h1: "Somalia Independent Country Expert Witness UK",
    content: [
      "Somalia is among the most complex asylum jurisdictions in UK immigration tribunals. Multiple layers of country guidance — MOJ, OA, AMM — apply radically different legal treatment across Mogadishu, Somaliland, Puntland, and South/Central regions. The security situation evolves rapidly, requiring independent experts with dated primary sources and profile-specific analysis.",
      "Key Somalia asylum profiles include clan-based persecution, Al-Shabaab targeting, FGM and gender-based violence, minority religious persecution, and Mogadishu return under the MOJ framework. Independence matters acutely in Somalia cases: tribunals scrutinise whether experts have relied uncritically on MOJ country guidance or provided genuine independent analysis of the appellant's specific circumstances.",
      "Independent Country Expert coordinates Somalia instructions to specialist experts via Somalia Expert, which provides comprehensive MOJ framework analysis, regional pages, asylum profiles, and CPIN guidance for UK solicitors.",
    ],
    keyProfiles: ["Clan persecution", "Al-Shabaab risk", "FGM", "Mogadishu return (MOJ)", "Minority religions"],
    outboundUrl: "https://www.somaliaexpert.com",
    outboundLabel: "Somalia Expert",
    networkSite: "somaliaexpert.com",
    faqs: [
      {
        question: "Why is Somalia one of the most complex asylum jurisdictions?",
        answer:
          "Somalia has multiple layers of country guidance (MOJ, OA, AMM), radically different regional legal treatment (Mogadishu, Somaliland, Puntland, South/Central), and a rapidly evolving security situation. Independent Somalia experts must navigate this complexity with dated sources and profile-specific analysis.",
      },
      {
        question: "Where can I find Somalia-specific expert evidence guidance?",
        answer:
          "Somalia Expert (somaliaexpert.com) provides comprehensive Somalia asylum profiles, MOJ framework analysis, regional pages, and CPIN guidance for UK solicitors.",
      },
    ],
  },
  {
    slug: "nigeria",
    title: "Nigeria",
    metaTitle: "Nigeria Independent Country Expert Witness UK | Asylum Tribunals",
    metaDescription:
      "Nigeria independent country expert witness for UK asylum tribunals. LGBTQ+, Boko Haram, IPOB, witchcraft, FGM profiles. Routed to Nigeria Expert for specialist evidence.",
    h1: "Nigeria Independent Country Expert Witness UK",
    content: [
      "Nigeria generates one of the highest volumes of asylum claims in the UK. Key profiles include LGBTQ+ persecution under SSMPA, Boko Haram and ISWAP targeting, IPOB political persecution, witchcraft accusations, FGM, and Christian-Muslim communal violence. Home Office refusals frequently rely on generic CPIN positions that do not reflect profile-specific risk.",
      "Independent Nigeria country experts assess conditions with dated Nigerian primary sources — EUAA Country Guidance Nigeria 2026, updated SOGIESC and separatist CPINs, and field research. Experts must maintain the paramount duty to the tribunal under Ikarian Reefer, providing analysis beyond CPIN summaries.",
      "For comprehensive Nigeria asylum profiles, CPIN analysis, and regional expert evidence guidance, solicitors should consult Nigeria Expert via the network routing below.",
    ],
    keyProfiles: ["LGBTQ+ / SSMPA", "Boko Haram / ISWAP", "IPOB / Biafra", "Witchcraft accusations", "FGM"],
    outboundUrl: "https://www.nigeriaexpert.com",
    outboundLabel: "Nigeria Expert",
    networkSite: "nigeriaexpert.com",
    faqs: [
      {
        question: "What Nigeria asylum profiles require independent expert evidence?",
        answer:
          "Key profiles include LGBTQ+ persecution, Boko Haram and ISWAP targeting, IPOB political persecution, witchcraft accusations, FGM, and Christian-Muslim communal violence. Independent experts assess profile-specific risk with dated Nigerian primary sources.",
      },
      {
        question: "Where is detailed Nigeria expert guidance available?",
        answer:
          "Nigeria Expert (nigeriaexpert.com) provides Nigeria-specific asylum profiles, CPIN analysis, and regional expert evidence guidance.",
      },
    ],
  },
  {
    slug: "pakistan",
    title: "Pakistan",
    metaTitle: "Pakistan Independent Country Expert Witness UK | Ahmadi & Blasphemy",
    metaDescription:
      "Pakistan independent country expert witness for UK asylum tribunals. Ahmadis, blasphemy, HBV, LGBTQ+, political persecution. Routed to Pakistan Country Expert.",
    h1: "Pakistan Independent Country Expert Witness UK",
    content: [
      "Pakistan asylum claims are legally dense, frequently engaging blasphemy law (s.295-C PPC), Ahmadi persecution, honour-based violence, and political persecution (PTI, TLP). MN and Others [2012] country guidance and updated CPINs require careful expert analysis of profile-specific risk beyond generic Home Office positions.",
      "Independent Pakistan experts address regional variation — conditions in Karachi differ from rural Punjab; Ahmadi communities face distinct persecution patterns; blasphemy allegations carry lethal risk regardless of urban/rural location. Reports must cite dated primary sources and maintain independence under CPR Part 35.",
      "Pakistan Country Expert provides comprehensive Pakistan asylum profiles, CPIN guidance, and Ahmadi/blasphemy expert evidence resources for UK solicitors.",
    ],
    keyProfiles: ["Ahmadi persecution", "Blasphemy (s.295-C)", "Honour-based violence", "LGBTQ+", "Political (PTI/TLP)"],
    outboundUrl: "https://www.pakistancountryexpert.com",
    outboundLabel: "Pakistan Country Expert",
    networkSite: "pakistancountryexpert.com",
    faqs: [
      {
        question: "Why are Pakistan asylum claims legally dense?",
        answer:
          "Pakistan cases frequently engage blasphemy law (s.295-C PPC), Ahmadi persecution, honour-based violence, and political persecution (PTI, TLP). MN and Others [2012] country guidance and updated CPINs require careful expert analysis of profile-specific risk.",
      },
      {
        question: "Where is detailed Pakistan expert guidance available?",
        answer:
          "Pakistan Country Expert (pakistancountryexpert.com) provides comprehensive Pakistan asylum profiles, CPIN guidance, and Ahmadi/blasphemy expert evidence resources.",
      },
    ],
  },
  {
    slug: "afghanistan",
    title: "Afghanistan",
    metaTitle: "Afghanistan Independent Country Expert Witness UK | Taliban & Asylum",
    metaDescription:
      "Afghanistan independent country expert witness for UK asylum tribunals. Taliban persecution, women's rights, Hazara, former ANSF. Routed to Afghanistan Country Expert.",
    h1: "Afghanistan Independent Country Expert Witness UK",
    content: [
      "Afghanistan asylum claims have intensified since the Taliban takeover in August 2021. Key profiles include former Afghan National Security Forces (ANSF) and government employees, women's rights activists, Hazara and other ethnic minorities, LGBTQ+ individuals, journalists, and those associated with Western organisations.",
      "Country conditions change rapidly under Taliban governance. Independent experts must cite the most current primary sources and assess profile-specific risk at the date of the report. Tribunals scrutinise whether experts have relied on pre-2021 analysis without addressing current Taliban policies on education, employment, and minority rights.",
      "Afghanistan Country Expert provides specialist Afghanistan asylum profiles, regional analysis, and CPIN guidance for UK immigration solicitors.",
    ],
    keyProfiles: ["Former ANSF/government", "Women's rights", "Hazara minorities", "LGBTQ+", "Journalists"],
    outboundUrl: "https://www.afghanistancountryexpert.com",
    outboundLabel: "Afghanistan Country Expert",
    networkSite: "afghanistancountryexpert.com",
    faqs: [
      {
        question: "What Afghanistan profiles require expert evidence post-2021?",
        answer:
          "Former ANSF and government employees, women's rights activists, Hazara and ethnic minorities, LGBTQ+ individuals, journalists, and those associated with Western organisations. Experts must address current Taliban governance policies with dated sources.",
      },
      {
        question: "Where is detailed Afghanistan expert guidance available?",
        answer:
          "Afghanistan Country Expert (afghanistancountryexpert.com) provides comprehensive Afghanistan asylum profiles and regional expert evidence guidance.",
      },
    ],
  },
  {
    slug: "albania",
    title: "Albania",
    metaTitle: "Albania Independent Country Expert Witness UK | Blood Feud & Trafficking",
    metaDescription:
      "Albania independent country expert witness for UK asylum tribunals. Blood feud (gjakmarrja), trafficking, LGBTQ+, Roma minorities. Routed to Albania Expert Witness.",
    h1: "Albania Independent Country Expert Witness UK",
    content: [
      "Albania asylum claims in UK tribunals frequently engage blood feud (gjakmarrja) risk, human trafficking return, LGBTQ+ persecution, Roma and Egyptian minority discrimination, and organised crime targeting. Country guidance and CPIN positions require careful independent analysis of the appellant's specific profile and region.",
      "Blood feud claims require expert analysis of kanun traditions, family honour codes, state protection availability, and internal relocation viability — particularly to Tirana and other urban centres. Experts must distinguish between historical feud patterns and current risk to the individual appellant.",
      "Albania Expert Witness provides specialist Albania asylum profiles and expert evidence guidance for UK solicitors.",
    ],
    keyProfiles: ["Blood feud (gjakmarrja)", "Trafficking return", "LGBTQ+", "Roma/Egyptian minorities"],
    outboundUrl: "https://www.albaniaexpertwitness.com",
    outboundLabel: "Albania Expert Witness",
    networkSite: "albaniaexpertwitness.com",
    faqs: [
      {
        question: "What are the main Albania asylum profiles in UK tribunals?",
        answer:
          "Blood feud (gjakmarrja), human trafficking return, LGBTQ+ persecution, Roma and Egyptian minority discrimination, and organised crime targeting. Each requires profile-specific expert analysis of state protection and internal relocation.",
      },
      {
        question: "Where is detailed Albania expert guidance available?",
        answer:
          "Albania Expert Witness (albaniaexpertwitness.com) provides Albania-specific asylum profiles and expert evidence resources.",
      },
    ],
  },
  {
    slug: "eritrea",
    title: "Eritrea",
    metaTitle: "Eritrea Independent Country Expert Witness UK | Conscription & Asylum",
    metaDescription:
      "Eritrea independent country expert witness for UK asylum tribunals. Indefinite national service, political persecution, religious minorities. Routed to Africa Expert Witness.",
    h1: "Eritrea Independent Country Expert Witness UK",
    content: [
      "Eritrea generates significant asylum claims linked to indefinite national service, political persecution, religious minority targeting (Pentecostal Christians, Jehovah's Witnesses), and draft evasion. UK country guidance on Eritrea requires careful independent analysis as conditions evolve.",
      "Expert witnesses assess whether the appellant's specific profile — length of service, political associations, religious practice — creates a real risk on return. State protection analysis is central: Eritrea's governance structure limits independent judicial oversight and effective protection for perceived dissidents.",
      "Africa Expert Witness provides Horn of Africa specialist coverage including Eritrea country condition reports for UK immigration tribunals.",
    ],
    keyProfiles: ["Indefinite national service", "Draft evasion", "Political persecution", "Religious minorities"],
    outboundUrl: "https://www.africaexpertwitness.com/countries/eritrea",
    outboundLabel: "Africa Expert Witness — Eritrea",
    networkSite: "africaexpertwitness.com",
    faqs: [
      {
        question: "Why is Eritrea expert evidence important in UK asylum appeals?",
        answer:
          "Eritrea claims engage indefinite national service, political persecution, and religious minority targeting. Experts provide independent analysis of conditions beyond generic CPIN summaries, assessing profile-specific risk and state protection availability.",
      },
      {
        question: "Where is detailed Eritrea expert guidance available?",
        answer:
          "Africa Expert Witness (africaexpertwitness.com) provides Horn of Africa specialist coverage including Eritrea country condition reports.",
      },
    ],
  },
  {
    slug: "ethiopia",
    title: "Ethiopia",
    metaTitle: "Ethiopia Independent Country Expert Witness UK | Tigray & Oromo Asylum",
    metaDescription:
      "Ethiopia independent country expert witness for UK asylum tribunals. Tigray conflict, Oromo persecution, political opposition. Routed to Africa Expert Witness.",
    h1: "Ethiopia Independent Country Expert Witness UK",
    content: [
      "Ethiopia asylum claims engage post-Tigray conflict conditions, Oromo and Amhara ethnic persecution, political opposition targeting, and LGBTQ+ persecution. Regional variation is extreme: conditions in Addis Ababa differ radically from Tigray, Oromia, and Amhara regions.",
      "Independent experts must address the current security and political landscape with dated primary sources. Internal relocation analysis is frequently contested, with the Home Office arguing viability in Addis Ababa while experts assess profile-specific risk from national-level persecution networks.",
      "Africa Expert Witness provides Ethiopia specialist country condition reports for UK immigration solicitors.",
    ],
    keyProfiles: ["Tigray conflict", "Oromo persecution", "Political opposition", "LGBTQ+", "Ethnic minorities"],
    outboundUrl: "https://www.africaexpertwitness.com/countries/ethiopia",
    outboundLabel: "Africa Expert Witness — Ethiopia",
    networkSite: "africaexpertwitness.com",
    faqs: [
      {
        question: "What Ethiopia asylum profiles require expert evidence?",
        answer:
          "Tigray conflict-related claims, Oromo and Amhara ethnic persecution, political opposition, LGBTQ+ persecution, and ethnic minority targeting. Regional variation requires profile-specific expert analysis.",
      },
      {
        question: "Where is detailed Ethiopia expert guidance available?",
        answer:
          "Africa Expert Witness (africaexpertwitness.com) provides Ethiopia specialist country condition reports.",
      },
    ],
  },
  {
    slug: "sudan",
    title: "Sudan",
    metaTitle: "Sudan Independent Country Expert Witness UK | Darfur & Post-Conflict Asylum",
    metaDescription:
      "Sudan independent country expert witness for UK asylum tribunals. Darfur, post-civil war conditions, political persecution. Routed to Africa Expert Witness.",
    h1: "Sudan Independent Country Expert Witness UK",
    content: [
      "Sudan asylum claims engage Darfur conflict legacy, post-civil war conditions following the 2023 conflict, political persecution, and ethnic minority targeting. The security situation remains volatile, requiring experts with the most current dated primary sources.",
      "Expert witnesses assess profile-specific risk for Darfur survivors, political activists, women's rights advocates, and those associated with the former regime or opposition movements. State protection analysis must address the capacity and willingness of current Sudanese authorities to protect the appellant.",
      "Africa Expert Witness provides Sudan specialist country condition reports for UK immigration tribunals.",
    ],
    keyProfiles: ["Darfur", "Post-2023 conflict", "Political persecution", "Ethnic minorities", "Women's rights"],
    outboundUrl: "https://www.africaexpertwitness.com/countries/sudan",
    outboundLabel: "Africa Expert Witness — Sudan",
    networkSite: "africaexpertwitness.com",
    faqs: [
      {
        question: "How has the 2023 Sudan conflict affected asylum expert evidence?",
        answer:
          "The 2023 conflict fundamentally changed country conditions. Expert reports must cite current sources and assess how changed security, governance, and humanitarian conditions affect the appellant's specific risk profile on return.",
      },
      {
        question: "Where is detailed Sudan expert guidance available?",
        answer:
          "Africa Expert Witness (africaexpertwitness.com) provides Sudan specialist country condition reports.",
      },
    ],
  },
  {
    slug: "zimbabwe",
    title: "Zimbabwe",
    metaTitle: "Zimbabwe Independent Country Expert Witness UK | Political & MDC Asylum",
    metaDescription:
      "Zimbabwe independent country expert witness for UK asylum tribunals. Political persecution, MDC opposition, LGBTQI+, farm workers. Routed to Africa Expert Witness.",
    h1: "Zimbabwe Independent Country Expert Witness UK",
    content: [
      "Zimbabwe asylum claims engage political persecution linked to MDC and opposition activism, LGBTQI+ persecution, white commercial farmer dispossession legacy, and human rights defender targeting. Country conditions under ZANU-PF governance require independent expert analysis beyond generic CPIN positions.",
      "Expert witnesses assess whether the appellant's political associations, activism history, or minority status creates a real risk on return. Diaspora political activity in the UK may enhance risk profiles where appellants have been visible in opposition movements.",
      "Africa Expert Witness provides Southern Africa specialist coverage including Zimbabwe country condition reports.",
    ],
    keyProfiles: ["Political / MDC opposition", "LGBTQI+", "Human rights defenders", "Diaspora activism risk"],
    outboundUrl: "https://www.africaexpertwitness.com/countries/zimbabwe",
    outboundLabel: "Africa Expert Witness — Zimbabwe",
    networkSite: "africaexpertwitness.com",
    faqs: [
      {
        question: "What Zimbabwe profiles require independent expert evidence?",
        answer:
          "Political persecution linked to MDC and opposition activism, LGBTQI+ persecution, human rights defender targeting, and diaspora political activity risk on return. Experts assess profile-specific conditions beyond generic CPIN summaries.",
      },
      {
        question: "Where is detailed Zimbabwe expert guidance available?",
        answer:
          "Africa Expert Witness (africaexpertwitness.com) provides Southern Africa specialist coverage including Zimbabwe reports.",
      },
    ],
  },
  {
    slug: "india",
    title: "India",
    metaTitle: "India Independent Country Expert Witness UK | Muslim, Sikh & Minority Asylum",
    metaDescription:
      "India independent country expert witness for UK asylum tribunals. Hindutva targeting, Sikh Khalistan, caste discrimination. Routed to South Asia Expert.",
    h1: "India Independent Country Expert Witness UK",
    content: [
      "India generates growing asylum claim volumes engaging Hindutva and RSS targeting of Muslims, Sikh claims linked to Khalistan associations, Christian minority targeting, caste discrimination against Dalits, and political dissident persecution. India's size makes internal relocation arguments heavily contested.",
      "Independent experts assess whether state protection is available and whether internal relocation is viable given the nationwide reach of Hindutva networks and the specific profile of the appellant. Regional variation — BJP-governed states versus opposition states — is critical to profile-specific analysis.",
      "South Asia Expert provides India specialist country condition reports and asylum profile guidance for UK solicitors.",
    ],
    keyProfiles: ["Muslim / Hindutva targeting", "Sikh / Khalistan", "Caste discrimination", "Christian minorities"],
    outboundUrl: "https://www.southasiaexpert.com/countries/india",
    outboundLabel: "South Asia Expert — India",
    networkSite: "southasiaexpert.com",
    faqs: [
      {
        question: "What persecution do Muslims face in India according to expert evidence?",
        answer:
          "Muslim asylum claims typically involve targeted violence by Hindutva groups, mob lynching, discriminatory application of laws, and anti-Muslim rhetoric at the national level. Experts assess state protection availability and internal relocation viability given Hindutva networks' nationwide reach.",
      },
      {
        question: "Where is detailed India expert guidance available?",
        answer:
          "South Asia Expert (southasiaexpert.com) provides India specialist country condition reports and asylum profile guidance.",
      },
    ],
  },
  {
    slug: "bangladesh",
    title: "Bangladesh",
    metaTitle: "Bangladesh Independent Country Expert Witness UK | Political & Minority Asylum",
    metaDescription:
      "Bangladesh independent country expert witness for UK asylum tribunals. Post-2024 political transition, Hindu minorities, LGBTQ+, BNP/AL persecution. Routed to South Asia Expert.",
    h1: "Bangladesh Independent Country Expert Witness UK",
    content: [
      "Bangladesh generates high-volume South Asian asylum claims from political persecution linked to BNP and Awami League rivalry, Hindu and religious minority targeting, LGBTQ+ criminalisation under section 377, and gender-based violence. The August 2024 political transition has fundamentally altered the asylum landscape.",
      "Expert witnesses must assess post-transition conditions with dated primary sources. Former Awami League supporters may now face greater risk, while BNP claimants may have changed country conditions arguments. Profile-specific analysis is essential as the political situation continues to evolve.",
      "South Asia Expert provides Bangladesh specialist country condition reports for UK immigration tribunals.",
    ],
    keyProfiles: ["BNP/AL political persecution", "Hindu minorities", "LGBTQ+", "Gender-based violence"],
    outboundUrl: "https://www.southasiaexpert.com/countries/bangladesh",
    outboundLabel: "South Asia Expert — Bangladesh",
    networkSite: "southasiaexpert.com",
    faqs: [
      {
        question: "How has the 2024 political transition affected Bangladesh asylum claims?",
        answer:
          "The August 2024 transition following Sheikh Hasina's departure has fundamentally altered risk profiles. Expert witnesses must assess current conditions, as former government supporters and opposition members face changed persecution patterns.",
      },
      {
        question: "Where is detailed Bangladesh expert guidance available?",
        answer:
          "South Asia Expert (southasiaexpert.com) provides Bangladesh specialist country condition reports.",
      },
    ],
  },
  {
    slug: "iraq",
    title: "Iraq",
    metaTitle: "Iraq Independent Country Expert Witness UK | Sunni, Shia & Minority Asylum",
    metaDescription:
      "Iraq independent country expert witness for UK asylum tribunals. Sectarian persecution, former Ba'athists, LGBTQ+, Yazidi minorities. Network routing for specialist evidence.",
    h1: "Iraq Independent Country Expert Witness UK",
    content: [
      "Iraq asylum claims engage sectarian persecution, former Ba'ath party association, LGBTQ+ targeting, Yazidi and Christian minority persecution, and those associated with Western military or contractor operations. Regional variation between Baghdad, Kurdistan, and southern governorates is critical to risk assessment.",
      "Independent experts assess profile-specific risk with dated primary sources addressing current security conditions, militia activity, and state protection capacity. Internal relocation to Kurdistan is frequently contested but viability depends on the appellant's specific profile and ethnic/religious background.",
      "Independent Country Expert coordinates Iraq instructions to network specialists with Middle East expertise. Contact us for routing to the appropriate jurisdiction-specific expert.",
    ],
    keyProfiles: ["Sectarian persecution", "Former Ba'athists", "LGBTQ+", "Yazidi/Christian minorities", "Western association"],
    outboundUrl: "https://www.africaexpertwitness.com/countries/iraq",
    outboundLabel: "Africa Expert Witness — Iraq",
    networkSite: "africaexpertwitness.com",
    faqs: [
      {
        question: "What Iraq asylum profiles require independent expert evidence?",
        answer:
          "Sectarian persecution, former Ba'ath party association, LGBTQ+ targeting, Yazidi and Christian minority persecution, and those associated with Western operations. Regional variation between Baghdad, Kurdistan, and southern governorates requires profile-specific analysis.",
      },
      {
        question: "How is Iraq expert evidence routed in the network?",
        answer:
          "Independent Country Expert coordinates Iraq instructions to network specialists with Middle East and Iraq country expertise. Contact us with your case details for routing to the appropriate expert.",
      },
    ],
  },
];

export function getCountry(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug);
}
