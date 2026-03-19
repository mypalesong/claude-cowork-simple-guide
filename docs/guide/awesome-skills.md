# Awesome Claude Skills 디렉토리

> 전 세계 개발자들이 만든 **147개 이상의 Claude 스킬** 모음. 문서 작성부터 SaaS 자동화까지, 설치만 하면 바로 쓸 수 있는 스킬들을 카테고리별로 정리했습니다.

::: info 출처
이 페이지는 [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) 오픈소스 프로젝트를 기반으로 작성되었습니다. 각 스킬의 최신 정보는 원본 GitHub 링크를 참고하세요.
:::

## 스킬 설치 방법

스킬을 사용하려면 아래 방법 중 하나로 설치합니다:

| 방법 | 설명 |
|------|------|
| **ZIP 업로드** | GitHub에서 ZIP 다운로드 → Customize → Skills → Upload |
| **`/skill-creator`** | 대화창에서 직접 스킬 생성 (나만의 스킬 만들기는 [스킬 만들기 가이드](/guide/skills) 참고) |
| **Composio 연동** | Composio 계정 연동 후 SaaS 앱 자동화 스킬 사용 |

::: tip 스킬 유형 구분
- 🏢 **공식 스킬** — Anthropic이 제공하는 공식 스킬
- 🌐 **커뮤니티 스킬** — 개발자들이 만든 오픈소스 스킬
- 🔗 **Composio 스킬** — Composio 플랫폼을 통한 SaaS 앱 연동 스킬
:::

---

## 📄 문서 처리

사무직 사용자에게 **가장 실용적인 카테고리**입니다. Word, Excel, PDF, PPT 파일을 Claude가 직접 다룰 수 있게 해줍니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **docx** | 🏢 Anthropic | Word 문서 생성·편집·분석. 변경 추적, 댓글, 서식 지원 | [GitHub](https://github.com/anthropics/skills/tree/main/skills/docx) |
| **pdf** | 🏢 Anthropic | PDF에서 텍스트·표·메타데이터 추출, 병합 및 주석 달기 | [GitHub](https://github.com/anthropics/skills/tree/main/skills/pdf) |
| **pptx** | 🏢 Anthropic | 슬라이드 읽기·생성·수정, 레이아웃과 템플릿 지원 | [GitHub](https://github.com/anthropics/skills/tree/main/skills/pptx) |
| **xlsx** | 🏢 Anthropic | 스프레드시트 조작: 수식, 차트, 데이터 변환 | [GitHub](https://github.com/anthropics/skills/tree/main/skills/xlsx) |
| **Markdown to EPUB** | 🌐 @smerchek | 마크다운 문서를 전문적인 EPUB 전자책으로 변환 | [GitHub](https://github.com/smerchek/claude-epub-skill) |

::: details 💡 사무직 활용 포인트
- **docx**: 보고서 자동 생성, 기존 Word 문서 요약, 양식 자동 채우기
- **xlsx**: 매출 데이터 분석, 차트 생성, 복잡한 수식 자동 작성
- **pdf**: 계약서·제안서 PDF 내용 추출 및 요약
- **pptx**: 발표 자료 초안 자동 생성, 기존 슬라이드 수정
:::

---

## ✍️ 커뮤니케이션 & 글쓰기

이메일, 기사, 회의록 등 다양한 글쓰기 업무를 도와주는 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **article-extractor** | 🌐 @michalparkola | 웹 페이지에서 기사 본문과 메타데이터를 추출 | [GitHub](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/article-extractor) |
| **brainstorming** | 🌐 @obra | 대략적인 아이디어를 완성된 기획으로 발전시키기 | [GitHub](https://github.com/obra/superpowers/tree/main/skills/brainstorming) |
| **Content Research Writer** | 🔗 Composio | 리서치 기반 콘텐츠 작성. 인용, 훅, SEO 최적화 포함 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/content-research-writer) |
| **family-history-research** | 🌐 @emaynard | 가계도·족보 조사 프로젝트 계획 및 리서치 지원 | [GitHub](https://github.com/emaynard/claude-family-history-research-skill) |
| **Internal Comms** | 🔗 Composio | 사내 커뮤니케이션, 뉴스레터, 현황 보고서 작성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/internal-comms) |
| **Meeting Insights Analyzer** | 🔗 Composio | 회의 녹취록을 분석하여 행동 패턴과 인사이트 도출 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/meeting-insights-analyzer) |
| **NotebookLM Integration** | 🌐 @PleasePrompto | Google NotebookLM과 연동하여 문서 기반 대화 | [GitHub](https://github.com/PleasePrompto/notebooklm-skill) |
| **Twitter Algorithm Optimizer** | 🔗 Composio | 트위터(X) 게시물 최적화 — 알고리즘에 맞는 콘텐츠 작성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/twitter-algorithm-optimizer) |

---

## 📊 데이터 & 분석

데이터를 다루고 분석하는 스킬들입니다. CSV 분석부터 데이터베이스 쿼리까지.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **CSV Data Summarizer** | 🌐 @coffeefuelbump | CSV 파일을 분석하고 시각화 포함 종합 인사이트 생성 | [GitHub](https://github.com/coffeefuelbump/csv-data-summarizer-claude-skill) |
| **deep-research** | 🌐 @sanjay3290 | Gemini 에이전트를 활용한 자율형 멀티스텝 리서치 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills/deep-research) |
| **postgres** | 🌐 @sanjay3290 | PostgreSQL 데이터베이스에 안전한 읽기 전용 쿼리 실행 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills/postgres) |
| **root-cause-tracing** | 🌐 @obra | 오류의 근본 원인을 역추적하여 최초 트리거 발견 | [GitHub](https://github.com/obra/superpowers/tree/main/skills/root-cause-tracing) |

::: details 💡 사무직 활용 포인트
- **CSV Data Summarizer**: 엑셀에서 내보낸 CSV 데이터를 빠르게 분석·요약
- **deep-research**: 시장 조사, 경쟁사 분석 등 심층 리서치 자동화
:::

---

## 💼 비즈니스 & 마케팅

영업, 마케팅, 브랜드 관리에 유용한 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **Brand Guidelines** | 🔗 Composio | 브랜드 컬러와 타이포그래피를 산출물에 자동 적용 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/brand-guidelines) |
| **Competitive Ads Extractor** | 🔗 Composio | 경쟁사 광고를 광고 라이브러리에서 추출·분석 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/competitive-ads-extractor) |
| **Domain Name Brainstormer** | 🔗 Composio | 창의적 도메인 이름 생성 및 가용성 확인 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/domain-name-brainstormer) |
| **Lead Research Assistant** | 🔗 Composio | 잠재 고객 발굴 및 자격 평가 (영업 리서치) | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/lead-research-assistant) |

