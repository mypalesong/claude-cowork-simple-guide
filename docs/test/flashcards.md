# 용어 플래시카드

> 카드를 뒤집어 AI 용어를 재미있게 배워보세요! 20개 핵심 용어를 마스터하세요.

<script setup>
import { ref, computed, onMounted } from 'vue'

const cards = ref([
  {
    term: 'LLM',
    definition: '대규모 언어 모델(Large Language Model). 방대한 텍스트를 학습해 사람처럼 글을 쓰고 대화하는 AI.',
    analogy: '📚 수백만 권의 책을 읽은 똑똑한 비서와 같아요.'
  },
  {
    term: '프롬프트',
    definition: 'AI에게 보내는 질문이나 지시문. 잘 쓸수록 좋은 답변을 받을 수 있어요.',
    analogy: '🎯 식당 주문서와 같아요 — 구체적으로 쓸수록 원하는 요리가 나와요.'
  },
  {
    term: '할루시네이션',
    definition: 'AI가 그럴듯하지만 사실이 아닌 정보를 만들어내는 현상.',
    analogy: '🌀 자신감 넘치지만 가끔 틀리는 발표자와 같아요.'
  },
  {
    term: 'MCP',
    definition: 'Model Context Protocol. AI가 외부 도구나 데이터에 접근할 수 있게 해주는 표준 규격.',
    analogy: '🔌 가전제품의 공통 콘센트 규격과 같아요.'
  },
  {
    term: '토큰',
    definition: 'AI가 텍스트를 처리하는 최소 단위. 단어나 음절 조각이에요.',
    analogy: '🧩 문장을 퍼즐 조각으로 나눈 것과 같아요.'
  },
  {
    term: '컨텍스트 윈도우',
    definition: 'AI가 한 번에 기억하고 처리할 수 있는 텍스트 양의 한계.',
    analogy: '📋 책상 위 공간과 같아요 — 넓을수록 많은 자료를 펼쳐놓고 작업할 수 있어요.'
  },
  {
    term: 'Custom Instructions',
    definition: 'AI에게 미리 설정해두는 나만의 지침. 매번 반복 설명할 필요가 없어요.',
    analogy: '📌 단골 카페에서 "평소처럼요"라고 주문하는 것과 같아요.'
  },
  {
    term: '플러그인',
    definition: 'AI의 기능을 확장해주는 추가 도구. 웹 검색, 코드 실행 등이 가능해져요.',
    analogy: '🔧 스마트폰에 앱을 설치해서 기능을 추가하는 것과 같아요.'
  },
  {
    term: 'Projects',
    definition: 'Claude에서 관련 대화와 파일을 하나의 프로젝트로 묶어 관리하는 기능.',
    analogy: '📁 업무별로 서류철을 나누어 정리하는 것과 같아요.'
  },
  {
    term: 'Memory',
    definition: 'AI가 이전 대화 내용을 기억해서 연속적인 맥락을 유지하는 기능.',
    analogy: '🧠 오래 함께 일한 동료가 내 취향을 기억하는 것과 같아요.'
  },
  {
    term: 'Artifacts',
    definition: 'Claude가 생성한 코드, 문서, 차트 등을 별도 패널에서 보여주는 기능.',
    analogy: '🖼️ 화이트보드에 결과물을 따로 정리해서 보여주는 것과 같아요.'
  },
  {
    term: '프롬프트 엔지니어링',
    definition: 'AI에서 최적의 결과를 얻기 위해 체계적으로 지시문을 설계하는 기술.',
    analogy: '🏗️ 건축 설계도를 정교하게 그리는 것과 같아요.'
  },
  {
    term: '파인튜닝',
    definition: '범용 AI 모델을 특정 분야에 맞게 추가 학습시켜 전문화하는 과정.',
    analogy: '🎓 종합병원 의사가 전문의 수련을 받는 것과 같아요.'
  },
  {
    term: 'SSO',
    definition: 'Single Sign-On. 하나의 계정으로 여러 서비스에 로그인할 수 있는 인증 방식.',
    analogy: '🔑 마스터키 하나로 건물의 모든 문을 여는 것과 같아요.'
  },
  {
    term: 'Enterprise Plan',
    definition: '기업용 AI 서비스 요금제. 보안, 관리, 대량 사용 등 조직 기능을 제공해요.',
    analogy: '🏢 개인 사무실 대신 관리 서비스가 포함된 오피스 빌딩 임대와 같아요.'
  },
  {
    term: '에이전트',
    definition: '스스로 판단하고 여러 단계를 실행할 수 있는 자율적 AI 시스템.',
    analogy: '🤖 지시만 하면 알아서 일을 처리하는 유능한 인턴과 같아요.'
  },
  {
    term: 'RAG',
    definition: 'Retrieval-Augmented Generation. 외부 문서를 검색해서 답변에 활용하는 기술.',
    analogy: '📖 시험 때 교과서를 참고하며 답을 쓰는 것과 같아요.'
  },
  {
    term: '임베딩',
    definition: '텍스트를 숫자 벡터로 변환해 의미적 유사성을 계산할 수 있게 하는 기술.',
    analogy: '🗺️ 단어마다 지도 위 좌표를 부여해 가까운 의미끼리 모이게 하는 것과 같아요.'
  },
  {
    term: 'API',
    definition: 'Application Programming Interface. 프로그램끼리 소통하는 표준 통로.',
    analogy: '🍽️ 식당의 창구와 같아요 — 주문(요청)을 넣으면 음식(결과)이 나와요.'
  },
  {
    term: '멀티모달',
    definition: '텍스트, 이미지, 음성 등 여러 형태의 데이터를 함께 이해하고 처리하는 AI 능력.',
    analogy: '👁️ 글도 읽고, 그림도 보고, 소리도 듣는 다재다능한 비서와 같아요.'
  }
])

