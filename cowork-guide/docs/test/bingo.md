# Cowork 온보딩 빙고

> 팀 온보딩에 활용하세요! 빙고 칸을 하나씩 완료하면서 Cowork를 마스터하세요.

<script setup>
import { ref, computed, onMounted } from 'vue'

const allTasks = [
  'Claude에게 인사하기',
  '이메일 하나 작성하기',
  '파일 요약 요청하기',
  '톤 변경 요청해보기\n("더 정중하게")',
  '프롬프트에\n배경 설명 넣어보기',
  '표로 정리 요청하기',
  'Custom Instructions\n설정하기',
  '프로젝트 하나 만들기',
  '번역 요청하기',
  '데이터 분석 요청하기',
  '회의록 정리 요청하기',
  '보고서 초안 작성하기',
  '3가지 버전 요청하기',
  '파일 첨부해서 질문하기',
  '프롬프트 치트시트\n인쇄하기',
  '동료에게 팁 공유하기',
  '기초 테스트 시나리오\n완료하기',
  '실력 퀴즈 도전하기',
  '주간 보고서 자동화하기',
  '플러그인 설치하기',
  'MCP 연동 확인하기',
  '워크플로우 레시피\n따라하기',
  '프롬프트 평가기로\n점수 받기',
  'AI 성숙도 평가\n완료하기'
]

const FREE_SPACE_LABEL = '⭐ FREE ⭐\n"이어서" 대화\n활용하기'

const board = ref([])
const completed = ref(new Set())
const bingoLines = ref([])
const showCelebration = ref(false)
const celebrationTimeout = ref(null)

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateBoard() {
  const shuffled = shuffle(allTasks)
  const cells = []
  let idx = 0
  for (let i = 0; i < 25; i++) {
    if (i === 12) {
      cells.push({ id: i, label: FREE_SPACE_LABEL, isFree: true })
    } else {
      cells.push({ id: i, label: shuffled[idx], isFree: false })
      idx++
    }
  }
  return cells
}

function initBoard() {
  board.value = generateBoard()
  completed.value = new Set([12])
  bingoLines.value = []
  showCelebration.value = false
  if (celebrationTimeout.value) clearTimeout(celebrationTimeout.value)
}

function reshuffle() {
  initBoard()
}

function resetBoard() {
  completed.value = new Set([12])
  bingoLines.value = []
  showCelebration.value = false
  if (celebrationTimeout.value) clearTimeout(celebrationTimeout.value)
}

function toggleCell(id) {
  if (id === 12) return
  const next = new Set(completed.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  completed.value = next
  checkBingo()
}

function isCompleted(id) {
  return completed.value.has(id)
}

function isBingoCell(id) {
  return bingoLines.value.some(line => line.includes(id))
}

const completedCount = computed(() => completed.value.size)

const bingoCount = computed(() => bingoLines.value.length)

function checkBingo() {
  const lines = []

  // Rows
  for (let r = 0; r < 5; r++) {
    const row = [r*5, r*5+1, r*5+2, r*5+3, r*5+4]
    if (row.every(i => completed.value.has(i))) lines.push(row)
  }
  // Columns
  for (let c = 0; c < 5; c++) {
    const col = [c, c+5, c+10, c+15, c+20]
    if (col.every(i => completed.value.has(i))) lines.push(col)
  }
  // Diagonals
  const d1 = [0, 6, 12, 18, 24]
  const d2 = [4, 8, 12, 16, 20]
  if (d1.every(i => completed.value.has(i))) lines.push(d1)
  if (d2.every(i => completed.value.has(i))) lines.push(d2)

  const prevCount = bingoLines.value.length
  bingoLines.value = lines

  if (lines.length > prevCount && lines.length > 0) {
    showCelebration.value = true
    if (celebrationTimeout.value) clearTimeout(celebrationTimeout.value)
    celebrationTimeout.value = setTimeout(() => {
      showCelebration.value = false
    }, 3000)
  }
}

onMounted(() => {
  initBoard()
})
</script>

<div class="bingo-wrapper">

<div class="bingo-header">
  <div class="bingo-stats">
    <span class="stat-badge">{{ completedCount }}/25 완료</span>
    <span v-if="bingoCount > 0" class="stat-badge bingo-badge">🎉 {{ bingoCount }}빙고!</span>
  </div>
  <div class="bingo-actions">
    <button class="btn-shuffle" @click="reshuffle">🔀 새로 섞기</button>
    <button class="btn-reset" @click="resetBoard">↩️ 초기화</button>
  </div>
</div>

<div class="bingo-board" :class="{ celebrating: showCelebration }">
  <div class="bingo-label-row">
    <span class="bingo-letter">B</span>
    <span class="bingo-letter">I</span>
    <span class="bingo-letter">N</span>
    <span class="bingo-letter">G</span>
    <span class="bingo-letter">O</span>
  </div>
  <div class="bingo-grid">
    <div
      v-for="cell in board"
      :key="cell.id"
      class="bingo-cell"
      :class="{
        completed: isCompleted(cell.id),
        'free-space': cell.isFree,
        'bingo-line': isBingoCell(cell.id)
      }"
      @click="toggleCell(cell.id)"
    >
      <span class="cell-text">{{ cell.label }}</span>
      <span v-if="isCompleted(cell.id)" class="cell-check">✔</span>
    </div>
  </div>
