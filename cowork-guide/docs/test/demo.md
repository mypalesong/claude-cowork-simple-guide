# Cowork 체험하기

> 실제 Cowork를 설치하기 전에, 어떤 느낌인지 미리 체험해보세요!

<script setup>
import { ref, computed, nextTick } from 'vue'

const scenarios = {
  email: {
    icon: '📧',
    title: '이메일 작성 체험',
    desc: '비즈니스 이메일을 함께 작성합니다',
    conversation: [
      {
        user: '거래처에 프로젝트 일정 변경 요청 이메일을 써줘. 개발팀 인력 부족으로 납품이 2주 연기될 것 같아.',
        claude: `네, 프로젝트 일정 변경 요청 이메일을 작성해 드리겠습니다.\n\n---\n\n**제목:** [프로젝트명] 납품 일정 조정 요청의 건\n\n안녕하세요, ○○○ 담당자님.\n\n항상 좋은 협력에 감사드립니다.\n\n내부 검토 결과, 개발 인력 운영 상의 사유로 인해 당초 예정된 납품 일정에서 **약 2주간 조정**이 필요한 상황이 발생하였습니다.\n\n- **기존 일정:** 3월 31일\n- **변경 요청 일정:** 4월 14일\n- **사유:** 핵심 개발 인력 재배치에 따른 일정 조정\n\n품질에는 영향이 없도록 최선을 다하겠습니다. 변경 일정에 대해 검토 후 회신 부탁드립니다.\n\n감사합니다.\n\n---\n\n톤이나 수정할 부분이 있으면 말씀해주세요!`
      },
      {
        user: '좋아. 근데 "인력 부족"이라는 표현은 좀 부정적이니까 다른 표현으로 바꿔줘. 그리고 대안도 제시하는 느낌으로.',
        claude: `좋은 포인트입니다! "인력 부족" 대신 긍정적인 표현으로 수정하고, 대안을 포함하겠습니다.\n\n---\n\n**제목:** [프로젝트명] 납품 일정 협의 요청\n\n안녕하세요, ○○○ 담당자님.\n\n항상 좋은 협력에 감사드립니다.\n\n프로젝트 품질 강화를 위해 내부 리소스를 **재편성**하게 되었으며, 이에 따라 납품 일정 조정을 협의드리고자 합니다.\n\n**일정 변경 요청:**\n- 기존: 3월 31일 → **변경: 4월 14일**\n\n**대안 제시:**\n1. 핵심 기능을 3월 31일에 **우선 납품**하고, 부가 기능은 4월 14일 제공\n2. 전체 일정을 4월 14일로 조정하되, **중간 진행 보고**를 주 1회 제공\n\n귀사에 가장 적합한 방안을 말씀해주시면 맞춰 진행하겠습니다.\n\n감사합니다.\n\n---\n\n이 정도면 어떠신가요?`
      },
      {
        user: '2번 대안이 좋아. 중간 보고는 매주 금요일로 하고, 최종 버전으로 정리해줘.',
        claude: `네! 2번 대안을 반영한 최종 버전입니다.\n\n---\n\n**제목:** [프로젝트명] 납품 일정 협의 요청\n\n○○○ 담당자님, 안녕하세요.\n평소 좋은 협력에 깊이 감사드립니다.\n\n프로젝트 품질을 더욱 강화하기 위해 내부 리소스를 재편성하게 되어, 납품 일정 조정을 협의드립니다.\n\n**📅 변경 요청 일정**\n- 기존 납품일: 3월 31일\n- 요청 납품일: **4월 14일 (월)**\n\n**📋 진행 관리 방안**\n- **매주 금요일** 중간 진행 보고서 발송\n- 진행률, 주요 완료 항목, 다음 주 계획 포함\n- 첫 보고: 3월 21일(금) 예정\n\n일정 변경에 따른 불편을 최소화할 수 있도록 최선을 다하겠습니다. 검토 후 회신 부탁드립니다.\n\n감사합니다.\n[이름] 드림\n\n---\n\n✅ 이대로 복사해서 바로 사용하실 수 있습니다!`
      }
    ]
  },
  data: {
    icon: '📊',
    title: '데이터 분석 체험',
    desc: '매출 데이터를 함께 분석합니다',
    conversation: [
      {
        user: '1분기 매출 데이터야. 1월 3200만원, 2월 2800만원, 3월 4100만원. 전년 동기는 1월 2900만원, 2월 3100만원, 3월 3500만원이었어. 분석해줘.',
        claude: `1분기 매출 데이터를 분석해 드리겠습니다.\n\n**📊 1분기 매출 비교 분석**\n\n| 월 | 올해 | 전년 | 증감 | 증감률 |\n|---|---|---|---|---|\n| 1월 | 3,200만 | 2,900만 | +300만 | **+10.3%** |\n| 2월 | 2,800만 | 3,100만 | -300만 | **-9.7%** |\n| 3월 | 4,100만 | 3,500만 | +600만 | **+17.1%** |\n| **합계** | **1억 100만** | **9,500만** | **+600만** | **+6.3%** |\n\n**🔍 주요 인사이트:**\n1. 전체적으로 **전년 대비 6.3% 성장**\n2. 2월이 유일하게 역성장 — 원인 파악 필요\n3. 3월 반등이 강력 (+17.1%) — 어떤 요인이 있었는지 확인 추천\n\n2월 매출 하락 원인에 대해 아시는 내용이 있으신가요?`
      },
      {
        user: '2월에 설 연휴 때문에 영업일이 적었어. 그리고 3월에는 신규 고객사 2곳이 추가됐어.',
        claude: `아, 그러면 상황이 훨씬 명확해지네요!\n\n**📋 수정 분석:**\n\n**2월 역성장 원인:**\n- 설 연휴로 인한 **영업일 감소** (약 3~4일)\n- 영업일 기준 일평균 매출로 환산하면 오히려 **정상 수준 또는 소폭 성장**으로 추정\n- 즉, 실질적 역성장 아님 ✅\n\n**3월 급성장 요인 분해:**\n- 전년 대비 +600만원 (+17.1%)\n- 신규 고객사 2곳 기여분을 별도로 파악하면:\n  - **기존 고객 매출:** 추정 약 3,500~3,600만원 (전년 수준 유지)\n  - **신규 고객 매출:** 추정 약 500~600만원\n\n**💡 핵심 시사점:**\n1. 기존 매출은 **안정적으로 유지**되고 있음\n2. 성장은 주로 **신규 고객 확보**에서 발생\n3. 2분기 전략: 신규 고객 확보 페이스 유지 + 기존 고객 단가 상승 추진\n\n이 내용을 보고서 형태로 정리해 드릴까요?`
      },
      {
        user: '응, 팀장님께 보고할 수 있게 간단한 요약 보고서로 정리해줘.',
        claude: `네! 보고용 요약 보고서입니다.\n\n---\n\n## 📊 2024년 1분기 매출 분석 보고\n\n**보고일:** 2024.04.01 | **작성:** ○○팀\n\n### 1. 실적 요약\n- 1분기 총 매출: **1억 100만원** (전년 동기 대비 **+6.3%**)\n- 신규 고객사 **2곳** 확보 (3월)\n\n### 2. 월별 분석\n| 구분 | 1월 | 2월 | 3월 |\n|---|---|---|---|\n| 매출 | 3,200만 | 2,800만 | 4,100만 |\n| 전년비 | +10.3% | -9.7%* | +17.1% |\n\n*2월: 설 연휴에 따른 영업일 감소 영향 (실질 성장세 유지)\n\n### 3. 핵심 성과\n- ✅ 기존 고객 매출 **안정적 유지**\n- ✅ 신규 고객 2곳 확보로 **성장 동력 확보**\n- ✅ 3월 월 매출 **역대 최고** 기록\n\n### 4. 2분기 제안\n1. 신규 고객 확보 **월 1건 이상** 목표\n2. 기존 고객 **업셀링** 기회 발굴\n3. 월별 매출 목표: **3,500만원** (연 매출 4.2억 페이스)\n\n---\n\n이대로 사용하시거나 수정이 필요하시면 말씀해주세요!`
      }
    ]
  },
  meeting: {
    icon: '📝',
    title: '회의록 정리 체험',
    desc: '회의 내용을 체계적으로 정리합니다',
    conversation: [
      {
        user: '오늘 회의 내용이야. 참석자는 김팀장, 이대리, 박사원. 신규 프로젝트 론칭 일정 논의했고, 김팀장이 4월 초가 좋겠다고 했어. 이대리는 디자인 시안이 아직 안 나왔다고 했고, 박사원은 QA에 최소 2주 필요하다고 했어. 결론은 4월 셋째 주로 정하고, 다음 주 수요일에 중간 점검하기로 했어.',
        claude: `회의록을 정리해 드리겠습니다.\n\n---\n\n## 📋 회의록\n\n**회의명:** 신규 프로젝트 론칭 일정 논의\n**일시:** 2024년 3월 15일 (금)\n**참석자:** 김팀장, 이대리, 박사원\n\n---\n\n### 논의 내용\n\n**1. 론칭 일정 검토**\n- 김팀장: 4월 초 론칭이 적정하다는 의견 제시\n- 일정 제약 사항 공유 후 조정 논의\n\n**2. 현재 진행 상황 및 이슈**\n| 담당자 | 항목 | 상태 |\n|---|---|---|\n| 이대리 | 디자인 시안 | ⚠️ **미완료** (작업 중) |\n| 박사원 | QA 테스트 | 📌 최소 **2주 소요** 예상 |\n\n**3. 일정 리스크**\n- 디자인 시안 완료 → QA 진행 순서이므로, 4월 초는 빠듯함\n\n---\n\n### ✅ 결정 사항\n1. 론칭일: **4월 셋째 주** (4/15~19 중 확정 예정)\n2. 중간 점검 회의: **다음 주 수요일 (3/20)**\n\n### 📌 Action Items\n| 담당 | 할 일 | 기한 |\n|---|---|---|\n| 이대리 | 디자인 시안 1차 완성 | 3/20 (수) 전 |\n| 박사원 | QA 테스트 계획서 작성 | 3/20 (수) 전 |\n| 김팀장 | 론칭 세부 일정표 초안 | 3/20 (수) 전 |\n\n---\n\n혹시 빠진 내용이나 수정할 부분이 있나요?`
      },
      {
        user: '아 맞다, 이대리가 디자인 시안은 이번 주 금요일까지 가능하다고 했어. 그리고 마케팅팀이랑 협의도 필요하다는 얘기도 나왔어.',
        claude: `내용 추가 반영하겠습니다!\n\n**📝 수정 사항:**\n\n**1. 디자인 일정 업데이트**\n- 이대리: 디자인 시안 **이번 주 금요일 (3/15)** 완료 가능\n- ⚠️ → ✅ 일정 내 완료 가능 확인\n\n**2. 추가 논의 사항**\n- 마케팅팀 협의 필요\n  - 론칭 홍보 일정 조율\n  - 마케팅 자료 준비 기간 확보 필요\n\n---\n\n### 📌 수정된 Action Items\n| 담당 | 할 일 | 기한 | 상태 |\n|---|---|---|---|\n| 이대리 | 디자인 시안 1차 완성 | **3/15 (금)** | 🔄 진행 중 |\n| 박사원 | QA 테스트 계획서 작성 | 3/20 (수) 전 | 📌 예정 |\n| 김팀장 | 론칭 세부 일정표 초안 | 3/20 (수) 전 | 📌 예정 |\n| 김팀장 | **마케팅팀 미팅 요청** | **3/18 (월)** | 🆕 추가 |\n\n이 정도면 전체 내용이 다 반영된 걸까요?`
      },
      {
        user: '완벽해. 이걸 팀 슬랙에 공유할 수 있게 간결하게 줄여줘.',
        claude: `슬랙 공유용 간결 버전입니다!\n\n---\n\n**🗓️ 신규 프로젝트 론칭 회의 요약** (3/15)\n\n참석: 김팀장, 이대리, 박사원\n\n**📌 결정 사항**\n• 론칭일: **4월 셋째 주** 확정\n• 중간 점검: **3/20 (수)**\n\n**✅ Action Items**\n• 이대리 — 디자인 시안 완성 (3/15)\n• 박사원 — QA 계획서 (3/20)\n• 김팀장 — 일정표 초안 + 마케팅팀 미팅 요청 (3/18)\n\n**⚠️ 참고**\n• QA 최소 2주 소요\n• 마케팅팀 협의 필요 (홍보 일정)\n\n궁금한 점 있으면 코멘트 남겨주세요! 🙏\n\n---\n\n복사해서 바로 슬랙에 붙여넣기 하시면 됩니다!`
      }
    ]
  },
  report: {
    icon: '📋',
    title: '보고서 작성 체험',
    desc: '주간 보고서를 함께 작성합니다',
    conversation: [
      {
        user: '이번 주 업무 내용이야. 1) 고객사 A 미팅 2회 진행, 계약 조건 협의 중. 2) 신규 제안서 초안 작성 완료. 3) 내부 시스템 오류 때문에 하루 업무 지연됨. 주간 보고서로 만들어줘.',
        claude: `주간 보고서를 작성해 드리겠습니다.\n\n---\n\n## 📋 주간 업무 보고\n\n**기간:** 2024.03.11 (월) ~ 03.15 (금)\n**작성자:** ○○○\n\n---\n\n### ✅ 금주 실적\n\n**1. 고객사 A 미팅 진행** (2회)\n- 1차 미팅: 계약 범위 및 기본 조건 논의\n- 2차 미팅: 세부 계약 조건 협의\n- 현재 상태: **협의 진행 중** (주요 조건 조율 단계)\n\n**2. 신규 제안서 초안 작성** ✅ 완료\n- 제안서 초안 작성 완료\n- 내부 검토 후 발송 예정\n\n**3. 이슈 사항**\n- ⚠️ 내부 시스템 오류 발생으로 **1일 업무 지연**\n- 현재 시스템 복구 완료\n\n---\n\n### 📊 진행률\n| 항목 | 목표 | 실적 | 달성률 |\n|---|---|---|---|\n| 고객사 미팅 | 2회 | 2회 | 100% |\n| 제안서 작성 | 초안 완료 | 완료 | 100% |\n\n---\n\n다음 주 계획도 추가할까요?`
      },
      {
        user: '응. 다음 주에는 고객사 A 최종 계약 목표, 제안서 팀장님 검토 받기, 그리고 신규 리드 3건 발굴이 목표야.',
        claude: `다음 주 계획을 추가하겠습니다!\n\n---\n\n### 📅 차주 계획 (03.18 ~ 03.22)\n\n| 우선순위 | 업무 | 목표 | 기한 |\n|---|---|---|---|\n| 🔴 높음 | 고객사 A 계약 | **최종 계약 체결** | 3/22 (금) |\n| 🟡 중간 | 제안서 검토 | 팀장님 피드백 반영 후 **확정** | 3/20 (수) |\n| 🟡 중간 | 신규 리드 발굴 | **3건** 이상 확보 | 3/22 (금) |\n\n**세부 계획:**\n\n**1. 고객사 A 최종 계약** 🎯\n- 월요일: 최종 조건 정리 및 내부 승인\n- 수~목: 계약서 교환 및 서명\n- 금요일: 계약 체결 완료 목표\n\n**2. 제안서 확정**\n- 월요일: 팀장님 검토 요청\n- 수요일까지: 피드백 반영 및 최종본 완성\n\n**3. 신규 리드 발굴**\n- 목표: 3건\n- 채널: 기존 네트워크 + 인바운드 문의 대응\n\n---\n\n이 내용으로 종합 보고서를 완성할까요?`
      },
      {
        user: '좋아, 전체를 하나로 합쳐서 최종 보고서로 정리해줘.',
        claude: `최종 주간 보고서입니다!\n\n---\n\n## 📋 주간 업무 보고서\n\n**기간:** 2024.03.11 ~ 03.15\n**작성자:** ○○○ | **부서:** ○○팀\n\n---\n\n### 1. 금주 실적 요약\n\n| 항목 | 내용 | 상태 |\n|---|---|---|\n| 고객사 A 미팅 | 2회 진행, 계약 조건 협의 중 | 🔄 진행 중 |\n| 신규 제안서 | 초안 작성 완료 | ✅ 완료 |\n| 시스템 이슈 | 내부 오류로 1일 지연 (복구 완료) | ⚠️ 해결 |\n\n### 2. 주요 성과\n- 고객사 A와 **2회 미팅**을 통해 핵심 계약 조건 합의 근접\n- 신규 제안서 초안을 **일정 내 완료**하여 차주 검토 가능\n\n### 3. 이슈 및 리스크\n- 내부 시스템 오류로 1일 지연 발생 → **현재 복구 완료**\n- 향후 재발 방지를 위한 모니터링 필요\n\n### 4. 차주 계획 (03.18 ~ 03.22)\n\n| 우선순위 | 업무 | 목표 | 기한 |\n|---|---|---|---|\n| 🔴 | 고객사 A 계약 체결 | 최종 서명 완료 | 3/22 |\n| 🟡 | 제안서 팀장 검토 | 최종본 확정 | 3/20 |\n| 🟡 | 신규 리드 발굴 | 3건 확보 | 3/22 |\n\n### 5. 건의/지원 요청 사항\n- 고객사 A 계약 관련 **법무팀 검토** 지원 요청\n- 시스템 안정성 점검 요청\n\n---\n\n✅ 바로 제출하실 수 있는 형태입니다. 수정이 필요하시면 말씀해주세요!`
      }
    ]
  }
}