---

## 🎨 크리에이티브 & 미디어

이미지, 영상, 디자인 관련 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **Canvas Design** | 🔗 Composio | PNG/PDF 형식의 시각적 아트워크 제작 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/canvas-design) |
| **imagen** | 🌐 @sanjay3290 | Google Gemini API로 이미지 생성 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills/imagen) |
| **Image Enhancer** | 🔗 Composio | 이미지 품질 향상 — 해상도, 선명도 개선 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/image-enhancer) |
| **Slack GIF Creator** | 🔗 Composio | Slack 최적화 애니메이션 GIF 제작 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/slack-gif-creator) |
| **Theme Factory** | 🔗 Composio | 산출물에 전문적인 폰트·컬러 테마 적용 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/theme-factory) |
| **Video Downloader** | 🔗 Composio | YouTube 등에서 영상 다운로드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/video-downloader) |
| **youtube-transcript** | 🌐 @michalparkola | YouTube 영상 자막 추출 및 요약 | [GitHub](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/youtube-transcript) |

---

## 📋 생산성 & 정리

파일 정리, 이력서 생성, 워크플로우 관리 등 업무 효율을 높이는 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **File Organizer** | 🔗 Composio | 파일/폴더를 문맥 이해 기반으로 자동 정리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/file-organizer) |
| **Invoice Organizer** | 🔗 Composio | 세금 신고용 송장/청구서 자동 분류·정리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/invoice-organizer) |
| **kaizen** | 🌐 NeoLabHQ | 카이젠(지속적 개선) 방법론 적용 — 업무 프로세스 개선 | [GitHub](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/kaizen/skills/kaizen) |
| **n8n-skills** | 🌐 @haunchen | n8n 워크플로우 자동화 도구 이해·운영 지원 | [GitHub](https://github.com/haunchen/n8n-skills) |
| **Raffle Winner Picker** | 🔗 Composio | 암호학적으로 안전한 무작위 추첨 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/raffle-winner-picker) |
| **Tailored Resume Generator** | 🔗 Composio | 채용 공고에 맞춰 이력서 자동 생성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/tailored-resume-generator) |
| **ship-learn-next** | 🌐 @michalparkola | 다음에 만들거나 배울 것을 반복적으로 결정 | [GitHub](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/ship-learn-next) |
| **tapestry** | 🌐 @michalparkola | 관련 문서를 연결·요약하여 지식 네트워크 구축 | [GitHub](https://github.com/michalparkola/tapestry-skills-for-claude-code/tree/main/tapestry) |

---

## 🛠️ 개발 & 코드 도구

개발자 및 기술 직군을 위한 스킬들입니다. 코드 품질, 테스트, 아키텍처, 자동화 등.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **artifacts-builder** | 🏢 Anthropic | React, Tailwind CSS, shadcn/ui 기반 멀티 컴포넌트 아티팩트 생성 | [GitHub](https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder) |
| **aws-skills** | 🌐 @zxkane | AWS CDK 베스트 프랙티스, 서버리스 패턴 개발 | [GitHub](https://github.com/zxkane/aws-skills) |
| **Changelog Generator** | 🔗 Composio | Git 커밋에서 사용자 대상 변경 로그 자동 생성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/changelog-generator) |
| **Claude Code Terminal Title** | 🌐 @bluzername | 터미널 창에 작업 내용을 설명하는 동적 제목 표시 | [GitHub](https://github.com/bluzername/claude-code-terminal-title) |
| **D3.js Visualization** | 🌐 @chrisvoncsefalvay | D3.js 차트 및 인터랙티브 데이터 시각화 생성 | [GitHub](https://github.com/chrisvoncsefalvay/claude-d3js-skill) |
| **finishing-a-development-branch** | 🌐 @obra | 개발 브랜치 작업 완료 시 명확한 옵션 제시 | [GitHub](https://github.com/obra/superpowers/tree/main/skills/finishing-a-development-branch) |
| **iOS Simulator** | 🌐 @conorluddy | iOS 시뮬레이터와 연동하여 앱 테스트 | [GitHub](https://github.com/conorluddy/ios-simulator-skill) |
| **jules** | 🌐 @sanjay3290 | Google Jules AI 에이전트에 코딩 작업 위임 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills/jules) |
| **LangSmith Fetch** | 🌐 @OthmanAdi | LangChain 에이전트 실행 트레이스 가져와서 디버깅 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/langsmith-fetch) |
| **MCP Builder** | 🔗 Composio | Python/TypeScript MCP 서버 제작 가이드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/mcp-builder) |
| **move-code-quality-skill** | 🌐 @1NickPappas | Move 언어 패키지 코드 품질 체크리스트 분석 | [GitHub](https://github.com/1NickPappas/move-code-quality-skill) |
| **Playwright Browser Automation** | 🌐 @lackeyjb | Playwright 기반 브라우저 자동화 테스트 | [GitHub](https://github.com/lackeyjb/playwright-skill) |
| **prompt-engineering** | 🌐 NeoLabHQ | 프롬프트 엔지니어링 기법과 Anthropic 베스트 프랙티스 | [GitHub](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/customaize-agent/skills/prompt-engineering) |
| **pypict-claude-skill** | 🌐 @omkamal | PICT를 사용한 조합 테스트 케이스 설계 | [GitHub](https://github.com/omkamal/pypict-claude-skill) |
| **reddit-fetch** | 🌐 @ykdojo | Gemini CLI를 통한 Reddit 콘텐츠 가져오기 | [GitHub](https://github.com/ykdojo/claude-code-tips/tree/main/skills/reddit-fetch) |
| **Skill Creator** | 🔗 Composio | 효과적인 Claude 스킬 제작 가이드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/skill-creator) |
| **Skill Seekers** | 🌐 @yusufkaraaslan | 문서 웹사이트를 자동으로 Claude 스킬로 변환 | [GitHub](https://github.com/yusufkaraaslan/Skill_Seekers) |
| **software-architecture** | 🌐 NeoLabHQ | 클린 아키텍처, SOLID 원칙 등 설계 패턴 적용 | [GitHub](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/ddd/skills/software-architecture) |
| **subagent-driven-development** | 🌐 NeoLabHQ | 독립 서브에이전트 파견 + 코드 리뷰 체크포인트 | [GitHub](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd/skills/subagent-driven-development) |
| **test-driven-development** | 🌐 @obra | 코드 작성 전 테스트 먼저 작성하는 TDD 워크플로우 | [GitHub](https://github.com/obra/superpowers/tree/main/skills/test-driven-development) |
| **using-git-worktrees** | 🌐 @obra | 격리된 Git Worktree 생성 및 안전 검증 | [GitHub](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/) |
| **Connect** | 🔗 Composio | 500+ 앱에 Claude 연결 — 이메일, 이슈, 메시지 전송 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/connect) |
| **Webapp Testing** | 🔗 Composio | Playwright로 로컬 웹 앱 테스트 자동화 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/webapp-testing) |
| **FFUF Web Fuzzing** | 🌐 @jthack | ffuf 웹 퍼저 연동 — 취약점 분석 (보안 테스트용) | [GitHub](https://github.com/jthack/ffuf_claude_skill) |

---

## 🤝 협업 & 프로젝트 관리

Git 워크플로우, Google Workspace, 위키 등 협업 도구 연동 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **git-pushing** | 🌐 @mhattingpete | Git 작업 자동화 — 커밋, 푸시, 브랜치 관리 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/git-pushing) |
| **google-workspace-skills** | 🌐 @sanjay3290 | Gmail, 캘린더, Chat, Docs, Sheets, Slides, Drive 통합 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills) |
| **outline** | 🌐 @sanjay3290 | Outline 위키에서 문서 검색·읽기·생성·관리 | [GitHub](https://github.com/sanjay3290/ai-skills/tree/main/skills/outline) |
| **review-implementing** | 🌐 @mhattingpete | 코드 구현 계획 평가 및 스펙 정렬 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/review-implementing) |
| **test-fixing** | 🌐 @mhattingpete | 실패한 테스트 감지 및 수정 패치 제안 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/engineering-workflow-plugin/skills/test-fixing) |

---

## 🔒 보안 & 시스템

디지털 포렌식, 파일 보안, 위협 분석 관련 전문 스킬들입니다.

| 스킬 | 제작 | 설명 | 링크 |
|------|------|------|------|
| **computer-forensics** | 🌐 @mhattingpete | 디지털 포렌식 분석 및 조사 기법 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/computer-forensics) |
| **file-deletion** | 🌐 @mhattingpete | 안전한 파일 삭제 및 데이터 삭제 방법 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/file-deletion) |
| **metadata-extraction** | 🌐 @mhattingpete | 파일 메타데이터 추출 및 포렌식 분석 | [GitHub](https://github.com/mhattingpete/claude-skills-marketplace/tree/main/computer-forensics-skills/skills/metadata-extraction) |
| **threat-hunting-with-sigma-rules** | 🌐 @jthack | Sigma 탐지 규칙을 활용한 위협 헌팅 | [GitHub](https://github.com/jthack/threat-hunting-with-sigma-rules-skill) |

---

## 🔗 Composio SaaS 앱 자동화 (78개)

[Composio](https://composio.dev)를 통해 Claude를 **78개 SaaS 앱**에 연결할 수 있습니다. 별도의 API 키 설정 없이 Composio 계정 하나로 모든 앱에 접근 가능합니다.

::: warning Composio 연동 필수
아래 스킬들은 모두 **Composio 계정 연동**이 필요합니다. [Composio 공식 사이트](https://composio.dev)에서 가입 후 Claude에 연결하세요.
:::

### 📌 CRM & 영업

고객 관계 관리 도구를 Claude에서 직접 조작합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Close** | 리드, 연락처, 기회, 활동 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/close-automation) |
| **HubSpot** | 연락처, 거래, 회사, 티켓 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/hubspot-automation) |
| **Pipedrive** | 거래, 연락처, 조직, 활동 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/pipedrive-automation) |
| **Salesforce** | 오브젝트, 레코드, SOQL 쿼리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/salesforce-automation) |
| **Zoho CRM** | 리드, 연락처, 거래, 계정 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/zoho-crm-automation) |