const currentIndex = ref(0)
const isFlipped = ref(false)
const knownCards = ref(new Set())
const unknownCards = ref(new Set())
const isFinished = ref(false)
const isTestMode = ref(false)
const userGuess = ref('')
const guessRevealed = ref(false)

const originalOrder = [...Array(20).keys()]

const currentCard = computed(() => cards.value[currentIndex.value])
const total = computed(() => cards.value.length)
const progress = computed(() => `${currentIndex.value + 1} / ${total.value}`)
const knownCount = computed(() => knownCards.value.size)
const unknownCount = computed(() => unknownCards.value.size)

function flipCard() {
  if (isTestMode.value && !guessRevealed.value) {
    guessRevealed.value = true
    isFlipped.value = true
    return
  }
  isFlipped.value = !isFlipped.value
}

function nextCard() {
  if (currentIndex.value < total.value - 1) {
    isFlipped.value = false
    guessRevealed.value = false
    userGuess.value = ''
    currentIndex.value++
  }
}

function prevCard() {
  if (currentIndex.value > 0) {
    isFlipped.value = false
    guessRevealed.value = false
    userGuess.value = ''
    currentIndex.value--
  }
}

function shuffleDeck() {
  const arr = [...cards.value]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  cards.value = arr
  currentIndex.value = 0
  isFlipped.value = false
  guessRevealed.value = false
  userGuess.value = ''
  knownCards.value = new Set()
  unknownCards.value = new Set()
  isFinished.value = false
}

function markKnown() {
  knownCards.value.add(currentCard.value.term)
  unknownCards.value.delete(currentCard.value.term)
  knownCards.value = new Set(knownCards.value)
  advanceOrFinish()
}

function markUnknown() {
  unknownCards.value.add(currentCard.value.term)
  knownCards.value.delete(currentCard.value.term)
  unknownCards.value = new Set(unknownCards.value)
  advanceOrFinish()
}

function advanceOrFinish() {
  if (knownCards.value.size + unknownCards.value.size >= total.value) {
    isFinished.value = true
  } else if (currentIndex.value < total.value - 1) {
    isFlipped.value = false
    guessRevealed.value = false
    userGuess.value = ''
    currentIndex.value++
  }
}

function restart() {
  currentIndex.value = 0
  isFlipped.value = false
  guessRevealed.value = false
  userGuess.value = ''
  knownCards.value = new Set()
  unknownCards.value = new Set()
  isFinished.value = false
}

function toggleMode() {
  isTestMode.value = !isTestMode.value
  isFlipped.value = false
  guessRevealed.value = false
  userGuess.value = ''
}
</script>