</div>

<div v-if="showCelebration" class="celebration-overlay">
  <div class="confetti-container">
    <div v-for="n in 50" :key="n" class="confetti-piece" :style="{
      left: Math.random() * 100 + '%',
      animationDelay: Math.random() * 2 + 's',
      animationDuration: (Math.random() * 2 + 2) + 's',
      backgroundColor: ['#E8715A', '#FF9A76', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#EF476F'][n % 7]
    }"></div>
  </div>
  <div class="celebration-text">🎉 빙고! 🎉</div>
</div>

<div class="bingo-footer">
  <p class="bingo-tip">💡 칸을 클릭하면 완료 표시됩니다. 가로, 세로, 대각선 5칸을 완료하면 빙고!</p>
  <button class="btn-print" @click="window.print()">🖨️ 인쇄하기</button>
</div>

</div>

<style scoped>
.bingo-wrapper {
  max-width: 640px;
  margin: 1.5rem auto;
  position: relative;
}

.bingo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bingo-stats {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.stat-badge {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-border);
  color: var(--vp-c-text-1);
}

.bingo-badge {
  background: #FFF3E0;
  border-color: #E8715A;
  color: #E8715A;
}

.bingo-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-shuffle, .btn-reset, .btn-print {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  border: 2px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-shuffle:hover, .btn-reset:hover, .btn-print:hover {
  border-color: #E8715A;
  background: #FFF3E0;
  color: #E8715A;
}

.bingo-board {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 3px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  transition: box-shadow 0.3s ease;
}

.bingo-board.celebrating {
  box-shadow: 0 0 30px rgba(232, 113, 90, 0.4), 0 0 60px rgba(232, 113, 90, 0.2);
}

.bingo-label-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background: linear-gradient(135deg, #E8715A, #d4593f);
  text-align: center;
}

.bingo-letter {
  font-size: 1.6rem;
  font-weight: 900;
  color: white;
  padding: 0.5rem 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.15);
  letter-spacing: 0.1em;
}

.bingo-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.bingo-cell {
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  border: 1px solid var(--vp-c-border);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
  user-select: none;
  -webkit-user-select: none;
}

.bingo-cell:hover {
  background: var(--vp-c-bg-soft);
  transform: scale(1.03);
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.bingo-cell.completed {
  background: linear-gradient(145deg, #E8715A, #d4593f);
  color: white;
  border-color: #c24e35;
}

.bingo-cell.completed:hover {
  background: linear-gradient(145deg, #d4593f, #c24e35);
}

.bingo-cell.bingo-line {
  animation: bingoGlow 1s ease-in-out infinite alternate;
}

.bingo-cell.free-space {
  background: linear-gradient(145deg, #E8715A, #d4593f);
  color: white;
  border-color: #c24e35;
  cursor: default;
}

.bingo-cell.free-space:hover {
  transform: none;
  box-shadow: none;
}

.cell-text {
  font-size: 0.7rem;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  white-space: pre-line;
  word-break: keep-all;
}

.cell-check {
  position: absolute;
  top: 4px;
  right: 5px;
  font-size: 0.75rem;
  font-weight: 900;
  opacity: 0.9;
}

@keyframes bingoGlow {
  from { box-shadow: inset 0 0 8px rgba(255,255,255,0.3); }
  to { box-shadow: inset 0 0 16px rgba(255,255,255,0.6); }
}

/* Celebration overlay */
.celebration-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.celebration-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 900;
  color: #E8715A;
  text-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: celebPop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes celebPop {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  60% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}

.confetti-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.confetti-piece {
  position: absolute;
  top: -10px;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  animation: confettiFall linear forwards;
}

.confetti-piece:nth-child(odd) {
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

.confetti-piece:nth-child(3n) {
  width: 6px;
  height: 14px;
}

@keyframes confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

/* Footer */
.bingo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.bingo-tip {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Print styles */
@media print {
  .bingo-header .bingo-actions,
  .bingo-footer,
  .celebration-overlay {
    display: none !important;
  }

  .bingo-wrapper {
    max-width: 100%;
  }

  .bingo-board {
    box-shadow: none;
    border: 2px solid #333;
  }

  .bingo-cell {
    border: 1px solid #333 !important;
  }

  .bingo-cell.completed,
  .bingo-cell.free-space {
    background: #ddd !important;
    color: #333 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .bingo-label-row {
    background: #333 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

/* Responsive */
@media (max-width: 500px) {
  .cell-text {
    font-size: 0.55rem;
  }

  .bingo-letter {
    font-size: 1.2rem;
  }

  .bingo-header {
    flex-direction: column;
    align-items: stretch;
  }

  .bingo-stats, .bingo-actions {
    justify-content: center;
  }

  .bingo-footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
