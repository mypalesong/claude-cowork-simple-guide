# Cowork 업데이트 타임라인

> Claude Cowork의 출시부터 현재까지, 주요 업데이트를 한눈에 살펴보세요.

<style>
.timeline {
  position: relative;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #E87040, #f4a77a, #E87040);
  transform: translateX(-50%);
  border-radius: 2px;
}

.tl-item {
  position: relative;
  width: 50%;
  padding: 0.5rem 2.5rem 2rem;
  box-sizing: border-box;
}

.tl-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.tl-item:nth-child(even) {
  left: 50%;
  text-align: left;
}

.tl-dot {
  position: absolute;
  top: 1.2rem;
  width: 16px;
  height: 16px;
  background: #E87040;
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #E87040;
  z-index: 1;
}

.tl-item:nth-child(odd) .tl-dot {
  right: -8px;
}

.tl-item:nth-child(even) .tl-dot {
  left: -8px;
}

.tl-badge {
  display: inline-block;
  background: #E87040;
  color: #fff;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 0.6rem;
  letter-spacing: 0.02em;
}

.tl-card {
  background: var(--vp-c-bg-soft, #f9f9f9);
  border: 1px solid var(--vp-c-divider, #e2e2e3);
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  text-align: left;
  transition: transform 0.2s, box-shadow 0.2s;
}

.tl-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232,112,64,0.13);
}

.tl-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
  border-top: none;
  padding-top: 0;
}

.tl-card ul {
  margin: 0;
  padding-left: 1.2rem;
  list-style: disc;
}

.tl-card ul li {
  margin: 0.35rem 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-2, #555);
  line-height: 1.55;
}

.tl-card .tl-highlight {
  color: #E87040;
  font-weight: 600;
}

.tl-card a {
  color: #E87040;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  white-space: nowrap;
}

.tl-card a:hover {
  text-decoration: underline;
}

.tl-future {
  border-left: 3px dashed #E87040;
}

/* Responsive: stack vertically on small screens */
@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .tl-item {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding-left: 50px;
    padding-right: 1rem;
  }

  .tl-item:nth-child(odd) .tl-dot,
  .tl-item:nth-child(even) .tl-dot {
    left: 12px;
    right: auto;
  }
}
</style>

