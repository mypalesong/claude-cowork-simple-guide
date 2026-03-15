---
layout: home
hero:
  name: Claude Cowork
  text: AI 동료와 함께 일하는 가장 쉬운 방법
  tagline: 이메일, 보고서, 데이터 분석, 회의록 — Claude가 옆자리 동료처럼 도와줍니다.
  actions:
    - theme: brand
      text: 지금 시작하기
      link: /guide/overview
    - theme: alt
      text: 5분 체험하기
      link: /test/basic
features:
  - icon: "&#x1F4BC;"
    title: 사무직 직장인
    details: 매일 이메일, 보고서, 기획서를 쓰는 분. Claude가 초안부터 퇴고까지 도와드립니다.
  - icon: "&#x1F4CA;"
    title: 데이터를 다루는 분
    details: 엑셀 데이터를 정리하고, 요약하고, 차트를 만들어야 하는 분. 말로 하면 됩니다.
  - icon: "&#x1F91D;"
    title: 팀 리더 & 매니저
    details: 회의록 정리, 주간 보고, 팀원 피드백 작성에 시간을 많이 쓰는 분.
  - icon: "&#x23F1;"
    title: 하루 45분 절약
    details: 반복 업무를 Claude에게 맡기면 하루 평균 45분을 더 중요한 일에 쓸 수 있습니다.
  - icon: "&#x1F680;"
    title: 5분이면 시작
    details: 설치부터 첫 대화까지 5분이면 충분합니다. 코딩 지식은 전혀 필요 없어요.
  - icon: "&#x1F4DD;"
    title: 바로 쓰는 템플릿
    details: 이메일, 보고서, 회의록 등 복사해서 바로 쓸 수 있는 프롬프트 템플릿을 제공합니다.
  - icon: "&#x1F512;"
    title: 기업 보안 가이드
    details: 데이터 보안, 컴플라이언스, 사내 정책 체크리스트까지 — 안심하고 도입할 수 있습니다.
---

<script setup>
import { ref, onMounted } from 'vue'

const counters = ref([
  { value: 0, target: 26, suffix: '+', label: '페이지의', sub: '완벽 가이드', color: '#E87040' },
  { value: 0, target: 52, suffix: '+', label: '바로 쓰는', sub: '프롬프트 템플릿', color: '#D4A574' },
  { value: 0, target: 10, suffix: '', label: '자동화', sub: '워크플로우 레시피', color: '#C04A1A' },
  { value: 0, target: 45, suffix: '분', label: '매일 절약하는', sub: '소중한 시간', color: '#F09060' },
])

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => { isVisible.value = true }, 300)

  counters.value.forEach((c, i) => {
    let start = 0
    const step = c.target / 40
    const delay = i * 200
    setTimeout(() => {
      const interval = setInterval(() => {
        start += step
        if (start >= c.target) {
          c.value = c.target
          clearInterval(interval)
        } else {
          c.value = Math.floor(start)
        }
      }, 30)
    }, 800 + delay)
  })
})
</script>

<div :class="['landing-sections', { visible: isVisible }]">

<div class="section-divider">
<div class="divider-line"></div>
<div class="divider-icon">&#x26A1;</div>
<div class="divider-line"></div>
</div>

<section class="stats-section">
<h2 class="section-title">숫자로 보는 Cowork</h2>
<p class="section-subtitle">Claude와 함께라면 이 모든 것이 가능합니다</p>
<div class="stats-grid">
<div v-for="(c, i) in counters" :key="i" class="stat-card" :style="{ '--delay': i * 0.1 + 's', '--accent': c.color }">
<div class="stat-glow"></div>
<div class="stat-number">{{ c.value }}{{ c.suffix }}</div>
<div class="stat-label">{{ c.label }}</div>
<div class="stat-sub">{{ c.sub }}</div>
</div>
</div>
</section>

<div class="section-divider">
<div class="divider-line"></div>
<div class="divider-icon">&#x1F4CA;</div>
<div class="divider-line"></div>
</div>

