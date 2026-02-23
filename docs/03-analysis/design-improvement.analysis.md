# design-improvement Analysis Report

> **Analysis Type**: Gap Analysis (Design vs Implementation)
>
> **Project**: Sangwoo Heo Personal Site
> **Analyst**: bkit-gap-detector
> **Date**: 2026-02-23
> **Design Doc**: [design-improvement.design.md](../02-design/features/design-improvement.design.md)

---

## 1. Analysis Overview

### 1.1 Analysis Purpose

Design document(`design-improvement.design.md`)에 명시된 컴포넌트 스펙, 컬러 토큰, 폰트, 클래스, ghost card hover 효과 등이 실제 구현 코드에 정확히 반영되었는지 검증한다.

### 1.2 Analysis Scope

- **Design Document**: `docs/02-design/features/design-improvement.design.md`
- **Implementation Files**: 11 files (tailwind.config.ts, globals.css, layout.tsx, Nav.tsx, Footer.tsx, Tag.tsx, page.tsx, writing/page.tsx, news/page.tsx, cv/page.tsx, speaking/page.tsx)
- **Analysis Date**: 2026-02-23

---

## 2. Gap Analysis (Design vs Implementation)

### 2.1 Design Token / Tailwind Config

| Token | Design Value | Implementation Value | Status |
|-------|-------------|---------------------|--------|
| `bg` | `#ffffff` | `#ffffff` | ✅ Match |
| `ink` | `#0a0a0a` | `#0a0a0a` | ✅ Match |
| `muted` | `#6b7280` | `#6b7280` | ✅ Match |
| `subtle` | `#9ca3af` | `#9ca3af` | ✅ Match |
| `faint` | `#d1d5db` | `#d1d5db` | ✅ Match |
| `border` | `#e5e7eb` | `#e5e7eb` | ✅ Match |
| `border-light` | `#f3f4f6` | `#f3f4f6` | ✅ Match |
| `accent` | `#2563eb` | `#2563eb` | ✅ Match |
| `fontFamily.sans` | `['var(--font-inter)', ...]` | `['var(--font-inter)', ...]` | ✅ Match |
| `fontFamily.serif` | `['var(--font-inter)', ...]` | `['var(--font-inter)', ...]` | ✅ Match |
| `maxWidth.content` | `'680px'` | `'680px'` | ✅ Match |

**Score: 11/11 (100%)**

---

### 2.2 Component-by-Component Comparison

#### 2.2.1 tailwind.config.ts

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| colors object | 8 tokens defined | 8 tokens identical | ✅ Match |
| fontFamily | sans + serif = Inter | Identical | ✅ Match |
| maxWidth.content | 680px | 680px | ✅ Match |
| plugins | `[]` | `[]` | ✅ Match |

**Score: 4/4 (100%)**

#### 2.2.2 globals.css

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| @tailwind directives | base, components, utilities | Identical | ✅ Match |
| html font-smoothing | antialiased + grayscale | Identical | ✅ Match |
| a underline-offset | 3px | 3px | ✅ Match |

**Score: 3/3 (100%)**

#### 2.2.3 layout.tsx

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| Inter font import | `Inter` from `next/font/google` | Identical | ✅ Match |
| Inter config | `subsets: ['latin'], variable: '--font-inter', display: 'swap'` | Identical | ✅ Match |
| body className | `${inter.variable} font-sans text-ink bg-bg leading-[1.7] min-h-screen flex flex-col` | Identical | ✅ Match |

**Score: 3/3 (100%)**

#### 2.2.4 Nav.tsx

| Item | Design | Implementation | Status | Notes |
|------|--------|----------------|--------|-------|
| Desktop active style | `text-ink border-b-2 border-ink pb-[1px]` | `text-ink border-b-2 border-ink pb-[1px]` | ✅ Match | |
| Desktop inactive style | `text-muted hover:text-ink` | `text-muted hover:text-ink` | ✅ Match | |
| Container bg | `bg-white/95 backdrop-blur-sm` | `bg-white/95 backdrop-blur-sm` | ✅ Match | |
| Container border | `border-b border-border` | `border-b border-border` | ✅ Match | |

**Score: 4/4 (100%)**

#### 2.2.5 Footer.tsx

| Item | Design | Implementation | Status | Notes |
|------|--------|----------------|--------|-------|
| footer className | `font-sans text-[0.78rem] text-subtle py-8 border-t border-border` | `font-sans text-[0.78rem] py-8 border-t border-border` | ❌ Mismatch | **`text-subtle` missing** |
| Inner div structure | `max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between` | Identical | ✅ Match | |
| Left text | `text-faint` + "(C) 2025 Sangwoo Heo" | Identical | ✅ Match | |
| Right text | `text-faint` + "Seoul, Korea" | Identical | ✅ Match | |

**Score: 3/4 (75%)**

