import{o as l,c as s,j as n,a as p,F as v,B as h,t as a,e as c,p as f,h as g,P as T}from"./chunks/framework.DS_HIvHc.js";const I={class:"dt-container"},O={key:0,class:"dt-breadcrumb"},j=["onClick"],R={key:1,class:"dt-crumb-current"},V={key:2,class:"dt-crumb-choice"},B={key:3,class:"dt-crumb-sep"},S={key:1,id:"dt-current",class:"dt-question-card"},N={class:"dt-question-badge"},D={class:"dt-question-step"},E={class:"dt-question-text"},Q={class:"dt-options"},$=["onClick"],F={class:"dt-option-icon"},M={class:"dt-option-label"},W={key:2,id:"dt-current",class:"dt-result-card"},A={class:"dt-result-title"},J={class:"dt-result-section"},K=["href"],U={class:"dt-result-section"},z={class:"dt-prompt-box"},G={class:"dt-prompt-text"},H={key:0,class:"dt-result-section"},X={class:"dt-workflow"},Y={key:1,class:"dt-result-section"},Z={class:"dt-tip"},ee={class:"dt-result-section"},ne={class:"dt-template-links"},te=["href"],oe=JSON.parse('{"title":"어떤 기능을 쓸까?","description":"","frontmatter":{},"headers":[],"relativePath":"resources/decision-tree.md","filePath":"resources/decision-tree.md","lastUpdated":1773714559000}'),le={name:"resources/decision-tree.md"},re=Object.assign(le,{setup(se){const o=f("q1"),d=f([]),w={q1:{question:"지금 하려는 일은?",options:[{icon:"📝",label:"문서/글 작성",next:"q2a"},{icon:"📊",label:"데이터 분석/정리",next:"q2b"},{icon:"🤝",label:"회의/협업",next:"q2c"},{icon:"🔄",label:"반복 업무 자동화",next:"q2d"},{icon:"🔍",label:"자료 조사/리서치",next:"q2e"},{icon:"🌐",label:"번역/다국어",next:"q2f"}]},q2a:{question:"어떤 종류의 문서?",options:[{icon:"✉️",label:"이메일",next:"r_email"},{icon:"📑",label:"보고서/기획서",next:"r_report"},{icon:"📢",label:"공지/안내문",next:"r_notice"},{icon:"✏️",label:"퇴고/다듬기",next:"r_polish"}]},q2b:{question:"데이터 형태는?",options:[{icon:"📗",label:"엑셀/CSV",next:"r_excel"},{icon:"📄",label:"비정형 메모/텍스트",next:"r_memo"},{icon:"📋",label:"설문/피드백",next:"r_survey"}]},q2c:{question:"회의 단계는?",options:[{icon:"📌",label:"회의 전 (안건 준비)",next:"r_pre_meeting"},{icon:"⚡",label:"회의 중 (실시간 노트)",next:"r_during_meeting"},{icon:"📝",label:"회의 후 (정리/공유)",next:"r_post_meeting"}]},q2d:{question:"얼마나 자주?",options:[{icon:"☀️",label:"매일",next:"r_daily"},{icon:"📅",label:"매주",next:"r_weekly"},{icon:"🗓️",label:"매달",next:"r_monthly"}]},q2e:{question:"리서치 목적은?",options:[{icon:"🏢",label:"경쟁사/시장 분석",next:"r_competitor"},{icon:"📚",label:"내부 자료 요약",next:"r_summary"},{icon:"📈",label:"트렌드 파악",next:"r_trend"}]},q2f:{question:"번역 방향?",options:[{icon:"🇰🇷",label:"한→영",next:"r_ko_en"},{icon:"🇺🇸",label:"영→한",next:"r_en_ko"},{icon:"🌍",label:"다국어 동시",next:"r_multi"}]}},x={r_email:{title:"이메일 작성 도우미",page:"문서 작성 > 이메일 섹션",link:"/guide/writing#이메일",prompt:`다음 조건으로 업무 이메일을 작성해줘:
- 받는 사람: [상대방]
- 목적: [요청/안내/회신 등]
- 핵심 내용: [전달 사항]
- 톤: 정중하고 간결한 비즈니스 격식체
자연스러운 인사말과 마무리 포함해줘.`,templates:[{name:"이메일 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"이메일 템플릿 모음",link:"/resources/templates#이메일"},{name:"프롬프트 치트시트",link:"/resources/cheatsheet"}]},r_report:{title:"보고서/기획서 작성",page:"문서 작성 > 보고서 섹션",link:"/guide/writing#보고서",prompt:`다음 조건으로 보고서를 작성해줘:
- 주제: [보고서 주제]
- 보고 대상: [임원/팀장 등]
- 형식: A4 3장 이내, 표와 핵심 지표 포함
- 구성: 요약 → 현황 분석 → 핵심 인사이트 → 액션 플랜`,templates:[{name:"보고서 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"보고서 템플릿",link:"/resources/templates#보고서"},{name:"기획서 템플릿",link:"/resources/templates#기획서"}]},r_notice:{title:"공지/안내문 작성",page:"부서별 활용 > 총무",link:"/guide/by-dept#총무",prompt:`사내 공지사항을 작성해줘:
- 제목: [공지 제목]
- 대상: 전 직원
- 핵심 내용: [변경/안내 사항]
- 필요 조치: [기한까지 해야 할 일]
명확하고 간결하게, 핵심 정보가 바로 눈에 들어오도록 작성해줘.`,templates:[{name:"공지사항 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"부서별 활용 사례",link:"/guide/by-dept"},{name:"공지 템플릿",link:"/resources/templates#공지"}]},r_polish:{title:"문서 퇴고/다듬기",page:"문서 작성 > 퇴고",link:"/guide/writing#퇴고",prompt:`아래 글을 검토하고 다듬어줘:

[여기에 글 붙여넣기]

다음 기준으로 수정해줘:
1. 맞춤법/문법 오류 수정
2. 불필요한 반복 제거
3. 문장을 더 간결하고 명확하게
4. 원문과 수정본을 비교 표로 보여줘`,templates:[{name:"질문 잘하는 법",link:"/tips/prompting"},{name:"자주 하는 실수",link:"/tips/mistakes"},{name:"프롬프트 치트시트",link:"/resources/cheatsheet"}],tip:"원문을 그대로 붙여넣으면 Claude가 맥락을 파악해 더 정확하게 수정해줍니다."},r_excel:{title:"엑셀/CSV 데이터 분석",page:"데이터 분석",link:"/guide/data",prompt:`다음 엑셀 데이터를 분석해줘:

[데이터 붙여넣기 또는 설명]

분석해줄 내용:
1. 주요 트렌드와 패턴
2. 이상치나 주의할 점
3. 핵심 인사이트 3가지
4. 추천 시각화 방법`,templates:[{name:"데이터 분석 가이드",link:"/guide/data"},{name:"데이터 분석 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"워크플로우 레시피",link:"/guide/workflows"}],workflow:"엑셀 복사 → Claude에 붙여넣기 → 분석 요청 → 결과를 엑셀에 반영"},r_memo:{title:"비정형 메모/텍스트 정리",page:"데이터 분석 > 명단 정리",link:"/guide/data#명단-정리",prompt:`아래 메모/텍스트를 깔끔하게 정리해줘:

[메모 내용 붙여넣기]

- 카테고리별로 분류
- 중복 제거
- 표 형식으로 정리
- 빠진 정보가 있으면 알려줘`,templates:[{name:"데이터 정리 가이드",link:"/guide/data"},{name:"프롬프트 치트시트",link:"/resources/cheatsheet"},{name:"일상 업무 자동화",link:"/guide/daily"}]},r_survey:{title:"설문/피드백 분석",page:"데이터 분석 > 설문",link:"/guide/data#설문",prompt:`다음 설문/피드백 결과를 분석해줘:

[설문 데이터 붙여넣기]

분석 요청:
1. 주요 응답 경향 요약
2. 긍정/부정 비율 분석
3. 자주 언급된 키워드 TOP 10
4. 개선 제안 3가지`,templates:[{name:"데이터 분석 가이드",link:"/guide/data"},{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"ROI 계산기",link:"/resources/roi-calculator"}],workflow:"설문 결과 취합 → Claude에 전달 → 분석 결과 확인 → 보고서 작성"},r_pre_meeting:{title:"회의 안건 준비",page:"회의 활용 > 안건 정리",link:"/guide/meeting#안건-정리",prompt:`다음 주제로 회의 안건을 정리해줘:

- 회의 목적: [목적]
- 참석자: [참석자 목록]
- 주요 논의 사항: [주제들]

각 안건별로 배경, 논의 포인트, 예상 소요 시간을 정리해줘.
회의 시간은 총 1시간이야.`,templates:[{name:"회의 활용 가이드",link:"/guide/meeting"},{name:"회의록 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"프롬프트 템플릿",link:"/resources/templates"}]},r_during_meeting:{title:"실시간 회의 노트",page:"회의 활용 > 실시간 노트",link:"/guide/meeting#실시간-노트",prompt:`지금부터 회의 내용을 실시간으로 정리할게.
내가 메모를 입력하면 다음 형식으로 정리해줘:

- 발언자별 핵심 발언
- 결정 사항 (✅ 표시)
- 미결 사항 (❓ 표시)
- 액션 아이템 (👉 담당자 + 기한)`,templates:[{name:"회의 활용 가이드",link:"/guide/meeting"},{name:"Projects & Memory",link:"/guide/projects"},{name:"프롬프트 치트시트",link:"/resources/cheatsheet"}]},r_post_meeting:{title:"회의록 정리 및 공유",page:"회의 활용 > 회의록",link:"/guide/meeting#회의록",prompt:`다음 회의 내용을 회의록으로 정리해줘:

[회의 메모/녹음 내용 붙여넣기]

형식:
1. 회의 개요 (일시, 참석자, 목적)
2. 주요 논의 사항
3. 결정 사항
4. 액션 아이템 (담당자, 기한)
5. 다음 회의 안내`,templates:[{name:"회의록 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"회의 활용 가이드",link:"/guide/meeting"}],workflow:"회의 메모 취합 → Claude로 회의록 작성 → 참석자 검토 → 공유"},r_daily:{title:"매일 반복 업무 자동화",page:"일상 업무 > 매일",link:"/guide/daily#매일",prompt:`매일 아침 해야 하는 업무를 도와줘:

1. 어제 업무 요약 정리
2. 오늘 할 일 우선순위 정리
3. 이메일 회신 초안 3건 작성
4. 일일 보고 초안 작성

[어제 업무 내용과 오늘 일정 붙여넣기]`,templates:[{name:"일상 업무 자동화",link:"/guide/daily"},{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"Projects & Memory",link:"/guide/projects"}],workflow:"출근 → Claude에 어제 메모 전달 → 오늘 할 일 정리 → 실행"},r_weekly:{title:"매주 반복 업무 자동화",page:"일상 업무 > 매주",link:"/guide/daily#매주",prompt:`이번 주 업무를 정리하고 다음 주 계획을 세워줘:

이번 주 완료 업무:
[목록 작성]

진행 중 업무:
[목록 작성]

다음 주 주요 일정:
[일정 작성]

주간 보고서 형식으로 정리해줘.`,templates:[{name:"일상 업무 자동화",link:"/guide/daily"},{name:"보고서 템플릿",link:"/resources/templates#보고서"},{name:"워크플로우 레시피",link:"/guide/workflows"}],workflow:"금요일 오후 → 주간 업무 정리 → Claude로 주간보고 작성 → 제출"},r_monthly:{title:"매달 반복 업무 자동화",page:"일상 업무 > 매달",link:"/guide/daily#매달",prompt:`이번 달 월간 보고서를 작성해줘:

- 주요 성과: [성과 목록]
- 핵심 지표: [KPI 데이터]
- 이슈/리스크: [발생한 문제]
- 다음 달 계획: [계획]

경영진 보고용으로 간결하게 정리해줘.`,templates:[{name:"일상 업무 자동화",link:"/guide/daily"},{name:"보고서 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"ROI 계산기",link:"/resources/roi-calculator"}]},r_competitor:{title:"경쟁사/시장 분석",page:"워크플로우 > 경쟁사 분석",link:"/guide/workflows#경쟁사-분석",prompt:`다음 기업/서비스에 대한 경쟁 분석을 해줘:

- 우리 회사/서비스: [이름]
- 비교 대상: [경쟁사 1, 2, 3]
- 비교 항목: 가격, 기능, 타겟 고객, 강점/약점

비교표와 SWOT 분석을 포함해줘.
시장 트렌드와 차별화 전략도 제안해줘.`,templates:[{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"부서별 활용 사례",link:"/guide/by-dept"},{name:"데이터 분석 가이드",link:"/guide/data"}]},r_summary:{title:"내부 자료 요약",page:"데이터 분석 > 요약",link:"/guide/data#요약",prompt:`다음 자료를 요약해줘:

[자료 내용 붙여넣기]

요약 조건:
- 핵심 포인트 5개 이내로 정리
- 전문 용어는 쉽게 풀어서 설명
- 3줄 요약 + 상세 요약 두 가지 버전으로
- 후속 조치가 필요한 항목 별도 표시`,templates:[{name:"데이터 분석 가이드",link:"/guide/data"},{name:"프롬프트 치트시트",link:"/resources/cheatsheet"},{name:"질문 잘하는 법",link:"/tips/prompting"}]},r_trend:{title:"트렌드 파악",page:"부서별 > R&D",link:"/guide/by-dept#r-d",prompt:`다음 분야의 최신 트렌드를 정리해줘:

- 분야: [산업/분야명]
- 기간: 최근 6개월~1년
- 관심 키워드: [키워드 1, 2, 3]

주요 트렌드 5가지를 선정하고,
각각에 대해 배경, 현황, 전망, 우리 회사 시사점을 정리해줘.`,templates:[{name:"부서별 활용 사례",link:"/guide/by-dept"},{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"데이터 분석 가이드",link:"/guide/data"}]},r_ko_en:{title:"한국어 → 영어 번역",page:"첫 대화 > 번역",link:"/guide/first-chat#번역",prompt:`다음 한국어 텍스트를 영어로 번역해줘:

[한국어 텍스트 붙여넣기]

조건:
- 비즈니스 문서에 적합한 격식체
- 원문의 뉘앙스를 최대한 살려줘
- 어색한 직역 대신 자연스러운 영어 표현 사용
- 번역 시 주의한 부분이 있으면 설명해줘`,templates:[{name:"번역 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"프롬프트 템플릿",link:"/resources/templates"},{name:"첫 대화해보기",link:"/guide/first-chat"}]},r_en_ko:{title:"영어 → 한국어 번역",page:"첫 대화 > 번역",link:"/guide/first-chat#번역",prompt:`다음 영어 텍스트를 한국어로 번역해줘:

[영어 텍스트 붙여넣기]

조건:
- 자연스러운 한국어 비즈니스 문체
- 전문 용어는 원어 병기 (예: ROI(투자수익률))
- 한국 비즈니스 맥락에 맞게 조정
- 의역이 필요한 부분은 원문과 함께 설명해줘`,templates:[{name:"번역 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"프롬프트 템플릿",link:"/resources/templates"},{name:"첫 대화해보기",link:"/guide/first-chat"}]},r_multi:{title:"다국어 동시 번역",page:"워크플로우 > 다국어 콘텐츠",link:"/guide/workflows#다국어-콘텐츠",prompt:`다음 텍스트를 여러 언어로 동시에 번역해줘:

[원본 텍스트 붙여넣기]

번역할 언어: 영어, 일본어, 중국어(간체)

각 언어별로 표 형식으로 정리해줘.
문화적 맥락에 맞게 현지화도 반영해줘.`,templates:[{name:"워크플로우 레시피",link:"/guide/workflows"},{name:"번역 프롬프트 빌더",link:"/resources/prompt-builder"},{name:"부서별 활용 사례",link:"/guide/by-dept"}]}},y={q1:"시작",q2a:"문서/글 작성",q2b:"데이터 분석/정리",q2c:"회의/협업",q2d:"반복 업무 자동화",q2e:"자료 조사/리서치",q2f:"번역/다국어"},b=g(()=>w[o.value]||null),r=g(()=>x[o.value]||null),m=g(()=>o.value.startsWith("r_")),_=g(()=>{const i=[];for(const e of d.value)i.push({key:e.step,label:y[e.step]||e.step,choiceLabel:e.choiceLabel});return!m.value&&o.value&&i.push({key:o.value,label:y[o.value]||o.value,choiceLabel:null}),m.value&&r.value&&i.push({key:o.value,label:r.value.title,choiceLabel:null}),i}),u=f(!1);function q(i){d.value.push({step:o.value,choiceLabel:i.label}),o.value=i.next,u.value=!1,T(()=>{const e=document.getElementById("dt-current");e&&e.scrollIntoView({behavior:"smooth",block:"nearest"})})}function C(i){const e=d.value.findIndex(t=>t.step===i);e!==-1&&(d.value=d.value.slice(0,e),o.value=i,u.value=!1)}function L(){o.value="q1",d.value=[],u.value=!1}async function P(i){try{await navigator.clipboard.writeText(i),u.value=!0,setTimeout(()=>{u.value=!1},2200)}catch{const e=document.createElement("textarea");e.value=i,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),u.value=!0,setTimeout(()=>{u.value=!1},2200)}}return(i,e)=>(l(),s("div",null,[e[12]||(e[12]=n("h1",{id:"어떤-기능을-쓸까",tabindex:"-1"},[p("어떤 기능을 쓸까? "),n("a",{class:"header-anchor",href:"#어떤-기능을-쓸까","aria-label":'Permalink to "어떤 기능을 쓸까?"'},"​")],-1)),e[13]||(e[13]=n("blockquote",null,[n("p",null,"지금 하려는 일에 가장 적합한 Cowork 기능을 찾아드립니다. 질문을 따라가보세요!")],-1)),n("div",I,[d.value.length>0?(l(),s("div",O,[(l(!0),s(v,null,h(_.value,(t,k)=>(l(),s("span",{key:t.key+k,class:"dt-crumb-item"},[k<_.value.length-1?(l(),s("button",{key:0,class:"dt-crumb-link",onClick:ie=>C(t.key)},a(t.label),9,j)):(l(),s("span",R,a(t.label),1)),t.choiceLabel?(l(),s("span",V,a(t.choiceLabel),1)):c("",!0),k<_.value.length-1?(l(),s("span",B,"›")):c("",!0)]))),128))])):c("",!0),b.value&&!m.value?(l(),s("div",S,[n("div",N,[n("span",D,a(o.value.value==="q1"?"Q1":"Q2"),1),e[1]||(e[1]=p(" 질문 ",-1))]),n("h3",E,a(b.value.question),1),n("div",Q,[(l(!0),s(v,null,h(b.value.options,t=>(l(),s("button",{key:t.label,class:"dt-option-btn",onClick:k=>q(t)},[n("span",F,a(t.icon),1),n("span",M,a(t.label),1),e[2]||(e[2]=n("span",{class:"dt-option-arrow"},"→",-1))],8,$))),128))])])):c("",!0),m.value&&r.value?(l(),s("div",W,[e[11]||(e[11]=n("div",{class:"dt-result-badge"},"추천 결과",-1)),n("h3",A,a(r.value.title),1),n("div",J,[e[4]||(e[4]=n("div",{class:"dt-result-section-label"},"📖 추천 페이지",-1)),n("a",{href:r.value.link,class:"dt-page-link"},[p(a(r.value.page)+" ",1),e[3]||(e[3]=n("span",{class:"dt-link-arrow"},"→",-1))],8,K)]),n("div",U,[e[5]||(e[5]=n("div",{class:"dt-result-section-label"},"💬 바로 쓸 수 있는 프롬프트",-1)),n("div",z,[n("pre",G,a(r.value.prompt),1),n("button",{class:"dt-copy-btn",onClick:e[0]||(e[0]=t=>P(r.value.prompt))},a(u.value?"✅ 복사 완료!":"📋 복사하기"),1)])]),r.value.workflow?(l(),s("div",H,[e[6]||(e[6]=n("div",{class:"dt-result-section-label"},"🔄 추천 워크플로우",-1)),n("div",X,a(r.value.workflow),1)])):c("",!0),r.value.tip?(l(),s("div",Y,[n("div",Z,[e[7]||(e[7]=p("💡 ",-1)),e[8]||(e[8]=n("strong",null,"Tip:",-1)),p(" "+a(r.value.tip),1)])])):c("",!0),n("div",ee,[e[10]||(e[10]=n("div",{class:"dt-result-section-label"},"🔗 관련 페이지",-1)),n("div",ne,[(l(!0),s(v,null,h(r.value.templates,t=>(l(),s("a",{key:t.name,href:t.link,class:"dt-template-link"},[p(a(t.name)+" ",1),e[9]||(e[9]=n("span",{class:"dt-link-arrow"},"→",-1))],8,te))),128))])]),n("button",{class:"dt-reset-btn",onClick:L}," 🔄 처음부터 다시 ")])):c("",!0)])]))}});export{oe as __pageData,re as default};
