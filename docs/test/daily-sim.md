# 하루 일과 시뮬레이터

> Claude와 함께하는 하루 vs 혼자 하는 하루. 시간대별로 얼마나 달라지는지 체험해보세요!

<script setup>
import { ref, computed, watch, nextTick } from 'vue'

const roles = [
  { id: 'marketer', label: '마케터', emoji: '📢' },
  { id: 'sales', label: '영업', emoji: '🤝' },
  { id: 'hr', label: 'HR', emoji: '👥' },
  { id: 'finance', label: '재무', emoji: '💰' },
  { id: 'general', label: '일반사무', emoji: '🗂️' },
]

const roleData = {
  marketer: {
    tasks: [
      { time: '09:00', label: '이메일 확인 & 답장', before: 40, after: 15, prompt: '오늘 받은 이메일 10개를 분류하고, 각각에 대한 답장 초안을 작성해줘.\n\n[이메일 내용 붙여넣기]\n\n답장 톤: 정중하지만 간결하게\n우선순위: 긴급/일반/참고 로 분류해줘' },
      { time: '09:40', label: 'SNS 콘텐츠 기획', before: 60, after: 20, prompt: '우리 B2B SaaS 제품의 이번 주 SNS 콘텐츠 5개를 기획해줘.\n\n채널: LinkedIn, Instagram\n톤: 전문적이면서 친근한\n목표: 리드 생성\n제품 특징: [제품 설명]\n\n각 콘텐츠에 해시태그, 이미지 방향, 게시 시간 추천도 포함해줘.' },
      { time: '10:40', label: '주간 보고서 작성', before: 45, after: 15, prompt: '아래 데이터를 기반으로 마케팅팀 주간 보고서를 작성해줘.\n\n[이번 주 캠페인 성과 데이터]\n\n형식: 1) 핵심 성과 요약 2) 채널별 성과 3) 인사이트 4) 다음 주 계획\n상사가 30초 안에 핵심을 파악할 수 있도록 요약을 맨 위에 넣어줘.' },
      { time: '11:25', label: '경쟁사 리서치', before: 60, after: 20, prompt: '아래 경쟁사 3곳의 최근 마케팅 전략을 비교 분석해줘.\n\n경쟁사: [A사, B사, C사]\n분석 항목: 포지셔닝, 가격 전략, 콘텐츠 전략, SNS 활동\n\n표 형식으로 비교하고, 우리가 참고할 만한 인사이트 3가지를 뽑아줘.' },
      { time: '13:00', label: '회의 참석', before: 60, after: 60, prompt: '(회의는 직접 참석이 필요합니다)\n\n💡 팁: 회의 전 Claude에게 안건 정리를 요청하면 더 효율적으로 참여할 수 있습니다.' },
      { time: '14:00', label: '회의록 정리', before: 30, after: 5, prompt: '아래 회의 녹음 내용/메모를 회의록으로 정리해줘.\n\n[회의 내용 붙여넣기]\n\n형식:\n- 회의 제목, 일시, 참석자\n- 논의 안건 (번호별)\n- 각 안건별 결정 사항\n- Action Items (담당자, 마감일 포함)\n- 다음 회의 일정' },
      { time: '14:30', label: '캠페인 기획서', before: 90, after: 30, prompt: '신제품 런칭 캠페인 기획서를 작성해줘.\n\n제품: [제품명/설명]\n타겟: [타겟 고객]\n예산: [예산]\n기간: [캠페인 기간]\n\n포함 항목: 캠페인 컨셉, 채널 전략, 타임라인, KPI, 예산 배분, 예상 성과' },
      { time: '16:00', label: '데이터 분석', before: 45, after: 15, prompt: '아래 캠페인 성과 데이터를 분석해줘.\n\n[CSV 데이터 또는 표 붙여넣기]\n\n분석해줄 것:\n1. 전체 성과 요약\n2. 채널별 ROI 비교\n3. 시간대별 전환율 패턴\n4. 개선이 필요한 영역\n5. 다음 캠페인에 대한 제안' },
      { time: '16:45', label: '내일 일정 정리', before: 15, after: 5, prompt: '내일 일정을 정리하고 우선순위를 매겨줘.\n\n내일 할 일 목록:\n[목록 붙여넣기]\n\n시간별로 배치하고, 에너지가 높은 오전에 중요 업무를 배치해줘.\n예상 소요 시간도 표시해줘.' },
    ],
  },
  sales: {
    tasks: [
      { time: '09:00', label: '파이프라인 현황 점검', before: 30, after: 10, prompt: '아래 파이프라인 데이터를 분석해서 오늘 우선 처리할 딜 3개를 추천해줘.\n\n[CRM 데이터 붙여넣기]\n\n기준: 클로징 확률, 금액, 마감 임박 순으로 정리해줘.' },
      { time: '09:30', label: '고객 미팅 준비', before: 45, after: 15, prompt: '오늘 오후 미팅할 [고객사명]에 대한 브리핑 자료를 만들어줘.\n\n고객 정보: [기본 정보]\n이전 미팅 내용: [히스토리]\n\n포함: 회사 개요, 최근 이슈, 예상 질문, 우리 솔루션 연결점, 협상 전략' },
      { time: '10:15', label: '제안서 작성', before: 90, after: 30, prompt: '[고객사]를 위한 맞춤 제안서를 작성해줘.\n\n고객 니즈: [니즈 목록]\n우리 솔루션: [솔루션 설명]\n가격: [가격 구조]\n\n경쟁사 대비 차별점을 강조하고, ROI 계산도 포함해줘.' },
      { time: '11:45', label: '콜드 이메일 작성', before: 45, after: 10, prompt: '[타겟 업종] 잠재 고객에게 보낼 콜드 이메일 3가지 버전을 작성해줘.\n\n제품: [제품 설명]\n타겟 페인포인트: [문제점]\n\n각 버전의 톤: 1) 직접적 2) 스토리텔링 3) 데이터 기반\nA/B 테스트용 제목도 각 2개씩 만들어줘.' },
      { time: '13:00', label: '고객 미팅', before: 60, after: 60, prompt: '(미팅은 직접 참석이 필요합니다)\n\n💡 팁: 미팅 중 메모를 Claude에게 보내면 실시간으로 핵심 포인트를 정리해줍니다.' },
      { time: '14:00', label: '미팅 후 팔로업 이메일', before: 30, after: 8, prompt: '오늘 미팅 내용을 기반으로 팔로업 이메일을 작성해줘.\n\n[미팅 노트 붙여넣기]\n\n포함: 감사 인사, 논의 내용 요약, 합의 사항, 다음 단계, 첨부 자료 안내' },
      { time: '14:30', label: '경쟁 견적 분석', before: 45, after: 15, prompt: '경쟁사 견적서와 우리 견적을 비교 분석해줘.\n\n[견적 데이터]\n\n항목별 가격 비교표를 만들고, 우리가 유리한 점/불리한 점을 정리해줘.\n고객에게 설명할 수 있는 가격 정당화 포인트도 준비해줘.' },
      { time: '15:15', label: '주간 영업 리포트', before: 40, after: 12, prompt: '이번 주 영업 실적을 리포트로 정리해줘.\n\n[실적 데이터]\n\n포함: 목표 대비 달성률, 신규 리드, 전환율, 주요 딜 업데이트, 다음 주 전략' },
      { time: '16:00', label: 'CRM 업데이트 & 정리', before: 30, after: 10, prompt: '오늘 활동 내용을 CRM 업데이트용으로 정리해줘.\n\n[오늘 활동 노트]\n\n각 고객별로: 상태 변경, 다음 액션, 메모 형식으로 정리해줘.' },
    ],
  },
  hr: {
    tasks: [
      { time: '09:00', label: '채용 공고 작성', before: 60, after: 15, prompt: '[포지션명] 채용 공고를 작성해줘.\n\n부서: [부서]\n직급: [직급]\n필수 역량: [역량 목록]\n우대 사항: [목록]\n\n회사 문화와 복지도 매력적으로 포함해줘.\n잡포털, LinkedIn, 자사 채용페이지 버전을 각각 만들어줘.' },
      { time: '10:00', label: '이력서 스크리닝 기준 정리', before: 45, after: 15, prompt: '[포지션명] 지원자 스크리닝 체크리스트를 만들어줘.\n\n필수 조건: [조건들]\n우대 조건: [조건들]\n\n점수화 기준표(1-5점)와 면접 대상자 선정 기준도 포함해줘.' },
      { time: '10:45', label: '면접 질문 준비', before: 40, after: 10, prompt: '[포지션명] 면접 질문 세트를 만들어줘.\n\n1차 면접(실무): 기술 질문 10개\n2차 면접(임원): 문화 적합성 질문 5개\n\n각 질문에 의도와 좋은 답변/나쁜 답변 예시도 포함해줘.' },
      { time: '11:25', label: '인사 정책 문서 업데이트', before: 50, after: 15, prompt: '아래 인사 정책 변경 사항을 반영해서 문서를 업데이트해줘.\n\n변경 사항: [변경 내용]\n기존 문서: [문서 내용]\n\n변경된 부분을 하이라이트하고, 직원 공지용 요약본도 만들어줘.' },
      { time: '13:00', label: '면접 진행', before: 60, after: 60, prompt: '(면접은 직접 진행이 필요합니다)\n\n💡 팁: 면접 후 평가 기록을 Claude에게 보내면 구조화된 평가서로 정리해줍니다.' },
      { time: '14:00', label: '면접 평가서 작성', before: 35, after: 8, prompt: '아래 면접 메모를 기반으로 구조화된 평가서를 작성해줘.\n\n[면접 메모]\n\n형식: 역량별 점수(1-5), 강점, 개선 필요 영역, 종합 의견, 채용 추천 여부' },
      { time: '14:35', label: '교육 프로그램 기획', before: 50, after: 15, prompt: '[주제] 사내 교육 프로그램을 기획해줘.\n\n대상: [대상자]\n기간: [기간]\n목표: [교육 목표]\n\n커리큘럼, 세션별 내용, 필요 자료, 평가 방법을 포함해줘.' },
      { time: '15:25', label: '직원 만족도 설문 설계', before: 40, after: 12, prompt: '분기별 직원 만족도 설문을 설계해줘.\n\n카테고리: 업무 환경, 복지, 성장 기회, 팀 문화, 리더십\n\n각 카테고리별 3-4문항, 5점 척도 + 주관식 1문항\n결과 분석 가이드도 포함해줘.' },
      { time: '16:05', label: '입퇴사 서류 처리 안내', before: 25, after: 8, prompt: '[이름]님의 [입사/퇴사] 처리 체크리스트를 만들어줘.\n\n포함: 필요 서류, 시스템 등록/해제, 장비 지급/반납, 안내 메일 초안' },
    ],
  },
  finance: {
    tasks: [
      { time: '09:00', label: '전일 거래 내역 확인', before: 30, after: 10, prompt: '아래 거래 내역에서 이상 거래를 찾아줘.\n\n[거래 데이터 붙여넣기]\n\n기준: 평균 대비 2배 이상, 미승인 거래, 중복 의심 건\n각 이상 건에 대해 확인 필요 사항을 정리해줘.' },
      { time: '09:30', label: '경비 정산 처리', before: 45, after: 12, prompt: '아래 경비 청구 건들을 검토하고 처리 상태를 정리해줘.\n\n[경비 데이터]\n\n사내 규정에 맞는지 확인하고, 승인/반려/보완 필요 건으로 분류해줘.\n반려/보완 건에 대한 안내 메시지도 작성해줘.' },
      { time: '10:15', label: '월간 재무 보고서 작성', before: 60, after: 20, prompt: '아래 데이터로 [월]월 재무 보고서를 작성해줘.\n\n[재무 데이터]\n\n포함: 손익 요약, 부서별 예산 집행률, 전월/전년 대비 분석, 주요 변동 설명, 현금흐름 요약' },
      { time: '11:15', label: '예산 편성 분석', before: 50, after: 18, prompt: '다음 분기 예산을 편성하기 위한 분석을 해줘.\n\n[현재 예산 데이터]\n[부서별 요청]\n\n전년 동기 대비 분석, 부서별 우선순위 제안, 삭감 가능 항목 식별해줘.' },
      { time: '13:00', label: '경영진 미팅', before: 60, after: 60, prompt: '(미팅은 직접 참석이 필요합니다)\n\n💡 팁: 미팅 전 재무 데이터 요약을 Claude에게 요청하면 질문에 빠르게 대응할 수 있습니다.' },
      { time: '14:00', label: '세금/규정 검토', before: 45, after: 15, prompt: '아래 거래에 대한 세무 처리 방법을 정리해줘.\n\n[거래 내용]\n\n관련 세법 조항, 적용 세율, 신고 일정, 필요 서류를 정리해줘.\n(전문 세무사 확인이 필요한 사항은 별도 표시해줘)' },
      { time: '14:45', label: '비용 절감 보고서', before: 40, after: 12, prompt: '지난 분기 비용 데이터를 분석해서 절감 방안을 제안해줘.\n\n[비용 데이터]\n\n카테고리별 분석, 벤치마크 대비 현황, 구체적 절감 방안과 예상 절감액을 포함해줘.' },
      { time: '15:25', label: '계약서 검토 정리', before: 35, after: 10, prompt: '아래 계약서의 재무 조건을 검토해줘.\n\n[계약서 내용]\n\n지불 조건, 위약금 조항, 가격 조정 조항을 정리하고\n재무적 리스크가 있는 조항을 표시해줘.' },
      { time: '16:00', label: '자금 일보 작성', before: 25, after: 8, prompt: '오늘 자금 현황을 일보 형식으로 정리해줘.\n\n[입출금 데이터]\n\n포함: 전일 잔액, 당일 입금, 당일 출금, 현재 잔액, 이번 주 예상 자금 흐름' },
    ],
  },
  general: {
    tasks: [
      { time: '09:00', label: '이메일 확인 & 분류', before: 35, after: 10, prompt: '오늘 받은 이메일들을 중요도별로 분류해줘.\n\n[이메일 목록/내용]\n\n분류: 🔴 즉시 처리 / 🟡 오늘 중 / 🟢 참고\n즉시 처리 건에 대한 답장 초안도 작성해줘.' },
      { time: '09:35', label: '일정 조율 & 회의실 예약', before: 30, after: 8, prompt: '아래 참석자들의 가능 시간을 기반으로 최적 회의 시간을 찾아줘.\n\n[참석자별 가능 시간]\n회의 소요 시간: [시간]\n\n후보 시간 3개를 추천하고, 회의 초대 메일 초안도 작성해줘.' },
      { time: '10:05', label: '보고서 작성', before: 50, after: 15, prompt: '아래 내용으로 [보고서 종류]를 작성해줘.\n\n[핵심 데이터/내용]\n\n형식: [부서 표준 형식]\n분량: A4 2-3매\n상사가 5분 안에 핵심을 파악할 수 있도록 구성해줘.' },
      { time: '10:55', label: '자료 조사 & 정리', before: 45, after: 15, prompt: '[주제]에 대해 조사해서 정리해줘.\n\n필요 정보: [구체적 항목]\n용도: [용도]\n\n표 형식으로 비교 정리하고, 출처도 표시해줘.' },
      { time: '13:00', label: '부서 회의', before: 60, after: 60, prompt: '(회의는 직접 참석이 필요합니다)\n\n💡 팁: 회의 안건을 미리 Claude에게 공유하면 관련 자료를 빠르게 준비할 수 있습니다.' },
      { time: '14:00', label: '회의록 & 액션 아이템 정리', before: 30, after: 5, prompt: '아래 회의 내용을 정리해줘.\n\n[회의 메모/녹음 내용]\n\n형식: 안건별 논의 내용, 결정 사항, 액션 아이템(담당자/마감일)\n참석자에게 공유할 이메일 형식으로도 만들어줘.' },
      { time: '14:30', label: '문서 번역 & 교정', before: 40, after: 10, prompt: '아래 문서를 [목표 언어]로 번역해줘.\n\n[문서 내용]\n\n업무 문서에 맞는 공식적인 톤으로 번역하고\n원문과 번역문을 나란히 정리해줘.' },
      { time: '15:10', label: '엑셀 데이터 정리', before: 35, after: 10, prompt: '아래 데이터를 정리해줘.\n\n[데이터 붙여넣기]\n\n요청:\n1. 중복 데이터 식별\n2. 카테고리별 분류\n3. 피벗 테이블 형태로 요약\n4. 엑셀에 바로 쓸 수 있는 수식도 알려줘' },
      { time: '15:45', label: '내일 업무 계획', before: 15, after: 5, prompt: '오늘 완료한 업무와 내일 할 일을 정리해줘.\n\n완료: [오늘 한 일]\n미완료: [못 끝낸 일]\n새로운 할 일: [추가된 일]\n\n우선순위와 예상 소요 시간을 포함해서 내일 시간표를 만들어줘.' },
    ],
  },
}

