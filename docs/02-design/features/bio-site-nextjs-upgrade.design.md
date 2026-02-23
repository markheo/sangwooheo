# Design: Bio Site Next.js Upgrade

## Overview

**Feature**: bio-site-nextjs-upgrade
**Created**: 2026-02-23
**Phase**: Design
**Ref Plan**: `docs/01-plan/features/bio-site-nextjs-upgrade.plan.md`

---

## 1. 프로젝트 구조 (File Tree)

```
/
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind base + 글로벌 스타일
│   │   ├── layout.tsx              # Root layout (Nav + Footer 포함)
│   │   ├── page.tsx                # /  → About
│   │   ├── writing/
│   │   │   └── page.tsx            # /writing
│   │   ├── news/
│   │   │   └── page.tsx            # /news
│   │   ├── cv/
│   │   │   └── page.tsx            # /cv
│   │   └── speaking/
│   │       └── page.tsx            # /speaking
│   ├── components/
│   │   ├── Nav.tsx                 # 공통 네비게이션 (반응형 햄버거 포함)
│   │   ├── Footer.tsx              # 공통 푸터
│   │   └── Tag.tsx                 # 태그 배지 컴포넌트
│   └── data/
│       ├── writing.ts              # 논문/글 데이터 + 타입
│       ├── news.ts                 # 뉴스 데이터 + 타입
│       └── cv.ts                   # CV 데이터 + 타입
├── public/
│   └── avatar.jpg                  # 프로필 이미지 (공백 제거)
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 2. Tailwind 디자인 토큰

`tailwind.config.ts`에 커스텀 값으로 등록. 현재 `style.css` 값을 100% 보존.

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      bg:     '#fafaf8',   // body background
      ink:    '#1a1a1a',   // primary text
      muted:  '#555555',   // secondary text
      subtle: '#777777',   // meta text
      faint:  '#aaaaaa',   // date, placeholder
      border: '#e5e5e5',   // divider lines
      'border-light': '#ebebeb', // lighter divider
    },
    fontFamily: {
      serif: ['Georgia', '"Times New Roman"', 'serif'],
      sans:  ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
    },
    maxWidth: {
      content: '680px',    // main content width
    },
    fontSize: {
      'nav-name':   ['0.92rem', { lineHeight: '1.4' }],
      'nav-link':   ['0.88rem', { lineHeight: '1.4' }],
      'h1':         ['1.55rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      'role':       ['0.88rem', { lineHeight: '1.5' }],
      'prose':      ['0.97rem', { lineHeight: '1.75' }],
      'label':      ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      'pub-title':  ['0.97rem', { lineHeight: '1.5' }],
      'pub-meta':   ['0.83rem', { lineHeight: '1.5' }],
      'pub-desc':   ['0.90rem', { lineHeight: '1.6' }],
      'pub-link':   ['0.82rem', { lineHeight: '1.4' }],
      'tag':        ['0.72rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
      'news-item':  ['0.93rem', { lineHeight: '1.5' }],
      'footer':     ['0.78rem', { lineHeight: '1.4' }],
    },
  },
}
```

---

## 3. 컴포넌트 설계

### 3.1 `Nav.tsx`

**역할**: 모든 페이지 공통 상단 네비게이션. 모바일에서는 햄버거 메뉴.

**Props**: 없음 (내부적으로 `usePathname` 사용)

**레이아웃:**

```
[데스크톱 ≥ sm(640px)]
┌─────────────────────────────────────────────────────┐
│  Sangwoo Heo          About  Writing  News  CV      │
└─────────────────────────────────────────────────────┘

[모바일 < sm(640px)]
┌─────────────────────────────────────────────────────┐
│  Sangwoo Heo                               ☰        │
└─────────────────────────────────────────────────────┘
      ↓ 햄버거 탭 시 열림
┌─────────────────────────────────────────────────────┐
│  About                                              │
│  Writing                                            │
│  News                                               │
│  CV                                                 │
└─────────────────────────────────────────────────────┘
```

**상태:**
- `isOpen: boolean` — 모바일 메뉴 열림/닫힘
- 라우트 변경 시 `isOpen = false` (usePathname 변경 감지)
- 바깥 클릭 또는 ESC 키로 닫힘

