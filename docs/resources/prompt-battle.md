# 프롬프트 A/B 비교기

> 두 개의 프롬프트를 나란히 비교해보세요. 어떤 프롬프트가 더 효과적인지 한눈에 알 수 있습니다.

<script setup>
import { ref, computed, nextTick } from 'vue'

const promptA = ref('')
const promptB = ref('')
const evaluated = ref(false)

const criteria = [
  { key: 'specificity', name: '구체성', icon: '🎯', desc: '숫자, 이름, 날짜, 충분한 길이 등 구체적 정보 포함 여부' },
  { key: 'context', name: '맥락 제공', icon: '📖', desc: '배경, 대상, 이전 작업 등 맥락 정보 포함 여부' },
  { key: 'format', name: '형식 지정', icon: '📐', desc: '출력 형식, 분량, 구조 등의 지정 여부' },
  { key: 'tone', name: '톤 & 스타일', icon: '🎨', desc: '톤, 문체, 격식 수준 등의 지정 여부' },
  { key: 'purpose', name: '명확한 목적', icon: '🎯', desc: '행동 동사와 산출물 명시 여부' },
]

function scoreSpecificity(text) {
  let score = 0
  if (/\d+/.test(text)) score += 5
  if (/[가-힣]+님|[가-힣]+장|[가-힣]+대리|[가-힣]+과장|[가-힣]+부장|[가-힣]+사원|담당자|팀장|팀원|매니저|디자이너|개발자|기획자/.test(text)) score += 5
  if (/월|일|분기|년|주|까지|기한|마감|데드라인|\d{4}/.test(text)) score += 5
  if (text.length > 50) score += 5
  return score
}

function scoreContext(text) {
  let score = 0
  if (/배경|상황|이유|목적|왜|때문|현재|현황/.test(text)) score += 7
  if (/대상|받는\s?사람|상사|팀장|고객|독자|수신|타겟|청중/.test(text)) score += 7
  if (/지난|이전|참고|기존|앞서|바탕|근거|토대/.test(text)) score += 6
  return score
}

function scoreFormat(text) {
  let score = 0
  if (/표|목록|글머리|리스트|불릿|A4|장$|줄|번호|넘버링|마크다운/.test(text)) score += 7
  if (/분량|이내|정도|페이지|글자|단어|문장|문단/.test(text)) score += 7
  if (/구성|포함|섹션|항목|순서|단계|구조|형식|템플릿|양식/.test(text)) score += 6
  return score
}

function scoreTone(text) {
  let score = 0
  if (/톤|스타일|격식|친근|정중|공식|비공식|캐주얼|딱딱|부드럽|말투|문체|어투/.test(text)) score += 10
  if (/~요|합니다|해요|반말|존댓말|경어|높임|쉽게|전문적|간결|상세/.test(text)) score += 10
  return score
}

function scorePurpose(text) {
  let score = 0
  if (/써\s?줘|만들어\s?줘|분석해\s?줘|정리해\s?줘|요약해\s?줘|작성해\s?줘|알려\s?줘|설명해\s?줘|비교해\s?줘|추천해\s?줘|검토해\s?줘|수정해\s?줘|번역해\s?줘|변환해\s?줘/.test(text)) score += 10
  if (/이메일|보고서|회의록|기획서|제안서|발표자료|PPT|문서|메모|공지|안내문|계획서|초안|리포트|브리핑/.test(text)) score += 10
  return score
}

function scoreAll(text) {
  return {
    specificity: scoreSpecificity(text),
    context: scoreContext(text),
    format: scoreFormat(text),
    tone: scoreTone(text),
    purpose: scorePurpose(text),
  }
}

function totalFromScores(s) {
  return s.specificity + s.context + s.format + s.tone + s.purpose
}

function getLetterGrade(score) {
  if (score >= 90) return 'A+'
  if (score >= 80) return 'A'
  if (score >= 70) return 'B+'
  if (score >= 60) return 'B'
  if (score >= 40) return 'C'
  return 'D'
}

function getGradeColor(score) {
  if (score >= 80) return '#22c55e'
  if (score >= 60) return '#E87040'
  if (score >= 40) return '#eab308'
  return '#ef4444'
}

