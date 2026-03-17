import{o as r,c as s,j as e,a as o,F as _,B as k,n as C,t as l,N as S,e as x,P as A,p as g,h as m}from"./chunks/framework.DS_HIvHc.js";const w={class:"role-selector"},I=["onClick"],$={class:"summary-cards"},O={class:"summary-card before"},V={class:"value"},D={class:"summary-card after"},L={class:"value"},z={class:"summary-card saved"},F={class:"value"},q={class:"sub"},E=["onClick"],H={class:"task-main"},J={class:"task-time"},K={class:"bar-cell"},U={class:"bar-wrapper"},W={class:"bar-time"},G={class:"bar-cell"},Q={class:"bar-wrapper"},X={class:"bar-time"},Y={key:0,class:"saved-badge"},Z={key:0,class:"prompt-panel"},ee={class:"suggestions-box"},ne={class:"sg-title"},se=JSON.parse('{"title":"하루 일과 시뮬레이터","description":"","frontmatter":{},"headers":[],"relativePath":"test/daily-sim.md","filePath":"test/daily-sim.md","lastUpdated":1773710852000}'),te={name:"test/daily-sim.md"},oe=Object.assign(te,{setup(ae){const B=[{id:"marketer",label:"마케터",emoji:"📢"},{id:"sales",label:"영업",emoji:"🤝"},{id:"hr",label:"HR",emoji:"👥"},{id:"finance",label:"재무",emoji:"💰"},{id:"general",label:"일반사무",emoji:"🗂️"}],M={marketer:{tasks:[{time:"09:00",label:"이메일 확인 & 답장",before:40,after:15,prompt:`오늘 받은 이메일 10개를 분류하고, 각각에 대한 답장 초안을 작성해줘.

[이메일 내용 붙여넣기]

답장 톤: 정중하지만 간결하게
우선순위: 긴급/일반/참고 로 분류해줘`},{time:"09:40",label:"SNS 콘텐츠 기획",before:60,after:20,prompt:`우리 B2B SaaS 제품의 이번 주 SNS 콘텐츠 5개를 기획해줘.

채널: LinkedIn, Instagram
톤: 전문적이면서 친근한
목표: 리드 생성
제품 특징: [제품 설명]

각 콘텐츠에 해시태그, 이미지 방향, 게시 시간 추천도 포함해줘.`},{time:"10:40",label:"주간 보고서 작성",before:45,after:15,prompt:`아래 데이터를 기반으로 마케팅팀 주간 보고서를 작성해줘.

[이번 주 캠페인 성과 데이터]

형식: 1) 핵심 성과 요약 2) 채널별 성과 3) 인사이트 4) 다음 주 계획
상사가 30초 안에 핵심을 파악할 수 있도록 요약을 맨 위에 넣어줘.`},{time:"11:25",label:"경쟁사 리서치",before:60,after:20,prompt:`아래 경쟁사 3곳의 최근 마케팅 전략을 비교 분석해줘.

경쟁사: [A사, B사, C사]
분석 항목: 포지셔닝, 가격 전략, 콘텐츠 전략, SNS 활동

표 형식으로 비교하고, 우리가 참고할 만한 인사이트 3가지를 뽑아줘.`},{time:"13:00",label:"회의 참석",before:60,after:60,prompt:`(회의는 직접 참석이 필요합니다)

💡 팁: 회의 전 Claude에게 안건 정리를 요청하면 더 효율적으로 참여할 수 있습니다.`},{time:"14:00",label:"회의록 정리",before:30,after:5,prompt:`아래 회의 녹음 내용/메모를 회의록으로 정리해줘.

[회의 내용 붙여넣기]

형식:
- 회의 제목, 일시, 참석자
- 논의 안건 (번호별)
- 각 안건별 결정 사항
- Action Items (담당자, 마감일 포함)
- 다음 회의 일정`},{time:"14:30",label:"캠페인 기획서",before:90,after:30,prompt:`신제품 런칭 캠페인 기획서를 작성해줘.

제품: [제품명/설명]
타겟: [타겟 고객]
예산: [예산]
기간: [캠페인 기간]

포함 항목: 캠페인 컨셉, 채널 전략, 타임라인, KPI, 예산 배분, 예상 성과`},{time:"16:00",label:"데이터 분석",before:45,after:15,prompt:`아래 캠페인 성과 데이터를 분석해줘.

[CSV 데이터 또는 표 붙여넣기]

분석해줄 것:
1. 전체 성과 요약
2. 채널별 ROI 비교
3. 시간대별 전환율 패턴
4. 개선이 필요한 영역
5. 다음 캠페인에 대한 제안`},{time:"16:45",label:"내일 일정 정리",before:15,after:5,prompt:`내일 일정을 정리하고 우선순위를 매겨줘.

내일 할 일 목록:
[목록 붙여넣기]

시간별로 배치하고, 에너지가 높은 오전에 중요 업무를 배치해줘.
예상 소요 시간도 표시해줘.`}]},sales:{tasks:[{time:"09:00",label:"파이프라인 현황 점검",before:30,after:10,prompt:`아래 파이프라인 데이터를 분석해서 오늘 우선 처리할 딜 3개를 추천해줘.

[CRM 데이터 붙여넣기]

기준: 클로징 확률, 금액, 마감 임박 순으로 정리해줘.`},{time:"09:30",label:"고객 미팅 준비",before:45,after:15,prompt:`오늘 오후 미팅할 [고객사명]에 대한 브리핑 자료를 만들어줘.

고객 정보: [기본 정보]
이전 미팅 내용: [히스토리]

포함: 회사 개요, 최근 이슈, 예상 질문, 우리 솔루션 연결점, 협상 전략`},{time:"10:15",label:"제안서 작성",before:90,after:30,prompt:`[고객사]를 위한 맞춤 제안서를 작성해줘.

고객 니즈: [니즈 목록]
우리 솔루션: [솔루션 설명]
가격: [가격 구조]

경쟁사 대비 차별점을 강조하고, ROI 계산도 포함해줘.`},{time:"11:45",label:"콜드 이메일 작성",before:45,after:10,prompt:`[타겟 업종] 잠재 고객에게 보낼 콜드 이메일 3가지 버전을 작성해줘.

제품: [제품 설명]
타겟 페인포인트: [문제점]

각 버전의 톤: 1) 직접적 2) 스토리텔링 3) 데이터 기반
A/B 테스트용 제목도 각 2개씩 만들어줘.`},{time:"13:00",label:"고객 미팅",before:60,after:60,prompt:`(미팅은 직접 참석이 필요합니다)

💡 팁: 미팅 중 메모를 Claude에게 보내면 실시간으로 핵심 포인트를 정리해줍니다.`},{time:"14:00",label:"미팅 후 팔로업 이메일",before:30,after:8,prompt:`오늘 미팅 내용을 기반으로 팔로업 이메일을 작성해줘.

[미팅 노트 붙여넣기]

포함: 감사 인사, 논의 내용 요약, 합의 사항, 다음 단계, 첨부 자료 안내`},{time:"14:30",label:"경쟁 견적 분석",before:45,after:15,prompt:`경쟁사 견적서와 우리 견적을 비교 분석해줘.

[견적 데이터]

항목별 가격 비교표를 만들고, 우리가 유리한 점/불리한 점을 정리해줘.
고객에게 설명할 수 있는 가격 정당화 포인트도 준비해줘.`},{time:"15:15",label:"주간 영업 리포트",before:40,after:12,prompt:`이번 주 영업 실적을 리포트로 정리해줘.

[실적 데이터]

포함: 목표 대비 달성률, 신규 리드, 전환율, 주요 딜 업데이트, 다음 주 전략`},{time:"16:00",label:"CRM 업데이트 & 정리",before:30,after:10,prompt:`오늘 활동 내용을 CRM 업데이트용으로 정리해줘.

[오늘 활동 노트]

각 고객별로: 상태 변경, 다음 액션, 메모 형식으로 정리해줘.`}]},hr:{tasks:[{time:"09:00",label:"채용 공고 작성",before:60,after:15,prompt:`[포지션명] 채용 공고를 작성해줘.

부서: [부서]
직급: [직급]
필수 역량: [역량 목록]
우대 사항: [목록]

회사 문화와 복지도 매력적으로 포함해줘.
잡포털, LinkedIn, 자사 채용페이지 버전을 각각 만들어줘.`},{time:"10:00",label:"이력서 스크리닝 기준 정리",before:45,after:15,prompt:`[포지션명] 지원자 스크리닝 체크리스트를 만들어줘.

필수 조건: [조건들]
우대 조건: [조건들]

점수화 기준표(1-5점)와 면접 대상자 선정 기준도 포함해줘.`},{time:"10:45",label:"면접 질문 준비",before:40,after:10,prompt:`[포지션명] 면접 질문 세트를 만들어줘.

1차 면접(실무): 기술 질문 10개
2차 면접(임원): 문화 적합성 질문 5개

각 질문에 의도와 좋은 답변/나쁜 답변 예시도 포함해줘.`},{time:"11:25",label:"인사 정책 문서 업데이트",before:50,after:15,prompt:`아래 인사 정책 변경 사항을 반영해서 문서를 업데이트해줘.

변경 사항: [변경 내용]
기존 문서: [문서 내용]

변경된 부분을 하이라이트하고, 직원 공지용 요약본도 만들어줘.`},{time:"13:00",label:"면접 진행",before:60,after:60,prompt:`(면접은 직접 진행이 필요합니다)

💡 팁: 면접 후 평가 기록을 Claude에게 보내면 구조화된 평가서로 정리해줍니다.`},{time:"14:00",label:"면접 평가서 작성",before:35,after:8,prompt:`아래 면접 메모를 기반으로 구조화된 평가서를 작성해줘.

[면접 메모]

형식: 역량별 점수(1-5), 강점, 개선 필요 영역, 종합 의견, 채용 추천 여부`},{time:"14:35",label:"교육 프로그램 기획",before:50,after:15,prompt:`[주제] 사내 교육 프로그램을 기획해줘.

대상: [대상자]
기간: [기간]
목표: [교육 목표]

커리큘럼, 세션별 내용, 필요 자료, 평가 방법을 포함해줘.`},{time:"15:25",label:"직원 만족도 설문 설계",before:40,after:12,prompt:`분기별 직원 만족도 설문을 설계해줘.

카테고리: 업무 환경, 복지, 성장 기회, 팀 문화, 리더십

각 카테고리별 3-4문항, 5점 척도 + 주관식 1문항
결과 분석 가이드도 포함해줘.`},{time:"16:05",label:"입퇴사 서류 처리 안내",before:25,after:8,prompt:`[이름]님의 [입사/퇴사] 처리 체크리스트를 만들어줘.

포함: 필요 서류, 시스템 등록/해제, 장비 지급/반납, 안내 메일 초안`}]},finance:{tasks:[{time:"09:00",label:"전일 거래 내역 확인",before:30,after:10,prompt:`아래 거래 내역에서 이상 거래를 찾아줘.

[거래 데이터 붙여넣기]

기준: 평균 대비 2배 이상, 미승인 거래, 중복 의심 건
각 이상 건에 대해 확인 필요 사항을 정리해줘.`},{time:"09:30",label:"경비 정산 처리",before:45,after:12,prompt:`아래 경비 청구 건들을 검토하고 처리 상태를 정리해줘.

[경비 데이터]

사내 규정에 맞는지 확인하고, 승인/반려/보완 필요 건으로 분류해줘.
반려/보완 건에 대한 안내 메시지도 작성해줘.`},{time:"10:15",label:"월간 재무 보고서 작성",before:60,after:20,prompt:`아래 데이터로 [월]월 재무 보고서를 작성해줘.

[재무 데이터]

포함: 손익 요약, 부서별 예산 집행률, 전월/전년 대비 분석, 주요 변동 설명, 현금흐름 요약`},{time:"11:15",label:"예산 편성 분석",before:50,after:18,prompt:`다음 분기 예산을 편성하기 위한 분석을 해줘.

[현재 예산 데이터]
[부서별 요청]

전년 동기 대비 분석, 부서별 우선순위 제안, 삭감 가능 항목 식별해줘.`},{time:"13:00",label:"경영진 미팅",before:60,after:60,prompt:`(미팅은 직접 참석이 필요합니다)

💡 팁: 미팅 전 재무 데이터 요약을 Claude에게 요청하면 질문에 빠르게 대응할 수 있습니다.`},{time:"14:00",label:"세금/규정 검토",before:45,after:15,prompt:`아래 거래에 대한 세무 처리 방법을 정리해줘.

[거래 내용]

관련 세법 조항, 적용 세율, 신고 일정, 필요 서류를 정리해줘.
(전문 세무사 확인이 필요한 사항은 별도 표시해줘)`},{time:"14:45",label:"비용 절감 보고서",before:40,after:12,prompt:`지난 분기 비용 데이터를 분석해서 절감 방안을 제안해줘.

[비용 데이터]

카테고리별 분석, 벤치마크 대비 현황, 구체적 절감 방안과 예상 절감액을 포함해줘.`},{time:"15:25",label:"계약서 검토 정리",before:35,after:10,prompt:`아래 계약서의 재무 조건을 검토해줘.

[계약서 내용]

지불 조건, 위약금 조항, 가격 조정 조항을 정리하고
재무적 리스크가 있는 조항을 표시해줘.`},{time:"16:00",label:"자금 일보 작성",before:25,after:8,prompt:`오늘 자금 현황을 일보 형식으로 정리해줘.

[입출금 데이터]

포함: 전일 잔액, 당일 입금, 당일 출금, 현재 잔액, 이번 주 예상 자금 흐름`}]},general:{tasks:[{time:"09:00",label:"이메일 확인 & 분류",before:35,after:10,prompt:`오늘 받은 이메일들을 중요도별로 분류해줘.

[이메일 목록/내용]

분류: 🔴 즉시 처리 / 🟡 오늘 중 / 🟢 참고
즉시 처리 건에 대한 답장 초안도 작성해줘.`},{time:"09:35",label:"일정 조율 & 회의실 예약",before:30,after:8,prompt:`아래 참석자들의 가능 시간을 기반으로 최적 회의 시간을 찾아줘.

[참석자별 가능 시간]
회의 소요 시간: [시간]

후보 시간 3개를 추천하고, 회의 초대 메일 초안도 작성해줘.`},{time:"10:05",label:"보고서 작성",before:50,after:15,prompt:`아래 내용으로 [보고서 종류]를 작성해줘.

[핵심 데이터/내용]

형식: [부서 표준 형식]
분량: A4 2-3매
상사가 5분 안에 핵심을 파악할 수 있도록 구성해줘.`},{time:"10:55",label:"자료 조사 & 정리",before:45,after:15,prompt:`[주제]에 대해 조사해서 정리해줘.

필요 정보: [구체적 항목]
용도: [용도]

표 형식으로 비교 정리하고, 출처도 표시해줘.`},{time:"13:00",label:"부서 회의",before:60,after:60,prompt:`(회의는 직접 참석이 필요합니다)

💡 팁: 회의 안건을 미리 Claude에게 공유하면 관련 자료를 빠르게 준비할 수 있습니다.`},{time:"14:00",label:"회의록 & 액션 아이템 정리",before:30,after:5,prompt:`아래 회의 내용을 정리해줘.

[회의 메모/녹음 내용]

형식: 안건별 논의 내용, 결정 사항, 액션 아이템(담당자/마감일)
참석자에게 공유할 이메일 형식으로도 만들어줘.`},{time:"14:30",label:"문서 번역 & 교정",before:40,after:10,prompt:`아래 문서를 [목표 언어]로 번역해줘.

[문서 내용]

업무 문서에 맞는 공식적인 톤으로 번역하고
원문과 번역문을 나란히 정리해줘.`},{time:"15:10",label:"엑셀 데이터 정리",before:35,after:10,prompt:`아래 데이터를 정리해줘.

[데이터 붙여넣기]

요청:
1. 중복 데이터 식별
2. 카테고리별 분류
3. 피벗 테이블 형태로 요약
4. 엑셀에 바로 쓸 수 있는 수식도 알려줘`},{time:"15:45",label:"내일 업무 계획",before:15,after:5,prompt:`오늘 완료한 업무와 내일 할 일을 정리해줘.

완료: [오늘 한 일]
미완료: [못 끝낸 일]
새로운 할 일: [추가된 일]

우선순위와 예상 소요 시간을 포함해서 내일 시간표를 만들어줘.`}]}},f=g("marketer"),b=g(null),u=g(!1),p=m(()=>{var t;return((t=M[f.value])==null?void 0:t.tasks)||[]}),c=m(()=>p.value.reduce((t,n)=>t+n.before,0)),v=m(()=>p.value.reduce((t,n)=>t+n.after,0)),h=m(()=>c.value-v.value),P=m(()=>Math.max(...p.value.map(t=>t.before)));function d(t){const n=Math.floor(t/60),a=t%60;return n===0?`${a}분`:a===0?`${n}시간`:`${n}시간 ${a}분`}function y(t){return Math.max(4,t/P.value*100)}function T(t,n){return t===n?0:Math.round((1-n/t)*100)}function j(t){t!==f.value&&(u.value=!0,b.value=null,setTimeout(()=>{f.value=t,A(()=>{setTimeout(()=>{u.value=!1},50)})},300))}function N(t){b.value=b.value===t?null:t}const R=m(()=>{const t=h.value,n=[];return t>=240&&n.push("전략적 사고와 기획에 집중"),t>=180&&n.push("새로운 스킬 학습 (온라인 강의 1개)"),t>=120&&n.push("팀원 1:1 미팅 2-3건"),t>=60&&n.push("네트워킹 커피챗"),n.push("운동 또는 산책으로 리프레시"),n.push("일찍 퇴근하기"),n});return(t,n)=>(r(),s("div",null,[n[7]||(n[7]=e("h1",{id:"하루-일과-시뮬레이터",tabindex:"-1"},[o("하루 일과 시뮬레이터 "),e("a",{class:"header-anchor",href:"#하루-일과-시뮬레이터","aria-label":'Permalink to "하루 일과 시뮬레이터"'},"​")],-1)),n[8]||(n[8]=e("blockquote",null,[e("p",null,"Claude와 함께하는 하루 vs 혼자 하는 하루. 시간대별로 얼마나 달라지는지 체험해보세요!")],-1)),n[9]||(n[9]=e("h2",{id:"직무를-선택하세요",tabindex:"-1"},[o("직무를 선택하세요 "),e("a",{class:"header-anchor",href:"#직무를-선택하세요","aria-label":'Permalink to "직무를 선택하세요"'},"​")],-1)),e("div",w,[(r(),s(_,null,k(B,a=>e("button",{key:a.id,class:C(["role-btn",{active:f.value===a.id}]),onClick:i=>j(a.id)},l(a.emoji)+" "+l(a.label),11,I)),64))]),n[10]||(n[10]=e("h2",{id:"하루-비교-요약",tabindex:"-1"},[o("하루 비교 요약 "),e("a",{class:"header-anchor",href:"#하루-비교-요약","aria-label":'Permalink to "하루 비교 요약"'},"​")],-1)),e("div",$,[e("div",O,[n[0]||(n[0]=e("div",{class:"label"},"Before (Claude 없이)",-1)),e("div",V,l(d(c.value)),1),n[1]||(n[1]=e("div",{class:"sub"},"순수 업무 시간",-1))]),e("div",D,[n[2]||(n[2]=e("div",{class:"label"},"After (Claude와 함께)",-1)),e("div",L,l(d(v.value)),1),n[3]||(n[3]=e("div",{class:"sub"},"동일 업무 완료",-1))]),e("div",z,[n[4]||(n[4]=e("div",{class:"label"},"절약된 시간",-1)),e("div",F,l(d(h.value)),1),e("div",q,l(Math.round((1-v.value/c.value)*100))+"% 단축",1)])]),n[11]||(n[11]=e("h2",{id:"시간대별-타임라인",tabindex:"-1"},[o("시간대별 타임라인 "),e("a",{class:"header-anchor",href:"#시간대별-타임라인","aria-label":'Permalink to "시간대별 타임라인"'},"​")],-1)),n[12]||(n[12]=e("p",{class:"click-hint"},"각 업무를 클릭하면 실제 프롬프트 예시를 볼 수 있습니다",-1)),e("div",{class:C(["timeline-container",{animating:u.value}])},[n[6]||(n[6]=e("div",{class:"timeline-header"},[e("div"),e("div",{class:"h-before"},"Before (Claude 없이)"),e("div",{class:"h-after"},"After (Claude와 함께)")],-1)),(r(!0),s(_,null,k(p.value,(a,i)=>(r(),s("div",{key:f.value+"-"+i,class:"task-row",onClick:le=>N(i)},[e("div",H,[e("div",J,l(a.time),1),e("div",K,[e("div",U,[e("div",{class:"bar before-bar",style:S({width:y(a.before)+"%"})},l(a.label),5),e("span",W,l(a.before)+"분",1)])]),e("div",G,[e("div",Q,[e("div",{class:C(["bar",a.before===a.after?"same-bar":"after-bar"]),style:S({width:y(a.after)+"%"})},l(a.label),7),e("span",X,l(a.after)+"분",1),a.before!==a.after?(r(),s("span",Y,"-"+l(T(a.before,a.after))+"%",1)):x("",!0)])])]),b.value===i?(r(),s("div",Z,[n[5]||(n[5]=e("div",{class:"prompt-title"},"💬 Claude에게 이렇게 요청하세요",-1)),e("pre",null,l(a.prompt),1)])):x("",!0)],8,E))),128))],2),n[13]||(n[13]=e("h2",{id:"절약된-시간으로-할-수-있는-것",tabindex:"-1"},[o("절약된 시간으로 할 수 있는 것 "),e("a",{class:"header-anchor",href:"#절약된-시간으로-할-수-있는-것","aria-label":'Permalink to "절약된 시간으로 할 수 있는 것"'},"​")],-1)),e("div",ee,[e("div",ne,l(d(h.value))+"이 생기면?",1),e("ul",null,[(r(!0),s(_,null,k(R.value,(a,i)=>(r(),s("li",{key:i},l(a),1))),128))])]),n[14]||(n[14]=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"핵심 포인트"),e("p",null,[o("회의처럼 사람이 직접 해야 하는 일은 시간이 동일하지만, "),e("strong",null,"문서 작성, 분석, 정리"),o(" 등 대부분의 데스크 업무에서 50~80% 시간을 절약할 수 있습니다. 절약된 시간은 더 "),e("strong",null,"창의적이고 전략적인 일"),o("에 투자하세요!")])],-1))]))}});export{se as __pageData,oe as default};
