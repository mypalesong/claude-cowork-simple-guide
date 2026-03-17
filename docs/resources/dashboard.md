# AI 도입 성과 대시보드

> AI 도입 효과를 시각적으로 추적하세요. 데이터를 입력하면 대시보드가 자동으로 만들어집니다.

<script setup>
import { ref, computed, reactive } from 'vue'

const months = reactive([
  { label: '1월', users: 25, conversations: 320, documents: 45, satisfaction: 3.8, savedHours: 120 },
  { label: '2월', users: 38, conversations: 510, documents: 72, satisfaction: 4.1, savedHours: 185 },
  { label: '3월', users: 52, conversations: 780, documents: 98, satisfaction: 4.4, savedHours: 260 },
])

const editingMonth = ref(0)

const distribution = reactive([
  { label: '문서 작성', value: 40, color: '#E87040' },
  { label: '데이터 분석', value: 25, color: '#F4A261' },
  { label: '회의록', value: 20, color: '#2A9D8F' },
  { label: '기타', value: 15, color: '#264653' },
])

// KPIs
const totalUsers = computed(() => months.reduce((s, m) => s + m.users, 0))
const totalConversations = computed(() => months.reduce((s, m) => s + m.conversations, 0))
const avgSavedHours = computed(() => {
  const avg = months.reduce((s, m) => s + m.savedHours, 0) / months.length
  return Math.round(avg * 10) / 10
})
const avgSatisfaction = computed(() => {
  const avg = months.reduce((s, m) => s + m.satisfaction, 0) / months.length
  return Math.round(avg * 10) / 10
})

// Chart helpers
const maxUsers = computed(() => Math.max(...months.map(m => m.users), 1))
const maxConversations = computed(() => Math.max(...months.map(m => m.conversations), 1))

function barHeight(value, max) {
  return Math.max(4, Math.round((value / max) * 160))
}

// Satisfaction gauge
const gaugePercent = computed(() => (avgSatisfaction.value / 5) * 100)
const gaugeDash = computed(() => {
  const circumference = 2 * Math.PI * 54
  const filled = (gaugePercent.value / 100) * circumference * 0.75
  return `${filled} ${circumference}`
})

// User growth insight
const userGrowth = computed(() => {
  if (months[0].users === 0) return null
  const pct = Math.round(((months[2].users - months[0].users) / months[0].users) * 100)
  return pct
})

// Distribution total
const distTotal = computed(() => distribution.reduce((s, d) => s + d.value, 0))

// Copy report
const copied = ref(false)
function copyReport() {
  const lines = [
    '═══════════════════════════════════════',
    '       AI 도입 성과 보고서',
    '═══════════════════════════════════════',
    '',
    `기간: ${months[0].label} ~ ${months[months.length - 1].label}`,
    `작성일: ${new Date().toLocaleDateString('ko-KR')}`,
    '',
    '── 핵심 KPI ──',
    `  총 활성 사용자: ${totalUsers.value}명`,
    `  총 대화 횟수: ${totalConversations.value.toLocaleString('ko-KR')}회`,
    `  월평균 절약 시간: ${avgSavedHours.value}시간`,
    `  평균 만족도: ${avgSatisfaction.value} / 5.0점`,
    '',
    '── 월별 추이 ──',
    ...months.map(m => `  ${m.label}: 사용자 ${m.users}명 | 대화 ${m.conversations}회 | 문서 ${m.documents}건 | 절약 ${m.savedHours}시간`),
    '',
    '── 활용 분포 ──',
    ...distribution.map(d => `  ${d.label}: ${d.value}%`),
    '',
    '── 인사이트 ──',
  ]
  if (userGrowth.value !== null) {
    lines.push(`  • 사용자가 ${months[0].label} 대비 ${userGrowth.value}% ${userGrowth.value >= 0 ? '증가' : '감소'}했습니다.`)
  }
  lines.push(`  • 월 평균 ${avgSavedHours.value}시간을 절약하고 있습니다.`)
  lines.push(`  • 평균 만족도 ${avgSatisfaction.value}점으로 ${avgSatisfaction.value >= 4 ? '높은 만족도' : '보통 수준'}를 보이고 있습니다.`)
  lines.push('')
  lines.push('── 다음 단계 제안 ──')
  if (avgSatisfaction.value < 4) {
    lines.push('  1. 사용자 교육 강화를 통한 만족도 향상')
  } else {
    lines.push('  1. 고급 활용 사례 공유를 통한 활용도 심화')
  }
  if (userGrowth.value !== null && userGrowth.value > 50) {
    lines.push('  2. 급성장에 따른 가이드라인 및 보안 정책 점검')
  } else {
    lines.push('  2. 미참여 팀원 대상 온보딩 세션 운영')
  }
  lines.push('  3. 부서별 맞춤 프롬프트 템플릿 제작')
  lines.push('')
  lines.push('═══════════════════════════════════════')

  const text = lines.join('\n')
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  })
}
</script>