### 📋 프로젝트 관리

태스크 관리 도구를 Claude로 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Asana** | 태스크, 프로젝트, 섹션, 할당 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/asana-automation) |
| **Basecamp** | 할 일 목록, 메시지, 사람, 그룹 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/basecamp-automation) |
| **ClickUp** | 태스크, 리스트, 스페이스, 목표, 시간 추적 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/clickup-automation) |
| **Jira** | 이슈, 프로젝트, 보드, 스프린트, JQL 쿼리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/jira-automation) |
| **Linear** | 이슈, 프로젝트, 사이클, 팀, 워크플로우 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/linear-automation) |
| **Monday.com** | 보드, 아이템, 컬럼, 그룹 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/monday-automation) |
| **Notion** | 페이지, 데이터베이스, 블록, 댓글, 검색 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/notion-automation) |
| **Todoist** | 태스크, 프로젝트, 섹션, 라벨, 필터 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/todoist-automation) |
| **Trello** | 보드, 카드, 리스트, 멤버, 체크리스트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/trello-automation) |
| **Wrike** | 태스크, 폴더, 프로젝트, 댓글, 워크플로우 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/wrike-automation) |

### 💬 커뮤니케이션

메신저와 협업 도구를 Claude로 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Discord** | 메시지, 채널, 서버, 역할, 리액션 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/discord-automation) |
| **Intercom** | 대화, 연락처, 회사, 티켓 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/intercom-automation) |
| **Microsoft Teams** | 메시지, 채널, 팀, 채팅, 미팅 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/microsoft-teams-automation) |
| **Slack** | 메시지, 채널, 검색, 리액션, 스레드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/slack-automation) |
| **Telegram** | 메시지, 채팅, 미디어, 그룹, 봇 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/telegram-automation) |
| **WhatsApp** | 메시지, 미디어, 템플릿, 그룹 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/whatsapp-automation) |

