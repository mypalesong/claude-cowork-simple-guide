# 보안 준비 체크리스트

> AI 도입 전, 우리 회사의 보안 준비 상태를 확인하세요. 체크하면서 진행하면 빠짐없이 준비할 수 있습니다.

<script setup>
import { ref, computed } from 'vue'

const categories = ref([
  {
    id: 'access',
    icon: '🔐',
    title: '계정 & 접근 관리',
    items: [
      { label: '회사 공식 계정으로 가입 완료', checked: false },
      { label: 'SSO(통합 로그인) 설정 완료 (Enterprise)', checked: false },
      { label: '팀원별 계정 생성 & 권한 설정', checked: false },
      { label: '퇴사자 계정 비활성화 프로세스 수립', checked: false },
      { label: '비밀번호 정책 적용', checked: false },
      { label: '2FA(이중 인증) 활성화', checked: false },
    ]
  },
  {
    id: 'data',
    icon: '📁',
    title: '데이터 보안',
    items: [
      { label: '접근 허용 폴더 범위 지정', checked: false },
      { label: '민감 데이터 폴더 접근 차단 확인', checked: false },
      { label: '개인정보 마스킹 가이드라인 수립', checked: false },
      { label: '데이터 보관 정책 확인 (Anthropic 약관)', checked: false },
      { label: '기밀 문서 분류 기준 마련', checked: false },
      { label: '데이터 백업 정책 확인', checked: false },
    ]
  },
  {
    id: 'policy',
    icon: '📋',
    title: '사내 정책',
    items: [
      { label: 'AI 사용 정책 문서 작성', checked: false },
      { label: '허용/금지 사용 범위 명시', checked: false },
      { label: '결과물 검증 프로세스 수립', checked: false },
      { label: 'AI 사용 관련 법적 검토 완료', checked: false },
      { label: '개인정보보호법 준수 확인', checked: false },
    ]
  },
  {
    id: 'education',
    icon: '📢',
    title: '교육 & 소통',
    items: [
      { label: '전 직원 대상 보안 교육 계획', checked: false },
      { label: 'AI 사용 가이드 배포', checked: false },
      { label: '보안 사고 신고 절차 안내', checked: false },
      { label: '정기 리마인더 발송 계획', checked: false },
    ]
  },
  {
    id: 'monitoring',
    icon: '📊',
    title: '모니터링',
    items: [
      { label: '사용 로그 모니터링 방법 확인', checked: false },
      { label: '정기 보안 감사 일정 수립', checked: false },
      { label: '이상 사용 탐지 기준 설정', checked: false },
      { label: '보안 사고 대응 매뉴얼 작성', checked: false },
    ]
  }
])

function categoryChecked(cat) {
  return cat.items.filter(i => i.checked).length
}

function categoryTotal(cat) {
  return cat.items.length
}

function categoryPercent(cat) {
  return Math.round(categoryChecked(cat) / categoryTotal(cat) * 100)
}

function categoryColor(cat) {
  const p = categoryPercent(cat)
  if (p > 80) return '#22c55e'
  if (p >= 50) return '#eab308'
  return '#ef4444'
}

const totalItems = computed(() => categories.value.reduce((s, c) => s + c.items.length, 0))
const totalChecked = computed(() => categories.value.reduce((s, c) => s + categoryChecked(c), 0))
const overallPercent = computed(() => Math.round(totalChecked.value / totalItems.value * 100))

const overallColor = computed(() => {
  if (overallPercent.value > 80) return '#22c55e'
  if (overallPercent.value >= 50) return '#eab308'
  return '#ef4444'
})

const statusEmoji = computed(() => {
  if (overallPercent.value > 80) return '🟢'
  if (overallPercent.value >= 50) return '🟡'
  return '🔴'
})

const statusLabel = computed(() => {
  if (overallPercent.value > 80) return '준비 완료'
  if (overallPercent.value >= 50) return '진행중'
  return '미준비'
})

const uncheckedItems = computed(() => {
  const result = []
  categories.value.forEach(cat => {
    const unchecked = cat.items.filter(i => !i.checked)
    if (unchecked.length > 0) {
      result.push({ title: `${cat.icon} ${cat.title}`, items: unchecked.map(i => i.label) })
    }
  })
  return result
})

const circumference = 2 * Math.PI * 54

const dashOffset = computed(() => {
  return circumference - (overallPercent.value / 100) * circumference
})

const copied = ref(false)

