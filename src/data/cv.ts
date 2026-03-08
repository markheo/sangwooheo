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
        title: 'AI Safety Policy & Management, Project Lead',
        org: 'NAVER Corporation — AI Safety Center',
        orgNote: '(formerly AI Risk Management Center)',
        period: '2025.7 – present',
        bullets: [
          'Developing AI risk management processes for internal and external models and AI application services',
          'Led the build of safety evaluation datasets for AI models — designing risk classification frameworks and evaluation systems',
          'Led compliance framework for Korea\'s AI Basic Act Article 31 (generative AI disclosure obligations)',
          'Participated as private sector member in government AI Basic Act guideline task forces (Articles 31, 32)',
          'External talks and lectures on AI safety and policy',
        ],
      },
      {
        title: 'AI Safety Research',
        org: 'NAVER Corporation — Future AI Center',
        period: '2024.5 – 2025.6',
        bullets: [
          'Led follow-up implementation work on the Frontier AI Safety Commitments (AI Seoul Summit) — researching extreme risk definitions, evaluation frameworks, and threshold management protocols',
          'Attended UK AISI Frontier AI Safety Conference; presented at TTA AI Trust & Safety Conference',
          'Contributed to the design of a company-wide AI risk governance framework',
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