<div class="timeline">

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 3월 (중순)</span>
    <div class="tl-card">
      <h3>📱 Cowork Dispatch & 1M 컨텍스트 GA</h3>
      <ul>
        <li><span class="tl-highlight">Cowork Dispatch 출시</span> (3/17) — 모바일에서 데스크톱 Claude에 작업 전송. QR 코드로 페어링, 외출 중에도 업무 지시 가능 <a href="https://www.macstories.net/stories/hands-on-with-claude-dispatch-for-cowork/" target="_blank">→ MacStories 리뷰</a></li>
        <li><span class="tl-highlight">1M 토큰 컨텍스트 윈도우 GA</span> (3/13) — Opus 4.6 & Sonnet 4.6 모두 100만 토큰 정식 지원. Max/Team/Enterprise 자동 적용 <a href="https://thenewstack.io/claude-million-token-pricing/" target="_blank">→ 가격 정책</a></li>
        <li><span class="tl-highlight">$100M Claude 파트너 네트워크</span> (3/12) — Accenture, Deloitte, Cognizant, Infosys와 파트너십. Claude Certified Architect 인증 프로그램 <a href="https://www.anthropic.com/news/claude-partner-network" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">The Anthropic Institute 설립</span> (3/11) — AI의 일자리·보안·사회 영향을 연구하는 독립 연구소. Jack Clark이 이끄는 공공이익 부문 <a href="https://www.anthropic.com/news/the-anthropic-institute" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">Microsoft Copilot Cowork</span> (3/10) — Microsoft가 Claude 기반 Copilot Cowork 발표. M365 전반에 걸친 AI 에이전트 <a href="https://winbuzzer.com/2026/03/10/microsoft-copilot-cowork-anthropic-claude-m365-agent-xcxwbn/" target="_blank">→ WinBuzzer 기사</a></li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 3월 (초)</span>
    <div class="tl-card">
      <h3>🎙️ Claude Code 음성 모드 & 신기능</h3>
      <ul>
        <li><span class="tl-highlight">음성 모드(Voice Mode)</span> (3/3~) — <code>/voice</code>로 활성화, 스페이스바 Push-to-Talk. 한국어 포함 20개 언어 STT 지원, 점진적 롤아웃 중 <a href="https://techcrunch.com/2026/03/03/claude-code-rolls-out-a-voice-mode-capability/" target="_blank">→ TechCrunch</a></li>
        <li><span class="tl-highlight">예약된 작업(Scheduled Tasks)</span> — Cowork에서 반복 작업을 자연어로 설정하면 자동 실행 (일일 Slack 요약, 주간 보고서 등) <a href="https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork" target="_blank">→ 자세히 알아보기</a></li>
        <li><span class="tl-highlight">인라인 시각화</span> — 대화 중 차트·다이어그램 직접 생성, 이미지 복사·다운로드·아티팩트 저장 가능 <a href="https://claude.com/blog/claude-builds-visuals" target="_blank">→ 자세히 알아보기</a></li>
        <li><span class="tl-highlight">코드 리뷰(Code Review)</span> — PR당 다중 에이전트 협업으로 심층 버그 탐지 (리서치 프리뷰) <a href="https://claude.com/blog/code-review" target="_blank">→ 자세히 알아보기</a></li>
        <li><span class="tl-highlight">/loop 명령어</span> — 프롬프트나 슬래시 명령을 주기적으로 반복 실행 (예: <code>/loop 5m 배포 상태 확인</code>) <a href="https://pasqualepillitteri.it/en/news/381/claude-code-march-2026-updates" target="_blank">→ 상세 정보</a></li>
        <li><span class="tl-highlight">MCP Elicitation</span> — MCP 서버가 실행 중 사용자에게 구조화된 입력을 요청 가능 (인터랙티브 폼, URL)</li>
        <li>기타: <code>/color</code> 프롬프트 바 색상 설정, <code>/rename</code> 세션 이름 지정, 기본 출력 64k→128k 토큰 확대</li>
        <li>배포 옵션 확장: <a href="https://www.anthropic.com/news/claude-in-microsoft-foundry" target="_blank">Microsoft Foundry</a>, <a href="https://claude.com/partners/amazon-bedrock" target="_blank">Amazon Bedrock</a>, Google Cloud Vertex AI</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 2월 (후반)</span>
    <div class="tl-card">
      <h3>🧠 Sonnet 4.6 & 엔터프라이즈 확장</h3>
      <ul>
        <li><span class="tl-highlight">Claude Sonnet 4.6 출시</span> (2/17) — 코딩·컴퓨터 사용·장문맥 추론·에이전트 계획 전면 업그레이드. SWE-bench 79.6%, 1M 컨텍스트(베타). Free/Pro 기본 모델로 설정 <a href="https://www.anthropic.com/news/claude-sonnet-4-6" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">컨텍스트 압축(Context Compaction)</span> — 이전 대화를 자동 요약하여 사실상 무제한 대화 가능</li>
        <li><span class="tl-highlight">오픈소스 개발자 무료 Max</span> (2/27) — 오픈소스 메인테이너에게 6개월 무료 Max 플랜 제공 <a href="https://simonwillison.net/2026/Feb/27/claude-max-oss-six-months/" target="_blank">→ Simon Willison 소개</a></li>
        <li><span class="tl-highlight">Vercept 인수</span> (2/25) — AI 인식·상호작용 문제 전문 스타트업 인수</li>
        <li><span class="tl-highlight">책임 있는 스케일링 정책 v3.0</span> (2/24) — Anthropic의 안전 프레임워크 3번째 버전 공개</li>
        <li><span class="tl-highlight">Cowork 엔터프라이즈 확장</span> (2/24) — Google Drive, Gmail, DocuSign, FactSet "Deep Connectors" 출시 <a href="https://www.cnbc.com/2026/02/24/anthropic-claude-cowork-office-worker.html" target="_blank">→ CNBC 기사</a></li>
        <li><span class="tl-highlight">Claude Code 보안 기능</span> (2/20) — AI 기반 소프트웨어 취약점 탐지</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 2월 (전반)</span>
    <div class="tl-card">
      <h3>💻 Opus 4.6 & Cowork Windows</h3>
      <ul>
        <li><span class="tl-highlight">Cowork Windows 버전 출시</span> (2/10) — macOS와 완전한 기능 동등성. 전 세계 데스크톱 사용자 70%에게 확대 <a href="https://venturebeat.com/technology/anthropics-claude-cowork-finally-lands-on-windows-and-it-wants-to-automate" target="_blank">→ VentureBeat 기사</a></li>
        <li><span class="tl-highlight">Claude Opus 4.6 출시</span> (2/5) — 최강 플래그십 모델. 1M 토큰 컨텍스트, 128k 출력, ARC AGI 2 점수 68.8% (4.5 대비 83%↑), 14.5시간 연속 작업 가능 <a href="https://www.anthropic.com/news/claude-opus-4-6" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">Claude on GitHub</span> (2/4) — GitHub에서 Claude를 코딩 에이전트로 사용. 이슈, PR, VS Code에서 에이전트 세션 시작 <a href="https://github.blog/changelog/2026-02-04-claude-and-codex-are-now-available-in-public-preview-on-github/" target="_blank">→ GitHub 블로그</a></li>
        <li><span class="tl-highlight">Claude Code on the Web</span> — 웹 기반 Claude Code (베타). GitHub 레포 연결 후 클라우드 샌드박스에서 구현 <a href="https://www.anthropic.com/news/claude-code-on-the-web" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">Claude Code 샌드박싱</span> — OS 레벨 파일시스템·네트워크 격리. 권한 프롬프트 84% 감소, 프롬프트 인젝션 공격 방지 <a href="https://www.anthropic.com/engineering/claude-code-sandboxing" target="_blank">→ 기술 블로그</a></li>
        <li><span class="tl-highlight">Team & Enterprise에 Claude Code 포함</span> — 가장 요청 많았던 기능. Compliance API도 함께 출시 <a href="https://www.anthropic.com/news/claude-code-on-team-and-enterprise" target="_blank">→ 공식 발표</a></li>
        <li>공식 플러그인 <span class="tl-highlight">11종</span> 공개, Excel·PowerPoint 직접 연동 지원</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 1월</span>
    <div class="tl-card">
      <h3>🎉 Claude Cowork 탄생 & Code 2.1</h3>
      <ul>
        <li><span class="tl-highlight">Claude Cowork 리서치 프리뷰 출시</span> (1/12) — 비개발자를 위한 AI 에이전트. 파일 시스템 접근, 멀티스텝 작업 실행 <a href="https://claude.com/blog/cowork-research-preview" target="_blank">→ 공식 블로그</a></li>
        <li>Max 구독자 한정 공개 → Pro 구독자 확대 (1/16)</li>
        <li><span class="tl-highlight">Claude Code 2.1.0 대규모 업데이트</span> (1/7) — 1,096개 커밋 반영. 코딩 도구에서 프로덕션급 인프라로 진화 <a href="https://medium.com/@cognidownunder/claude-code-2-1-0-just-changed-everything-and-most-developers-havent-noticed-yet-8862a3c961ed" target="_blank">→ 상세 분석</a></li>
        <li>Skills 대규모 개편 — 포크된 서브에이전트 컨텍스트, 핫 리로드, 커스텀 에이전트, <code>/슬래시</code> 명령어로 스킬 실행</li>
        <li><span class="tl-highlight">/teleport</span> — 터미널 세션을 claude.ai/code로 즉시 전환</li>
        <li>와일드카드 도구 권한 (<code>Bash(*-h*)</code>), Shift+Enter 줄바꿈, 언어 설정 기능</li>
        <li><span class="tl-highlight">새로운 Claude 헌법</span> (1/22) — Claude의 가치관과 행동 프레임워크를 정의한 상세 문서 <a href="https://www.anthropic.com/news/claude-new-constitution" target="_blank">→ 공식 발표</a></li>
        <li><span class="tl-highlight">NASA 화성 탐사 로버 AI 주행</span> (1/30 발표) — Claude가 Perseverance 로버의 경로를 AI로 계획. 경로 계획 시간 50% 단축 <a href="https://www.jpl.nasa.gov/news/nasas-perseverance-rover-completes-first-ai-planned-drive-on-mars/" target="_blank">→ NASA JPL</a></li>
        <li>Anthropic, $350B 기업가치로 $10B 자금 조달 추진</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2025년 12월</span>
    <div class="tl-card">
      <h3>🌐 MCP 오픈소스 기증</h3>
      <ul>
        <li><span class="tl-highlight">MCP를 Linux Foundation에 기증</span> (12/9) — Anthropic, Block, OpenAI가 공동 설립한 Agentic AI Foundation(AAIF)으로 이관 <a href="https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation" target="_blank">→ 공식 발표</a></li>
        <li>MCP 출시 1년 만에 월간 SDK 다운로드 <span class="tl-highlight">9,700만 회</span>, 활성 서버 10,000개 돌파</li>
        <li>Google, Microsoft, AWS, Cloudflare, Bloomberg 등이 AAIF 지원</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2025년</span>
    <div class="tl-card">
      <h3>🔧 사전 역사 — 기반 기술 구축</h3>
      <ul>
        <li><span class="tl-highlight">Claude Code 출시</span> — 개발자용 AI 코딩 도구로 시작</li>
        <li><span class="tl-highlight">Claude 3.5 Sonnet / Claude 4 시리즈 출시</span> — 성능과 속도의 획기적 균형</li>
        <li><span class="tl-highlight">MCP (Model Context Protocol) 공개</span> — 외부 도구 연동의 표준</li>
        <li><span class="tl-highlight">Claude Desktop 앱 출시</span> — 데스크톱 환경에서의 AI 협업 시작</li>
        <li><span class="tl-highlight">Claude Agent SDK</span> — Claude Code SDK에서 범용 에이전트 런타임으로 확장 <a href="https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk" target="_blank">→ 기술 블로그</a></li>
      </ul>
    </div>
  </div>

