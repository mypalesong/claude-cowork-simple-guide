# AI 활용 성숙도 평가

> 우리 팀은 AI를 얼마나 잘 활용하고 있을까요? 5분이면 현재 수준과 다음 단계를 알 수 있습니다.

<script setup>
import { ref, computed, nextTick } from 'vue'

const categories = [
  {
    key: 'culture',
    icon: '🏢',
    name: '조직 문화',
    questions: [
      '우리 팀은 AI를 업무 생산성 도구로 인식하고 있다.',
      '팀원 대다수가 AI 도입에 긍정적이고 적극적인 의지가 있다.',
      '리더십이 AI 활용을 장려하고 필요한 지원을 제공한다.',
    ],
  },
  {
    key: 'tools',
    icon: '🛠️',
    name: '도구 활용',
    questions: [
      '팀에서 AI 도구(ChatGPT, Claude 등)를 실제로 사용하고 있다.',
      '팀원들이 AI 도구를 주 3회 이상 정기적으로 활용한다.',
      '다양한 업무 영역(작성, 분석, 코딩 등)에서 AI 도구를 활용하고 있다.',
    ],
  },
  {
    key: 'application',
    icon: '📝',
    name: '업무 적용',
    questions: [
      '주요 업무 프로세스에 AI가 체계적으로 적용되어 있다.',
      '반복 업무의 상당 부분이 AI를 통해 자동화되어 있다.',
      'AI를 활용한 업무 결과물의 품질이 기존 대비 향상되었다.',
    ],
  },
  {
    key: 'governance',
    icon: '🔒',
    name: '거버넌스',
    questions: [
      'AI 사용에 대한 보안 정책과 데이터 처리 가이드라인이 있다.',
      'AI 활용 가이드라인(프롬프트 작성법, 사용 범위 등)이 문서화되어 있다.',
      'AI 활용 역량 향상을 위한 정기적인 교육이나 공유 체계가 있다.',
    ],
  },
  {
    key: 'measurement',
    icon: '📈',
    name: '성과 측정',
    questions: [
      'AI 도입 후 생산성 변화를 정량적으로 측정하고 있다.',
      'AI 활용 관련 KPI(절약 시간, 비용 절감 등)가 설정되어 있다.',
      '측정 결과를 기반으로 AI 활용 방식을 지속적으로 개선하고 있다.',
    ],
  },
]

const answers = ref({})
const showResult = ref(false)
const currentStep = ref(0)
const copied = ref(false)

// Initialize answers
categories.forEach((cat, ci) => {
  cat.questions.forEach((_, qi) => {
    answers.value[`${ci}-${qi}`] = 0
  })
})

const totalQuestions = 15

const answeredCount = computed(() =>
  Object.values(answers.value).filter(v => v > 0).length
)

const progress = computed(() =>
  Math.round((answeredCount.value / totalQuestions) * 100)
)

const allAnswered = computed(() => answeredCount.value === totalQuestions)

const categoryScores = computed(() =>
  categories.map((cat, ci) => {
    let sum = 0
    cat.questions.forEach((_, qi) => {
      sum += answers.value[`${ci}-${qi}`] || 0
    })
    return { ...cat, score: sum, max: 15 }
  })
)

const totalScore = computed(() =>
  categoryScores.value.reduce((sum, c) => sum + c.score, 0)
)

const level = computed(() => {
  const s = totalScore.value
  if (s >= 66) return { num: 5, name: '최적화 단계', desc: 'AI가 업무 프로세스에 완전 통합', color: '#E87040' }
  if (s >= 56) return { num: 4, name: '확산 단계', desc: '대부분의 업무에 AI 활용', color: '#F4A261' }
  if (s >= 41) return { num: 3, name: '도입 단계', desc: '조직적으로 AI 활용 시작', color: '#2A9D8F' }
  if (s >= 26) return { num: 2, name: '탐색 단계', desc: '일부 팀원이 개인적으로 사용', color: '#457B9D' }
  return { num: 1, name: '인식 단계', desc: 'AI에 관심은 있지만 아직 시작 전', color: '#6C757D' }
})

