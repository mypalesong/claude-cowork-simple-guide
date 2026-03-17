# AI 도입 설문 생성기

> AI 도입 전후 팀원들의 의견을 수집하세요. 목적에 맞는 설문을 자동으로 생성합니다.

<script setup>
import { ref, computed } from 'vue'

const surveyTypes = [
  { key: 'needs', icon: '📋', label: '도입 전 니즈 파악 설문', desc: 'AI 도입 전 팀원들의 현재 업무 현황과 기대를 파악합니다.' },
  { key: 'satisfaction', icon: '📊', label: '도입 후 만족도 설문', desc: 'AI 도구 도입 후 만족도와 효과를 측정합니다.' },
  { key: 'monthly', icon: '🔄', label: '월간 활용 현황 설문', desc: '매월 AI 활용 현황과 변화를 추적합니다.' },
  { key: 'training', icon: '🎯', label: '교육 효과 측정 설문', desc: 'AI 교육 프로그램의 효과를 측정합니다.' },
]

const selectedType = ref('needs')
const teamName = ref('')
const targetAudience = ref('all')
const isAnonymous = ref(true)
const questionCount = ref(15)
const copied = ref(false)
const copiedGoogle = ref(false)

const audienceOptions = [
  { value: 'all', label: '전 직원' },
  { value: 'team', label: '특정 팀' },
  { value: 'manager', label: '관리자' },
]