### 📧 이메일

이메일 서비스를 Claude로 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Gmail** | 발신/답장, 검색, 라벨, 임시저장, 첨부파일 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/gmail-automation) |
| **Outlook** | 이메일, 폴더, 연락처, 캘린더 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/outlook-automation) |
| **Postmark** | 트랜잭션 이메일, 템플릿, 서버 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/postmark-automation) |
| **SendGrid** | 이메일, 템플릿, 연락처, 리스트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/sendgrid-automation) |

### 💻 코드 & DevOps

개발 및 운영 도구를 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Bitbucket** | 레포, PR, 브랜치, 이슈, 워크스페이스 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/bitbucket-automation) |
| **CircleCI** | 파이프라인, 워크플로우, 잡, 설정 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/circleci-automation) |
| **Datadog** | 모니터, 대시보드, 메트릭, 인시던트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/datadog-automation) |
| **GitHub** | 이슈, PR, 레포, 브랜치, Actions | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/github-automation) |
| **GitLab** | 이슈, MR, 프로젝트, 파이프라인, 브랜치 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/gitlab-automation) |
| **PagerDuty** | 인시던트, 서비스, 스케줄, 온콜 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/pagerduty-automation) |
| **Render** | 서비스, 배포, 프로젝트 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/render-automation) |
| **Sentry** | 이슈, 이벤트, 프로젝트, 릴리즈, 알림 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/sentry-automation) |
| **Supabase** | SQL 쿼리, 테이블 스키마, 함수 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/supabase-automation) |
| **Vercel** | 배포, 프로젝트, 도메인, 환경변수 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/vercel-automation) |

