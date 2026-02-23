export type TagType = 'research' | 'policy' | 'report'

export interface Writing {
  id: string
  year: number
  title: string
  url: string
  authors: string
  venue: string
  description: string
  tag: TagType
  tagLabel: string
  links: { label: string; url: string }[]
}

export const writings: Writing[] = [
  {
    id: 'halucheck-2025',
    year: 2025,
    title:
      'HaluCheck: Integrating Hallucination Detection Techniques in LLM-Based Conversational Systems',
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
]
