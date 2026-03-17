# 톤 변환 체험

> 같은 내용도 톤에 따라 완전히 달라집니다. 5가지 톤의 차이를 직접 비교해보세요!

<script setup>
import { ref, computed } from 'vue'

const tones = [
  { id: 'formal', label: '공식/격식체', emoji: '📋', color: '#4A5568', desc: '공문 스타일, 딱딱하고 정중' },
  { id: 'friendly', label: '친근/캐주얼', emoji: '😊', color: '#38A169', desc: '동료에게 보내는 느낌' },
  { id: 'direct', label: '간결/직설적', emoji: '🎯', color: '#E53E3E', desc: '핵심만 짧게' },
  { id: 'professional', label: '비즈니스 프로페셔널', emoji: '💼', color: '#3182CE', desc: '세련되고 전문적' },
  { id: 'mz', label: 'MZ감성', emoji: '✨', color: '#D69E2E', desc: '이모지 포함, 가볍고 현대적' },
]

const scenarios = [
  { id: 'schedule', label: '프로젝트 일정 변경 안내', emoji: '📅' },
  { id: 'apology', label: '실수에 대한 사과', emoji: '🙇' },
  { id: 'collab', label: '협력 요청', emoji: '🤝' },
]

const emails = {
  schedule: {
    formal: {
      subject: '[공문] 프로젝트 납품 일정 변경 통보의 건',
      body: `수신: ○○○ 담당자님 귀하\n발신: △△팀 김○○\n\n상기 건에 대하여 아래와 같이 안내드립니다.\n\n내부 개발 리소스 재편성에 따라, 당초 예정되었던 납품 일정의 변경이 불가피하게 되었음을 알려드립니다.\n\n■ 변경 사항\n- 기존 납품일: 2026년 3월 31일\n- 변경 납품일: 2026년 4월 14일\n- 변경 사유: 프로젝트 품질 강화를 위한 내부 리소스 재편성\n\n본 일정 변경으로 인한 불편을 최소화하기 위해 만전을 기하겠습니다. 검토 후 회신하여 주시면 감사하겠습니다.\n\n이상입니다.\n\n△△팀 김○○ 드림`,
      prompt: '"공식 문서 형식으로 격식체를 사용하여 프로젝트 일정 변경 안내 이메일을 작성해줘. 공문 스타일로 정중하게."'
    },
    friendly: {
      subject: '일정 조정 건으로 연락드려요~',
      body: `○○○님, 안녕하세요! 😊\n\n잘 지내시죠? 다름이 아니라 프로젝트 일정 관련해서 말씀드릴 게 있어서요.\n\n내부적으로 좀 더 좋은 결과물을 위해 팀 구성을 살짝 바꾸게 됐는데요, 그래서 납품일이 3월 31일에서 4월 14일로 약 2주 정도 미뤄질 것 같아요.\n\n물론 품질은 더 좋아질 거예요! 혹시 일정 관련해서 걱정되시는 부분 있으시면 편하게 말씀해주세요. 최대한 맞춰볼게요~\n\n감사합니다!\n김○○ 드림`,
      prompt: '"동료에게 보내듯 친근하고 캐주얼한 톤으로 일정 변경 안내 이메일을 써줘. 부담 없는 느낌으로."'
    },
    direct: {
      subject: '납품일 변경: 3/31 → 4/14',
      body: `○○○님,\n\n납품일이 변경됩니다.\n\n• 기존: 3월 31일\n• 변경: 4월 14일\n• 사유: 내부 리소스 재편성\n\n품질에는 영향 없습니다.\n확인 후 회신 부탁드립니다.\n\n김○○`,
      prompt: '"핵심만 간결하게 전달하는 직설적인 톤으로 일정 변경 이메일을 써줘. 불필요한 수식어 없이 짧게."'
    },
    professional: {
      subject: '프로젝트 납품 일정 조정 협의 요청',
      body: `○○○ 담당자님, 안녕하세요.\n평소 좋은 협력에 감사드립니다.\n\n프로젝트 품질을 한층 강화하기 위해 내부 리소스를 전략적으로 재편성하게 되었습니다. 이에 따라 납품 일정 조정을 협의드리고자 합니다.\n\n📅 일정 변경 요청\n- 기존 납품일: 3월 31일\n- 요청 납품일: 4월 14일 (월)\n\n📋 품질 보장 방안\n- 매주 금요일 중간 진행 보고서 제공\n- 진행률 및 주요 완료 항목 공유\n\n일정 변경에 따른 불편을 최소화할 수 있도록 최선을 다하겠습니다. 검토 후 의견 회신 부탁드립니다.\n\n감사합니다.\n김○○ 드림`,
      prompt: '"세련되고 전문적인 비즈니스 톤으로 일정 변경 이메일을 써줘. 대안도 제시하면서 신뢰감 있게."'
    },
    mz: {
      subject: '📢 일정 살짝 변경됩니다!',
      body: `○○○님 안녕하세요! 👋\n\n프로젝트 관련해서 업데이트 드려요~\n\n✅ 더 좋은 퀄리티를 위해 팀을 리빌딩 했는데요!\n📆 그래서 납품일이 살짝 조정됩니다\n\n기존: 3/31 → 변경: 4/14 🔄\n\n2주 정도 더 걸리지만, 그만큼 완성도 높은 결과물로 보답할게요 💪\n\n궁금한 점 있으시면 언제든 DM 주세요!\n피드백 환영합니다 🙌\n\n감사합니다 ✨\n김○○`,
      prompt: '"MZ세대 감성으로 이모지 넣어서 가볍고 현대적인 톤의 일정 변경 이메일을 써줘. 딱딱하지 않게!"'
    },
  },
  apology: {
    formal: {
      subject: '[사과문] 보고서 데이터 오류 건에 대한 사과',
      body: `수신: ○○○ 팀장님 귀하\n발신: △△팀 김○○\n\n금번 제출된 1분기 매출 보고서 내 데이터 오류와 관련하여, 깊은 사과의 말씀을 드립니다.\n\n■ 오류 내용\n- 해당 문서: 2026년 1분기 매출 분석 보고서\n- 오류 항목: 3월 매출 데이터 (4,100만원 → 정확한 수치: 3,800만원)\n- 원인: 데이터 입력 시 검증 절차 미이행\n\n■ 재발 방지 대책\n1. 데이터 입력 후 이중 검증 절차 도입\n2. 보고서 제출 전 교차 확인 프로세스 수립\n\n수정된 보고서를 금일 중 재제출하겠습니다. 다시 한번 깊이 사과드립니다.\n\n△△팀 김○○ 드림`,
      prompt: '"공식 문서 형식의 격식체로 보고서 데이터 오류에 대한 사과 이메일을 써줘. 재발 방지 대책도 포함해서 정중하게."'
    },
    friendly: {
      subject: '보고서 건으로 죄송합니다 🙏',
      body: `○○○ 팀장님, 안녕하세요.\n\n먼저 정말 죄송하다는 말씀 드리고 싶어요. 어제 제출한 1분기 보고서에 제가 3월 매출 수치를 잘못 넣었더라고요. 4,100만원이라고 적었는데 정확한 건 3,800만원이에요.\n\n확인을 한 번 더 했어야 하는데, 제 실수입니다. 😓\n\n수정본은 오늘 안으로 다시 보내드릴게요! 앞으로는 숫자 한 번 더 꼼꼼히 체크하겠습니다.\n\n다시 한번 죄송합니다!\n김○○ 드림`,
      prompt: '"동료나 가까운 상사에게 보내듯 친근하지만 진심이 담긴 톤으로 실수 사과 이메일을 써줘."'
    },
    direct: {
      subject: '보고서 데이터 오류 정정',
      body: `○○○ 팀장님,\n\n1분기 보고서에 오류가 있었습니다.\n\n• 오류: 3월 매출 4,100만원 → 정확: 3,800만원\n• 원인: 입력 시 검증 누락\n• 조치: 오늘 중 수정본 제출\n\n재발 방지를 위해 이중 검증 절차를 도입하겠습니다.\n죄송합니다.\n\n김○○`,
      prompt: '"간결하고 직설적으로 실수를 인정하고 대처 방안을 전달하는 사과 이메일을 써줘. 군더더기 없이."'
    },
    professional: {
      subject: '1분기 매출 보고서 데이터 정정 및 사과',
      body: `○○○ 팀장님, 안녕하세요.\n\n어제 제출한 1분기 매출 분석 보고서에 데이터 오류가 확인되어, 진심으로 사과드립니다.\n\n📌 오류 내역\n- 3월 매출: 4,100만원(오류) → 3,800만원(정확)\n- 이로 인해 1분기 합계 및 증감률도 재산정이 필요합니다\n\n📋 대응 계획\n1. 수정 보고서: 금일 17시까지 재제출\n2. 영향 분석: 수정된 데이터 기반 인사이트 재정리\n\n🔒 재발 방지\n- 데이터 입력 후 원본 대조 검증 단계 추가\n- 제출 전 팀 내 교차 리뷰 프로세스 신설\n\n앞으로 이런 일이 반복되지 않도록 철저히 관리하겠습니다.\n\n감사합니다.\n김○○ 드림`,
      prompt: '"전문적이고 세련된 비즈니스 톤으로 사과 이메일을 써줘. 오류 인정, 대응 계획, 재발 방지까지 체계적으로."'
    },
    mz: {
      subject: '😱 보고서 수정 건 + 사과드립니다',
      body: `○○○ 팀장님 안녕하세요!\n\n어제 보고서 건으로 연락드려요... 🙇\n사실 3월 매출 데이터를 잘못 입력해버렸습니다 ㅠㅠ\n\n❌ 잘못된 수치: 4,100만원\n✅ 정확한 수치: 3,800만원\n\n변명의 여지가 없는 제 실수입니다 😓\n\n💡 바로 조치할게요!\n→ 오늘 안에 수정본 보내드림\n→ 앞으로 숫자 더블체크 필수로 할게요\n\n다시 한번 정말 죄송합니다 🙏\n믿고 맡겨주신 만큼 더 꼼꼼하게 하겠습니다!\n\n김○○ 드림`,
      prompt: '"MZ세대 감성으로 진심 어린 사과 이메일을 써줘. 이모지 활용하되 진정성은 유지해줘."'
    },
  },
  collab: {
    formal: {
      subject: '[협조 요청] 마케팅-개발팀 간 협업 프로젝트 제안의 건',
      body: `수신: 개발팀 ○○○ 팀장님 귀하\n발신: 마케팅팀 김○○\n\n귀 팀의 무궁한 발전을 기원합니다.\n\n마케팅팀에서는 고객 데이터 기반의 개인화 추천 시스템 구축을 계획하고 있으며, 이에 개발팀의 기술적 지원을 협조 요청드립니다.\n\n■ 프로젝트 개요\n- 프로젝트명: 고객 맞춤형 추천 시스템\n- 목표: 고객 이탈률 15% 감소\n- 예상 기간: 2026년 4월~6월 (3개월)\n\n■ 협조 요청 사항\n1. 데이터 파이프라인 구축 지원\n2. 추천 알고리즘 개발 인력 1인 파견\n3. 기술 검토 미팅 참석 (월 2회)\n\n상세 내용은 별도 미팅에서 협의 가능하며, 일정을 조율하여 주시면 감사하겠습니다.\n\n마케팅팀 김○○ 드림`,
      prompt: '"공식적이고 격식 있는 톤으로 타 부서에 협업을 요청하는 이메일을 써줘. 공문 스타일로 정중하게."'
    },
    friendly: {
      subject: '같이 프로젝트 하나 해볼까요? 😄',
      body: `○○○ 팀장님, 안녕하세요!\n마케팅팀 김○○입니다~\n\n다짜고짜 제안 하나 드리려고 연락드렸어요 ㅎㅎ\n\n요즘 고객 데이터 보면서 "개인화 추천 시스템이 있으면 좋겠다" 싶었는데요, 이거 개발팀이랑 같이 하면 진짜 좋은 결과 나올 것 같아요!\n\n대충 이런 그림이에요:\n- 고객 이탈률 15% 줄이는 게 목표\n- 4월부터 6월까지 약 3개월\n- 개발팀에서 데이터 쪽 도와주시면 저희가 마케팅 전략 짤게요\n\n부담 없이 한번 커피 마시면서 이야기해볼까요? ☕\n편하신 시간 알려주세요~\n\n감사합니다!\n김○○ 드림`,
      prompt: '"친근하고 가벼운 톤으로 협업을 제안하는 이메일을 써줘. 동료에게 말하듯 편안하게."'
    },
    direct: {
      subject: '협업 제안: 고객 추천 시스템 구축',
      body: `○○○ 팀장님,\n\n마케팅팀에서 고객 추천 시스템을 만들려고 합니다.\n개발팀 협업이 필요합니다.\n\n• 목표: 고객 이탈률 15% 감소\n• 기간: 4~6월 (3개월)\n• 필요 지원: 데이터 파이프라인 구축, 알고리즘 개발 인력 1명\n\n관심 있으시면 이번 주 미팅 가능할까요?\n\n김○○`,
      prompt: '"짧고 직설적으로 협업을 요청하는 이메일을 써줘. 핵심 정보만 전달."'
    },
    professional: {
      subject: '마케팅-개발팀 협업 프로젝트 제안: 고객 맞춤형 추천 시스템',
      body: `○○○ 팀장님, 안녕하세요.\n마케팅팀 김○○입니다.\n\n고객 경험 개선을 위한 협업 프로젝트를 제안드립니다.\n\n🎯 프로젝트 비전\n고객 데이터 기반 개인화 추천 시스템을 구축하여, 고객 이탈률을 15% 감소시키고자 합니다.\n\n📅 주요 일정\n- 4월: 데이터 분석 및 설계\n- 5월: 개발 및 테스트\n- 6월: 파일럿 런칭 및 최적화\n\n🤝 협업 구조\n- 마케팅팀: 고객 분석, 전략 수립, 성과 측정\n- 개발팀: 데이터 파이프라인, 추천 알고리즘 개발\n\n💡 기대 효과\n- 고객 만족도 향상\n- 매출 증대 (예상 +8~12%)\n- 양 팀 시너지 창출\n\n상세 기획서를 준비해두었습니다. 미팅 일정을 잡아 논의하면 좋겠습니다.\n\n감사합니다.\n김○○ 드림`,
      prompt: '"전문적이고 설득력 있는 비즈니스 톤으로 협업 제안 이메일을 써줘. 비전과 기대 효과를 포함해서."'
    },
    mz: {
      subject: '🚀 같이 멋진 프로젝트 해봐요!',
      body: `○○○ 팀장님 안녕하세요! 👋\n마케팅팀 김○○이에요~\n\n오늘 흥미로운 제안 하나 들고 왔습니다 💡\n\n🎯 한줄 요약: 고객 맞춤 추천 시스템을 같이 만들어봐요!\n\n왜 해야 하냐면요 👇\n→ 고객 이탈률 15% 줄일 수 있어요\n→ 매출도 올라갈 거예요 📈\n→ 무엇보다 양 팀이 시너지 낼 수 있는 기회!\n\n⏰ 일정: 4~6월 (3개월)\n\n개발팀에서 데이터 + 알고리즘 쪽 서포트해주시면\n저희가 마케팅 전략 + 성과 분석 담당할게요! 🙌\n\n관심 있으시면 커피챗 한번 할까요? ☕\n슬랙 DM 주세요~\n\n김○○ 드림 ✨`,
      prompt: '"MZ세대 감성으로 이모지 넣어서 협업을 제안하는 이메일을 써줘. 에너지 넘치고 가볍게!"'
    },
  },
}

