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
    <span class="tl-badge">2026년 3월</span>
    <div class="tl-card">
      <h3>🚀 관리 기능 강화 & Office 통합 확장</h3>
      <ul>
        <li><span class="tl-highlight">최종 사용자 초대 기능</span> — 관리자 개입 없이 팀원이 직접 동료 초대 가능 (SSO 조직 제외, 기본 비활성화)</li>
        <li><span class="tl-highlight">코드 리뷰(Code Review)</span> — PR당 다중 에이전트 협업으로 심층 버그 탐지 (리서치 프리뷰, 관리자 설정 필요)</li>
        <li><span class="tl-highlight">Excel & PowerPoint용 Claude 업데이트</span> — 두 앱 간 하나의 대화로 작업, 셀 읽기·수식 작성·슬라이드 편집 시 맥락 유지, Skills 기능 지원</li>
        <li><span class="tl-highlight">예약된 작업(Scheduled Tasks)</span> — 일일 Slack 요약, 주간 보고서 등 반복 작업을 자연어로 설정하면 자동 실행</li>
        <li><span class="tl-highlight">인라인 시각화</span> — 대화 중 차트·다이어그램 직접 생성, 이미지 복사·다운로드·아티팩트 저장 가능</li>
        <li>신규 배포 옵션: Microsoft Foundry, Amazon Bedrock, Google Cloud Vertex AI</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 2월</span>
    <div class="tl-card">
      <h3>💻 Windows & 플러그인 생태계</h3>
      <ul>
        <li><span class="tl-highlight">Cowork Windows 버전 출시</span> (2/10) — PC 사용자에게 본격 확대</li>
        <li>공식 플러그인 <span class="tl-highlight">11종</span> 공개</li>
        <li>Excel, PowerPoint <span class="tl-highlight">직접 연동</span> 지원</li>
        <li>Google Drive, Gmail, DocuSign <span class="tl-highlight">커넥터 추가</span></li>
        <li>Team & Enterprise <span class="tl-highlight">플랜 지원</span> 시작</li>
      </ul>
    </div>
  </div>

  <div class="tl-item">
    <div class="tl-dot"></div>
    <span class="tl-badge">2026년 1월</span>
    <div class="tl-card">
      <h3>🎉 Claude Cowork 탄생</h3>
      <ul>
        <li><span class="tl-highlight">Claude Cowork 리서치 프리뷰 출시</span> (1/12)</li>
        <li>Max 구독자 한정 공개로 첫 선</li>
        <li>Pro 구독자 확대 (1/16)</li>
        <li>파일 시스템 접근, <span class="tl-highlight">멀티스텝 작업 실행</span> 기능 탑재</li>
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
        <li><span class="tl-highlight">Claude 3.5 Sonnet 출시</span> — 성능과 속도의 획기적 균형</li>
        <li><span class="tl-highlight">MCP (Model Context Protocol) 공개</span> — 외부 도구 연동의 표준</li>
        <li><span class="tl-highlight">Claude Desktop 앱 출시</span> — 데스크톱 환경에서의 AI 협업 시작</li>
      </ul>
    </div>
  </div>

</div>

---

## 다가올 업데이트 {#upcoming}

> 아래 항목은 커뮤니티에서 예상하는 기능들이며, 공식 발표와 다를 수 있습니다.

<div style="max-width: 700px; margin: 1.5rem auto;">
  <div class="tl-card tl-future" style="margin-bottom: 1rem;">
    <h3>📱 모바일 앱 지원 (예정)</h3>
    <ul>
      <li>iOS / Android 네이티브 앱을 통한 이동 중 Cowork 업무 처리</li>
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
- [Claude 릴리즈 노트](https://docs.anthropic.com/en/docs/about-claude/models)
:::
