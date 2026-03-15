# Cowork 뱃지 컬렉션

> 학습 여정을 뱃지로 기록하세요! 모든 뱃지를 수집하면 Cowork 마스터!

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'

const categories = [
  {
    name: '입문',
    icon: '🌱',
    badges: [
      { id: 'first-chat', emoji: '👋', name: '첫 만남', desc: 'Claude와 첫 대화를 나눴어요' },
      { id: 'email-master', emoji: '📧', name: '이메일 마스터', desc: '이메일 3개 이상 작성' },
      { id: 'file-reader', emoji: '📄', name: '파일 리더', desc: '파일 요약을 요청했어요' },
      { id: 'revision', emoji: '✏️', name: '수정 요청', desc: '"다시 써줘"를 활용했어요' },
      { id: 'settings', emoji: '⚙️', name: '설정 완료', desc: 'Custom Instructions 설정' },
      { id: 'checklist', emoji: '📋', name: '체크리스트', desc: '온보딩 체크리스트 완료' },
    ]
  },
  {
    name: '성장',
    icon: '🌿',
    badges: [
      { id: 'data-analyst', emoji: '📊', name: '데이터 분석가', desc: '데이터 분석을 요청했어요' },
      { id: 'meeting-pro', emoji: '📝', name: '회의록 프로', desc: '회의록 3개 이상 정리' },
      { id: 'prompt-master', emoji: '🎯', name: '프롬프트 장인', desc: '프롬프트 평가기에서 80점 이상' },
      { id: 'workflow', emoji: '🔄', name: '워크플로우 빌더', desc: '워크플로우 레시피 하나 완성' },
      { id: 'translator', emoji: '🌐', name: '번역가', desc: '번역을 요청했어요' },
      { id: 'explorer', emoji: '📚', name: '지식 탐험가', desc: '가이드 10페이지 이상 읽기' },
    ]
  },
  {
    name: '숙련',
    icon: '🌳',
    badges: [
      { id: 'plugin', emoji: '🔌', name: '플러그인 탐험가', desc: '플러그인 3개 이상 활용' },
      { id: 'team-player', emoji: '👥', name: '팀 플레이어', desc: '동료에게 프롬프트 공유' },
      { id: 'roi', emoji: '📈', name: 'ROI 분석가', desc: 'ROI 계산기로 효과 측정' },
      { id: 'security', emoji: '🛡️', name: '보안 전문가', desc: '보안 체크리스트 100% 완료' },
    ]
  },
  {
    name: '마스터',
    icon: '⭐',
    badges: [
      { id: 'quiz-master', emoji: '🏆', name: '퀴즈 마스터', desc: '실력 퀴즈 9점 이상' },
      { id: 'educator', emoji: '🎓', name: '교육자', desc: '팀 교육 세션 진행' },
      { id: 'champion', emoji: '🌟', name: 'AI 챔피언', desc: '3개월 이상 꾸준히 활용' },
      { id: 'all-clear', emoji: '👑', name: '올 클리어', desc: '모든 뱃지 수집!' },
    ]
  }
]

const allBadges = computed(() => categories.flatMap(c => c.badges))
const totalCount = computed(() => allBadges.value.length)

const unlockedIds = ref(new Set())
const showCelebration = ref(false)
const celebrationText = ref('')
const previousLevel = ref(0)
const copied = ref(false)

function loadState() {
  try {
    const saved = localStorage.getItem('cowork-badges')
    if (saved) {
      const arr = JSON.parse(saved)
      unlockedIds.value = new Set(arr)
    }
  } catch {}
}

function saveState() {
  try {
    localStorage.setItem('cowork-badges', JSON.stringify([...unlockedIds.value]))
  } catch {}
}

onMounted(() => {
  loadState()
  previousLevel.value = getLevel(unlockedIds.value.size).num
})

const unlockedCount = computed(() => unlockedIds.value.size)

const progress = computed(() => {
  return Math.round((unlockedCount.value / totalCount.value) * 100)
})

function getLevel(count) {
  if (count >= 20) return { num: 5, title: '마스터', icon: '👑' }
  if (count >= 16) return { num: 4, title: '전문가', icon: '⭐' }
  if (count >= 11) return { num: 3, title: '숙련', icon: '🌳' }
  if (count >= 6) return { num: 2, title: '성장', icon: '🌿' }
  return { num: 1, title: '새싹', icon: '🌱' }
}

const currentLevel = computed(() => getLevel(unlockedCount.value))

function toggleBadge(id) {
  const oldCount = unlockedIds.value.size
  const newSet = new Set(unlockedIds.value)
  if (newSet.has(id)) {
    newSet.delete(id)
  } else {
    newSet.add(id)
  }
  unlockedIds.value = newSet
  saveState()

  const newCount = newSet.size
  const oldLevel = getLevel(oldCount).num
  const newLevel = getLevel(newCount).num
  if (newLevel > oldLevel) {
    celebrationText.value = `Lv.${newLevel} ${getLevel(newCount).title} 달성!`
    showCelebration.value = true
    setTimeout(() => { showCelebration.value = false }, 2500)
  }
}

