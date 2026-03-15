# 연간 AI 활용 캘린더

> 매달 새로운 AI 활용 테마에 도전하세요! 12개월 로드맵으로 Cowork 마스터가 되는 여정입니다.

<script setup>
import { ref, computed } from 'vue'

const expandedMonth = ref(null)

function toggleMonth(index) {
  expandedMonth.value = expandedMonth.value === index ? null : index
}

const currentMonth = new Date().getMonth()

const months = [
  {
    month: '1월',
    emoji: '🚀',
    theme: '시작하기',
    color: '#E87040',
    gradient: 'linear-gradient(135deg, #E87040, #F4A261)',
    weeks: [
      'Claude 설치 & 첫 대화',
      '이메일 3개 작성',
      '파일 요약 5개',
      'Custom Instructions 설정',
    ],
    goal: 'Cowork 기본 기능 익히기',
  },
  {
    month: '2월',
    emoji: '📝',
    theme: '문서 마스터',
    color: '#D4A843',
    gradient: 'linear-gradient(135deg, #D4A843, #E8C547)',
    weeks: [
      '보고서 작성 연습',
      '기획서 초안 3개',
      '다양한 톤으로 이메일 작성',
      '문서 퇴고 & 다듬기',
    ],
    goal: '문서 작성 시간 50% 단축',
  },
  {
    month: '3월',
    emoji: '📊',
    theme: '데이터 정복',
    color: '#5B9BD5',
    gradient: 'linear-gradient(135deg, #5B9BD5, #7EC8E3)',
    weeks: [
      '엑셀 데이터 분석',
      '설문 결과 정리',
      '차트 & 시각화 요청',
      '월간 리포트 자동화',
    ],
    goal: '데이터 작업 자동화 루틴 구축',
  },
  {
    month: '4월',
    emoji: '🤝',
    theme: '회의 혁신',
    color: '#70AD47',
    gradient: 'linear-gradient(135deg, #70AD47, #A8D86D)',
    weeks: [
      '안건 자동 정리',
      '실시간 노트 활용',
      '회의록 → 이메일 파이프라인',
      '불참자 요약본',
    ],
    goal: '회의 관련 업무 70% 자동화',
  },
  {
    month: '5월',
    emoji: '🔌',
    theme: '플러그인 탐험',
    color: '#9B59B6',
    gradient: 'linear-gradient(135deg, #9B59B6, #C39BD3)',
    weeks: [
      '플러그인 3개 설치',
      '부서별 플러그인 활용',
      '커스텀 플러그인 만들기',
      '팀원과 플러그인 공유',
    ],
    goal: '플러그인 3개 이상 일상 활용',
  },
  {
    month: '6월',
    emoji: '🔄',
    theme: '워크플로우 구축',
    color: '#E67E22',
    gradient: 'linear-gradient(135deg, #E67E22, #F5B041)',
    weeks: [
      '주간 보고 자동화',
      '이메일 배치 처리',
      '데이터 → 보고서 파이프라인',
      '복합 워크플로우 설계',
    ],
    goal: '핵심 워크플로우 3개 정착',
  },
  {
    month: '7월',
    emoji: '🌐',
    theme: 'MCP & 연동',
    color: '#1ABC9C',
    gradient: 'linear-gradient(135deg, #1ABC9C, #48C9B0)',
    weeks: [
      'Google Drive 연동',
      'Slack 연동',
      '캘린더 연동',
      '다중 연동 워크플로우',
    ],
    goal: '외부 도구 2개 이상 연동',
  },
  {
    month: '8월',
    emoji: '👥',
    theme: '팀 협업',
    color: '#3498DB',
    gradient: 'linear-gradient(135deg, #3498DB, #85C1E9)',
    weeks: [
      '팀 프로젝트 설정',
      '팀 세션 활용',
      '프롬프트 공유 문화',
      '베스트 프랙티스 정리',
    ],
    goal: '팀 전체 Cowork 활용',
  },
  {
    month: '9월',
    emoji: '📈',
    theme: '성과 측정',
    color: '#E84393',
    gradient: 'linear-gradient(135deg, #E84393, #F8A5C2)',
    weeks: [
      'KPI 설정',
      '성과 대시보드 구축',
      'ROI 분석',
      '경영진 보고',
    ],
    goal: 'AI 도입 효과 수치화',
  },
  {
    month: '10월',
    emoji: '🛡️',
    theme: '보안 & 거버넌스',
    color: '#2C3E50',
    gradient: 'linear-gradient(135deg, #2C3E50, #4A6274)',
    weeks: [
      '보안 체크리스트 점검',
      'AI 사용 정책 업데이트',
      '팀 보안 교육',
      '감사 & 컴플라이언스',
    ],
    goal: '보안 준비 100%',
  },
  {
    month: '11월',
    emoji: '🎓',
    theme: '고급 활용',
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #A29BFE)',
    weeks: [
      '복합 문서 생성',
      '다국어 콘텐츠 제작',
      '고급 프롬프트 테크닉',
      'AI 챔피언 교육',
    ],
    goal: '파워유저 수준 달성',
  },
  {
    month: '12월',
    emoji: '🏆',
    theme: '회고 & 계획',
    color: '#F39C12',
    gradient: 'linear-gradient(135deg, #F39C12, #F7DC6F)',
    weeks: [
      '연간 성과 정리',
      '베스트 활용 사례 공유회',
      '내년 AI 활용 계획',
      '팀 시상 & 축하',
    ],
    goal: '1년 성과 공유 & 내년 로드맵',
  },
]

