# Cowork 실력 테스트

> 나의 Cowork 활용 수준은? 10개 문제로 확인해보세요!

<script setup>
import { ref, computed } from 'vue'

const questions = [
  {
    id: 1,
    category: 'basic',
    question: 'Claude Cowork의 가장 큰 특징은?',
    options: [
      '인터넷 검색을 빠르게 해준다',
      '내 컴퓨터 파일에 직접 접근하여 작업',
      '자동으로 이메일을 보내준다',
      '화상회의를 대신 참석해준다'
    ],
    answer: 1,
    explanation: 'Claude Cowork는 내 컴퓨터의 파일을 직접 읽고, 수정하고, 생성할 수 있는 것이 가장 큰 차별점입니다.',
    relatedPage: '/guide/what-is-cowork'
  },
  {
    id: 2,
    category: 'prompting',
    question: '좋은 프롬프트의 핵심 요소가 아닌 것은?',
    options: [
      '구체적인 맥락 제공',
      '원하는 출력 형식 명시',
      '가능한 짧게 쓰기',
      '역할 부여하기'
    ],
    answer: 2,
    explanation: '좋은 프롬프트는 충분한 맥락, 구체적인 지시, 원하는 형식을 포함해야 합니다. 무조건 짧게 쓰는 것은 오히려 품질을 떨어뜨릴 수 있습니다.',
    relatedPage: '/tips/prompting'
  },
  {
    id: 3,
    category: 'security',
    question: '민감한 정보(고객 이름, 전화번호 등)를 포함한 파일을 분석해야 할 때 올바른 방법은?',
    options: [
      '그냥 파일 전체를 전달한다',
      '스크린샷으로 찍어서 보여준다',
      '마스킹 처리 후 전달한다',
      '다른 사람에게 대신 요청한다'
    ],
    answer: 2,
    explanation: '민감한 개인정보는 마스킹(가명 처리) 후 전달하는 것이 올바른 방법입니다. 이름은 "고객A", 전화번호는 "010-****-1234" 등으로 변환하세요.',
    relatedPage: '/guide/security'
  },
  {
    id: 4,
    category: 'file',
    question: 'Claude에게 파일 작업을 요청할 때 가장 효과적인 방법은?',
    options: [
      '"파일 좀 정리해줘"라고 말한다',
      '파일 경로, 원하는 형식, 저장 위치를 구체적으로 지정한다',
      '파일 내용을 전부 복사해서 붙여넣기한다',
      '파일 이름만 알려준다'
    ],
    answer: 1,
    explanation: '파일 경로, 원하는 작업 내용, 출력 형식, 저장 위치를 구체적으로 지정하면 Claude가 정확하게 작업할 수 있습니다.',
    relatedPage: '/guide/daily'
  },
  {
    id: 5,
    category: 'workflow',
    question: '반복적인 주간 보고서 작성을 자동화하려면 어떤 방법이 가장 적합한가?',
    options: [
      '매번 처음부터 프롬프트를 작성한다',
      '템플릿 프롬프트를 만들어 재사용한다',
      '다른 AI 서비스를 함께 사용한다',
      '보고서를 쓰지 않는다'
    ],
    answer: 1,
    explanation: '반복 작업은 템플릿 프롬프트를 만들어두면 매번 일관된 품질의 결과를 빠르게 얻을 수 있습니다.',
    relatedPage: '/guide/workflows'
  },
  {
    id: 6,
    category: 'basic',
    question: 'Claude의 답변이 잘못되었을 때 가장 좋은 대응 방법은?',
    options: [
      '무시하고 새로운 대화를 시작한다',
      '같은 질문을 반복한다',
      '어떤 부분이 잘못되었는지 구체적으로 알려주고 수정을 요청한다',
      'Claude를 사용하지 않는다'
    ],
    answer: 2,
    explanation: '잘못된 부분을 구체적으로 지적하고 수정을 요청하면, Claude는 맥락을 유지한 채 더 나은 답변을 생성합니다.',
    relatedPage: '/tips/prompting'
  },
  {
    id: 7,
    category: 'plugins',
    question: 'MCP(Model Context Protocol)의 주요 역할은?',
    options: [
      'Claude의 응답 속도를 높인다',
      'Claude를 외부 도구 및 데이터 소스와 연결한다',
      'Claude의 대화 기록을 저장한다',
      'Claude의 보안을 강화한다'
    ],
    answer: 1,
    explanation: 'MCP는 Claude를 Slack, GitHub, 데이터베이스 등 외부 도구와 연결하여 더 강력한 워크플로우를 구축할 수 있게 해줍니다.',
    relatedPage: '/guide/mcp'
  },
  {
    id: 8,
    category: 'security',
    question: 'Claude 사용 시 보안을 위해 반드시 확인해야 할 사항이 아닌 것은?',
    options: [
      '회사 보안 정책에 AI 사용 규정이 있는지 확인',
      '민감 데이터가 포함되었는지 입력 전 검토',
      'Claude가 만든 코드를 무조건 신뢰하고 실행',
      '출력 결과를 사람이 최종 검토'
    ],
    answer: 2,
    explanation: 'Claude가 생성한 코드나 결과물은 반드시 사람이 검토해야 합니다. AI의 출력을 무조건 신뢰하는 것은 보안 및 품질 위험이 있습니다.',
    relatedPage: '/guide/security'
  },
  {
    id: 9,
    category: 'prompting',
    question: '대량의 데이터(예: 500행 엑셀)를 분석 요청할 때 가장 효과적인 전략은?',
    options: [
      '데이터 전체를 한 번에 붙여넣기한다',
      '분석 목적, 주요 컬럼, 원하는 차트 종류를 먼저 설명하고 파일을 전달한다',
      '데이터 없이 분석 방법만 물어본다',
      '10행씩 나눠서 보낸다'
    ],
    answer: 1,
    explanation: '분석 목적과 기대 결과를 먼저 명확히 한 뒤 파일을 전달하면, Claude가 맥락에 맞는 정확한 분석을 수행합니다.',
    relatedPage: '/guide/data'
  },
  {
    id: 10,
    category: 'workflow',
    question: '팀 전체의 Cowork 활용도를 높이기 위한 가장 좋은 방법은?',
    options: [
      '각자 알아서 사용하게 한다',
      '한 명만 집중적으로 사용한다',
      '팀 공용 프롬프트 라이브러리를 만들고, 성공 사례를 공유한다',
      'AI 사용을 의무화한다'
    ],
    answer: 2,
    explanation: '팀 공용 프롬프트 라이브러리와 성공 사례 공유는 팀 전체의 AI 활용 역량을 빠르게 높이는 가장 효과적인 방법입니다.',
    relatedPage: '/guide/admin'
  }
]

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const showFeedback = ref(false)
const answers = ref([])
const quizFinished = ref(false)