const scoresA = computed(() => scoreAll(promptA.value))
const scoresB = computed(() => scoreAll(promptB.value))
const totalA = computed(() => totalFromScores(scoresA.value))
const totalB = computed(() => totalFromScores(scoresB.value))
const gradeA = computed(() => getLetterGrade(totalA.value))
const gradeB = computed(() => getLetterGrade(totalB.value))
const colorA = computed(() => getGradeColor(totalA.value))
const colorB = computed(() => getGradeColor(totalB.value))

const winner = computed(() => {
  if (totalA.value > totalB.value) return 'A'
  if (totalB.value > totalA.value) return 'B'
  return 'tie'
})

const isWinnerA = computed(() => winner.value === 'A')
const isWinnerB = computed(() => winner.value === 'B')

const analysis = computed(() => {
  const result = []
  for (const c of criteria) {
    const a = scoresA.value[c.key]
    const b = scoresB.value[c.key]
    let status = 'tie'
    if (a > b) status = 'A'
    else if (b > a) status = 'B'
    result.push({ ...c, scoreA: a, scoreB: b, status, diff: Math.abs(a - b) })
  }
  return result
})

const strongerA = computed(() => analysis.value.filter(x => x.status === 'A'))
const strongerB = computed(() => analysis.value.filter(x => x.status === 'B'))
const tiedCriteria = computed(() => analysis.value.filter(x => x.status === 'tie'))

const loserSuggestions = computed(() => {
  const w = winner.value
  if (w === 'tie') return []
  const loserScores = w === 'A' ? scoresB.value : scoresA.value
  const tips = []
  if (loserScores.specificity < 16) {
    tips.push({ criterion: '구체성', icon: '🎯', tip: '숫자, 이름/역할, 날짜/기한 등 구체적인 정보를 추가하세요.', example: '"보고서 써줘" → "2026년 1분기 매출 데이터를 기반으로 3페이지 분량의 실적 보고서를 써줘"' })
  }
  if (loserScores.context < 14) {
    tips.push({ criterion: '맥락 제공', icon: '📖', tip: '배경 상황, 대상 독자, 참고할 이전 자료 등을 명시하세요.', example: '"이메일 써줘" → "지난주 회의에서 논의된 일정 변경 건에 대해 김부장님께 보낼 이메일을 써줘"' })
  }
  if (loserScores.format < 14) {
    tips.push({ criterion: '형식 지정', icon: '📐', tip: '원하는 출력 형식, 분량, 구조를 지정하세요.', example: '"정리해줘" → "표 형식으로 정리하고, 각 항목에 장단점을 포함해서 A4 1페이지 이내로 정리해줘"' })
  }
  if (loserScores.tone < 10) {
    tips.push({ criterion: '톤 & 스타일', icon: '🎨', tip: '원하는 톤이나 문체를 명시하세요.', example: '"정중하고 공식적인 톤으로 작성해줘" 또는 "친근하고 쉬운 말투로 써줘"를 추가' })
  }
  if (loserScores.purpose < 10) {
    tips.push({ criterion: '명확한 목적', icon: '🎯', tip: '무엇을 해달라는 것인지 행동 동사와 산출물을 명확히 하세요.', example: '"마케팅 관련" → "신제품 런칭을 위한 SNS 마케팅 기획서를 작성해줘"' })
  }
  return tips
})