const completedWeeks = ref(Array.from({ length: 12 }, () => [false, false, false, false]))

function toggleWeek(monthIdx, weekIdx) {
  completedWeeks.value[monthIdx][weekIdx] = !completedWeeks.value[monthIdx][weekIdx]
}

const monthProgress = computed(() =>
  completedWeeks.value.map(weeks => {
    const done = weeks.filter(Boolean).length
    return Math.round((done / 4) * 100)
  })
)

const totalProgress = computed(() => {
  const allDone = completedWeeks.value.flat().filter(Boolean).length
  return Math.round((allDone / 48) * 100)
})
</script>

<!-- 전체 진행률 -->
<div class="cal-overview">
  <div class="cal-overview-inner">
    <div class="cal-overview-label">연간 달성률</div>
    <div class="cal-progress-bar-wrap">
      <div class="cal-progress-bar" :style="{ width: totalProgress + '%' }"></div>
    </div>
    <div class="cal-progress-text">{{ totalProgress }}% 완료 <span class="cal-progress-detail">({{ completedWeeks.flat().filter(Boolean).length }} / 48 챌린지)</span></div>
  </div>
</div>

<!-- 캘린더 그리드 -->
<div class="cal-grid">
  <div
    v-for="(m, idx) in months"
    :key="idx"
    class="cal-card"
    :class="{ 'cal-card-current': idx === currentMonth, 'cal-card-expanded': expandedMonth === idx }"
    @click="toggleMonth(idx)"
  >
    <!-- 카드 헤더 -->
    <div class="cal-card-header" :style="{ background: m.gradient }">
      <div class="cal-card-month">{{ m.month }}</div>
      <div class="cal-card-emoji">{{ m.emoji }}</div>
      <div class="cal-card-theme">{{ m.theme }}</div>
      <div v-if="idx === currentMonth" class="cal-badge-now">NOW</div>
    </div>

    <!-- 진행률 바 -->
    <div class="cal-card-progress-wrap">
      <div class="cal-card-progress" :style="{ width: monthProgress[idx] + '%', background: m.color }"></div>
    </div>

    <!-- 주간 챌린지 -->
    <div class="cal-card-body">
      <div
        v-for="(week, wIdx) in m.weeks"
        :key="wIdx"
        class="cal-week-item"
        :class="{ 'cal-week-done': completedWeeks[idx][wIdx] }"
        @click.stop="toggleWeek(idx, wIdx)"
      >
        <span class="cal-week-check">{{ completedWeeks[idx][wIdx] ? '✅' : '⬜' }}</span>
        <span class="cal-week-label">W{{ wIdx + 1 }}</span>
        <span class="cal-week-text">{{ week }}</span>
      </div>
    </div>

    <!-- 목표 -->
    <div class="cal-card-goal" :style="{ borderColor: m.color }">
      <span class="cal-goal-icon">🎯</span>
      <span class="cal-goal-text">{{ m.goal }}</span>
    </div>
  </div>
</div>

<!-- 범례 -->
<div class="cal-legend">
  <div class="cal-legend-item">
    <span class="cal-legend-dot" style="background: #E87040;"></span>
    <span>Q1 — 기초 다지기 (1~3월)</span>
  </div>
  <div class="cal-legend-item">
    <span class="cal-legend-dot" style="background: #70AD47;"></span>
    <span>Q2 — 확장하기 (4~6월)</span>
  </div>
  <div class="cal-legend-item">
    <span class="cal-legend-dot" style="background: #3498DB;"></span>
    <span>Q3 — 통합하기 (7~9월)</span>
  </div>
  <div class="cal-legend-item">
    <span class="cal-legend-dot" style="background: #6C5CE7;"></span>
    <span>Q4 — 완성하기 (10~12월)</span>
  </div>
