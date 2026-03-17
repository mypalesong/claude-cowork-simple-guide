# 프롬프트 빌더

> 카테고리를 선택하고 정보를 입력하면, 바로 사용할 수 있는 프롬프트가 자동으로 생성됩니다. 복사 버튼 한 번이면 Claude에 바로 붙여넣기!

<script setup>
import { ref, computed, nextTick } from 'vue'

const categories = {
  이메일: {
    icon: '✉️',
    desc: '업무 이메일 작성',
    fields: [
      { key: 'recipient', label: '받는 사람', placeholder: '예: 김부장님, 거래처 담당자' },
      { key: 'purpose', label: '목적', placeholder: '예: 프로젝트 일정 변경 요청' },
      { key: 'background', label: '배경/상황', placeholder: '예: 개발팀 인력 부족으로 2주 연기 필요' },
      { key: 'deadline', label: '기한/일정', placeholder: '예: 3월 말까지 회신 요청' },
      { key: 'tone', label: '톤', placeholder: '예: 정중하게, 격식체' },
    ],
    template: (f) => {
      let parts = [`${f.recipient || '수신자'}에게 보낼 업무 이메일을 작성해줘.`]
      if (f.purpose) parts.push(`목적: ${f.purpose}.`)
      if (f.background) parts.push(`배경: ${f.background}.`)
      if (f.deadline) parts.push(`기한/일정: ${f.deadline}.`)
      if (f.tone) parts.push(`톤: ${f.tone}.`)
      parts.push('자연스러운 인사말과 마무리 포함해줘.')
      return parts.join('\n')
    }
  },
  보고서: {
    icon: '📊',
    desc: '업무 보고서 작성',
    fields: [
      { key: 'topic', label: '주제', placeholder: '예: 2026년 1분기 마케팅 실적' },
      { key: 'audience', label: '보고 대상', placeholder: '예: 임원진, 팀장' },
      { key: 'format', label: '형식/분량', placeholder: '예: A4 3장, 표와 그래프 포함' },
      { key: 'keyPoints', label: '포함할 핵심 내용', placeholder: '예: 매출 증감, 캠페인 성과, 개선점' },
      { key: 'tone', label: '톤', placeholder: '예: 공식적, 간결하게' },
    ],
    template: (f) => {
      let parts = ['업무 보고서를 작성해줘.']
      if (f.topic) parts.push(`주제: ${f.topic}.`)
      if (f.audience) parts.push(`보고 대상: ${f.audience}.`)
      if (f.format) parts.push(`형식/분량: ${f.format}.`)
      if (f.keyPoints) parts.push(`포함할 핵심 내용: ${f.keyPoints}.`)
      if (f.tone) parts.push(`톤: ${f.tone}.`)
      parts.push('목차 → 요약 → 본문 → 결론 순서로 구성해줘.')
      return parts.join('\n')
    }
  },
  회의록: {
    icon: '📝',
    desc: '회의록 정리 및 작성',
    fields: [
      { key: 'meetingName', label: '회의명', placeholder: '예: 주간 팀 미팅' },
      { key: 'participants', label: '참석자', placeholder: '예: 김팀장, 이대리, 박사원' },
      { key: 'agenda', label: '안건/주제', placeholder: '예: 신규 프로젝트 킥오프, 일정 논의' },
      { key: 'decisions', label: '주요 결정사항', placeholder: '예: 3월 론칭 확정, 예산 2천만원 승인' },
      { key: 'format', label: '형식', placeholder: '예: 표 형식, 불릿 포인트' },
    ],
    template: (f) => {
      let parts = ['회의록을 정리해줘.']
      if (f.meetingName) parts.push(`회의명: ${f.meetingName}.`)
      if (f.participants) parts.push(`참석자: ${f.participants}.`)
      if (f.agenda) parts.push(`안건: ${f.agenda}.`)
      if (f.decisions) parts.push(`주요 결정사항: ${f.decisions}.`)
      if (f.format) parts.push(`형식: ${f.format}.`)
      parts.push('액션 아이템과 담당자, 기한도 정리해줘.')
      return parts.join('\n')
    }
  },
  데이터분석: {
    icon: '📈',
    desc: '데이터 분석 요청',
    fields: [
      { key: 'dataDesc', label: '데이터 설명', placeholder: '예: 최근 6개월 고객 구매 데이터' },
      { key: 'goal', label: '분석 목적', placeholder: '예: 고객 이탈 원인 파악' },
      { key: 'metrics', label: '핵심 지표', placeholder: '예: 재구매율, 평균 객단가, 이탈률' },
      { key: 'output', label: '결과 형식', placeholder: '예: 차트 추천, 인사이트 3개, 액션플랜' },
    ],
    template: (f) => {
      let parts = ['데이터 분석을 도와줘.']
      if (f.dataDesc) parts.push(`데이터: ${f.dataDesc}.`)
      if (f.goal) parts.push(`분석 목적: ${f.goal}.`)
      if (f.metrics) parts.push(`핵심 지표: ${f.metrics}.`)
      if (f.output) parts.push(`결과 형식: ${f.output}.`)
      parts.push('분석 결과에 대한 해석과 비즈니스 시사점도 포함해줘.')
      return parts.join('\n')
    }
  },
  기획서: {
    icon: '💡',
    desc: '기획서/제안서 작성',
    fields: [
      { key: 'projectName', label: '프로젝트명', placeholder: '예: 사내 AI 도구 도입 프로젝트' },
      { key: 'objective', label: '목표', placeholder: '예: 반복 업무 자동화로 생산성 30% 향상' },
      { key: 'scope', label: '범위/대상', placeholder: '예: 전 부서, 우선 마케팅팀 시범 도입' },
      { key: 'budget', label: '예산/리소스', placeholder: '예: 월 500만원, 담당자 2명' },
      { key: 'timeline', label: '일정', placeholder: '예: 4월 시범 → 6월 전사 확대' },
    ],
    template: (f) => {
      let parts = ['기획서를 작성해줘.']
      if (f.projectName) parts.push(`프로젝트명: ${f.projectName}.`)
      if (f.objective) parts.push(`목표: ${f.objective}.`)
      if (f.scope) parts.push(`범위/대상: ${f.scope}.`)
      if (f.budget) parts.push(`예산/리소스: ${f.budget}.`)
      if (f.timeline) parts.push(`일정: ${f.timeline}.`)
      parts.push('배경 → 목표 → 실행 계획 → 기대 효과 → 리스크 관리 순으로 구성해줘.')
      return parts.join('\n')
    }
  },
  번역: {
    icon: '🌐',
    desc: '문서 번역 요청',
    fields: [
      { key: 'direction', label: '번역 방향', placeholder: '예: 한국어 → 영어' },
      { key: 'docType', label: '문서 유형', placeholder: '예: 계약서, 마케팅 자료, 기술 문서' },
      { key: 'style', label: '문체/스타일', placeholder: '예: 비즈니스 격식체, 자연스러운 구어체' },
      { key: 'notes', label: '특별 참고사항', placeholder: '예: 사내 용어 "CoWork"은 번역하지 말 것' },
    ],
    template: (f) => {
      let parts = ['문서를 번역해줘.']
      if (f.direction) parts.push(`번역 방향: ${f.direction}.`)
      if (f.docType) parts.push(`문서 유형: ${f.docType}.`)
      if (f.style) parts.push(`문체: ${f.style}.`)
      if (f.notes) parts.push(`참고사항: ${f.notes}.`)
      parts.push('원문의 의미를 정확히 살리면서 자연스럽게 번역해줘.')
      return parts.join('\n')
    }
  },
  SNS콘텐츠: {
    icon: '📱',
    desc: 'SNS 게시물 작성',
    fields: [
      { key: 'platform', label: '플랫폼', placeholder: '예: 인스타그램, 링크드인, 블로그' },
      { key: 'topic', label: '주제/내용', placeholder: '예: 신제품 출시 안내' },
      { key: 'targetAudience', label: '타겟 독자', placeholder: '예: 20~30대 직장인' },
      { key: 'cta', label: 'CTA (행동 유도)', placeholder: '예: 사전 등록 링크 클릭' },
      { key: 'tone', label: '톤', placeholder: '예: 트렌디하고 친근하게' },
    ],
    template: (f) => {
      let parts = ['SNS 게시물을 작성해줘.']
      if (f.platform) parts.push(`플랫폼: ${f.platform}.`)
      if (f.topic) parts.push(`주제: ${f.topic}.`)
      if (f.targetAudience) parts.push(`타겟: ${f.targetAudience}.`)
      if (f.cta) parts.push(`CTA: ${f.cta}.`)
      if (f.tone) parts.push(`톤: ${f.tone}.`)
      parts.push('해시태그도 5~10개 추천해줘.')
      return parts.join('\n')
    }
  },
  공지사항: {
    icon: '📢',
    desc: '사내 공지사항 작성',
    fields: [
      { key: 'title', label: '공지 제목', placeholder: '예: 사무실 이전 안내' },
      { key: 'audience', label: '대상', placeholder: '예: 전 직원, 마케팅팀' },
      { key: 'content', label: '핵심 내용', placeholder: '예: 4월 1일부터 강남 신사옥으로 이전' },
      { key: 'action', label: '필요 조치', placeholder: '예: 3/25까지 좌석 신청서 제출' },
      { key: 'tone', label: '톤', placeholder: '예: 공식적이지만 따뜻하게' },
    ],
    template: (f) => {
      let parts = ['사내 공지사항을 작성해줘.']
      if (f.title) parts.push(`제목: ${f.title}.`)
      if (f.audience) parts.push(`대상: ${f.audience}.`)
      if (f.content) parts.push(`핵심 내용: ${f.content}.`)
      if (f.action) parts.push(`필요 조치: ${f.action}.`)
      if (f.tone) parts.push(`톤: ${f.tone}.`)
      parts.push('명확하고 간결하게, 핵심 정보가 바로 눈에 들어오도록 작성해줘.')
      return parts.join('\n')
    }
  },
}

