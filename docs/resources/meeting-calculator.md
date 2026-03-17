# 회의 비용 계산기

> 회의는 생각보다 비쌉니다. 실제 비용을 계산하고, Claude로 얼마나 절약할 수 있는지 확인하세요.

<script setup>
import { ref, computed } from 'vue'

const attendees = ref(6)
const meetingMinutes = ref(60)
const annualSalaryMan = ref(5000)
const weeklyMeetings = ref(3)
const prepMinutes = ref(15)
const followUpMinutes = ref(20)

const WORK_DAYS_PER_YEAR = 260
const WORK_HOURS_PER_DAY = 8
const WEEKS_PER_YEAR = 52
const WEEKS_PER_MONTH = 4.33

const PREP_SAVING = 0.70
const FOLLOWUP_SAVING = 0.80
const MEETING_SAVING = 0.20

const hourlyRate = computed(() => annualSalaryMan.value * 10000 / (WORK_DAYS_PER_YEAR * WORK_HOURS_PER_DAY))

const meetingOnlyCost = computed(() => Math.round(attendees.value * (meetingMinutes.value / 60) * hourlyRate.value))

const prepCostPerMeeting = computed(() => Math.round(attendees.value * (prepMinutes.value / 60) * hourlyRate.value))
const followUpCostPerMeeting = computed(() => Math.round(attendees.value * (followUpMinutes.value / 60) * hourlyRate.value))

const totalPerMeeting = computed(() => meetingOnlyCost.value + prepCostPerMeeting.value + followUpCostPerMeeting.value)

const monthlyCost = computed(() => Math.round(totalPerMeeting.value * weeklyMeetings.value * WEEKS_PER_MONTH))
const annualCost = computed(() => Math.round(totalPerMeeting.value * weeklyMeetings.value * WEEKS_PER_YEAR))
const annualCostMan = computed(() => Math.round(annualCost.value / 10000))

const prepSaved = computed(() => Math.round(prepCostPerMeeting.value * PREP_SAVING * weeklyMeetings.value * WEEKS_PER_YEAR))
const followUpSaved = computed(() => Math.round(followUpCostPerMeeting.value * FOLLOWUP_SAVING * weeklyMeetings.value * WEEKS_PER_YEAR))
const meetingTimeSaved = computed(() => Math.round(meetingOnlyCost.value * MEETING_SAVING * weeklyMeetings.value * WEEKS_PER_YEAR))

const totalAnnualSaving = computed(() => prepSaved.value + followUpSaved.value + meetingTimeSaved.value)
const totalAnnualSavingMan = computed(() => Math.round(totalAnnualSaving.value / 10000))

const costAfterSaving = computed(() => annualCost.value - totalAnnualSaving.value)

const savingPercent = computed(() => {
  if (annualCost.value <= 0) return 0
  return Math.round(totalAnnualSaving.value / annualCost.value * 100)
})

const costBarWidth = computed(() => {
  if (annualCost.value <= 0) return 50
  const remaining = annualCost.value - totalAnnualSaving.value
  return Math.min(95, Math.max(5, Math.round(remaining / annualCost.value * 100)))
})
const savingBarWidth = computed(() => 100 - costBarWidth.value)

const equivalentSalaries = computed(() => {
  if (annualSalaryMan.value <= 0) return 0
  return Math.round(totalAnnualSavingMan.value / annualSalaryMan.value * 10) / 10
})
const equivalentWorkshops = computed(() => {
  const workshopCost = 300
  return Math.round(totalAnnualSavingMan.value / workshopCost)
})
const equivalentVacationDays = computed(() => {
  const dailyCost = annualSalaryMan.value * 10000 / WORK_DAYS_PER_YEAR
  if (dailyCost <= 0) return 0
  return Math.round(totalAnnualSaving.value / dailyCost)
})

const meetingCostPercent = computed(() => {
  const totalTeamSalary = annualSalaryMan.value * 10000 * attendees.value
  if (totalTeamSalary <= 0) return 0
  return Math.round(annualCost.value / totalTeamSalary * 100)
})

const pieGradient = computed(() => {
  const pct = Math.min(meetingCostPercent.value, 100)
  return `conic-gradient(#e74c3c 0% ${pct}%, var(--vp-c-bg-alt, #e5e7eb) ${pct}% 100%)`
})

const copied = ref(false)

function fmt(n) {
  return n.toLocaleString('ko-KR')
}

function fmtMan(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + '억'
  return fmt(n) + '만'
}