const selectedScenario = ref('schedule')
const selectedTone = ref('formal')
const compareTone = ref('friendly')
const showPrompt = ref(false)
const viewMode = ref('single') // 'single' or 'compare'

const currentEmail = computed(() => emails[selectedScenario.value]?.[selectedTone.value])
const compareEmail = computed(() => emails[selectedScenario.value]?.[compareTone.value])

const currentTone = computed(() => tones.find(t => t.id === selectedTone.value))
const currentCompareTone = computed(() => tones.find(t => t.id === compareTone.value))

function wordCount(text) {
  if (!text) return 0
  return text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim().length
}

function formalityLevel(toneId) {
  const levels = { formal: 95, friendly: 30, direct: 50, professional: 80, mz: 15 }
  return levels[toneId] || 50
}

function formalityLabel(toneId) {
  const labels = { formal: '매우 높음', friendly: '낮음', direct: '보통', professional: '높음', mz: '매우 낮음' }
  return labels[toneId] || '보통'
}

function getGreeting(toneId) {
  const greetings = {
    formal: '"귀하", "귀 팀의 무궁한 발전을 기원합니다"',
    friendly: '"안녕하세요!", "~요/~죠" 체',
    direct: '이름 + 직급만',
    professional: '"안녕하세요." + 감사 인사',
    mz: '"안녕하세요! 👋", "~에요/~이에요"',
  }
  return greetings[toneId] || ''
}