</div>

<div class="cal-tip">
  <strong>💡 사용법:</strong> 각 주간 챌린지를 클릭하여 완료 표시하세요. 카드를 클릭하면 상세 내용을 확인할 수 있습니다.
</div>

<style>
.cal-overview {
  margin: 1.5rem 0 2rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #FFF5F0, #FFF0E8);
  border-radius: 16px;
  border: 2px solid #E8704020;
}

.cal-overview-label {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.75rem;
}

.cal-progress-bar-wrap {
  width: 100%;
  height: 14px;
  background: #e0e0e0;
  border-radius: 7px;
  overflow: hidden;
}

.cal-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #E87040, #F4A261);
  border-radius: 7px;
  transition: width 0.5s ease;
  min-width: 0;
}

.cal-progress-text {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #E87040;
}

.cal-progress-detail {
  font-weight: 400;
  color: #888;
  font-size: 0.85rem;
}

.cal-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (max-width: 1100px) {
  .cal-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .cal-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .cal-grid {
    grid-template-columns: 1fr;
  }
}

.cal-card {
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 2px solid #eee;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.cal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: #ccc;
}

.cal-card-current {
  border-color: #E87040 !important;
  box-shadow: 0 4px 16px rgba(232, 112, 64, 0.25);
}

.cal-card-current:hover {
  box-shadow: 0 8px 28px rgba(232, 112, 64, 0.35);
}

.cal-card-header {
  padding: 1rem;
  color: #fff;
  position: relative;
  text-align: center;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cal-card-month {
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.9;
  letter-spacing: 1px;
}

.cal-card-emoji {
  font-size: 1.8rem;
  margin: 0.25rem 0;
  filter: drop-shadow(0 2px 3px rgba(0,0,0,0.15));
}

.cal-card-theme {
  font-size: 1rem;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0,0,0,0.15);
}

.cal-badge-now {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #fff;
  color: #E87040;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.cal-card-progress-wrap {
  height: 4px;
  background: #f0f0f0;
}

.cal-card-progress {
  height: 100%;
  transition: width 0.4s ease;
  border-radius: 0 2px 2px 0;
}

.cal-card-body {
  padding: 0.75rem 0.75rem 0.5rem;
}

.cal-week-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.4rem;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background 0.2s;
  user-select: none;
}

.cal-week-item:hover {
  background: #f5f5f5;
}

.cal-week-done .cal-week-text {
  text-decoration: line-through;
  color: #aaa;
}

.cal-week-check {
  font-size: 0.75rem;
  flex-shrink: 0;
}

.cal-week-label {
  font-weight: 700;
  color: #888;
  font-size: 0.7rem;
  flex-shrink: 0;
  min-width: 22px;
}

.cal-week-text {
  color: #444;
  line-height: 1.3;
}

.cal-card-goal {
  margin: 0 0.75rem 0.75rem;
  padding: 0.5rem 0.6rem;
  background: #FAFAFA;
  border-radius: 8px;
  border-left: 3px solid;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
}

.cal-goal-icon {
  font-size: 0.8rem;
  flex-shrink: 0;
}

.cal-goal-text {
  color: #555;
  font-weight: 600;
  line-height: 1.3;
}

.cal-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  margin: 2rem 0 1rem;
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.cal-legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.cal-legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.cal-tip {
  margin: 1rem 0 0;
  padding: 1rem 1.25rem;
  background: #FFF8F0;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #666;
  border: 1px solid #F4A26140;
}

/* Dark mode */
.dark .cal-overview {
  background: linear-gradient(135deg, #2a1f1a, #2d2218);
  border-color: #E8704040;
}

.dark .cal-overview-label {
  color: #e0e0e0;
}

.dark .cal-progress-bar-wrap {
  background: #3a3a3a;
}

.dark .cal-card {
  background: #1e1e1e;
  border-color: #333;
}

.dark .cal-card:hover {
  border-color: #555;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.dark .cal-week-item:hover {
  background: #2a2a2a;
}

.dark .cal-week-text {
  color: #ccc;
}

.dark .cal-week-done .cal-week-text {
  color: #666;
}

.dark .cal-card-goal {
  background: #252525;
}

.dark .cal-goal-text {
  color: #bbb;
}

.dark .cal-legend {
  background: #1e1e1e;
}

.dark .cal-legend-item {
  color: #bbb;
}

.dark .cal-tip {
  background: #2a2018;
  border-color: #F4A26130;
  color: #bbb;
}

.dark .cal-card-progress-wrap {
  background: #2a2a2a;
}
</style>
