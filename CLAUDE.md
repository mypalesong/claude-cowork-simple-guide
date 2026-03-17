# Claude Cowork Simple Guide

## Project Overview
VitePress 기반 문서 사이트 — 일반 사무직 사용자를 위한 Claude Desktop Cowork 가이드.

## Branch Strategy
- **`main`** — 소스 코드 (VitePress 소스, 마크다운, Vue 컴포넌트, CSS 등)
- **`guide`** — 빌드 결과물 (GitHub Pages 배포용 정적 파일, GitHub Actions가 자동 배포)

### 배포 워크플로우
`main` 브랜치에 push하면 GitHub Actions가 자동으로:
1. `npm ci` → `npm run build`
2. 빌드 결과물을 `guide` 브랜치에 배포

수동 배포가 필요 없음. `.github/workflows/deploy.yml` 참조.

## Project Structure
```
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
├── package.json
├── .github/workflows/deploy.yml  # 자동 배포 워크플로우
└── CLAUDE.md
```

## Dev Commands
```bash
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## Tech Stack
- VitePress 1.6.x
- Vue 3 (SFC components)
- Plus Jakarta Sans / Inter / JetBrains Mono fonts
- Brand color: #E87040 (Claude Orange)