function exportResult() {
  let text = `=== 보안 준비 체크리스트 결과 ===\n\n`
  text += `전체 준비도: ${overallPercent.value}% (${totalChecked.value}/${totalItems.value})\n`
  text += `상태: ${statusEmoji.value} ${statusLabel.value}\n\n`

  categories.value.forEach(cat => {
    text += `${cat.icon} ${cat.title} (${categoryChecked(cat)}/${categoryTotal(cat)})\n`
    cat.items.forEach(item => {
      text += `  ${item.checked ? '✅' : '⬜'} ${item.label}\n`
    })
    text += '\n'
  })

  if (uncheckedItems.value.length > 0) {
    text += `--- 미완료 항목 ---\n`
    uncheckedItems.value.forEach(group => {
      group.items.forEach(item => {
        text += `• [${group.title}] ${item}\n`
      })
    })
  }

  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

function toggleAll(cat, val) {
  cat.items.forEach(i => { i.checked = val })
}
</script>

<div class="sc-wrapper">

<!-- Overall Progress Circle -->
<div class="sc-overview">
  <div class="sc-circle-wrap">
    <svg width="140" height="140" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" stroke-width="8" />
      <circle
        cx="60" cy="60" r="54" fill="none"
        :stroke="overallColor"
        stroke-width="8"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        transform="rotate(-90 60 60)"
        class="sc-progress-ring"
      />
    </svg>
    <div class="sc-circle-text">
      <span class="sc-circle-pct" :style="{ color: overallColor }">{{ overallPercent }}%</span>
      <span class="sc-circle-label">전체 준비도</span>
    </div>
  </div>
  <div class="sc-overview-info">
    <div class="sc-status-badge" :style="{ background: overallColor + '18', color: overallColor, borderColor: overallColor + '40' }">
      {{ statusEmoji }} {{ statusLabel }}
    </div>
    <p class="sc-overview-count">완료 <strong>{{ totalChecked }}</strong> / {{ totalItems }} 항목</p>
  </div>
</div>

<!-- Category Cards -->
<div v-for="cat in categories" :key="cat.id" class="sc-card">
  <div class="sc-card-header">
    <div class="sc-card-title">
      <span class="sc-card-icon">{{ cat.icon }}</span>
      <h3>{{ cat.title }}</h3>
    </div>
    <div class="sc-card-meta">
      <span class="sc-card-count" :style="{ color: categoryColor(cat) }">{{ categoryChecked(cat) }}/{{ categoryTotal(cat) }} 완료</span>
      <div class="sc-card-actions">
        <button class="sc-btn-mini" @click="toggleAll(cat, true)">전체 선택</button>
        <button class="sc-btn-mini" @click="toggleAll(cat, false)">초기화</button>
      </div>
    </div>
  </div>
  <div class="sc-progress-bar-wrap">
    <div class="sc-progress-bar">
      <div class="sc-progress-fill" :style="{ width: categoryPercent(cat) + '%', background: categoryColor(cat) }"></div>
    </div>
  </div>
  <ul class="sc-checklist">
    <li v-for="(item, idx) in cat.items" :key="idx" class="sc-check-item" :class="{ 'sc-checked': item.checked }">
      <label class="sc-check-label">
        <input type="checkbox" v-model="item.checked" class="sc-checkbox" />
        <span class="sc-checkmark"></span>
        <span class="sc-item-text">{{ item.label }}</span>
      </label>
    </li>
  </ul>
</div>

<!-- Results Section -->
<div class="sc-results">
  <h3>📝 결과 요약</h3>
  <div class="sc-results-grid">
    <div class="sc-result-box">
      <div class="sc-result-label">전체 준비도</div>
      <div class="sc-result-value" :style="{ color: overallColor }">{{ overallPercent }}%</div>
    </div>
    <div class="sc-result-box">
      <div class="sc-result-label">상태</div>
      <div class="sc-result-value">{{ statusEmoji }} {{ statusLabel }}</div>
    </div>
    <div class="sc-result-box">
      <div class="sc-result-label">완료 항목</div>
      <div class="sc-result-value">{{ totalChecked }} / {{ totalItems }}</div>
    </div>
    <div class="sc-result-box">
      <div class="sc-result-label">미완료 항목</div>
      <div class="sc-result-value" style="color: #ef4444">{{ totalItems - totalChecked }}개</div>
    </div>
  </div>

  <div v-if="uncheckedItems.length > 0" class="sc-unchecked-summary">
    <h4>⚠️ 미완료 항목 요약</h4>
    <div v-for="group in uncheckedItems" :key="group.title" class="sc-unchecked-group">
      <div class="sc-unchecked-title">{{ group.title }}</div>
      <ul>
        <li v-for="(item, idx) in group.items" :key="idx">{{ item }}</li>
      </ul>
    </div>
  </div>

  <button class="sc-export-btn" @click="exportResult">
    {{ copied ? '✅ 클립보드에 복사됨!' : '📋 결과 내보내기' }}
  </button>
</div>

</div>

<style>
.sc-wrapper {
  max-width: 760px;
  margin: 0 auto;
}

/* Overview */
.sc-overview {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0 2.5rem;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  border: 1px solid var(--vp-c-divider);
}

.sc-circle-wrap {
  position: relative;
  width: 140px;
  height: 140px;
  flex-shrink: 0;
}

.sc-circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.sc-circle-pct {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.2;
}

.sc-circle-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.sc-progress-ring {
  transition: stroke-dashoffset 0.6s ease, stroke 0.3s ease;
}

.sc-overview-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sc-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-weight: 700;
  font-size: 1.1rem;
  border: 1.5px solid;
}

