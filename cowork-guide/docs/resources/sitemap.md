# 가이드 전체 구조

> 이 가이드의 전체 구조를 한눈에 파악하세요. 관심 있는 페이지를 클릭하면 바로 이동합니다.

<style>
/* ── Reset & Container ── */
.sitemap-wrap {
  --clr-orange: #e8714a;
  --clr-orange-bg: #fff3ee;
  --clr-branch1: #dbeafe;
  --clr-branch1-border: #93c5fd;
  --clr-branch2: #dcfce7;
  --clr-branch2-border: #86efac;
  --clr-branch3: #fce7f3;
  --clr-branch3-border: #f9a8d4;
  --clr-branch4: #fef9c3;
  --clr-branch4-border: #fde047;
  --clr-branch5: #e0e7ff;
  --clr-branch5-border: #a5b4fc;
  --clr-branch6: #f3e8ff;
  --clr-branch6-border: #c4b5fd;
  margin: 2rem 0;
  font-family: inherit;
}

.dark .sitemap-wrap {
  --clr-orange-bg: #3d2418;
  --clr-branch1: #1e2a3a;
  --clr-branch1-border: #3b6fad;
  --clr-branch2: #1a2e1f;
  --clr-branch2-border: #4ead6a;
  --clr-branch3: #2e1a27;
  --clr-branch3-border: #c47aa0;
  --clr-branch4: #2e2a14;
  --clr-branch4-border: #c4a82e;
  --clr-branch5: #1e2040;
  --clr-branch5-border: #7b8ad4;
  --clr-branch6: #261e36;
  --clr-branch6-border: #9b8bc4;
}

/* ── Center node ── */
.sitemap-center {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}

.sitemap-center-node {
  background: var(--clr-orange);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 4px 20px rgba(232,113,74,0.35);
  text-align: center;
  animation: sitemap-pop 0.5s ease-out both;
}

/* ── Trunk line from center ── */
.sitemap-trunk {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}

.sitemap-trunk::after {
  content: '';
  display: block;
  width: 3px;
  height: 32px;
  background: var(--clr-orange);
  border-radius: 2px;
}

/* ── Branch grid ── */
.sitemap-branches {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  position: relative;
}

/* horizontal connector bar across top of branches */
.sitemap-branches::before {
  content: '';
  position: absolute;
  top: 0;
  left: calc(100% / 6);
  right: calc(100% / 6);
  height: 3px;
  background: var(--clr-orange);
  border-radius: 2px;
}

/* ── Each branch ── */
.sitemap-branch {
  position: relative;
  padding-top: 28px;
  animation: sitemap-fade-up 0.6s ease-out both;
}

.sitemap-branch:nth-child(1) { animation-delay: 0.1s; }
.sitemap-branch:nth-child(2) { animation-delay: 0.2s; }
.sitemap-branch:nth-child(3) { animation-delay: 0.3s; }
.sitemap-branch:nth-child(4) { animation-delay: 0.4s; }
.sitemap-branch:nth-child(5) { animation-delay: 0.5s; }
.sitemap-branch:nth-child(6) { animation-delay: 0.6s; }

/* vertical stem from horizontal bar into branch header */
.sitemap-branch::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 28px;
  border-radius: 2px;
}

/* branch colors */
.sitemap-branch[data-branch="1"]::before { background: var(--clr-branch1-border); }
.sitemap-branch[data-branch="2"]::before { background: var(--clr-branch2-border); }
.sitemap-branch[data-branch="3"]::before { background: var(--clr-branch3-border); }
.sitemap-branch[data-branch="4"]::before { background: var(--clr-branch4-border); }
.sitemap-branch[data-branch="5"]::before { background: var(--clr-branch5-border); }
.sitemap-branch[data-branch="6"]::before { background: var(--clr-branch6-border); }

/* ── Branch header ── */
.sitemap-branch-title {
  text-align: center;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-bottom: 0.65rem;
}