**Nav 링크 목록:**
```ts
const navLinks = [
  { href: '/',        label: 'About'   },
  { href: '/writing', label: 'Writing' },
  { href: '/news',    label: 'News'    },
  { href: '/cv',      label: 'CV'      },
]
```

**Active 판별:**
- `pathname === href` → active (bold, `text-ink`)
- 나머지 → `text-muted`

**Tailwind 클래스 (핵심):**
```
nav:      sticky top-0 z-50 bg-bg border-b border-border h-[52px] px-8 sm:px-4 flex items-center justify-between
name:     text-nav-name font-normal tracking-[0.01em] text-ink no-underline
links:    hidden sm:flex gap-[1.75rem]  (데스크톱만 보임)
hamburger: sm:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center
mobile-menu: sm:hidden absolute top-[52px] left-0 right-0 bg-bg border-b border-border flex flex-col
mobile-link: px-8 py-3 text-nav-link text-muted min-h-[44px] flex items-center
```

---

### 3.2 `Footer.tsx`

**역할**: 공통 하단 저작권 표시.

**Props**: 없음

```tsx
<footer className="text-center font-sans text-footer text-faint py-6 border-t border-border">
  <p>© 2025 Sangwoo Heo</p>
</footer>
```

---

### 3.3 `Tag.tsx`

**역할**: 논문/글 목록의 분류 배지.

**Props:**
```ts
interface TagProps {
  type: 'research' | 'policy' | 'report'
  label: string
}
```

**색상 매핑:**
```ts
const colorMap = {
  research: 'bg-[#fef3c7] text-[#92400e]',
  policy:   'bg-[#e8f0fe] text-[#1a56db]',
  report:   'bg-[#d1fae5] text-[#065f46]',
}
```

**Tailwind:**
```
inline-block font-sans text-tag font-semibold uppercase tracking-[0.05em]
px-[0.55em] py-[0.15em] rounded-[3px] align-middle ml-[0.4rem]
```

---

### 3.4 `layout.tsx` (Root Layout)

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif text-ink bg-bg leading-[1.75] min-h-screen flex flex-col">
        <Nav />
        <main className="max-w-content w-full mx-auto px-6 sm:px-4 pt-14 pb-20 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## 4. 페이지 설계

### 4.1 About (`page.tsx`)

**Metadata:**
```ts
export const metadata: Metadata = {
  title: 'Sangwoo Heo',
  description: 'AI Safety Policy & Management Lead at NAVER Corporation.',
}
```

**레이아웃 구조:**

```
[데스크톱]
┌──────────────────────────────────────────────┐
│  [avatar 130px]  Sangwoo Heo 허상우           │
│                  AI Safety Policy...          │
│                  NAVER Corporation...         │
│                                               │
│                  bio paragraphs (3개)         │
│                                               │
│                  Email · LinkedIn · CV        │
└──────────────────────────────────────────────┘

[모바일]
┌──────────────────────────┐
│  [avatar 100px]           │
│  Sangwoo Heo 허상우       │
│  AI Safety Policy...      │
│  NAVER Corporation...     │
│                           │
│  bio paragraphs (3개)     │
│                           │
│  Email · LinkedIn · CV    │
└──────────────────────────┘
```

**핵심 Tailwind 패턴:**
```
hero section:   flex flex-col sm:flex-row gap-10 sm:gap-[2.5rem] items-start mb-12
avatar img:     w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-[5%] object-cover border border-border
h1:             text-h1 font-normal mb-[0.3rem]
role/company:   font-sans text-role text-muted
prose:          text-prose text-[#222] mb-10
```

---

### 4.2 Writing (`writing/page.tsx`)

**Metadata:**
```ts
title: 'Writing · Sangwoo Heo'
description: 'Papers and writing by Sangwoo Heo.'
```

**데이터 렌더링:**
```tsx
import { writings } from '@/data/writing'

// writings 배열을 연도별 그룹으로 렌더링
// year-divider → pub-item 목록
```

**pub-item 구조:**
```
[pub-title] [Tag]
[pub-meta: 저자 · 저널, 연도]
[pub-desc]
[pub-links: Paper → ]
```

---

### 4.3 News (`news/page.tsx`)

**Metadata:**
```ts
title: 'News · Sangwoo Heo'
```

**레이아웃:**
```
[데스크톱]
Nov 2025   AI 시대의 새 경쟁력은 '이용자 보호'... · TV조선

[모바일]
Nov 2025
AI 시대의 새 경쟁력은 '이용자 보호'... · TV조선
```