function compare() {
  if (!promptA.value.trim() || !promptB.value.trim()) return
  evaluated.value = true
  nextTick(() => {
    const el = document.getElementById('pb-results')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function resetAll() {
  evaluated.value = false
  promptA.value = ''
  promptB.value = ''
}

function loadExample() {
  promptA.value = '보고서 써줘'
  promptB.value = '지난 1분기 마케팅 캠페인 실적을 분석해서 팀장님께 보고할 보고서를 작성해줘.\n\n배경: 올해 1분기에 SNS 광고와 이메일 마케팅을 병행했고, 목표 대비 달성률을 확인해야 해.\n대상: 마케팅팀장 김과장님\n\n형식: A4 3페이지 이내, 표와 차트를 포함하고 핵심 인사이트 3개를 요약해줘.\n구성: 요약 → 채널별 성과 → 개선점 → 다음 분기 제안 순서로 구성해줘.\n톤: 공식적이지만 간결하게 작성해줘.\n기한: 3월 20일까지 완성 필요.'
  evaluated.value = false
}
</script>

<div class="pb-actions-top">
  <button class="pb-example-btn" @click="loadExample">📝 나쁜 예시 vs 좋은 예시 불러오기</button>
  <button class="pb-reset-btn" @click="resetAll">🔄 초기화</button>
</div>

## 프롬프트 입력

<div class="pb-split-input">
  <div class="pb-input-col">
    <div class="pb-col-label pb-label-a">프롬프트 A</div>
    <textarea
      class="pb-textarea"
      v-model="promptA"
      placeholder="첫 번째 프롬프트를 입력하세요..."
      rows="8"
    ></textarea>
    <div class="pb-char-count">{{ promptA.length }}자</div>
  </div>
  <div class="pb-vs-divider">VS</div>
  <div class="pb-input-col">
    <div class="pb-col-label pb-label-b">프롬프트 B</div>
    <textarea
      class="pb-textarea"
      v-model="promptB"
      placeholder="두 번째 프롬프트를 입력하세요..."
      rows="8"
    ></textarea>
    <div class="pb-char-count">{{ promptB.length }}자</div>
  </div>
</div>

<div class="pb-actions-center">
  <button
    class="pb-compare-btn"
    :disabled="!promptA.trim() || !promptB.trim()"
    @click="compare"
  >
    비교 분석
  </button>
</div>

<div v-if="evaluated" id="pb-results">

## 비교 결과

<div class="pb-score-cards">
  <div class="pb-score-card" :class="{ 'pb-winner': isWinnerA, 'pb-loser': isWinnerB }">
    <div v-if="isWinnerA" class="pb-winner-badge">🏆 승자</div>
    <div class="pb-card-label">프롬프트 A</div>
    <div class="pb-card-score" :style="{ color: colorA }">{{ totalA }}<span class="pb-card-total">/100</span></div>
    <div class="pb-card-grade" :style="{ background: colorA }">{{ gradeA }}</div>
  </div>
  <div class="pb-score-vs">VS</div>
  <div class="pb-score-card" :class="{ 'pb-winner': isWinnerB, 'pb-loser': isWinnerA }">
    <div v-if="isWinnerB" class="pb-winner-badge">🏆 승자</div>
    <div class="pb-card-label">프롬프트 B</div>
    <div class="pb-card-score" :style="{ color: colorB }">{{ totalB }}<span class="pb-card-total">/100</span></div>
    <div class="pb-card-grade" :style="{ background: colorB }">{{ gradeB }}</div>
  </div>
</div>

<div v-if="winner === 'tie'" class="pb-tie-notice">
  무승부! 두 프롬프트의 총점이 동일합니다.
</div>

### 항목별 비교

<div class="pb-criteria-compare">
  <div v-for="item in analysis" :key="item.key" class="pb-criterion-row">
    <div class="pb-criterion-label">{{ item.icon }} {{ item.name }}</div>
    <div class="pb-bars-container">
      <div class="pb-bar-row">
        <span class="pb-bar-tag pb-tag-a" :class="{ 'pb-bar-winner': item.status === 'A' }">A</span>
        <div class="pb-bar-track">
          <div
            class="pb-bar-fill"
            :class="{ 'pb-fill-winner': item.status === 'A', 'pb-fill-loser': item.status === 'B' }"
            :style="{ width: (item.scoreA / 20 * 100) + '%' }"
          ></div>
        </div>
        <span class="pb-bar-score" :class="{ 'pb-score-winner': item.status === 'A' }">{{ item.scoreA }}</span>
      </div>
      <div class="pb-bar-row">
        <span class="pb-bar-tag pb-tag-b" :class="{ 'pb-bar-winner': item.status === 'B' }">B</span>
        <div class="pb-bar-track">
          <div
            class="pb-bar-fill"
            :class="{ 'pb-fill-winner': item.status === 'B', 'pb-fill-loser': item.status === 'A' }"
            :style="{ width: (item.scoreB / 20 * 100) + '%' }"
          ></div>
        </div>
        <span class="pb-bar-score" :class="{ 'pb-score-winner': item.status === 'B' }">{{ item.scoreB }}</span>
      </div>
    </div>
  </div>
</div>

### 차이점 분석

<div class="pb-diff-section">
  <div v-if="strongerA.length > 0" class="pb-diff-block">
    <div class="pb-diff-title pb-diff-a">프롬프트 A가 더 강한 항목</div>
    <div class="pb-diff-items">
      <div v-for="item in strongerA" :key="item.key" class="pb-diff-item">
        <span class="pb-diff-icon">{{ item.icon }}</span>
        <span class="pb-diff-name">{{ item.name }}</span>
        <span class="pb-diff-gap">+{{ item.diff }}점 우위</span>
      </div>
    </div>
  </div>
  <div v-if="strongerB.length > 0" class="pb-diff-block">
    <div class="pb-diff-title pb-diff-b">프롬프트 B가 더 강한 항목</div>
    <div class="pb-diff-items">
      <div v-for="item in strongerB" :key="item.key" class="pb-diff-item">
        <span class="pb-diff-icon">{{ item.icon }}</span>
        <span class="pb-diff-name">{{ item.name }}</span>
        <span class="pb-diff-gap">+{{ item.diff }}점 우위</span>
      </div>
    </div>
  </div>
  <div v-if="tiedCriteria.length > 0" class="pb-diff-block">
    <div class="pb-diff-title pb-diff-tie">동점 항목</div>
    <div class="pb-diff-items">
      <div v-for="item in tiedCriteria" :key="item.key" class="pb-diff-item">
        <span class="pb-diff-icon">{{ item.icon }}</span>
        <span class="pb-diff-name">{{ item.name }}</span>
        <span class="pb-diff-gap pb-gap-tie">각 {{ item.scoreA }}점</span>
      </div>
    </div>
  </div>
</div>

<div v-if="winner !== 'tie' && loserSuggestions.length > 0" class="pb-improve-section">

### {{ winner === 'A' ? '프롬프트 B' : '프롬프트 A' }} 개선 제안

<div class="pb-improve-list">
  <div v-for="s in loserSuggestions" :key="s.criterion" class="pb-improve-card">
    <div class="pb-improve-title">{{ s.icon }} {{ s.criterion }} 개선</div>
    <div class="pb-improve-tip">{{ s.tip }}</div>
    <div class="pb-improve-example">예: {{ s.example }}</div>
  </div>
</div>

</div>

<div class="pb-actions-center" style="margin-top: 32px;">
  <button class="pb-reset-btn-bottom" @click="resetAll">초기화</button>
</div>

</div>

<style>
.pb-actions-top {
  display: flex;
  gap: 10px;
  margin: 16px 0 24px 0;
  flex-wrap: wrap;
}

.pb-example-btn {
  padding: 8px 18px;
  border: 2px solid #E87040;
  border-radius: 8px;
  background: rgba(232, 112, 64, 0.04);
  color: #E87040;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-example-btn:hover {
  background: rgba(232, 112, 64, 0.1);
  transform: translateY(-1px);
}

.pb-reset-btn {
  padding: 8px 18px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-reset-btn:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

.pb-split-input {
  display: flex;
  gap: 16px;
  margin: 16px 0;
  align-items: stretch;
}

.pb-input-col {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.pb-vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
  color: #E87040;
  padding: 0 4px;
  flex-shrink: 0;
  user-select: none;
}

.pb-col-label {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
  padding: 4px 12px;
  border-radius: 6px;
  display: inline-block;
  width: fit-content;
}

.pb-label-a {
  background: rgba(232, 112, 64, 0.1);
  color: #E87040;
}

.pb-label-b {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.pb-textarea {
  width: 100%;
  min-height: 180px;
  padding: 14px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 10px;
  font-size: 0.92rem;
  line-height: 1.7;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s;
  flex: 1;
}

.pb-textarea:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 3px rgba(232, 112, 64, 0.1);
}

.pb-textarea::placeholder {
  color: var(--vp-c-text-3);
}

.pb-char-count {
  text-align: right;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 4px;
}

.pb-actions-center {
  display: flex;
  justify-content: center;
  margin: 20px 0 8px 0;
}

.pb-compare-btn {
  padding: 14px 56px;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.5px;
}

.pb-compare-btn:hover:not(:disabled) {
  background: #d4612f;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 112, 64, 0.3);
}

.pb-compare-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Score Cards */
.pb-score-cards {
  display: flex;
  gap: 16px;
  margin: 20px 0 28px 0;
  align-items: stretch;
  justify-content: center;
}

.pb-score-card {
  flex: 1;
  max-width: 280px;
  padding: 28px 24px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  text-align: center;
  position: relative;
  transition: all 0.3s;
}

.pb-score-card.pb-winner {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.04);
  box-shadow: 0 4px 20px rgba(34, 197, 94, 0.12);
}

.pb-score-card.pb-loser {
  border-color: var(--vp-c-divider);
  opacity: 0.7;
}

.pb-winner-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #22c55e;
  color: #fff;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 700;
  white-space: nowrap;
}

.pb-card-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 12px;
}

.pb-card-score {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 12px;
}

.pb-card-total {
  font-size: 1rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.pb-card-grade {
  display: inline-block;
  padding: 6px 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.pb-score-vs {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.pb-tie-notice {
  text-align: center;
  padding: 12px 20px;
  background: rgba(234, 179, 8, 0.08);
  border: 1px solid rgba(234, 179, 8, 0.3);
  border-radius: 10px;
  color: #a16207;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 24px;
}

/* Criteria Comparison */
.pb-criteria-compare {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 28px 0;
}

.pb-criterion-row {
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.pb-criterion-label {
  font-weight: 700;
  font-size: 0.93rem;
  color: var(--vp-c-text-1);
  margin-bottom: 10px;
}

.pb-bars-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pb-bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pb-bar-tag {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.pb-tag-a {
  background: #E87040;
}

.pb-tag-b {
  background: #3b82f6;
}

.pb-bar-tag.pb-bar-winner {
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.4);
}

.pb-bar-track {
  flex: 1;
  height: 12px;
  background: var(--vp-c-divider);
  border-radius: 6px;
  overflow: hidden;
}

.pb-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s ease;
  background: #a0aec0;
}

.pb-bar-fill.pb-fill-winner {
  background: #22c55e;
}

.pb-bar-fill.pb-fill-loser {
  background: #cbd5e1;
}

.pb-bar-score {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--vp-c-text-3);
  width: 24px;
  text-align: right;
  flex-shrink: 0;
}

.pb-bar-score.pb-score-winner {
  color: #22c55e;
}

/* Diff Section */
.pb-diff-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 28px 0;
}

.pb-diff-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

.pb-diff-title {
  padding: 10px 16px;
  font-weight: 700;
  font-size: 0.9rem;
}

.pb-diff-a {
  background: rgba(34, 197, 94, 0.08);
  color: #16a34a;
  border-bottom: 1px solid rgba(34, 197, 94, 0.15);
}

.pb-diff-b {
  background: rgba(59, 130, 246, 0.08);
  color: #2563eb;
  border-bottom: 1px solid rgba(59, 130, 246, 0.15);
}

.pb-diff-tie {
  background: rgba(234, 179, 8, 0.08);
  color: #a16207;
  border-bottom: 1px solid rgba(234, 179, 8, 0.15);
}

.pb-diff-items {
  padding: 8px 16px;
}

.pb-diff-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.pb-diff-item:last-child {
  border-bottom: none;
}

.pb-diff-icon {
  font-size: 1rem;
}

.pb-diff-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  flex: 1;
}

.pb-diff-gap {
  font-size: 0.82rem;
  font-weight: 700;
  color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
  padding: 2px 10px;
  border-radius: 10px;
}

.pb-diff-gap.pb-gap-tie {
  color: #a16207;
  background: rgba(234, 179, 8, 0.08);
}

/* Improvement Section */
.pb-improve-section {
  margin-top: 8px;
}

.pb-improve-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
}

.pb-improve-card {
  padding: 16px 20px;
  background: rgba(232, 112, 64, 0.04);
  border: 1px solid rgba(232, 112, 64, 0.2);
  border-radius: 12px;
}

.pb-improve-title {
  font-weight: 700;
  font-size: 0.93rem;
  color: #E87040;
  margin-bottom: 6px;
}

.pb-improve-tip {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  line-height: 1.5;
}

.pb-improve-example {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 10px 14px;
  border-radius: 8px;
  line-height: 1.5;
  border-left: 3px solid #E87040;
}

.pb-reset-btn-bottom {
  padding: 12px 40px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-reset-btn-bottom:hover {
  border-color: #E87040;
  color: #E87040;
}

@media (max-width: 640px) {
  .pb-split-input {
    flex-direction: column;
  }

  .pb-vs-divider {
    padding: 8px 0;
  }

  .pb-score-cards {
    flex-direction: column;
    align-items: center;
  }

  .pb-score-card {
    max-width: 100%;
    width: 100%;
  }

  .pb-score-vs {
    padding: 4px 0;
  }

  .pb-compare-btn {
    width: 100%;
  }
}
</style>