const currentQuestion = computed(() => questions[currentIndex.value])
const progress = computed(() => `${currentIndex.value + 1} / ${questions.length}`)
const progressPercent = computed(() => ((currentIndex.value + 1) / questions.length) * 100)

const score = computed(() => answers.value.filter(a => a.correct).length)

const level = computed(() => {
  const s = score.value
  if (s <= 3) return { badge: '🌱', name: '새싹', message: '시작이 반! 가이드를 읽어보세요' }
  if (s <= 6) return { badge: '🌿', name: '성장중', message: '기본기는 갖췄어요! 심화 활용을 배워보세요' }
  if (s <= 8) return { badge: '🌳', name: '능숙함', message: '이미 잘 쓰고 계시네요! 워크플로우 레시피를 도전해보세요' }
  return { badge: '⭐', name: '마스터', message: 'Cowork 마스터! 동료에게 가르쳐주세요' }
})

const wrongAnswerPages = computed(() => {
  const pages = []
  const seen = new Set()
  answers.value.forEach((a, i) => {
    if (!a.correct && !seen.has(questions[i].relatedPage)) {
      seen.add(questions[i].relatedPage)
      pages.push({
        page: questions[i].relatedPage,
        question: questions[i].question
      })
    }
  })
  return pages
})

const pageLabels = {
  '/guide/what-is-cowork': 'Cowork란?',
  '/tips/prompting': '프롬프팅 가이드',
  '/guide/security': '보안 가이드',
  '/guide/daily': '일상 업무 활용',
  '/guide/workflows': '워크플로우',
  '/guide/mcp': 'MCP 플러그인',
  '/guide/data': '데이터 분석',
  '/guide/admin': '관리자 가이드'
}