function isUnlocked(id) {
  return unlockedIds.value.has(id)
}

function shareProgress() {
  const lv = currentLevel.value
  let text = `🏅 Cowork 뱃지 현황 — Lv.${lv.num} ${lv.title}\n`
  text += `진행률: ${unlockedCount.value}/${totalCount.value} (${progress.value}%)\n\n`
  for (const cat of categories) {
    text += `${cat.icon} ${cat.name}\n`
    for (const b of cat.badges) {
      const mark = isUnlocked(b.id) ? '✅' : '⬜'
      text += `  ${mark} ${b.emoji} ${b.name}\n`
    }
    text += '\n'
  }
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<div class="badges-app">

  <!-- Level & Progress -->
  <div class="level-section">
    <div class="level-display">
      <span class="level-icon">{{ currentLevel.icon }}</span>
      <span class="level-label">Lv.{{ currentLevel.num }}</span>
      <span class="level-title">{{ currentLevel.title }}</span>
    </div>
    <div class="progress-area">
      <div class="progress-text">{{ unlockedCount }} / {{ totalCount }} 뱃지 수집</div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="progress-pct">{{ progress }}%</div>
    </div>
    <div class="level-guide">
      <span v-for="l in [
        { n: 1, t: '새싹', r: '0-5' },
        { n: 2, t: '성장', r: '6-10' },
        { n: 3, t: '숙련', r: '11-15' },
        { n: 4, t: '전문가', r: '16-19' },
        { n: 5, t: '마스터', r: '20' },
      ]" :key="l.n" class="level-step" :class="{ active: currentLevel.num >= l.n }">
        Lv.{{ l.n }} {{ l.t }}
      </span>
    </div>
  </div>

  <!-- Badge Categories -->
  <div v-for="cat in categories" :key="cat.name" class="badge-category">
    <h3 class="category-title">{{ cat.icon }} {{ cat.name }} <span class="category-count">({{ cat.badges.filter(b => isUnlocked(b.id)).length }}/{{ cat.badges.length }})</span></h3>
    <div class="badge-grid">
      <div
        v-for="badge in cat.badges"
        :key="badge.id"
        class="badge-card"
        :class="{ unlocked: isUnlocked(badge.id), locked: !isUnlocked(badge.id) }"
        @click="toggleBadge(badge.id)"
        role="button"
        tabindex="0"
        @keydown.enter="toggleBadge(badge.id)"
        @keydown.space.prevent="toggleBadge(badge.id)"
      >
        <div class="badge-icon-wrap">
          <span class="badge-emoji">{{ badge.emoji }}</span>
          <span v-if="!isUnlocked(badge.id)" class="lock-overlay">🔒</span>
        </div>
        <div class="badge-name">{{ badge.name }}</div>
        <div class="badge-desc">{{ badge.desc }}</div>
      </div>
    </div>
  </div>

  <!-- Share Button -->
  <div class="share-section">
    <button class="share-btn" @click="shareProgress">
      {{ copied ? '✅ 복사 완료!' : '📋 진행 상황 공유' }}
    </button>
    <p class="share-hint">클릭하면 뱃지 현황이 클립보드에 복사됩니다</p>
  </div>

  <!-- Celebration Overlay -->
  <Transition name="celebrate">
    <div v-if="showCelebration" class="celebration-overlay">
      <div class="celebration-content">
        <div class="celebration-sparkles">✨🎉✨</div>
        <div class="celebration-text">{{ celebrationText }}</div>
        <div class="celebration-sparkles">🎊🏅🎊</div>
      </div>
    </div>
  </Transition>

</div>

<style scoped>
.badges-app {
  max-width: 800px;
  margin: 0 auto;
  font-family: inherit;
}

/* Level Section */
.level-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: 16px;
  padding: 28px 32px;
  margin-bottom: 32px;
  text-align: center;
  border: 1px solid rgba(231, 137, 58, 0.3);
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}

.level-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
}

.level-icon {
  font-size: 2.4em;
}

.level-label {
  font-size: 1.6em;
  font-weight: 800;
  color: #e7893a;
  letter-spacing: 1px;
}

.level-title {
  font-size: 1.4em;
  font-weight: 700;
  color: #fff;
}

.progress-area {
  margin-bottom: 16px;
}

.progress-text {
  font-size: 0.95em;
  color: #ccc;
  margin-bottom: 8px;
}

.progress-bar {
  height: 14px;
  background: rgba(255,255,255,0.1);
  border-radius: 7px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #e7893a, #f5b041, #e7893a);
  border-radius: 7px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 12px rgba(231, 137, 58, 0.5);
}

