# PDCA Completion Report: design-improvement

> **Feature**: design-improvement
> **Project**: Sangwoo Heo Personal Site (sangwooheo.github.io)
> **Cycle**: Plan → Design → Do → Check
> **Completed**: 2026-02-23
> **Overall Match Rate**: 90% (37/41 items) ✅

---

## 1. Executive Summary

개인 사이트(Next.js)의 시각적 디자인을 전면 개선한 PDCA 사이클이 성공적으로 완료됐다.
Georgia serif 기반의 학술적 스타일에서 Inter sans-serif 기반의 모던·신뢰감 있는 디자인으로 전환하였으며,
설계-구현 일치율 **90%** (37/41 항목)를 달성해 배포 기준을 충족했다.

| 항목 | 내용 |
|------|------|
| 기간 | 2026-02-23 (1일) |
| 변경 파일 수 | 11개 |
| PDCA 반복 횟수 | 1회 (Check 90% 통과로 iterate 불필요) |
| 배포 상태 | GitHub push 완료, Vercel 연동 진행 중 |

---

## 2. Plan Phase Summary

### 핵심 목표

| 목표 | 달성 여부 |
|------|:--------:|
| Georgia → Inter (sans-serif) 폰트 교체 | ✅ |
| 히어로 영역 시각적 강화 | ✅ |
| 컬러 팔레트 업그레이드 (베이지 → 순백 + 강한 대비) | ✅ |
| Nav active 인디케이터 개선 (언더라인) | ✅ |
| Writing/News ghost card hover 효과 | ✅ |
| 여백 및 리듬 개선 | ✅ |

### Out of Scope (미구현 — 의도적)

- 다크 모드 토글
- 페이지 전환 애니메이션
- JavaScript 기반 인터랙션

---

## 3. Design Phase Summary

### 설계된 주요 스펙

#### 컬러 팔레트 (8개 토큰)

| 토큰 | 값 | 용도 |
|------|----|------|
| `bg` | `#ffffff` | 배경 |
| `ink` | `#0a0a0a` | 기본 텍스트 |
| `muted` | `#6b7280` | 보조 텍스트 |
| `subtle` | `#9ca3af` | 설명 텍스트 |
| `faint` | `#d1d5db` | 비활성 요소 |
| `border` | `#e5e7eb` | 기본 테두리 |
| `border-light` | `#f3f4f6` | 연한 테두리 |
| `accent` | `#2563eb` | 링크/강조 |

#### 타이포그래피

- **폰트**: Inter (`next/font/google`, variable: `--font-inter`)
- **행간**: 1.7
- **H1 크기**: About 페이지 `2rem`, 내부 페이지 `1.75rem`

#### Ghost Card 패턴

```
hover:bg-gray-50 transition-colors duration-150 rounded-lg
-mx-3 px-3 (negative margin trick for full-width hover)
```

---

## 4. Do Phase Summary

### 구현 완료 파일 (11개)

| 파일 | 주요 변경 |
|------|----------|
| `tailwind.config.ts` | 8개 커스텀 컬러 + Inter 폰트 + maxWidth.content(680px) |
| `src/app/globals.css` | antialiased, underline-offset: 3px |
| `src/app/layout.tsx` | Inter 폰트 로딩, body 클래스 적용 |
| `src/components/Nav.tsx` | active: `border-b-2 border-ink`, bg: `bg-white/95 backdrop-blur-sm` |
| `src/components/Footer.tsx` | 미세 스타일 조정 |
| `src/components/Tag.tsx` | 팔레트 기반 컬러 적용 |
| `src/app/page.tsx` | 히어로 리디자인, 아바타 ring, 섹션 레이블 스타일 |
| `src/app/writing/page.tsx` | ghost card hover, year 레이블 스타일 |
| `src/app/news/page.tsx` | ghost card hover, date column 스타일 |
| `src/app/cv/page.tsx` | 섹션 레이블, bullet item 스타일 |
| `src/app/speaking/page.tsx` | empty state 스타일 |

---

## 5. Check Phase Summary (Gap Analysis)