const selectedCategory = ref('')
const formData = ref({})
const generatedPrompt = ref('')
const copied = ref(false)

const currentFields = computed(() => {
  if (!selectedCategory.value) return []
  return categories[selectedCategory.value].fields
})

function selectCategory(cat) {
  selectedCategory.value = cat
  formData.value = {}
  generatedPrompt.value = ''
  copied.value = false
}

function generatePrompt() {
  if (!selectedCategory.value) return
  const cat = categories[selectedCategory.value]
  generatedPrompt.value = cat.template(formData.value)
  copied.value = false
  nextTick(() => {
    const el = document.getElementById('prompt-output')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(generatedPrompt.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = generatedPrompt.value
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

function resetAll() {
  selectedCategory.value = ''
  formData.value = {}
  generatedPrompt.value = ''
  copied.value = false
}
</script>

## 1단계: 카테고리 선택

<div class="pb-grid">
  <button
    v-for="(info, name) in categories"
    :key="name"
    :class="['pb-cat-btn', { 'pb-cat-active': selectedCategory === name }]"
    @click="selectCategory(name)"
  >
    <span class="pb-cat-icon">{{ info.icon }}</span>
    <span class="pb-cat-name">{{ name }}</span>
    <span class="pb-cat-desc">{{ info.desc }}</span>
  </button>
</div>

<div v-if="selectedCategory" class="pb-form-section">

## 2단계: 세부 정보 입력

<div class="pb-selected-badge">
  {{ categories[selectedCategory].icon }} {{ selectedCategory }}
</div>

<div class="pb-form">
  <div v-for="field in currentFields" :key="field.key" class="pb-field">
    <label class="pb-label">{{ field.label }}</label>
    <input
      class="pb-input"
      :placeholder="field.placeholder"
      v-model="formData[field.key]"
      @keyup.enter="generatePrompt"
    />
  </div>
</div>

<div class="pb-actions">
  <button class="pb-generate-btn" @click="generatePrompt">
    🚀 프롬프트 생성
  </button>
  <button class="pb-reset-btn" @click="resetAll">
    초기화
  </button>
</div>

</div>

<div v-if="generatedPrompt" id="prompt-output" class="pb-output-section">

## 3단계: 생성된 프롬프트

<div class="pb-output-box">
  <div class="pb-output-header">
    <span>생성된 프롬프트</span>
    <button class="pb-copy-btn" @click="copyPrompt">
      {{ copied ? '✅ 복사 완료!' : '📋 복사하기' }}
    </button>
  </div>
  <pre class="pb-output-text">{{ generatedPrompt }}</pre>
</div>

<div class="pb-tip">
  <strong>💡 Tip:</strong> 생성된 프롬프트를 Claude에 붙여넣기 한 뒤, 추가 요구사항을 자유롭게 덧붙여 보세요!
</div>

</div>

<style>
.pb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.pb-cat-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 18px 12px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.pb-cat-btn:hover {
  border-color: #E87040;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(232, 112, 64, 0.15);
}

.pb-cat-active {
  border-color: #E87040 !important;
  background: rgba(232, 112, 64, 0.08) !important;
  box-shadow: 0 4px 16px rgba(232, 112, 64, 0.2);
}

.pb-cat-icon {
  font-size: 2rem;
}

.pb-cat-name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

.pb-cat-desc {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.pb-form-section {
  margin-top: 8px;
}

.pb-selected-badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(232, 112, 64, 0.1);
  color: #E87040;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.pb-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0;
}

.pb-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pb-label {
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--vp-c-text-1);
}

.pb-input {
  padding: 10px 14px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 0.95rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.pb-input:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 3px rgba(232, 112, 64, 0.1);
}

.pb-input::placeholder {
  color: var(--vp-c-text-3);
}

.pb-actions {
  display: flex;
  gap: 12px;
  margin: 24px 0 8px 0;
}

.pb-generate-btn {
  padding: 12px 32px;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-generate-btn:hover {
  background: #d4612f;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(232, 112, 64, 0.3);
}

.pb-reset-btn {
  padding: 12px 24px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-reset-btn:hover {
  border-color: var(--vp-c-text-3);
}

.pb-output-section {
  margin-top: 8px;
}

.pb-output-box {
  border: 2px solid #E87040;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}

.pb-output-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(232, 112, 64, 0.08);
  border-bottom: 1px solid rgba(232, 112, 64, 0.2);
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.pb-copy-btn {
  padding: 6px 16px;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.pb-copy-btn:hover {
  background: #d4612f;
}

.pb-output-text {
  padding: 20px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.95rem;
  line-height: 1.7;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-family: inherit;
}

.pb-tip {
  padding: 14px 18px;
  background: rgba(232, 112, 64, 0.06);
  border-left: 4px solid #E87040;
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-top: 12px;
}
</style>
