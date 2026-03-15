# AI 팀 활동 아이디어 생성기

> 팀 미팅이나 워크숍에서 AI 관련 활동이 필요할 때! 버튼 하나로 아이디어를 뽑아보세요.

<script setup>
import { ref, computed, nextTick } from 'vue'

const activities = [
  // 아이스브레이커 (5)
  {
    id: 1,
    emoji: '🎲',
    title: 'AI 프롬프트 릴레이',
    subtitle: '한 문장씩 돌아가며 프롬프트 완성',
    category: '아이스브레이커',
    duration: '10분',
    people: '3-5명',
    difficulty: '쉬움',
    supplies: ['노트북 또는 태블릿 1대', 'Claude Cowork 접속'],
    steps: [
      '첫 번째 사람이 프롬프트의 첫 문장을 작성합니다.',
      '다음 사람이 한 문장을 추가하며 돌아갑니다.',
      '마지막 사람까지 돌면 완성된 프롬프트를 Claude에 입력합니다.',
      '결과물을 함께 보고 웃거나 감탄합니다!'
    ],
    effect: '팀원 간 아이스브레이킹 + 프롬프트 구조에 대한 자연스러운 이해',
    tip: '주제를 미리 정해두면 더 재미있어요! 예: "우리 팀 회식 장소 추천 프롬프트"'
  },
  {
    id: 2,
    emoji: '🃏',
    title: 'AI vs 사람 퀴즈',
    subtitle: '"이거 AI가 쓴 거? 사람이 쓴 거?"',
    category: '아이스브레이커',
    duration: '10분',
    people: '6-10명',
    difficulty: '쉬움',
    supplies: ['미리 준비한 텍스트 5-10개 (AI/사람 혼합)', '투표 도구 (손들기 또는 앱)'],
    steps: [
      '진행자가 미리 AI가 쓴 글과 사람이 쓴 글을 섞어서 준비합니다.',
      '하나씩 보여주며 "AI일까? 사람일까?" 투표합니다.',
      '정답을 공개하고 맞춘 사람에게 포인트를 줍니다.',
      '가장 많이 맞춘 사람이 우승!'
    ],
    effect: 'AI 결과물의 품질을 체감하고 비판적 사고력 향상',
    tip: '이메일, 보고서, SNS 글 등 업무와 관련된 텍스트로 준비하면 실용적이에요.'
  },
  {
    id: 3,
    emoji: '🎭',
    title: '톤 맞추기 게임',
    subtitle: '같은 내용, 다른 톤으로 쓴 이메일 맞추기',
    category: '아이스브레이커',
    duration: '10분',
    people: '3-5명',
    difficulty: '쉬움',
    supplies: ['Claude Cowork 접속', '같은 내용의 다른 톤 이메일 3-5개'],
    steps: [
      '같은 내용을 "격식체", "친근체", "MZ체", "외교관체" 등 다른 톤으로 Claude에게 생성 요청합니다.',
      '톤 라벨을 가리고 참가자에게 보여줍니다.',
      '어떤 톤으로 쓰인 건지 맞추기!',
      '톤 프롬프트의 중요성에 대해 가볍게 토론합니다.'
    ],
    effect: '톤 지정 프롬프팅의 중요성 체감 + 재미있는 소통',
    tip: '실제 업무에서 톤을 잘못 지정해서 어색했던 경험을 공유하면 더 공감돼요.'
  },
  {
    id: 4,
    emoji: '📝',
    title: '30초 프롬프트 챌린지',
    subtitle: '30초 안에 최고의 프롬프트 쓰기',
    category: '아이스브레이커',
    duration: '10분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['타이머', '각자 노트북 또는 종이', 'Claude Cowork 접속'],
    steps: [
      '진행자가 주제를 발표합니다 (예: "신입사원 환영 이메일").',
      '30초 타이머를 시작합니다.',
      '각자 최고의 프롬프트를 작성합니다.',
      '각각의 프롬프트를 Claude에 넣어서 결과를 비교합니다.',
      '가장 좋은 결과를 낸 프롬프트 작성자가 우승!'
    ],
    effect: '빠른 프롬프트 작성 능력 향상 + 핵심 요소 파악 능력',
    tip: '3라운드 정도 진행하면서 난이도를 점점 올리면 좋아요.'
  },
  {
    id: 5,
    emoji: '🤖',
    title: 'AI 자기소개',
    subtitle: 'Claude에게 팀원 소개를 부탁하고 맞추기',
    category: '아이스브레이커',
    duration: '10분',
    people: '6-10명',
    difficulty: '쉬움',
    supplies: ['Claude Cowork 접속', '팀원 정보 키워드 카드'],
    steps: [
      '각 팀원이 자신에 대한 키워드 3개를 비밀리에 제출합니다.',
      'Claude에게 해당 키워드로 재미있는 자기소개를 생성하도록 요청합니다.',
      '생성된 자기소개를 읽고 누구인지 맞추기!',
      '본인이 직접 밝히며 한마디 추가합니다.'
    ],
    effect: '팀원 간 친밀감 형성 + AI 활용의 재미 체감',
    tip: '키워드에 취미나 특이한 경험을 포함하면 더 재미있어요.'
  },
  // 학습 활동 (10)
  {
    id: 6,
    emoji: '📊',
    title: '데이터 분석 레이스',
    subtitle: '같은 데이터, 누가 더 좋은 인사이트?',
    category: '학습',
    duration: '1시간',
    people: '6-10명',
    difficulty: '어려움',
    supplies: ['공통 데이터셋 (CSV/엑셀)', '각자 노트북', 'Claude Cowork 접속', '발표 타이머'],
    steps: [
      '모든 팀에게 동일한 데이터셋을 배포합니다.',
      '30분 동안 Claude를 활용하여 데이터를 분석합니다.',
      '각 팀이 발견한 인사이트를 5분 내에 발표합니다.',
      '가장 실행 가능한(actionable) 인사이트를 뽑은 팀이 우승!',
      '사용한 프롬프트를 공유하며 서로의 접근법을 배웁니다.'
    ],
    effect: '데이터 분석 프롬프팅 스킬 향상 + 실전 데이터 활용 경험',
    tip: '실제 업무 데이터(비밀 정보 제외)를 사용하면 결과물을 실제로 활용할 수 있어요.'
  },
  {
    id: 7,
    emoji: '✉️',
    title: '이메일 리라이트 대회',
    subtitle: '어색한 이메일을 가장 잘 고치는 팀',
    category: '학습',
    duration: '30분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['어색한 이메일 샘플 3-5개', '각자 노트북', 'Claude Cowork 접속'],
    steps: [
      '진행자가 의도적으로 어색하게 쓴 이메일을 배포합니다.',
      '각자 Claude를 활용하여 이메일을 개선합니다.',
      '개선된 이메일을 서로 비교합니다.',
      '어떤 프롬프트가 가장 효과적이었는지 공유합니다.'
    ],
    effect: '이메일 작성 능력 향상 + 프롬프트 최적화 경험',
    tip: '실제 보내기 망설여졌던 이메일(익명 처리)을 사용하면 더 실감 나요.'
  },
  {
    id: 8,
    emoji: '🔄',
    title: '워크플로우 설계',
    subtitle: '우리 팀만의 자동화 워크플로우 만들기',
    category: '학습',
    duration: '1시간',
    people: '3-5명',
    difficulty: '어려움',
    supplies: ['화이트보드 또는 큰 종이', '포스트잇', 'Claude Cowork 접속'],
    steps: [
      '팀에서 반복적으로 수행하는 업무를 나열합니다.',
      'Claude를 활용할 수 있는 단계를 표시합니다.',
      '워크플로우를 설계하고 시각화합니다.',
      '실제로 한 가지 워크플로우를 테스트합니다.',
      '개선점과 확장 가능성을 토론합니다.'
    ],
    effect: '업무 자동화 사고력 향상 + 실질적인 팀 효율화 아이디어 도출',
    tip: '가장 시간이 많이 드는 업무부터 시작하면 ROI가 높아요.'
  },
  {
    id: 9,
    emoji: '📋',
    title: '프롬프트 평가 대회',
    subtitle: '서로의 프롬프트를 평가하고 개선',
    category: '학습',
    duration: '30분',
    people: '6-10명',
    difficulty: '보통',
    supplies: ['각자 준비한 프롬프트 1-2개', '평가 기준표', 'Claude Cowork 접속'],
    steps: [
      '각자 자신이 자주 쓰는 프롬프트를 익명으로 제출합니다.',
      '무작위로 섞어 다른 사람의 프롬프트를 배정합니다.',
      '평가 기준(구체성, 맥락, 형식 지정 등)에 따라 점수를 매깁니다.',
      '개선 제안을 작성하고 공유합니다.',
      '최고 점수의 프롬프트와 최고의 개선 제안을 선정합니다.'
    ],
    effect: '프롬프트 품질에 대한 안목 향상 + 동료 학습 효과',
    tip: '평가 기준표를 미리 배포하면 공정하고 학습 효과가 높아요.'
  },
  {
    id: 10,
    emoji: '🎯',
    title: '부서 맞춤 챌린지',
    subtitle: '부서별 실전 과제 해결',
    category: '학습',
    duration: '1시간',
    people: '6-10명',
    difficulty: '어려움',
    supplies: ['부서별 실전 과제 시나리오', '각자 노트북', 'Claude Cowork 접속'],
    steps: [
      '각 부서에 맞는 실전 과제를 준비합니다 (마케팅: 캠페인 기획, HR: JD 작성 등).',
      '30분 동안 Claude를 활용하여 과제를 수행합니다.',
      '결과물을 부서 동료들에게 발표합니다.',
      '실제 업무에 적용할 수 있는지 피드백을 주고받습니다.',
      '베스트 결과물을 팀 위키에 등록합니다.'
    ],
    effect: '부서 맞춤 AI 활용 역량 강화 + 실전 결과물 확보',
    tip: '실제 진행 중인 업무를 과제로 내면 일석이조예요.'
  },
  {
    id: 11,
    emoji: '📖',
    title: '베스트 프랙티스 공유',
    subtitle: '이번 주 최고의 활용 사례 발표',
    category: '학습',
    duration: '30분',
    people: '6-10명',
    difficulty: '쉬움',
    supplies: ['발표 자료 (선택)', '투표 도구'],
    steps: [
      '팀원들이 이번 주 가장 효과적이었던 Claude 활용 사례를 준비합니다.',
      '각자 3분씩 발표합니다.',
      '전/후 비교를 보여주면 더 효과적입니다.',
      '투표로 "이번 주의 AI 마스터"를 선정합니다.'
    ],
    effect: '팀 전체의 AI 활용 수준 상향 + 동기부여',
    tip: '매주 정기적으로 진행하면 팀 AI 역량이 빠르게 성장해요.'
  },
  {
    id: 12,
    emoji: '🔍',
    title: '숨은 기능 찾기',
    subtitle: 'Claude의 숨은 기능 탐험',
    category: '학습',
    duration: '30분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['각자 노트북', 'Claude Cowork 접속', '기능 목록 체크리스트'],
    steps: [
      '팀원들에게 "아직 안 써본 기능 찾기" 미션을 줍니다.',
      '15분 동안 자유롭게 Claude의 다양한 기능을 탐색합니다.',
      '발견한 기능을 정리하여 공유합니다.',
      '가장 유용한 발견을 한 사람에게 상을 줍니다.'
    ],
    effect: 'Claude 기능에 대한 이해도 향상 + 활용 범위 확대',
    tip: 'Projects, 파일 첨부, 톤 지정 등 잘 안 쓰는 기능 위주로 탐색을 유도하세요.'
  },
  {
    id: 13,
    emoji: '🌐',
    title: '번역 릴레이',
    subtitle: '다국어 번역 품질 비교',
    category: '학습',
    duration: '30분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['번역할 원문 텍스트', '각자 노트북', 'Claude Cowork 접속'],
    steps: [
      '같은 텍스트를 각자 다른 프롬프트로 번역 요청합니다.',
      '번역 결과를 나란히 비교합니다.',
      '맥락, 톤, 전문 용어의 정확성을 평가합니다.',
      '가장 자연스러운 번역을 뽑은 프롬프트를 공유합니다.',
      '번역 프롬프트 베스트 프랙티스를 정리합니다.'
    ],
    effect: '번역 프롬프팅 능력 향상 + 다국어 업무 효율화',
    tip: '실제 해외 고객에게 보낼 이메일이나 제안서를 사용하면 실용적이에요.'
  },
  {
    id: 14,
    emoji: '📝',
    title: '회의록 스피드런',
    subtitle: '녹음 텍스트 → 회의록 최단 시간',
    category: '학습',
    duration: '30분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['회의 녹취록 샘플 텍스트', '각자 노트북', 'Claude Cowork 접속', '타이머'],
    steps: [
      '동일한 회의 녹취록 텍스트를 배포합니다.',
      '타이머를 시작하고 Claude를 활용하여 회의록을 작성합니다.',
      '완성도와 속도를 모두 평가합니다.',
      '사용한 프롬프트 전략을 공유합니다.'
    ],
    effect: '회의록 작성 효율화 + 프롬프트 최적화 경험',
    tip: '결과물에 액션 아이템, 담당자, 기한이 포함되었는지도 평가 기준에 넣으세요.'
  },
  {
    id: 15,
    emoji: '🎓',
    title: '멘토-멘티 매칭',
    subtitle: '숙련자가 초보자에게 1:1 코칭',
    category: '학습',
    duration: '1시간',
    people: '6-10명',
    difficulty: '쉬움',
    supplies: ['코칭 가이드 시트', '각자 노트북', 'Claude Cowork 접속'],
    steps: [
      'AI 활용 숙련도 기준으로 멘토-멘티를 매칭합니다.',
      '멘티가 평소 어려웠던 업무를 선정합니다.',
      '멘토가 Claude 활용법을 시연하며 코칭합니다.',
      '멘티가 직접 따라 해봅니다.',
      '배운 점을 전체 공유합니다.'
    ],
    effect: '팀 내 AI 역량 격차 해소 + 지식 공유 문화 형성',
    tip: '멘토와 멘티를 다른 부서끼리 매칭하면 교차 학습 효과도 있어요.'
  },
  // 경쟁 게임 (5)
  {
    id: 16,
    emoji: '🏆',
    title: '프롬프트 배틀',
    subtitle: '팀 대항 프롬프트 대결',
    category: '경쟁',
    duration: '30분',
    people: '6-10명',
    difficulty: '보통',
    supplies: ['대결 주제 카드', '심사 기준표', 'Claude Cowork 접속', '타이머'],
    steps: [
      '2-3개 팀으로 나눕니다.',
      '진행자가 주제를 발표합니다 (예: "가장 설득력 있는 제안서 쓰기").',
      '각 팀이 5분 동안 프롬프트를 작성합니다.',
      'Claude에 입력하여 결과물을 비교합니다.',
      '심사 기준에 따라 점수를 매기고 우승팀을 선정합니다.'
    ],
    effect: '프롬프트 엔지니어링 실력 향상 + 팀워크 강화',
    tip: '3라운드로 구성하고 라운드마다 주제 난이도를 높이면 긴장감이 올라가요.'
  },
  {
    id: 17,
    emoji: '⏱️',
    title: '스피드 챌린지',
    subtitle: '주어진 업무를 가장 빨리 완료',
    category: '경쟁',
    duration: '30분',
    people: '3-5명',
    difficulty: '보통',
    supplies: ['업무 목록 (5-10개)', '각자 노트북', 'Claude Cowork 접속', '타이머'],
    steps: [
      '동일한 업무 목록을 배포합니다 (이메일 작성, 요약, 번역 등).',
      '타이머를 시작합니다.',
      'Claude를 활용하여 모든 업무를 완료합니다.',
      '완료 순서와 품질을 모두 평가합니다.',
      '최고 속도 + 최고 품질 상을 각각 시상합니다.'
    ],
    effect: 'AI 활용 속도 향상 + 실전 업무 처리 능력 강화',
    tip: '품질 기준을 명확히 해야 대충 하는 걸 방지할 수 있어요.'
  },
  {
    id: 18,
    emoji: '🎪',
    title: 'AI 해커톤 (미니)',
    subtitle: '1시간 내에 팀별 자동화 프로젝트',
    category: '경쟁',
    duration: '1시간',
    people: '11명+',
    difficulty: '어려움',
    supplies: ['프로젝트 주제 목록', '팀 구성표', '발표 타이머', 'Claude Cowork 접속', '심사위원'],
    steps: [
      '3-4명씩 팀을 구성합니다.',
      '팀별로 자동화하고 싶은 업무 프로세스를 선정합니다.',
      '45분 동안 Claude를 활용하여 프로토타입/결과물을 만듭니다.',
      '각 팀이 5분씩 발표합니다.',
      '심사위원이 실용성, 창의성, 완성도를 기준으로 평가합니다.'
    ],
    effect: '실전 AI 활용 역량 강화 + 팀 간 경쟁을 통한 동기부여',
    tip: '결과물을 실제로 도입할 수 있도록 후속 미팅을 잡아두면 효과가 배가돼요.'
  },
  {
    id: 19,
    emoji: '🎯',
    title: '빙고 레이스',
    subtitle: 'Cowork 빙고 먼저 완성하기',
    category: '경쟁',
    duration: '1시간',
    people: '6-10명',
    difficulty: '쉬움',
    supplies: ['빙고 카드 (5x5)', 'Claude Cowork 접속', '검증용 스크린샷 폴더'],
    steps: [
      'AI 활용 미션이 적힌 빙고 카드를 배포합니다.',
      '각 미션을 완료하면 해당 칸에 스탬프를 찍습니다.',
      '미션 예: "Claude로 이메일 3개 작성", "데이터 분석 요청" 등.',
      '가장 먼저 한 줄/대각선/전체 빙고를 완성하는 사람이 우승!',
      '완료한 미션의 결과물을 간단히 공유합니다.'
    ],
    effect: 'Claude의 다양한 기능 체험 + 게임 형식의 자연스러운 학습',
    tip: '빙고 카드에 난이도별 미션을 섞으면 초보자도 참여할 수 있어요.'
  },
  {
    id: 20,
    emoji: '📊',
    title: 'ROI 프레젠테이션',
    subtitle: '팀별 AI 도입 효과 발표 대회',
    category: '경쟁',
    duration: '1시간',
    people: '11명+',
    difficulty: '어려움',
    supplies: ['ROI 계산 템플릿', '발표 자료 도구', 'Claude Cowork 접속', '심사 기준표'],
    steps: [
      '각 팀이 자신의 부서에서 AI 도입 시 예상되는 효과를 분석합니다.',
      'Claude를 활용하여 ROI 계산 및 발표 자료를 준비합니다.',
      '시간 절약, 비용 절감, 품질 향상 등 구체적 수치를 제시합니다.',
      '팀별 7분 발표 + 3분 Q&A.',
      '가장 설득력 있는 발표를 선정합니다.'
    ],
    effect: 'AI 도입의 비즈니스 가치 이해 + 경영진 설득 능력 향상',
    tip: '실제 경영진을 심사위원으로 초대하면 리얼한 피드백을 받을 수 있어요.'
  }
]

