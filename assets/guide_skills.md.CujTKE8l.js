import{_ as i,o as a,c as n,a2 as l}from"./chunks/framework.DS_HIvHc.js";const E=JSON.parse('{"title":"스킬 만들기 (Skill Creator)","description":"","frontmatter":{},"headers":[],"relativePath":"guide/skills.md","filePath":"guide/skills.md","lastUpdated":1773714559000}'),t={name:"guide/skills.md"};function h(k,s,p,e,d,o){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="스킬-만들기-skill-creator" tabindex="-1">스킬 만들기 (Skill Creator) <a class="header-anchor" href="#스킬-만들기-skill-creator" aria-label="Permalink to &quot;스킬 만들기 (Skill Creator)&quot;">​</a></h1><blockquote><p>반복되는 업무를 매번 설명하지 말고, 한 번 만들어두면 <code>/슬래시 명령어</code> 한 줄로 끝. Claude를 나만의 업무 전문가로 훈련시키는 법.</p></blockquote><h2 id="스킬이란" tabindex="-1">스킬이란? <a class="header-anchor" href="#스킬이란" aria-label="Permalink to &quot;스킬이란?&quot;">​</a></h2><p>**스킬(Skill)**은 Claude에게 <strong>특정 업무를 처리하는 방법</strong>을 미리 알려주는 재사용 가능한 지침서입니다.</p><ul><li>스킬 없이 = 매번 &quot;이렇게 저렇게 해줘&quot;라고 길게 설명</li><li>스킬 설정 후 = <strong><code>/weekly-report</code> 한 줄이면 끝</strong></li></ul><p>쉽게 말하면, 자주 쓰는 프롬프트를 Claude가 알아서 기억하고 실행하는 <strong>나만의 슬래시 명령어</strong>를 만드는 것입니다.</p><div class="info custom-block"><p class="custom-block-title">플러그인 vs 스킬</p><p><strong>플러그인</strong>은 Anthropic이 만든 공식 전문가 패키지이고, <strong>스킬</strong>은 내가 직접 만드는 맞춤형 업무 지침입니다. 플러그인이 &quot;기성복&quot;이라면 스킬은 &quot;맞춤 정장&quot;에 해당합니다.</p></div><h2 id="스킬의-작동-원리" tabindex="-1">스킬의 작동 원리 <a class="header-anchor" href="#스킬의-작동-원리" aria-label="Permalink to &quot;스킬의 작동 원리&quot;">​</a></h2><p>스킬은 3단계로 Claude에게 로딩됩니다:</p><table tabindex="0"><thead><tr><th>단계</th><th>로딩 내용</th><th>시점</th></tr></thead><tbody><tr><td>Stage 1</td><td>스킬 이름 + 설명 (YAML)</td><td>항상 로딩됨</td></tr><tr><td>Stage 2</td><td>본문 지침 (Markdown)</td><td>관련 대화일 때 자동 로딩</td></tr><tr><td>Stage 3</td><td>첨부 파일 (선택)</td><td>필요할 때만 로딩</td></tr></tbody></table><p>이 때문에 <strong><code>name</code>과 <code>description</code> 을 정확하게 쓰는 것이 핵심</strong>입니다. Claude가 &quot;이 대화에서 이 스킬을 쓸지 말지&quot;를 Stage 1의 이름과 설명만 보고 판단하기 때문입니다.</p><div class="tip custom-block"><p class="custom-block-title">꿀팁</p><p>설명(description)에 **&quot;언제 이 스킬을 사용해야 하는지&quot;**를 꼭 포함하세요. &quot;주간 보고서를 작성합니다&quot;보다 &quot;사용자가 주간 보고서, 위클리 리포트, 금주 실적 정리를 요청할 때 사용합니다&quot;가 훨씬 잘 인식됩니다.</p></div><h2 id="스킬-만드는-3가지-방법" tabindex="-1">스킬 만드는 3가지 방법 <a class="header-anchor" href="#스킬-만드는-3가지-방법" aria-label="Permalink to &quot;스킬 만드는 3가지 방법&quot;">​</a></h2><h3 id="방법-1-skill-creator-사용-추천-⭐⭐⭐" tabindex="-1">방법 1: <code>/skill-creator</code> 사용 (추천 ⭐⭐⭐) <a class="header-anchor" href="#방법-1-skill-creator-사용-추천-⭐⭐⭐" aria-label="Permalink to &quot;방법 1: \`/skill-creator\` 사용 (추천 ⭐⭐⭐)&quot;">​</a></h3><p>가장 쉬운 방법입니다. 대화창에 <code>/skill-creator</code>를 입력하면 Claude가 인터뷰 형식으로 안내해줍니다.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/skill-creator</span></span>
<span class="line"><span></span></span>
<span class="line"><span>주간 업무 보고서를 자동으로 만들어주는 스킬을 만들고 싶어.</span></span>
<span class="line"><span>매주 금요일에 이번 주 한 일, 다음 주 계획, 이슈사항을 정리하는 양식이야.</span></span></code></pre></div><p>Claude가 알아서:</p><ol><li>용도를 물어봄</li><li>초안을 작성해줌</li><li>테스트 프롬프트를 생성해줌</li><li>수정 사항을 반영해줌</li></ol><h3 id="방법-2-ui에서-직접-작성" tabindex="-1">방법 2: UI에서 직접 작성 <a class="header-anchor" href="#방법-2-ui에서-직접-작성" aria-label="Permalink to &quot;방법 2: UI에서 직접 작성&quot;">​</a></h3><ol><li>좌측 사이드바 → <strong>Customize</strong> → <strong>Skills</strong></li><li><strong>&quot;+&quot;</strong> 버튼 클릭 → <strong>&quot;Create a new skill&quot;</strong></li><li>아래의 SKILL.md 형식에 맞춰 작성</li><li>저장</li></ol><h3 id="방법-3-zip-파일-업로드" tabindex="-1">방법 3: ZIP 파일 업로드 <a class="header-anchor" href="#방법-3-zip-파일-업로드" aria-label="Permalink to &quot;방법 3: ZIP 파일 업로드&quot;">​</a></h3><p>SKILL.md 파일(+ 참고 파일)을 ZIP으로 묶어서 업로드합니다.</p><ol><li>좌측 사이드바 → <strong>Customize</strong> → <strong>Skills</strong></li><li><strong>&quot;+&quot;</strong> 버튼 클릭 → <strong>&quot;Upload a skill&quot;</strong></li><li>ZIP 파일 선택</li></ol><div class="warning custom-block"><p class="custom-block-title">참고</p><p>스킬은 인터넷 접속이나 외부 API 호출이 불가능합니다. 모든 지침과 참고 자료는 스킬 내부에 포함되어야 합니다.</p></div><h2 id="skill-md-형식-핵심" tabindex="-1">SKILL.md 형식 (핵심!) <a class="header-anchor" href="#skill-md-형식-핵심" aria-label="Permalink to &quot;SKILL.md 형식 (핵심!)&quot;">​</a></h2><p>스킬이 제대로 인식되려면 <strong>정확한 형식</strong>을 지켜야 합니다. 파일 이름은 반드시 <code>SKILL.md</code>여야 합니다.</p><h3 id="기본-구조" tabindex="-1">기본 구조 <a class="header-anchor" href="#기본-구조" aria-label="Permalink to &quot;기본 구조&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: skill-name-here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 이 스킬이 하는 일과 언제 사용되어야 하는지를 설명합니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">여기에 Claude가 따라야 할 구체적인 지침을 마크다운으로 작성합니다.</span></span></code></pre></div><h3 id="yaml-프론트매터-규칙" tabindex="-1">YAML 프론트매터 규칙 <a class="header-anchor" href="#yaml-프론트매터-규칙" aria-label="Permalink to &quot;YAML 프론트매터 규칙&quot;">​</a></h3><table tabindex="0"><thead><tr><th>필드</th><th>필수</th><th>규칙</th></tr></thead><tbody><tr><td><code>name</code></td><td>✅</td><td>최대 64자. <strong>소문자, 숫자, 하이픈(<code>-</code>)만</strong> 사용 가능. <code>anthropic</code>, <code>claude</code> 포함 불가. 이 이름이 <code>/슬래시-명령어</code>가 됨</td></tr><tr><td><code>description</code></td><td>✅</td><td>최대 1024자. 스킬의 기능 + 트리거 조건을 3인칭으로 작성</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">이름 규칙을 지키지 않으면 인식 안 됨</p><p><code>name: Weekly Report</code> ❌ (대문자, 공백) <code>name: weekly-report</code> ✅ (소문자, 하이픈) <code>name: claude-helper</code> ❌ (&quot;claude&quot; 포함) <code>name: team-helper</code> ✅</p></div><h3 id="좋은-description-vs-나쁜-description" tabindex="-1">좋은 description vs 나쁜 description <a class="header-anchor" href="#좋은-description-vs-나쁜-description" aria-label="Permalink to &quot;좋은 description vs 나쁜 description&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ❌ 나쁜 예 — 너무 짧고 트리거 조건 없음</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: meeting-notes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 회의록을 정리합니다</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ✅ 좋은 예 — 기능 + 트리거 조건 명시</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: meeting-notes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 회의 내용을 구조화된 회의록으로 정리합니다. 사용자가 회의 노트 정리, 미팅 기록, 회의 요약을 요청하거나 회의 녹취록/메모를 붙여넣을 때 자동으로 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span></code></pre></div><h2 id="실전-스킬-예제-10선" tabindex="-1">실전 스킬 예제 10선 <a class="header-anchor" href="#실전-스킬-예제-10선" aria-label="Permalink to &quot;실전 스킬 예제 10선&quot;">​</a></h2><h3 id="_1-📝-주간-업무-보고서" tabindex="-1">1. 📝 주간 업무 보고서 <a class="header-anchor" href="#_1-📝-주간-업무-보고서" aria-label="Permalink to &quot;1. 📝 주간 업무 보고서&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: weekly-report</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 주간 업무 보고서를 회사 양식에 맞춰 작성합니다. 사용자가 주간 보고, 위클리 리포트, 금주 실적 정리, 이번 주 보고서를 요청할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 주간 업무 보고서 작성 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">아래 양식을 반드시 따릅니다:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">팀명</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">] 주간 업무 보고서</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**보고 기간**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: YYYY.MM.DD ~ YYYY.MM.DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**작성자**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">이름</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] | </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**작성일**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: YYYY.MM.DD</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 1. 금주 실적</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 업무 항목 | 진행 상태 | 완료율 | 비고 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-----------|----------|--------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| (내용) | 완료/진행중/지연 | 00% | (특이사항) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 2. 주요 성과</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (구체적 수치와 함께 기술)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 3. 이슈 &amp; 리스크</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 이슈 | 영향도 | 조치 계획 | 해결 예정일 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|----------|------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| (내용) | 상/중/하 | (내용) | YYYY.MM.DD |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 4. 차주 계획</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 업무 항목 | 우선순위 | 예상 완료일 | 담당자 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-----------|---------|------------|--------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| (내용) | 상/중/하 | YYYY.MM.DD | (이름) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 실적은 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**정량적 수치**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">를 반드시 포함할 것 (예: &quot;매출 15% 증가&quot;, &quot;처리 건수 120건&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 이슈는 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**원인 → 영향 → 대책**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 순서로 기술</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 차주 계획은 SMART 기준으로 작성 (구체적, 측정 가능, 달성 가능, 관련성, 기한)</span></span></code></pre></div><h3 id="_2-📧-비즈니스-이메일-작성" tabindex="-1">2. 📧 비즈니스 이메일 작성 <a class="header-anchor" href="#_2-📧-비즈니스-이메일-작성" aria-label="Permalink to &quot;2. 📧 비즈니스 이메일 작성&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: biz-email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 비즈니스 이메일을 작성합니다. 사용자가 이메일 작성, 메일 보내기, 거래처 연락, 회신 작성, 공식 메일을 요청할 때 활성화됩니다. 한국어 비즈니스 이메일 관례를 따릅니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 비즈니스 이메일 작성 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 기본 구조</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **인사**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 수신자 직급+성함 포함 (예: &quot;김팀장님, 안녕하세요.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **소속 밝히기**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 첫 이메일이면 소속과 이름 소개</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **본문**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 핵심 용건을 첫 문장에 배치</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **요청 사항**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 명확한 액션 아이템 + 기한</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **마무리**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 감사 인사 + 서명</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 톤 가이드</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 기본 톤: 정중하고 간결 (존댓말, ~합니다/~입니다 체)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 사내 메일: 약간 캐주얼 OK (&quot;확인 부탁드립니다&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 사외 메일: 격식체 유지 (&quot;검토하여 주시면 감사하겠습니다&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 클레임/요청: 단호하되 공손하게</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 상황별 템플릿</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 미팅 요청</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">제목: [미팅 요청] {주제} 관련 논의</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 보고/공유</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">제목: [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">보고</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {주제} 진행 현황 공유드립니다</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 요청/의뢰</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">제목: [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">요청</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {주제} 협조 부탁드립니다</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 감사/회신</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">제목: [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">감사</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] {주제} 관련 회신드립니다</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 한 이메일에 용건은 최대 2개까지</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3줄 이상 나열 시 번호 목록 사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 첨부파일 언급 시 파일명 명시</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 긴급도 표시: 제목 앞에 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">긴급</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">참고</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">공유</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 등 태그 사용</span></span></code></pre></div><h3 id="_3-🔍-회의록-정리" tabindex="-1">3. 🔍 회의록 정리 <a class="header-anchor" href="#_3-🔍-회의록-정리" aria-label="Permalink to &quot;3. 🔍 회의록 정리&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: meeting-notes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 회의 내용을 구조화된 회의록으로 정리합니다. 사용자가 회의 노트 정리, 미팅 기록, 회의 요약, 회의록 작성을 요청하거나 회의 메모나 녹취록을 붙여넣을 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 회의록 정리 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 회의록</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 항목 | 내용 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 회의명 | (주제) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 일시 | YYYY.MM.DD (요일) HH:MM ~ HH:MM |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 장소 | (장소/온라인 링크) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 참석자 | (이름, 직급) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 작성자 | (이름) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 안건 및 논의 내용</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**안건 1: (제목)**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 발언 요약: (핵심 내용 bullet point)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 결정 사항: (합의된 내용)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 미결 사항: (추가 논의 필요)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### Action Items</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| # | 할 일 | 담당자 | 기한 | 우선순위 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|---|-------|--------|------|---------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 1 | (내용) | (이름) | MM.DD | 상/중/하 |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 다음 회의</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 일시: YYYY.MM.DD (요일) HH:MM</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 안건: (예정 주제)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 정리 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 발언 내용은 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**핵심 논점**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 위주로 요약 (사적 대화, 잡담 제외)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 결정 사항은 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**굵게**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 표시</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 수치, 날짜, 금액은 정확하게 기록</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 모호한 내용은 [확인 필요]로 표시</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Action Item에는 반드시 담당자와 기한 포함</span></span></code></pre></div><h3 id="_4-📊-데이터-요약-리포트" tabindex="-1">4. 📊 데이터 요약 리포트 <a class="header-anchor" href="#_4-📊-데이터-요약-리포트" aria-label="Permalink to &quot;4. 📊 데이터 요약 리포트&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: data-summary</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 데이터를 분석하여 경영진용 요약 리포트를 작성합니다. 사용자가 데이터 분석, 수치 정리, 실적 요약, 대시보드 리포트를 요청하거나 CSV/표 데이터를 붙여넣을 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 데이터 요약 리포트 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 구조</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Executive Summary (1페이지 요약)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **한줄 요약**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 가장 중요한 인사이트 1문장</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **핵심 지표**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: KPI 3~5개를 표로 정리 (현재값, 전기 대비, 목표 대비)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **주요 발견**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: bullet point 3~5개</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 상세 분석</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **트렌드 분석**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 시계열 변화 패턴</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **비교 분석**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 기간별, 부서별, 제품별 비교</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **이상치 탐지**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 눈에 띄는 변화와 원인 추정</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 시사점 &amp; 제안</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> So What?: 이 데이터가 의미하는 것</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Now What?: 구체적 액션 제안</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 모든 수치에는 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**단위**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 명시 (원, %, 건, 명)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 변화량은 </span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**절대값 + 비율**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 동시 표기 (예: &quot;+1,200만원 (15% ↑)&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 긍정 지표는 ↑ / 부정 지표는 ↓ 화살표 사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 표와 차트 설명을 반드시 포함</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 전문 용어 사용 시 괄호로 설명 추가</span></span></code></pre></div><h3 id="_5-✅-기획서-검토" tabindex="-1">5. ✅ 기획서 검토 <a class="header-anchor" href="#_5-✅-기획서-검토" aria-label="Permalink to &quot;5. ✅ 기획서 검토&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: doc-review</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 기획서, 제안서, 보고서를 체계적으로 검토하고 피드백을 제공합니다. 사용자가 문서 검토, 기획서 피드백, 제안서 리뷰, 보고서 점검을 요청하거나 문서를 붙여넣으며 의견을 구할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 문서 검토 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 검토 프레임워크</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. 구조 검토</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 논리 흐름이 자연스러운가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 목차/섹션 구성이 적절한가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 누락된 필수 섹션이 없는가?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. 내용 검토</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 핵심 메시지가 명확한가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 근거/데이터가 충분한가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 주장과 근거가 논리적으로 연결되는가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 모순되는 내용이 없는가?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. 표현 검토</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 대상 독자에 맞는 톤인가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 불필요한 전문용어나 약어가 없는가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 문장이 간결한가? (한 문장 60자 이내 권장)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 4. 실행 가능성 검토</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 일정/예산이 현실적인가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 담당자/역할이 명확한가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 리스크와 대안이 있는가?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 종합 평가</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 항목 | 점수 (5점) | 코멘트 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|-----------|--------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 구조 | ⭐⭐⭐⭐ | (한줄 평가) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 내용 | ⭐⭐⭐ | (한줄 평가) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 표현 | ⭐⭐⭐⭐⭐ | (한줄 평가) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 실행 가능성 | ⭐⭐⭐ | (한줄 평가) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 잘된 점 (Keep)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (구체적 칭찬)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 개선 필요 (Improve)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (구체적 수정 제안 + 수정 예시)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 추가 제안 (Try)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (선택적 개선 아이디어)</span></span></code></pre></div><h3 id="_6-📋-일일-업무-정리" tabindex="-1">6. 📋 일일 업무 정리 <a class="header-anchor" href="#_6-📋-일일-업무-정리" aria-label="Permalink to &quot;6. 📋 일일 업무 정리&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: daily-wrap</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 하루 업무를 정리하고 내일 할 일을 계획합니다. 사용자가 오늘 업무 정리, 일일 보고, 퇴근 전 정리, 하루 마무리, 내일 계획을 요청할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 일일 업무 정리 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 📅 일일 업무 정리 — YYYY.MM.DD (요일)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### ✅ 오늘 완료한 업무</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 업무 | 소요 시간 | 결과물 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|----------|--------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| (내용) | 0h | (산출물/링크) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 🔄 진행 중인 업무</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 업무 | 진행률 | 다음 스텝 | 예상 완료일 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|--------|----------|------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| (내용) | 00% | (할 일) | MM.DD |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### ⚠️ 블로커/이슈</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (해결해야 할 문제와 필요한 도움)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 📌 내일 우선순위 TOP 3</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🔴 (긴급) —</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🟡 (중요) —</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 🟢 (일반) —</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 💡 메모/아이디어</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (업무 중 떠오른 생각, 개선점)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 사용자가 간단히 &quot;오늘 이거 저거 했어&quot;라고 말하면 위 양식으로 정리</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 소요 시간은 사용자가 안 알려주면 생략</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 블로커가 없으면 해당 섹션 생략</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 내일 계획은 항상 우선순위순으로 정렬</span></span></code></pre></div><h3 id="_7-💼-거래처-이메일-번역" tabindex="-1">7. 💼 거래처 이메일 번역 <a class="header-anchor" href="#_7-💼-거래처-이메일-번역" aria-label="Permalink to &quot;7. 💼 거래처 이메일 번역&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: biz-translate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 비즈니스 이메일과 문서를 한영/영한 번역합니다. 사용자가 이메일 번역, 영문 메일 작성, 한영 번역, 거래처 서신 번역을 요청하거나 외국어 이메일을 붙여넣을 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 비즈니스 번역 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 번역 원칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **의역 우선**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 직역보다 비즈니스 맥락에 맞는 자연스러운 표현 사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **격식 유지**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 비즈니스 톤 유지 (구어체 → 문어체 변환)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;"> **용어 일관성**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 같은 용어는 문서 전체에서 동일하게 번역</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 한→영 변환 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;검토 부탁드립니다&quot; → &quot;We would appreciate your review&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;확인 부탁드립니다&quot; → &quot;Could you please confirm&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;~건으로 연락드립니다&quot; → &quot;I am writing to you regarding ~&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;감사합니다&quot; (메일 끝) → &quot;Thank you for your time and consideration&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 직급: 부장 → Senior Manager / Director, 차장 → Deputy Manager, 과장 → Manager, 대리 → Assistant Manager</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 영→한 변환 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;Please find attached&quot; → &quot;첨부 파일 확인 부탁드립니다&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;I hope this email finds you well&quot; → (생략하거나 &quot;안녕하세요&quot;로 대체)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;Going forward&quot; → &quot;향후&quot;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;As per our discussion&quot; → &quot;논의하신 바와 같이&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 형식</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 번역문 (전체)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 주요 용어 대조표 (원문 ↔ 번역)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 톤/뉘앙스 참고 사항 (필요 시)</span></span></code></pre></div><h3 id="_8-🎯-okr-kpi-작성-도우미" tabindex="-1">8. 🎯 OKR/KPI 작성 도우미 <a class="header-anchor" href="#_8-🎯-okr-kpi-작성-도우미" aria-label="Permalink to &quot;8. 🎯 OKR/KPI 작성 도우미&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: okr-helper</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: OKR과 KPI를 작성하고 점검합니다. 사용자가 OKR 작성, KPI 설정, 목표 수립, 분기 목표, 성과 지표를 요청할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># OKR/KPI 작성 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## OKR 작성 프레임워크</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Objective (목표) 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 정성적이고 영감을 주는 문장</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;~를 달성한다&quot;가 아닌 &quot;~를 혁신한다&quot;, &quot;~를 확립한다&quot; 등 동사 사용</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 한 분기에 3~5개</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Key Results (핵심 결과) 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 반드시 측정 가능한 수치 포함</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Objective당 2~4개</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 형식: &quot;[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">지표</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]를 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">현재값</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]에서 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">목표값</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]으로 [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">동사</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]한다&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### Q0 OKR — [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">팀명</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**O1: (목표)**</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KR1: (지표)를 (현재)에서 (목표)로 향상한다</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KR1: (지표)를 (현재)에서 (목표)로 향상한다</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KR3: (지표)를 (현재)에서 (목표)로 향상한다</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**진행률 체크 (월별)**</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| Key Result | 1월 | 2월 | 3월 | 달성률 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-----------|-----|-----|-----|--------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| KR1 | | | | 0% |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 점검 질문</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">OKR을 작성한 후 아래 체크리스트로 품질을 검증합니다:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] Objective가 팀 미션과 연결되는가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] Key Result가 숫자로 측정 가능한가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 70% 달성이 도전적이면서 현실적인가?</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ ] 팀원 모두가 이해할 수 있는 표현인가?</span></span></code></pre></div><h3 id="_9-📑-사내-공지-작성" tabindex="-1">9. 📑 사내 공지 작성 <a class="header-anchor" href="#_9-📑-사내-공지-작성" aria-label="Permalink to &quot;9. 📑 사내 공지 작성&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: announcement</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 사내 공지사항을 작성합니다. 사용자가 공지 작성, 사내 안내문, 전사 메일, 부서 공지, 인사 발령 공지를 요청할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 사내 공지 작성 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">분류</span><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">] 제목</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**게시일**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: YYYY.MM.DD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**작성 부서**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (부서명)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**대상**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 전사 / 해당 부서 / 특정 직급</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(본문: 배경 → 핵심 내용 → 세부사항 → 문의처 순서)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-weight:bold;--shiki-dark:#E1E4E8;--shiki-dark-font-weight:bold;">**문의**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (담당자명) (직급) | (이메일) | 내선 (번호)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 분류 태그</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">인사</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 인사 발령, 조직 변경</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">총무</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 시설, 복리후생, 사무환경</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">IT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 시스템 점검, 보안 공지</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">경영</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 경영 방침, 전략 공유</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">교육</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 교육/세미나 안내</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">행사</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] 사내 이벤트, 워크숍</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 작성 규칙</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 첫 문장에 핵심 내용 배치 (&quot;~를 아래와 같이 안내드립니다&quot;)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 날짜/시간/장소 등 기본 정보는 반드시 표로 정리</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 변경 사항이 있으면 변경 전/후 비교표 포함</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 행동 요청이 있으면 기한과 방법을 명시</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 끝에 반드시 문의처 명시</span></span></code></pre></div><h3 id="_10-🧹-프롬프트-다듬기" tabindex="-1">10. 🧹 프롬프트 다듬기 <a class="header-anchor" href="#_10-🧹-프롬프트-다듬기" aria-label="Permalink to &quot;10. 🧹 프롬프트 다듬기&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name: prompt-refiner</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 사용자의 프롬프트를 더 효과적으로 개선합니다. 사용자가 프롬프트 개선, 질문 다듬기, 더 좋은 프롬프트로 바꿔줘, 이 프롬프트 수정해줘를 요청할 때 활성화됩니다.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 프롬프트 개선 지침</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 개선 프레임워크</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">사용자의 원본 프롬프트를 아래 5가지 기준으로 분석하고 개선합니다:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 1. 역할 (Role)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 원본에 역할 지정이 없으면 적절한 역할 추가</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 예: &quot;당신은 10년 경력의 마케팅 전략가입니다&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 2. 맥락 (Context)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 배경 정보가 부족하면 어떤 정보를 추가해야 하는지 제안</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 대상 독자, 목적, 제약 조건 등</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 3. 구체성 (Specificity)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 모호한 표현을 구체적으로 변환</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &quot;좋은 글&quot; → &quot;300자 내외의 LinkedIn 포스트&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 4. 출력 형식 (Format)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 원하는 결과물의 형식을 명시</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 표, 목록, 단락, JSON 등</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 5. 예시 (Examples)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 필요 시 Few-shot 예시 추가 제안</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 출력 양식</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 원본 프롬프트</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">&gt; (사용자가 준 프롬프트)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 분석</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 기준 | 현재 | 개선 포인트 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 역할 | ❌ 없음 | (제안) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 맥락 | ⚠️ 부족 | (제안) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 구체성 | ✅ 양호 | — |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 출력 형식 | ❌ 없음 | (제안) |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 예시 | ❌ 없음 | (제안) |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">#### 개선된 프롬프트</span></span></code></pre></div><p>(개선된 프롬프트 전문)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 달라지는 점</span></span>
<span class="line"><span>- (개선 전후 차이 설명)</span></span></code></pre></div><h2 id="나만의-스킬-아이디어" tabindex="-1">나만의 스킬 아이디어 <a class="header-anchor" href="#나만의-스킬-아이디어" aria-label="Permalink to &quot;나만의 스킬 아이디어&quot;">​</a></h2><p>위 예제를 참고해서 자기 업무에 맞는 스킬을 만들어보세요:</p><table tabindex="0"><thead><tr><th>직군</th><th>스킬 아이디어</th><th>name 예시</th></tr></thead><tbody><tr><td>인사/HR</td><td>면접 질문 생성기</td><td><code>interview-questions</code></td></tr><tr><td>인사/HR</td><td>채용 공고 작성</td><td><code>job-posting</code></td></tr><tr><td>마케팅</td><td>SNS 콘텐츠 생성</td><td><code>social-content</code></td></tr><tr><td>마케팅</td><td>보도자료 작성</td><td><code>press-release</code></td></tr><tr><td>영업</td><td>제안서 초안</td><td><code>proposal-draft</code></td></tr><tr><td>영업</td><td>고객 미팅 브리핑</td><td><code>client-briefing</code></td></tr><tr><td>재무</td><td>예산 검토 리포트</td><td><code>budget-review</code></td></tr><tr><td>재무</td><td>비용 분석 요약</td><td><code>cost-analysis</code></td></tr><tr><td>기획</td><td>시장 조사 리포트</td><td><code>market-research</code></td></tr><tr><td>기획</td><td>경쟁사 분석</td><td><code>competitor-analysis</code></td></tr><tr><td>CS</td><td>고객 응대 템플릿</td><td><code>cs-response</code></td></tr><tr><td>CS</td><td>불만 에스컬레이션</td><td><code>escalation-handler</code></td></tr><tr><td>법무</td><td>계약서 체크리스트</td><td><code>contract-checklist</code></td></tr><tr><td>개발</td><td>코드 리뷰 체크리스트</td><td><code>code-review</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">/skill-creator로 시작하세요</p><p>아이디어만 있으면 됩니다. 대화창에 <code>/skill-creator</code>를 입력하고 &quot;면접 질문을 자동으로 만들어주는 스킬&quot;처럼 설명하면 Claude가 SKILL.md를 작성해줍니다.</p></div><h2 id="스킬-잘-만드는-팁" tabindex="-1">스킬 잘 만드는 팁 <a class="header-anchor" href="#스킬-잘-만드는-팁" aria-label="Permalink to &quot;스킬 잘 만드는 팁&quot;">​</a></h2><h3 id="_1-description을-풍성하게-쓰세요" tabindex="-1">1. description을 풍성하게 쓰세요 <a class="header-anchor" href="#_1-description을-풍성하게-쓰세요" aria-label="Permalink to &quot;1. description을 풍성하게 쓰세요&quot;">​</a></h3><p>Claude는 description만 보고 스킬 활성화 여부를 판단합니다. 사용자가 쓸 수 있는 다양한 표현을 나열하세요.</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ❌</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 이메일을 씁니다</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ✅</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description: 비즈니스 이메일을 작성합니다. 사용자가 이메일 작성, 메일 보내기, 거래처 연락, 회신 작성, 공식 메일, 영문 이메일을 요청할 때 활성화됩니다.</span></span></code></pre></div><h3 id="_2-출력-양식을-구체적으로-지정하세요" tabindex="-1">2. 출력 양식을 구체적으로 지정하세요 <a class="header-anchor" href="#_2-출력-양식을-구체적으로-지정하세요" aria-label="Permalink to &quot;2. 출력 양식을 구체적으로 지정하세요&quot;">​</a></h3><p>&quot;잘 정리해줘&quot;보다 표/양식 템플릿을 직접 넣는 것이 훨씬 일관된 결과를 줍니다.</p><h3 id="_3-규칙은-해라-하지-마라-로-명확하게" tabindex="-1">3. 규칙은 &quot;해라/하지 마라&quot;로 명확하게 <a class="header-anchor" href="#_3-규칙은-해라-하지-마라-로-명확하게" aria-label="Permalink to &quot;3. 규칙은 &quot;해라/하지 마라&quot;로 명확하게&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ❌ 모호함</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">적절한 톤으로 작성해주세요</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># ✅ 명확함</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 존댓말(~합니다/~입니다)을 사용할 것</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 이모지는 사용하지 말 것</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 한 문장은 60자를 넘기지 말 것</span></span></code></pre></div><h3 id="_4-실제-업무-양식을-그대로-넣으세요" tabindex="-1">4. 실제 업무 양식을 그대로 넣으세요 <a class="header-anchor" href="#_4-실제-업무-양식을-그대로-넣으세요" aria-label="Permalink to &quot;4. 실제 업무 양식을 그대로 넣으세요&quot;">​</a></h3><p>회사에서 쓰는 보고서 양식, 이메일 서명, 공지 템플릿이 있다면 스킬에 그대로 포함하세요. Claude가 그 양식을 정확히 따릅니다.</p><h3 id="_5-테스트하고-다듬으세요" tabindex="-1">5. 테스트하고 다듬으세요 <a class="header-anchor" href="#_5-테스트하고-다듬으세요" aria-label="Permalink to &quot;5. 테스트하고 다듬으세요&quot;">​</a></h3><p>스킬을 만든 후 다양한 표현으로 테스트해보세요:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>주간 보고 작성해줘</span></span>
<span class="line"><span>이번 주 업무 정리해줘</span></span>
<span class="line"><span>위클리 리포트 만들어줘</span></span>
<span class="line"><span>금요일 보고서 써줘</span></span></code></pre></div><p>모두 같은 스킬이 활성화되어야 합니다. 안 되는 표현이 있으면 description에 추가하세요.</p><div class="warning custom-block"><p class="custom-block-title">스킬 개수 팁</p><p>너무 많은 스킬을 만들면 오히려 Claude가 혼란스러워할 수 있습니다. <strong>자주 쓰는 업무 5~10개</strong>에 집중하는 것을 권장합니다.</p></div>`,75)])])}const g=i(t,[["render",h]]);export{E as __pageData,g as default};