function copyReport() {
  const text = `📊 회의 비용 분석 보고서
━━━━━━━━━━━━━━━━━━━━━━━

■ 회의 조건
• 참석자: ${attendees.value}명
• 회의 시간: ${meetingMinutes.value}분
• 준비 시간: ${prepMinutes.value}분 / 정리 시간: ${followUpMinutes.value}분
• 주간 회의 횟수: ${weeklyMeetings.value}회
• 참석자 평균 연봉: ${fmt(annualSalaryMan.value)}만원

■ 현재 회의 비용
• 회의 1회 비용: ${fmt(totalPerMeeting.value)}원
• 월간 회의 비용: ${fmt(monthlyCost.value)}원
• 연간 회의 비용: ${fmt(annualCost.value)}원 (${fmtMan(annualCostMan.value)}원)
• 참석자 인건비 대비 회의 비용: ${meetingCostPercent.value}%

■ Claude 도입 시 절약 효과
• 안건 준비 절약 (-70%): ${fmt(prepSaved.value)}원/년
• 회의록 정리 절약 (-80%): ${fmt(followUpSaved.value)}원/년
• 회의 시간 단축 (-20%): ${fmt(meetingTimeSaved.value)}원/년
• 총 연간 절약액: ${fmt(totalAnnualSaving.value)}원 (${fmtMan(totalAnnualSavingMan.value)}원)
• 절약 비율: ${savingPercent.value}%

■ 절약액으로 할 수 있는 것
• 직원 ${equivalentSalaries.value}명 연봉에 해당
• 팀 워크숍 ${equivalentWorkshops.value}회 개최 가능
• 유급 휴가 ${equivalentVacationDays.value}일에 해당

━━━━━━━━━━━━━━━━━━━━━━━
Claude Cowork 도입으로 회의 비용을 ${savingPercent.value}% 절감할 수 있습니다.`

  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  })
}
</script>

<style>
.mc-section {
  margin: 1.5rem 0;
}
.mc-section h3 {
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
}
.mc-input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.mc-input-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.mc-input-card label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}
.mc-input-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.mc-input-row input[type="range"] {
  flex: 1;
  accent-color: #E87040;
  height: 6px;
}
.mc-input-row input[type="number"] {
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
.mc-input-row input[type="number"]:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}
.mc-unit {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  min-width: 2.5rem;
}

.mc-shock-banner {
  margin: 2rem 0;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 2px solid #e74c3c;
  position: relative;
  overflow: hidden;
}
.mc-shock-banner::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(231, 76, 60, 0.1) 0%, transparent 70%);
  pointer-events: none;
}
.mc-shock-label {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.mc-shock-number {
  font-size: 3.5rem;
  font-weight: 900;
  color: #e74c3c;
  line-height: 1.1;
  text-shadow: 0 0 40px rgba(231, 76, 60, 0.4);
  letter-spacing: -1px;
}
.mc-shock-sub {
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 0.5rem;
}

.mc-result-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.mc-result-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.mc-result-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.mc-result-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.mc-result-value {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.2;
}
.mc-result-value.cost {
  color: #e74c3c;
}
.mc-result-value.saving {
  color: #27ae60;
}
.mc-result-value.accent {
  color: #E87040;
}
.mc-result-sub {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 0.3rem;
}

.mc-saving-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.mc-saving-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
}
.mc-saving-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #27ae60;
}
.mc-saving-title {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.3rem;
}
.mc-saving-rate {
  font-size: 1.5rem;
  font-weight: 900;
  color: #27ae60;
}
.mc-saving-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 0.2rem;
}
.mc-saving-amount {
  font-size: 0.85rem;
  font-weight: 600;
  color: #27ae60;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.mc-total-saving {
  margin: 2rem 0;
  background: linear-gradient(135deg, #0a2e1a, #1a4a2e);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 2px solid #27ae60;
  position: relative;
  overflow: hidden;
}
.mc-total-saving::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(39, 174, 96, 0.1) 0%, transparent 70%);
  pointer-events: none;
}
.mc-total-saving .mc-shock-label { color: #8edaaa; }
.mc-total-saving .mc-shock-number {
  color: #27ae60;
  text-shadow: 0 0 40px rgba(39, 174, 96, 0.4);
}
.mc-total-saving .mc-shock-sub { color: #8edaaa; }

.mc-chart-section {
  margin: 1.5rem 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
}
.mc-chart-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}
.mc-bar-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  gap: 0.8rem;
}
.mc-bar-label {
  width: 80px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-align: right;
  flex-shrink: 0;
}
.mc-bar-track {
  flex: 1;
  height: 32px;
  background: var(--vp-c-bg);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.mc-bar-fill {
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  transition: width 0.5s ease;
  min-width: fit-content;
  white-space: nowrap;
}
.mc-bar-fill.cost-bar {
  background: linear-gradient(90deg, #e74c3c, #c0392b);
}
.mc-bar-fill.saving-bar {
  background: linear-gradient(90deg, #27ae60, #2ecc71);
}
.mc-bar-fill.after-bar {
  background: linear-gradient(90deg, #E87040, #F4A261);
}

.mc-pie-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}
.mc-pie {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.mc-pie-inner {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.mc-pie-pct {
  font-size: 1.8rem;
  font-weight: 900;
  color: #e74c3c;
  line-height: 1;
}
.mc-pie-label {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin-top: 0.2rem;
}
.mc-pie-legend {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.mc-legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.mc-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  flex-shrink: 0;
}

.mc-equiv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}
.mc-equiv-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
}
.mc-equiv-icon {
  font-size: 2rem;
  margin-bottom: 0.4rem;
}
.mc-equiv-value {
  font-size: 1.5rem;
  font-weight: 900;
  color: #E87040;
}
.mc-equiv-label {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-top: 0.2rem;
}

.mc-copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem auto;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #E87040, #F4A261);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  box-shadow: 0 4px 14px rgba(232, 112, 64, 0.3);
}
.mc-copy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 112, 64, 0.4);
}
.mc-copy-btn:active {
  transform: translateY(0);
}
.mc-copy-btn.copied {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  box-shadow: 0 4px 14px rgba(39, 174, 96, 0.3);
}