### 📁 스토리지 & 파일

클라우드 저장소를 Claude로 관리합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Box** | 파일, 폴더, 검색, 공유, 협업 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/box-automation) |
| **Dropbox** | 파일, 폴더, 검색, 공유, 배치 작업 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/dropbox-automation) |
| **Google Drive** | 업로드, 다운로드, 검색, 공유 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/google-drive-automation) |
| **OneDrive** | 파일, 폴더, 검색, 공유, 권한 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/one-drive-automation) |

### 📊 스프레드시트 & 데이터베이스

데이터 도구를 Claude로 조작합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Airtable** | 레코드, 테이블, 베이스, 뷰, 필드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/airtable-automation) |
| **Coda** | 문서, 테이블, 행, 수식, 자동화 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/coda-automation) |
| **Google Sheets** | 셀 읽기/쓰기, 서식, 수식 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/googlesheets-automation) |

### 📅 캘린더 & 일정

일정 관리 도구를 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Cal.com** | 이벤트 유형, 예약, 가용성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/cal-com-automation) |
| **Calendly** | 이벤트, 초대자, 이벤트 유형, 링크 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/calendly-automation) |
| **Google Calendar** | 이벤트, 참석자, 한가/바쁨 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/google-calendar-automation) |
| **Outlook Calendar** | 이벤트, 참석자, 리마인더 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/outlook-calendar-automation) |

