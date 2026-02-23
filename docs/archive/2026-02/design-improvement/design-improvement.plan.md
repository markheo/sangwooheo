# Plan: Design Improvement

## Overview

**Feature**: design-improvement
**Created**: 2026-02-23
**Phase**: Plan
**Level**: Starter

---

## 1. Background & Motivation

### 현재 상태 (As-Is)

Next.js 마이그레이션은 완료됐으나 시각적 디자인은 기존 HTML 사이트와 동일한 미니멀 스타일 그대로 유지되어 있다.

**현재 디자인의 한계:**
- 히어로 영역이 단순 텍스트 나열 — 첫인상 임팩트 없음
- 흰/베이지 배경 + 회색 텍스트 → 낮은 시각적 긴장감
- 섹션 간 구분이 얇은 border-b 선 하나뿐 → 구조 파악 어려움
- Nav가 단순 텍스트 링크 → 현재 위치 인식이 약함
- Writing/News 카드가 border-bottom 리스트 → 정보 밀도는 높지만 시각적 흥미 없음
- 폰트가 Georgia serif → 학술적이나 현대적 느낌 부족

### 목표 상태 (To-Be)

AI 안전정책 리더 + 前기자 + 데이터사이언티스트라는 독특한 프로필에 걸맞는,
**신뢰감 있으면서 모던하고 임팩트 있는** 개인 사이트.

| 키워드 | 의미 |
|--------|------|
| Modern | 현대적 sans-serif 타이포, 넓은 여백, 강한 대비 |
| Impact | 히어로 첫 화면에서 즉시 "누구인가"가 전달됨 |
| Trust | 과도한 장식 없이 콘텐츠 중심, 클린한 구성 |
| Accessible | 가독성 최우선, 작은 화면에서도 동일한 경험 |

---

## 2. Goals

### Primary Goals

1. **타이포그래피 교체**: Georgia serif → Inter (현대적 sans-serif, Google Fonts)
2. **히어로 리디자인**: 아바타 + 타이틀이 시각적으로 강하게 전달되도록 레이아웃 재구성
3. **컬러 팔레트 업그레이드**: 베이지 배경 → 순백 또는 차콜 다크 계열로 대비 강화
4. **Nav 강화**: 현재 페이지 인디케이터를 언더라인 또는 배경 하이라이트로 개선
5. **카드/리스트 UI 개선**: Writing, News 항목에 hover 효과 및 시각 그룹핑 추가
6. **여백 및 리듬 개선**: 섹션 spacing을 더 넓게 잡아 읽기 편한 리듬 생성

### Secondary Goals

- 섹션 제목 스타일 개선 (uppercase tracking → 더 임팩트 있는 스타일)
- Footer 디자인 개선
- 링크 hover 스타일 통일

### Out of Scope

- 다크 모드 토글 (추후 고려)
- 페이지 전환 애니메이션
- JavaScript 기반 인터랙션 추가

---

## 3. Design Direction

### 레퍼런스 스타일

**Linus Lee (thesephist.com)** 스타일에서 영감:
- 타이트한 타이포그래피, 강한 대비, 클린한 리스트

**Paco Coursey** 스타일:
- 모노톤 팔레트, 넓은 여백, hover 애니메이션

### 컬러 팔레트 (신규)

| 역할 | 현재 | 변경 |
|------|------|------|
| 배경 | `#fafaf8` (베이지) | `#ffffff` (순백) |
| 기본 텍스트 | `#1a1a1a` | `#0a0a0a` (더 강한 대비) |
| 보조 텍스트 | `#555` | `#6b7280` (Tailwind gray-500) |
| Subtle | `#777` | `#9ca3af` (gray-400) |
| Faint | `#aaa` | `#d1d5db` (gray-300) |
| Border | `#e5e5e5` | `#f3f4f6` (gray-100, 더 얇고 섬세) |
| Accent | 없음 | `#2563eb` (blue-600, 링크/강조) |

### 타이포그래피

| 역할 | 현재 | 변경 |
|------|------|------|
| 본문 폰트 | Georgia, serif | Inter, sans-serif |
| 폰트 로딩 | 시스템 폰트 | `next/font/google` (Inter) |
| 기본 행간 | 1.75 | 1.7 |
| H1 크기 | 1.55rem | 2rem (About) / 1.75rem (내부 페이지) |

### 주요 컴포넌트 변경

#### Nav
- 현재: 텍스트 링크 + active 시 font-semibold
- 변경: active 링크에 하단 `border-b-2 border-black` 언더라인 인디케이터

#### About 히어로
- 현재: 아바타 좌측 + 텍스트 우측 (flex-row)
- 변경: 아바타 좌측 유지, 이름을 더 크게 (2rem), 직함 영역 시각적 강화
  - 직함: badge 스타일 또는 구분선으로 그루핑
  - 본문 텍스트: 행간 및 단락 간격 개선

#### Writing / News 카드
- 현재: border-bottom 단순 리스트
- 변경: 항목에 `hover:bg-gray-50 rounded-lg px-3 -mx-3 transition` 추가
  → 카드처럼 보이지 않지만 hover 시 배경이 뜨는 "ghost card" 효과

#### 섹션 레이블
- 현재: `text-[0.75rem] uppercase tracking-widest text-[#999]`
- 변경: 동일 스타일 유지하되 컬러를 `text-gray-400`으로 통일

---

## 4. Technical Approach

### 변경 파일 목록

| 파일 | 변경 내용 |
|------|----------|
| `tailwind.config.ts` | 컬러 팔레트 + 폰트 업데이트 |
| `src/app/globals.css` | 기본 body 스타일 조정 |
| `src/app/layout.tsx` | Inter 폰트 적용, body 클래스 업데이트 |
| `src/components/Nav.tsx` | active 스타일 언더라인으로 변경 |
| `src/app/page.tsx` | 히어로 영역 리디자인 |
| `src/app/writing/page.tsx` | ghost card hover 효과 |
| `src/app/news/page.tsx` | ghost card hover 효과 |
| `src/app/cv/page.tsx` | 섹션 스타일 개선 |
| `src/components/Footer.tsx` | 미세 개선 |
| `src/components/Tag.tsx` | 팔레트 업데이트 반영 |

### Inter 폰트 적용 방법

```tsx
// layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
```

---

## 5. Success Criteria

| 기준 | 측정 방법 |
|------|----------|
| Inter 폰트 정상 로딩 | 브라우저 DevTools Network |
| 히어로 영역 시각적 임팩트 향상 | 스크린샷 비교 (Before/After) |
| Writing/News hover 효과 동작 | 브라우저 수동 확인 |
| 모바일(375px) 레이아웃 정상 | Chrome DevTools |
| 기존 콘텐츠 유지 | 텍스트 내용 변경 없음 |
| Lighthouse Performance ≥ 90 | Lighthouse 측정 |

---

## 6. Next Steps

1. `/pdca design design-improvement` — 상세 설계 (컴포넌트별 클래스 명세)
2. `/pdca do design-improvement` — 구현 시작
3. `/pdca analyze design-improvement` — 설계-구현 갭 분석