<section class="comparison-section">
<h2 class="section-title">Before & After</h2>
<p class="section-subtitle">Claude 도입 전후, 이렇게 달라집니다</p>
<div class="comparison-grid">
<div class="comparison-card">
<div class="comparison-task">&#x2709;&#xFE0F; 이메일 작성</div>
<div class="comparison-row">
<div class="before"><span class="badge-before">Before</span> 15분 고민하며 작성</div>
<div class="arrow">&#x27A1;&#xFE0F;</div>
<div class="after"><span class="badge-after">After</span> 2분 만에 완성</div>
</div>
</div>
<div class="comparison-card">
<div class="comparison-task">&#x1F4CB; 주간 보고서</div>
<div class="comparison-row">
<div class="before"><span class="badge-before">Before</span> 1시간 데이터 취합</div>
<div class="arrow">&#x27A1;&#xFE0F;</div>
<div class="after"><span class="badge-after">After</span> 15분 자동 생성</div>
</div>
</div>
<div class="comparison-card">
<div class="comparison-task">&#x1F4DD; 회의록 정리</div>
<div class="comparison-row">
<div class="before"><span class="badge-before">Before</span> 30분 타이핑</div>
<div class="arrow">&#x27A1;&#xFE0F;</div>
<div class="after"><span class="badge-after">After</span> 5분 키워드만</div>
</div>
</div>
<div class="comparison-card">
<div class="comparison-task">&#x1F4CA; 데이터 분석</div>
<div class="comparison-row">
<div class="before"><span class="badge-before">Before</span> 2시간 엑셀 삽질</div>
<div class="arrow">&#x27A1;&#xFE0F;</div>
<div class="after"><span class="badge-after">After</span> 10분 말로 분석</div>
</div>
</div>
</div>
</section>

<div class="section-divider">
<div class="divider-line"></div>
<div class="divider-icon">&#x1F3AF;</div>
<div class="divider-line"></div>
</div>

<section class="paths-section">
<h2 class="section-title">어디서부터 시작할까요?</h2>
<p class="section-subtitle">당신의 상황에 맞는 코스를 선택하세요</p>
<div class="paths-grid">
<a href="/guide/overview" class="path-card path-quick">
<div class="path-badge">&#x23F1; 10분</div>
<div class="path-icon">&#x1F680;</div>
<h3>빠르게 시작하기</h3>
<p>핵심만 빠르게 훑고 바로 실전 투입하고 싶은 분</p>
<div class="path-steps">Overview &#x2192; 첫 대화 &#x2192; 치트시트</div>
</a>
<a href="/guide/overview" class="path-card path-learn">
<div class="path-badge">&#x23F1; 1시간</div>
<div class="path-icon">&#x1F4DA;</div>
<h3>체계적으로 배우기</h3>
<p>기초부터 차근차근 마스터하고 싶은 분</p>
<div class="path-steps">Overview &#x2192; 작성법 &#x2192; 분석 &#x2192; 테스트</div>
</a>
<a href="/test/advanced" class="path-card path-master">
<div class="path-badge">&#x23F1; 반나절</div>
<div class="path-icon">&#x1F3C6;</div>
<h3>마스터 되기</h3>
<p>모든 기능을 완전 정복하고 팀에 전파하고 싶은 분</p>
<div class="path-steps">전체 가이드 &#x2192; 워크플로우 &#x2192; 심화 퀴즈</div>
</a>
</div>
</section>

<div class="section-divider">
<div class="divider-line"></div>
<div class="divider-icon">&#x2728;</div>
<div class="divider-line"></div>
</div>

<section class="highlights-section">
<h2 class="section-title">이 가이드의 특별한 점</h2>
<div class="highlights-grid">
<div class="highlight-card">
<div class="highlight-icon">&#x1F3AF;</div>
<h3>인터랙티브 도구</h3>
<p>프롬프트 빌더, ROI 계산기 등 직접 체험하며 배우는 도구 내장</p>
</div>
<div class="highlight-card">
<div class="highlight-icon">&#x1F4CB;</div>
<h3>52개 템플릿</h3>
<p>복사해서 바로 사용할 수 있는 실전 프롬프트 모음</p>
</div>
<div class="highlight-card">
<div class="highlight-icon">&#x1F3AC;</div>
<h3>17개 영상</h3>
<p>국내외 추천 영상을 가이드에 내장하여 바로 시청</p>
</div>
<div class="highlight-card">
<div class="highlight-icon">&#x1F9EA;</div>
<h3>실전 테스트</h3>
<p>기초부터 심화까지 단계별 시나리오로 실력 점검</p>
</div>
<div class="highlight-card">
<div class="highlight-icon">&#x1F4CA;</div>
<h3>워크플로우</h3>
<p>Mermaid 다이어그램 포함 자동화 레시피 10종</p>
</div>
<div class="highlight-card">
<div class="highlight-icon">&#x1F512;</div>
<h3>보안 가이드</h3>
<p>기업 도입을 위한 보안 체크리스트와 컴플라이언스 가이드</p>
</div>
</div>
</section>

