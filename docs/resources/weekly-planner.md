# 주간 AI 활용 플래너

> 이번 주에 Claude를 어떻게 활용할지 계획해보세요. 예상 절약 시간도 자동으로 계산됩니다!

<script setup>
import { ref, computed } from 'vue'

const TASKS = [
  { id: 'email', name: '이메일 작성', minutes: 15, color: '#E86B4F' },
  { id: 'report', name: '보고서 작성', minutes: 30, color: '#D4A843' },
  { id: 'data', name: '데이터 분석', minutes: 25, color: '#5B9BD5' },
  { id: 'meeting', name: '회의록 정리', minutes: 20, color: '#70AD47' },
  { id: 'translate', name: '번역', minutes: 15, color: '#9B59B6' },
  { id: 'research', name: '자료 조사', minutes: 20, color: '#1ABC9C' },
  { id: 'proposal', name: '기획서 작성', minutes: 35, color: '#E67E22' },
  { id: 'notice', name: '공지/안내문', minutes: 10, color: '#3498DB' },
  { id: 'feedback', name: '피드백 작성', minutes: 15, color: '#E84393' },
  { id: 'presentation', name: '프레젠테이션 준비', minutes: 25, color: '#6C5CE7' },
]

const DAYS = ['월', '화', '수', '목', '금']
const DAY_FULL = ['월요일', '화요일', '수요일', '목요일', '금요일']

const weekPlan = ref(DAYS.map(() => []))
const selectedTask = ref(DAYS.map(() => ''))
const copied = ref(false)

function addTask(dayIndex) {
  const taskId = selectedTask.value[dayIndex]
  if (!taskId) return
  const task = TASKS.find(t => t.id === taskId)
  if (task) {
    weekPlan.value[dayIndex].push({ ...task, uid: Date.now() + Math.random() })
    selectedTask.value[dayIndex] = ''
  }
}

function removeTask(dayIndex, uid) {
  weekPlan.value[dayIndex] = weekPlan.value[dayIndex].filter(t => t.uid !== uid)
}

function resetAll() {
  weekPlan.value = DAYS.map(() => [])
  selectedTask.value = DAYS.map(() => '')
  copied.value = false
}

const allTasks = computed(() => weekPlan.value.flat())

const totalCount = computed(() => allTasks.value.length)

const totalMinutes = computed(() => allTasks.value.reduce((s, t) => s + t.minutes, 0))

const avgMinutes = computed(() => {
  const daysWithTasks = weekPlan.value.filter(d => d.length > 0).length
  return daysWithTasks > 0 ? Math.round(totalMinutes.value / daysWithTasks) : 0
})

const totalHours = computed(() => Math.floor(totalMinutes.value / 60))
const remainMinutes = computed(() => totalMinutes.value % 60)

const timeLabel = computed(() => {
  if (totalHours.value > 0 && remainMinutes.value > 0) return `${totalHours.value}시간 ${remainMinutes.value}분`
  if (totalHours.value > 0) return `${totalHours.value}시간`
  return `${totalMinutes.value}분`
})

const funFacts = computed(() => {
  const m = totalMinutes.value
  const facts = []
  if (m >= 30) facts.push(`☕ 커피 브레이크 ${Math.floor(m / 15)}번`)
  if (m >= 40) facts.push(`📖 책 ${Math.floor(m / 40)}장 읽기`)
  if (m >= 30) facts.push(`🚶 산책 ${Math.floor(m / 20)}번`)
  if (m >= 60) facts.push(`🏋️ 운동 ${Math.floor(m / 40)}회`)
  if (m >= 20) facts.push(`🧘 명상 ${Math.floor(m / 10)}회`)
  return facts.length > 0 ? facts.slice(0, 3) : ['아직 계획된 작업이 없습니다']
})

const topTasks = computed(() => {
  const counts = {}
  allTasks.value.forEach(t => {
    counts[t.id] = counts[t.id] || { name: t.name, color: t.color, count: 0 }
    counts[t.id].count++
  })
  return Object.values(counts).sort((a, b) => b.count - a.count).slice(0, 3)
})

function dayMinutes(dayIndex) {
  return weekPlan.value[dayIndex].reduce((s, t) => s + t.minutes, 0)
}

async function copyPlan() {
  let text = '📋 주간 AI 활용 플랜\n' + '='.repeat(30) + '\n\n'
  DAYS.forEach((day, i) => {
    text += `【${DAY_FULL[i]}】\n`
    if (weekPlan.value[i].length === 0) {
      text += '  (계획 없음)\n'
    } else {
      weekPlan.value[i].forEach(t => {
        text += `  • ${t.name} (절약: ${t.minutes}분)\n`
      })
      text += `  → 소계: ${dayMinutes(i)}분 절약\n`
    }
    text += '\n'
  })
  text += '='.repeat(30) + '\n'
  text += `총 AI 활용: ${totalCount.value}회\n`
  text += `총 절약 시간: ${timeLabel.value}\n`
  text += `하루 평균: ${avgMinutes.value}분\n`

  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (e) {
    console.error(e)
  }
}
</script>

<div class="planner-wrapper">