const selectedRole = ref('marketer')
const expandedTask = ref(null)
const animating = ref(false)

const currentTasks = computed(() => roleData[selectedRole.value]?.tasks || [])

const totalBefore = computed(() => currentTasks.value.reduce((s, t) => s + t.before, 0))
const totalAfter = computed(() => currentTasks.value.reduce((s, t) => s + t.after, 0))
const savedMinutes = computed(() => totalBefore.value - totalAfter.value)

const maxTaskMinutes = computed(() => Math.max(...currentTasks.value.map(t => t.before)))

function formatTime(mins) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  if (h === 0) return `${m}분`
  if (m === 0) return `${h}시간`
  return `${h}시간 ${m}분`
}

function barWidth(mins) {
  return Math.max(4, (mins / maxTaskMinutes.value) * 100)
}

function savedPercent(before, after) {
  if (before === after) return 0
  return Math.round((1 - after / before) * 100)
}

function switchRole(roleId) {
  if (roleId === selectedRole.value) return
  animating.value = true
  expandedTask.value = null
  setTimeout(() => {
    selectedRole.value = roleId
    nextTick(() => {
      setTimeout(() => { animating.value = false }, 50)
    })
  }, 300)
}

function toggleTask(idx) {
  expandedTask.value = expandedTask.value === idx ? null : idx
}