<!-- ───── 입력 섹션 ───── -->

<div class="dash-section">
<h3>📊 월별 데이터 입력</h3>

<div class="month-tabs">
  <button
    v-for="(m, i) in months"
    :key="i"
    :class="['month-tab', { active: editingMonth === i }]"
    @click="editingMonth = i"
  >{{ m.label }}</button>
</div>

<div class="input-grid-dash">
  <div class="input-item">
    <label>활성 사용자 수</label>
    <div class="input-row-dash">
      <input type="number" v-model.number="months[editingMonth].users" min="0" />
      <span class="input-unit-dash">명</span>
    </div>
  </div>
  <div class="input-item">
    <label>총 대화 횟수</label>
    <div class="input-row-dash">
      <input type="number" v-model.number="months[editingMonth].conversations" min="0" />
      <span class="input-unit-dash">회</span>
    </div>
  </div>
  <div class="input-item">
    <label>문서 작성 건수</label>
    <div class="input-row-dash">
      <input type="number" v-model.number="months[editingMonth].documents" min="0" />
      <span class="input-unit-dash">건</span>
    </div>
  </div>
  <div class="input-item">
    <label>평균 만족도</label>
    <div class="input-row-dash">
      <input type="number" v-model.number="months[editingMonth].satisfaction" min="1" max="5" step="0.1" />
      <span class="input-unit-dash">/ 5점</span>
    </div>
  </div>
  <div class="input-item">
    <label>절약 시간</label>
    <div class="input-row-dash">
      <input type="number" v-model.number="months[editingMonth].savedHours" min="0" />
      <span class="input-unit-dash">시간</span>
    </div>
  </div>
</div>
</div>

<!-- ───── KPI 카드 ───── -->

<div class="dash-section">
<h3>🎯 핵심 KPI</h3>
<div class="kpi-grid">
  <div class="kpi-card">
    <div class="kpi-value accent">{{ totalUsers }}</div>
    <div class="kpi-label">총 활성 사용자 (명)</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-value">{{ totalConversations.toLocaleString('ko-KR') }}</div>
    <div class="kpi-label">총 대화 횟수 (회)</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-value accent">{{ avgSavedHours }}</div>
    <div class="kpi-label">월평균 절약 시간 (시간)</div>
  </div>
  <div class="kpi-card">
    <div class="kpi-value">{{ avgSatisfaction }} <span class="kpi-sub">/ 5.0</span></div>
    <div class="kpi-label">평균 만족도</div>
  </div>
</div>
</div>

<!-- ───── 월별 추이 차트 ───── -->

<div class="dash-section">
<h3>📈 월별 사용자 추이</h3>
<div class="chart-container">
  <div class="bar-chart">
    <div class="bar-group" v-for="(m, i) in months" :key="i">
      <div class="bar-value">{{ m.users }}명</div>
      <div class="bar" :style="{ height: barHeight(m.users, maxUsers) + 'px', background: 'linear-gradient(180deg, #E87040 0%, #D35F30 100%)' }"></div>
      <div class="bar-label">{{ m.label }}</div>
    </div>
  </div>