**Tailwind 패턴:**
```
li:       flex flex-col sm:flex-row gap-[0.2rem] sm:gap-6 py-[0.8rem] border-b border-border-light text-news-item
date:     flex-shrink-0 sm:w-[72px] font-sans text-pub-link text-faint sm:pt-[0.1rem]
text:     text-[#333] break-words
```

---

### 4.4 CV (`cv/page.tsx`)

**Metadata:**
```ts
title: 'CV · Sangwoo Heo'
```

**구조:** Section Label → ul.cv-list → 각 직책/학교

---

### 4.5 Speaking (`speaking/page.tsx`)

**Metadata:**
```ts
title: 'Speaking · Sangwoo Heo'
```

**구조:**
```tsx
<h1 className="text-[1.5rem] font-normal mb-9 tracking-[-0.01em]">Speaking</h1>
<p className="text-[0.93rem] text-faint">Nothing here yet.</p>
```

---

## 5. 데이터 모델 (TypeScript)

### 5.1 `src/data/writing.ts`

```ts
export type TagType = 'research' | 'policy' | 'report'

export interface Writing {
  id: string
  year: number
  title: string
  url: string
  authors: string       // "Sangwoo Heo, Sungwook Son, ..."
  venue: string         // "Expert Systems with Applications, Elsevier, 2025"
  description: string
  tag: TagType
  links: { label: string; url: string }[]
}

export const writings: Writing[] = [
  {
    id: 'halucheck-2025',
    year: 2025,
    title: 'HaluCheck: Integrating Hallucination Detection Techniques in LLM-Based Conversational Systems',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417425003343',
    authors: 'Sangwoo Heo, Sungwook Son, Hyunwoo Park',
    venue: 'Expert Systems with Applications, Elsevier, 2025',
    description: 'A visualization system for assessing hallucination likelihood in LLM responses...',
    tag: 'research',
    links: [
      { label: 'Paper →', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0957417425003343' },
    ],
  },
]
```

### 5.2 `src/data/news.ts`

```ts
export interface NewsItem {
  id: string
  date: string          // "Nov 2025"
  title: string
  url: string
  outlet: string        // "TV조선"
}

export const newsItems: NewsItem[] = [
  {
    id: 'news-2025-11',
    date: 'Nov 2025',
    title: "AI 시대의 새 경쟁력은 '이용자 보호'…방미통위, 관련 콘퍼런스 개최",
    url: 'https://n.news.naver.com/mnews/article/448/0000571732?sid=100',
    outlet: 'TV조선',
  },
  // ...
]
```

### 5.3 `src/data/cv.ts`

```ts
export interface CvItem {
  title: string
  org: string
  orgNote?: string       // "(formerly AI Risk Management Center)"
  period: string         // "2025 – present"
  bullets: string[]
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
          '...',
        ],
      },
      // ...
    ],
  },
  {
    label: 'Education',
    items: [
      {
        title: 'M.S. in Data Science',
        org: 'Seoul National University Graduate School of Data Science',
        period: '2024',
        bullets: [],
      },
      // ...
    ],
  },
]
```

---

## 6. 반응형 설계 상세

### 브레이크포인트 전략

| 범위 | Tailwind | 설명 |
|------|----------|------|
| 기본 (0 ~ 639px) | 없음 (기본값) | 모바일 퍼스트 |
| 640px 이상 | `sm:` | 태블릿 / 데스크톱 |

> 현재 `style.css`의 `@media (max-width: 560px)`는 Tailwind `sm:` (640px)으로 근사 매핑. 시각적 차이 최소.

### 반응형 동작 매핑

| 요소 | 모바일 (기본) | 데스크톱 (`sm:`) |
|------|-------------|----------------|
| Nav 링크 | 숨김 (`hidden`) | 표시 (`sm:flex`) |
| 햄버거 버튼 | 표시 | 숨김 (`sm:hidden`) |
| 모바일 메뉴 | 열림/닫힘 토글 | 비표시 |
| Hero 섹션 | `flex-col` | `sm:flex-row` |
| 아바타 크기 | 100px | `sm:w-[130px]` |
| main 패딩 | `px-4 pt-8 pb-12` | `sm:px-6 sm:pt-14 sm:pb-20` |
| News li | `flex-col` | `sm:flex-row` |
| News 날짜 | 너비 자동 | `sm:w-[72px]` |