#### 2.2.6 Tag.tsx

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| research color | `bg-amber-50 text-amber-700` | `bg-amber-50 text-amber-700` | ✅ Match |
| policy color | `bg-blue-50 text-blue-700` | `bg-blue-50 text-blue-700` | ✅ Match |
| report color | `bg-emerald-50 text-emerald-700` | `bg-emerald-50 text-emerald-700` | ✅ Match |

**Score: 3/3 (100%)**

#### 2.2.7 page.tsx (About / Hero)

| Item | Design | Implementation | Status | Notes |
|------|--------|----------------|--------|-------|
| H1 className | `text-[2rem] font-semibold mb-[0.35rem] tracking-[-0.03em] text-ink` | Identical | ✅ Match | |
| H1 Korean span | `text-[1.1rem] font-normal text-subtle` | Identical | ✅ Match | |
| Title/position text | `text-[0.9rem] text-muted mb-[0.2rem] font-medium` | Identical | ✅ Match | |
| Avatar border | `ring-1 ring-border` | `ring-1 ring-border` | ✅ Match | |
| Writing section label | `text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border` | Identical | ✅ Match | |
| Writing card hover | `group mb-1 -mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0` | `-mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0` | ❌ Mismatch | **`group` and `mb-1` missing** |

**Score: 5/6 (83%)**

#### 2.2.8 writing/page.tsx

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| H1 className | `text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]` | Identical | ✅ Match |
| Year label | `text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 mt-8 first:mt-0` | Identical | ✅ Match |
| Ghost card | `-mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0` | Identical | ✅ Match |

**Score: 3/3 (100%)**

#### 2.2.9 news/page.tsx

| Item | Design | Implementation | Status | Notes |
|------|--------|----------------|--------|-------|
| H1 className | `text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]` | Identical | ✅ Match | |
| List item (ghost card) | `group flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light sm:flex-row sm:gap-6 last:border-b-0 text-[0.93rem]` | `flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0 sm:flex-row sm:gap-6 text-[0.93rem]` | ❌ Mismatch | **`group` missing** |
| Date column | `flex-shrink-0 text-[0.8rem] text-subtle tabular-nums sm:w-[76px] sm:pt-[0.1rem]` | Identical | ✅ Match | |

**Score: 2/3 (67%)**

#### 2.2.10 cv/page.tsx

| Item | Design | Implementation | Status | Notes |
|------|--------|----------------|--------|-------|
| H1 className | `text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]` | Identical | ✅ Match | |
| Section label | `text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-subtle mb-4 pb-3 border-b border-border` | Identical | ✅ Match | |
| List item text | `text-[0.95rem] text-ink` | `text-[0.95rem] text-ink` | ✅ Match | |
| Bullet items | `text-[0.84rem] text-muted pl-3 border-l border-border-light` | `text-[0.84rem] text-muted pl-3 border-l-2 border-border` | ❌ Mismatch | **`border-l-2` instead of `border-l`, `border-border` instead of `border-border-light`** |

**Score: 3/4 (75%)**

#### 2.2.11 speaking/page.tsx

| Item | Design | Implementation | Status |
|------|--------|----------------|--------|
| H1 className | `text-[1.75rem] font-semibold mb-10 tracking-[-0.03em]` | Identical | ✅ Match |
| Empty state container | `mt-16 text-center` | `mt-16 text-center` | ✅ Match |
| Primary text | `text-[0.95rem] text-subtle` + "No talks scheduled yet." | Identical | ✅ Match |
| Secondary text | `text-[0.84rem] text-faint mt-1` + "Check back later." | Identical | ✅ Match |

**Score: 4/4 (100%)**

---

### 2.3 Ghost Card Hover Effect Verification

Design specifies `hover:bg-gray-50 transition-colors duration-150 rounded-lg` ghost card effect on the following pages:

| Page | File | Ghost Card Applied | `group` Class | Status |
|------|------|--------------------|---------------|--------|
| About (Writing preview) | `src/app/page.tsx` | ✅ Yes | ❌ Missing | ⚠️ Partial |
| Writing | `src/app/writing/page.tsx` | ✅ Yes | N/A (not in design for this file) | ✅ Match |
| News | `src/app/news/page.tsx` | ✅ Yes | ❌ Missing | ⚠️ Partial |

Notes:
- The core hover effect (`hover:bg-gray-50 transition-colors duration-150 rounded-lg`) is applied to all three pages.
- The `group` utility class is specified in the design for `page.tsx` and `news/page.tsx` but is missing in both implementations. While `group` is currently not used by any child selectors (no `group-hover:` classes found), its absence is still a deviation from the design spec.

---

### 2.4 Match Rate Summary