</div>

<h3 style="margin-top: 2rem;">💬 월별 대화 추이</h3>
<div class="chart-container">
  <div class="bar-chart">
    <div class="bar-group" v-for="(m, i) in months" :key="'c'+i">
      <div class="bar-value">{{ m.conversations }}회</div>
      <div class="bar" :style="{ height: barHeight(m.conversations, maxConversations) + 'px', background: 'linear-gradient(180deg, #2A9D8F 0%, #1E7A6E 100%)' }"></div>
      <div class="bar-label">{{ m.label }}</div>
    </div>
  </div>
</div>
</div>

<!-- ───── 활용 분포 ───── -->

<div class="dash-section">
<h3>📋 활용 분포</h3>
<div class="dist-chart">
  <div class="dist-row" v-for="(d, i) in distribution" :key="i">
    <div class="dist-label">{{ d.label }}</div>
    <div class="dist-bar-track">
      <div class="dist-bar-fill" :style="{ width: (distTotal > 0 ? (d.value / distTotal * 100) : 0) + '%', background: d.color }">
        <span class="dist-bar-text" v-if="d.value > 0">{{ d.value }}%</span>
      </div>
    </div>
    <div class="dist-input">
      <input type="number" v-model.number="distribution[i].value" min="0" max="100" />
      <span>%</span>
    </div>
  </div>
</div>
</div>

<!-- ───── 만족도 게이지 ───── -->

<div class="dash-section">
<h3>😊 만족도 게이지</h3>
<div class="gauge-wrap">
  <svg viewBox="0 0 120 100" class="gauge-svg">
    <!-- Background arc -->
    <circle
      cx="60" cy="64" r="54"
      fill="none"
      stroke="var(--vp-c-divider)"
      stroke-width="10"
      stroke-dasharray="254.47 339.29"
      stroke-linecap="round"
      transform="rotate(135 60 64)"
    />
    <!-- Filled arc -->
    <circle
      cx="60" cy="64" r="54"
      fill="none"
      stroke="#E87040"
      stroke-width="10"
      :stroke-dasharray="gaugeDash"
      stroke-linecap="round"
      transform="rotate(135 60 64)"
      style="transition: stroke-dasharray 0.6s ease;"
    />
    <!-- Center text -->
    <text x="60" y="60" text-anchor="middle" class="gauge-number">{{ avgSatisfaction }}</text>
    <text x="60" y="78" text-anchor="middle" class="gauge-label-text">/ 5.0점</text>
  </svg>
</div>
</div>

<!-- ───── 한 줄 인사이트 ───── -->

<div class="dash-section">
<h3>💡 자동 인사이트</h3>
<div class="insight-list">
  <div class="insight-card" v-if="userGrowth !== null">
    <span class="insight-icon">📈</span>
    <span>사용자가 {{ months[0].label }} 대비 <strong>{{ userGrowth }}%</strong> {{ userGrowth >= 0 ? '증가' : '감소' }}했습니다.</span>
  </div>
  <div class="insight-card">
    <span class="insight-icon">⏱️</span>
    <span>월 평균 <strong>{{ avgSavedHours }}시간</strong>을 절약하고 있습니다.</span>
  </div>
  <div class="insight-card">
    <span class="insight-icon">⭐</span>
    <span>평균 만족도 <strong>{{ avgSatisfaction }}점</strong>으로 {{ avgSatisfaction >= 4 ? '높은 만족도를 유지' : '개선 여지가 있습니다' }}하고 있습니다.</span>
  </div>
  <div class="insight-card" v-if="months[2].documents > months[0].documents">
    <span class="insight-icon">📄</span>
    <span>문서 작성 건수가 {{ months[0].label }} 대비 <strong>{{ Math.round(((months[2].documents - months[0].documents) / Math.max(months[0].documents, 1)) * 100) }}%</strong> 증가했습니다.</span>
  </div>