.mc-divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 2rem 0;
}

.mc-note {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 1rem;
  text-align: center;
}
</style>

## 회의 조건 입력

<div class="mc-section">

### 참석자 & 비용

<div class="mc-input-grid">
  <div class="mc-input-card">
    <label>참석자 수</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="attendees" min="2" max="20" step="1" />
      <input type="number" v-model.number="attendees" min="2" max="50" />
      <span class="mc-unit">명</span>
    </div>
  </div>
  <div class="mc-input-card">
    <label>회의 시간</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="meetingMinutes" min="15" max="120" step="5" />
      <input type="number" v-model.number="meetingMinutes" min="5" max="480" />
      <span class="mc-unit">분</span>
    </div>
  </div>
  <div class="mc-input-card">
    <label>참석자 평균 연봉</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="annualSalaryMan" min="2000" max="15000" step="100" />
      <input type="number" v-model.number="annualSalaryMan" min="1000" max="50000" />
      <span class="mc-unit">만원</span>
    </div>
  </div>
</div>

### 회의 빈도 & 부대 시간

<div class="mc-input-grid">
  <div class="mc-input-card">
    <label>주간 회의 횟수</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="weeklyMeetings" min="1" max="15" step="1" />
      <input type="number" v-model.number="weeklyMeetings" min="1" max="30" />
      <span class="mc-unit">회/주</span>
    </div>
  </div>
  <div class="mc-input-card">
    <label>회의 전 준비 시간</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="prepMinutes" min="0" max="60" step="5" />
      <input type="number" v-model.number="prepMinutes" min="0" max="120" />
      <span class="mc-unit">분</span>
    </div>
  </div>
  <div class="mc-input-card">
    <label>회의 후 정리 시간</label>
    <div class="mc-input-row">
      <input type="range" v-model.number="followUpMinutes" min="0" max="60" step="5" />
      <input type="number" v-model.number="followUpMinutes" min="0" max="120" />
      <span class="mc-unit">분</span>
    </div>
  </div>
</div>

</div>

<hr class="mc-divider" />

## 현재 회의 비용

<div class="mc-section">

<div class="mc-result-cards">
  <div class="mc-result-card">
    <div class="mc-result-label">회의만의 비용 (1회)</div>
    <div class="mc-result-value cost">{{ fmt(meetingOnlyCost) }}원</div>
    <div class="mc-result-sub">{{ attendees }}명 × {{ meetingMinutes }}분</div>
  </div>
  <div class="mc-result-card">
    <div class="mc-result-label">준비+정리 포함 총 비용 (1회)</div>
    <div class="mc-result-value cost">{{ fmt(totalPerMeeting) }}원</div>
    <div class="mc-result-sub">준비 {{ prepMinutes }}분 + 정리 {{ followUpMinutes }}분 포함</div>
  </div>
  <div class="mc-result-card">
    <div class="mc-result-label">월간 회의 비용</div>
    <div class="mc-result-value cost">{{ fmt(monthlyCost) }}원</div>
    <div class="mc-result-sub">주 {{ weeklyMeetings }}회 × 4.33주</div>
  </div>
</div>

</div>

<div class="mc-shock-banner">
  <div class="mc-shock-label">연간 회의 비용</div>
  <div class="mc-shock-number">{{ fmt(annualCost) }}원</div>
  <div class="mc-shock-sub">{{ fmtMan(annualCostMan) }}원 — 참석자 인건비의 <strong>{{ meetingCostPercent }}%</strong>가 회의에 사용됩니다</div>
</div>

<hr class="mc-divider" />

## 인건비 대비 회의 비용 비율

<div class="mc-section">

