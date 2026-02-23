# Plan: Bio Site Next.js Upgrade

## Overview

**Feature**: bio-site-nextjs-upgrade
**Created**: 2026-02-23
**Phase**: Plan
**Level**: Starter (Static Personal Site → Modern Stack)

---

## 1. Background & Motivation

### 현재 상태 (As-Is)

현재 바이오 사이트는 순수 HTML/CSS 정적 파일로 구성되어 있다.

| 파일 | 역할 |
|------|------|
| `index.html` | About (메인 소개) |
| `writing.html` | 논문/글 목록 |
| `news.html` | 언론 보도 목록 |
| `cv.html` | 이력서 |
| `speaking.html` | 강연 (현재 비어있음) |
| `style.css` | 공통 스타일 |

**현재 구조의 한계:**
- Nav, Footer가 모든 HTML 파일에 중복 선언 — 변경 시 5개 파일 모두 수정 필요
- 콘텐츠 데이터와 UI 마크업이 혼재 — 새 항목 추가 시 HTML 직접 편집 필요
- 최적화 부재: 이미지 최적화, 코드 분할, SEO 메타 자동화 없음
- Vercel 배포 미적용 — 현재 배포 상태 불명확

### 목표 상태 (To-Be)

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 스타일링 | Tailwind CSS v4 |
| 배포 | Vercel |
| 콘텐츠 관리 | TypeScript 데이터 파일 (`/src/data/`) |
| 컴포넌트 | 재사용 가능한 Nav, Footer, 페이지 레이아웃 |

---

## 2. Goals

### Primary Goals

1. **컴포넌트화**: Nav, Footer를 공통 컴포넌트로 분리하여 중복 제거
2. **콘텐츠/UI 분리**: 논문, 뉴스, CV 데이터를 TypeScript 파일로 관리
3. **디자인 보존**: 현재의 미니멀한 세리프 타이포그래피 스타일 그대로 유지
4. **Vercel 배포**: `git push` → 자동 프리뷰 및 프로덕션 배포 파이프라인 구축
5. **SEO 기반 마련**: Next.js Metadata API로 각 페이지 title/description 자동화
6. **반응형 개선**: 모바일(~560px) 경험을 Tailwind 모바일 퍼스트 방식으로 고도화

### Secondary Goals

- 이미지 최적화: `next/image` 컴포넌트로 아바타 이미지 최적화
- 타입 안전성: 콘텐츠 데이터에 TypeScript 인터페이스 적용
- Speaking 페이지: 향후 콘텐츠 추가에 대비한 구조 확보

### Out of Scope

- CMS 연동 (Notion, Contentful 등) — 추후 고려
- 다크 모드 — 추후 고려
- 애니메이션/인터랙션 강화 — 추후 고려
- 검색 기능 — 추후 고려

---

## 3. User Stories

| ID | Story | Priority |
|----|-------|----------|
| US-01 | 방문자로서 어떤 페이지에서도 일관된 Nav와 Footer를 보고 싶다 | Must |
| US-02 | 소유자로서 새 논문/뉴스를 데이터 파일만 수정하여 추가하고 싶다 | Must |
| US-03 | 방문자로서 페이지 로딩이 빠르고 이미지가 최적화되어 있기를 원한다 | Should |
| US-04 | 소유자로서 GitHub push만으로 사이트가 자동 배포되기를 원한다 | Must |
| US-05 | 검색엔진이 각 페이지의 고유한 title과 description을 인식하기를 원한다 | Should |
| US-06 | 모바일 사용자로서 스마트폰에서도 콘텐츠를 편하게 읽고 네비게이션할 수 있어야 한다 | Must |
| US-07 | 모바일 사용자로서 햄버거 메뉴를 탭하여 페이지를 쉽게 이동할 수 있어야 한다 | Should |

---

## 4. Technical Approach

### Stack

```
Next.js 15 (App Router)
  ├── TypeScript
  ├── Tailwind CSS v4
  └── next/image (이미지 최적화)

Deployment
  └── Vercel (GitHub 연동, 자동 배포)
```

### 프로젝트 구조 (목표)

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 공통 레이아웃 (Nav, Footer 포함)
│   │   ├── page.tsx            # About 페이지
│   │   ├── writing/
│   │   │   └── page.tsx        # Writing 페이지
│   │   ├── news/
│   │   │   └── page.tsx        # News 페이지
│   │   ├── cv/
│   │   │   └── page.tsx        # CV 페이지
│   │   └── speaking/
│   │       └── page.tsx        # Speaking 페이지
│   ├── components/
│   │   ├── Nav.tsx             # 공통 네비게이션
│   │   ├── Footer.tsx          # 공통 푸터
│   │   └── Tag.tsx             # 태그 컴포넌트
│   └── data/
│       ├── writing.ts          # 논문/글 데이터
│       ├── news.ts             # 뉴스 데이터
│       └── cv.ts               # CV 데이터
├── public/
│   └── avatar.jpeg             # 프로필 이미지
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

### 디자인 토큰 (Tailwind 커스텀 설정)

현재 style.css에서 추출한 핵심 디자인 값:

