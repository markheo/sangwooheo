export interface SeminarSlide {
  label: string
  url?: string
}

export interface Seminar {
  group: string
  title: string
  subtitle: string
  date: string
  slides: SeminarSlide[]
}

export const seminar: Seminar = {
  group: 'Pioneers · 한반도 파이니어 그룹 특별 세미나',
  title: 'AI에게 누가, 무엇을 요구할 것인가',
  subtitle: '수출 통제 대상이 된 AI와 안전 문제',
  date: '2026년 6월 26일 (금)',
  slides: [
    { label: '발표 슬라이드 1' },
    { label: "Claude's Constitution", url: '/research/anthropic-constitution-v2.html' },
    { label: 'Constitutional AI (CAI)', url: '/research/constitutional-ai.html' },
  ],
}