// Filters
const selectedDuration = ref('전체')
const selectedPeople = ref('전체')
const selectedCategory = ref('전체')

const durations = ['전체', '10분', '30분', '1시간']
const peoples = ['전체', '3-5명', '6-10명', '11명+']
const categories = ['전체', '아이스브레이커', '학습', '경쟁']

const categoryLabels = {
  '전체': '🎯 전체',
  '아이스브레이커': '🎭 가벼운 아이스브레이커',
  '학습': '📖 학습 중심',
  '경쟁': '🏆 경쟁/게임'
}

const filteredActivities = computed(() => {
  return activities.filter(a => {
    if (selectedDuration.value !== '전체' && a.duration !== selectedDuration.value) return false
    if (selectedPeople.value !== '전체' && a.people !== selectedPeople.value) return false
    if (selectedCategory.value !== '전체' && a.category !== selectedCategory.value) return false
    return true
  })
})

// State
const pickedActivity = ref(null)
const isRolling = ref(false)
const showAllList = ref(false)
const copied = ref(false)
const noResults = ref(false)

function rollDice() {
  if (filteredActivities.value.length === 0) {
    noResults.value = true
    pickedActivity.value = null
    return
  }
  noResults.value = false
  isRolling.value = true
  pickedActivity.value = null

  let count = 0
  const maxFlicker = 12
  const interval = setInterval(() => {
    const idx = Math.floor(Math.random() * filteredActivities.value.length)
    pickedActivity.value = filteredActivities.value[idx]
    count++
    if (count >= maxFlicker) {
      clearInterval(interval)
      isRolling.value = false
    }
  }, 120)
}

