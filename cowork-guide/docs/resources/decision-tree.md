# 어떤 기능을 쓸까?

> 지금 하려는 일에 가장 적합한 Cowork 기능을 찾아드립니다. 질문을 따라가보세요!

<script setup>
import { ref, computed, nextTick } from 'vue'

const step = ref('q1')
const history = ref([])

const tree = {
  q1: {
    question: '지금 하려는 일은?',
    options: [
      { icon: '📝', label: '문서/글 작성', next: 'q2a' },
      { icon: '📊', label: '데이터 분석/정리', next: 'q2b' },
      { icon: '🤝', label: '회의/협업', next: 'q2c' },
      { icon: '🔄', label: '반복 업무 자동화', next: 'q2d' },
      { icon: '🔍', label: '자료 조사/리서치', next: 'q2e' },
      { icon: '🌐', label: '번역/다국어', next: 'q2f' },
    ],
  },
  q2a: {
    question: '어떤 종류의 문서?',
    options: [
      { icon: '✉️', label: '이메일', next: 'r_email' },
      { icon: '📑', label: '보고서/기획서', next: 'r_report' },
      { icon: '📢', label: '공지/안내문', next: 'r_notice' },
      { icon: '✏️', label: '퇴고/다듬기', next: 'r_polish' },
    ],
  },
  q2b: {
    question: '데이터 형태는?',
    options: [
      { icon: '📗', label: '엑셀/CSV', next: 'r_excel' },
      { icon: '📄', label: '비정형 메모/텍스트', next: 'r_memo' },
      { icon: '📋', label: '설문/피드백', next: 'r_survey' },
    ],
  },
  q2c: {
    question: '회의 단계는?',
    options: [
      { icon: '📌', label: '회의 전 (안건 준비)', next: 'r_pre_meeting' },
      { icon: '⚡', label: '회의 중 (실시간 노트)', next: 'r_during_meeting' },
      { icon: '📝', label: '회의 후 (정리/공유)', next: 'r_post_meeting' },
    ],
  },
  q2d: {
    question: '얼마나 자주?',
    options: [
      { icon: '☀️', label: '매일', next: 'r_daily' },
      { icon: '📅', label: '매주', next: 'r_weekly' },
      { icon: '🗓️', label: '매달', next: 'r_monthly' },
    ],
  },
  q2e: {
    question: '리서치 목적은?',
    options: [
      { icon: '🏢', label: '경쟁사/시장 분석', next: 'r_competitor' },
      { icon: '📚', label: '내부 자료 요약', next: 'r_summary' },
      { icon: '📈', label: '트렌드 파악', next: 'r_trend' },
    ],
  },
  q2f: {
    question: '번역 방향?',
    options: [
      { icon: '🇰🇷', label: '한→영', next: 'r_ko_en' },
      { icon: '🇺🇸', label: '영→한', next: 'r_en_ko' },
      { icon: '🌍', label: '다국어 동시', next: 'r_multi' },
    ],
  },
}

