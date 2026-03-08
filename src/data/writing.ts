export type TagType = 'research' | 'policy' | 'report'

export interface Writing {
  id: string
  year: number
  title: string
  url?: string
  authors: string
  venue: string
  description: string
  tag: TagType
  tagLabel: string
  links: { label: string; url: string }[]
}

export const writings: Writing[] = [
  {
    id: 'chi-2026',
    year: 2026,
    title: '"Can LLMs Persuade Humans with Deception?": From a Deceptive Strategy Taxonomy to a Large-Scale Empirical Study',
    authors: 'Haein Yeo, Seungwan Jin, Taehyung Noh, Yejin Shin, Sangyeon Kang, Sangwoo Heo, Jiwon Chung, Hwarim Hyun, Kyungsik Han',
    venue: 'CHI 2026',
    description: '',
    tag: 'research',
    tagLabel: 'Paper',
    links: [],
  },
  {
    id: 'halucheck-2025',
    year: 2025,
    title: 'HaluCheck: Explainable and verifiable automation for detecting hallucinations in LLM responses',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417425003343',
    authors: 'Sangwoo Heo, Sungwook Son, Hyunwoo Park',
    venue: 'Expert Systems with Applications, Elsevier, 2025',
    description:
      'A visualization system for assessing hallucination likelihood in LLM responses, featuring an automated pipeline (AutoFactNLI) that decomposes model outputs, retrieves supporting documents, and evaluates each sentence for factual consistency.',
    tag: 'research',
    tagLabel: 'Paper',
    links: [
      {
        label: 'Paper →',
        url: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417425003343',
      },
    ],
  },
  {
    id: 'cikm-2025',
    year: 2025,
    title: '"Human-Centric AI: From Explainability and Trustworthiness to Actionable Ethics" Workshop',
    authors: 'Sangwoo Heo',
    venue: 'CIKM 2025 · November 14, 2025, Seoul',
    description: 'Program Committee Member',
    tag: 'research',
    tagLabel: 'PC Member',
    links: [],
  },
]