const questionBanks = {
  needs: [
    { q: '현재 반복 업무에 하루 얼마나 시간을 쓰나요?', type: '5점 척도', options: ['1시간 미만', '1~2시간', '2~3시간', '3~4시간', '4시간 이상'] },
    { q: 'AI 도구를 사용해본 경험이 있나요?', type: '객관식', options: ['전혀 없다', 'ChatGPT 등 가볍게 사용해봄', '업무에 활용 중', '적극적으로 활용 중'] },
    { q: 'AI 도입에 대한 기대감은?', type: '5점 척도', options: ['매우 부정적', '다소 부정적', '보통', '다소 긍정적', '매우 긍정적'] },
    { q: '가장 자동화하고 싶은 업무는?', type: '서술형', options: [] },
    { q: '현재 문서 작성에 하루 평균 얼마나 시간을 투자하나요?', type: '5점 척도', options: ['30분 미만', '30분~1시간', '1~2시간', '2~3시간', '3시간 이상'] },
    { q: 'AI 도구에 대해 가장 우려되는 점은?', type: '객관식', options: ['보안/정보 유출', '정확성/신뢰성', '일자리 위협', '학습 부담', '특별한 우려 없음'] },
    { q: '어떤 종류의 AI 도구가 가장 필요하다고 생각하나요?', type: '객관식', options: ['문서 작성 도우미', '데이터 분석', '코드 작성', '이미지/디자인', '회의록 정리', '기타'] },
    { q: 'AI 교육에 참여할 의향이 있나요?', type: '5점 척도', options: ['전혀 없다', '별로 없다', '보통', '어느 정도 있다', '매우 적극적'] },
    { q: '현재 업무에서 가장 비효율적이라고 느끼는 부분은?', type: '서술형', options: [] },
    { q: '데이터 정리 및 분석 업무의 빈도는?', type: '객관식', options: ['거의 없음', '주 1~2회', '주 3~4회', '매일', '하루 여러 번'] },
    { q: '이메일/메시지 작성에 어려움을 느끼는 정도는?', type: '5점 척도', options: ['전혀 없다', '거의 없다', '보통', '자주 느낀다', '매우 자주 느낀다'] },
    { q: '팀 내 정보 공유가 원활하다고 생각하나요?', type: '5점 척도', options: ['매우 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: 'AI 도입 시 가장 먼저 적용했으면 하는 업무 영역은?', type: '객관식', options: ['고객 응대', '내부 커뮤니케이션', '보고서 작성', '데이터 분석', '프로젝트 관리', '기타'] },
    { q: 'AI 도구 사용법을 배우는 데 얼마의 시간을 투자할 수 있나요?', type: '객관식', options: ['주 30분 이하', '주 1시간', '주 2시간', '주 3시간 이상'] },
    { q: '회의 및 미팅 정리에 어려움을 느끼나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '현재 업무 도구(소프트웨어)에 대한 만족도는?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: 'AI가 도입되면 업무 방식이 어떻게 변할 것으로 예상하나요?', type: '서술형', options: [] },
    { q: '동료들과 AI 도구에 대해 이야기한 적이 있나요?', type: '객관식', options: ['전혀 없다', '가끔 있다', '자주 있다', '매우 자주 있다'] },
    { q: '주간 보고서 작성에 소요되는 시간은?', type: '객관식', options: ['30분 미만', '30분~1시간', '1~2시간', '2시간 이상', '해당 없음'] },
    { q: 'AI 도입과 관련하여 추가로 하고 싶은 말씀이 있나요?', type: '서술형', options: [] },
  ],
  satisfaction: [
    { q: 'Claude Cowork 사용 빈도는?', type: '객관식', options: ['하루 여러 번', '하루 1~2회', '주 2~3회', '주 1회 이하', '거의 사용하지 않음'] },
    { q: '업무 효율이 개선되었다고 느끼나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '가장 유용했던 기능은?', type: '객관식', options: ['문서 작성', '데이터 분석', '이메일 작성', '아이디어 브레인스토밍', '코드 작성/검토', '번역', '기타'] },
    { q: '개선이 필요한 점은?', type: '서술형', options: [] },
    { q: 'AI 도구 사용 전후 업무 시간 변화는?', type: '5점 척도', options: ['오히려 증가', '변화 없음', '약간 감소', '상당히 감소', '크게 감소'] },
    { q: 'AI 답변의 정확도에 대한 만족도는?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: '동료에게 AI 도구를 추천하겠나요?', type: '5점 척도', options: ['전혀 아니다', '아마 아니다', '보통', '아마 그렇다', '매우 그렇다'] },
    { q: 'AI 도구 사용 시 가장 큰 장벽은?', type: '객관식', options: ['프롬프트 작성 어려움', '결과물 품질', '보안 우려', '사용법 미숙', '시간 부족', '특별한 장벽 없음'] },
    { q: '추가로 AI를 적용하고 싶은 업무 영역은?', type: '서술형', options: [] },
    { q: '전반적인 AI 도구 만족도는?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: 'AI 도구가 업무 품질 향상에 기여했나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: 'AI 도구 학습에 소요된 시간은 적절했나요?', type: '5점 척도', options: ['너무 많았다', '다소 많았다', '적절했다', '오히려 적었다', '매우 적었다'] },
    { q: '사용 중 보안 관련 우려를 느낀 적이 있나요?', type: '객관식', options: ['전혀 없다', '가끔 있다', '자주 있다', '항상 느낀다'] },
    { q: 'AI 도입 후 팀 내 협업에 변화가 있었나요?', type: '5점 척도', options: ['매우 악화', '다소 악화', '변화 없음', '다소 개선', '매우 개선'] },
    { q: '가장 불필요하다고 느낀 기능은?', type: '단답형', options: [] },
    { q: 'AI 도구 관련 추가 교육이 필요하다고 느끼나요?', type: '객관식', options: ['전혀 필요 없다', '약간 필요하다', '많이 필요하다', '매우 필요하다'] },
    { q: 'AI 도구 사용 전후 야근 시간에 변화가 있었나요?', type: '5점 척도', options: ['오히려 증가', '변화 없음', '약간 감소', '상당히 감소', '크게 감소'] },
    { q: '가장 자주 사용하는 프롬프트 패턴은?', type: '단답형', options: [] },
    { q: 'AI 도구 활용에 대해 팀원들과 노하우를 공유하나요?', type: '객관식', options: ['전혀 안 한다', '가끔 한다', '자주 한다', '정기적으로 한다'] },
    { q: 'AI 도구 관련 개선 제안 사항을 자유롭게 적어주세요.', type: '서술형', options: [] },
  ],
  monthly: [
    { q: '이번 달 AI 도구 사용 빈도는 지난달 대비 어떠했나요?', type: '5점 척도', options: ['크게 감소', '다소 감소', '비슷함', '다소 증가', '크게 증가'] },
    { q: '이번 달 가장 많이 활용한 업무 영역은?', type: '객관식', options: ['문서 작성', '데이터 분석', '커뮤니케이션', '기획/전략', '코드 작성', '기타'] },
    { q: '이번 달 AI 도구로 절약한 시간은 대략 얼마인가요?', type: '객관식', options: ['1시간 미만', '1~3시간', '3~5시간', '5~10시간', '10시간 이상'] },
    { q: '이번 달 새롭게 시도한 활용법이 있나요?', type: '서술형', options: [] },
    { q: '업무 효율 체감도는?', type: '5점 척도', options: ['매우 낮음', '낮음', '보통', '높음', '매우 높음'] },
    { q: '이번 달 AI 사용 중 겪은 어려움은?', type: '서술형', options: [] },
    { q: 'AI 도구 활용 자신감은?', type: '5점 척도', options: ['매우 낮음', '낮음', '보통', '높음', '매우 높음'] },
    { q: '팀원들의 AI 활용 수준이 전반적으로 향상되었나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '가장 성공적이었던 AI 활용 사례를 공유해주세요.', type: '서술형', options: [] },
    { q: '다음 달에 더 활용하고 싶은 기능은?', type: '객관식', options: ['문서 자동화', '데이터 시각화', '회의록 정리', '프롬프트 고급 기법', '팀 협업 기능', '기타'] },
    { q: 'AI 활용 관련 팀 내 공유 활동에 참여했나요?', type: '객관식', options: ['참여하지 않음', '1회', '2~3회', '4회 이상'] },
    { q: '이번 달 AI 도구 사용 중 보안 이슈가 있었나요?', type: '객관식', options: ['없었다', '경미한 이슈', '중요한 이슈 발생', '잘 모르겠다'] },
    { q: '업무 스트레스에 변화가 있었나요?', type: '5점 척도', options: ['크게 증가', '다소 증가', '변화 없음', '다소 감소', '크게 감소'] },
    { q: '이번 달 AI 관련 학습에 투자한 시간은?', type: '객관식', options: ['전혀 없음', '1시간 미만', '1~3시간', '3~5시간', '5시간 이상'] },
    { q: '현재 AI 활용 수준에 대한 자체 평가는?', type: '5점 척도', options: ['초보', '기초', '중급', '고급', '전문가'] },
    { q: '가장 개선이 시급한 부분은?', type: '단답형', options: [] },
    { q: 'AI 도구 업데이트/변경 사항을 잘 파악하고 있나요?', type: '객관식', options: ['전혀 모른다', '일부만 안다', '대부분 안다', '모두 파악하고 있다'] },
    { q: '다른 팀의 AI 활용 사례를 참고한 적이 있나요?', type: '객관식', options: ['없다', '가끔 있다', '자주 있다'] },
    { q: '이번 달 AI 도구에 대한 전반적 만족도는?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: '추가 의견이나 건의사항을 자유롭게 적어주세요.', type: '서술형', options: [] },
  ],
  training: [
    { q: '교육 내용의 난이도는 적절했나요?', type: '5점 척도', options: ['매우 쉬웠다', '다소 쉬웠다', '적절했다', '다소 어려웠다', '매우 어려웠다'] },
    { q: '교육에서 가장 유익했던 내용은?', type: '객관식', options: ['기본 사용법', '프롬프트 작성법', '업무 적용 사례', '보안 가이드라인', '고급 기능 활용', '기타'] },
    { q: '교육 후 AI 도구 활용 자신감이 향상되었나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '교육 시간은 적절했나요?', type: '5점 척도', options: ['매우 짧았다', '다소 짧았다', '적절했다', '다소 길었다', '매우 길었다'] },
    { q: '교육 자료의 품질은 어떠했나요?', type: '5점 척도', options: ['매우 낮음', '낮음', '보통', '높음', '매우 높음'] },
    { q: '강사/진행자의 전문성은?', type: '5점 척도', options: ['매우 부족', '부족', '보통', '우수', '매우 우수'] },
    { q: '교육 내용을 실제 업무에 바로 적용할 수 있나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '추가로 배우고 싶은 내용은?', type: '서술형', options: [] },
    { q: '교육 방식에 대한 선호도는?', type: '객관식', options: ['대면 강의', '온라인 실시간', '녹화 영상', '자기주도 학습', '1:1 코칭', '실습 워크숍'] },
    { q: '교육 전 AI 활용 수준은?', type: '객관식', options: ['전혀 사용 못함', '기초 수준', '중급 수준', '고급 수준'] },
    { q: '교육 후 AI 활용 수준은?', type: '객관식', options: ['여전히 어려움', '기초 수준', '중급 수준', '고급 수준'] },
    { q: '교육에서 다룬 실습 예제는 도움이 되었나요?', type: '5점 척도', options: ['전혀 도움 안 됨', '별로 도움 안 됨', '보통', '도움 됨', '매우 도움 됨'] },
    { q: '팀원들에게 이 교육을 추천하겠나요?', type: '5점 척도', options: ['전혀 아니다', '아마 아니다', '보통', '아마 그렇다', '매우 그렇다'] },
    { q: '교육 환경(장소, 설비 등)은 적절했나요?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: '후속 교육이 필요하다고 느끼나요?', type: '객관식', options: ['전혀 필요 없다', '1개월 후 필요', '3개월 후 필요', '6개월 후 필요', '즉시 필요'] },
    { q: '교육에서 부족했던 점은?', type: '서술형', options: [] },
    { q: '전반적인 교육 만족도는?', type: '5점 척도', options: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'] },
    { q: '교육 내용 중 가장 기억에 남는 것은?', type: '단답형', options: [] },
    { q: '교육을 통해 업무 방식에 변화가 생겼나요?', type: '5점 척도', options: ['전혀 그렇지 않다', '그렇지 않다', '보통', '그렇다', '매우 그렇다'] },
    { q: '교육에 대한 추가 의견을 자유롭게 적어주세요.', type: '서술형', options: [] },
  ],
}

const typeLabels = {
  needs: '도입 전 니즈 파악 설문',
  satisfaction: '도입 후 만족도 설문',
  monthly: '월간 활용 현황 설문',
  training: '교육 효과 측정 설문',
}

const typeDescriptions = {
  needs: 'AI 도입 전 팀원들의 현재 업무 환경과 AI에 대한 인식, 기대 사항을 파악하기 위한 설문입니다.',
  satisfaction: 'AI 도구 도입 후 실제 활용도와 만족도, 개선 사항을 파악하기 위한 설문입니다.',
  monthly: '매월 AI 활용 현황과 변화를 추적하여 지속적 개선에 활용하기 위한 설문입니다.',
  training: 'AI 관련 교육 프로그램의 효과와 만족도를 측정하기 위한 설문입니다.',
}

const selectedQuestions = computed(() => {
  const bank = questionBanks[selectedType.value] || []
  return bank.slice(0, questionCount.value)
})

const surveyTitle = computed(() => {
  const name = teamName.value ? `[${teamName.value}] ` : ''
  return `${name}${typeLabels[selectedType.value]}`
})

const audienceLabel = computed(() => {
  const opt = audienceOptions.find(o => o.value === targetAudience.value)
  return opt ? opt.label : ''
})

const typeTag = (type) => {
  const map = { '5점 척도': 'tag-scale', '객관식': 'tag-choice', '단답형': 'tag-short', '서술형': 'tag-essay' }
  return map[type] || 'tag-default'
}

function generateSurveyText() {
  let text = `${surveyTitle.value}\n`
  text += `${'='.repeat(40)}\n\n`
  text += `${typeDescriptions[selectedType.value]}\n\n`
  text += `대상: ${audienceLabel.value}\n`
  text += `익명 여부: ${isAnonymous.value ? '익명' : '실명'}\n`
  text += `총 문항 수: ${selectedQuestions.value.length}문항\n\n`
  text += `${'─'.repeat(40)}\n\n`

  selectedQuestions.value.forEach((item, i) => {
    text += `${i + 1}. [${item.type}] ${item.q}\n`
    if (item.options && item.options.length > 0) {
      if (item.type === '5점 척도') {
        item.options.forEach((opt, j) => {
          text += `   ${j + 1}) ${opt}\n`
        })
      } else if (item.type === '객관식') {
        item.options.forEach((opt, j) => {
          text += `   ${j + 1}) ${opt}\n`
        })
      }
    } else {
      text += `   [자유 기입]\n`
    }
    text += `\n`
  })

  text += `${'─'.repeat(40)}\n`
  text += `설문에 참여해 주셔서 감사합니다.\n`
  return text
}

function generateGoogleFormsText() {
  let text = `Google Forms 설문 구성\n`
  text += `${'='.repeat(40)}\n\n`
  text += `[양식 제목] ${surveyTitle.value}\n`
  text += `[양식 설명] ${typeDescriptions[selectedType.value]}\n\n`

  selectedQuestions.value.forEach((item, i) => {
    text += `--- 문항 ${i + 1} ---\n`
    text += `제목: ${item.q}\n`
    if (item.type === '5점 척도') {
      text += `유형: 직선 배율 (1~5)\n`
      text += `1 라벨: ${item.options[0]}\n`
      text += `5 라벨: ${item.options[4]}\n`
    } else if (item.type === '객관식') {
      text += `유형: 객관식 질문\n`
      text += `옵션:\n`
      item.options.forEach((opt) => {
        text += `  - ${opt}\n`
      })
    } else if (item.type === '단답형') {
      text += `유형: 단답형\n`
    } else {
      text += `유형: 장문형\n`
    }
    text += `필수: 예\n\n`
  })

  return text
}

async function copySurvey() {
  try {
    await navigator.clipboard.writeText(generateSurveyText())
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch (e) {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = generateSurveyText()
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

async function copyGoogleForms() {
  try {
    await navigator.clipboard.writeText(generateGoogleFormsText())
    copiedGoogle.value = true
    setTimeout(() => { copiedGoogle.value = false }, 2000)
  } catch (e) {
    const ta = document.createElement('textarea')
    ta.value = generateGoogleFormsText()
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copiedGoogle.value = true
    setTimeout(() => { copiedGoogle.value = false }, 2000)
  }
}
</script>

<style>
.survey-section {
  margin: 1.5rem 0;
}
.survey-section h3 {
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
}

/* Type selector */
.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}
.type-card {
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}
.type-card:hover {
  border-color: #E87040;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(232, 112, 64, 0.12);
}
.type-card.active {
  border-color: #E87040;
  background: linear-gradient(135deg, rgba(232, 112, 64, 0.08), rgba(232, 112, 64, 0.02));
  box-shadow: 0 0 0 3px rgba(232, 112, 64, 0.15);
}
.type-icon {
  font-size: 2rem;
  margin-bottom: 0.4rem;
  display: block;
}
.type-label {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.3rem;
}
.type-desc {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  line-height: 1.4;
}

/* Options grid */
.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.option-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.option-card label {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
.option-card input[type="text"] {
  width: 100%;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  box-sizing: border-box;
}
.option-card input[type="text"]:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}
.option-card select {
  width: 100%;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
}
.option-card select:focus {
  outline: none;
  border-color: #E87040;
  box-shadow: 0 0 0 2px rgba(232, 112, 64, 0.2);
}

/* Toggle */
.toggle-wrapper {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.toggle-switch {
  position: relative;
  width: 48px;
  height: 26px;
  flex-shrink: 0;
}
.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}
.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: var(--vp-c-divider);
  transition: 0.3s;
  border-radius: 26px;
}
.toggle-slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}
.toggle-switch input:checked + .toggle-slider {
  background-color: #E87040;
}
.toggle-switch input:checked + .toggle-slider:before {
  transform: translateX(22px);
}
.toggle-label-text {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

/* Count selector */
.count-group {
  display: flex;
  gap: 0.5rem;
}
.count-btn {
  padding: 0.4rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
}
.count-btn:hover {
  border-color: #E87040;
  color: #E87040;
}
.count-btn.active {
  background: #E87040;
  border-color: #E87040;
  color: #fff;
}

/* Preview section */
.preview-container {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.preview-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #E87040;
}
.preview-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}
.preview-desc {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  line-height: 1.5;
}
.preview-meta {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 0.6rem;
  flex-wrap: wrap;
}
.meta-badge {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg);
  padding: 0.2rem 0.7rem;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
}

/* Question cards */
.question-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.question-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  transition: box-shadow 0.2s;
}
.question-card:hover {
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.question-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}
.question-number {
  background: #E87040;
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.question-text {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  flex: 1;
}
.question-tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}
.tag-scale {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}
.tag-choice {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}
.tag-short {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}
.tag-essay {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
}
.question-options {
  margin-left: 2.2rem;
  margin-top: 0.4rem;
}
.option-item {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.option-radio {
  width: 14px;
  height: 14px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 50%;
  flex-shrink: 0;
}
.scale-options {
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top: 0.3rem;
}
.scale-item {
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
}
.free-input {
  width: 100%;
  height: 36px;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 8px;
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}
.free-input.tall {
  height: 60px;
}

/* Buttons */
.button-row {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}
.btn-copy {
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-copy:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.btn-primary {
  background: #E87040;
  color: #fff;
}
.btn-primary:hover {
  background: #d4632e;
}
.btn-primary.copied {
  background: #10b981;
}
.btn-secondary {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}
.btn-secondary:hover {
  border-color: #E87040;
  color: #E87040;
}
.btn-secondary.copied {
  border-color: #10b981;
  color: #10b981;
}

.section-divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  margin: 2rem 0;
}

.stats-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}
.stat-item {
  text-align: center;
}
.stat-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #E87040;
}
.stat-label {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 0.1rem;
}
</style>

## 1. 설문 유형 선택

<div class="survey-section">
<div class="type-grid">
  <div
    v-for="t in surveyTypes"
    :key="t.key"
    class="type-card"
    :class="{ active: selectedType === t.key }"
    @click="selectedType = t.key"
  >
    <span class="type-icon">{{ t.icon }}</span>
    <div class="type-label">{{ t.label }}</div>
    <div class="type-desc">{{ t.desc }}</div>
  </div>
</div>
</div>

<hr class="section-divider" />

## 2. 설문 옵션 설정

<div class="survey-section">
<div class="options-grid">
  <div class="option-card">
    <label>팀/부서명</label>
    <input type="text" v-model="teamName" placeholder="예: 마케팅팀, 개발본부" />
  </div>
  <div class="option-card">
    <label>설문 대상</label>
    <select v-model="targetAudience">
      <option v-for="opt in audienceOptions" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
  <div class="option-card">
    <label>익명 여부</label>
    <div class="toggle-wrapper">
      <label class="toggle-switch">
        <input type="checkbox" v-model="isAnonymous" />
        <span class="toggle-slider"></span>
      </label>
      <span class="toggle-label-text">{{ isAnonymous ? '익명 설문' : '실명 설문' }}</span>
    </div>
  </div>
  <div class="option-card">
    <label>문항 수</label>
    <div class="count-group">
      <button class="count-btn" :class="{ active: questionCount === 10 }" @click="questionCount = 10">10문항</button>
      <button class="count-btn" :class="{ active: questionCount === 15 }" @click="questionCount = 15">15문항</button>
      <button class="count-btn" :class="{ active: questionCount === 20 }" @click="questionCount = 20">20문항</button>
    </div>
  </div>
</div>
</div>

<hr class="section-divider" />

## 3. 설문 미리보기

<div class="survey-section">

<div class="stats-bar">
  <div class="stat-item">
    <div class="stat-value">{{ selectedQuestions.length }}</div>
    <div class="stat-label">총 문항</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">{{ selectedQuestions.filter(q => q.type === '5점 척도').length }}</div>
    <div class="stat-label">5점 척도</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">{{ selectedQuestions.filter(q => q.type === '객관식').length }}</div>
    <div class="stat-label">객관식</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">{{ selectedQuestions.filter(q => q.type === '단답형').length }}</div>
    <div class="stat-label">단답형</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">{{ selectedQuestions.filter(q => q.type === '서술형').length }}</div>
    <div class="stat-label">서술형</div>
  </div>
</div>

<div class="preview-container">
  <div class="preview-header">
    <div class="preview-title">{{ surveyTitle }}</div>
    <div class="preview-desc">{{ typeDescriptions[selectedType] }}</div>
    <div class="preview-meta">
      <span class="meta-badge">대상: {{ audienceLabel }}</span>
      <span class="meta-badge">{{ isAnonymous ? '익명 설문' : '실명 설문' }}</span>
      <span class="meta-badge">{{ selectedQuestions.length }}문항</span>
    </div>
  </div>

  <div class="question-list">
    <div v-for="(item, idx) in selectedQuestions" :key="idx" class="question-card">
      <div class="question-header">
        <span class="question-number">{{ idx + 1 }}</span>
        <span class="question-text">{{ item.q }}</span>
        <span class="question-tag" :class="typeTag(item.type)">{{ item.type }}</span>
      </div>
      <div class="question-options">
        <div v-if="item.type === '5점 척도'" class="scale-options">
          <span v-for="(opt, j) in item.options" :key="j" class="scale-item">{{ j + 1 }}. {{ opt }}</span>
        </div>
        <div v-else-if="item.type === '객관식'">
          <div v-for="(opt, j) in item.options" :key="j" class="option-item">
            <span class="option-radio"></span>
            {{ opt }}
          </div>
        </div>
        <div v-else-if="item.type === '단답형'" class="free-input">
          단답형 응답란
        </div>
        <div v-else class="free-input tall">
          서술형 응답란
        </div>
      </div>
    </div>
  </div>
</div>

</div>

<hr class="section-divider" />

## 4. 설문 내보내기

<div class="button-row">
  <button class="btn-copy btn-primary" :class="{ copied }" @click="copySurvey">
    {{ copied ? '복사 완료!' : '설문 복사하기' }}
  </button>
  <button class="btn-copy btn-secondary" :class="{ copied: copiedGoogle }" @click="copyGoogleForms">
    {{ copiedGoogle ? '복사 완료!' : 'Google Forms용 복사' }}
  </button>
</div>