const categoryFeedback = {
  culture: {
    low: '팀 내 AI 인식 개선이 필요합니다. 성공 사례 공유와 리더의 솔선수범이 효과적입니다.',
    mid: 'AI에 대한 관심이 있으니, 팀 차원의 도입 목표와 비전을 수립하세요.',
    high: '훌륭합니다! 조직 문화가 AI 친화적입니다. 지속적인 동기 부여를 이어가세요.',
  },
  tools: {
    low: 'AI 도구를 아직 충분히 활용하지 않고 있습니다. 무료 체험부터 시작해보세요.',
    mid: '도구 사용 경험이 쌓이고 있습니다. 활용 범위를 넓히고 팀 공유를 확대하세요.',
    high: '다양한 도구를 적극 활용하고 있습니다. 고급 기능과 API 연동을 검토해보세요.',
  },
  application: {
    low: '실제 업무 적용이 부족합니다. 이메일, 요약 등 쉬운 업무부터 적용해보세요.',
    mid: '일부 업무에 적용 중입니다. 자동화 가능한 반복 업무를 추가로 발굴하세요.',
    high: '업무 전반에 AI가 잘 적용되어 있습니다. 워크플로우 최적화에 집중하세요.',
  },
  governance: {
    low: '보안 정책과 가이드라인이 시급합니다. 먼저 데이터 보안 규칙을 만드세요.',
    mid: '기본 정책이 있으나, 교육 체계와 상세 가이드라인을 보강하세요.',
    high: '체계적인 거버넌스가 갖춰져 있습니다. 정기 감사와 업데이트를 지속하세요.',
  },
  measurement: {
    low: '성과 측정을 시작하세요. 투입 시간 절약량부터 기록하면 됩니다.',
    mid: 'KPI가 일부 설정되어 있습니다. 정기 리뷰와 개선 루프를 만드세요.',
    high: '데이터 기반으로 잘 운영되고 있습니다. 벤치마크 공유로 팀 동기를 부여하세요.',
  },
}

const recommendations = computed(() => {
  const items = []
  categoryScores.value.forEach(c => {
    const fb = categoryFeedback[c.key]
    if (c.score <= 6) items.push({ cat: `${c.icon} ${c.name}`, text: fb.low, priority: '높음' })
    else if (c.score <= 11) items.push({ cat: `${c.icon} ${c.name}`, text: fb.mid, priority: '중간' })
    else items.push({ cat: `${c.icon} ${c.name}`, text: fb.high, priority: '유지' })
  })
  return items.sort((a, b) => {
    const order = { '높음': 0, '중간': 1, '유지': 2 }
    return order[a.priority] - order[b.priority]
  })
})

const relatedPages = computed(() => {
  const pages = []
  const scores = categoryScores.value
  if (scores[0].score <= 9) pages.push({ title: 'AI Cowork 이해하기', link: '/guide/what-is-cowork' })
  if (scores[1].score <= 9) pages.push({ title: '처음 시작하기', link: '/guide/first-steps' })
  if (scores[1].score <= 9) pages.push({ title: '첫 대화 시작하기', link: '/guide/first-chat' })
  if (scores[2].score <= 9) pages.push({ title: '일상 업무 활용', link: '/guide/daily' })
  if (scores[2].score <= 9) pages.push({ title: '글쓰기 도우미', link: '/guide/writing' })
  if (scores[3].score <= 9) pages.push({ title: '보안 가이드', link: '/guide/security' })
  if (scores[3].score <= 9) pages.push({ title: '관리자 가이드', link: '/guide/admin' })
  if (scores[4].score <= 9) pages.push({ title: 'ROI 계산기', link: '/resources/roi-calculator' })
  pages.push({ title: '프롬프트 작성법', link: '/tips/prompting' })
  pages.push({ title: '부서별 활용법', link: '/guide/by-dept' })
  return pages.slice(0, 6)
})

function selectAnswer(ci, qi, value) {
  answers.value[`${ci}-${qi}`] = value
}

function submitAssessment() {
  showResult.value = true
  nextTick(() => {
    const el = document.getElementById('maturity-result')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  })
}

function resetAssessment() {
  categories.forEach((cat, ci) => {
    cat.questions.forEach((_, qi) => {
      answers.value[`${ci}-${qi}`] = 0
    })
  })
  showResult.value = false
  currentStep.value = 0
  copied.value = false
}

function goToStep(step) {
  currentStep.value = step
}

function nextStep() {
  if (currentStep.value < categories.length - 1) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 0) currentStep.value--
}

function stepAnsweredCount(ci) {
  let count = 0
  categories[ci].questions.forEach((_, qi) => {
    if (answers.value[`${ci}-${qi}`] > 0) count++
  })
  return count
}

function copyResult() {
  const lines = [
    `🎯 AI 활용 성숙도 평가 결과`,
    ``,
    `총점: ${totalScore.value}점 / 75점`,
    `레벨: Level ${level.value.num} — ${level.value.name}`,
    `${level.value.desc}`,
    ``,
    `📊 카테고리별 점수:`,
  ]
  categoryScores.value.forEach(c => {
    lines.push(`  ${c.icon} ${c.name}: ${c.score}점 / 15점`)
  })
  lines.push(``)
  lines.push(`🔗 평가 도구: Claude Cowork 가이드`)
  const text = lines.join('\n')
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2500)
  })
}