<div class="flashcard-app">

  <!-- 모드 토글 -->
  <div class="mode-toggle">
    <button
      :class="['mode-btn', { active: !isTestMode }]"
      @click="isTestMode && toggleMode()"
    >
      📖 학습 모드
    </button>
    <button
      :class="['mode-btn', { active: isTestMode }]"
      @click="!isTestMode && toggleMode()"
    >
      ✍️ 테스트 모드
    </button>
  </div>

  <!-- 최종 결과 -->
  <div v-if="isFinished" class="summary-panel">
    <h2>🎉 학습 완료!</h2>
    <div class="summary-stats">
      <div class="stat known">
        <span class="stat-number">{{ knownCount }}</span>
        <span class="stat-label">/ {{ total }} 알고 있음 ✅</span>
      </div>
      <div class="stat unknown">
        <span class="stat-number">{{ unknownCount }}</span>
        <span class="stat-label">/ {{ total }} 학습 필요 📘</span>
      </div>
    </div>
    <div class="summary-bar">
      <div class="bar-fill" :style="{ width: (knownCount / total * 100) + '%' }"></div>
    </div>
    <p v-if="knownCount === total" class="summary-msg perfect">🏆 완벽합니다! 모든 용어를 알고 있어요!</p>
    <p v-else-if="knownCount >= total * 0.8" class="summary-msg great">👏 훌륭해요! 거의 다 마스터했어요!</p>
    <p v-else-if="knownCount >= total * 0.5" class="summary-msg good">💪 좋아요! 조금 더 복습하면 완벽해질 거예요.</p>
    <p v-else class="summary-msg keep-going">📚 꾸준히 학습하면 금방 익숙해질 거예요!</p>

    <div v-if="unknownCount > 0" class="review-list">
      <h3>📘 복습이 필요한 용어</h3>
      <ul>
        <li v-for="card in cards.filter(c => unknownCards.has(c.term))" :key="card.term">
          <strong>{{ card.term }}</strong> — {{ card.definition.split('.')[0] }}.
        </li>
      </ul>
    </div>

    <div class="summary-actions">
      <button class="action-btn restart" @click="restart()">🔄 다시 시작</button>
      <button class="action-btn shuffle" @click="shuffleDeck()">🔀 섞어서 다시</button>
    </div>
  </div>

  <!-- 카드 영역 -->
  <div v-else>
    <div class="progress-row">
      <span class="progress-text">{{ progress }}</span>
      <button class="shuffle-btn" @click="shuffleDeck()">🔀 섞기</button>
    </div>

    <div class="score-row">
      <span class="score known-score">✅ {{ knownCount }}</span>
      <span class="score unknown-score">📘 {{ unknownCount }}</span>
    </div>

    <!-- 학습 모드 카드 -->
    <div v-if="!isTestMode" class="card-scene" @click="flipCard()">
      <div :class="['card', { flipped: isFlipped }]">
        <div class="card-face card-front">
          <div class="card-label">용어</div>
          <div class="card-term">{{ currentCard.term }}</div>
          <div class="card-hint">클릭하여 뒤집기</div>
        </div>
        <div class="card-face card-back">
          <div class="card-label">설명</div>
          <div class="card-definition">{{ currentCard.definition }}</div>
          <div class="card-analogy">{{ currentCard.analogy }}</div>
        </div>
      </div>
    </div>

    <!-- 테스트 모드 카드 -->
    <div v-else class="card-scene test-mode-scene">
      <div :class="['card', { flipped: guessRevealed }]">
        <div class="card-face card-front test-front">
          <div class="card-label">이 용어는?</div>
          <div class="card-definition test-def">{{ currentCard.definition }}</div>
          <div class="card-analogy test-analogy">{{ currentCard.analogy }}</div>
        </div>
        <div class="card-face card-back test-back">
          <div class="card-label">정답</div>
          <div class="card-term">{{ currentCard.term }}</div>
          <div class="card-definition" style="font-size: 0.85em; margin-top: 8px;">{{ currentCard.definition }}</div>
        </div>
      </div>
      <div class="guess-area" v-if="!guessRevealed">
        <input
          v-model="userGuess"
          class="guess-input"
          placeholder="용어를 입력하세요..."
          @keyup.enter="flipCard()"
        />
        <button class="reveal-btn" @click="flipCard()">정답 확인</button>
      </div>
    </div>

    <!-- 네비게이션 -->
    <div class="nav-row">
      <button class="nav-btn" :disabled="currentIndex === 0" @click="prevCard()">← 이전</button>
      <button class="nav-btn" :disabled="currentIndex === total - 1" @click="nextCard()">다음 →</button>
    </div>

    <!-- 알고 있어요 / 모르겠어요 -->
    <div class="knowledge-row">
      <button class="know-btn known-btn" @click="markKnown()">✅ 알고 있어요</button>
      <button class="know-btn unknown-btn" @click="markUnknown()">📘 모르겠어요</button>
    </div>
  </div>
</div>