function resetPick() {
  pickedActivity.value = null
  noResults.value = false
}

function copyPlan(activity) {
  const plan = `📋 AI 팀 활동 계획서
━━━━━━━━━━━━━━━━━━━━━━━━━━

${activity.emoji} ${activity.title}
${activity.subtitle}

📌 기본 정보
• 소요 시간: ${activity.duration}
• 인원: ${activity.people}
• 난이도: ${activity.difficulty}
• 분위기: ${activity.category}

🎒 준비물
${activity.supplies.map(s => '• ' + s).join('\n')}

📝 진행 방법
${activity.steps.map((s, i) => (i + 1) + '. ' + s).join('\n')}

✨ 기대 효과
${activity.effect}

💡 진행 팁
${activity.tip}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Claude Cowork 팀 활동 가이드에서 생성`

  navigator.clipboard.writeText(plan).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}

function getDifficultyColor(d) {
  if (d === '쉬움') return '#22c55e'
  if (d === '보통') return '#f59e0b'
  return '#ef4444'
}

function getCategoryColor(c) {
  if (c === '아이스브레이커') return '#8b5cf6'
  if (c === '학습') return '#3b82f6'
  return '#ef4444'
}
</script>

<style>
/* ─── Filters ─── */
.ta-filters {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
}
.ta-filter-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.ta-filter-label {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  min-width: 80px;
}
.ta-filter-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}
.ta-filter-btn:hover {
  border-color: #E87040;
  color: #E87040;
}
.ta-filter-btn.active {
  background: #E87040;
  color: white;
  border-color: #E87040;
  font-weight: 600;
}