// Radar chart helpers
function radarPoint(index, value, max, radius) {
  const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2
  const r = (value / max) * radius
  const x = 150 + r * Math.cos(angle)
  const y = 150 + r * Math.sin(angle)
  return { x, y }
}

function radarPolygon(scores, radius) {
  return scores
    .map((s, i) => {
      const p = radarPoint(i, s.score, s.max, radius)
      return `${p.x},${p.y}`
    })
    .join(' ')
}

function radarGridPolygon(level, radius) {
  return Array.from({ length: 5 })
    .map((_, i) => {
      const p = radarPoint(i, level, 5, radius)
      return `${p.x},${p.y}`
    })
    .join(' ')
}

function radarLabelPos(index, radius) {
  const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2
  const r = radius + 28
  return {
    x: 150 + r * Math.cos(angle),
    y: 150 + r * Math.sin(angle),
  }
}

const scaleLabels = ['전혀 아니다', '그렇지 않다', '보통이다', '그렇다', '매우 그렇다']
</script>

<style>
.maturity-wrap {
  margin: 1.5rem 0;
}

/* Progress bar */
.progress-container {
  margin-bottom: 2rem;
}
.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}
.progress-track {
  width: 100%;
  height: 8px;
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #E87040, #F4A261);
  border-radius: 4px;
  transition: width 0.4s ease;
}

/* Step nav */
.step-nav {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.step-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s;
}
.step-btn:hover {
  border-color: #E87040;
  color: #E87040;
}
.step-btn.active {
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.1), rgba(232, 112, 64, 0.04));
  border-color: #E87040;
  color: #E87040;
  font-weight: 600;
}
.step-btn.completed {
  background: rgba(42, 157, 143, 0.08);
  border-color: #2A9D8F;
  color: #2A9D8F;
}
.step-badge {
  font-size: 0.7rem;
  background: var(--vp-c-divider);
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  font-weight: 600;
}
.step-btn.completed .step-badge {
  background: rgba(42, 157, 143, 0.15);
  color: #2A9D8F;
}
.step-btn.active .step-badge {
  background: rgba(232, 112, 64, 0.15);
  color: #E87040;
}

/* Category card */
.category-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
.category-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.category-header .cat-icon {
  font-size: 1.3rem;
}

/* Question */
.question-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}
.question-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.question-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}
.question-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #E87040;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 0.5rem;
  flex-shrink: 0;
}
.scale-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.scale-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.15s;
  min-width: 72px;
  text-align: center;
}
.scale-btn:hover {
  border-color: #E87040;
  background: rgba(232, 112, 64, 0.04);
}
.scale-btn.selected {
  border-color: #E87040;
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.12), rgba(232, 112, 64, 0.05));
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.15);
}
.scale-num {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}
.scale-btn.selected .scale-num {
  color: #E87040;
}
.scale-label {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}
.scale-btn.selected .scale-label {
  color: #E87040;
}

/* Navigation buttons */
.nav-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  gap: 1rem;
}
.nav-btn {
  padding: 0.6rem 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}
.nav-btn:hover {
  border-color: #E87040;
  color: #E87040;
}
.nav-btn.primary {
  background: #E87040;
  color: #fff;
  border-color: #E87040;
}
.nav-btn.primary:hover {
  background: #d4623a;
}
.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.nav-btn:disabled:hover {
  border-color: var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

/* Submit */
.submit-area {
  text-align: center;
  margin: 2rem 0 1rem;
}
.submit-btn {
  padding: 0.85rem 2.5rem;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(232, 112, 64, 0.3);
}
.submit-btn:hover {
  background: #d4623a;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(232, 112, 64, 0.35);
}
.submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.submit-hint {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 0.5rem;
}

/* Result section */
.result-section {
  margin-top: 2rem;
}
.result-divider {
  border: none;
  border-top: 2px solid #E87040;
  margin: 2rem 0;
}

/* Score hero */
.score-hero {
  text-align: center;
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.08), rgba(232, 112, 64, 0.02));
  border: 2px solid #E87040;
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
}
.score-big {
  font-size: 3.5rem;
  font-weight: 900;
  color: #E87040;
  line-height: 1;
}
.score-max {
  font-size: 1.2rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}
.level-badge {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
}
.level-desc {
  margin-top: 0.75rem;
  font-size: 1rem;
  color: var(--vp-c-text-2);
}