function getClosing(toneId) {
  const closings = {
    formal: '"이상입니다", "드림"',
    friendly: '"감사합니다!", "~할게요~"',
    direct: '이름만',
    professional: '"감사합니다.", "드림"',
    mz: '"✨", "🙌", "드림 ✨"',
  }
  return closings[toneId] || ''
}
</script>

<div class="tc-container">

<!-- 시나리오 선택 -->
<div class="tc-section">
  <h3 class="tc-section-title">시나리오 선택</h3>
  <div class="tc-scenario-tabs">
    <button
      v-for="s in scenarios"
      :key="s.id"
      :class="['tc-scenario-btn', { active: selectedScenario === s.id }]"
      @click="selectedScenario = s.id; showPrompt = false"
    >
      <span class="tc-scenario-emoji">{{ s.emoji }}</span>
      <span>{{ s.label }}</span>
    </button>
  </div>
</div>

<!-- 보기 모드 -->
<div class="tc-section">
  <div class="tc-mode-toggle">
    <button :class="['tc-mode-btn', { active: viewMode === 'single' }]" @click="viewMode = 'single'">
      단일 보기
    </button>
    <button :class="['tc-mode-btn', { active: viewMode === 'compare' }]" @click="viewMode = 'compare'">
      비교 보기
    </button>
  </div>