function selectAnswer(index) {
  if (showFeedback.value) return
  selectedAnswer.value = index
  showFeedback.value = true
  answers.value.push({
    selected: index,
    correct: index === currentQuestion.value.answer
  })
}

function nextQuestion() {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    showFeedback.value = false
  } else {
    quizFinished.value = true
  }
}

function resetQuiz() {
  currentIndex.value = 0
  selectedAnswer.value = null
  showFeedback.value = false
  answers.value = []
  quizFinished.value = false
}

function getOptionClass(index) {
  if (!showFeedback.value) return 'quiz-option'
  if (index === currentQuestion.value.answer) return 'quiz-option correct'
  if (index === selectedAnswer.value && index !== currentQuestion.value.answer) return 'quiz-option wrong'
  return 'quiz-option disabled'
}
</script>

<style>
.quiz-container {
  max-width: 700px;
  margin: 1.5rem auto;
  font-family: inherit;
}

/* Progress Bar */
.quiz-progress-bar {
  background: var(--vp-c-bg-soft);
  border-radius: 999px;
  height: 8px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}
.quiz-progress-fill {
  height: 100%;
  background: #E87040;
  border-radius: 999px;
  transition: width 0.4s ease;
}
.quiz-progress-text {
  text-align: right;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

/* Question Card */
.quiz-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 2rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.quiz-card.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}

.quiz-question-number {
  display: inline-block;
  background: #E87040;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}
.quiz-question-text {
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

/* Options */
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.quiz-option {
  padding: 1rem 1.2rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  line-height: 1.5;
  transition: all 0.2s ease;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.quiz-option:hover:not(.correct):not(.wrong):not(.disabled) {
  border-color: #E87040;
  background: rgba(232, 112, 64, 0.06);
}
.quiz-option.correct {
  border-color: #22c55e;
  background: rgba(34, 197, 94, 0.08);
  cursor: default;
}
.quiz-option.wrong {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.08);
  cursor: default;
}
.quiz-option.disabled {
  opacity: 0.5;
  cursor: default;
}
.quiz-option-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
  color: var(--vp-c-text-2);
}
.quiz-option.correct .quiz-option-label {
  background: #22c55e;
  color: #fff;
}
.quiz-option.wrong .quiz-option-label {
  background: #ef4444;
  color: #fff;
}

/* Feedback */
.quiz-feedback {
  margin-top: 1.25rem;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.6;
  animation: fadeIn 0.3s ease;
}
.quiz-feedback.correct {
  background: rgba(34, 197, 94, 0.08);
  border-left: 4px solid #22c55e;
}
.quiz-feedback.wrong {
  background: rgba(239, 68, 68, 0.08);
  border-left: 4px solid #ef4444;
}
.quiz-feedback-title {
  font-weight: 700;
  margin-bottom: 0.3rem;
}

/* Next Button */
.quiz-next-btn {
  display: block;
  margin: 1.5rem auto 0;
  padding: 0.7rem 2rem;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.quiz-next-btn:hover {
  background: #d4612f;
}
.quiz-next-btn:active {
  transform: scale(0.97);
}

/* Results */
.quiz-results {
  text-align: center;
  animation: fadeIn 0.5s ease;
}
.quiz-results-badge {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}
.quiz-results-level {
  font-size: 1.5rem;
  font-weight: 700;
  color: #E87040;
  margin-bottom: 0.25rem;
}
.quiz-results-score {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}
.quiz-results-message {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
}
.quiz-score-bar {
  width: 100%;
  height: 12px;
  background: var(--vp-c-bg-soft);
  border-radius: 999px;
  margin: 1rem 0 2rem;
  overflow: hidden;
}
.quiz-score-fill {
  height: 100%;
  background: linear-gradient(90deg, #E87040, #f59e0b);
  border-radius: 999px;
  transition: width 1s ease;
}

/* Recommendations */
.quiz-recommendations {
  text-align: left;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}
.quiz-recommendations h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}
.quiz-rec-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
}
.quiz-rec-item:last-child {
  border-bottom: none;
}
.quiz-rec-item a {
  color: #E87040;
  text-decoration: none;
  font-weight: 600;
}
.quiz-rec-item a:hover {
  text-decoration: underline;
}

.quiz-reset-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.7rem 2rem;
  background: #E87040;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.quiz-reset-btn:hover {
  background: #d4612f;
}
.quiz-reset-btn:active {
  transform: scale(0.97);
}