```
+-----------------------------------------------+
|  Component Match Rate                          |
+-----------------------------------------------+
|  tailwind.config.ts       4/4    100%   ✅     |
|  globals.css              3/3    100%   ✅     |
|  layout.tsx               3/3    100%   ✅     |
|  Nav.tsx                  4/4    100%   ✅     |
|  Footer.tsx               3/4     75%   ⚠️     |
|  Tag.tsx                  3/3    100%   ✅     |
|  page.tsx (About)         5/6     83%   ⚠️     |
|  writing/page.tsx         3/3    100%   ✅     |
|  news/page.tsx            2/3     67%   ⚠️     |
|  cv/page.tsx              3/4     75%   ⚠️     |
|  speaking/page.tsx        4/4    100%   ✅     |
+-----------------------------------------------+
|  TOTAL                   37/41    90%   ✅     |
+-----------------------------------------------+
```

---

## 3. Differences Found

### 3.1 Missing from Implementation (Design O, Implementation X)

| # | Item | Design Location | Implementation File | Description |
|---|------|-----------------|---------------------|-------------|
| 1 | `text-subtle` on footer | design-improvement.design.md Section 2-5 | `src/components/Footer.tsx:3` | Design specifies `text-subtle` on `<footer>` element, but implementation omits it |
| 2 | `group` class on About writing card | design-improvement.design.md Section 2-7 | `src/app/page.tsx:103` | Design specifies `group` class on card div, implementation omits it |
| 3 | `mb-1` class on About writing card | design-improvement.design.md Section 2-7 | `src/app/page.tsx:103` | Design specifies `mb-1` on card div, implementation omits it |
| 4 | `group` class on News list item | design-improvement.design.md Section 2-9 | `src/app/news/page.tsx:17` | Design specifies `group` class on `<li>`, implementation omits it |

### 3.2 Changed from Design (Design != Implementation)

| # | Item | Design | Implementation | File | Impact |
|---|------|--------|----------------|------|--------|
| 1 | CV bullet border width | `border-l` (1px) | `border-l-2` (2px) | `src/app/cv/page.tsx:36` | Low - visual difference: thicker border |
| 2 | CV bullet border color | `border-border-light` (`#f3f4f6`) | `border-border` (`#e5e7eb`) | `src/app/cv/page.tsx:36` | Low - visual difference: darker border |

### 3.3 Added Features (Design X, Implementation O)

None found. All implemented features correspond to design specs.

---

## 4. Overall Scores

| Category | Score | Status |
|----------|:-----:|:------:|
| Design Token Match | 100% | ✅ |
| Font / Typography Match | 100% | ✅ |
| Component Structure Match | 90% | ✅ |
| Ghost Card Hover Effect | 83% | ⚠️ |
| **Overall Design Match** | **90%** | **✅** |

```
+-----------------------------------------------+
|  Overall Match Rate: 90% (37/41 items)         |
+-----------------------------------------------+
|  ✅ Exact Match:       37 items (90%)          |
|  ❌ Mismatch:           4 items (10%)          |
|  ⚠️ Added (not in design): 0 items             |
+-----------------------------------------------+
```

---

## 5. Recommended Actions

### 5.1 Immediate (Low Effort Fixes)

| Priority | Item | File | Line | Fix |
|----------|------|------|------|-----|
| 1 | Add `text-subtle` to footer | `src/components/Footer.tsx` | L3 | Add `text-subtle` to `<footer>` className |
| 2 | Add `group mb-1` to About writing card | `src/app/page.tsx` | L103 | Add `group mb-1` to card div className |
| 3 | Add `group` to News list item | `src/app/news/page.tsx` | L17 | Add `group` to `<li>` className |
| 4 | Fix CV bullet border | `src/app/cv/page.tsx` | L36 | Change `border-l-2 border-border` to `border-l border-border-light` |

### 5.2 Design Document Updates Needed

None. All differences are implementation deviations from the design. The design document is accurate and does not need updates.

---

## 6. Detailed Fix Reference

### Fix 1: Footer.tsx (Line 3)

```
Current:  font-sans text-[0.78rem] py-8 border-t border-border
Expected: font-sans text-[0.78rem] text-subtle py-8 border-t border-border
```

### Fix 2: page.tsx (Line 103)

```
Current:  -mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0
Expected: group mb-1 -mx-3 px-3 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-150 border-b border-border-light last:border-b-0
```

### Fix 3: news/page.tsx (Line 17)

```
Current:  flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 ...
Expected: group flex flex-col gap-[0.15rem] -mx-3 px-3 py-3 rounded-lg hover:bg-gray-50 ...
```

### Fix 4: cv/page.tsx (Line 36)

```
Current:  text-[0.84rem] text-muted pl-3 border-l-2 border-border
Expected: text-[0.84rem] text-muted pl-3 border-l border-border-light
```

---

## 7. Next Steps

- [ ] Apply 4 fixes listed above
- [ ] Re-run gap analysis to verify 100% match rate
- [ ] Write completion report (`design-improvement.report.md`)

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-02-23 | Initial gap analysis | bkit-gap-detector |
