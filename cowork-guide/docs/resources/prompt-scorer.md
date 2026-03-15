# 프롬프트 점수 평가기

> 내가 쓴 프롬프트는 몇 점일까? 붙여넣으면 5가지 기준으로 평가하고 개선 팁을 알려줍니다.

<script setup>
import { ref, computed, nextTick } from 'vue'

const promptText = ref('')
const evaluated = ref(false)
const animatedScore = ref(0)
let animationTimer = null

const criteria = [
  {
    key: 'specificity',
    name: '구체성',
    icon: '🎯',
    desc: '숫자, 이름, 날짜, 충분한 길이 등 구체적 정보 포함 여부',
  },
  {
    key: 'context',
    name: '맥락 제공',
    icon: '📖',
    desc: '배경, 대상, 이전 작업 등 맥락 정보 포함 여부',
  },
  {
    key: 'format',
    name: '형식 지정',
    icon: '📐',
    desc: '출력 형식, 분량, 구조 등의 지정 여부',
  },
  {
    key: 'tone',
    name: '톤 & 스타일',
    icon: '🎨',
    desc: '톤, 문체, 격식 수준 등의 지정 여부',
  },
  {
    key: 'purpose',
    name: '명확한 목적',
    icon: '🎯',
    desc: '행동 동사와 산출물 명시 여부',
  },
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

const scores = computed(() => {
  const text = promptText.value
  return {
    specificity: scoreSpecificity(text),
    context: scoreContext(text),
    format: scoreFormat(text),
    tone: scoreTone(text),
    purpose: scorePurpose(text),
  }
})

const totalScore = computed(() => {
  const s = scores.value
  return s.specificity + s.context + s.format + s.tone + s.purpose
})

const letterGrade = computed(() => {
  const s = totalScore.value
  if (s >= 90) return 'A+'
  if (s >= 80) return 'A'
  if (s >= 70) return 'B+'
  if (s >= 60) return 'B'
  if (s >= 40) return 'C'
  return 'D'
})

const gradeColor = computed(() => {
  const s = totalScore.value
  if (s >= 80) return '#22c55e'
  if (s >= 60) return '#E87040'
  if (s >= 40) return '#eab308'
  return '#ef4444'
})

function criterionColor(score) {
  if (score >= 16) return '#22c55e'
  if (score >= 8) return '#eab308'
  return '#ef4444'
}

function criterionLabel(score) {
  if (score >= 16) return '우수'
  if (score >= 8) return '보통'
  return '미흡'
}

const circumference = 2 * Math.PI * 54

const dashOffset = computed(() => {
  return circumference - (animatedScore.value / 100) * circumference
})

const suggestions = computed(() => {
  const s = scores.value
  const tips = []

  if (s.specificity < 16) {
    tips.push({
      criterion: '구체성',
      icon: '🎯',
      tip: '숫자, 이름/역할, 날짜/기한 등 구체적인 정보를 추가하세요.',
      example: '예: "보고서 써줘" → "2026년 1분기 매출 데이터를 기반으로 3페이지 분량의 실적 보고서를 써줘"',
    })
  }
  if (s.context < 14) {
    tips.push({
      criterion: '맥락 제공',
      icon: '📖',
      tip: '배경 상황, 대상 독자, 참고할 이전 자료 등을 명시하세요.',
      example: '예: "이메일 써줘" → "지난주 회의에서 논의된 일정 변경 건에 대해 김부장님께 보낼 이메일을 써줘"',
    })
  }
  if (s.format < 14) {
    tips.push({
      criterion: '형식 지정',
      icon: '📐',
      tip: '원하는 출력 형식, 분량, 구조를 지정하세요.',
      example: '예: "정리해줘" → "표 형식으로 정리하고, 각 항목에 장단점을 포함해서 A4 1페이지 이내로 정리해줘"',
    })
  }
  if (s.tone < 10) {
    tips.push({
      criterion: '톤 & 스타일',
      icon: '🎨',
      tip: '원하는 톤이나 문체를 명시하세요.',
      example: '예: 끝에 "정중하고 공식적인 톤으로 작성해줘" 또는 "친근하고 쉬운 말투로 써줘"를 추가',
    })
  }
  if (s.purpose < 10) {
    tips.push({
      criterion: '명확한 목적',
      icon: '🎯',
      tip: '무엇을 해달라는 것인지 행동 동사와 산출물을 명확히 하세요.',
      example: '예: "마케팅 관련" → "신제품 런칭을 위한 SNS 마케팅 기획서를 작성해줘"',
    })
  }
  return tips
})

const improvedPrompt = computed(() => {
  const s = scores.value
  const parts = []
  const text = promptText.value.trim()

  if (!text) return ''

  parts.push(text)

  if (s.purpose < 10 && !/써\s?줘|만들어\s?줘|작성해\s?줘|정리해\s?줘|분석해\s?줘|요약해\s?줘/.test(text)) {
    parts.push('\n\n[추가] 위 내용을 보고서 형태로 작성해줘.')
  }
  if (s.context < 14) {
    parts.push('\n[추가] 배경: 이 요청은 (상황/배경)에서 비롯되었고, 대상 독자는 (팀장/고객 등)이야.')
  }
  if (s.format < 14) {
    parts.push('\n[추가] 형식: 표와 글머리 기호를 활용해서 A4 2페이지 이내로 구성해줘.')
  }
  if (s.tone < 10) {
    parts.push('\n[추가] 톤: 정중하고 공식적인 격식체로 작성해줘.')
  }
  if (s.specificity < 16 && !/\d/.test(text)) {
    parts.push('\n[추가] 구체적 수치와 기한도 포함해줘. (예: 3월 말까지, 5개 항목)')
  }

  return parts.join('')
})

function evaluate() {
  if (!promptText.value.trim()) return
  evaluated.value = true
  animatedScore.value = 0

  if (animationTimer) clearInterval(animationTimer)

  const target = totalScore.value
  const step = Math.max(1, Math.ceil(target / 40))
  animationTimer = setInterval(() => {
    animatedScore.value += step
    if (animatedScore.value >= target) {
      animatedScore.value = target
      clearInterval(animationTimer)
    }
  }, 25)

  nextTick(() => {
    const el = document.getElementById('ps-results')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function resetAll() {
  evaluated.value = false
  promptText.value = ''
  animatedScore.value = 0
  if (animationTimer) clearInterval(animationTimer)
}

function tryExample() {
  promptText.value = '보고서 써줘'
  evaluated.value = false
}

function tryGoodExample() {
  promptText.value = '지난 1분기 마케팅 캠페인 실적을 분석해서 팀장님께 보고할 보고서를 작성해줘.\n\n배경: 올해 1분기에 SNS 광고와 이메일 마케팅을 병행했고, 목표 대비 달성률을 확인해야 해.\n대상: 마케팅팀장 김과장님\n\n형식: A4 3페이지 이내, 표와 차트를 포함하고 핵심 인사이트 3개를 요약해줘.\n구성: 요약 → 채널별 성과 → 개선점 → 다음 분기 제안 순서로 구성해줘.\n톤: 공식적이지만 간결하게 작성해줘.\n기한: 3월 20일까지 완성 필요.'
  evaluated.value = false
}
</script>

<div class="ps-intro-actions">
  <button class="ps-example-btn" @click="tryExample">📝 나쁜 예시 넣어보기</button>
  <button class="ps-example-btn ps-example-good" @click="tryGoodExample">✨ 좋은 예시 넣어보기</button>
</div>

## 프롬프트 입력

<div class="ps-input-section">
  <textarea
    class="ps-textarea"
    v-model="promptText"
    placeholder="여기에 평가할 프롬프트를 붙여넣으세요...&#10;&#10;예: '1분기 마케팅 실적을 분석해서 팀장님께 보고할 보고서를 작성해줘. 표 형식으로 A4 2페이지 이내, 정중한 톤으로 써줘.'"
    rows="8"
  ></textarea>
  <div class="ps-char-count">{{ promptText.length }}자</div>
  <div class="ps-actions">
    <button
      class="ps-evaluate-btn"
      :disabled="!promptText.trim()"
      @click="evaluate"
    >
      평가하기
    </button>
  </div>
</div>

<div v-if="evaluated" id="ps-results" class="ps-results-section">

## 평가 결과

<div class="ps-score-header">
  <div class="ps-gauge-wrap">
    <svg class="ps-gauge" viewBox="0 0 120 120">
      <circle
        cx="60" cy="60" r="54"
        fill="none"
        stroke="var(--vp-c-divider)"
        stroke-width="8"
      />
      <circle
        class="ps-gauge-arc"
        cx="60" cy="60" r="54"
        fill="none"
        :stroke="gradeColor"
        stroke-width="8"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        transform="rotate(-90 60 60)"
      />
    </svg>
    <div class="ps-gauge-label">
      <span class="ps-gauge-score" :style="{ color: gradeColor }">{{ animatedScore }}</span>
      <span class="ps-gauge-total">/100</span>
    </div>
  </div>
  <div class="ps-grade-info">
    <div class="ps-grade-badge" :style="{ background: gradeColor }">{{ letterGrade }}</div>
    <div class="ps-grade-msg" v-if="totalScore >= 80">훌륭한 프롬프트입니다! 대부분의 핵심 요소를 갖추고 있어요.</div>
    <div class="ps-grade-msg" v-else-if="totalScore >= 60">괜찮은 프롬프트지만, 몇 가지 보완하면 더 좋은 결과를 얻을 수 있어요.</div>
    <div class="ps-grade-msg" v-else-if="totalScore >= 40">기본적인 요소는 있지만, 개선할 부분이 많습니다.</div>
    <div class="ps-grade-msg" v-else>프롬프트에 핵심 요소들이 부족합니다. 아래 개선 팁을 확인하세요.</div>
  </div>
</div>

### 항목별 점수

<div class="ps-criteria-list">
  <div v-for="c in criteria" :key="c.key" class="ps-criterion-row">
    <div class="ps-criterion-header">
      <span class="ps-criterion-name">{{ c.icon }} {{ c.name }}</span>
      <span class="ps-criterion-score" :style="{ color: criterionColor(scores[c.key]) }">
        {{ scores[c.key] }}/20
        <span class="ps-criterion-label" :style="{ background: criterionColor(scores[c.key]) }">{{ criterionLabel(scores[c.key]) }}</span>
      </span>
    </div>
    <div class="ps-bar-bg">
      <div
        class="ps-bar-fill"
        :style="{
          width: (scores[c.key] / 20 * 100) + '%',
          background: criterionColor(scores[c.key]),
        }"
      ></div>
    </div>
    <div class="ps-criterion-desc">{{ c.desc }}</div>
  </div>
</div>

<div v-if="suggestions.length > 0" class="ps-suggestions-section">

### 개선 팁

<div class="ps-suggestions">
  <div v-for="s in suggestions" :key="s.criterion" class="ps-suggestion-card">
    <div class="ps-suggestion-title">{{ s.icon }} {{ s.criterion }} 개선</div>
    <div class="ps-suggestion-tip">{{ s.tip }}</div>
    <div class="ps-suggestion-example">{{ s.example }}</div>
  </div>
</div>

</div>

<div v-if="suggestions.length > 0" class="ps-improved-section">

### 개선된 프롬프트 예시

<div class="ps-improved-box">
  <div class="ps-improved-header">
    <span>보완 포인트가 추가된 프롬프트</span>
  </div>
  <pre class="ps-improved-text">{{ improvedPrompt }}</pre>
</div>

<div class="ps-improved-note">
  <strong>참고:</strong> [추가]로 표시된 부분은 부족한 요소를 보완하기 위한 예시입니다. 실제 상황에 맞게 수정해서 사용하세요.
</div>

</div>

<div class="ps-actions" style="margin-top: 32px;">
  <button class="ps-evaluate-btn ps-retry-btn" @click="resetAll">다시 평가</button>
</div>

</div>

<style>
.ps-intro-actions {
  display: flex;
  gap: 10px;
  margin: 16px 0 24px 0;
  flex-wrap: wrap;
}

.ps-example-btn {
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

.ps-example-btn:hover {
  border-color: #E87040;
  color: #E87040;
}

.ps-example-good {
  border-color: #22c55e;
  color: #22c55e;
}

.ps-example-good:hover {
  background: rgba(34, 197, 94, 0.06);
  border-color: #16a34a;
  color: #16a34a;
}

.ps-input-section {
  margin: 16px 0 8px 0;
  position: relative;
}

.ps-textarea {
  width: 100%;
  min-height: 180px;
  padding: 16px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.7;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  resize: vertical;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.ps-textarea:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 3px rgba(232, 112, 64, 0.1);
}

.ps-textarea::placeholder {
  color: var(--vp-c-text-3);
}

.ps-char-count {
  text-align: right;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  margin-top: 4px;
}

.ps-actions {
  display: flex;
  gap: 12px;
  margin: 16px 0 8px 0;
  justify-content: center;
}

.ps-evaluate-btn {
  padding: 14px 48px;
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

.ps-evaluate-btn:hover:not(:disabled) {
  background: #d4612f;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(232, 112, 64, 0.3);
}

.ps-evaluate-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ps-retry-btn {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
}

.ps-retry-btn:hover {
  border-color: #E87040 !important;
  color: #E87040;
  background: var(--vp-c-bg-soft) !important;
  box-shadow: 0 4px 12px rgba(232, 112, 64, 0.15) !important;
}

.ps-results-section {
  margin-top: 16px;
}

.ps-score-header {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 28px;
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  margin: 16px 0 28px 0;
  flex-wrap: wrap;
  justify-content: center;
}

.ps-gauge-wrap {
  position: relative;
  width: 140px;
  height: 140px;
  flex-shrink: 0;
}

.ps-gauge {
  width: 100%;
  height: 100%;
}

.ps-gauge-arc {
  transition: stroke-dashoffset 0.05s linear;
}

.ps-gauge-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  line-height: 1;
}

.ps-gauge-score {
  font-size: 2.2rem;
  font-weight: 800;
}

.ps-gauge-total {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  display: block;
  margin-top: 2px;
}

.ps-grade-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.ps-grade-badge {
  display: inline-block;
  padding: 8px 24px;
  border-radius: 12px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.ps-grade-msg {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  max-width: 360px;
}

.ps-criteria-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin: 16px 0 28px 0;
}

.ps-criterion-row {
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
}

.ps-criterion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.ps-criterion-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}

.ps-criterion-score {
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ps-criterion-label {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
}

.ps-bar-bg {
  width: 100%;
  height: 10px;
  background: var(--vp-c-divider);
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 6px;
}

.ps-bar-fill {
  height: 100%;
  border-radius: 5px;
  transition: width 0.6s ease;
}

.ps-criterion-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

.ps-suggestions-section {
  margin-top: 8px;
}

.ps-suggestions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 16px 0 28px 0;
}

.ps-suggestion-card {
  padding: 18px 20px;
  background: rgba(232, 112, 64, 0.04);
  border: 1px solid rgba(232, 112, 64, 0.2);
  border-radius: 12px;
}

.ps-suggestion-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: #E87040;
  margin-bottom: 6px;
}

.ps-suggestion-tip {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
  line-height: 1.5;
}

.ps-suggestion-example {
  font-size: 0.84rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 10px 14px;
  border-radius: 8px;
  line-height: 1.5;
  border-left: 3px solid #E87040;
}

.ps-improved-section {
  margin-top: 8px;
}

.ps-improved-box {
  border: 2px solid #22c55e;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}

.ps-improved-header {
  padding: 12px 16px;
  background: rgba(34, 197, 94, 0.08);
  border-bottom: 1px solid rgba(34, 197, 94, 0.2);
  font-weight: 600;
  font-size: 0.9rem;
  color: #16a34a;
}

.ps-improved-text {
  padding: 20px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.9rem;
  line-height: 1.7;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: inherit;
}

.ps-improved-note {
  padding: 12px 16px;
  background: rgba(234, 179, 8, 0.06);
  border-left: 4px solid #eab308;
  border-radius: 0 8px 8px 0;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .ps-score-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
  }

  .ps-grade-info {
    align-items: center;
  }

  .ps-grade-msg {
    text-align: center;
  }

  .ps-evaluate-btn {
    width: 100%;
  }
}
</style>