</div>

---

## 스킬 마켓플레이스 생태계 {#skills-marketplace}

> 2026년 1월부터 Claude Skills 생태계가 폭발적으로 성장하고 있습니다.

<div style="max-width: 700px; margin: 1.5rem auto;">
  <div class="tl-card" style="margin-bottom: 1rem;">
    <h3>🏪 주요 스킬 마켓플레이스</h3>
    <ul>
      <li><span class="tl-highlight">SkillsMP</span> — 50만 개 이상의 에이전트 스킬, Claude Code·OpenAI Codex 등 호환 <a href="https://skillsmp.com" target="_blank">→ skillsmp.com</a></li>
      <li><span class="tl-highlight">SkillHub</span> — 7,000+ AI 평가 스킬, 5개 차원으로 품질 평가 <a href="https://www.skillhub.club/" target="_blank">→ skillhub.club</a></li>
      <li><span class="tl-highlight">Claude Skills Market</span> — 전용 마켓플레이스 <a href="https://www.claudeskillsmarket.com/" target="_blank">→ claudeskillsmarket.com</a></li>
      <li><span class="tl-highlight">awesome-claude-skills</span> — 커뮤니티 큐레이션 147개+ 스킬 <a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank">→ GitHub</a> | <a href="/claude-cowork-simple-guide/guide/awesome-skills.html">→ 가이드 내 정리</a></li>
    </ul>
  </div>