</div>

<!-- 톤 선택 탭 -->
<div class="tc-section">
  <h3 class="tc-section-title">톤 선택</h3>
  <div class="tc-tone-tabs">
    <button
      v-for="t in tones"
      :key="t.id"
      :class="['tc-tone-tab', { active: selectedTone === t.id }]"
      :style="selectedTone === t.id ? { borderColor: t.color, color: t.color } : {}"
      @click="selectedTone = t.id; showPrompt = false"
    >
      <span class="tc-tone-emoji">{{ t.emoji }}</span>
      <span class="tc-tone-label">{{ t.label }}</span>
    </button>
  </div>
  <div v-if="viewMode === 'compare'" class="tc-compare-selector">
    <span class="tc-compare-label">비교 대상:</span>
    <div class="tc-tone-tabs">
      <button
        v-for="t in tones"
        :key="'cmp-' + t.id"
        :class="['tc-tone-tab tc-tone-tab-sm', { active: compareTone === t.id }]"
        :style="compareTone === t.id ? { borderColor: t.color, color: t.color } : {}"
        @click="compareTone = t.id"
        :disabled="t.id === selectedTone"
      >
        <span>{{ t.emoji }} {{ t.label }}</span>
      </button>
    </div>
  </div>
</div>

<!-- 단일 보기 -->
<div v-if="viewMode === 'single'" class="tc-section">
  <div class="tc-email-card">
    <div class="tc-email-header">
      <div class="tc-email-tone-badge" :style="{ backgroundColor: currentTone?.color + '18', color: currentTone?.color, borderColor: currentTone?.color + '40' }">
        {{ currentTone?.emoji }} {{ currentTone?.label }}
      </div>
      <span class="tc-email-tone-desc">{{ currentTone?.desc }}</span>
    </div>
    <div class="tc-email-subject">
      <span class="tc-email-subject-label">제목:</span>
      {{ currentEmail?.subject }}
    </div>
    <div class="tc-email-body">{{ currentEmail?.body }}</div>
    <div class="tc-email-footer">
      <div class="tc-stats">
        <div class="tc-stat">
          <span class="tc-stat-label">글자 수</span>
          <span class="tc-stat-value">{{ wordCount(currentEmail?.body) }}자</span>
        </div>
        <div class="tc-stat">
          <span class="tc-stat-label">격식 수준</span>
          <div class="tc-formality-bar">
            <div class="tc-formality-fill" :style="{ width: formalityLevel(selectedTone) + '%', backgroundColor: currentTone?.color }"></div>
          </div>
          <span class="tc-stat-value">{{ formalityLabel(selectedTone) }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 톤 특징 -->
  <div class="tc-tone-features">
    <h4>톤 특징 비교</h4>
    <div class="tc-features-grid">
      <div class="tc-feature-item">
        <span class="tc-feature-label">인사말</span>
        <span class="tc-feature-value">{{ getGreeting(selectedTone) }}</span>
      </div>
      <div class="tc-feature-item">
        <span class="tc-feature-label">마무리</span>
        <span class="tc-feature-value">{{ getClosing(selectedTone) }}</span>
      </div>
    </div>
  </div>

  <!-- 프롬프트 보기 -->
  <div class="tc-prompt-section">
    <button class="tc-prompt-btn" @click="showPrompt = !showPrompt">
      {{ showPrompt ? '프롬프트 숨기기' : '🔍 프롬프트 보기' }}
    </button>
    <div v-if="showPrompt" class="tc-prompt-box">
      <div class="tc-prompt-label">이 톤을 만들기 위한 프롬프트:</div>
      <div class="tc-prompt-text">{{ currentEmail?.prompt }}</div>
    </div>
  </div>
</div>

<!-- 비교 보기 -->
<div v-if="viewMode === 'compare'" class="tc-section">
  <div class="tc-compare-grid">
    <!-- 왼쪽 -->
    <div class="tc-email-card tc-compare-card">
      <div class="tc-email-header">
        <div class="tc-email-tone-badge" :style="{ backgroundColor: currentTone?.color + '18', color: currentTone?.color, borderColor: currentTone?.color + '40' }">
          {{ currentTone?.emoji }} {{ currentTone?.label }}
        </div>
      </div>
      <div class="tc-email-subject">
        <span class="tc-email-subject-label">제목:</span>
        {{ currentEmail?.subject }}
      </div>
      <div class="tc-email-body tc-compare-body">{{ currentEmail?.body }}</div>
      <div class="tc-email-footer">
        <div class="tc-stats tc-stats-compact">
          <div class="tc-stat">
            <span class="tc-stat-label">글자 수</span>
            <span class="tc-stat-value">{{ wordCount(currentEmail?.body) }}자</span>
          </div>
          <div class="tc-stat">
            <span class="tc-stat-label">격식</span>
            <div class="tc-formality-bar tc-formality-bar-sm">
              <div class="tc-formality-fill" :style="{ width: formalityLevel(selectedTone) + '%', backgroundColor: currentTone?.color }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 오른쪽 -->
    <div class="tc-email-card tc-compare-card">
      <div class="tc-email-header">
        <div class="tc-email-tone-badge" :style="{ backgroundColor: currentCompareTone?.color + '18', color: currentCompareTone?.color, borderColor: currentCompareTone?.color + '40' }">
          {{ currentCompareTone?.emoji }} {{ currentCompareTone?.label }}
        </div>
      </div>
      <div class="tc-email-subject">
        <span class="tc-email-subject-label">제목:</span>
        {{ compareEmail?.subject }}
      </div>
      <div class="tc-email-body tc-compare-body">{{ compareEmail?.body }}</div>
      <div class="tc-email-footer">
        <div class="tc-stats tc-stats-compact">
          <div class="tc-stat">
            <span class="tc-stat-label">글자 수</span>
            <span class="tc-stat-value">{{ wordCount(compareEmail?.body) }}자</span>
          </div>
          <div class="tc-stat">
            <span class="tc-stat-label">격식</span>
            <div class="tc-formality-bar tc-formality-bar-sm">
              <div class="tc-formality-fill" :style="{ width: formalityLevel(compareTone) + '%', backgroundColor: currentCompareTone?.color }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 비교 인사이트 -->
  <div class="tc-compare-insight">
    <h4>톤 차이 비교</h4>
    <table class="tc-compare-table">
      <thead>
        <tr>
          <th>항목</th>
          <th>{{ currentTone?.emoji }} {{ currentTone?.label }}</th>
          <th>{{ currentCompareTone?.emoji }} {{ currentCompareTone?.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>인사말</td>
          <td>{{ getGreeting(selectedTone) }}</td>
          <td>{{ getGreeting(compareTone) }}</td>
        </tr>
        <tr>
          <td>마무리</td>
          <td>{{ getClosing(selectedTone) }}</td>
          <td>{{ getClosing(compareTone) }}</td>
        </tr>
        <tr>
          <td>글자 수</td>
          <td>{{ wordCount(currentEmail?.body) }}자</td>
          <td>{{ wordCount(compareEmail?.body) }}자</td>
        </tr>
        <tr>
          <td>격식 수준</td>
          <td>{{ formalityLabel(selectedTone) }}</td>
          <td>{{ formalityLabel(compareTone) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</div>

<style scoped>
.tc-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

.tc-section {
  margin-bottom: 1.5rem;
}

.tc-section-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

/* 시나리오 탭 */
.tc-scenario-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tc-scenario-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
}

.tc-scenario-btn:hover {
  border-color: var(--brand-orange);
  color: var(--brand-orange);
}

.tc-scenario-btn.active {
  border-color: var(--brand-orange);
  background: var(--brand-orange);
  color: white;
}

.tc-scenario-emoji {
  font-size: 1.1rem;
}

/* 보기 모드 토글 */
.tc-mode-toggle {
  display: flex;
  gap: 0;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  padding: 3px;
  width: fit-content;
}

.tc-mode-btn {
  padding: 0.45rem 1rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;
}

.tc-mode-btn.active {
  background: var(--brand-orange);
  color: white;
}

/* 톤 탭 */
.tc-tone-tabs {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.tc-tone-tab {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.85rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
}

.tc-tone-tab:hover:not(:disabled) {
  border-color: var(--vp-c-text-3);
}

.tc-tone-tab.active {
  font-weight: 700;
  border-width: 2px;
  background: var(--vp-c-bg-soft);
}

.tc-tone-tab:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.tc-tone-tab-sm {
  padding: 0.35rem 0.65rem;
  font-size: 0.78rem;
}

.tc-tone-emoji {
  font-size: 1rem;
}

.tc-compare-selector {
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.tc-compare-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

/* 이메일 카드 */
.tc-email-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.tc-email-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  flex-wrap: wrap;
}

.tc-email-tone-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  border: 1px solid;
  white-space: nowrap;
}

.tc-email-tone-desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

.tc-email-subject {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  font-size: 0.95rem;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

.tc-email-subject-label {
  color: var(--vp-c-text-3);
  font-weight: 500;
  margin-right: 0.4rem;
}

.tc-email-body {
  padding: 1.25rem;
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
  word-break: break-word;
}

.tc-compare-body {
  min-height: 300px;
  font-size: 0.85rem;
  padding: 1rem;
}

.tc-email-footer {
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

/* 통계 */
.tc-stats {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.tc-stats-compact {
  gap: 1rem;
}

.tc-stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tc-stat-label {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}

.tc-stat-value {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.tc-formality-bar {
  width: 100px;
  height: 6px;
  background: var(--vp-c-divider);
  border-radius: 3px;
  overflow: hidden;
}

.tc-formality-bar-sm {
  width: 60px;
}

.tc-formality-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.4s ease;
}

/* 톤 특징 */
.tc-tone-features {
  margin-top: 1rem;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.tc-tone-features h4 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  color: var(--vp-c-text-1);
}

.tc-features-grid {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tc-feature-item {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.tc-feature-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--brand-orange);
  white-space: nowrap;
}

.tc-feature-value {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}

/* 프롬프트 */
.tc-prompt-section {
  margin-top: 1rem;
}

.tc-prompt-btn {
  padding: 0.5rem 1rem;
  border: 2px solid var(--brand-orange);
  border-radius: 8px;
  background: transparent;
  color: var(--brand-orange);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.2s;
}

.tc-prompt-btn:hover {
  background: var(--brand-orange);
  color: white;
}

.tc-prompt-box {
  margin-top: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--brand-orange);
  border-left: 4px solid var(--brand-orange);
  border-radius: 8px;
}

.tc-prompt-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  margin-bottom: 0.4rem;
}

.tc-prompt-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--brand-orange-dark);
  font-style: italic;
}

/* 비교 그리드 */
.tc-compare-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.tc-compare-card {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
}

/* 비교 인사이트 */
.tc-compare-insight {
  margin-top: 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.25rem;
}

.tc-compare-insight h4 {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--vp-c-text-1);
}

.tc-compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.82rem;
}

.tc-compare-table th,
.tc-compare-table td {
  padding: 0.5rem 0.65rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

.tc-compare-table th {
  font-weight: 700;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-alt);
  font-size: 0.78rem;
}

.tc-compare-table td:first-child {
  font-weight: 600;
  color: var(--brand-orange);
  white-space: nowrap;
}

/* 반응형 */
@media (max-width: 768px) {
  .tc-compare-grid {
    grid-template-columns: 1fr;
  }

  .tc-compare-body {
    min-height: auto;
  }

  .tc-scenario-tabs {
    flex-direction: column;
  }

  .tc-scenario-btn {
    width: 100%;
  }

  .tc-compare-selector {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