</div>

<style>
/* ═══ Landing Page Styles ═══ */
.landing-sections {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.landing-sections.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Section titles */
.section-title {
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #1a1a2e, #E87040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}
.dark .section-title {
  background: linear-gradient(135deg, #f0ece8, #F09060);
  -webkit-background-clip: text;
  background-clip: text;
}
.section-subtitle {
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

/* Dividers */
.section-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 4rem 0 3rem;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--vp-c-divider), transparent);
}
.divider-icon {
  font-size: 1.2rem;
  opacity: 0.6;
}

/* ═══ Stats Section ═══ */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}
.stat-card {
  position: relative;
  text-align: center;
  padding: 2rem 1rem 1.5rem;
  border-radius: 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: slideUp 0.6s ease backwards;
  animation-delay: var(--delay);
}
.stat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(232, 112, 64, 0.12);
}
.stat-glow {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.08;
  filter: blur(30px);
  transition: opacity 0.3s ease;
}
.stat-card:hover .stat-glow {
  opacity: 0.15;
}
.stat-number {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 2.8rem;
  font-weight: 900;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
.stat-sub {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-top: 0.25rem;
}

/* ═══ Comparison Section ═══ */
.comparison-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.comparison-card {
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}
.comparison-card:hover {
  transform: translateX(4px);
  border-color: rgba(232, 112, 64, 0.3);
  box-shadow: 0 8px 24px rgba(232, 112, 64, 0.08);
}
.comparison-task {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}
.comparison-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
.before, .after {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.arrow {
  font-size: 1.2rem;
}
.badge-before {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  background: rgba(196, 48, 82, 0.1);
  color: #c43052;
  margin-right: 4px;
}
.badge-after {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  background: rgba(13, 138, 94, 0.1);
  color: #0d8a5e;
  margin-right: 4px;
}

/* ═══ Paths Section ═══ */
.paths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.path-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 20px;
  border: 2px solid var(--vp-c-divider);
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.3s ease;
  overflow: hidden;
}
.path-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 20px 20px 0 0;
  transition: height 0.3s ease;
}
.path-quick::before { background: linear-gradient(90deg, #E87040, #F09060); }
.path-learn::before { background: linear-gradient(90deg, #5b8cbf, #7ba8d8); }
.path-master::before { background: linear-gradient(90deg, #3d9b58, #5ec478); }
.path-card:hover::before { height: 6px; }
.path-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
}
.path-quick:hover { border-color: rgba(232, 112, 64, 0.4); }
.path-learn:hover { border-color: rgba(91, 140, 191, 0.4); }
.path-master:hover { border-color: rgba(61, 155, 88, 0.4); }
.path-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3);
  margin-bottom: 1rem;
}
.path-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}
.path-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
.path-card p {
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
  margin-bottom: 1rem;
}
.path-steps {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  padding: 8px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  white-space: nowrap;
}

/* ═══ Highlights Section ═══ */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.highlight-card {
  text-align: center;
  padding: 1.75rem 1.25rem;
  border-radius: 16px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}
.highlight-card:hover {
  transform: translateY(-4px);
  border-color: rgba(232, 112, 64, 0.3);
  box-shadow: 0 12px 32px rgba(232, 112, 64, 0.08);
}
.highlight-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
  display: inline-block;
  transition: transform 0.3s ease;
}
.highlight-card:hover .highlight-icon {
  transform: scale(1.2) rotate(-5deg);
}
.highlight-card h3 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}
.highlight-card p {
  font-size: 0.88rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}

/* ═══ Animations ═══ */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ═══ Responsive ═══ */
@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .paths-grid { grid-template-columns: 1fr; }
  .highlights-grid { grid-template-columns: repeat(2, 1fr); }
  .section-title { font-size: 1.5rem; }
  .stat-number { font-size: 2.2rem; }
  .comparison-row { flex-direction: column; gap: 0.5rem; align-items: flex-start; }
  .arrow { transform: rotate(90deg); align-self: center; }
}
@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
  .highlights-grid { grid-template-columns: 1fr; }
  .stat-card { padding: 1.5rem 0.75rem 1rem; }
  .stat-number { font-size: 1.8rem; }
}
</style>
