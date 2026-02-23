# Design: Design Improvement

## Overview

**Feature**: design-improvement
**Created**: 2026-02-23
**Phase**: Design
**Ref Plan**: `docs/01-plan/features/design-improvement.plan.md`

---

## 1. Architecture Overview

변경 범위: 코드 구조 변경 없음. 스타일/클래스만 수정.

```
tailwind.config.ts          ← 컬러 팔레트 + 폰트 토큰 교체
src/app/globals.css         ← 기본 스타일 정리
src/app/layout.tsx          ← Inter 폰트 적용, body 클래스 수정
src/components/Nav.tsx      ← active 인디케이터 스타일 변경
src/components/Footer.tsx   ← 미세 개선
src/components/Tag.tsx      ← 새 팔레트 반영
src/app/page.tsx            ← 히어로 리디자인
src/app/writing/page.tsx    ← ghost card hover 효과
src/app/news/page.tsx       ← ghost card hover 효과
src/app/cv/page.tsx         ← 섹션 스타일 개선
src/app/speaking/page.tsx   ← 빈 상태 UI 개선
```

---

## 2. Component Design Specs

### 2-1. tailwind.config.ts

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:             '#ffffff',
        ink:            '#0a0a0a',
        muted:          '#6b7280',   // gray-500
        subtle:         '#9ca3af',   // gray-400
        faint:          '#d1d5db',   // gray-300
        border:         '#e5e7eb',   // gray-200
        'border-light': '#f3f4f6',   // gray-100
        accent:         '#2563eb',   // blue-600
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
      },
    },
  },
  plugins: [],
}

export default config
```

> **Note**: serif와 sans 모두 Inter로 교체. 기존 코드의 `font-serif` / `font-sans` 클래스를 그대로 유지하면서 폰트만 변경.

---

### 2-2. globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-underline-offset: 3px;
  }
}
```

---

### 2-3. layout.tsx

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// body 클래스: leading-[1.7] (기존 1.75 → 약간 조임)
// font-sans 적용 (font-serif 제거 — 이제 동일 폰트)
<body className={`${inter.variable} font-sans text-ink bg-bg leading-[1.7] min-h-screen flex flex-col`}>
```

---

### 2-4. Nav.tsx

**변경 포인트**: active 링크 스타일

```tsx
// 기존
pathname === href
  ? 'text-ink font-semibold'
  : 'text-muted hover:text-ink'

// 변경
pathname === href
  ? 'text-ink border-b-2 border-ink pb-[1px]'
  : 'text-muted hover:text-ink'
```

**Nav 컨테이너**: 배경을 `bg-bg/95 backdrop-blur-sm`으로 변경 (스크롤 시 약간 투명한 느낌)

```tsx
// 기존
<nav className="sticky top-0 z-50 bg-bg border-b border-border">

// 변경
<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
```

---

### 2-5. Footer.tsx

```tsx
// 기존
<footer className="text-center font-sans text-[0.78rem] text-faint py-6 border-t border-border">

// 변경: 좌우 여백 추가, 양끝 정렬
<footer className="font-sans text-[0.78rem] text-subtle py-8 border-t border-border">
  <div className="max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
    <p className="text-faint">© 2025 Sangwoo Heo</p>
    <p className="text-faint">Seoul, Korea</p>
  </div>
</footer>
```

---

### 2-6. Tag.tsx

새 컬러 팔레트 반영 (blue accent 계열로 통일감):

```tsx
const colorMap: Record<TagType, string> = {
  research: 'bg-amber-50 text-amber-700',
  policy:   'bg-blue-50 text-blue-700',
  report:   'bg-emerald-50 text-emerald-700',
}
```

---

### 2-7. page.tsx (About / 히어로)

**H1 이름**: 크기 상향 + 무게 강화

```tsx
// 기존
<h1 className="text-[1.55rem] font-normal mb-[0.3rem] tracking-[-0.01em]">
  Sangwoo Heo{' '}
  <span className="text-[1rem] font-normal text-faint">허상우</span>
</h1>

// 변경
<h1 className="text-[2rem] font-semibold mb-[0.35rem] tracking-[-0.03em] text-ink">
  Sangwoo Heo{' '}
  <span className="text-[1.1rem] font-normal text-subtle">허상우</span>
</h1>
```

**직함/소속 텍스트**:

```tsx
// 기존
<p className="font-sans text-[0.88rem] text-muted mb-[0.15rem]">

// 변경
<p className="text-[0.9rem] text-muted mb-[0.2rem] font-medium">
```

**아바타**: border를 더 섬세하게

```tsx
// 기존
className="... border border-border"