.sc-overview-count {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

/* Cards */
.sc-card {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s;
}

.sc-card:hover {
  border-color: var(--vp-c-brand-1);
}

.sc-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.sc-card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sc-card-title h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  border-top: none;
  padding-top: 0;
}

.sc-card-icon {
  font-size: 1.3rem;
}

.sc-card-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
}

.sc-card-count {
  font-weight: 700;
  font-size: 0.9rem;
}

.sc-card-actions {
  display: flex;
  gap: 0.35rem;
}

.sc-btn-mini {
  padding: 0.2rem 0.55rem;
  font-size: 0.7rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.15s;
}

.sc-btn-mini:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* Progress bar */
.sc-progress-bar-wrap {
  margin-bottom: 1rem;
}

.sc-progress-bar {
  height: 6px;
  background: var(--vp-c-divider);
  border-radius: 99px;
  overflow: hidden;
}

.sc-progress-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 0.4s ease, background 0.3s ease;
  min-width: 0;
}

/* Checklist */
.sc-checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sc-check-item {
  border-radius: 8px;
  transition: background 0.15s;
}

.sc-check-item:hover {
  background: var(--vp-c-bg-mute);
}

.sc-check-label {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 0.75rem;
  cursor: pointer;
  user-select: none;
}

.sc-checkbox {
  display: none;
}

.sc-checkmark {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 2px solid var(--vp-c-divider);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
}

.sc-checkmark::after {
  content: '';
  display: block;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 2.5px 2.5px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s ease;
  margin-top: -2px;
}

.sc-checked .sc-checkmark {
  background: #E87040;
  border-color: #E87040;
}

.sc-checked .sc-checkmark::after {
  transform: rotate(45deg) scale(1);
}

.sc-item-text {
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

.sc-checked .sc-item-text {
  color: var(--vp-c-text-3);
  text-decoration: line-through;
}

/* Results */
.sc-results {
  margin-top: 2.5rem;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.sc-results h3 {
  margin: 0 0 1.25rem;
  border-top: none;
  padding-top: 0;
}

.sc-results-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.sc-result-box {
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 10px;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
}

.sc-result-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.35rem;
}

.sc-result-value {
  font-size: 1.3rem;
  font-weight: 800;
}

.sc-unchecked-summary {
  margin-top: 1.5rem;
  padding: 1.25rem;
  background: #fef3c7;
  border-radius: 10px;
  border: 1px solid #fcd34d;
}

.dark .sc-unchecked-summary {
  background: #422006;
  border-color: #92400e;
}

.sc-unchecked-summary h4 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  border-top: none;
  padding-top: 0;
}

.sc-unchecked-group {
  margin-bottom: 0.75rem;
}

.sc-unchecked-title {
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  color: var(--vp-c-text-1);
}

.sc-unchecked-group ul {
  margin: 0;
  padding-left: 1.25rem;
}

.sc-unchecked-group li {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.sc-export-btn {
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.85rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: #E87040;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.sc-export-btn:hover {
  background: #d4612f;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(232, 112, 64, 0.35);
}

.sc-export-btn:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 640px) {
  .sc-overview {
    flex-direction: column;
    text-align: center;
  }

  .sc-overview-info {
    align-items: center;
  }

  .sc-results-grid {
    grid-template-columns: 1fr 1fr;
  }

  .sc-card-header {
    flex-direction: column;
  }

  .sc-card-meta {
    align-items: flex-start;
    flex-direction: row;
    gap: 0.75rem;
  }
}
</style>
