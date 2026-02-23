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
        title: 'Project Lead (AI Safety Policy & Management)',
        org: 'NAVER Corporation — AI Safety Center',
        orgNote: '(formerly AI Risk Management Center)',
        period: '2025 – present',
        bullets: [
          'Leading the design and implementation of company-wide AI safety governance',
          'Standardizing risk assessment for AI model deployment and developing an end-to-end safety red-teaming framework for AI services',
        ],
      },
      {
        title: 'AI Safety Researcher',
        org: 'NAVER Corporation — Future AI Center',
        period: '2024 – 2025',
        bullets: [
          'Researched frontier AI risk management systems and contributed to the development of an AI risk management framework',
        ],
      },
      {
        title: 'Staff Writer',
        org: 'Chosun Ilbo',
        period: '2018 – 2020',
        bullets: [
          'Social Policy (Ministry of Health & Welfare, COVID-19 pandemic response), International, and Society desks',
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
      },
      {
        title: 'B.A. in Political Science and International Relations',
        org: 'Seoul National University',
        period: '2018',
      },
    ],
  },
]
