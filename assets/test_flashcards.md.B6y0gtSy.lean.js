import{_ as S,o,c as d,j as n,a as x,n as I,t as e,N as M,p as t,h as u}from"./chunks/framework.DS_HIvHc.js";const P={class:"flashcard-app"},z={class:"mode-toggle"},R={key:0,class:"summary-panel"},$={class:"summary-stats"},j={class:"stat known"},D={class:"stat-number"},G={class:"stat-label"},L={class:"stat unknown"},N={class:"stat-number"},O={class:"stat-label"},B={class:"summary-bar"},F={key:0,class:"summary-msg perfect"},T={key:1,class:"summary-msg great"},E={key:2,class:"summary-msg good"},U={key:3,class:"summary-msg keep-going"},V={key:1},q={class:"progress-row"},J={class:"progress-text"},X=JSON.parse('{"title":"용어 플래시카드","description":"","frontmatter":{},"headers":[],"relativePath":"test/flashcards.md","filePath":"test/flashcards.md","lastUpdated":1773715498000}'),K={name:"test/flashcards.md"},H=Object.assign(K,{setup(Q){const f=t([{term:"LLM",definition:"대규모 언어 모델(Large Language Model). 방대한 텍스트를 학습해 사람처럼 글을 쓰고 대화하는 AI.",analogy:"📚 수백만 권의 책을 읽은 똑똑한 비서와 같아요."},{term:"프롬프트",definition:"AI에게 보내는 질문이나 지시문. 잘 쓸수록 좋은 답변을 받을 수 있어요.",analogy:"🎯 식당 주문서와 같아요 — 구체적으로 쓸수록 원하는 요리가 나와요."},{term:"할루시네이션",definition:"AI가 그럴듯하지만 사실이 아닌 정보를 만들어내는 현상.",analogy:"🌀 자신감 넘치지만 가끔 틀리는 발표자와 같아요."},{term:"MCP",definition:"Model Context Protocol. AI가 외부 도구나 데이터에 접근할 수 있게 해주는 표준 규격.",analogy:"🔌 가전제품의 공통 콘센트 규격과 같아요."},{term:"토큰",definition:"AI가 텍스트를 처리하는 최소 단위. 단어나 음절 조각이에요.",analogy:"🧩 문장을 퍼즐 조각으로 나눈 것과 같아요."},{term:"컨텍스트 윈도우",definition:"AI가 한 번에 기억하고 처리할 수 있는 텍스트 양의 한계.",analogy:"📋 책상 위 공간과 같아요 — 넓을수록 많은 자료를 펼쳐놓고 작업할 수 있어요."},{term:"Custom Instructions",definition:"AI에게 미리 설정해두는 나만의 지침. 매번 반복 설명할 필요가 없어요.",analogy:'📌 단골 카페에서 "평소처럼요"라고 주문하는 것과 같아요.'},{term:"플러그인",definition:"AI의 기능을 확장해주는 추가 도구. 웹 검색, 코드 실행 등이 가능해져요.",analogy:"🔧 스마트폰에 앱을 설치해서 기능을 추가하는 것과 같아요."},{term:"Projects",definition:"Claude에서 관련 대화와 파일을 하나의 프로젝트로 묶어 관리하는 기능.",analogy:"📁 업무별로 서류철을 나누어 정리하는 것과 같아요."},{term:"Memory",definition:"AI가 이전 대화 내용을 기억해서 연속적인 맥락을 유지하는 기능.",analogy:"🧠 오래 함께 일한 동료가 내 취향을 기억하는 것과 같아요."},{term:"Artifacts",definition:"Claude가 생성한 코드, 문서, 차트 등을 별도 패널에서 보여주는 기능.",analogy:"🖼️ 화이트보드에 결과물을 따로 정리해서 보여주는 것과 같아요."},{term:"프롬프트 엔지니어링",definition:"AI에서 최적의 결과를 얻기 위해 체계적으로 지시문을 설계하는 기술.",analogy:"🏗️ 건축 설계도를 정교하게 그리는 것과 같아요."},{term:"파인튜닝",definition:"범용 AI 모델을 특정 분야에 맞게 추가 학습시켜 전문화하는 과정.",analogy:"🎓 종합병원 의사가 전문의 수련을 받는 것과 같아요."},{term:"SSO",definition:"Single Sign-On. 하나의 계정으로 여러 서비스에 로그인할 수 있는 인증 방식.",analogy:"🔑 마스터키 하나로 건물의 모든 문을 여는 것과 같아요."},{term:"Enterprise Plan",definition:"기업용 AI 서비스 요금제. 보안, 관리, 대량 사용 등 조직 기능을 제공해요.",analogy:"🏢 개인 사무실 대신 관리 서비스가 포함된 오피스 빌딩 임대와 같아요."},{term:"에이전트",definition:"스스로 판단하고 여러 단계를 실행할 수 있는 자율적 AI 시스템.",analogy:"🤖 지시만 하면 알아서 일을 처리하는 유능한 인턴과 같아요."},{term:"RAG",definition:"Retrieval-Augmented Generation. 외부 문서를 검색해서 답변에 활용하는 기술.",analogy:"📖 시험 때 교과서를 참고하며 답을 쓰는 것과 같아요."},{term:"임베딩",definition:"텍스트를 숫자 벡터로 변환해 의미적 유사성을 계산할 수 있게 하는 기술.",analogy:"🗺️ 단어마다 지도 위 좌표를 부여해 가까운 의미끼리 모이게 하는 것과 같아요."},{term:"API",definition:"Application Programming Interface. 프로그램끼리 소통하는 표준 통로.",analogy:"🍽️ 식당의 창구와 같아요 — 주문(요청)을 넣으면 음식(결과)이 나와요."},{term:"멀티모달",definition:"텍스트, 이미지, 음성 등 여러 형태의 데이터를 함께 이해하고 처리하는 AI 능력.",analogy:"👁️ 글도 읽고, 그림도 보고, 소리도 듣는 다재다능한 비서와 같아요."}]),m=t(0),g=t(!1),p=t(new Set),b=t(new Set),k=t(!1),c=t(!1),y=t(""),_=t(!1);[...Array(20).keys()];const l=u(()=>f.value[m.value]),i=u(()=>f.value.length),A=u(()=>`${m.value+1} / ${i.value}`),r=u(()=>p.value.size),h=u(()=>b.value.size);function C(){const s=[...f.value];for(let a=s.length-1;a>0;a--){const v=Math.floor(Math.random()*(a+1));[s[a],s[v]]=[s[v],s[a]]}f.value=s,m.value=0,g.value=!1,_.value=!1,y.value="",p.value=new Set,b.value=new Set,k.value=!1}function w(){c.value=!c.value,g.value=!1,_.value=!1,y.value=""}return(s,a)=>(o(),d("div",null,[a[4]||(a[4]=n("h1",{id:"용어-플래시카드",tabindex:"-1"},[x("용어 플래시카드 "),n("a",{class:"header-anchor",href:"#용어-플래시카드","aria-label":'Permalink to "용어 플래시카드"'},"​")],-1)),a[5]||(a[5]=n("blockquote",null,[n("p",null,"카드를 뒤집어 AI 용어를 재미있게 배워보세요! 20개 핵심 용어를 마스터하세요.")],-1)),n("div",P,[n("div",z,[n("button",{class:I(["mode-btn",{active:!c.value}]),onClick:a[0]||(a[0]=v=>c.value&&w())}," 📖 학습 모드 ",2),n("button",{class:I(["mode-btn",{active:c.value}]),onClick:a[1]||(a[1]=v=>!c.value&&w())}," ✍️ 테스트 모드 ",2)]),k.value?(o(),d("div",R,[a[3]||(a[3]=n("h2",null,"🎉 학습 완료!",-1)),n("div",$,[n("div",j,[n("span",D,e(r.value),1),n("span",G,"/ "+e(i.value)+" 알고 있음 ✅",1)]),n("div",L,[n("span",N,e(h.value),1),n("span",O,"/ "+e(i.value)+" 학습 필요 📘",1)])]),n("div",B,[n("div",{class:"bar-fill",style:M({width:r.value/i.value*100+"%"})},null,4)]),r.value===i.value?(o(),d("p",F,"🏆 완벽합니다! 모든 용어를 알고 있어요!")):r.value>=i.value*.8?(o(),d("p",T,"👏 훌륭해요! 거의 다 마스터했어요!")):r.value>=i.value*.5?(o(),d("p",E,"💪 좋아요! 조금 더 복습하면 완벽해질 거예요.")):(o(),d("p",U,"📚 꾸준히 학습하면 금방 익숙해질 거예요!")),n("pre",null,[n("code",null,`<div v-if="unknownCount > 0" class="review-list">
  <h3>📘 복습이 필요한 용어</h3>
  <ul>
    <li v-for="card in cards.filter(c => unknownCards.has(c.term))" :key="card.term">
      <strong>`+e(s.card.term)+"</strong> — "+e(s.card.definition.split(".")[0])+`.
    </li>
  </ul>
</div>

<div class="summary-actions">
  <button class="action-btn restart" @click="restart()">🔄 다시 시작</button>
  <button class="action-btn shuffle" @click="shuffleDeck()">🔀 섞어서 다시</button>
</div>
`,1)])])):(o(),d("div",V,[n("div",q,[n("span",J,e(A.value),1),n("button",{class:"shuffle-btn",onClick:a[2]||(a[2]=v=>C())},"🔀 섞기")]),n("pre",null,[n("code",null,`<div class="score-row">
  <span class="score known-score">✅ `+e(r.value)+`</span>
  <span class="score unknown-score">📘 `+e(h.value)+`</span>
</div>

<!-- 학습 모드 카드 -->
<div v-if="!isTestMode" class="card-scene" @click="flipCard()">
  <div :class="['card', { flipped: isFlipped }]">
    <div class="card-face card-front">
      <div class="card-label">용어</div>
      <div class="card-term">`+e(l.value.term)+`</div>
      <div class="card-hint">클릭하여 뒤집기</div>
    </div>
    <div class="card-face card-back">
      <div class="card-label">설명</div>
      <div class="card-definition">`+e(l.value.definition)+`</div>
      <div class="card-analogy">`+e(l.value.analogy)+`</div>
    </div>
  </div>
</div>

<!-- 테스트 모드 카드 -->
<div v-else class="card-scene test-mode-scene">
  <div :class="['card', { flipped: guessRevealed }]">
    <div class="card-face card-front test-front">
      <div class="card-label">이 용어는?</div>
      <div class="card-definition test-def">`+e(l.value.definition)+`</div>
      <div class="card-analogy test-analogy">`+e(l.value.analogy)+`</div>
    </div>
    <div class="card-face card-back test-back">
      <div class="card-label">정답</div>
      <div class="card-term">`+e(l.value.term)+`</div>
      <div class="card-definition" style="font-size: 0.85em; margin-top: 8px;">`+e(l.value.definition)+`</div>
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
`,1)])]))])]))}}),Y=S(H,[["__scopeId","data-v-3fdba25c"]]);export{X as __pageData,Y as default};