| 항목 | 현재 값 | Tailwind 설정 |
|------|---------|--------------|
| 배경색 | `#fafaf8` | `colors.bg` 커스텀 |
| 기본 텍스트 | `#1a1a1a` | `colors.ink` 커스텀 |
| 보조 텍스트 | `#555` | `colors.muted` 커스텀 |
| 구분선 | `#e5e5e5` | `colors.border` 커스텀 |
| 본문 폰트 | Georgia, serif | `fontFamily.serif` |
| UI 폰트 | -apple-system, sans-serif | `fontFamily.sans` |
| 최대 너비 | 680px | `maxWidth.content` |

---

## 5. Migration Strategy

### Phase 1: 프로젝트 초기화
- Next.js 15 + TypeScript + Tailwind CSS 프로젝트 생성
- Tailwind 커스텀 디자인 토큰 설정
- Google Fonts 또는 로컬 폰트로 Georgia 대체 설정

### Phase 2: 공통 컴포넌트 구현
- `Nav.tsx`: 현재 active 상태 감지 (`usePathname` 사용)
  - 모바일: 햄버거 아이콘 → 슬라이드 다운 메뉴 (또는 풀스크린 오버레이)
  - 데스크톱: 기존 인라인 링크 레이아웃 유지
- `Footer.tsx`: 저작권 표시
- `layout.tsx`: 전체 레이아웃 래퍼

### Phase 3: 페이지 마이그레이션 (반응형 적용)
- `page.tsx` (About)
  - 모바일: 히어로 아바타 + 텍스트 세로 스택 (`flex-col`)
  - 데스크톱: 가로 나란히 (`flex-row`)
  - 아바타: 모바일 100px / 데스크톱 130px (`next/image`)
- `writing/page.tsx`: 글 목록, 모바일에서 태그 줄바꿈 처리
- `news/page.tsx`: 모바일에서 날짜/내용 세로 배치
- `cv/page.tsx`: 이력 섹션, 모바일 패딩 축소
- `speaking/page.tsx`: 빈 상태 UI

**Tailwind 반응형 전략 (모바일 퍼스트):**
```
기본(모바일)  → sm:(640px)  → md:(768px)
```
- 현재 CSS의 560px 브레이크포인트는 Tailwind `sm:` (640px)로 근사 매핑
- 터치 타겟 최소 크기: Nav 링크 `min-h-[44px]`, 버튼류 `p-3` 이상 보장

### Phase 4: 데이터 분리
- `src/data/writing.ts`: 논문/글 배열 + TypeScript 인터페이스
- `src/data/news.ts`: 뉴스 항목 배열
- `src/data/cv.ts`: 경력/학력 데이터

### Phase 5: Vercel 배포
- Vercel CLI 또는 GitHub 연동으로 프로젝트 등록
- 환경 변수 설정 (현재는 없음)
- 커스텀 도메인 연결 (선택)
- 프로덕션 배포 확인

---

## 6. Success Criteria

| 기준 | 측정 방법 |
|------|----------|
| 현재 디자인과 시각적으로 동일 | 스크린샷 비교 |
| 5개 페이지 모두 정상 동작 | 브라우저 수동 확인 |
| Vercel 배포 성공 | Vercel 대시보드 확인 |
| `git push` → 자동 배포 | GitHub Actions / Vercel 확인 |
| Lighthouse Score Performance ≥ 90 | Lighthouse 측정 |
| 콘텐츠 추가 시 데이터 파일만 수정 | 직접 테스트 |
| 모바일(375px) 레이아웃 정상 렌더링 | Chrome DevTools 모바일 시뮬레이션 |
| 햄버거 메뉴 탭 → 열림/닫힘 정상 동작 | iOS/Android 실기기 또는 DevTools |
| 터치 타겟 크기 ≥ 44px | DevTools 접근성 검사 |

---

## 7. Risks & Mitigations

| 위험 | 대응 |
|------|------|
| Georgia 폰트 웹 렌더링 차이 | `next/font/local` 또는 `next/font/google`의 Lora로 대체 테스트 |
| Tailwind로 기존 스타일 완전 재현 어려움 | 커스텀 값 적극 활용, `@apply` 사용 최소화 |
| 이미지 파일명에 공백 포함 | public/ 복사 시 파일명 정리 |
| Speaking 페이지 nav 미등록 | 현재 nav에 Speaking 없음 확인 → 향후 추가 여부 결정 필요 |
| 햄버거 메뉴 상태 관리 | `useState` + `useEffect`(라우트 변경 시 닫기) 로 처리 |
| 모바일에서 긴 뉴스 제목 오버플로 | `break-words` 또는 `line-clamp` Tailwind 클래스로 처리 |

---

## 8. Dependencies

- Node.js 18+
- Git + GitHub 계정
- Vercel 계정 (GitHub 연동)

---

## 9. Estimated Scope

| 단계 | 작업 항목 수 |
|------|------------|
| 프로젝트 초기화 | 4 |
| 공통 컴포넌트 | 3 |
| 페이지 마이그레이션 | 5 |
| 데이터 분리 | 3 |
| Vercel 배포 | 3 |
| **합계** | **18** |

> 전체 규모: Starter 수준 (단일 개발자, 18개 작업 항목)

---

## 10. Next Steps

1. **지금 바로**: `/pdca design bio-site-nextjs-upgrade` 으로 상세 설계 진행
2. **구현 시작**: `/pdca do bio-site-nextjs-upgrade` 으로 구현 가이드 확인
3. **검증**: `/pdca analyze bio-site-nextjs-upgrade` 으로 설계-구현 갭 분석
