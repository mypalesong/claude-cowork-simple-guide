import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/claude-cowork-simple-guide/',
  title: 'Claude Cowork Guide',
  description: '일반 사무직 사용자를 위한 Claude Desktop Cowork 완전 정복',
  lang: 'ko-KR',
  appearance: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    siteTitle: 'Claude Cowork Guide',

    nav: [
      { text: '시작하기', link: '/guide/overview' },
      { text: '활용법', items: [
        { text: '업무 활용', items: [
          { text: '문서 작성', link: '/guide/writing' },
          { text: '데이터 분석', link: '/guide/data' },
          { text: '회의 & 협업', link: '/guide/meeting' },
          { text: '일상 업무 자동화', link: '/guide/daily' },
          { text: '프레젠테이션', link: '/guide/presentation' },
          { text: '부서별 활용', link: '/guide/by-dept' },
        ]},
        { text: '기능 & 연동', items: [
          { text: 'Projects & Memory', link: '/guide/projects' },
          { text: 'MCP 연동', link: '/guide/mcp' },
          { text: '플러그인 디렉토리', link: '/guide/plugins' },
          { text: '워크플로우 레시피', link: '/guide/workflows' },
          { text: 'Cowork vs Code', link: '/guide/cowork-vs-code' },
          { text: '접근성 가이드', link: '/guide/accessibility' },
        ]},
        { text: '관리자 & 조직', items: [
          { text: '보안 가이드', link: '/guide/security' },
          { text: '도입 가이드 (관리자)', link: '/guide/admin' },
          { text: '팀 교육 프로그램', link: '/guide/training' },
          { text: '사내 AI 커뮤니티', link: '/guide/community' },
          { text: '부서별 스타터 키트', link: '/guide/starter-kits' },
          { text: 'AI 윤리 & 책임', link: '/guide/ethics' },
        ]},
      ]},
      { text: '테스트', items: [
        { text: '기초 테스트', link: '/test/basic' },
        { text: '심화 테스트', link: '/test/advanced' },
        { text: '실력 퀴즈', link: '/test/quiz' },
        { text: 'Cowork 체험', link: '/test/demo' },
        { text: '용어 플래시카드', link: '/test/flashcards' },
        { text: '온보딩 빙고', link: '/test/bingo' },
        { text: '톤 변환 체험', link: '/test/tone-converter' },
        { text: '하루 일과 시뮬레이터', link: '/test/daily-sim' },
        { text: 'Cowork 뱃지', link: '/test/badges' },
      ]},
      { text: '꿀팁', items: [
        { text: '질문 잘하는 법', link: '/tips/prompting' },
        { text: '자주 하는 실수', link: '/tips/mistakes' },
        { text: 'FAQ', link: '/tips/faq' },
        { text: '용어집', link: '/tips/glossary' },
        { text: '문제 해결 가이드', link: '/tips/troubleshooting' },
        { text: '단축키 & 빠른 팁', link: '/tips/shortcuts' },
        { text: '고급 프롬프트 패턴', link: '/tips/advanced-prompts' },
      ]},
      { text: '리소스', items: [
        { text: '학습 자료', items: [
          { text: '공식 문서 & 링크', link: '/resources/' },
          { text: '추천 영상 모음', link: '/resources/videos' },
          { text: '도입 사례', link: '/resources/cases' },
          { text: '업데이트 타임라인', link: '/resources/updates' },
          { text: '가이드 전체 구조', link: '/resources/sitemap' },
        ]},
        { text: '프롬프트 도구', items: [
          { text: '프롬프트 템플릿', link: '/resources/templates' },
          { text: '프롬프트 빌더', link: '/resources/prompt-builder' },
          { text: '프롬프트 치트시트', link: '/resources/cheatsheet' },
          { text: '프롬프트 평가기', link: '/resources/prompt-scorer' },
          { text: '프롬프트 A/B 비교기', link: '/resources/prompt-battle' },
        ]},
        { text: '분석 & 계산기', items: [
          { text: 'AI 도구 비교표', link: '/resources/comparison' },
          { text: 'ROI 계산기', link: '/resources/roi-calculator' },
          { text: '회의 비용 계산기', link: '/resources/meeting-calculator' },
          { text: 'AI 성숙도 평가', link: '/resources/maturity' },
          { text: '어떤 기능을 쓸까?', link: '/resources/decision-tree' },
        ]},
        { text: '플래너 & 활동', items: [
          { text: '주간 AI 플래너', link: '/resources/weekly-planner' },
          { text: '연간 활용 캘린더', link: '/resources/annual-calendar' },
          { text: '성과 대시보드', link: '/resources/dashboard' },
          { text: 'AI 도입 설문 생성기', link: '/resources/survey-generator' },
          { text: 'AI 포모도로 타이머', link: '/resources/pomodoro' },
          { text: '팀 활동 아이디어', link: '/resources/team-activities' },
        ]},
      ]},
    ],

    sidebar: {
      '/guide/': [
        {
          text: '시작하기',
          items: [
            { text: 'Overview', link: '/guide/overview' },
            { text: 'Cowork가 뭔가요?', link: '/guide/what-is-cowork' },
            { text: '처음 시작하기', link: '/guide/first-steps' },
            { text: '첫 번째 대화해보기', link: '/guide/first-chat' },
            { text: '온보딩 체크리스트', link: '/guide/checklist' },
          ]
        },
        {
          text: '업무 활용',
          items: [
            { text: '문서 작성 활용법', link: '/guide/writing' },
            { text: '데이터 정리 & 분석', link: '/guide/data' },
            { text: '회의 & 협업 활용법', link: '/guide/meeting' },
            { text: '일상 업무 자동화', link: '/guide/daily' },
            { text: '프레젠테이션 활용법', link: '/guide/presentation' },
            { text: '부서별 활용 사례', link: '/guide/by-dept' },
            { text: '부서별 스타터 키트', link: '/guide/starter-kits' },
          ]
        },
        {
          text: '기능 & 연동',
          items: [
            { text: 'Projects & Memory', link: '/guide/projects' },
            { text: 'MCP 연동 활용법', link: '/guide/mcp' },
            { text: '플러그인 디렉토리', link: '/guide/plugins' },
            { text: '워크플로우 레시피', link: '/guide/workflows' },
            { text: 'Cowork vs Code', link: '/guide/cowork-vs-code' },
            { text: '접근성 가이드', link: '/guide/accessibility' },
          ]
        },
        {
          text: '관리자 & 보안',
          items: [
            { text: '보안 & 컴플라이언스', link: '/guide/security' },
            { text: '도입 가이드 (관리자)', link: '/guide/admin' },
            { text: '팀 교육 프로그램', link: '/guide/training' },
            { text: '사내 AI 커뮤니티', link: '/guide/community' },
            { text: '보안 준비 체크리스트', link: '/guide/security-check' },
            { text: 'AI 윤리 & 책임', link: '/guide/ethics' },
          ]
        },
      ],
      '/test/': [
        {
          text: '직접 따라해보기',
          items: [
            { text: '기초 테스트 시나리오', link: '/test/basic' },
            { text: '심화 테스트 시나리오', link: '/test/advanced' },
            { text: 'Cowork 실력 퀴즈', link: '/test/quiz' },
            { text: 'Cowork 체험하기', link: '/test/demo' },
            { text: '용어 플래시카드', link: '/test/flashcards' },
            { text: '온보딩 빙고', link: '/test/bingo' },
            { text: '톤 변환 체험', link: '/test/tone-converter' },
            { text: '하루 일과 시뮬레이터', link: '/test/daily-sim' },
            { text: 'Cowork 뱃지', link: '/test/badges' },
          ]
        },
      ],
      '/tips/': [
        {
          text: '꿀팁 & 도움말',
          items: [
            { text: '질문 잘하는 법', link: '/tips/prompting' },
            { text: '자주 하는 실수', link: '/tips/mistakes' },
            { text: 'FAQ', link: '/tips/faq' },
            { text: '용어집', link: '/tips/glossary' },
            { text: '문제 해결 가이드', link: '/tips/troubleshooting' },
            { text: '단축키 & 빠른 팁', link: '/tips/shortcuts' },
            { text: '고급 프롬프트 패턴', link: '/tips/advanced-prompts' },
          ]
        },
      ],
      '/resources/': [
        {
          text: '문서 & 학습',
          items: [
            { text: '공식 문서 & 링크 모음', link: '/resources/' },
            { text: '추천 영상 모음', link: '/resources/videos' },
            { text: '도입 사례', link: '/resources/cases' },
            { text: '업데이트 타임라인', link: '/resources/updates' },
            { text: '가이드 전체 구조', link: '/resources/sitemap' },
          ]
        },
        {
          text: '프롬프트 도구',
          items: [
            { text: '프롬프트 템플릿', link: '/resources/templates' },
            { text: '프롬프트 빌더', link: '/resources/prompt-builder' },
            { text: '프롬프트 치트시트', link: '/resources/cheatsheet' },
            { text: '프롬프트 평가기', link: '/resources/prompt-scorer' },
            { text: '프롬프트 A/B 비교기', link: '/resources/prompt-battle' },
          ]
        },
        {
          text: '분석 & 평가',
          items: [
            { text: 'AI 도구 비교표', link: '/resources/comparison' },
            { text: 'ROI 계산기', link: '/resources/roi-calculator' },
            { text: '회의 비용 계산기', link: '/resources/meeting-calculator' },
            { text: 'AI 성숙도 평가', link: '/resources/maturity' },
            { text: '어떤 기능을 쓸까?', link: '/resources/decision-tree' },
          ]
        },
        {
          text: '플래너 & 활동',
          items: [
            { text: '주간 AI 플래너', link: '/resources/weekly-planner' },
            { text: '연간 활용 캘린더', link: '/resources/annual-calendar' },
            { text: '성과 대시보드', link: '/resources/dashboard' },
            { text: 'AI 도입 설문 생성기', link: '/resources/survey-generator' },
            { text: 'AI 포모도로 타이머', link: '/resources/pomodoro' },
            { text: '팀 활동 아이디어', link: '/resources/team-activities' },
          ]
        },
      ],
    },

    outline: { level: [2, 3], label: '이 페이지에서' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/anthropics/claude-code' },
    ],

    search: { provider: 'local', options: { translations: { button: { buttonText: '검색', buttonAriaLabel: '검색' } } } },

    footer: {
      message: 'Claude Desktop Cowork — 일반 사무직을 위한 완벽 가이드',
      copyright: '2026 — Built with Claude'
    },

    docFooter: { prev: '이전', next: '다음' },
    lastUpdatedText: '마지막 업데이트',
    returnToTopLabel: '맨 위로',
  },
})