### 터치 타겟

WCAG 2.5.5 기준 최소 44×44px 보장:

- 햄버거 버튼: `min-h-[44px] min-w-[44px]`
- 모바일 메뉴 링크: `py-3 min-h-[44px]`
- Contact 링크: inline이나 충분한 padding 유지

---

## 7. SEO / Metadata

`src/app/layout.tsx` 기본 메타데이터:

```ts
export const metadata: Metadata = {
  title: {
    template: '%s · Sangwoo Heo',
    default: 'Sangwoo Heo',
  },
  description: 'AI Safety Policy & Management Lead at NAVER Corporation.',
  openGraph: {
    siteName: 'Sangwoo Heo',
    locale: 'en_US',
  },
}
```

각 페이지에서 `title`만 오버라이드:
```ts
// writing/page.tsx
export const metadata = { title: 'Writing' }
// → 렌더링: "Writing · Sangwoo Heo"
```

---

## 8. 이미지 처리

### 아바타 이미지

- 현재 파일명: `KakaoTalk_Photo_2026-02-19-21-21-53 001.jpeg` (공백 포함)
- 변경 후: `public/avatar.jpg`
- 구현:

```tsx
import Image from 'next/image'

<Image
  src="/avatar.jpg"
  alt="Sangwoo Heo"
  width={130}
  height={130}
  className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-[5%] object-cover object-[center_5%] border border-border"
  priority
/>
```

---

## 9. 폰트 설정

`next/font/google` 또는 로컬 폰트 사용. Georgia와 유사한 웹 폰트:

**옵션 A (권장): `next/font/local` — 시스템 Georgia 그대로**
```ts
// layout.tsx에서 CSS variable 없이 Tailwind font-serif 직접 사용
// Georgia는 대부분 기기에 내장 → 별도 로드 불필요
```

**옵션 B: Google Fonts Lora (Georgia 대체)**
```ts
import { Lora } from 'next/font/google'
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })
```

→ **옵션 A 채택**: 기존 렌더링 100% 보존, 추가 네트워크 요청 없음.

---

## 10. Vercel 배포 설계

### 배포 흐름

```
GitHub repo (main 브랜치)
    ↓  git push
Vercel (자동 감지 → Next.js 빌드)
    ↓  build 성공
Production URL 자동 업데이트
```

### 설정

| 항목 | 값 |
|------|-----|
| Framework | Next.js (자동 감지) |
| Build Command | `next build` (기본값) |
| Output Directory | `.next` (기본값) |
| Install Command | `npm install` |
| Node Version | 18.x 이상 |
| 환경 변수 | 없음 (현재) |

### `next.config.ts`

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 현재 외부 이미지 없으므로 별도 설정 불필요
}

export default nextConfig
```

---

## 11. 구현 순서 (Do Phase 참고)

1. `npx create-next-app@latest` 으로 프로젝트 생성
2. `tailwind.config.ts` 디자인 토큰 설정
3. `globals.css` base 스타일 적용
4. `Nav.tsx` 구현 (햄버거 메뉴 포함)
5. `Footer.tsx` 구현
6. `layout.tsx` 루트 레이아웃 구성
7. 데이터 파일 작성 (`writing.ts`, `news.ts`, `cv.ts`)
8. `Tag.tsx` 구현
9. `page.tsx` (About) 구현
10. `writing/page.tsx` 구현
11. `news/page.tsx` 구현
12. `cv/page.tsx` 구현
13. `speaking/page.tsx` 구현
14. `public/avatar.jpg` 이미지 복사 (파일명 정리)
15. 로컬 `npm run build` 확인
16. Vercel 배포 (GitHub 연동)

---

## 12. 검증 체크리스트

- [ ] 데스크톱: 현재 HTML 사이트와 시각적으로 동일
- [ ] 모바일(375px): 히어로 세로 스택, 햄버거 메뉴 동작
- [ ] 5개 페이지 라우팅 정상
- [ ] `next build` 에러 없음
- [ ] Lighthouse Performance ≥ 90
- [ ] Vercel 프로덕션 URL 정상 접근
- [ ] 터치 타겟 44px 이상 (DevTools 확인)