.sitemap-branch[data-branch="1"] .sitemap-branch-title { background: var(--clr-branch1); color: var(--clr-branch1-border); border: 2px solid var(--clr-branch1-border); }
.sitemap-branch[data-branch="2"] .sitemap-branch-title { background: var(--clr-branch2); color: var(--clr-branch2-border); border: 2px solid var(--clr-branch2-border); }
.sitemap-branch[data-branch="3"] .sitemap-branch-title { background: var(--clr-branch3); color: var(--clr-branch3-border); border: 2px solid var(--clr-branch3-border); }
.sitemap-branch[data-branch="4"] .sitemap-branch-title { background: var(--clr-branch4); color: var(--clr-branch4-border); border: 2px solid var(--clr-branch4-border); }
.sitemap-branch[data-branch="5"] .sitemap-branch-title { background: var(--clr-branch5); color: var(--clr-branch5-border); border: 2px solid var(--clr-branch5-border); }
.sitemap-branch[data-branch="6"] .sitemap-branch-title { background: var(--clr-branch6); color: var(--clr-branch6-border); border: 2px solid var(--clr-branch6-border); }

/* ── Node list ── */
.sitemap-nodes {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-left: 0;
  list-style: none;
}

/* ── Individual node card ── */
.sitemap-node {
  position: relative;
  border-radius: 0.6rem;
  transition: all 0.2s ease;
}

.sitemap-node a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.6rem;
  text-decoration: none !important;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--vp-c-text-1) !important;
  border: 1.5px solid transparent;
  transition: all 0.2s ease;
}

.sitemap-node a .sitemap-icon {
  flex-shrink: 0;
  width: 20px;
  text-align: center;
}

/* branch-specific hover styles */
.sitemap-branch[data-branch="1"] .sitemap-node a:hover { background: var(--clr-branch1); border-color: var(--clr-branch1-border); transform: translateX(4px); }
.sitemap-branch[data-branch="2"] .sitemap-node a:hover { background: var(--clr-branch2); border-color: var(--clr-branch2-border); transform: translateX(4px); }
.sitemap-branch[data-branch="3"] .sitemap-node a:hover { background: var(--clr-branch3); border-color: var(--clr-branch3-border); transform: translateX(4px); }
.sitemap-branch[data-branch="4"] .sitemap-node a:hover { background: var(--clr-branch4); border-color: var(--clr-branch4-border); transform: translateX(4px); }
.sitemap-branch[data-branch="5"] .sitemap-node a:hover { background: var(--clr-branch5); border-color: var(--clr-branch5-border); transform: translateX(4px); }
.sitemap-branch[data-branch="6"] .sitemap-node a:hover { background: var(--clr-branch6); border-color: var(--clr-branch6-border); transform: translateX(4px); }

/* ── Tooltip ── */
.sitemap-node a[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 0.4rem 0.7rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  white-space: nowrap;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  pointer-events: none;
  animation: sitemap-tooltip-in 0.15s ease-out;
}