### 📱 소셜 미디어

SNS 채널을 Claude로 관리합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Instagram** | 게시물, 스토리, 댓글, 미디어, 인사이트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/instagram-automation) |
| **LinkedIn** | 게시물, 프로필, 회사, 이미지 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/linkedin-automation) |
| **Reddit** | 게시물, 댓글, 서브레딧, 투표 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/reddit-automation) |
| **TikTok** | 동영상 업로드, 쿼리, 크리에이터 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/tiktok-automation) |
| **Twitter/X** | 트윗, 검색, 사용자, 리스트, 인게이지먼트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/twitter-automation) |
| **YouTube** | 동영상, 채널, 재생목록, 댓글 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/youtube-automation) |

### 📣 마케팅 & 이메일 마케팅

마케팅 자동화 플랫폼을 연동합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **ActiveCampaign** | 연락처, 거래, 캠페인, 리스트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/activecampaign-automation) |
| **Brevo** | 연락처, 이메일 캠페인, 트랜잭션 이메일 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/brevo-automation) |
| **ConvertKit** | 구독자, 태그, 시퀀스 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/convertkit-automation) |
| **Klaviyo** | 프로필, 리스트, 세그먼트, 캠페인, 이벤트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/klaviyo-automation) |
| **Mailchimp** | 오디언스, 캠페인, 템플릿, 세그먼트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/mailchimp-automation) |

### 🎧 고객 지원 & 헬프데스크

고객 지원 도구를 자동화합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Freshdesk** | 티켓, 연락처, 에이전트, 그룹 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/freshdesk-automation) |
| **Freshservice** | 티켓, 자산, 변경, 문제 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/freshservice-automation) |
| **Help Scout** | 대화, 고객, 메일박스, 태그 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/helpdesk-automation) |
| **Zendesk** | 티켓, 사용자, 조직, 검색 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/zendesk-automation) |

### 🛒 이커머스 & 결제

쇼핑몰과 결제 서비스를 연동합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Shopify** | 상품, 주문, 고객, 재고 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/shopify-automation) |
| **Square** | 결제, 고객, 카탈로그, 주문 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/square-automation) |
| **Stripe** | 결제, 고객, 상품, 구독 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/stripe-automation) |

### 🎨 디자인 & 협업 도구

디자인 및 문서 협업 도구를 연동합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Canva** | 디자인, 템플릿, 에셋, 폴더, 브랜드 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/canva-automation) |
| **Confluence** | 페이지, 스페이스, 검색, CQL, 라벨 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/confluence-automation) |
| **DocuSign** | 봉투, 템플릿, 서명, 문서 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/docusign-automation) |
| **Figma** | 파일, 컴포넌트, 댓글, 프로젝트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/figma-automation) |
| **Miro** | 보드, 스티키 노트, 도형, 커넥터 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/miro-automation) |
| **Webflow** | CMS 컬렉션, 아이템, 사이트, 퍼블리싱 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/webflow-automation) |

### 📈 분석 & 데이터