const results = {
  r_email: {
    title: '이메일 작성 도우미',
    page: '문서 작성 > 이메일 섹션',
    link: '/guide/writing#이메일',
    prompt: '다음 조건으로 업무 이메일을 작성해줘:\n- 받는 사람: [상대방]\n- 목적: [요청/안내/회신 등]\n- 핵심 내용: [전달 사항]\n- 톤: 정중하고 간결한 비즈니스 격식체\n자연스러운 인사말과 마무리 포함해줘.',
    templates: [
      { name: '이메일 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '이메일 템플릿 모음', link: '/resources/templates#이메일' },
      { name: '프롬프트 치트시트', link: '/resources/cheatsheet' },
    ],
  },
  r_report: {
    title: '보고서/기획서 작성',
    page: '문서 작성 > 보고서 섹션',
    link: '/guide/writing#보고서',
    prompt: '다음 조건으로 보고서를 작성해줘:\n- 주제: [보고서 주제]\n- 보고 대상: [임원/팀장 등]\n- 형식: A4 3장 이내, 표와 핵심 지표 포함\n- 구성: 요약 → 현황 분석 → 핵심 인사이트 → 액션 플랜',
    templates: [
      { name: '보고서 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '보고서 템플릿', link: '/resources/templates#보고서' },
      { name: '기획서 템플릿', link: '/resources/templates#기획서' },
    ],
  },
  r_notice: {
    title: '공지/안내문 작성',
    page: '부서별 활용 > 총무',
    link: '/guide/by-dept#총무',
    prompt: '사내 공지사항을 작성해줘:\n- 제목: [공지 제목]\n- 대상: 전 직원\n- 핵심 내용: [변경/안내 사항]\n- 필요 조치: [기한까지 해야 할 일]\n명확하고 간결하게, 핵심 정보가 바로 눈에 들어오도록 작성해줘.',
    templates: [
      { name: '공지사항 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '부서별 활용 사례', link: '/guide/by-dept' },
      { name: '공지 템플릿', link: '/resources/templates#공지' },
    ],
  },
  r_polish: {
    title: '문서 퇴고/다듬기',
    page: '문서 작성 > 퇴고',
    link: '/guide/writing#퇴고',
    prompt: '아래 글을 검토하고 다듬어줘:\n\n[여기에 글 붙여넣기]\n\n다음 기준으로 수정해줘:\n1. 맞춤법/문법 오류 수정\n2. 불필요한 반복 제거\n3. 문장을 더 간결하고 명확하게\n4. 원문과 수정본을 비교 표로 보여줘',
    templates: [
      { name: '질문 잘하는 법', link: '/tips/prompting' },
      { name: '자주 하는 실수', link: '/tips/mistakes' },
      { name: '프롬프트 치트시트', link: '/resources/cheatsheet' },
    ],
    tip: '원문을 그대로 붙여넣으면 Claude가 맥락을 파악해 더 정확하게 수정해줍니다.',
  },
  r_excel: {
    title: '엑셀/CSV 데이터 분석',
    page: '데이터 분석',
    link: '/guide/data',
    prompt: '다음 엑셀 데이터를 분석해줘:\n\n[데이터 붙여넣기 또는 설명]\n\n분석해줄 내용:\n1. 주요 트렌드와 패턴\n2. 이상치나 주의할 점\n3. 핵심 인사이트 3가지\n4. 추천 시각화 방법',
    templates: [
      { name: '데이터 분석 가이드', link: '/guide/data' },
      { name: '데이터 분석 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
    ],
    workflow: '엑셀 복사 → Claude에 붙여넣기 → 분석 요청 → 결과를 엑셀에 반영',
  },
  r_memo: {
    title: '비정형 메모/텍스트 정리',
    page: '데이터 분석 > 명단 정리',
    link: '/guide/data#명단-정리',
    prompt: '아래 메모/텍스트를 깔끔하게 정리해줘:\n\n[메모 내용 붙여넣기]\n\n- 카테고리별로 분류\n- 중복 제거\n- 표 형식으로 정리\n- 빠진 정보가 있으면 알려줘',
    templates: [
      { name: '데이터 정리 가이드', link: '/guide/data' },
      { name: '프롬프트 치트시트', link: '/resources/cheatsheet' },
      { name: '일상 업무 자동화', link: '/guide/daily' },
    ],
  },
  r_survey: {
    title: '설문/피드백 분석',
    page: '데이터 분석 > 설문',
    link: '/guide/data#설문',
    prompt: '다음 설문/피드백 결과를 분석해줘:\n\n[설문 데이터 붙여넣기]\n\n분석 요청:\n1. 주요 응답 경향 요약\n2. 긍정/부정 비율 분석\n3. 자주 언급된 키워드 TOP 10\n4. 개선 제안 3가지',
    templates: [
      { name: '데이터 분석 가이드', link: '/guide/data' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: 'ROI 계산기', link: '/resources/roi-calculator' },
    ],
    workflow: '설문 결과 취합 → Claude에 전달 → 분석 결과 확인 → 보고서 작성',
  },
  r_pre_meeting: {
    title: '회의 안건 준비',
    page: '회의 활용 > 안건 정리',
    link: '/guide/meeting#안건-정리',
    prompt: '다음 주제로 회의 안건을 정리해줘:\n\n- 회의 목적: [목적]\n- 참석자: [참석자 목록]\n- 주요 논의 사항: [주제들]\n\n각 안건별로 배경, 논의 포인트, 예상 소요 시간을 정리해줘.\n회의 시간은 총 1시간이야.',
    templates: [
      { name: '회의 활용 가이드', link: '/guide/meeting' },
      { name: '회의록 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '프롬프트 템플릿', link: '/resources/templates' },
    ],
  },
  r_during_meeting: {
    title: '실시간 회의 노트',
    page: '회의 활용 > 실시간 노트',
    link: '/guide/meeting#실시간-노트',
    prompt: '지금부터 회의 내용을 실시간으로 정리할게.\n내가 메모를 입력하면 다음 형식으로 정리해줘:\n\n- 발언자별 핵심 발언\n- 결정 사항 (✅ 표시)\n- 미결 사항 (❓ 표시)\n- 액션 아이템 (👉 담당자 + 기한)',
    templates: [
      { name: '회의 활용 가이드', link: '/guide/meeting' },
      { name: 'Projects & Memory', link: '/guide/projects' },
      { name: '프롬프트 치트시트', link: '/resources/cheatsheet' },
    ],
  },
  r_post_meeting: {
    title: '회의록 정리 및 공유',
    page: '회의 활용 > 회의록',
    link: '/guide/meeting#회의록',
    prompt: '다음 회의 내용을 회의록으로 정리해줘:\n\n[회의 메모/녹음 내용 붙여넣기]\n\n형식:\n1. 회의 개요 (일시, 참석자, 목적)\n2. 주요 논의 사항\n3. 결정 사항\n4. 액션 아이템 (담당자, 기한)\n5. 다음 회의 안내',
    templates: [
      { name: '회의록 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: '회의 활용 가이드', link: '/guide/meeting' },
    ],
    workflow: '회의 메모 취합 → Claude로 회의록 작성 → 참석자 검토 → 공유',
  },
  r_daily: {
    title: '매일 반복 업무 자동화',
    page: '일상 업무 > 매일',
    link: '/guide/daily#매일',
    prompt: '매일 아침 해야 하는 업무를 도와줘:\n\n1. 어제 업무 요약 정리\n2. 오늘 할 일 우선순위 정리\n3. 이메일 회신 초안 3건 작성\n4. 일일 보고 초안 작성\n\n[어제 업무 내용과 오늘 일정 붙여넣기]',
    templates: [
      { name: '일상 업무 자동화', link: '/guide/daily' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: 'Projects & Memory', link: '/guide/projects' },
    ],
    workflow: '출근 → Claude에 어제 메모 전달 → 오늘 할 일 정리 → 실행',
  },
  r_weekly: {
    title: '매주 반복 업무 자동화',
    page: '일상 업무 > 매주',
    link: '/guide/daily#매주',
    prompt: '이번 주 업무를 정리하고 다음 주 계획을 세워줘:\n\n이번 주 완료 업무:\n[목록 작성]\n\n진행 중 업무:\n[목록 작성]\n\n다음 주 주요 일정:\n[일정 작성]\n\n주간 보고서 형식으로 정리해줘.',
    templates: [
      { name: '일상 업무 자동화', link: '/guide/daily' },
      { name: '보고서 템플릿', link: '/resources/templates#보고서' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
    ],
    workflow: '금요일 오후 → 주간 업무 정리 → Claude로 주간보고 작성 → 제출',
  },
  r_monthly: {
    title: '매달 반복 업무 자동화',
    page: '일상 업무 > 매달',
    link: '/guide/daily#매달',
    prompt: '이번 달 월간 보고서를 작성해줘:\n\n- 주요 성과: [성과 목록]\n- 핵심 지표: [KPI 데이터]\n- 이슈/리스크: [발생한 문제]\n- 다음 달 계획: [계획]\n\n경영진 보고용으로 간결하게 정리해줘.',
    templates: [
      { name: '일상 업무 자동화', link: '/guide/daily' },
      { name: '보고서 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: 'ROI 계산기', link: '/resources/roi-calculator' },
    ],
  },
  r_competitor: {
    title: '경쟁사/시장 분석',
    page: '워크플로우 > 경쟁사 분석',
    link: '/guide/workflows#경쟁사-분석',
    prompt: '다음 기업/서비스에 대한 경쟁 분석을 해줘:\n\n- 우리 회사/서비스: [이름]\n- 비교 대상: [경쟁사 1, 2, 3]\n- 비교 항목: 가격, 기능, 타겟 고객, 강점/약점\n\n비교표와 SWOT 분석을 포함해줘.\n시장 트렌드와 차별화 전략도 제안해줘.',
    templates: [
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: '부서별 활용 사례', link: '/guide/by-dept' },
      { name: '데이터 분석 가이드', link: '/guide/data' },
    ],
  },
  r_summary: {
    title: '내부 자료 요약',
    page: '데이터 분석 > 요약',
    link: '/guide/data#요약',
    prompt: '다음 자료를 요약해줘:\n\n[자료 내용 붙여넣기]\n\n요약 조건:\n- 핵심 포인트 5개 이내로 정리\n- 전문 용어는 쉽게 풀어서 설명\n- 3줄 요약 + 상세 요약 두 가지 버전으로\n- 후속 조치가 필요한 항목 별도 표시',
    templates: [
      { name: '데이터 분석 가이드', link: '/guide/data' },
      { name: '프롬프트 치트시트', link: '/resources/cheatsheet' },
      { name: '질문 잘하는 법', link: '/tips/prompting' },
    ],
  },
  r_trend: {
    title: '트렌드 파악',
    page: '부서별 > R&D',
    link: '/guide/by-dept#r-d',
    prompt: '다음 분야의 최신 트렌드를 정리해줘:\n\n- 분야: [산업/분야명]\n- 기간: 최근 6개월~1년\n- 관심 키워드: [키워드 1, 2, 3]\n\n주요 트렌드 5가지를 선정하고,\n각각에 대해 배경, 현황, 전망, 우리 회사 시사점을 정리해줘.',
    templates: [
      { name: '부서별 활용 사례', link: '/guide/by-dept' },
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: '데이터 분석 가이드', link: '/guide/data' },
    ],
  },
  r_ko_en: {
    title: '한국어 → 영어 번역',
    page: '첫 대화 > 번역',
    link: '/guide/first-chat#번역',
    prompt: '다음 한국어 텍스트를 영어로 번역해줘:\n\n[한국어 텍스트 붙여넣기]\n\n조건:\n- 비즈니스 문서에 적합한 격식체\n- 원문의 뉘앙스를 최대한 살려줘\n- 어색한 직역 대신 자연스러운 영어 표현 사용\n- 번역 시 주의한 부분이 있으면 설명해줘',
    templates: [
      { name: '번역 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '프롬프트 템플릿', link: '/resources/templates' },
      { name: '첫 대화해보기', link: '/guide/first-chat' },
    ],
  },
  r_en_ko: {
    title: '영어 → 한국어 번역',
    page: '첫 대화 > 번역',
    link: '/guide/first-chat#번역',
    prompt: '다음 영어 텍스트를 한국어로 번역해줘:\n\n[영어 텍스트 붙여넣기]\n\n조건:\n- 자연스러운 한국어 비즈니스 문체\n- 전문 용어는 원어 병기 (예: ROI(투자수익률))\n- 한국 비즈니스 맥락에 맞게 조정\n- 의역이 필요한 부분은 원문과 함께 설명해줘',
    templates: [
      { name: '번역 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '프롬프트 템플릿', link: '/resources/templates' },
      { name: '첫 대화해보기', link: '/guide/first-chat' },
    ],
  },
  r_multi: {
    title: '다국어 동시 번역',
    page: '워크플로우 > 다국어 콘텐츠',
    link: '/guide/workflows#다국어-콘텐츠',
    prompt: '다음 텍스트를 여러 언어로 동시에 번역해줘:\n\n[원본 텍스트 붙여넣기]\n\n번역할 언어: 영어, 일본어, 중국어(간체)\n\n각 언어별로 표 형식으로 정리해줘.\n문화적 맥락에 맞게 현지화도 반영해줘.',
    templates: [
      { name: '워크플로우 레시피', link: '/guide/workflows' },
      { name: '번역 프롬프트 빌더', link: '/resources/prompt-builder' },
      { name: '부서별 활용 사례', link: '/guide/by-dept' },
    ],
  },
}

const breadcrumbLabels = {
  q1: '시작',
  q2a: '문서/글 작성',
  q2b: '데이터 분석/정리',
  q2c: '회의/협업',
  q2d: '반복 업무 자동화',
  q2e: '자료 조사/리서치',
  q2f: '번역/다국어',
}

const currentQuestion = computed(() => tree[step.value] || null)
const currentResult = computed(() => results[step.value] || null)
const isResult = computed(() => step.value.startsWith('r_'))

const breadcrumbs = computed(() => {
  const crumbs = []
  for (const h of history.value) {
    crumbs.push({ key: h.step, label: breadcrumbLabels[h.step] || h.step, choiceLabel: h.choiceLabel })
  }
  if (!isResult.value && step.value) {
    crumbs.push({ key: step.value, label: breadcrumbLabels[step.value] || step.value, choiceLabel: null })
  }
  if (isResult.value && currentResult.value) {
    crumbs.push({ key: step.value, label: currentResult.value.title, choiceLabel: null })
  }
  return crumbs
})

const copied = ref(false)

function choose(option) {
  history.value.push({ step: step.value, choiceLabel: option.label })
  step.value = option.next
  copied.value = false
  nextTick(() => {
    const el = document.getElementById('dt-current')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

function goTo(key) {
  const idx = history.value.findIndex(h => h.step === key)
  if (idx !== -1) {
    history.value = history.value.slice(0, idx)
    step.value = key
    copied.value = false
  }
}

function reset() {
  step.value = 'q1'
  history.value = []
  copied.value = false
}

async function copyPrompt(text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2200)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2200)
  }
}
</script>

<div class="dt-container">

<!-- Breadcrumb -->
<div class="dt-breadcrumb" v-if="history.length > 0">
  <span
    v-for="(crumb, i) in breadcrumbs"
    :key="crumb.key + i"
    class="dt-crumb-item"
  >
    <button
      v-if="i < breadcrumbs.length - 1"
      class="dt-crumb-link"
      @click="goTo(crumb.key)"
    >{{ crumb.label }}</button>
    <span v-else class="dt-crumb-current">{{ crumb.label }}</span>
    <span v-if="crumb.choiceLabel" class="dt-crumb-choice">{{ crumb.choiceLabel }}</span>
    <span v-if="i < breadcrumbs.length - 1" class="dt-crumb-sep">›</span>
  </span>
</div>

<!-- Question Card -->
<div v-if="currentQuestion && !isResult" id="dt-current" class="dt-question-card">
  <div class="dt-question-badge">
    <span class="dt-question-step">{{ step.value === 'q1' ? 'Q1' : 'Q2' }}</span>
    질문
  </div>
  <h3 class="dt-question-text">{{ currentQuestion.question }}</h3>
  <div class="dt-options">
    <button
      v-for="opt in currentQuestion.options"
      :key="opt.label"
      class="dt-option-btn"
      @click="choose(opt)"
    >
      <span class="dt-option-icon">{{ opt.icon }}</span>
      <span class="dt-option-label">{{ opt.label }}</span>
      <span class="dt-option-arrow">→</span>
    </button>
  </div>
</div>

<!-- Result Card -->
<div v-if="isResult && currentResult" id="dt-current" class="dt-result-card">
  <div class="dt-result-badge">추천 결과</div>
  <h3 class="dt-result-title">{{ currentResult.title }}</h3>

  <!-- 추천 페이지 -->
  <div class="dt-result-section">
    <div class="dt-result-section-label">📖 추천 페이지</div>
    <a :href="currentResult.link" class="dt-page-link">
      {{ currentResult.page }}
      <span class="dt-link-arrow">→</span>
    </a>
  </div>

  <!-- 바로 쓸 수 있는 프롬프트 -->
  <div class="dt-result-section">
    <div class="dt-result-section-label">💬 바로 쓸 수 있는 프롬프트</div>
    <div class="dt-prompt-box">
      <pre class="dt-prompt-text">{{ currentResult.prompt }}</pre>
      <button class="dt-copy-btn" @click="copyPrompt(currentResult.prompt)">
        {{ copied ? '✅ 복사 완료!' : '📋 복사하기' }}
      </button>
    </div>
  </div>

  <!-- 워크플로우 (있을 때만) -->
  <div v-if="currentResult.workflow" class="dt-result-section">
    <div class="dt-result-section-label">🔄 추천 워크플로우</div>
    <div class="dt-workflow">{{ currentResult.workflow }}</div>
  </div>

  <!-- 팁 (있을 때만) -->
  <div v-if="currentResult.tip" class="dt-result-section">
    <div class="dt-tip">💡 <strong>Tip:</strong> {{ currentResult.tip }}</div>
  </div>

  <!-- 관련 템플릿 링크 -->
  <div class="dt-result-section">
    <div class="dt-result-section-label">🔗 관련 페이지</div>
    <div class="dt-template-links">
      <a
        v-for="tpl in currentResult.templates"
        :key="tpl.name"
        :href="tpl.link"
        class="dt-template-link"
      >
        {{ tpl.name }}
        <span class="dt-link-arrow">→</span>
      </a>
    </div>
  </div>

  <!-- 처음부터 다시 -->
  <button class="dt-reset-btn" @click="reset">
    🔄 처음부터 다시
  </button>
</div>

</div>

<style>
.dt-container {
  margin: 24px 0;
}

/* Breadcrumb */
.dt-breadcrumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  padding: 10px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  font-size: 0.85rem;
}

.dt-crumb-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.dt-crumb-link {
  background: none;
  border: none;
  color: #E87040;
  cursor: pointer;
  font-size: 0.85rem;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.15s;
}

.dt-crumb-link:hover {
  background: rgba(232, 112, 64, 0.1);
}

.dt-crumb-current {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 0.85rem;
}

.dt-crumb-choice {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  font-style: italic;
}

.dt-crumb-sep {
  color: var(--vp-c-text-3);
  margin: 0 2px;
  font-size: 0.9rem;
}

/* Question Card */
.dt-question-card {
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.3s;
}

.dt-question-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 14px;
  border-radius: 20px;
  background: rgba(232, 112, 64, 0.1);
  color: #E87040;
  font-weight: 600;
  font-size: 0.82rem;
  margin-bottom: 16px;
}

.dt-question-step {
  background: #E87040;
  color: #fff;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 10px;
}

.dt-question-text {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 24px 0;
  border: none;
  padding: 0;
}

.dt-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dt-option-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;
}

.dt-option-btn:hover {
  border-color: #E87040;
  transform: translateX(6px);
  box-shadow: 0 4px 16px rgba(232, 112, 64, 0.12);
}

.dt-option-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 36px;
  text-align: center;
}

.dt-option-label {
  flex: 1;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.dt-option-arrow {
  color: var(--vp-c-text-3);
  font-size: 1.1rem;
  transition: transform 0.2s, color 0.2s;
}

.dt-option-btn:hover .dt-option-arrow {
  transform: translateX(4px);
  color: #E87040;
}

/* Result Card */
.dt-result-card {
  border: 2px solid #E87040;
  border-radius: 16px;
  padding: 32px;
  background: var(--vp-c-bg-soft);
}

.dt-result-badge {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 20px;
  background: #E87040;
  color: #fff;
  font-weight: 700;
  font-size: 0.82rem;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
}

.dt-result-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 0 0 28px 0;
  border: none;
  padding: 0;
}

.dt-result-section {
  margin-bottom: 24px;
}

.dt-result-section-label {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 10px;
}

/* Page link */
.dt-page-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 2px solid #E87040;
  border-radius: 10px;
  color: #E87040;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
}

.dt-page-link:hover {
  background: rgba(232, 112, 64, 0.08);
  transform: translateX(4px);
}

.dt-link-arrow {
  transition: transform 0.2s;
}

.dt-page-link:hover .dt-link-arrow,
.dt-template-link:hover .dt-link-arrow {
  transform: translateX(3px);
}

/* Prompt box */
.dt-prompt-box {
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.dt-prompt-text {
  padding: 20px;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
  font-family: inherit;
  background: transparent;
}

.dt-copy-btn {
  display: block;
  width: 100%;
  padding: 12px;
  background: rgba(232, 112, 64, 0.06);
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  color: #E87040;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
}

.dt-copy-btn:hover {
  background: rgba(232, 112, 64, 0.12);
}

/* Workflow */
.dt-workflow {
  padding: 14px 18px;
  background: rgba(232, 112, 64, 0.06);
  border-left: 4px solid #E87040;
  border-radius: 0 10px 10px 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
  letter-spacing: 0.3px;
}

/* Tip */
.dt-tip {
  padding: 14px 18px;
  background: rgba(232, 112, 64, 0.06);
  border-left: 4px solid #E87040;
  border-radius: 0 10px 10px 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

/* Template links */
.dt-template-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.dt-template-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  font-size: 0.88rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.dt-template-link:hover {
  border-color: #E87040;
  color: #E87040;
  background: rgba(232, 112, 64, 0.05);
}

/* Reset button */
.dt-reset-btn {
  display: block;
  width: 100%;
  margin-top: 28px;
  padding: 14px;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.dt-reset-btn:hover {
  border-color: #E87040;
  color: #E87040;
  background: rgba(232, 112, 64, 0.05);
}

/* Responsive */
@media (max-width: 640px) {
  .dt-question-card,
  .dt-result-card {
    padding: 20px;
  }

  .dt-question-text {
    font-size: 1.15rem;
  }

  .dt-result-title {
    font-size: 1.2rem;
  }

  .dt-option-btn {
    padding: 14px 16px;
    gap: 10px;
  }

  .dt-option-icon {
    font-size: 1.3rem;
    width: 28px;
  }

  .dt-template-links {
    flex-direction: column;
  }
}
</style>
