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
  title: 'AI에게 최소한 무엇을 요구해야 하는가',
  subtitle: '클로드 제작사 앤트로픽의 헌법으로 읽는 정렬의 마지노선',
  date: '2026년 6월 26일 (금)',
  slides: [
    { label: '발표 슬라이드 1' },
    { label: "Claude's Constitution", url: '/research/anthropic-constitution-v2.html' },
    { label: 'Constitutional AI (CAI)', url: '/research/constitutional-ai.html' },
  ],
}