</div>

---

## 구독 플랜 현황 {#pricing}

> 2026년 3월 기준 Claude 구독 플랜 비교

| 플랜 | 가격 | 주요 특징 |
|------|------|----------|
| **Free** | 무료 | Sonnet 4.6 기본, 제한된 사용량 |
| **Pro** | $20/월 | Opus 4.6 접근, 1M 컨텍스트 (opt-in) |
| **Max 5x** | $100/월 | Pro 5배 사용량, Cowork + Claude Code 포함 |
| **Max 20x** | $200/월 | Pro 20배 사용량, 최우선 접근 |
| **Team** | 시트당 과금 | Claude Code 포함, Compliance API, 관리자 대시보드 |
| **Enterprise** | 연간 계약 | 전용 인프라, SSO, 감사 로그, SLA |

<a href="https://claude.com/pricing/max" target="_blank" style="color: #E87040; font-weight: 600;">→ 공식 가격 페이지</a> | <a href="https://support.claude.com/en/articles/11049741-what-is-the-max-plan" target="_blank" style="color: #E87040; font-weight: 600;">→ Max 플랜 상세</a>

---

## 다가올 업데이트 {#upcoming}

> 아래 항목은 커뮤니티에서 예상하는 기능들이며, 공식 발표와 다를 수 있습니다.

<div style="max-width: 700px; margin: 1.5rem auto;">
  <div class="tl-card tl-future" style="margin-bottom: 1rem;">
    <h3>🔮 Claude 5 (루머)</h3>
    <ul>
      <li>코드명 "Fennec" (Sonnet 5)이 Google Vertex AI 로그에 포착. 아직 공식 발표 없음 <a href="https://claude5.com/news/claude-5-release-prediction" target="_blank">→ 루머 추적</a></li>
    </ul>
  </div>
  <div class="tl-card tl-future" style="margin-bottom: 1rem;">
    <h3>🤝 실시간 협업 기능 강화</h3>
    <ul>
      <li>팀원과 함께 하나의 Cowork 세션에서 동시에 작업하는 실시간 공동 편집</li>
    </ul>
  </div>
  <div class="tl-card tl-future" style="margin-bottom: 1rem;">
    <h3>🔗 더 많은 서드파티 연동</h3>
    <ul>
      <li>Slack, Notion, Jira, Confluence 등 업무 도구와의 심층 통합</li>
    </ul>
  </div>
  <div class="tl-card tl-future" style="margin-bottom: 1rem;">
    <h3>🇰🇷 한국어 최적화 개선</h3>
    <ul>
      <li>한국어 프롬프트 이해도 향상 및 한국 비즈니스 문서 서식 지원 강화</li>
    </ul>
  </div>
</div>

::: tip 최신 소식 받기
Anthropic의 공식 채널에서 업데이트를 확인하세요:
- [Anthropic 공식 블로그](https://www.anthropic.com/news)
- [Claude 릴리즈 노트](https://support.claude.com/en/articles/12138966-release-notes)
- [Claude Code 체인지로그](https://code.claude.com/docs/en/changelog)
- [Claude API 릴리즈 노트](https://platform.claude.com/docs/en/release-notes/overview)
:::