애널리틱스 도구를 연동합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Amplitude** | 이벤트, 코호트, 사용자 속성 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/amplitude-automation) |
| **Google Analytics** | 보고서, 디멘션, 메트릭 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/google-analytics-automation) |
| **Mixpanel** | 이벤트, 퍼널, 코호트, 주석 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/mixpanel-automation) |
| **PostHog** | 이벤트, 사용자, 피처 플래그, 인사이트 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/posthog-automation) |
| **Segment** | 소스, 데스티네이션, 트래킹, 웨어하우스 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/segment-automation) |

### 👥 HR & 인사

인사 관리 도구를 연동합니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **BambooHR** | 직원, 휴가, 보고서, 디렉토리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/bamboohr-automation) |

### ⚡ 자동화 & 미팅

기타 자동화 플랫폼과 미팅 도구입니다.

| 스킬 | 주요 기능 | 링크 |
|------|----------|------|
| **Make (Integromat)** | 시나리오, 연결, 실행 관리 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/make-automation) |
| **Zoom** | 미팅, 녹화, 참가자, 웨비나 | [GitHub](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/zoom-automation) |

---

## 🌟 사무직 추천 스킬 TOP 10

일반 사무직 사용자에게 **가장 먼저 설치**를 추천하는 스킬입니다.

| 순위 | 스킬 | 이유 |
|------|------|------|
| 1 | **docx** | Word 문서 자동 생성·편집 — 보고서, 기획서 작업 필수 |
| 2 | **xlsx** | Excel 데이터 분석·차트 생성 — 스프레드시트 업무 혁신 |
| 3 | **pdf** | PDF 내용 추출·요약 — 계약서, 매뉴얼 읽기에 최적 |
| 4 | **pptx** | PPT 초안 자동 생성 — 발표 준비 시간 대폭 단축 |
| 5 | **CSV Data Summarizer** | CSV 데이터 분석·시각화 — 데이터 리포트 자동화 |
| 6 | **Google Workspace** | Gmail, 캘린더, Drive 통합 — 구글 워크스페이스 사용자 필수 |
| 7 | **Slack / Teams** | 사내 메신저 자동화 — 알림, 메시지 관리 |
| 8 | **Notion / Jira** | 프로젝트 관리 자동화 — 태스크 생성·업데이트 |
| 9 | **Internal Comms** | 사내 공지·뉴스레터 작성 — 커뮤니케이션 효율화 |
| 10 | **Meeting Insights Analyzer** | 회의록 분석 — 액션 아이템 자동 추출 |

---

## 주요 스킬 제작자 (커뮤니티)

| 제작자 | 대표 스킬 | 특징 |
|--------|----------|------|
| [**@obra** (superpowers)](https://github.com/obra/superpowers) | brainstorming, TDD, git-worktrees, root-cause-tracing | 개발 워크플로우 최적화 시리즈 |
| [**@sanjay3290** (ai-skills)](https://github.com/sanjay3290/ai-skills) | Google Workspace, postgres, jules, imagen, deep-research | 폭넓은 외부 서비스 연동 |
| [**@michalparkola** (tapestry)](https://github.com/michalparkola/tapestry-skills-for-claude-code) | tapestry, article-extractor, youtube-transcript, ship-learn-next | 지식 관리 & 콘텐츠 도구 |
| [**@mhattingpete**](https://github.com/mhattingpete/claude-skills-marketplace) | git-pushing, review-implementing, test-fixing, computer-forensics | 엔지니어링 워크플로우 & 보안 |
| [**NeoLabHQ**](https://github.com/NeoLabHQ/context-engineering-kit) | software-architecture, kaizen, prompt-engineering, subagent-driven-development | 아키텍처 & 프로세스 개선 |

---

## 더 알아보기

- [스킬 만들기 가이드](/guide/skills) — 나만의 커스텀 스킬 만드는 방법
- [MCP 연동 활용법](/guide/mcp) — Model Context Protocol로 외부 도구 연결
- [플러그인 디렉토리](/guide/plugins) — 공식 플러그인 목록
- [워크플로우 레시피](/guide/workflows) — 스킬 + MCP를 조합한 업무 자동화
- [awesome-claude-skills 원본 저장소](https://github.com/ComposioHQ/awesome-claude-skills) — 최신 스킬 확인 & 기여하기