<div class="planner-grid">
  <div v-for="(day, di) in DAYS" :key="day" class="day-column">
    <div class="day-header">
      <span class="day-label">{{ DAY_FULL[di] }}</span>
      <span class="day-saved" v-if="dayMinutes(di) > 0">{{ dayMinutes(di) }}분 절약</span>
    </div>
    <div class="day-body">
      <div class="task-chips">
        <span
          v-for="task in weekPlan[di]"
          :key="task.uid"
          class="task-chip"
          :style="{ backgroundColor: task.color + '20', borderColor: task.color, color: task.color }"
        >
          {{ task.name }}
          <span class="chip-time">{{ task.minutes }}분</span>
          <button class="chip-remove" @click="removeTask(di, task.uid)" :style="{ color: task.color }">✕</button>
        </span>
      </div>
      <div class="add-row">
        <select v-model="selectedTask[di]" class="task-select">
          <option value="" disabled>업무 선택...</option>
          <option v-for="t in TASKS" :key="t.id" :value="t.id">{{ t.name }} ({{ t.minutes }}분)</option>
        </select>
        <button class="add-btn" @click="addTask(di)" :disabled="!selectedTask[di]">+ 추가</button>
      </div>
    </div>
  </div>
</div>

<div class="summary-section" v-if="totalCount > 0">
  <h3 class="summary-title">📊 주간 요약</h3>
  <div class="summary-cards">
    <div class="summary-card">
      <div class="card-value">{{ totalCount }}회</div>
      <div class="card-label">주간 총 AI 활용 횟수</div>
    </div>
    <div class="summary-card accent">
      <div class="card-value">{{ timeLabel }}</div>
      <div class="card-label">주간 총 절약 시간</div>
    </div>
    <div class="summary-card">
      <div class="card-value">{{ avgMinutes }}분</div>
      <div class="card-label">하루 평균 절약 시간</div>
    </div>
  </div>

  <div class="summary-extras">
    <div class="extra-box">
      <h4>이번 주 절약 시간으로 할 수 있는 것</h4>
      <ul class="fun-list">
        <li v-for="(fact, i) in funFacts" :key="i">{{ fact }}</li>
      </ul>
    </div>
    <div class="extra-box" v-if="topTasks.length > 0">
      <h4>가장 많이 활용하는 업무 Top 3</h4>
      <div class="top-tasks">
        <div v-for="(t, i) in topTasks" :key="i" class="top-task-row">
          <span class="top-rank">{{ i + 1 }}</span>
          <span class="top-bar" :style="{ backgroundColor: t.color, width: (t.count / topTasks[0].count * 100) + '%' }"></span>
          <span class="top-name">{{ t.name }}</span>
          <span class="top-count">{{ t.count }}회</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="planner-actions">
  <button class="action-btn copy-btn" @click="copyPlan" :disabled="totalCount === 0">
    {{ copied ? '✓ 복사 완료!' : '📋 플랜 복사하기' }}
  </button>
  <button class="action-btn reset-btn" @click="resetAll">🔄 초기화</button>
</div>

</div>

<style>
.planner-wrapper {
  margin-top: 1.5rem;
}

.planner-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-bottom: 2rem;
}

@media (max-width: 900px) {
  .planner-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .planner-grid {
    grid-template-columns: 1fr;
  }
}

.day-column {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
}

.day-header {
  background: linear-gradient(135deg, #E86B4F, #D4A843);
  color: #fff;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-label {
  font-weight: 700;
  font-size: 0.95rem;
}

.day-saved {
  font-size: 0.72rem;
  background: rgba(255,255,255,0.25);
  padding: 2px 7px;
  border-radius: 8px;
}

.day-body {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 140px;
}

.task-chips {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 8px;
}

.task-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 10px;
  border-radius: 16px;
  font-size: 0.78rem;
  font-weight: 600;
  border: 1.5px solid;
  line-height: 1.3;
  flex-wrap: wrap;
}

.chip-time {
  font-size: 0.68rem;
  opacity: 0.75;
  font-weight: 400;
}

.chip-remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0 2px;
  margin-left: auto;
  font-weight: 700;
  opacity: 0.7;
  transition: opacity 0.15s;
}

.chip-remove:hover {
  opacity: 1;
}

.add-row {
  display: flex;
  gap: 4px;
  margin-top: auto;
}

.task-select {
  flex: 1;
  padding: 5px 6px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  font-size: 0.75rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  min-width: 0;
}

.add-btn {
  padding: 5px 10px;
  background: #E86B4F;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s;
}

.add-btn:hover:not(:disabled) {
  background: #d45a3f;
}

.add-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.summary-section {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 1.5rem;
}

.summary-title {
  margin: 0 0 16px 0;
  font-size: 1.15rem;
  border: none;
  padding: 0;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}

@media (max-width: 560px) {
  .summary-cards {
    grid-template-columns: 1fr;
  }
}

.summary-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 16px;
  text-align: center;
}

.summary-card.accent {
  border-color: #E86B4F;
  background: linear-gradient(135deg, rgba(232,107,79,0.08), rgba(212,168,67,0.08));
}

.card-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: #E86B4F;
  margin-bottom: 4px;
}

.card-label {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}

.summary-extras {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 640px) {
  .summary-extras {
    grid-template-columns: 1fr;
  }
}

.extra-box {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 16px;
}

.extra-box h4 {
  margin: 0 0 10px 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}

.fun-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.fun-list li {
  padding: 4px 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
}

.top-tasks {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.top-task-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.top-rank {
  font-weight: 800;
  font-size: 0.85rem;
  color: #E86B4F;
  min-width: 18px;
  text-align: center;
}

.top-bar {
  height: 8px;
  border-radius: 4px;
  min-width: 12px;
  transition: width 0.3s;
}

.top-name {
  font-size: 0.82rem;
  white-space: nowrap;
  color: var(--vp-c-text-1);
}

.top-count {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-left: auto;
  white-space: nowrap;
}

.planner-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 10px 22px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}

.copy-btn {
  background: #E86B4F;
  color: #fff;
}

.copy-btn:hover:not(:disabled) {
  background: #d45a3f;
}

.copy-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.reset-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.reset-btn:hover {
  border-color: #E86B4F;
  color: #E86B4F;
}
</style>