/* ── Animations ── */
@keyframes sitemap-pop {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes sitemap-fade-up {
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes sitemap-tooltip-in {
  0% { opacity: 0; transform: translateX(-50%) translateY(4px); }
  100% { opacity: 1; transform: translateX(-50%) translateY(0); }
}

/* ── Responsive: mobile vertical list ── */
@media (max-width: 768px) {
  .sitemap-branches {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .sitemap-branches::before {
    display: none;
  }

  .sitemap-branch {
    padding-top: 0;
  }

  .sitemap-branch::before {
    display: none;
  }

  .sitemap-trunk::after {
    height: 16px;
  }

  .sitemap-center-node {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .sitemap-branches {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<div class="sitemap-wrap">

<!-- Center Hub -->
<div class="sitemap-center">
  <div class="sitemap-center-node">Claude Cowork Guide</div>
</div>
<div class="sitemap-trunk"></div>

<!-- Branches -->
<div class="sitemap-branches">

<!-- Branch 1: 시작하기 -->
<div class="sitemap-branch" data-branch="1">
  <div class="sitemap-branch-title">시작하기</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/guide/overview" data-tooltip="가이드 전체 소개 및 로드맵"><span class="sitemap-icon">📋</span> Overview</a></li>
    <li class="sitemap-node"><a href="/guide/what-is-cowork" data-tooltip="Cowork 기능과 핵심 개념 소개"><span class="sitemap-icon">💡</span> Cowork가 뭔가요?</a></li>
    <li class="sitemap-node"><a href="/guide/first-steps" data-tooltip="설치부터 첫 설정까지 단계별 안내"><span class="sitemap-icon">🚀</span> 처음 시작하기</a></li>
    <li class="sitemap-node"><a href="/guide/first-chat" data-tooltip="Claude와 첫 대화를 나눠보세요"><span class="sitemap-icon">💬</span> 첫 번째 대화</a></li>
    <li class="sitemap-node"><a href="/guide/checklist" data-tooltip="시작 전 확인해야 할 체크리스트"><span class="sitemap-icon">✅</span> 온보딩 체크리스트</a></li>
    <li class="sitemap-node"><a href="/guide/cowork-vs-code" data-tooltip="Cowork와 Code 차이점 비교"><span class="sitemap-icon">⚖️</span> Cowork vs Code</a></li>
  </ul>
</div>

<!-- Branch 2: 활용법 -->
<div class="sitemap-branch" data-branch="2">
  <div class="sitemap-branch-title">활용법</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/guide/writing" data-tooltip="보고서·이메일·기획서 작성 팁"><span class="sitemap-icon">📝</span> 문서 작성</a></li>
    <li class="sitemap-node"><a href="/guide/data" data-tooltip="데이터 정리·분석·시각화 가이드"><span class="sitemap-icon">📊</span> 데이터 분석</a></li>
    <li class="sitemap-node"><a href="/guide/meeting" data-tooltip="회의록 정리·브레인스토밍 활용"><span class="sitemap-icon">🤝</span> 회의 & 협업</a></li>
    <li class="sitemap-node"><a href="/guide/daily" data-tooltip="반복 업무를 자동화하는 방법"><span class="sitemap-icon">⚙️</span> 일상 업무 자동화</a></li>
    <li class="sitemap-node"><a href="/guide/by-dept" data-tooltip="마케팅·인사·재무 등 부서별 사례"><span class="sitemap-icon">🏢</span> 부서별 활용</a></li>
    <li class="sitemap-node"><a href="/guide/projects" data-tooltip="Projects 기능으로 맥락 유지하기"><span class="sitemap-icon">🧠</span> Projects & Memory</a></li>
    <li class="sitemap-node"><a href="/guide/mcp" data-tooltip="외부 도구와 MCP 서버 연동하기"><span class="sitemap-icon">🔌</span> MCP 연동</a></li>
    <li class="sitemap-node"><a href="/guide/plugins" data-tooltip="유용한 플러그인 모음 및 설치법"><span class="sitemap-icon">🧩</span> 플러그인 디렉토리</a></li>
    <li class="sitemap-node"><a href="/guide/workflows" data-tooltip="실무에 바로 쓸 수 있는 워크플로우"><span class="sitemap-icon">🔄</span> 워크플로우 레시피</a></li>
  </ul>
</div>

<!-- Branch 3: 관리자 & 보안 -->
<div class="sitemap-branch" data-branch="3">
  <div class="sitemap-branch-title">관리자 & 보안</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/guide/security" data-tooltip="보안 정책·컴플라이언스 가이드"><span class="sitemap-icon">🔒</span> 보안 가이드</a></li>
    <li class="sitemap-node"><a href="/guide/admin" data-tooltip="조직 단위 Cowork 도입 전략"><span class="sitemap-icon">📋</span> 도입 가이드</a></li>
    <li class="sitemap-node"><a href="/guide/training" data-tooltip="팀원 대상 교육 프로그램 설계"><span class="sitemap-icon">🎓</span> 팀 교육</a></li>
    <li class="sitemap-node"><a href="/guide/community" data-tooltip="사내 AI 커뮤니티 구축 및 운영"><span class="sitemap-icon">👥</span> 커뮤니티 운영</a></li>
    <li class="sitemap-node"><a href="/guide/security-check" data-tooltip="도입 전 보안 준비 상태 점검"><span class="sitemap-icon">🛡️</span> 보안 체크리스트</a></li>
    <li class="sitemap-node"><a href="/resources/templates" data-tooltip="부서별 맞춤 시작 템플릿 모음"><span class="sitemap-icon">📦</span> 부서별 스타터 키트</a></li>
  </ul>
</div>

<!-- Branch 4: 테스트 & 체험 -->
<div class="sitemap-branch" data-branch="4">
  <div class="sitemap-branch-title">테스트 & 체험</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/test/basic" data-tooltip="기본 기능을 직접 따라해보기"><span class="sitemap-icon">📝</span> 기초 테스트</a></li>
    <li class="sitemap-node"><a href="/test/advanced" data-tooltip="고급 활용법 실습 시나리오"><span class="sitemap-icon">🎯</span> 심화 테스트</a></li>
    <li class="sitemap-node"><a href="/test/quiz" data-tooltip="Cowork 실력 점검 퀴즈"><span class="sitemap-icon">❓</span> 실력 퀴즈</a></li>
    <li class="sitemap-node"><a href="/test/demo" data-tooltip="설치 없이 Cowork를 체험해보기"><span class="sitemap-icon">🎮</span> Cowork 체험</a></li>
  </ul>
</div>

<!-- Branch 5: 꿀팁 -->
<div class="sitemap-branch" data-branch="5">
  <div class="sitemap-branch-title">꿀팁</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/tips/prompting" data-tooltip="좋은 프롬프트 작성 원칙과 예시"><span class="sitemap-icon">✨</span> 질문 잘하는 법</a></li>
    <li class="sitemap-node"><a href="/tips/mistakes" data-tooltip="초보자들이 흔히 하는 실수와 해결법"><span class="sitemap-icon">⚠️</span> 자주 하는 실수</a></li>
    <li class="sitemap-node"><a href="/tips/faq" data-tooltip="가장 많이 묻는 질문과 답변"><span class="sitemap-icon">💬</span> FAQ</a></li>
    <li class="sitemap-node"><a href="/tips/glossary" data-tooltip="AI·Cowork 관련 핵심 용어 사전"><span class="sitemap-icon">📖</span> 용어집</a></li>
    <li class="sitemap-node"><a href="/tips/troubleshooting" data-tooltip="오류 발생 시 문제 해결 안내"><span class="sitemap-icon">🔧</span> 문제 해결</a></li>
  </ul>
</div>

<!-- Branch 6: 리소스 & 도구 -->
<div class="sitemap-branch" data-branch="6">
  <div class="sitemap-branch-title">리소스 & 도구</div>
  <ul class="sitemap-nodes">
    <li class="sitemap-node"><a href="/resources/" data-tooltip="Anthropic 공식 문서 및 유용한 링크"><span class="sitemap-icon">📚</span> 공식 문서</a></li>
    <li class="sitemap-node"><a href="/resources/videos" data-tooltip="초보~고급 단계별 추천 영상"><span class="sitemap-icon">🎬</span> 추천 영상</a></li>
    <li class="sitemap-node"><a href="/resources/templates" data-tooltip="바로 쓸 수 있는 프롬프트 템플릿"><span class="sitemap-icon">📋</span> 템플릿 라이브러리</a></li>
    <li class="sitemap-node"><a href="/resources/prompt-builder" data-tooltip="단계별 프롬프트 생성 도구"><span class="sitemap-icon">🏗️</span> 프롬프트 빌더</a></li>
    <li class="sitemap-node"><a href="/resources/roi-calculator" data-tooltip="AI 도입 ROI를 직접 계산해보기"><span class="sitemap-icon">🧮</span> ROI 계산기</a></li>
    <li class="sitemap-node"><a href="/resources/comparison" data-tooltip="주요 AI 도구 기능·가격 비교"><span class="sitemap-icon">📊</span> AI 비교표</a></li>
    <li class="sitemap-node"><a href="/resources/cases" data-tooltip="실제 기업의 Cowork 도입 사례"><span class="sitemap-icon">🏆</span> 도입 사례</a></li>
    <li class="sitemap-node"><a href="/resources/updates" data-tooltip="Cowork 주요 업데이트 히스토리"><span class="sitemap-icon">📅</span> 타임라인</a></li>
    <li class="sitemap-node"><a href="/resources/maturity" data-tooltip="우리 조직의 AI 활용 수준 진단"><span class="sitemap-icon">📈</span> 성숙도 평가</a></li>
    <li class="sitemap-node"><a href="/resources/cheatsheet" data-tooltip="한 장으로 보는 프롬프트 요약표"><span class="sitemap-icon">📄</span> 치트시트</a></li>
    <li class="sitemap-node"><a href="/resources/prompt-scorer" data-tooltip="내 프롬프트의 품질을 점검해보기"><span class="sitemap-icon">🔍</span> 프롬프트 평가기</a></li>
    <li class="sitemap-node"><a href="/resources/decision-tree" data-tooltip="상황별 최적 AI 도구 선택 가이드"><span class="sitemap-icon">🌳</span> 의사결정 트리</a></li>
    <li class="sitemap-node"><a href="/resources/weekly-planner" data-tooltip="한 주 AI 활용 계획 세우기"><span class="sitemap-icon">🗓️</span> 주간 플래너</a></li>
  </ul>
</div>

</div><!-- /sitemap-branches -->
</div><!-- /sitemap-wrap -->
