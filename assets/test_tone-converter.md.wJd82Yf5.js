import{_ as bt,o as r,c as u,j as t,a as h,F as x,B as $,n as _,t as s,N as v,e as C,p as f,h as k}from"./chunks/framework.DS_HIvHc.js";const pt={class:"tc-container"},_t={class:"tc-section"},ft={class:"tc-scenario-tabs"},yt=["onClick"],jt={class:"tc-scenario-emoji"},gt={class:"tc-section"},ht={class:"tc-mode-toggle"},Ct={class:"tc-section"},kt={class:"tc-tone-tabs"},zt=["onClick"],Et={class:"tc-tone-emoji"},Mt={class:"tc-tone-label"},wt={key:0,class:"tc-compare-selector"},xt={class:"tc-tone-tabs"},$t=["onClick","disabled"],Dt={key:0,class:"tc-section"},Nt={class:"tc-email-card"},Tt={class:"tc-email-header"},Bt={class:"tc-email-tone-desc"},Pt={class:"tc-email-subject"},St={class:"tc-email-body"},Zt={class:"tc-email-footer"},Lt={class:"tc-stats"},Vt={class:"tc-stat"},At={class:"tc-stat-value"},Ft={class:"tc-stat"},Ot={class:"tc-formality-bar"},qt={class:"tc-stat-value"},Gt={class:"tc-tone-features"},It={class:"tc-features-grid"},Jt={class:"tc-feature-item"},Ut={class:"tc-feature-value"},Ht={class:"tc-feature-item"},Kt={class:"tc-feature-value"},Qt={class:"tc-prompt-section"},Rt={key:0,class:"tc-prompt-box"},Wt={class:"tc-prompt-text"},Xt={key:1,class:"tc-section"},Yt={class:"tc-compare-grid"},tn={class:"tc-email-card tc-compare-card"},nn={class:"tc-email-header"},sn={class:"tc-email-subject"},ln={class:"tc-email-body tc-compare-body"},en={class:"tc-email-footer"},on={class:"tc-stats tc-stats-compact"},an={class:"tc-stat"},cn={class:"tc-stat-value"},dn={class:"tc-stat"},rn={class:"tc-formality-bar tc-formality-bar-sm"},un={class:"tc-email-card tc-compare-card"},vn={class:"tc-email-header"},mn={class:"tc-email-subject"},bn={class:"tc-email-body tc-compare-body"},pn={class:"tc-email-footer"},_n={class:"tc-stats tc-stats-compact"},fn={class:"tc-stat"},yn={class:"tc-stat-value"},jn={class:"tc-stat"},gn={class:"tc-formality-bar tc-formality-bar-sm"},hn={class:"tc-compare-insight"},Cn={class:"tc-compare-table"},wn=JSON.parse('{"title":"톤 변환 체험","description":"","frontmatter":{},"headers":[],"relativePath":"test/tone-converter.md","filePath":"test/tone-converter.md","lastUpdated":1773714265000}'),kn={name:"test/tone-converter.md"},zn=Object.assign(kn,{setup(En){const y=[{id:"formal",label:"공식/격식체",emoji:"📋",color:"#4A5568",desc:"공문 스타일, 딱딱하고 정중"},{id:"friendly",label:"친근/캐주얼",emoji:"😊",color:"#38A169",desc:"동료에게 보내는 느낌"},{id:"direct",label:"간결/직설적",emoji:"🎯",color:"#E53E3E",desc:"핵심만 짧게"},{id:"professional",label:"비즈니스 프로페셔널",emoji:"💼",color:"#3182CE",desc:"세련되고 전문적"},{id:"mz",label:"MZ감성",emoji:"✨",color:"#D69E2E",desc:"이모지 포함, 가볍고 현대적"}],mt=[{id:"schedule",label:"프로젝트 일정 변경 안내",emoji:"📅"},{id:"apology",label:"실수에 대한 사과",emoji:"🙇"},{id:"collab",label:"협력 요청",emoji:"🤝"}],D={schedule:{formal:{subject:"[공문] 프로젝트 납품 일정 변경 통보의 건",body:`수신: ○○○ 담당자님 귀하
발신: △△팀 김○○

상기 건에 대하여 아래와 같이 안내드립니다.

내부 개발 리소스 재편성에 따라, 당초 예정되었던 납품 일정의 변경이 불가피하게 되었음을 알려드립니다.

■ 변경 사항
- 기존 납품일: 2026년 3월 31일
- 변경 납품일: 2026년 4월 14일
- 변경 사유: 프로젝트 품질 강화를 위한 내부 리소스 재편성

본 일정 변경으로 인한 불편을 최소화하기 위해 만전을 기하겠습니다. 검토 후 회신하여 주시면 감사하겠습니다.

이상입니다.

△△팀 김○○ 드림`,prompt:'"공식 문서 형식으로 격식체를 사용하여 프로젝트 일정 변경 안내 이메일을 작성해줘. 공문 스타일로 정중하게."'},friendly:{subject:"일정 조정 건으로 연락드려요~",body:`○○○님, 안녕하세요! 😊

잘 지내시죠? 다름이 아니라 프로젝트 일정 관련해서 말씀드릴 게 있어서요.

내부적으로 좀 더 좋은 결과물을 위해 팀 구성을 살짝 바꾸게 됐는데요, 그래서 납품일이 3월 31일에서 4월 14일로 약 2주 정도 미뤄질 것 같아요.

물론 품질은 더 좋아질 거예요! 혹시 일정 관련해서 걱정되시는 부분 있으시면 편하게 말씀해주세요. 최대한 맞춰볼게요~

감사합니다!
김○○ 드림`,prompt:'"동료에게 보내듯 친근하고 캐주얼한 톤으로 일정 변경 안내 이메일을 써줘. 부담 없는 느낌으로."'},direct:{subject:"납품일 변경: 3/31 → 4/14",body:`○○○님,

납품일이 변경됩니다.

• 기존: 3월 31일
• 변경: 4월 14일
• 사유: 내부 리소스 재편성

품질에는 영향 없습니다.
확인 후 회신 부탁드립니다.

김○○`,prompt:'"핵심만 간결하게 전달하는 직설적인 톤으로 일정 변경 이메일을 써줘. 불필요한 수식어 없이 짧게."'},professional:{subject:"프로젝트 납품 일정 조정 협의 요청",body:`○○○ 담당자님, 안녕하세요.
평소 좋은 협력에 감사드립니다.

프로젝트 품질을 한층 강화하기 위해 내부 리소스를 전략적으로 재편성하게 되었습니다. 이에 따라 납품 일정 조정을 협의드리고자 합니다.

📅 일정 변경 요청
- 기존 납품일: 3월 31일
- 요청 납품일: 4월 14일 (월)

📋 품질 보장 방안
- 매주 금요일 중간 진행 보고서 제공
- 진행률 및 주요 완료 항목 공유

일정 변경에 따른 불편을 최소화할 수 있도록 최선을 다하겠습니다. 검토 후 의견 회신 부탁드립니다.

감사합니다.
김○○ 드림`,prompt:'"세련되고 전문적인 비즈니스 톤으로 일정 변경 이메일을 써줘. 대안도 제시하면서 신뢰감 있게."'},mz:{subject:"📢 일정 살짝 변경됩니다!",body:`○○○님 안녕하세요! 👋

프로젝트 관련해서 업데이트 드려요~

✅ 더 좋은 퀄리티를 위해 팀을 리빌딩 했는데요!
📆 그래서 납품일이 살짝 조정됩니다

기존: 3/31 → 변경: 4/14 🔄

2주 정도 더 걸리지만, 그만큼 완성도 높은 결과물로 보답할게요 💪

궁금한 점 있으시면 언제든 DM 주세요!
피드백 환영합니다 🙌

감사합니다 ✨
김○○`,prompt:'"MZ세대 감성으로 이모지 넣어서 가볍고 현대적인 톤의 일정 변경 이메일을 써줘. 딱딱하지 않게!"'}},apology:{formal:{subject:"[사과문] 보고서 데이터 오류 건에 대한 사과",body:`수신: ○○○ 팀장님 귀하
발신: △△팀 김○○

금번 제출된 1분기 매출 보고서 내 데이터 오류와 관련하여, 깊은 사과의 말씀을 드립니다.

■ 오류 내용
- 해당 문서: 2026년 1분기 매출 분석 보고서
- 오류 항목: 3월 매출 데이터 (4,100만원 → 정확한 수치: 3,800만원)
- 원인: 데이터 입력 시 검증 절차 미이행

■ 재발 방지 대책
1. 데이터 입력 후 이중 검증 절차 도입
2. 보고서 제출 전 교차 확인 프로세스 수립

수정된 보고서를 금일 중 재제출하겠습니다. 다시 한번 깊이 사과드립니다.

△△팀 김○○ 드림`,prompt:'"공식 문서 형식의 격식체로 보고서 데이터 오류에 대한 사과 이메일을 써줘. 재발 방지 대책도 포함해서 정중하게."'},friendly:{subject:"보고서 건으로 죄송합니다 🙏",body:`○○○ 팀장님, 안녕하세요.

먼저 정말 죄송하다는 말씀 드리고 싶어요. 어제 제출한 1분기 보고서에 제가 3월 매출 수치를 잘못 넣었더라고요. 4,100만원이라고 적었는데 정확한 건 3,800만원이에요.

확인을 한 번 더 했어야 하는데, 제 실수입니다. 😓

수정본은 오늘 안으로 다시 보내드릴게요! 앞으로는 숫자 한 번 더 꼼꼼히 체크하겠습니다.

다시 한번 죄송합니다!
김○○ 드림`,prompt:'"동료나 가까운 상사에게 보내듯 친근하지만 진심이 담긴 톤으로 실수 사과 이메일을 써줘."'},direct:{subject:"보고서 데이터 오류 정정",body:`○○○ 팀장님,

1분기 보고서에 오류가 있었습니다.

• 오류: 3월 매출 4,100만원 → 정확: 3,800만원
• 원인: 입력 시 검증 누락
• 조치: 오늘 중 수정본 제출

재발 방지를 위해 이중 검증 절차를 도입하겠습니다.
죄송합니다.

김○○`,prompt:'"간결하고 직설적으로 실수를 인정하고 대처 방안을 전달하는 사과 이메일을 써줘. 군더더기 없이."'},professional:{subject:"1분기 매출 보고서 데이터 정정 및 사과",body:`○○○ 팀장님, 안녕하세요.

어제 제출한 1분기 매출 분석 보고서에 데이터 오류가 확인되어, 진심으로 사과드립니다.

📌 오류 내역
- 3월 매출: 4,100만원(오류) → 3,800만원(정확)
- 이로 인해 1분기 합계 및 증감률도 재산정이 필요합니다

📋 대응 계획
1. 수정 보고서: 금일 17시까지 재제출
2. 영향 분석: 수정된 데이터 기반 인사이트 재정리

🔒 재발 방지
- 데이터 입력 후 원본 대조 검증 단계 추가
- 제출 전 팀 내 교차 리뷰 프로세스 신설

앞으로 이런 일이 반복되지 않도록 철저히 관리하겠습니다.

감사합니다.
김○○ 드림`,prompt:'"전문적이고 세련된 비즈니스 톤으로 사과 이메일을 써줘. 오류 인정, 대응 계획, 재발 방지까지 체계적으로."'},mz:{subject:"😱 보고서 수정 건 + 사과드립니다",body:`○○○ 팀장님 안녕하세요!

어제 보고서 건으로 연락드려요... 🙇
사실 3월 매출 데이터를 잘못 입력해버렸습니다 ㅠㅠ

❌ 잘못된 수치: 4,100만원
✅ 정확한 수치: 3,800만원

변명의 여지가 없는 제 실수입니다 😓

💡 바로 조치할게요!
→ 오늘 안에 수정본 보내드림
→ 앞으로 숫자 더블체크 필수로 할게요

다시 한번 정말 죄송합니다 🙏
믿고 맡겨주신 만큼 더 꼼꼼하게 하겠습니다!

김○○ 드림`,prompt:'"MZ세대 감성으로 진심 어린 사과 이메일을 써줘. 이모지 활용하되 진정성은 유지해줘."'}},collab:{formal:{subject:"[협조 요청] 마케팅-개발팀 간 협업 프로젝트 제안의 건",body:`수신: 개발팀 ○○○ 팀장님 귀하
발신: 마케팅팀 김○○

귀 팀의 무궁한 발전을 기원합니다.

마케팅팀에서는 고객 데이터 기반의 개인화 추천 시스템 구축을 계획하고 있으며, 이에 개발팀의 기술적 지원을 협조 요청드립니다.

■ 프로젝트 개요
- 프로젝트명: 고객 맞춤형 추천 시스템
- 목표: 고객 이탈률 15% 감소
- 예상 기간: 2026년 4월~6월 (3개월)

■ 협조 요청 사항
1. 데이터 파이프라인 구축 지원
2. 추천 알고리즘 개발 인력 1인 파견
3. 기술 검토 미팅 참석 (월 2회)

상세 내용은 별도 미팅에서 협의 가능하며, 일정을 조율하여 주시면 감사하겠습니다.

마케팅팀 김○○ 드림`,prompt:'"공식적이고 격식 있는 톤으로 타 부서에 협업을 요청하는 이메일을 써줘. 공문 스타일로 정중하게."'},friendly:{subject:"같이 프로젝트 하나 해볼까요? 😄",body:`○○○ 팀장님, 안녕하세요!
마케팅팀 김○○입니다~

다짜고짜 제안 하나 드리려고 연락드렸어요 ㅎㅎ

요즘 고객 데이터 보면서 "개인화 추천 시스템이 있으면 좋겠다" 싶었는데요, 이거 개발팀이랑 같이 하면 진짜 좋은 결과 나올 것 같아요!

대충 이런 그림이에요:
- 고객 이탈률 15% 줄이는 게 목표
- 4월부터 6월까지 약 3개월
- 개발팀에서 데이터 쪽 도와주시면 저희가 마케팅 전략 짤게요

부담 없이 한번 커피 마시면서 이야기해볼까요? ☕
편하신 시간 알려주세요~

감사합니다!
김○○ 드림`,prompt:'"친근하고 가벼운 톤으로 협업을 제안하는 이메일을 써줘. 동료에게 말하듯 편안하게."'},direct:{subject:"협업 제안: 고객 추천 시스템 구축",body:`○○○ 팀장님,

마케팅팀에서 고객 추천 시스템을 만들려고 합니다.
개발팀 협업이 필요합니다.

• 목표: 고객 이탈률 15% 감소
• 기간: 4~6월 (3개월)
• 필요 지원: 데이터 파이프라인 구축, 알고리즘 개발 인력 1명

관심 있으시면 이번 주 미팅 가능할까요?

김○○`,prompt:'"짧고 직설적으로 협업을 요청하는 이메일을 써줘. 핵심 정보만 전달."'},professional:{subject:"마케팅-개발팀 협업 프로젝트 제안: 고객 맞춤형 추천 시스템",body:`○○○ 팀장님, 안녕하세요.
마케팅팀 김○○입니다.

고객 경험 개선을 위한 협업 프로젝트를 제안드립니다.

🎯 프로젝트 비전
고객 데이터 기반 개인화 추천 시스템을 구축하여, 고객 이탈률을 15% 감소시키고자 합니다.

📅 주요 일정
- 4월: 데이터 분석 및 설계
- 5월: 개발 및 테스트
- 6월: 파일럿 런칭 및 최적화

🤝 협업 구조
- 마케팅팀: 고객 분석, 전략 수립, 성과 측정
- 개발팀: 데이터 파이프라인, 추천 알고리즘 개발

💡 기대 효과
- 고객 만족도 향상
- 매출 증대 (예상 +8~12%)
- 양 팀 시너지 창출

상세 기획서를 준비해두었습니다. 미팅 일정을 잡아 논의하면 좋겠습니다.

감사합니다.
김○○ 드림`,prompt:'"전문적이고 설득력 있는 비즈니스 톤으로 협업 제안 이메일을 써줘. 비전과 기대 효과를 포함해서."'},mz:{subject:"🚀 같이 멋진 프로젝트 해봐요!",body:`○○○ 팀장님 안녕하세요! 👋
마케팅팀 김○○이에요~

오늘 흥미로운 제안 하나 들고 왔습니다 💡

🎯 한줄 요약: 고객 맞춤 추천 시스템을 같이 만들어봐요!

왜 해야 하냐면요 👇
→ 고객 이탈률 15% 줄일 수 있어요
→ 매출도 올라갈 거예요 📈
→ 무엇보다 양 팀이 시너지 낼 수 있는 기회!

⏰ 일정: 4~6월 (3개월)

개발팀에서 데이터 + 알고리즘 쪽 서포트해주시면
저희가 마케팅 전략 + 성과 분석 담당할게요! 🙌

관심 있으시면 커피챗 한번 할까요? ☕
슬랙 DM 주세요~

김○○ 드림 ✨`,prompt:'"MZ세대 감성으로 이모지 넣어서 협업을 제안하는 이메일을 써줘. 에너지 넘치고 가볍게!"'}}},j=f("schedule"),a=f("formal"),c=f("friendly"),b=f(!1),m=f("single"),i=k(()=>{var e;return(e=D[j.value])==null?void 0:e[a.value]}),g=k(()=>{var e;return(e=D[j.value])==null?void 0:e[c.value]}),o=k(()=>y.find(e=>e.id===a.value)),d=k(()=>y.find(e=>e.id===c.value));function p(e){return e?e.replace(/\n/g," ").replace(/\s+/g," ").trim().length:0}function z(e){return{formal:95,friendly:30,direct:50,professional:80,mz:15}[e]||50}function E(e){return{formal:"매우 높음",friendly:"낮음",direct:"보통",professional:"높음",mz:"매우 낮음"}[e]||"보통"}function M(e){return{formal:'"귀하", "귀 팀의 무궁한 발전을 기원합니다"',friendly:'"안녕하세요!", "~요/~죠" 체',direct:"이름 + 직급만",professional:'"안녕하세요." + 감사 인사',mz:'"안녕하세요! 👋", "~에요/~이에요"'}[e]||""}function w(e){return{formal:'"이상입니다", "드림"',friendly:'"감사합니다!", "~할게요~"',direct:"이름만",professional:'"감사합니다.", "드림"',mz:'"✨", "🙌", "드림 ✨"'}[e]||""}return(e,n)=>{var N,T,B,P,S,Z,L,V,A,F,O,q,G,I,J,U,H,K,Q,R,W,X,Y,tt,nt,st,lt,et,ot,at,ct,it,dt,rt,ut;return r(),u("div",null,[n[25]||(n[25]=t("h1",{id:"톤-변환-체험",tabindex:"-1"},[h("톤 변환 체험 "),t("a",{class:"header-anchor",href:"#톤-변환-체험","aria-label":'Permalink to "톤 변환 체험"'},"​")],-1)),n[26]||(n[26]=t("blockquote",null,[t("p",null,"같은 내용도 톤에 따라 완전히 달라집니다. 5가지 톤의 차이를 직접 비교해보세요!")],-1)),t("div",pt,[t("div",_t,[n[3]||(n[3]=t("h3",{class:"tc-section-title"},"시나리오 선택",-1)),t("div",ft,[(r(),u(x,null,$(mt,l=>t("button",{key:l.id,class:_(["tc-scenario-btn",{active:j.value===l.id}]),onClick:vt=>{j.value=l.id,b.value=!1}},[t("span",jt,s(l.emoji),1),t("span",null,s(l.label),1)],10,yt)),64))])]),t("div",gt,[t("div",ht,[t("button",{class:_(["tc-mode-btn",{active:m.value==="single"}]),onClick:n[0]||(n[0]=l=>m.value="single")}," 단일 보기 ",2),t("button",{class:_(["tc-mode-btn",{active:m.value==="compare"}]),onClick:n[1]||(n[1]=l=>m.value="compare")}," 비교 보기 ",2)])]),t("div",Ct,[n[5]||(n[5]=t("h3",{class:"tc-section-title"},"톤 선택",-1)),t("div",kt,[(r(),u(x,null,$(y,l=>t("button",{key:l.id,class:_(["tc-tone-tab",{active:a.value===l.id}]),style:v(a.value===l.id?{borderColor:l.color,color:l.color}:{}),onClick:vt=>{a.value=l.id,b.value=!1}},[t("span",Et,s(l.emoji),1),t("span",Mt,s(l.label),1)],14,zt)),64))]),m.value==="compare"?(r(),u("div",wt,[n[4]||(n[4]=t("span",{class:"tc-compare-label"},"비교 대상:",-1)),t("div",xt,[(r(),u(x,null,$(y,l=>t("button",{key:"cmp-"+l.id,class:_(["tc-tone-tab tc-tone-tab-sm",{active:c.value===l.id}]),style:v(c.value===l.id?{borderColor:l.color,color:l.color}:{}),onClick:vt=>c.value=l.id,disabled:l.id===a.value},[t("span",null,s(l.emoji)+" "+s(l.label),1)],14,$t)),64))])])):C("",!0)]),m.value==="single"?(r(),u("div",Dt,[t("div",Nt,[t("div",Tt,[t("div",{class:"tc-email-tone-badge",style:v({backgroundColor:((N=o.value)==null?void 0:N.color)+"18",color:(T=o.value)==null?void 0:T.color,borderColor:((B=o.value)==null?void 0:B.color)+"40"})},s((P=o.value)==null?void 0:P.emoji)+" "+s((S=o.value)==null?void 0:S.label),5),t("span",Bt,s((Z=o.value)==null?void 0:Z.desc),1)]),t("div",Pt,[n[6]||(n[6]=t("span",{class:"tc-email-subject-label"},"제목:",-1)),h(" "+s((L=i.value)==null?void 0:L.subject),1)]),t("div",St,s((V=i.value)==null?void 0:V.body),1),t("div",Zt,[t("div",Lt,[t("div",Vt,[n[7]||(n[7]=t("span",{class:"tc-stat-label"},"글자 수",-1)),t("span",At,s(p((A=i.value)==null?void 0:A.body))+"자",1)]),t("div",Ft,[n[8]||(n[8]=t("span",{class:"tc-stat-label"},"격식 수준",-1)),t("div",Ot,[t("div",{class:"tc-formality-fill",style:v({width:z(a.value)+"%",backgroundColor:(F=o.value)==null?void 0:F.color})},null,4)]),t("span",qt,s(E(a.value)),1)])])])]),t("div",Gt,[n[11]||(n[11]=t("h4",null,"톤 특징 비교",-1)),t("div",It,[t("div",Jt,[n[9]||(n[9]=t("span",{class:"tc-feature-label"},"인사말",-1)),t("span",Ut,s(M(a.value)),1)]),t("div",Ht,[n[10]||(n[10]=t("span",{class:"tc-feature-label"},"마무리",-1)),t("span",Kt,s(w(a.value)),1)])])]),t("div",Qt,[t("button",{class:"tc-prompt-btn",onClick:n[2]||(n[2]=l=>b.value=!b.value)},s(b.value?"프롬프트 숨기기":"🔍 프롬프트 보기"),1),b.value?(r(),u("div",Rt,[n[12]||(n[12]=t("div",{class:"tc-prompt-label"},"이 톤을 만들기 위한 프롬프트:",-1)),t("div",Wt,s((O=i.value)==null?void 0:O.prompt),1)])):C("",!0)])])):C("",!0),m.value==="compare"?(r(),u("div",Xt,[t("div",Yt,[t("div",tn,[t("div",nn,[t("div",{class:"tc-email-tone-badge",style:v({backgroundColor:((q=o.value)==null?void 0:q.color)+"18",color:(G=o.value)==null?void 0:G.color,borderColor:((I=o.value)==null?void 0:I.color)+"40"})},s((J=o.value)==null?void 0:J.emoji)+" "+s((U=o.value)==null?void 0:U.label),5)]),t("div",sn,[n[13]||(n[13]=t("span",{class:"tc-email-subject-label"},"제목:",-1)),h(" "+s((H=i.value)==null?void 0:H.subject),1)]),t("div",ln,s((K=i.value)==null?void 0:K.body),1),t("div",en,[t("div",on,[t("div",an,[n[14]||(n[14]=t("span",{class:"tc-stat-label"},"글자 수",-1)),t("span",cn,s(p((Q=i.value)==null?void 0:Q.body))+"자",1)]),t("div",dn,[n[15]||(n[15]=t("span",{class:"tc-stat-label"},"격식",-1)),t("div",rn,[t("div",{class:"tc-formality-fill",style:v({width:z(a.value)+"%",backgroundColor:(R=o.value)==null?void 0:R.color})},null,4)])])])])]),t("div",un,[t("div",vn,[t("div",{class:"tc-email-tone-badge",style:v({backgroundColor:((W=d.value)==null?void 0:W.color)+"18",color:(X=d.value)==null?void 0:X.color,borderColor:((Y=d.value)==null?void 0:Y.color)+"40"})},s((tt=d.value)==null?void 0:tt.emoji)+" "+s((nt=d.value)==null?void 0:nt.label),5)]),t("div",mn,[n[16]||(n[16]=t("span",{class:"tc-email-subject-label"},"제목:",-1)),h(" "+s((st=g.value)==null?void 0:st.subject),1)]),t("div",bn,s((lt=g.value)==null?void 0:lt.body),1),t("div",pn,[t("div",_n,[t("div",fn,[n[17]||(n[17]=t("span",{class:"tc-stat-label"},"글자 수",-1)),t("span",yn,s(p((et=g.value)==null?void 0:et.body))+"자",1)]),t("div",jn,[n[18]||(n[18]=t("span",{class:"tc-stat-label"},"격식",-1)),t("div",gn,[t("div",{class:"tc-formality-fill",style:v({width:z(c.value)+"%",backgroundColor:(ot=d.value)==null?void 0:ot.color})},null,4)])])])])])]),t("div",hn,[n[24]||(n[24]=t("h4",null,"톤 차이 비교",-1)),t("table",Cn,[t("thead",null,[t("tr",null,[n[19]||(n[19]=t("th",null,"항목",-1)),t("th",null,s((at=o.value)==null?void 0:at.emoji)+" "+s((ct=o.value)==null?void 0:ct.label),1),t("th",null,s((it=d.value)==null?void 0:it.emoji)+" "+s((dt=d.value)==null?void 0:dt.label),1)])]),t("tbody",null,[t("tr",null,[n[20]||(n[20]=t("td",null,"인사말",-1)),t("td",null,s(M(a.value)),1),t("td",null,s(M(c.value)),1)]),t("tr",null,[n[21]||(n[21]=t("td",null,"마무리",-1)),t("td",null,s(w(a.value)),1),t("td",null,s(w(c.value)),1)]),t("tr",null,[n[22]||(n[22]=t("td",null,"글자 수",-1)),t("td",null,s(p((rt=i.value)==null?void 0:rt.body))+"자",1),t("td",null,s(p((ut=g.value)==null?void 0:ut.body))+"자",1)]),t("tr",null,[n[23]||(n[23]=t("td",null,"격식 수준",-1)),t("td",null,s(E(a.value)),1),t("td",null,s(E(c.value)),1)])])])])])):C("",!0)])])}}}),xn=bt(zn,[["__scopeId","data-v-4c21f8da"]]);export{wn as __pageData,xn as default};