const selectedScenario = ref(null)
const currentStep = ref(0)
const messages = ref([])
const isTyping = ref(false)
const chatContainerRef = ref(null)

function getTime(offsetMinutes = 0) {
  const base = new Date()
  base.setHours(14, 30 + offsetMinutes, 0)
  return base.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: true })
}

function scrollToBottom() {
  nextTick(() => {
    if (chatContainerRef.value) {
      chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight
    }
  })
}

function selectScenario(key) {
  selectedScenario.value = key
  currentStep.value = 0
  messages.value = []
  isTyping.value = false
  startStep()
}

function startStep() {
  const scenario = scenarios[selectedScenario.value]
  const step = scenario.conversation[currentStep.value]

  messages.value.push({
    role: 'user',
    text: step.user,
    time: getTime(currentStep.value * 3)
  })
  scrollToBottom()

  isTyping.value = true
  scrollToBottom()

  setTimeout(() => {
    isTyping.value = false
    messages.value.push({
      role: 'claude',
      text: step.claude,
      time: getTime(currentStep.value * 3 + 1)
    })
    scrollToBottom()
  }, 1800)
}

function nextStep() {
  currentStep.value++
  const scenario = scenarios[selectedScenario.value]
  if (currentStep.value < scenario.conversation.length) {
    startStep()
  }
}