.quiz-perfect {
  background: rgba(34, 197, 94, 0.08);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<div class="quiz-container">

  <!-- Quiz in progress -->
  <div v-if="!quizFinished">
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>
    <div class="quiz-progress-text">{{ progress }}</div>

    <div class="quiz-card" :key="currentIndex">
      <span class="quiz-question-number">Q{{ currentQuestion.id }}</span>
      <div class="quiz-question-text">{{ currentQuestion.question }}</div>

      <div class="quiz-options">
        <button
          v-for="(option, i) in currentQuestion.options"
          :key="i"
          :class="getOptionClass(i)"
          @click="selectAnswer(i)"
        >
          <span class="quiz-option-label">{{ ['A','B','C','D'][i] }}</span>
          <span>{{ option }}</span>
        </button>
      </div>

      <div
        v-if="showFeedback"
        class="quiz-feedback"
        :class="selectedAnswer === currentQuestion.answer ? 'correct' : 'wrong'"
      >
        <div class="quiz-feedback-title">
          {{ selectedAnswer === currentQuestion.answer ? '✅ 정답입니다!' : '❌ 아쉽네요!' }}
        </div>
        <div>{{ currentQuestion.explanation }}</div>
      </div>

      <button
        v-if="showFeedback"
        class="quiz-next-btn"
        @click="nextQuestion"
      >
        {{ currentIndex < questions.length - 1 ? '다음 문제 →' : '결과 보기 →' }}
      </button>
    </div>
  </div>

  <!-- Results screen -->
  <div v-else class="quiz-results">
    <div class="quiz-card">
      <div class="quiz-results-badge">{{ level.badge }}</div>
      <div class="quiz-results-level">{{ level.name }}</div>
      <div class="quiz-results-score">{{ score }} / {{ questions.length }}</div>
      <div class="quiz-score-bar">
        <div class="quiz-score-fill" :style="{ width: (score / questions.length * 100) + '%' }"></div>
      </div>
      <div class="quiz-results-message">{{ level.message }}</div>

      <div v-if="wrongAnswerPages.length > 0" class="quiz-recommendations">
        <h3>📚 이 부분을 더 공부해보세요</h3>
        <div v-for="item in wrongAnswerPages" :key="item.page" class="quiz-rec-item">
          <span>📖</span>
          <span>{{ item.question }} → <a :href="item.page">{{ pageLabels[item.page] || item.page }}</a></span>
        </div>
      </div>

      <div v-else class="quiz-perfect">
        🎉 모든 문제를 맞히셨습니다! 완벽한 Cowork 마스터시네요.
      </div>

      <button class="quiz-reset-btn" @click="resetQuiz">🔄 다시 풀기</button>
    </div>
  </div>
</div>