/* Radar chart */
.radar-section {
  margin: 2rem 0;
}
.radar-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
  text-align: center;
}
.radar-container {
  display: flex;
  justify-content: center;
}
.radar-svg {
  width: 100%;
  max-width: 340px;
  height: auto;
}
.radar-grid {
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 0.8;
}
.radar-axis {
  stroke: var(--vp-c-divider);
  stroke-width: 0.5;
}
.radar-polygon {
  fill: rgba(232, 112, 64, 0.2);
  stroke: #E87040;
  stroke-width: 2.5;
}
.radar-dot {
  fill: #E87040;
}
.radar-label-text {
  fill: var(--vp-c-text-2);
  font-size: 11px;
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: central;
}

/* Category results */
.cat-results {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}
.cat-result-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
}
.cat-result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.cat-result-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
.cat-result-score {
  font-weight: 800;
  font-size: 1.1rem;
  color: #E87040;
}
.cat-score-bar {
  width: 100%;
  height: 8px;
  background: var(--vp-c-bg);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.75rem;
  border: 1px solid var(--vp-c-divider);
}
.cat-score-fill {
  height: 100%;
  background: linear-gradient(90deg, #E87040, #F4A261);
  border-radius: 4px;
  transition: width 0.5s ease;
}
.cat-feedback {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
.cat-priority {
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 10px;
  font-weight: 600;
  margin-right: 0.4rem;
}
.priority-high {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}
.priority-mid {
  background: rgba(255, 193, 7, 0.15);
  color: #cc9a00;
}
.priority-keep {
  background: rgba(42, 157, 143, 0.1);
  color: #2A9D8F;
}

/* Recommended pages */
.rec-section {
  margin: 2rem 0;
}
.rec-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 1rem;
}
.rec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}
.rec-link {
  display: block;
  padding: 0.8rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1) !important;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none !important;
  transition: all 0.2s;
}
.rec-link:hover {
  border-color: #E87040;
  color: #E87040 !important;
  transform: translateY(-1px);
}
.rec-link::before {
  content: '📖 ';
}

