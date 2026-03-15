import{p as m,o as d,c,j as e,a as p,N as h,t as a,F as w,B as _,n as C,k as v,e as A,ag as B,h as E}from"./chunks/framework.BWGJuBbb.js";const f={class:"cal-overview"},D={class:"cal-overview-inner"},I={class:"cal-progress-bar-wrap"},b={class:"cal-progress-text"},j={class:"cal-progress-detail"},y={class:"cal-grid"},F=["onClick"],x={class:"cal-card-month"},P={class:"cal-card-emoji"},N={class:"cal-card-theme"},S={key:0,class:"cal-badge-now"},O=JSON.parse('{"title":"연간 AI 활용 캘린더","description":"","frontmatter":{},"headers":[],"relativePath":"resources/annual-calendar.md","filePath":"resources/annual-calendar.md","lastUpdated":1773586478000}'),T={name:"resources/annual-calendar.md"},Q=Object.assign(T,{setup(M){const t=m(null);function u(s){t.value=t.value===s?null:s}const i=new Date().getMonth(),k=[{month:"1월",emoji:"🚀",theme:"시작하기",color:"#E87040",gradient:"linear-gradient(135deg, #E87040, #F4A261)",weeks:["Claude 설치 & 첫 대화","이메일 3개 작성","파일 요약 5개","Custom Instructions 설정"],goal:"Cowork 기본 기능 익히기"},{month:"2월",emoji:"📝",theme:"문서 마스터",color:"#D4A843",gradient:"linear-gradient(135deg, #D4A843, #E8C547)",weeks:["보고서 작성 연습","기획서 초안 3개","다양한 톤으로 이메일 작성","문서 퇴고 & 다듬기"],goal:"문서 작성 시간 50% 단축"},{month:"3월",emoji:"📊",theme:"데이터 정복",color:"#5B9BD5",gradient:"linear-gradient(135deg, #5B9BD5, #7EC8E3)",weeks:["엑셀 데이터 분석","설문 결과 정리","차트 & 시각화 요청","월간 리포트 자동화"],goal:"데이터 작업 자동화 루틴 구축"},{month:"4월",emoji:"🤝",theme:"회의 혁신",color:"#70AD47",gradient:"linear-gradient(135deg, #70AD47, #A8D86D)",weeks:["안건 자동 정리","실시간 노트 활용","회의록 → 이메일 파이프라인","불참자 요약본"],goal:"회의 관련 업무 70% 자동화"},{month:"5월",emoji:"🔌",theme:"플러그인 탐험",color:"#9B59B6",gradient:"linear-gradient(135deg, #9B59B6, #C39BD3)",weeks:["플러그인 3개 설치","부서별 플러그인 활용","커스텀 플러그인 만들기","팀원과 플러그인 공유"],goal:"플러그인 3개 이상 일상 활용"},{month:"6월",emoji:"🔄",theme:"워크플로우 구축",color:"#E67E22",gradient:"linear-gradient(135deg, #E67E22, #F5B041)",weeks:["주간 보고 자동화","이메일 배치 처리","데이터 → 보고서 파이프라인","복합 워크플로우 설계"],goal:"핵심 워크플로우 3개 정착"},{month:"7월",emoji:"🌐",theme:"MCP & 연동",color:"#1ABC9C",gradient:"linear-gradient(135deg, #1ABC9C, #48C9B0)",weeks:["Google Drive 연동","Slack 연동","캘린더 연동","다중 연동 워크플로우"],goal:"외부 도구 2개 이상 연동"},{month:"8월",emoji:"👥",theme:"팀 협업",color:"#3498DB",gradient:"linear-gradient(135deg, #3498DB, #85C1E9)",weeks:["팀 프로젝트 설정","팀 세션 활용","프롬프트 공유 문화","베스트 프랙티스 정리"],goal:"팀 전체 Cowork 활용"},{month:"9월",emoji:"📈",theme:"성과 측정",color:"#E84393",gradient:"linear-gradient(135deg, #E84393, #F8A5C2)",weeks:["KPI 설정","성과 대시보드 구축","ROI 분석","경영진 보고"],goal:"AI 도입 효과 수치화"},{month:"10월",emoji:"🛡️",theme:"보안 & 거버넌스",color:"#2C3E50",gradient:"linear-gradient(135deg, #2C3E50, #4A6274)",weeks:["보안 체크리스트 점검","AI 사용 정책 업데이트","팀 보안 교육","감사 & 컴플라이언스"],goal:"보안 준비 100%"},{month:"11월",emoji:"🎓",theme:"고급 활용",color:"#6C5CE7",gradient:"linear-gradient(135deg, #6C5CE7, #A29BFE)",weeks:["복합 문서 생성","다국어 콘텐츠 제작","고급 프롬프트 테크닉","AI 챔피언 교육"],goal:"파워유저 수준 달성"},{month:"12월",emoji:"🏆",theme:"회고 & 계획",color:"#F39C12",gradient:"linear-gradient(135deg, #F39C12, #F7DC6F)",weeks:["연간 성과 정리","베스트 활용 사례 공유회","내년 AI 활용 계획","팀 시상 & 축하"],goal:"1년 성과 공유 & 내년 로드맵"}],r=m(Array.from({length:12},()=>[!1,!1,!1,!1])),g=E(()=>{const s=r.value.flat().filter(Boolean).length;return Math.round(s/48*100)});return(s,l)=>(d(),c("div",null,[l[1]||(l[1]=e("h1",{id:"연간-ai-활용-캘린더",tabindex:"-1"},[p("연간 AI 활용 캘린더 "),e("a",{class:"header-anchor",href:"#연간-ai-활용-캘린더","aria-label":'Permalink to "연간 AI 활용 캘린더"'},"​")],-1)),l[2]||(l[2]=e("blockquote",null,[e("p",null,"매달 새로운 AI 활용 테마에 도전하세요! 12개월 로드맵으로 Cowork 마스터가 되는 여정입니다.")],-1)),e("div",f,[e("div",D,[l[0]||(l[0]=e("div",{class:"cal-overview-label"},"연간 달성률",-1)),e("div",I,[e("div",{class:"cal-progress-bar",style:h({width:g.value+"%"})},null,4)]),e("div",b,[p(a(g.value)+"% 완료 ",1),e("span",j,"("+a(r.value.flat().filter(Boolean).length)+" / 48 챌린지)",1)])])]),e("div",y,[(d(),c(w,null,_(k,(o,n)=>e("div",{key:n,class:C(["cal-card",{"cal-card-current":n===v(i),"cal-card-expanded":t.value===n}]),onClick:V=>u(n)},[e("div",{class:"cal-card-header",style:h({background:o.gradient})},[e("div",x,a(o.month),1),e("div",P,a(o.emoji),1),e("div",N,a(o.theme),1),n===v(i)?(d(),c("div",S,"NOW")):A("",!0)],4),e("pre",null,[e("code",null,`<!-- 진행률 바 -->
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
    <span class="cal-week-check">`+a(r.value[n][s.wIdx]?"✅":"⬜")+`</span>
    <span class="cal-week-label">W`+a(s.wIdx+1)+`</span>
    <span class="cal-week-text">`+a(s.week)+`</span>
  </div>
</div>

<!-- 목표 -->
<div class="cal-card-goal" :style="{ borderColor: m.color }">
  <span class="cal-goal-icon">🎯</span>
  <span class="cal-goal-text">`+a(o.goal)+`</span>
</div>
`,1)])],10,F)),64))]),l[3]||(l[3]=B("",2))]))}});export{O as __pageData,Q as default};