/* ─── Roll Button ─── */
.ta-roll-area {
  text-align: center;
  margin: 2rem 0;
}
.ta-roll-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #E87040 0%, #d4622e 100%);
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(232, 112, 64, 0.35);
}
.ta-roll-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(232, 112, 64, 0.45);
}
.ta-roll-btn:active {
  transform: translateY(0);
}
.ta-dice {
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1;
}
.ta-dice.rolling {
  animation: diceRoll 0.15s infinite linear;
}
@keyframes diceRoll {
  0% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.15); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}
.ta-roll-btn.rolling {
  animation: btnPulse 0.3s infinite alternate;
}
@keyframes btnPulse {
  0% { box-shadow: 0 4px 15px rgba(232, 112, 64, 0.35); }
  100% { box-shadow: 0 6px 30px rgba(232, 112, 64, 0.6); }
}

/* ─── No Results ─── */
.ta-no-results {
  text-align: center;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin: 1rem 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
}

/* ─── Activity Card ─── */
.ta-card-appear {
  animation: cardAppear 0.5s ease-out;
}
@keyframes cardAppear {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
.ta-card {
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 0;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: border-color 0.3s;
}
.ta-card:hover {
  border-color: #E87040;
}
.ta-card-header {
  background: linear-gradient(135deg, #E87040 0%, #d4622e 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.ta-card-emoji {
  font-size: 2.5rem;
  line-height: 1;
  background: rgba(255,255,255,0.2);
  border-radius: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.ta-card-title-area {
  flex: 1;
}
.ta-card-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 4px 0;
}
.ta-card-subtitle {
  font-size: 0.95rem;
  opacity: 0.9;
}
.ta-card-body {
  padding: 1.5rem;
}

/* ─── Meta Badges ─── */
.ta-meta {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
}
.ta-badge {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.ta-badge-time {
  background: #fef3c7;
  color: #92400e;
}
.ta-badge-people {
  background: #dbeafe;
  color: #1e40af;
}
.ta-badge-difficulty {
  color: white;
}
.ta-badge-category {
  color: white;
}

/* ─── Card Sections ─── */
.ta-section {
  margin-bottom: 1.2rem;
}
.ta-section-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.ta-supplies-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ta-supplies-list li {
  background: var(--vp-c-bg-soft);
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.ta-steps-list {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: step;
}
.ta-steps-list li {
  counter-increment: step;
  padding: 8px 0 8px 36px;
  position: relative;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  border-bottom: 1px dashed var(--vp-c-divider);
}
.ta-steps-list li:last-child {
  border-bottom: none;
}
.ta-steps-list li::before {
  content: counter(step);
  position: absolute;
  left: 0;
  top: 7px;
  width: 24px;
  height: 24px;
  background: #E87040;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
}
.ta-effect {
  background: linear-gradient(135deg, #fef9f4 0%, #fff7ed 100%);
  border-left: 4px solid #E87040;
  padding: 12px 16px;
  border-radius: 0 8px 8px 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  line-height: 1.6;
}
.dark .ta-effect {
  background: rgba(232, 112, 64, 0.08);
}
.ta-tip {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 12px 16px;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}
.ta-tip::before {
  content: '💡 진행 팁: ';
  font-weight: 700;
  color: var(--vp-c-text-1);
}

/* ─── Action Buttons ─── */
.ta-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}
.ta-action-btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ta-action-btn:hover {
  border-color: #E87040;
  color: #E87040;
}
.ta-action-btn.primary {
  background: #E87040;
  color: white;
  border-color: #E87040;
}
.ta-action-btn.primary:hover {
  background: #d4622e;
}
.ta-action-btn.copied {
  background: #22c55e;
  color: white;
  border-color: #22c55e;
}

/* ─── Toggle Area ─── */
.ta-toggle-area {
  text-align: center;
  margin: 2rem 0 1rem 0;
}
.ta-toggle-btn {
  padding: 10px 24px;
  border-radius: 10px;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.ta-toggle-btn:hover {
  border-color: #E87040;
  color: #E87040;
}

/* ─── All List ─── */
.ta-all-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.ta-mini-card {
  background: var(--vp-c-bg-soft);
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}
.ta-mini-card:hover {
  border-color: #E87040;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.ta-mini-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}
.ta-mini-emoji {
  font-size: 1.5rem;
}
.ta-mini-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
.ta-mini-subtitle {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.6rem;
}
.ta-mini-meta {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.ta-mini-badge {
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
}

/* ─── Category headers ─── */
.ta-category-header {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

/* ─── Filter count ─── */
.ta-filter-count {
  text-align: center;
  color: var(--vp-c-text-3);
  font-size: 0.85rem;
  margin-top: 0.5rem;
}
</style>

<!-- Filters -->
<div class="ta-filters">
<div class="ta-filter-row">
<span class="ta-filter-label">&#x23F1;&#xFE0F; 소요 시간</span>
<button v-for="d in durations" :key="d" :class="['ta-filter-btn', { active: selectedDuration === d }]" @click="selectedDuration = d">{{ d }}</button>
</div>
<div class="ta-filter-row">
<span class="ta-filter-label">&#x1F465; 인원</span>
<button v-for="p in peoples" :key="p" :class="['ta-filter-btn', { active: selectedPeople === p }]" @click="selectedPeople = p">{{ p }}</button>
</div>
<div class="ta-filter-row">
<span class="ta-filter-label">&#x1F388; 분위기</span>
<button v-for="c in categories" :key="c" :class="['ta-filter-btn', { active: selectedCategory === c }]" @click="selectedCategory = c">{{ categoryLabels[c] }}</button>
</div>
<div class="ta-filter-count">
&#x1F3AF; 조건에 맞는 활동: <strong>{{ filteredActivities.length }}개</strong> / 전체 {{ activities.length }}개
</div>
</div>

<!-- Roll Button -->
<div class="ta-roll-area">
<button :class="['ta-roll-btn', { rolling: isRolling }]" @click="rollDice" :disabled="isRolling">
<span :class="['ta-dice', { rolling: isRolling }]">&#x1F3B2;</span>
{{ isRolling ? '뽑는 중...' : '아이디어 뽑기!' }}
</button>
</div>

<!-- No Results -->
<div v-if="noResults" class="ta-no-results">
&#x1F605; 조건에 맞는 활동이 없습니다. 필터를 조정해보세요!
</div>

<!-- Picked Activity Card -->
<div v-if="pickedActivity && !isRolling" class="ta-card-appear">
<div class="ta-card">
<div class="ta-card-header">
<div class="ta-card-emoji">{{ pickedActivity.emoji }}</div>
<div class="ta-card-title-area">
<div class="ta-card-title">{{ pickedActivity.title }}</div>
<div class="ta-card-subtitle">{{ pickedActivity.subtitle }}</div>
</div>
</div>
<div class="ta-card-body">
<div class="ta-meta">
<span class="ta-badge ta-badge-time">&#x23F1;&#xFE0F; {{ pickedActivity.duration }}</span>
<span class="ta-badge ta-badge-people">&#x1F465; {{ pickedActivity.people }}</span>
<span class="ta-badge ta-badge-difficulty" :style="{ background: getDifficultyColor(pickedActivity.difficulty) }">&#x1F4CA; {{ pickedActivity.difficulty }}</span>
<span class="ta-badge ta-badge-category" :style="{ background: getCategoryColor(pickedActivity.category) }">{{ pickedActivity.category }}</span>
</div>
<div class="ta-section">
<div class="ta-section-title">&#x1F392; 준비물</div>
<ul class="ta-supplies-list">
<li v-for="s in pickedActivity.supplies" :key="s">{{ s }}</li>
</ul>
</div>
<div class="ta-section">
<div class="ta-section-title">&#x1F4DD; 진행 방법</div>
<ol class="ta-steps-list">
<li v-for="(step, i) in pickedActivity.steps" :key="i">{{ step }}</li>
</ol>
</div>
<div class="ta-section">
<div class="ta-section-title">&#x2728; 기대 효과</div>
<div class="ta-effect">{{ pickedActivity.effect }}</div>
</div>
<div class="ta-section">
<div class="ta-tip">{{ pickedActivity.tip }}</div>
</div>
<div class="ta-actions">
<button class="ta-action-btn" @click="rollDice">&#x1F3B2; 다시 뽑기</button>
<button :class="['ta-action-btn', 'primary', { copied }]" @click="copyPlan(pickedActivity)">
{{ copied ? '&#x2705; 복사 완료!' : '&#x1F4CB; 활동 계획서 복사' }}
</button>
</div>
</div>
</div>
</div>

<!-- Toggle All List -->
<div class="ta-toggle-area">
<button class="ta-toggle-btn" @click="showAllList = !showAllList">
{{ showAllList ? '&#x1F4C2; 전체 목록 접기' : '&#x1F4C2; 전체 목록 보기' }}
</button>
</div>

<!-- All Activities List -->
<div v-if="showAllList">
<div class="ta-category-header">&#x1F3AD; 아이스브레이커 (5)</div>
<div class="ta-all-grid">
<div v-for="a in activities.filter(x => x.category === '아이스브레이커')" :key="a.id" class="ta-mini-card" @click="pickedActivity = a; showAllList = false">
<div class="ta-mini-header">
<span class="ta-mini-emoji">{{ a.emoji }}</span>
<span class="ta-mini-title">{{ a.title }}</span>
</div>
<div class="ta-mini-subtitle">{{ a.subtitle }}</div>
<div class="ta-mini-meta">
<span class="ta-mini-badge ta-badge-time">{{ a.duration }}</span>
<span class="ta-mini-badge ta-badge-people">{{ a.people }}</span>
<span class="ta-mini-badge ta-badge-difficulty" :style="{ background: getDifficultyColor(a.difficulty), color: 'white' }">{{ a.difficulty }}</span>
</div>
</div>
</div>
<div class="ta-category-header">&#x1F4D6; 학습 활동 (10)</div>
<div class="ta-all-grid">
<div v-for="a in activities.filter(x => x.category === '학습')" :key="a.id" class="ta-mini-card" @click="pickedActivity = a; showAllList = false">
<div class="ta-mini-header">
<span class="ta-mini-emoji">{{ a.emoji }}</span>
<span class="ta-mini-title">{{ a.title }}</span>
</div>
<div class="ta-mini-subtitle">{{ a.subtitle }}</div>
<div class="ta-mini-meta">
<span class="ta-mini-badge ta-badge-time">{{ a.duration }}</span>
<span class="ta-mini-badge ta-badge-people">{{ a.people }}</span>
<span class="ta-mini-badge ta-badge-difficulty" :style="{ background: getDifficultyColor(a.difficulty), color: 'white' }">{{ a.difficulty }}</span>
</div>
</div>
</div>
<div class="ta-category-header">&#x1F3C6; 경쟁 게임 (5)</div>
<div class="ta-all-grid">
<div v-for="a in activities.filter(x => x.category === '경쟁')" :key="a.id" class="ta-mini-card" @click="pickedActivity = a; showAllList = false">
<div class="ta-mini-header">
<span class="ta-mini-emoji">{{ a.emoji }}</span>
<span class="ta-mini-title">{{ a.title }}</span>
</div>
<div class="ta-mini-subtitle">{{ a.subtitle }}</div>
<div class="ta-mini-meta">
<span class="ta-mini-badge ta-badge-time">{{ a.duration }}</span>
<span class="ta-mini-badge ta-badge-people">{{ a.people }}</span>
<span class="ta-mini-badge ta-badge-difficulty" :style="{ background: getDifficultyColor(a.difficulty), color: 'white' }">{{ a.difficulty }}</span>
</div>
</div>
</div>
</div>