### 전체 결과

```
+-----------------------------------------------+
|  Overall Match Rate: 90% (37/41 items)         |
+-----------------------------------------------+
|  ✅ Exact Match:       37 items (90%)          |
|  ❌ Mismatch:           4 items (10%)          |
|  ⚠️ Added (not in design): 0 items             |
+-----------------------------------------------+
```

### 컴포넌트별 일치율

| 컴포넌트 | 일치율 | 상태 |
|----------|:------:|:----:|
| tailwind.config.ts | 100% (4/4) | ✅ |
| globals.css | 100% (3/3) | ✅ |
| layout.tsx | 100% (3/3) | ✅ |
| Nav.tsx | 100% (4/4) | ✅ |
| Footer.tsx | 75% (3/4) | ⚠️ |
| Tag.tsx | 100% (3/3) | ✅ |
| page.tsx (About) | 83% (5/6) | ⚠️ |
| writing/page.tsx | 100% (3/3) | ✅ |
| news/page.tsx | 67% (2/3) | ⚠️ |
| cv/page.tsx | 75% (3/4) | ⚠️ |
| speaking/page.tsx | 100% (4/4) | ✅ |

### 잔여 GAP (4개 — 낮은 영향도)

| # | 파일 | 내용 | 영향도 |
|---|------|------|:------:|
| 1 | `Footer.tsx:3` | `text-subtle` 누락 | Low |
| 2 | `page.tsx:103` | `group mb-1` 누락 | Low |
| 3 | `news/page.tsx:17` | `group` 누락 | Low |
| 4 | `cv/page.tsx:36` | `border-l-2 border-border` → `border-l border-border-light` | Low |

> 모든 잔여 GAP은 시각적 영향이 낮은 유틸리티 클래스 수준이며, `group` 클래스는 현재 `group-hover:`가 없으므로 기능적 차이 없음.

---

## 6. Key Learnings

### 잘된 것

1. **Tailwind 커스텀 토큰 전략** — 8개 시맨틱 컬러 토큰(`ink`, `muted`, `subtle` 등)으로 일관성 확보. 코드 전체에 하드코딩된 색상값 없음.
2. **Ghost Card 패턴** — `hover:bg-gray-50 -mx-3 px-3` negative margin trick으로 카드 테두리 없이 자연스러운 hover 영역 구현. Writing, News, About 페이지 공통 적용.
3. **Inter 폰트 최적화** — `next/font/google`의 CSS variable 방식으로 layout shift 없는 폰트 로딩.
4. **1일 완성** — Plan → Design → Do → Check를 단일 세션에서 완료.

### 개선점

1. **`group` 클래스 누락 패턴** — `group` 클래스를 추가했지만 `group-hover:` 자식 선택자를 쓰지 않아 설계-구현 GAP 발생. 향후 `group` 설계 시 실제 활용 예시까지 명세 필요.
2. **minor border 클래스 불일치** — `border-l` vs `border-l-2` 같은 미세한 불일치. 설계서에 구체적인 Tailwind 클래스명을 명시하면 방지 가능.

---

## 7. Deployment

### GitHub

- **Repository**: `https://github.com/markheo/sangwooheo`
- **Branch**: `main`
- **Status**: ✅ Push 완료 (2026-02-23)

### Vercel (진행 중)

- vercel.com에서 `markheo/sangwooheo` 연동 후 자동 배포 예정
- `git push` 시 자동 재배포 (CI/CD)

---

## 8. Next Actions

| 우선순위 | 작업 | 명령 |
|:--------:|------|------|
| 1 | Vercel 배포 연동 완료 | vercel.com에서 Import |
| 2 | 잔여 GAP 4개 수정 | `pdca iterate design-improvement` |
| 3 | 실 URL에서 Lighthouse 측정 | 배포 후 확인 |
| 4 | 다크 모드 (추후) | 새 PDCA 사이클 |

---

## Version History

| Version | Date | Author |
|---------|------|--------|
| 1.0 | 2026-02-23 | bkit-report-generator |
