# AI 포모도로 타이머

> 집중 시간에는 업무를, 쉬는 시간에는 Claude 활용 팁을! 생산성을 극대화하세요.

<script setup>
import { ref, computed, onUnmounted, watch } from 'vue'

const WORK_OPTIONS = [15, 20, 25, 30, 45, 50]
const BREAK_OPTIONS = [3, 5, 10, 15]
const LONG_BREAK_EVERY = 4

const workMinutes = ref(25)
const breakMinutes = ref(5)
const longBreakMinutes = ref(15)
const audioEnabled = ref(true)

const phase = ref('work') // 'work' | 'break' | 'longBreak'
const isRunning = ref(false)
const timeLeft = ref(workMinutes.value * 60)
const pomodoroCount = ref(0)
const totalFocusSec = ref(0)
const totalBreakSec = ref(0)
let intervalId = null

const WORK_SUGGESTIONS = [
  '이메일 3개 답장 작성하기',
  '어제 회의록 정리하기',
  '주간 보고서 초안 작성하기',
  '데이터 파일 하나 분석하기',
  '기획서 목차 잡기',
  '팀원 피드백 작성하기',
  '프레젠테이션 슬라이드 구조 잡기',
  '경쟁사 리서치 정리하기',
]

const BREAK_TIPS = [
  '프롬프트 치트시트를 인쇄해서 책상에 놓아보세요',
  '실력 퀴즈에 도전해보세요',
  '동료에게 유용한 프롬프트를 공유해보세요',
  'Custom Instructions를 업데이트해보세요',
  '새로운 플러그인을 탐색해보세요',
]

const currentSuggestion = ref(randomItem(WORK_SUGGESTIONS))
const currentTip = ref(randomItem(BREAK_TIPS))

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function refreshSuggestion() {
  currentSuggestion.value = randomItem(WORK_SUGGESTIONS)
  currentTip.value = randomItem(BREAK_TIPS)
}

const totalSeconds = computed(() => {
  if (phase.value === 'work') return workMinutes.value * 60
  if (phase.value === 'longBreak') return longBreakMinutes.value * 60
  return breakMinutes.value * 60
})

const progress = computed(() => {
  if (totalSeconds.value === 0) return 0
  return 1 - timeLeft.value / totalSeconds.value
})

const displayMinutes = computed(() => String(Math.floor(timeLeft.value / 60)).padStart(2, '0'))
const displaySeconds = computed(() => String(timeLeft.value % 60).padStart(2, '0'))

const phaseLabel = computed(() => {
  if (phase.value === 'work') return '집중 시간'
  if (phase.value === 'longBreak') return '긴 휴식'
  return '짧은 휴식'
})

const isBreakPhase = computed(() => phase.value !== 'work')

const focusTimeLabel = computed(() => formatDuration(totalFocusSec.value))
const breakTimeLabel = computed(() => formatDuration(totalBreakSec.value))

function formatDuration(sec) {
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  if (h > 0) return `${h}시간 ${m}분`
  return `${m}분`
}

const circumference = 2 * Math.PI * 120
const strokeOffset = computed(() => circumference * (1 - progress.value))

function playBeep() {
  if (!audioEnabled.value) return
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = phase.value === 'work' ? 660 : 440
    osc.type = 'sine'
    gain.gain.value = 0.3
    osc.start()
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8)
    osc.stop(ctx.currentTime + 0.8)
  } catch (e) {}
}

function tick() {
  if (timeLeft.value <= 0) {
    clearInterval(intervalId)
    intervalId = null
    isRunning.value = false
    playBeep()
    onPhaseEnd()
    return
  }
  timeLeft.value--
  if (phase.value === 'work') {
    totalFocusSec.value++
  } else {
    totalBreakSec.value++
  }
}

function onPhaseEnd() {
  if (phase.value === 'work') {
    pomodoroCount.value++
    if (pomodoroCount.value % LONG_BREAK_EVERY === 0) {
      phase.value = 'longBreak'
      timeLeft.value = longBreakMinutes.value * 60
    } else {
      phase.value = 'break'
      timeLeft.value = breakMinutes.value * 60
    }
  } else {
    phase.value = 'work'
    timeLeft.value = workMinutes.value * 60
  }
  refreshSuggestion()
}

