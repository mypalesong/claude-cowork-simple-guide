# 도입 효과 계산기

> Claude Cowork를 도입하면 우리 팀에 얼마나 큰 효과가 있을까요? 아래 항목을 조정해서 예상 ROI를 확인해보세요.

<script setup>
import { ref, computed } from 'vue'

const teamSize = ref(10)
const monthlySalary = ref(400)
const emailTime = ref(30)
const reportTime = ref(45)
const dataTime = ref(20)
const meetingTime = ref(15)
const subscriptionCost = ref(3)

const REDUCTION_RATE = 0.6
const WORK_DAYS_PER_MONTH = 22
const MONTHS_PER_YEAR = 12

const totalDailyMinutes = computed(() => emailTime.value + reportTime.value + dataTime.value + meetingTime.value)
const savedMinutesPerDay = computed(() => Math.round(totalDailyMinutes.value * REDUCTION_RATE))
const savedHoursPerMonth = computed(() => Math.round(savedMinutesPerDay.value * WORK_DAYS_PER_MONTH * teamSize.value / 60 * 10) / 10)
const savedHoursPerYear = computed(() => Math.round(savedHoursPerMonth.value * MONTHS_PER_YEAR * 10) / 10)

const hourlyRate = computed(() => monthlySalary.value * 10000 / (WORK_DAYS_PER_MONTH * 8))
const annualSaving = computed(() => Math.round(savedHoursPerYear.value * hourlyRate.value))
const annualSavingMan = computed(() => Math.round(annualSaving.value / 10000))

const annualCost = computed(() => subscriptionCost.value * teamSize.value * MONTHS_PER_YEAR)
const netRoi = computed(() => annualSavingMan.value - annualCost.value)
const roiMultiple = computed(() => annualCost.value > 0 ? Math.round(annualSavingMan.value / annualCost.value * 10) / 10 : 0)

const savingBarWidth = computed(() => {
  const total = annualSavingMan.value + annualCost.value
  if (total <= 0) return 50
  return Math.min(95, Math.max(5, Math.round(annualSavingMan.value / total * 100)))
})

const costBarWidth = computed(() => 100 - savingBarWidth.value)

function formatNumber(n) {
  return n.toLocaleString('ko-KR')
}
</script>

<style>
.roi-section {
  margin: 1.5rem 0;
}
.roi-section h3 {
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
}
.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.input-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.input-card label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.input-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.input-row input[type="range"] {
  flex: 1;
  accent-color: #E87040;
  height: 6px;
}
.input-row input[type="number"] {
  width: 80px;
  padding: 0.35rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  text-align: right;
  font-weight: 600;
}
.input-row input[type="number"]:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}
.input-unit {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  min-width: 2.5rem;
}

.result-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.result-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.result-card.highlight {
  border-color: #E87040;
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.06), rgba(232, 112, 64, 0.02));
}
.result-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.result-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}
.result-card.highlight .result-value {
  color: #E87040;
}
.result-sub {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 0.2rem;
}

.bar-container {
  margin: 1.5rem 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
}
.bar-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
  font-weight: 600;
}
.bar-label-cost { color: var(--vp-c-text-3); }
.bar-label-save { color: #E87040; }
.bar-track {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  background: var(--vp-c-bg);
}
.bar-saving {
  background: linear-gradient(90deg, #E87040, #F4A261);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  transition: width 0.4s ease;
  border-radius: 8px 0 0 8px;
}
.bar-cost {
  background: var(--vp-c-bg-alt, #e5e7eb);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  font-weight: 600;
  font-size: 0.85rem;
  transition: width 0.4s ease;
  border-radius: 0 8px 8px 0;
}

.summary-box {
  margin: 1.5rem 0;
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.1), rgba(232, 112, 64, 0.03));
  border: 2px solid #E87040;
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}
.summary-highlight {
  color: #E87040;
  font-weight: 800;
}

.section-divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 2rem 0;
}

.note-text {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 1rem;
  text-align: center;
}
</style>

## 입력 항목

<div class="roi-section">

### 팀 규모 & 비용

<div class="input-grid">
  <div class="input-card">
    <label>팀 인원수</label>
    <div class="input-row">
      <input type="range" v-model.number="teamSize" min="1" max="200" step="1" />
      <input type="number" v-model.number="teamSize" min="1" max="500" />
      <span class="input-unit">명</span>
    </div>
  </div>
  <div class="input-card">
    <label>1인당 월 급여</label>
    <div class="input-row">
      <input type="range" v-model.number="monthlySalary" min="200" max="1500" step="10" />
      <input type="number" v-model.number="monthlySalary" min="100" max="5000" />
      <span class="input-unit">만원</span>
    </div>
  </div>
  <div class="input-card">
    <label>월 구독 비용 (1인당)</label>
    <div class="input-row">
      <input type="range" v-model.number="subscriptionCost" min="1" max="30" step="0.5" />
      <input type="number" v-model.number="subscriptionCost" min="0" max="100" step="0.5" />
      <span class="input-unit">만원/인</span>
    </div>
  </div>