</div>
</div>

<!-- ───── 보고서 내보내기 ───── -->

<div class="dash-section">
<h3>📤 보고서 내보내기</h3>
<p style="color: var(--vp-c-text-2); margin-bottom: 1rem;">KPI와 인사이트를 텍스트 보고서로 복사합니다. 이메일이나 메신저에 바로 붙여넣기 하세요.</p>
<button class="copy-btn" @click="copyReport">
  {{ copied ? '✅ 복사 완료!' : '📋 텍스트로 복사' }}
</button>
</div>

<style>
/* ── 공통 ── */
.dash-section {
  margin: 2rem 0;
}
.dash-section h3 {
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

/* ── 월 탭 ── */
.month-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}
.month-tab {
  padding: 0.5rem 1.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.month-tab:hover {
  border-color: #E87040;
  color: #E87040;
}
.month-tab.active {
  background: #E87040;
  color: #fff;
  border-color: #E87040;
}

/* ── 입력 그리드 ── */
.input-grid-dash {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.input-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem;
}
.input-item label {
  display: block;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 0.5rem;
}
.input-row-dash {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.input-row-dash input[type="number"] {
  width: 100%;
  max-width: 120px;
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: 600;
  text-align: right;
}
.input-row-dash input[type="number"]:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}
.input-unit-dash {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

/* ── KPI 카드 ── */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}
.kpi-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.kpi-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}
.kpi-value {
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1.1;
}
.kpi-value.accent {
  color: #E87040;
}
.kpi-sub {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-3);
}
.kpi-label {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* ── 막대 차트 ── */
.chart-container {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem 2rem 1rem;
}
.bar-chart {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.5rem;
  height: 200px;
  padding-bottom: 0.5rem;
}
.bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.bar {
  width: 56px;
  border-radius: 8px 8px 4px 4px;
  transition: height 0.5s ease;
  min-height: 4px;
}
.bar-value {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.bar-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
}

/* ── 활용 분포 ── */
.dist-chart {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem;
}
.dist-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.dist-label {
  width: 90px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: right;
  flex-shrink: 0;
}
.dist-bar-track {
  flex: 1;
  height: 28px;
  background: var(--vp-c-bg);
  border-radius: 6px;
  overflow: hidden;
}
.dist-bar-fill {
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.6rem;
  transition: width 0.5s ease;
  min-width: 0;
}
.dist-bar-text {
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
}
.dist-input {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-shrink: 0;
}
.dist-input input {
  width: 52px;
  padding: 0.25rem 0.4rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  text-align: right;
  font-weight: 600;
}
.dist-input input:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}
.dist-input span {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

/* ── 게이지 ── */
.gauge-wrap {
  display: flex;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem;
}
.gauge-svg {
  width: 200px;
  height: 170px;
}
.gauge-number {
  font-size: 1.8rem;
  font-weight: 800;
  fill: #E87040;
}
.gauge-label-text {
  font-size: 0.7rem;
  fill: var(--vp-c-text-3);
  font-weight: 500;
}

/* ── 인사이트 ── */
.insight-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.insight-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-left: 4px solid #E87040;
  border-radius: 10px;
  padding: 1rem 1.2rem;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
.insight-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.insight-card strong {
  color: #E87040;
}

/* ── 복사 버튼 ── */
.copy-btn {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #E87040, #D35F30);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
}
.copy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(232, 112, 64, 0.35);
}
.copy-btn:active {
  transform: translateY(0);
}

/* ── 반응형 ── */
@media (max-width: 640px) {
  .input-grid-dash {
    grid-template-columns: 1fr 1fr;
  }
  .kpi-grid {
    grid-template-columns: 1fr 1fr;
  }
  .bar-chart {
    gap: 1.5rem;
  }
  .bar {
    width: 40px;
  }
  .dist-label {
    width: 70px;
    font-size: 0.8rem;
  }
  .kpi-value {
    font-size: 1.8rem;
  }
}
</style>
