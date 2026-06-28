export interface CvItem {
  title: string
  org: string
  orgNote?: string
  period: string
  bullets?: string[]
}

export interface CvSection {
  label: string
  items: CvItem[]
}

export const cvSections: CvSection[] = [
  {
    label: 'Employment & Professional Roles',
    items: [
      {
        title: 'AI/ML Manager',
        org: 'Viva Republica (Toss)',
        period: '2026.6 – present',
        bullets: [
          'Own the end-to-end AI safety & risk management picture',
          'Drive AI safeguards from research to production — aligning engineering & policy',
          'Build regulation-grounded evaluation & risk controls — red-teaming, jailbreak/tampering tests, risk taxonomy',
        ],
      },
      {
        title: 'AI Safety Policy, Management & Research',
        org: 'NAVER Corporation — AI Safety Center',
        orgNote: '(formerly Future AI Center / AI Risk Management Center)',
        period: '2024.5 – 2026.5',
        bullets: [
          'Led follow-up implementation work on the Frontier AI Safety Commitments (AI Seoul Summit) — researching extreme risk definitions, evaluation frameworks, and threshold management protocols',
          'Designed NAVER\'s company-wide AI risk governance framework — establishing risk management processes across internal/external models and AI services, and leading the Article 31 compliance framework for Korea\'s AI Basic Act (generative AI disclosure) as a private-sector member of the government guideline task forces (Articles 31, 32)',
          'Led the build of safety evaluation datasets for AI models — designing risk classification frameworks and evaluation systems',
          'Attended UK AISI Frontier AI Safety Conference; presented at TTA AI Trust & Safety Conference; external talks and lectures on AI safety and policy',
        ],
      },
      {
        title: 'Communication Manager',
        org: 'SOCAR',
        period: '2021.3 – 2022.8',
        bullets: [
          'Media relations and external risk management',
        ],
      },
      {
        title: 'Staff Writer',
        org: 'Chosun Ilbo',
        period: '2017.12 – 2021.2',
        bullets: [
          'Social Policy desk: Covered Ministry of Health & Welfare beat, including COVID-19 pandemic early response, national pension and health insurance reform',
          'International desk: Middle East conflicts and US election coverage',
        ],
      },
    ],
  },
  {
    label: 'Education',
    items: [
      {
        title: 'M.S. in Data Science',
        org: 'Seoul National University Graduate School of Data Science',
        period: '2024',
        bullets: [
          'Data Visualization & Business Analytics Lab (Advisor: Hyunwoo Park)',
          'Poll-A: Election survey data visualization project for the 2024 Korean general election (Channel-A & SNU Fact-Check Center)',
          'TA, Computing Foundations for Data Science & Computing Bootcamp for Data Science',
        ],
      },
      {
        title: 'B.A. in Political Science and International Relations',
        org: 'Seoul National University',
        period: '2018',
      },
      {
        title: 'CAIO Program (non-degree)',
        org: 'KAIST',
        period: '2025',
      },
    ],
  },
]