</div>

### 업무 시간 입력

<div class="input-grid">
  <div class="input-card">
    <label>하루 평균 이메일 작성 시간</label>
    <div class="input-row">
      <input type="range" v-model.number="emailTime" min="0" max="120" step="5" />
      <input type="number" v-model.number="emailTime" min="0" max="480" />
      <span class="input-unit">분</span>
    </div>
  </div>
  <div class="input-card">
    <label>하루 평균 보고서/문서 작성 시간</label>
    <div class="input-row">
      <input type="range" v-model.number="reportTime" min="0" max="180" step="5" />
      <input type="number" v-model.number="reportTime" min="0" max="480" />
      <span class="input-unit">분</span>
    </div>
  </div>
  <div class="input-card">
    <label>하루 평균 데이터 정리 시간</label>
    <div class="input-row">
      <input type="range" v-model.number="dataTime" min="0" max="120" step="5" />
      <input type="number" v-model.number="dataTime" min="0" max="480" />
      <span class="input-unit">분</span>
    </div>
  </div>
  <div class="input-card">
    <label>하루 평균 회의록 정리 시간</label>
    <div class="input-row">
      <input type="range" v-model.number="meetingTime" min="0" max="120" step="5" />
      <input type="number" v-model.number="meetingTime" min="0" max="480" />
      <span class="input-unit">분</span>
    </div>
  </div>
</div>

</div>

<hr class="section-divider" />

## 예상 절약 효과

<div class="roi-section">

<div class="result-cards">
  <div class="result-card">
    <div class="result-label">1인 일일 절약 시간</div>
    <div class="result-value">{{ savedMinutesPerDay }}분</div>
    <div class="result-sub">{{ totalDailyMinutes }}분 중 60% 절감</div>
  </div>
  <div class="result-card">
    <div class="result-label">팀 월간 절약 시간</div>
    <div class="result-value">{{ formatNumber(savedHoursPerMonth) }}시간</div>
    <div class="result-sub">{{ teamSize }}명 x {{ WORK_DAYS_PER_MONTH }}일 기준</div>
  </div>
  <div class="result-card">
    <div class="result-label">팀 연간 절약 시간</div>
    <div class="result-value">{{ formatNumber(savedHoursPerYear) }}시간</div>
    <div class="result-sub">12개월 합산</div>
  </div>
  <div class="result-card highlight">
    <div class="result-label">인건비 환산 절약액 (연간)</div>
    <div class="result-value">{{ formatNumber(annualSavingMan) }}만원</div>
    <div class="result-sub">시급 {{ formatNumber(Math.round(hourlyRate)) }}원 기준</div>
  </div>
  <div class="result-card">
    <div class="result-label">구독 비용 (연간)</div>
    <div class="result-value">{{ formatNumber(annualCost) }}만원</div>
    <div class="result-sub">{{ subscriptionCost }}만원 x {{ teamSize }}명 x 12개월</div>
  </div>
  <div class="result-card highlight">
    <div class="result-label">순 ROI (절약 - 비용)</div>
    <div class="result-value">{{ formatNumber(netRoi) }}만원</div>
    <div class="result-sub">연간 순이익</div>
  </div>
  <div class="result-card highlight">
    <div class="result-label">ROI 배수</div>
    <div class="result-value">{{ roiMultiple }}배</div>
    <div class="result-sub">절약액 / 투자비용</div>
  </div>
</div>

</div>

<hr class="section-divider" />

## 투자 vs 절약

<div class="bar-container">
  <div class="bar-labels">
    <span class="bar-label-save">절약액: {{ formatNumber(annualSavingMan) }}만원</span>
    <span class="bar-label-cost">투자 비용: {{ formatNumber(annualCost) }}만원</span>
  </div>
  <div class="bar-track">
    <div class="bar-saving" :style="{ width: savingBarWidth + '%' }">
      절약 {{ formatNumber(annualSavingMan) }}만원
    </div>
    <div class="bar-cost" :style="{ width: costBarWidth + '%' }">
      비용 {{ formatNumber(annualCost) }}만원
    </div>
  </div>
</div>

<div class="summary-box">
  팀원 <span class="summary-highlight">{{ teamSize }}명</span> 기준, 연간 약
  <span class="summary-highlight">{{ formatNumber(netRoi) }}만원</span> 절약 효과
  (ROI <span class="summary-highlight">{{ roiMultiple }}배</span>)
</div>

<p class="note-text">
  * 절감률 60%는 Anthropic 내부 사용 데이터 및 업계 평균 기반 추정치입니다. 실제 효과는 업무 유형과 활용 수준에 따라 달라질 수 있습니다.
</p>
