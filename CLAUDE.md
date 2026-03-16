# Claude Cowork Simple Guide

## Project Overview
VitePress 기반 문서 사이트 — 일반 사무직 사용자를 위한 Claude Desktop Cowork 가이드.

## Branch Strategy
- **`main`** — 소스 코드 (VitePress 소스, 마크다운, Vue 컴포넌트, CSS 등)
- **`guide`** — 빌드 결과물 (GitHub Pages 배포용 정적 파일)

### 배포 워크플로우
1. `main` 브랜치에서 소스 수정 & 커밋
2. `cd cowork-guide && npm run build` 로 빌드
3. `guide` 브랜치로 전환
4. 기존 빌드 파일 삭제 후 `cowork-guide/docs/.vitepress/dist/*` 내용물을 루트에 복사
5. `guide` 브랜치에 커밋 & 푸시
6. `main`으로 돌아오기

> **주의**: 소스 변경 후 반드시 두 브랜치 모두에 반영할 것. main에 커밋 → build → guide에 배포.

## Project Structure
```
cowork-guide/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts          # 사이트 설정, nav, sidebar
│   │   └── theme/
│   │       ├── index.ts       # 테마 진입점
│   │       ├── custom.css     # 전체 커스텀 스타일
│   │       ├── CustomLayout.vue
│   │       ├── HeroBackground.vue
│   │       └── ParticleBackground.vue
│   ├── index.md               # 랜딩 페이지
│   ├── guide/                 # 가이드 문서들
│   ├── test/                  # 테스트/체험 문서들
│   ├── tips/                  # 꿀팁 문서들
│   └── resources/             # 리소스 문서들
└── package.json
```

## Dev Commands
```bash
cd cowork-guide
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## Tech Stack
- VitePress 1.6.x
- Vue 3 (SFC components)
- Plus Jakarta Sans / Inter / JetBrains Mono fonts
- Brand color: #E87040 (Claude Orange)