.progress-pct {
  font-size: 0.85em;
  color: #e7893a;
  margin-top: 4px;
  font-weight: 600;
}

.level-guide {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.level-step {
  font-size: 0.75em;
  padding: 3px 10px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  color: #666;
  transition: all 0.3s;
}

.level-step.active {
  background: rgba(231, 137, 58, 0.2);
  color: #e7893a;
  font-weight: 600;
}

/* Category */
.badge-category {
  margin-bottom: 28px;
}

.category-title {
  font-size: 1.2em;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(231, 137, 58, 0.2);
  color: var(--vp-c-text-1, #fff);
}

.category-count {
  font-size: 0.8em;
  color: #888;
  font-weight: 400;
}

/* Badge Grid */
.badge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 14px;
}

/* Badge Card */
.badge-card {
  position: relative;
  border-radius: 14px;
  padding: 20px 14px 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  border: 2px solid transparent;
}

.badge-card.unlocked {
  background: linear-gradient(145deg, rgba(231, 137, 58, 0.12), rgba(245, 176, 65, 0.06));
  border-color: rgba(231, 137, 58, 0.4);
  box-shadow: 0 0 20px rgba(231, 137, 58, 0.15), inset 0 0 20px rgba(231, 137, 58, 0.05);
}

.badge-card.unlocked:hover {
  border-color: rgba(231, 137, 58, 0.7);
  box-shadow: 0 0 28px rgba(231, 137, 58, 0.3), inset 0 0 20px rgba(231, 137, 58, 0.08);
  transform: translateY(-3px);
}

.badge-card.locked {
  background: rgba(128, 128, 128, 0.06);
  border-color: rgba(128, 128, 128, 0.15);
}

.badge-card.locked:hover {
  border-color: rgba(128, 128, 128, 0.35);
  transform: translateY(-2px);
}

/* Badge Icon */
.badge-icon-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
}

.badge-emoji {
  font-size: 2.4em;
  display: block;
  transition: filter 0.3s, transform 0.3s;
  line-height: 1.2;
}

.badge-card.locked .badge-emoji {
  filter: grayscale(100%) brightness(0.5);
}

.badge-card.unlocked .badge-emoji {
  filter: none;
  animation: badgeGlow 2s ease-in-out infinite alternate;
}

@keyframes badgeGlow {
  0% { filter: drop-shadow(0 0 4px rgba(231, 137, 58, 0.3)); }
  100% { filter: drop-shadow(0 0 10px rgba(231, 137, 58, 0.6)); }
}

.lock-overlay {
  position: absolute;
  bottom: -2px;
  right: -8px;
  font-size: 0.9em;
  opacity: 0.7;
}

.badge-name {
  font-weight: 700;
  font-size: 0.9em;
  margin-bottom: 4px;
  color: var(--vp-c-text-1, #eee);
}

.badge-card.locked .badge-name {
  color: var(--vp-c-text-3, #666);
}

.badge-desc {
  font-size: 0.75em;
  color: var(--vp-c-text-2, #aaa);
  line-height: 1.4;
}

.badge-card.locked .badge-desc {
  color: var(--vp-c-text-3, #555);
}

/* Share Section */
.share-section {
  text-align: center;
  margin-top: 36px;
  padding-top: 24px;
  border-top: 1px solid rgba(231, 137, 58, 0.15);
}

.share-btn {
  background: linear-gradient(135deg, #e7893a, #d4782f);
  color: #fff;
  border: none;
  padding: 14px 36px;
  border-radius: 12px;
  font-size: 1.05em;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(231, 137, 58, 0.3);
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(231, 137, 58, 0.4);
}

.share-btn:active {
  transform: translateY(0);
}

.share-hint {
  font-size: 0.8em;
  color: var(--vp-c-text-3, #888);
  margin-top: 10px;
}

/* Celebration Overlay */
.celebration-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.6);
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.celebration-content {
  background: linear-gradient(145deg, #1a1a2e, #0f3460);
  border: 2px solid #e7893a;
  border-radius: 24px;
  padding: 48px 56px;
  text-align: center;
  box-shadow: 0 0 60px rgba(231, 137, 58, 0.4);
  animation: celebratePop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes celebratePop {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.celebration-sparkles {
  font-size: 2em;
  margin: 8px 0;
}

.celebration-text {
  font-size: 1.8em;
  font-weight: 800;
  color: #e7893a;
  text-shadow: 0 0 20px rgba(231, 137, 58, 0.5);
  margin: 12px 0;
}

.celebrate-enter-active {
  transition: opacity 0.3s;
}

.celebrate-leave-active {
  transition: opacity 0.5s;
}

.celebrate-enter-from,
.celebrate-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 600px) {
  .badge-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .level-section {
    padding: 20px 16px;
  }
  .celebration-content {
    padding: 32px 24px;
    margin: 0 16px;
  }
  .celebration-text {
    font-size: 1.3em;
  }
}
</style>