function resetDemo() {
  selectedScenario.value = null
  currentStep.value = 0
  messages.value = []
  isTyping.value = false
}

const isConversationDone = computed(() => {
  if (!selectedScenario.value) return false
  const scenario = scenarios[selectedScenario.value]
  return currentStep.value >= scenario.conversation.length - 1 && !isTyping.value && messages.value.length > 0
})

const canAdvance = computed(() => {
  if (!selectedScenario.value) return false
  const scenario = scenarios[selectedScenario.value]
  return !isTyping.value && currentStep.value < scenario.conversation.length - 1 && messages.value.length > 0
})

function formatMessage(text) {
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  // bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // headers
  html = html.replace(/^## (.+)$/gm, '<div style="font-size:1.1em;font-weight:700;margin:8px 0 4px;">$1</div>')
  html = html.replace(/^### (.+)$/gm, '<div style="font-size:1.05em;font-weight:700;margin:8px 0 4px;">$1</div>')
  // hr
  html = html.replace(/^---$/gm, '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.15);margin:10px 0;">')
  // table
  html = html.replace(/^\|(.+)\|$/gm, (match) => {
    const cells = match.split('|').filter(c => c.trim() !== '')
    if (cells.every(c => /^[\s-:]+$/.test(c))) return ''
    const cellHtml = cells.map(c => `<td style="padding:3px 8px;border:1px solid rgba(255,255,255,0.15);">${c.trim()}</td>`).join('')
    return `<tr>${cellHtml}</tr>`
  })
  html = html.replace(/(<tr>.*<\/tr>\n?)+/g, (match) => `<table style="border-collapse:collapse;margin:6px 0;font-size:0.9em;width:100%;">${match}</table>`)
  // bullet points
  html = html.replace(/^- (.+)$/gm, '<div style="padding-left:12px;">• $1</div>')
  html = html.replace(/^• (.+)$/gm, '<div style="padding-left:12px;">• $1</div>')
  // numbered lists
  html = html.replace(/^(\d+)\. (.+)$/gm, '<div style="padding-left:12px;">$1. $2</div>')
  // newlines
  html = html.replace(/\n/g, '<br>')
  // clean up double br
  html = html.replace(/(<br>){3,}/g, '<br><br>')
  return html
}
</script>

<div v-if="!selectedScenario" class="demo-selector">
  <p class="demo-selector-desc">체험할 시나리오를 선택하세요:</p>
  <div class="scenario-grid">
    <button
      v-for="(scenario, key) in scenarios"
      :key="key"
      class="scenario-card"
      @click="selectScenario(key)"
    >
      <span class="scenario-icon">{{ scenario.icon }}</span>
      <span class="scenario-title">{{ scenario.title }}</span>
      <span class="scenario-desc">{{ scenario.desc }}</span>
    </button>
  </div>
</div>

<div v-else class="demo-wrapper">
  <div class="demo-header">
    <button class="demo-back" @click="resetDemo">← 시나리오 선택</button>
    <span class="demo-title">{{ scenarios[selectedScenario].icon }} {{ scenarios[selectedScenario].title }}</span>
  </div>

  <div class="chat-window">
    <div class="chat-titlebar">
      <div class="chat-titlebar-dots">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
      <span class="chat-titlebar-text">Claude Cowork</span>
    </div>

    <div class="chat-messages" ref="chatContainerRef">
      <div
        v-for="(msg, i) in messages"
        :key="i"
        :class="['chat-bubble-row', msg.role === 'user' ? 'chat-row-right' : 'chat-row-left']"
      >
        <div v-if="msg.role === 'claude'" class="claude-avatar">C</div>
        <div :class="['chat-bubble', msg.role === 'user' ? 'bubble-user' : 'bubble-claude']">
          <div v-if="msg.role === 'claude'" v-html="formatMessage(msg.text)" class="bubble-content"></div>
          <div v-else class="bubble-content">{{ msg.text }}</div>
          <div class="bubble-time">{{ msg.time }}</div>
        </div>
      </div>

      <div v-if="isTyping" class="chat-bubble-row chat-row-left">
        <div class="claude-avatar">C</div>
        <div class="chat-bubble bubble-claude typing-bubble">
          <div class="typing-indicator">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
          </div>
          <div class="typing-text">Claude가 작성 중...</div>
        </div>
      </div>
    </div>

    <div class="chat-actions">
      <button
        v-if="canAdvance"
        class="btn-next"
        @click="nextStep"
      >
        다음 단계 →
      </button>
      <div v-if="isConversationDone" class="demo-complete">
        <p class="complete-text">체험이 완료되었습니다!</p>
        <div class="complete-actions">
          <a href="/guide/first-steps" class="btn-start">실제로 시작해보기 →</a>
          <button class="btn-retry" @click="resetDemo">다른 시나리오 체험하기</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style scoped>
.demo-selector {
  max-width: 700px;
  margin: 2rem auto;
}

.demo-selector-desc {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (max-width: 540px) {
  .scenario-grid {
    grid-template-columns: 1fr;
  }
}

.scenario-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: all 0.2s;
}

.scenario-card:hover {
  border-color: #e07b39;
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.scenario-icon {
  font-size: 2rem;
}

.scenario-title {
  font-weight: 700;
  font-size: 1.05rem;
}

.scenario-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* Demo wrapper */
.demo-wrapper {
  max-width: 700px;
  margin: 1.5rem auto;
}

.demo-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.demo-back {
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  transition: all 0.2s;
}

.demo-back:hover {
  border-color: #e07b39;
  color: #e07b39;
}

.demo-title {
  font-weight: 700;
  font-size: 1.1rem;
}

/* Chat window */
.chat-window {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.08);
}

.chat-titlebar {
  background: #2b2b2b;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-titlebar-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot-red { background: #ff5f57; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #28ca41; }

.chat-titlebar-text {
  color: #ccc;
  font-size: 0.85rem;
  font-weight: 600;
}

.chat-messages {
  background: #1a1a2e;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 3px;
}

/* Bubbles */
.chat-bubble-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.chat-row-right {
  justify-content: flex-end;
}

.chat-row-left {
  justify-content: flex-start;
}

.claude-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e07b39, #d4622b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 0.85rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.chat-bubble {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.9rem;
  line-height: 1.55;
  position: relative;
}

.bubble-user {
  background: #3b82f6;
  color: #fff;
  border-bottom-right-radius: 4px;
}

.bubble-claude {
  background: #2d2d44;
  color: #e0e0e0;
  border-bottom-left-radius: 4px;
}

.bubble-content {
  word-break: break-word;
}

.bubble-time {
  font-size: 0.7rem;
  opacity: 0.5;
  margin-top: 4px;
  text-align: right;
}

/* Typing indicator */
.typing-bubble {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
}

.typing-indicator {
  display: flex;
  gap: 4px;
}

.typing-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e07b39;
  animation: typingBounce 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typingBounce {
  0%, 80%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.typing-text {
  color: #aaa;
  font-size: 0.8rem;
  font-style: italic;
}

/* Actions */
.chat-actions {
  background: #222;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.btn-next {
  background: linear-gradient(135deg, #e07b39, #d4622b);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-next:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(224,123,57,0.4);
}

.demo-complete {
  text-align: center;
}

.complete-text {
  color: #aaa;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
}

.complete-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-start {
  background: linear-gradient(135deg, #e07b39, #d4622b);
  color: #fff !important;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none !important;
}

.btn-start:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(224,123,57,0.4);
}

.btn-retry {
  background: transparent;
  color: #aaa;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-retry:hover {
  border-color: rgba(255,255,255,0.4);
  color: #fff;
}
</style>