<style scoped>
.flashcard-app {
  max-width: 520px;
  margin: 2rem auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* 모드 토글 */
.mode-toggle {
  display: flex;
  gap: 0;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #e5713a;
}
.mode-btn {
  flex: 1;
  padding: 10px 16px;
  border: none;
  background: white;
  color: #666;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.mode-btn.active {
  background: #e5713a;
  color: white;
}

/* 진행률 */
.progress-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.progress-text {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
}
.shuffle-btn {
  padding: 6px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.2s;
}
.shuffle-btn:hover {
  background: #f5f5f5;
}

.score-row {
  display: flex;
  gap: 16px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
}
.known-score { color: #27ae60; }
.unknown-score { color: #e5713a; }

/* 카드 씬 */
.card-scene {
  perspective: 800px;
  width: 100%;
  height: 220px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.test-mode-scene {
  cursor: default;
  height: 240px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.card.flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  border: 1px solid #eee;
}

.card-front {
  background: linear-gradient(135deg, #fff8f4 0%, #ffffff 100%);
}
.card-back {
  background: linear-gradient(135deg, #fef3ec 0%, #fff8f4 100%);
  transform: rotateY(180deg);
}

.card-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #e5713a;
  margin-bottom: 8px;
  font-weight: 700;
}

.card-term {
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a2e;
  text-align: center;
}

.card-hint {
  position: absolute;
  bottom: 14px;
  font-size: 0.75rem;
  color: #bbb;
}

.card-definition {
  font-size: 0.95rem;
  color: #333;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 8px;
}

.card-analogy {
  font-size: 0.85rem;
  color: #e5713a;
  text-align: center;
  font-style: italic;
}

/* 테스트 모드 */
.test-front {
  justify-content: center;
  padding: 20px;
}
.test-def {
  font-size: 0.9rem;
}
.test-analogy {
  font-size: 0.8rem;
}
.test-back {
  background: linear-gradient(135deg, #e5713a 0%, #d4622e 100%);
}
.test-back .card-label {
  color: rgba(255,255,255,0.7);
}
.test-back .card-term {
  color: white;
  font-size: 2.2rem;
}
.test-back .card-definition {
  color: rgba(255,255,255,0.85);
}

.guess-area {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}
.guess-input {
  flex: 1;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}
.guess-input:focus {
  border-color: #e5713a;
}
.reveal-btn {
  padding: 10px 18px;
  background: #e5713a;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
}
.reveal-btn:hover {
  background: #d4622e;
}

/* 네비게이션 */
.nav-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}
.nav-btn {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  color: #333;
}
.nav-btn:hover:not(:disabled) {
  border-color: #e5713a;
  color: #e5713a;
}
.nav-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* 알고 있어요 / 모르겠어요 */
.knowledge-row {
  display: flex;
  gap: 12px;
}
.know-btn {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s;
}
.know-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.known-btn {
  background: #e8f8ef;
  color: #27ae60;
}
.unknown-btn {
  background: #fef3ec;
  color: #e5713a;
}

/* 결과 화면 */
.summary-panel {
  text-align: center;
  padding: 2rem 1rem;
}
.summary-panel h2 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
  color: #1a1a2e;
}
.summary-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
}
.stat.known .stat-number { color: #27ae60; }
.stat.unknown .stat-number { color: #e5713a; }
.stat-label {
  font-size: 0.85rem;
  color: #666;
  margin-top: 4px;
}

.summary-bar {
  width: 100%;
  height: 10px;
  background: #fef3ec;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
}
.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  border-radius: 5px;
  transition: width 0.6s ease;
}

.summary-msg {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.perfect { color: #f39c12; }
.great { color: #27ae60; }
.good { color: #3498db; }
.keep-going { color: #e5713a; }

.review-list {
  text-align: left;
  background: #fef9f6;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 1.5rem;
  border: 1px solid #f0e0d4;
}
.review-list h3 {
  font-size: 0.95rem;
  margin-bottom: 10px;
  color: #e5713a;
}
.review-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.review-list li {
  padding: 6px 0;
  font-size: 0.88rem;
  color: #444;
  border-bottom: 1px solid #f0e6de;
}
.review-list li:last-child {
  border-bottom: none;
}

.summary-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.action-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s;
}
.action-btn:hover {
  transform: translateY(-1px);
}
.action-btn.restart {
  background: #e5713a;
  color: white;
}
.action-btn.shuffle {
  background: #f0e6de;
  color: #e5713a;
}

/* 다크모드 */
.dark .card-face {
  border-color: #333;
}
.dark .card-front {
  background: linear-gradient(135deg, #2a2a3e 0%, #1e1e2e 100%);
}
.dark .card-back {
  background: linear-gradient(135deg, #332a22 0%, #2a2a3e 100%);
}
.dark .card-term { color: #f0f0f0; }
.dark .card-definition { color: #ccc; }
.dark .card-hint { color: #555; }
.dark .progress-text { color: #ddd; }
.dark .nav-btn {
  background: #2a2a3e;
  border-color: #444;
  color: #ddd;
}
.dark .shuffle-btn {
  background: #2a2a3e;
  border-color: #444;
  color: #ddd;
}
.dark .mode-btn {
  background: #2a2a3e;
  color: #999;
}
.dark .mode-btn.active {
  background: #e5713a;
  color: white;
}
.dark .guess-input {
  background: #2a2a3e;
  border-color: #444;
  color: #ddd;
}
.dark .known-btn {
  background: #1e3a2a;
}
.dark .unknown-btn {
  background: #3a2a1e;
}
.dark .review-list {
  background: #2a2218;
  border-color: #3a2a1e;
}
.dark .summary-panel h2 { color: #f0f0f0; }
</style>