function start() {
  if (isRunning.value) return
  isRunning.value = true
  intervalId = setInterval(tick, 1000)
}

function pause() {
  isRunning.value = false
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

function reset() {
  pause()
  phase.value = 'work'
  timeLeft.value = workMinutes.value * 60
  refreshSuggestion()
}

function resetAll() {
  reset()
  pomodoroCount.value = 0
  totalFocusSec.value = 0
  totalBreakSec.value = 0
}

watch(workMinutes, (v) => {
  if (!isRunning.value && phase.value === 'work') {
    timeLeft.value = v * 60
  }
})

watch(breakMinutes, (v) => {
  if (!isRunning.value && phase.value === 'break') {
    timeLeft.value = v * 60
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style>
.pomo-container {
  max-width: 520px;
  margin: 2rem auto;
  text-align: center;
}

/* Settings */
.pomo-settings {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 2rem;
}
.pomo-setting {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}
.pomo-setting label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
.pomo-setting select {
  padding: 0.25rem 0.4rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
}

/* Timer ring */
.pomo-timer-wrap {
  position: relative;
  width: 280px;
  height: 280px;
  margin: 0 auto 1.5rem;
}
.pomo-timer-svg {
  width: 280px;
  height: 280px;
  transform: rotate(-90deg);
}
.pomo-ring-bg {
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 10;
}
.pomo-ring-fg {
  fill: none;
  stroke-width: 10;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s linear, stroke 0.4s ease;
}
.pomo-ring-work {
  stroke: #E86B4F;
}
.pomo-ring-break {
  stroke: #22C55E;
}
.pomo-timer-inner {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pomo-time {
  font-size: 3.2rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 2px;
  line-height: 1;
}
.pomo-time-work {
  color: #E86B4F;
}
.pomo-time-break {
  color: #22C55E;
}
.pomo-phase {
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.4rem;
}
.pomo-phase-work {
  color: #D95B3F;
}
.pomo-phase-break {
  color: #16A34A;
}

/* Buttons */
.pomo-buttons {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.pomo-btn {
  padding: 0.6rem 1.6rem;
  border-radius: 10px;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.pomo-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 3px 12px rgba(0,0,0,0.12);
}
.pomo-btn-start {
  background: #E86B4F;
  color: #fff;
}
.pomo-btn-start.break-mode {
  background: #22C55E;
}
.pomo-btn-pause {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}
.pomo-btn-reset {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

/* Audio toggle */
.pomo-audio-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
  margin-bottom: 1.5rem;
  user-select: none;
}
.pomo-audio-toggle input {
  accent-color: #E86B4F;
}

/* Stats */
.pomo-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 2rem;
}
.pomo-stat {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 0.5rem;
}
.pomo-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.pomo-stat-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  margin-top: 0.2rem;
}
.pomo-stat-value.work-color { color: #E86B4F; }
.pomo-stat-value.break-color { color: #22C55E; }

/* Suggestion card */
.pomo-suggestion {
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin-top: 1rem;
  text-align: left;
}
.pomo-suggestion-work {
  background: linear-gradient(135deg, rgba(232,107,79,0.08), rgba(232,107,79,0.15));
  border: 1px solid rgba(232,107,79,0.25);
}
.pomo-suggestion-break {
  background: linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.15));
  border: 1px solid rgba(34,197,94,0.25);
}
.pomo-suggestion-title {
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.pomo-suggestion-title.work-color { color: #D95B3F; }
.pomo-suggestion-title.break-color { color: #16A34A; }
.pomo-suggestion-text {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.5;
}
.pomo-refresh {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  text-decoration: underline;
}
.pomo-refresh:hover {
  color: var(--vp-c-text-2);
}

/* Dots */
.pomo-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.pomo-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  transition: all 0.3s;
}
.pomo-dot.filled {
  background: #E86B4F;
  border-color: #E86B4F;
}

/* Reset all */
.pomo-reset-all {
  margin-top: 1rem;
}
.pomo-reset-all button {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;
}
.pomo-reset-all button:hover {
  color: var(--vp-c-text-2);
}
</style>

<div class="pomo-container">

<!-- Settings -->
<div class="pomo-settings">
  <div class="pomo-setting">
    <label>집중</label>
    <select v-model.number="workMinutes" :disabled="isRunning">
      <option v-for="m in WORK_OPTIONS" :key="m" :value="m">{{ m }}분</option>
    </select>
  </div>
  <div class="pomo-setting">
    <label>휴식</label>
    <select v-model.number="breakMinutes" :disabled="isRunning">
      <option v-for="m in BREAK_OPTIONS" :key="m" :value="m">{{ m }}분</option>
    </select>
  </div>
  <div class="pomo-setting">
    <label>긴 휴식</label>
    <select v-model.number="longBreakMinutes" :disabled="isRunning">
      <option v-for="m in [10, 15, 20, 30]" :key="m" :value="m">{{ m }}분</option>
    </select>
  </div>
</div>

<!-- Pomodoro dots (up to 4) -->
<div class="pomo-dots">
  <div v-for="i in 4" :key="i" class="pomo-dot" :class="{ filled: pomodoroCount % 4 >= i }"></div>
</div>

<!-- Timer -->
<div class="pomo-timer-wrap">
  <svg class="pomo-timer-svg" viewBox="0 0 280 280">
    <circle class="pomo-ring-bg" cx="140" cy="140" r="120" />
    <circle
      class="pomo-ring-fg"
      :class="isBreakPhase ? 'pomo-ring-break' : 'pomo-ring-work'"
      cx="140" cy="140" r="120"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="strokeOffset"
    />
  </svg>
  <div class="pomo-timer-inner">
    <div class="pomo-time" :class="isBreakPhase ? 'pomo-time-break' : 'pomo-time-work'">
      {{ displayMinutes }}:{{ displaySeconds }}
    </div>
    <div class="pomo-phase" :class="isBreakPhase ? 'pomo-phase-break' : 'pomo-phase-work'">
      {{ phaseLabel }}
    </div>
  </div>
</div>

<!-- Buttons -->
<div class="pomo-buttons">
  <button v-if="!isRunning" class="pomo-btn pomo-btn-start" :class="{ 'break-mode': isBreakPhase }" @click="start">
    ▶ 시작
  </button>
  <button v-else class="pomo-btn pomo-btn-pause" @click="pause">
    ⏸ 일시정지
  </button>
  <button class="pomo-btn pomo-btn-reset" @click="reset">
    ↻ 리셋
  </button>
</div>

<!-- Audio toggle -->
<label class="pomo-audio-toggle">
  <input type="checkbox" v-model="audioEnabled" />
  알림음 {{ audioEnabled ? 'ON' : 'OFF' }}
</label>

<!-- Stats -->
<div class="pomo-stats">
  <div class="pomo-stat">
    <div class="pomo-stat-value work-color">{{ pomodoroCount }}</div>
    <div class="pomo-stat-label">완료한 포모도로</div>
  </div>
  <div class="pomo-stat">
    <div class="pomo-stat-value work-color">{{ focusTimeLabel }}</div>
    <div class="pomo-stat-label">총 집중 시간</div>
  </div>
  <div class="pomo-stat">
    <div class="pomo-stat-value break-color">{{ breakTimeLabel }}</div>
    <div class="pomo-stat-label">총 휴식 시간</div>
  </div>
</div>

<!-- Suggestion card -->
<div v-if="!isBreakPhase" class="pomo-suggestion pomo-suggestion-work">
  <div class="pomo-suggestion-title work-color">이번 포모도로에서 Claude로 해볼 것:</div>
  <div class="pomo-suggestion-text">{{ currentSuggestion }}</div>
  <button class="pomo-refresh" @click="currentSuggestion = randomItem(WORK_SUGGESTIONS)">다른 추천 보기</button>
</div>
<div v-else class="pomo-suggestion pomo-suggestion-break">
  <div class="pomo-suggestion-title break-color">쉬는 시간 꿀팁:</div>
  <div class="pomo-suggestion-text">{{ currentTip }}</div>
  <button class="pomo-refresh" @click="currentTip = randomItem(BREAK_TIPS)">다른 팁 보기</button>
</div>

<!-- Reset all -->
<div class="pomo-reset-all">
  <button @click="resetAll">오늘 기록 초기화</button>
</div>

</div>
