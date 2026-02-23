export interface NewsItem {
  id: string
  date: string
  title: string
  url: string
  outlet: string
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-2025-11',
    date: 'Nov 2025',
    title: "AI 시대의 새 경쟁력은 '이용자 보호'…방미통위, 관련 콘퍼런스 개최",
    url: 'https://n.news.naver.com/mnews/article/448/0000571732?sid=100',
    outlet: 'TV조선',
  },
  {
    id: 'news-2025-09',
    date: 'Sep 2025',
    title: '명령 어기고 협박까지…"AI의 역습, 주기적으로 위험 평가해야"',
    url: 'https://n.news.naver.com/mnews/article/008/0005245156?sid=105',
    outlet: '머니투데이',
  },
  {
    id: 'news-2025-07',
    date: 'Jul 2025',
    title: '인간 편견 배우는 AI…"데이터 균형·윤리적 설계 필요"',
    url: 'https://n.news.naver.com/mnews/article/008/0005228109?sid=105',
    outlet: '머니투데이',
  },
  {
    id: 'news-2024-11',
    date: 'Nov 2024',
    title: "'AI 서울 기업 서약' 참여한 6개사, 안전 개발 환경 조성",
    url: 'https://n.news.naver.com/mnews/article/092/0002354075?sid=105',
    outlet: '지디넷코리아',
  },
  {
    id: 'news-2024-09',
    date: 'Sep 2024',
    title: '네이버가 글로벌 군사 회의에 초대받은 이유는',
    url: 'https://n.news.naver.com/mnews/article/003/0012777479?sid=105',
    outlet: '뉴시스',
  },
]