const suggestions = computed(() => {
  const mins = savedMinutes.value
  const items = []
  if (mins >= 240) items.push('전략적 사고와 기획에 집중')
  if (mins >= 180) items.push('새로운 스킬 학습 (온라인 강의 1개)')
  if (mins >= 120) items.push('팀원 1:1 미팅 2-3건')
  if (mins >= 60) items.push('네트워킹 커피챗')
  items.push('운동 또는 산책으로 리프레시')
  items.push('일찍 퇴근하기')
  return items
})
</script>

<style>
.role-selector {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}
.role-btn {
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: var(--vp-c-text-1);
}
.role-btn:hover {
  border-color: #E87040;
  background: rgba(232, 112, 64, 0.05);
}
.role-btn.active {
  border-color: #E87040;
  background: rgba(232, 112, 64, 0.12);
  color: #E87040;
  font-weight: 700;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}
.summary-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
}
.summary-card .label {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 0.4rem;
  font-weight: 500;
}
.summary-card .value {
  font-size: 1.6rem;
  font-weight: 800;
}
.summary-card.before .value { color: #999; }
.summary-card.after .value { color: #E87040; }
.summary-card.saved .value { color: #10b981; }
.summary-card.saved {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.06);
}
.summary-card .sub {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 0.3rem;
}

.timeline-container {
  margin: 2rem 0;
  transition: opacity 0.3s ease;
}
.timeline-container.animating {
  opacity: 0;
  transform: translateY(10px);
}

.timeline-header {
  display: grid;
  grid-template-columns: 70px 1fr 1fr;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  font-weight: 700;
  font-size: 0.85rem;
}
.timeline-header .h-before {
  text-align: center;
  color: #999;
}
.timeline-header .h-after {
  text-align: center;
  color: #E87040;
}

.task-row {
  margin-bottom: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
}
.task-row:hover {
  border-color: var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.task-main {
  display: grid;
  grid-template-columns: 70px 1fr 1fr;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 0.5rem;
}

.task-time {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
  text-align: center;
  font-family: 'Courier New', monospace;
}

.bar-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bar-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.bar {
  height: 28px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 30px;
}
.bar.before-bar {
  background: linear-gradient(135deg, #9ca3af, #b0b7c3);
}
.bar.after-bar {
  background: linear-gradient(135deg, #E87040, #f59e0b);
}
.bar.same-bar {
  background: linear-gradient(135deg, #6b7280, #9ca3af);
}

.bar-time {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  min-width: 35px;
}

.saved-badge {
  font-size: 0.7rem;
  font-weight: 700;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  white-space: nowrap;
}

.task-label {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-top: 0.15rem;
  padding: 0 0.5rem;
  grid-column: 1 / -1;
  text-align: center;
}

.prompt-panel {
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 1rem 1.2rem;
  animation: slideDown 0.3s ease;
}
.prompt-panel .prompt-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: #E87040;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.prompt-panel pre {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--vp-c-text-1);
  margin: 0;
}

@keyframes slideDown {
  from { opacity: 0; max-height: 0; padding: 0 1.2rem; }
  to { opacity: 1; max-height: 500px; padding: 1rem 1.2rem; }
}

.suggestions-box {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(232, 112, 64, 0.06));
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin: 1.5rem 0;
}
.suggestions-box .sg-title {
  font-weight: 700;
  font-size: 1rem;
  color: #10b981;
  margin-bottom: 0.8rem;
}
.suggestions-box ul {
  margin: 0;
  padding-left: 1.2rem;
}
.suggestions-box li {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: var(--vp-c-text-1);
}

.click-hint {
  text-align: center;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin: 0.5rem 0 1rem;
  font-style: italic;
}

@media (max-width: 640px) {
  .task-main {
    grid-template-columns: 50px 1fr 1fr;
    gap: 0.3rem;
  }
  .task-time { font-size: 0.7rem; }
  .bar { height: 22px; font-size: 0.65rem; }
  .summary-cards { grid-template-columns: 1fr 1fr; }
  .role-btn { padding: 0.5rem 0.8rem; font-size: 0.85rem; }
}
</style>

## 직무를 선택하세요

<div class="role-selector">
  <button
    v-for="role in roles"
    :key="role.id"
    :class="['role-btn', { active: selectedRole === role.id }]"
    @click="switchRole(role.id)"
  >
    {{ role.emoji }} {{ role.label }}
  </button>
</div>

## 하루 비교 요약

<div class="summary-cards">
  <div class="summary-card before">
    <div class="label">Before (Claude 없이)</div>
    <div class="value">{{ formatTime(totalBefore) }}</div>
    <div class="sub">순수 업무 시간</div>
  </div>
  <div class="summary-card after">
    <div class="label">After (Claude와 함께)</div>
    <div class="value">{{ formatTime(totalAfter) }}</div>
    <div class="sub">동일 업무 완료</div>
  </div>
  <div class="summary-card saved">
    <div class="label">절약된 시간</div>
    <div class="value">{{ formatTime(savedMinutes) }}</div>
    <div class="sub">{{ Math.round((1 - totalAfter / totalBefore) * 100) }}% 단축</div>
  </div>
</div>

## 시간대별 타임라인

<p class="click-hint">각 업무를 클릭하면 실제 프롬프트 예시를 볼 수 있습니다</p>

<div :class="['timeline-container', { animating }]">
  <div class="timeline-header">
    <div></div>
    <div class="h-before">Before (Claude 없이)</div>
    <div class="h-after">After (Claude와 함께)</div>
  </div>

  <div v-for="(task, idx) in currentTasks" :key="selectedRole + '-' + idx" class="task-row" @click="toggleTask(idx)">
    <div class="task-main">
      <div class="task-time">{{ task.time }}</div>
      <div class="bar-cell">
        <div class="bar-wrapper">
          <div class="bar before-bar" :style="{ width: barWidth(task.before) + '%' }">
            {{ task.label }}
          </div>
          <span class="bar-time">{{ task.before }}분</span>
        </div>
      </div>
      <div class="bar-cell">
        <div class="bar-wrapper">
          <div
            :class="['bar', task.before === task.after ? 'same-bar' : 'after-bar']"
            :style="{ width: barWidth(task.after) + '%' }"
          >
            {{ task.label }}
          </div>
          <span class="bar-time">{{ task.after }}분</span>
          <span v-if="task.before !== task.after" class="saved-badge">-{{ savedPercent(task.before, task.after) }}%</span>
        </div>
      </div>
    </div>
    <div v-if="expandedTask === idx" class="prompt-panel">
      <div class="prompt-title">💬 Claude에게 이렇게 요청하세요</div>
      <pre>{{ task.prompt }}</pre>
    </div>
  </div>
</div>

## 절약된 시간으로 할 수 있는 것

<div class="suggestions-box">
  <div class="sg-title">{{ formatTime(savedMinutes) }}이 생기면?</div>
  <ul>
    <li v-for="(s, i) in suggestions" :key="i">{{ s }}</li>
  </ul>
</div>

::: tip 핵심 포인트
회의처럼 사람이 직접 해야 하는 일은 시간이 동일하지만, **문서 작성, 분석, 정리** 등 대부분의 데스크 업무에서 50~80% 시간을 절약할 수 있습니다. 절약된 시간은 더 **창의적이고 전략적인 일**에 투자하세요!
:::