// 변경
className="... ring-1 ring-border"
```

**Writing 섹션 레이블**:

```tsx
// 기존
<p className="font-sans text-[0.75rem] font-semibold uppercase tracking-widest text-[#999] mb-4 pb-[0.4rem] border-b border-border">

// 변경
<p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border">
```

**Writing 카드 hover 효과**:

```tsx
// 기존
<div className="mb-[1.6rem] pb-[1.6rem] border-b border-border-light last:border-b-0 last:pb-0">

// 변경
<div className="group mb-1 -mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0">
```

---

### 2-8. writing/page.tsx

**H1**:
```tsx
// 기존
<h1 className="text-[1.5rem] font-normal mb-9 tracking-[-0.01em]">

// 변경
<h1 className="text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]">
```

**연도 레이블**:
```tsx
// 기존
<p className="font-sans text-[0.82rem] font-semibold text-faint mb-4 mt-7 first:mt-0 tracking-[0.05em]">

// 변경
<p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 mt-8 first:mt-0">
```

**카드 항목 (ghost card)**:
```tsx
// 기존
<div className="mb-[1.6rem] pb-[1.6rem] border-b border-border-light last:border-b-0 last:pb-0">

// 변경
<div className="-mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0">
```

---

### 2-9. news/page.tsx

**H1**: writing/page.tsx와 동일 패턴 적용

**리스트 항목**:
```tsx
// 기존
<li className="flex flex-col gap-[0.2rem] py-[0.8rem] border-b border-border-light ...">

// 변경
<li className="group flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light sm:flex-row sm:gap-6 last:border-b-0 text-[0.93rem]">
```

**날짜 컬럼**:
```tsx
// 기존
<span className="flex-shrink-0 font-sans text-[0.82rem] text-faint sm:w-[72px] sm:pt-[0.1rem]">

// 변경
<span className="flex-shrink-0 text-[0.8rem] text-subtle tabular-nums sm:w-[76px] sm:pt-[0.1rem]">
```

---

### 2-10. cv/page.tsx

**H1**: 동일 패턴

**섹션 레이블**:
```tsx
// 기존
<p className="font-sans text-[0.75rem] font-semibold uppercase tracking-widest text-[#999] mb-4 pb-[0.4rem] border-b border-border">

// 변경
<p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border">
```

**리스트 항목 텍스트**:
```tsx
// 기존
<li className="text-[0.97rem] text-[#222]">

// 변경
<li className="text-[0.95rem] text-ink">
```

**bullets**:
```tsx
// 기존
<li className="font-sans text-[0.85rem] text-subtle">

// 변경
<li className="text-[0.84rem] text-muted pl-3 border-l border-border-light">
```

---

### 2-11. speaking/page.tsx

**빈 상태 UI 개선**:
```tsx
// 기존
<p className="text-[0.93rem] text-faint">Nothing here yet.</p>

// 변경
<div className="mt-16 text-center">
  <p className="text-[0.95rem] text-subtle">No talks scheduled yet.</p>
  <p className="text-[0.84rem] text-faint mt-1">Check back later.</p>
</div>
```

---

## 3. Design Token Summary

| 토큰 | 값 | 용도 |
|------|----|------|
| `bg` | `#ffffff` | 페이지 배경 |
| `ink` | `#0a0a0a` | 기본 텍스트 |
| `muted` | `#6b7280` | 보조 텍스트 |
| `subtle` | `#9ca3af` | 약한 텍스트, 날짜 |
| `faint` | `#d1d5db` | 최약 텍스트 |
| `border` | `#e5e7eb` | 구분선 |
| `border-light` | `#f3f4f6` | 약한 구분선 |
| `accent` | `#2563eb` | 미래 사용 예약 |

---

## 4. Implementation Order

1. `tailwind.config.ts` — 토큰 변경 (전체에 영향)
2. `layout.tsx` — Inter 폰트 + body 클래스
3. `globals.css` — 기본 스타일
4. `Nav.tsx` — active 인디케이터
5. `Footer.tsx` — 레이아웃
6. `Tag.tsx` — 컬러
7. `page.tsx` — 히어로 (가장 임팩트 큰 변경)
8. `writing/page.tsx`
9. `news/page.tsx`
10. `cv/page.tsx`
11. `speaking/page.tsx`

---

## 5. Acceptance Criteria

| 항목 | 기준 |
|------|------|
| Inter 폰트 | DevTools Network에서 inter 폰트 파일 로딩 확인 |
| 배경색 | `#ffffff` 순백 (베이지 없음) |
| H1 스타일 | font-semibold, tracking tight |
| Nav active | 언더라인 인디케이터 표시 |
| ghost card | Writing/News hover 시 bg-gray-50 배경 |
| 모바일 | 375px에서 레이아웃 정상 |
| 콘텐츠 | 텍스트 내용 변경 없음 |