<div class="mc-pie-section">
  <div class="mc-pie" :style="{ background: pieGradient }">
    <div class="mc-pie-inner">
      <div class="mc-pie-pct">{{ meetingCostPercent }}%</div>
      <div class="mc-pie-label">회의 비용</div>
    </div>
  </div>
  <div class="mc-pie-legend">
    <div class="mc-legend-item">
      <div class="mc-legend-dot" style="background: #e74c3c;"></div>
      <span>회의 비용: {{ fmtMan(annualCostMan) }}원</span>
    </div>
    <div class="mc-legend-item">
      <div class="mc-legend-dot" style="background: var(--vp-c-bg-alt, #e5e7eb);"></div>
      <span>기타 업무 시간</span>
    </div>
  </div>
</div>

</div>

<hr class="mc-divider" />

## Claude 도입 절약 효과

<div class="mc-section">

<div class="mc-saving-grid">
  <div class="mc-saving-card">
    <div class="mc-saving-title">안건 준비</div>
    <div class="mc-saving-rate">-70%</div>
    <div class="mc-saving-desc">Claude가 안건 초안, 자료 요약, 논점 정리를 자동화</div>
    <div class="mc-saving-amount">연간 {{ fmt(prepSaved) }}원 절약</div>
  </div>
  <div class="mc-saving-card">
    <div class="mc-saving-title">회의록 정리</div>
    <div class="mc-saving-rate">-80%</div>
    <div class="mc-saving-desc">회의 내용을 즉시 구조화된 회의록으로 변환</div>
    <div class="mc-saving-amount">연간 {{ fmt(followUpSaved) }}원 절약</div>
  </div>
  <div class="mc-saving-card">
    <div class="mc-saving-title">회의 시간 단축</div>
    <div class="mc-saving-rate">-20%</div>
    <div class="mc-saving-desc">체계적 안건과 실시간 정리로 더 효율적인 회의</div>
    <div class="mc-saving-amount">연간 {{ fmt(meetingTimeSaved) }}원 절약</div>
  </div>
</div>

</div>

<div class="mc-total-saving">
  <div class="mc-shock-label">Claude로 연간 절약 가능 금액</div>
  <div class="mc-shock-number">{{ fmt(totalAnnualSaving) }}원</div>
  <div class="mc-shock-sub">현재 회의 비용의 <strong>{{ savingPercent }}%</strong> 절감</div>
</div>

<hr class="mc-divider" />

## 비용 vs 절약 비교

<div class="mc-chart-section">
  <div class="mc-chart-title">연간 비용 비교</div>
  <div class="mc-bar-row">
    <div class="mc-bar-label">현재 비용</div>
    <div class="mc-bar-track">
      <div class="mc-bar-fill cost-bar" style="width: 100%;">{{ fmtMan(annualCostMan) }}원</div>
    </div>
  </div>
  <div class="mc-bar-row">
    <div class="mc-bar-label">절약액</div>
    <div class="mc-bar-track">
      <div class="mc-bar-fill saving-bar" :style="{ width: savingPercent + '%' }">{{ fmtMan(totalAnnualSavingMan) }}원</div>
    </div>
  </div>
  <div class="mc-bar-row">
    <div class="mc-bar-label">도입 후</div>
    <div class="mc-bar-track">
      <div class="mc-bar-fill after-bar" :style="{ width: (100 - savingPercent) + '%' }">{{ fmtMan(Math.round(costAfterSaving / 10000)) }}원</div>
    </div>
  </div>
</div>

<hr class="mc-divider" />

## 이 돈으로 할 수 있는 것

<div class="mc-equiv-grid">
  <div class="mc-equiv-card">
    <div class="mc-equiv-icon">👤</div>
    <div class="mc-equiv-value">{{ equivalentSalaries }}명</div>
    <div class="mc-equiv-label">직원 연봉에 해당</div>
  </div>
  <div class="mc-equiv-card">
    <div class="mc-equiv-icon">🏕️</div>
    <div class="mc-equiv-value">{{ equivalentWorkshops }}회</div>
    <div class="mc-equiv-label">팀 워크숍 개최 가능 (300만원/회)</div>
  </div>
  <div class="mc-equiv-card">
    <div class="mc-equiv-icon">🌴</div>
    <div class="mc-equiv-value">{{ equivalentVacationDays }}일</div>
    <div class="mc-equiv-label">유급 휴가에 해당하는 시간</div>
  </div>
</div>

<hr class="mc-divider" />

<button class="mc-copy-btn" :class="{ copied }" @click="copyReport">
  {{ copied ? '✅ 복사 완료!' : '📋 보고서로 복사' }}
</button>

<p class="mc-note">
  * 시급 계산: 연봉 ÷ (260일 × 8시간). 절감률은 Anthropic 내부 데이터 및 업계 사례 기반 추정치입니다.
</p>