/* Action buttons */
.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}
.action-btn {
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.action-btn:hover {
  transform: translateY(-1px);
}
.action-btn.share {
  background: #E87040;
  color: #fff;
  border-color: #E87040;
}
.action-btn.share:hover {
  background: #d4623a;
}
.action-btn.reset {
  border-color: var(--vp-c-divider);
}
.action-btn.reset:hover {
  border-color: #E87040;
  color: #E87040;
}
.copied-toast {
  font-size: 0.8rem;
  color: #2A9D8F;
  font-weight: 600;
  margin-left: 0.5rem;
}

@media (max-width: 640px) {
  .scale-row {
    gap: 0.35rem;
  }
  .scale-btn {
    min-width: 56px;
    padding: 0.4rem 0.5rem;
  }
  .scale-label {
    font-size: 0.6rem;
  }
  .step-nav {
    gap: 0.35rem;
  }
  .step-btn {
    padding: 0.4rem 0.7rem;
    font-size: 0.78rem;
  }
  .score-big {
    font-size: 2.5rem;
  }
}
</style>

<div class="maturity-wrap">

<!-- Progress bar -->
<div class="progress-container" v-if="!showResult">
  <div class="progress-header">
    <span>{{ answeredCount }} / {{ totalQuestions }} 문항 완료</span>
    <span>{{ progress }}%</span>
  </div>
  <div class="progress-track">
    <div class="progress-fill" :style="{ width: progress + '%' }"></div>
  </div>
</div>

<!-- Step navigation -->
<div class="step-nav" v-if="!showResult">
  <button
    v-for="(cat, ci) in categories"
    :key="ci"
    class="step-btn"
    :class="{ active: currentStep === ci, completed: stepAnsweredCount(ci) === 3 }"
    @click="goToStep(ci)"
  >
    <span>{{ cat.icon }} {{ cat.name }}</span>
    <span class="step-badge">{{ stepAnsweredCount(ci) }}/3</span>
  </button>
</div>

<!-- Questions by category (one step at a time) -->
<div v-if="!showResult">
  <div v-for="(cat, ci) in categories" :key="ci" v-show="currentStep === ci">
    <div class="category-card">
      <div class="category-header">
        <span class="cat-icon">{{ cat.icon }}</span>
        <span>{{ cat.name }}</span>
      </div>
      <div v-for="(q, qi) in cat.questions" :key="qi" class="question-item">
        <div class="question-text">
          <span class="question-num">{{ ci * 3 + qi + 1 }}</span>
          {{ q }}
        </div>
        <div class="scale-row">
          <button
            v-for="v in 5"
            :key="v"
            class="scale-btn"
            :class="{ selected: answers[`${ci}-${qi}`] === v }"
            @click="selectAnswer(ci, qi, v)"
          >
            <span class="scale-num">{{ v }}</span>
            <span class="scale-label">{{ scaleLabels[v - 1] }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="nav-buttons">
      <button class="nav-btn" :disabled="currentStep === 0" @click="prevStep">← 이전</button>
      <button v-if="currentStep < categories.length - 1" class="nav-btn primary" @click="nextStep">다음 →</button>
    </div>
  </div>

  <!-- Submit -->
  <div class="submit-area">
    <button class="submit-btn" :disabled="!allAnswered" @click="submitAssessment">
      결과 확인하기
    </button>
    <div class="submit-hint" v-if="!allAnswered">모든 문항에 답변해주세요 ({{ answeredCount }}/{{ totalQuestions }})</div>
  </div>
</div>

<!-- Results -->
<div v-if="showResult" class="result-section" id="maturity-result">

<hr class="result-divider" />

## 평가 결과

<!-- Score hero -->
<div class="score-hero">
  <div class="score-big">{{ totalScore }}<span class="score-max"> / 75점</span></div>
  <div>
    <span class="level-badge" :style="{ background: level.color }">
      Level {{ level.num }} — {{ level.name }}
    </span>
  </div>
  <div class="level-desc">{{ level.desc }}</div>
</div>

<!-- Radar chart -->
<div class="radar-section">
  <div class="radar-title">카테고리별 분석</div>
  <div class="radar-container">
    <svg class="radar-svg" viewBox="0 0 300 300">
      <!-- Grid -->
      <polygon v-for="g in 5" :key="g" class="radar-grid" :points="radarGridPolygon(g, 120)" />
      <!-- Axes -->
      <line v-for="(_, i) in 5" :key="'ax'+i" class="radar-axis"
        :x1="150" :y1="150"
        :x2="radarPoint(i, 5, 5, 120).x" :y2="radarPoint(i, 5, 5, 120).y" />
      <!-- Data polygon -->
      <polygon class="radar-polygon" :points="radarPolygon(categoryScores, 120)" />
      <!-- Dots -->
      <circle v-for="(s, i) in categoryScores" :key="'dot'+i" class="radar-dot"
        :cx="radarPoint(i, s.score, s.max, 120).x"
        :cy="radarPoint(i, s.score, s.max, 120).y" r="4" />
      <!-- Labels -->
      <text v-for="(s, i) in categoryScores" :key="'lbl'+i" class="radar-label-text"
        :x="radarLabelPos(i, 120).x" :y="radarLabelPos(i, 120).y">
        {{ s.icon }} {{ s.name }}
      </text>
    </svg>
  </div>
</div>

<!-- Category detail cards -->
<div class="cat-results">
  <div v-for="rec in recommendations" :key="rec.cat" class="cat-result-card">
    <div class="cat-result-header">
      <span class="cat-result-name">{{ rec.cat }}</span>
      <span class="cat-result-score" v-for="c in categoryScores.filter(c => rec.cat.includes(c.name))" :key="c.key">
        {{ c.score }}점 / 15점
      </span>
    </div>
    <div class="cat-score-bar" v-for="c in categoryScores.filter(c => rec.cat.includes(c.name))" :key="c.key + 'bar'">
      <div class="cat-score-fill" :style="{ width: (c.score / 15 * 100) + '%' }"></div>
    </div>
    <div class="cat-feedback">
      <span class="cat-priority" :class="{
        'priority-high': rec.priority === '높음',
        'priority-mid': rec.priority === '중간',
        'priority-keep': rec.priority === '유지'
      }">{{ rec.priority === '높음' ? '🔴 개선 필요' : rec.priority === '중간' ? '🟡 보완 권장' : '🟢 양호' }}</span>
      {{ rec.text }}
    </div>
  </div>
</div>

<!-- Recommended pages -->
<div class="rec-section">
  <div class="rec-title">📚 추천 가이드</div>
  <div class="rec-grid">
    <a v-for="page in relatedPages" :key="page.link" :href="page.link" class="rec-link">
      {{ page.title }}
    </a>
  </div>
</div>

<!-- Action buttons -->
<div class="action-buttons">
  <button class="action-btn share" @click="copyResult">
    📋 결과 공유하기
    <span v-if="copied" class="copied-toast">복사됨!</span>
  </button>
  <button class="action-btn reset" @click="resetAssessment">🔄 다시 평가하기</button>
</div>

</div>

</div>
