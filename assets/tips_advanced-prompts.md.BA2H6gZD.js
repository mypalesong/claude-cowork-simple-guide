import{_ as a,o as n,c as p,a2 as t}from"./chunks/framework.DS_HIvHc.js";const u=JSON.parse('{"title":"고급 프롬프트 패턴","description":"","frontmatter":{},"headers":[],"relativePath":"tips/advanced-prompts.md","filePath":"tips/advanced-prompts.md","lastUpdated":1773902007000}'),e={name:"tips/advanced-prompts.md"};function l(i,s,o,c,d,r){return n(),p("div",null,[...s[0]||(s[0]=[t(`<h1 id="고급-프롬프트-패턴" tabindex="-1">고급 프롬프트 패턴 <a class="header-anchor" href="#고급-프롬프트-패턴" aria-label="Permalink to &quot;고급 프롬프트 패턴&quot;">​</a></h1><blockquote><p>기본을 넘어서 프로처럼! 상황에 맞는 고급 프롬프트 패턴을 마스터하세요.</p></blockquote><p>업무에서 Claude를 제대로 활용하려면 단순한 질문을 넘어 <strong>패턴화된 프롬프트</strong>를 사용해야 합니다. 아래 12가지 패턴을 익히면 결과물의 품질이 확연히 달라집니다.</p><h2 id="패턴-요약" tabindex="-1">패턴 요약 <a class="header-anchor" href="#패턴-요약" aria-label="Permalink to &quot;패턴 요약&quot;">​</a></h2><table tabindex="0"><thead><tr><th>#</th><th>패턴 이름</th><th>핵심 효과</th><th>난이도</th></tr></thead><tbody><tr><td>1</td><td>역할 부여</td><td>전문가 관점 확보</td><td>⭐</td></tr><tr><td>2</td><td>단계적 사고</td><td>논리적 분석 강화</td><td>⭐⭐</td></tr><tr><td>3</td><td>소수 예시</td><td>스타일/형식 통일</td><td>⭐</td></tr><tr><td>4</td><td>제약 조건</td><td>규격에 맞는 결과물</td><td>⭐</td></tr><tr><td>5</td><td>비교 분석</td><td>객관적 판단 근거</td><td>⭐⭐</td></tr><tr><td>6</td><td>반복 개선</td><td>점진적 품질 향상</td><td>⭐⭐</td></tr><tr><td>7</td><td>다중 관점</td><td>균형 잡힌 분석</td><td>⭐⭐</td></tr><tr><td>8</td><td>역방향</td><td>프로세스 역추적</td><td>⭐⭐⭐</td></tr><tr><td>9</td><td>체크리스트</td><td>완성도 검증</td><td>⭐</td></tr><tr><td>10</td><td>MECE</td><td>체계적 분류</td><td>⭐⭐⭐</td></tr><tr><td>11</td><td>시나리오</td><td>리스크 대비</td><td>⭐⭐</td></tr><tr><td>12</td><td>메타 프롬프트</td><td>프롬프트 자동 설계</td><td>⭐⭐⭐</td></tr></tbody></table><hr><h2 id="_1-역할-부여-패턴-role-pattern" tabindex="-1">1. 역할 부여 패턴 (Role Pattern) <a class="header-anchor" href="#_1-역할-부여-패턴-role-pattern" aria-label="Permalink to &quot;1. 역할 부여 패턴 (Role Pattern)&quot;">​</a></h2><p><strong>공식:</strong> &quot;너는 10년차 [역할]이야. [관점]에서 [요청]해줘&quot;</p><p><strong>언제 사용:</strong> 특정 분야의 전문적 관점이 필요할 때. 역할을 부여하면 Claude가 해당 전문가의 사고방식, 용어, 우선순위를 반영합니다.</p><h3 id="실전-예시" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><p><strong>마케터 역할:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>너는 10년차 B2B 마케팅 전문가야.</span></span>
<span class="line"><span>우리 회사의 신규 SaaS 제품 런칭을 앞두고 있어.</span></span>
<span class="line"><span>타겟 고객(중소기업 대표)의 관점에서</span></span>
<span class="line"><span>초기 시장 진입 전략 3가지를 제안해줘.</span></span>
<span class="line"><span>각 전략에 예상 비용과 기대 효과를 포함해줘.</span></span></code></pre></div><p><strong>법무 역할:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>너는 10년차 기업 법무팀 변호사야.</span></span>
<span class="line"><span>아래 계약서 초안을 검토해줘.</span></span>
<span class="line"><span>우리 회사(갑) 입장에서 불리한 조항을 찾아서</span></span>
<span class="line"><span>리스크 수준(상/중/하)과 수정 제안을 표로 정리해줘.</span></span></code></pre></div><p><strong>재무 역할:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>너는 10년차 CFO야.</span></span>
<span class="line"><span>아래 분기 재무제표를 분석해줘.</span></span>
<span class="line"><span>투자자에게 보고하는 관점에서</span></span>
<span class="line"><span>핵심 지표 변동과 원인, 다음 분기 전망을 정리해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>역할을 부여할 때 <strong>경력 연수</strong>와 <strong>구체적 전문 분야</strong>를 함께 지정하면 답변 깊이가 달라집니다. &quot;마케터&quot;보다 &quot;B2B SaaS 전문 10년차 퍼포먼스 마케터&quot;가 훨씬 효과적입니다.</p></div><hr><h2 id="_2-단계적-사고-패턴-chain-of-thought" tabindex="-1">2. 단계적 사고 패턴 (Chain of Thought) <a class="header-anchor" href="#_2-단계적-사고-패턴-chain-of-thought" aria-label="Permalink to &quot;2. 단계적 사고 패턴 (Chain of Thought)&quot;">​</a></h2><p><strong>공식:</strong> &quot;단계별로 생각해서 답해줘: 1단계→2단계→3단계&quot;</p><p><strong>언제 사용:</strong> 복잡한 분석, 의사결정, 전략 수립처럼 여러 요소를 종합해야 할 때. Claude가 중간 과정을 건너뛰지 않고 논리적으로 사고하도록 유도합니다.</p><h3 id="실전-예시-1" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-1" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>동남아시아 시장 진출 전략을 수립해줘.</span></span>
<span class="line"><span>단계별로 생각해서 답해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1단계: 시장 환경 분석 (경쟁사, 규제, 문화적 특성)</span></span>
<span class="line"><span>2단계: 우리 제품의 강점/약점을 현지 시장에 맞게 분석</span></span>
<span class="line"><span>3단계: 진입 방식 비교 (직접 진출 vs 파트너십 vs 인수)</span></span>
<span class="line"><span>4단계: 추천 전략 및 12개월 로드맵</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 단계의 결론을 다음 단계에 반영해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>&quot;각 단계의 결론을 다음 단계에 반영해줘&quot;라는 한 줄을 추가하면 단계 간 연결성이 크게 좋아집니다. 단계가 따로 노는 것을 방지할 수 있습니다.</p></div><hr><h2 id="_3-소수-예시-패턴-few-shot" tabindex="-1">3. 소수 예시 패턴 (Few-Shot) <a class="header-anchor" href="#_3-소수-예시-패턴-few-shot" aria-label="Permalink to &quot;3. 소수 예시 패턴 (Few-Shot)&quot;">​</a></h2><p><strong>공식:</strong> &quot;아래 예시처럼 작성해줘: [예시1] [예시2] → 이제 [새 요청]&quot;</p><p><strong>언제 사용:</strong> 기존 문서의 스타일/형식/톤을 그대로 유지해야 할 때. 회사 고유의 보고서 양식, 이메일 스타일 등을 일관되게 유지하는 데 효과적입니다.</p><h3 id="실전-예시-2" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-2" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 두 개의 월간 보고서 요약 스타일을 참고해서</span></span>
<span class="line"><span>3월 보고서 요약을 같은 형식으로 써줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[예시1 - 1월 보고서 요약]</span></span>
<span class="line"><span>■ 핵심 성과: 신규 고객 23건 확보 (목표 대비 115%)</span></span>
<span class="line"><span>■ 주요 이슈: 물류 지연으로 배송 컴플레인 12건 발생</span></span>
<span class="line"><span>■ 다음 달 중점: 고객 리텐션 프로그램 런칭</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[예시2 - 2월 보고서 요약]</span></span>
<span class="line"><span>■ 핵심 성과: MRR 15% 증가, 이탈률 2.1%로 개선</span></span>
<span class="line"><span>■ 주요 이슈: CS팀 인력 부족으로 응답 시간 지연</span></span>
<span class="line"><span>■ 다음 달 중점: CS 자동화 도구 도입 검토</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이제 아래 3월 데이터로 같은 형식의 요약을 작성해줘:</span></span>
<span class="line"><span>[3월 데이터 붙여넣기]</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>예시는 <strong>2~3개</strong>가 가장 효과적입니다. 1개면 패턴을 잡기 어렵고, 4개 이상이면 오히려 혼란을 줄 수 있습니다.</p></div><hr><h2 id="_4-제약-조건-패턴-constraints" tabindex="-1">4. 제약 조건 패턴 (Constraints) <a class="header-anchor" href="#_4-제약-조건-패턴-constraints" aria-label="Permalink to &quot;4. 제약 조건 패턴 (Constraints)&quot;">​</a></h2><p><strong>공식:</strong> &quot;다음 조건을 반드시 지켜줘: 1) ... 2) ... 3) ...&quot;</p><p><strong>언제 사용:</strong> 분량, 형식, 포함 요소 등 명확한 규격이 있을 때. 조건을 번호로 나열하면 Claude가 하나도 빠뜨리지 않습니다.</p><h3 id="실전-예시-3" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-3" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>신제품 출시 보도자료를 써줘.</span></span>
<span class="line"><span>다음 조건을 반드시 지켜줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1) 500자 이내</span></span>
<span class="line"><span>2) 제목은 15자 이내</span></span>
<span class="line"><span>3) 첫 문장에 핵심 메시지 포함</span></span>
<span class="line"><span>4) 수치 근거 최소 2개 포함</span></span>
<span class="line"><span>5) 인용문(대표이사 코멘트) 포함</span></span>
<span class="line"><span>6) 마지막에 회사 소개 2줄</span></span>
<span class="line"><span>7) 어투: ~다 (뉴스 기사체)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>조건이 5개 이상이면 번호를 매기세요. Claude에게 &quot;위 조건을 모두 충족했는지 마지막에 체크리스트로 확인해줘&quot;를 추가하면 누락을 방지할 수 있습니다.</p></div><hr><h2 id="_5-비교-분석-패턴-comparison" tabindex="-1">5. 비교 분석 패턴 (Comparison) <a class="header-anchor" href="#_5-비교-분석-패턴-comparison" aria-label="Permalink to &quot;5. 비교 분석 패턴 (Comparison)&quot;">​</a></h2><p><strong>공식:</strong> &quot;A와 B를 [기준]으로 비교해줘. 표로 정리 + 최종 추천&quot;</p><p><strong>언제 사용:</strong> 솔루션 선정, 전략 비교, 도구 평가 등 객관적 판단이 필요할 때.</p><h3 id="실전-예시-4" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-4" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><p><strong>솔루션 비교:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 회사(직원 200명) CRM 도입을 검토 중이야.</span></span>
<span class="line"><span>Salesforce와 HubSpot을 아래 기준으로 비교해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 가격 (연간 총비용)</span></span>
<span class="line"><span>- 기능 범위</span></span>
<span class="line"><span>- 한국어 지원</span></span>
<span class="line"><span>- 도입 난이도</span></span>
<span class="line"><span>- 확장성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>표로 정리하고, 우리 상황에 맞는 최종 추천을 이유와 함께 해줘.</span></span></code></pre></div><p><strong>전략 비교:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>해외 시장 진출 방식을 비교해줘:</span></span>
<span class="line"><span>A) 직접 법인 설립</span></span>
<span class="line"><span>B) 현지 파트너사 계약</span></span>
<span class="line"><span>C) 크로스보더 이커머스</span></span>
<span class="line"><span></span></span>
<span class="line"><span>비교 기준: 초기 비용, 리스크, 시장 침투 속도, 통제력</span></span>
<span class="line"><span>표로 정리 + 우리 같은 중소 제조업에 최종 추천.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>비교 기준을 먼저 나열하면 Claude가 빠짐없이 비교합니다. &quot;최종 추천&quot;을 요청하면 단순 나열이 아닌 의사결정 지원을 받을 수 있습니다.</p></div><hr><h2 id="_6-반복-개선-패턴-iterative-refinement" tabindex="-1">6. 반복 개선 패턴 (Iterative Refinement) <a class="header-anchor" href="#_6-반복-개선-패턴-iterative-refinement" aria-label="Permalink to &quot;6. 반복 개선 패턴 (Iterative Refinement)&quot;">​</a></h2><p><strong>공식:</strong> &quot;초안 → 피드백 → 2차 → 피드백 → 최종&quot; 루프</p><p><strong>언제 사용:</strong> 한 번에 완벽한 결과를 기대하기 어려운 창작/기획 작업. 핵심은 <strong>구체적인 피드백</strong>이 최종 품질을 결정한다는 것입니다.</p><h3 id="실전-예시-5" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-5" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[1차 요청]</span></span>
<span class="line"><span>신규 서비스 소개 랜딩 페이지 카피를 써줘.</span></span>
<span class="line"><span>타겟: 30대 직장인, 핵심 가치: 시간 절약</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[1차 피드백]</span></span>
<span class="line"><span>전체 방향은 좋아. 수정 사항:</span></span>
<span class="line"><span>- 헤드라인이 너무 일반적이야. 숫자가 들어간 구체적 표현으로</span></span>
<span class="line"><span>- 두 번째 섹션이 길어. 3줄로 줄여줘</span></span>
<span class="line"><span>- CTA 버튼 문구를 3가지 후보로 제안해줘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2차 피드백]</span></span>
<span class="line"><span>훨씬 나아졌어. 마지막 조정:</span></span>
<span class="line"><span>- 헤드라인 B안으로 확정</span></span>
<span class="line"><span>- 사회적 증거(사용자 수, 만족도) 추가</span></span>
<span class="line"><span>- 전체를 한 번 더 다듬어서 최종본으로</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>피드백할 때 &quot;좋은 점&quot;과 &quot;수정할 점&quot;을 함께 말해주세요. &quot;전체적으로 좋은데, 3번이 약해&quot;처럼 방향을 잡아주면 Claude가 좋은 부분을 유지하면서 개선합니다.</p></div><hr><h2 id="_7-다중-관점-패턴-multiple-perspectives" tabindex="-1">7. 다중 관점 패턴 (Multiple Perspectives) <a class="header-anchor" href="#_7-다중-관점-패턴-multiple-perspectives" aria-label="Permalink to &quot;7. 다중 관점 패턴 (Multiple Perspectives)&quot;">​</a></h2><p><strong>공식:</strong> &quot;이 문제를 [관점A]/[관점B]/[관점C]에서 각각 분석해줘&quot;</p><p><strong>언제 사용:</strong> 이해관계자가 여럿이거나, 한쪽 시각에 치우치지 않는 균형 잡힌 분석이 필요할 때.</p><h3 id="실전-예시-6" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-6" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 회사가 재택근무를 주 2일로 축소하려고 해.</span></span>
<span class="line"><span>이 결정을 아래 3가지 관점에서 각각 분석해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1) 경영진 관점: 생산성, 비용, 조직 문화</span></span>
<span class="line"><span>2) 직원 관점: 워라밸, 만족도, 이직 리스크</span></span>
<span class="line"><span>3) 고객 관점: 서비스 품질, 응대 속도</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 관점별로 찬성/반대 논거를 정리하고,</span></span>
<span class="line"><span>마지막에 종합 권고안을 제시해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>관점을 지정할 때 각 관점이 <strong>어떤 기준</strong>으로 판단하는지 힌트를 주면 분석 깊이가 달라집니다. &quot;직원 관점&quot;보다 &quot;직원 관점: 워라밸, 만족도, 이직 리스크&quot;가 더 풍부한 답변을 이끌어냅니다.</p></div><hr><h2 id="_8-역방향-패턴-reverse-engineering" tabindex="-1">8. 역방향 패턴 (Reverse Engineering) <a class="header-anchor" href="#_8-역방향-패턴-reverse-engineering" aria-label="Permalink to &quot;8. 역방향 패턴 (Reverse Engineering)&quot;">​</a></h2><p><strong>공식:</strong> &quot;이 결과물이 나오려면 어떤 과정이 필요했을까?&quot;</p><p><strong>언제 사용:</strong> 성공 사례를 분석하거나, 원하는 결과에서 역으로 프로세스를 설계할 때.</p><h3 id="실전-예시-7" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-7" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래는 경쟁사의 성공적인 바이럴 마케팅 캠페인 사례야.</span></span>
<span class="line"><span>[사례 내용 붙여넣기]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 캠페인이 성공하려면 어떤 과정이 필요했을지</span></span>
<span class="line"><span>역으로 추적해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1) 사전 준비 단계에서 무엇을 했을까?</span></span>
<span class="line"><span>2) 타겟 설정은 어떤 기준이었을까?</span></span>
<span class="line"><span>3) 콘텐츠 제작 과정은?</span></span>
<span class="line"><span>4) 배포 채널과 타이밍 전략은?</span></span>
<span class="line"><span>5) 우리가 이걸 벤치마킹하려면 무엇부터 해야 할까?</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>역방향 패턴은 <strong>목표 상태를 구체적으로 설명</strong>할수록 효과가 좋습니다. &quot;성공한 캠페인&quot;보다 구체적인 결과물이나 수치를 보여주면 역추적 분석이 훨씬 정교해집니다.</p></div><hr><h2 id="_9-체크리스트-패턴-checklist" tabindex="-1">9. 체크리스트 패턴 (Checklist) <a class="header-anchor" href="#_9-체크리스트-패턴-checklist" aria-label="Permalink to &quot;9. 체크리스트 패턴 (Checklist)&quot;">​</a></h2><p><strong>공식:</strong> &quot;이 [문서/계획]에서 빠진 것이 없는지 체크리스트로 확인해줘&quot;</p><p><strong>언제 사용:</strong> 기획서, 계약서, 프로젝트 계획 등의 완성도를 검증할 때.</p><h3 id="실전-예시-8" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-8" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래는 신규 서비스 런칭 계획서야.</span></span>
<span class="line"><span>[계획서 내용 붙여넣기]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 계획서를 검토하고 빠진 항목이 없는지</span></span>
<span class="line"><span>체크리스트로 확인해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>확인 영역:</span></span>
<span class="line"><span>- 목표 및 KPI 설정</span></span>
<span class="line"><span>- 타겟 고객 정의</span></span>
<span class="line"><span>- 경쟁 분석</span></span>
<span class="line"><span>- 일정 계획</span></span>
<span class="line"><span>- 예산 계획</span></span>
<span class="line"><span>- 리스크 대응</span></span>
<span class="line"><span>- 법적 검토 사항</span></span>
<span class="line"><span>- 커뮤니케이션 계획</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 항목을 ✅ 포함됨 / ⚠️ 부분적 / ❌ 누락으로 표시하고,</span></span>
<span class="line"><span>누락 항목에 대해 추가해야 할 내용을 제안해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>체크리스트 영역을 미리 나열해주면 Claude가 그 기준으로 검토합니다. 영역 없이 &quot;빠진 거 없나 봐줘&quot;라고 하면 범용적이지만 얕은 검토가 됩니다.</p></div><hr><h2 id="_10-mece-패턴-mutually-exclusive-collectively-exhaustive" tabindex="-1">10. MECE 패턴 (Mutually Exclusive, Collectively Exhaustive) <a class="header-anchor" href="#_10-mece-패턴-mutually-exclusive-collectively-exhaustive" aria-label="Permalink to &quot;10. MECE 패턴 (Mutually Exclusive, Collectively Exhaustive)&quot;">​</a></h2><p><strong>공식:</strong> &quot;이 주제를 빠짐없이, 겹치지 않게 분류해줘&quot;</p><p><strong>언제 사용:</strong> 문제를 체계적으로 분류하거나, 카테고리 구조를 설계할 때. 컨설팅 보고서, 시장 분석, 고객 세분화에 효과적입니다.</p><h3 id="실전-예시-9" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-9" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 이커머스 플랫폼의 고객 이탈 원인을</span></span>
<span class="line"><span>MECE 원칙에 따라 분류해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>조건:</span></span>
<span class="line"><span>- 각 카테고리가 서로 겹치지 않아야 함</span></span>
<span class="line"><span>- 가능한 모든 원인이 포함되어야 함</span></span>
<span class="line"><span>- 대분류 → 중분류 → 소분류 3단계로</span></span>
<span class="line"><span>- 각 소분류에 구체적 예시 1개씩</span></span>
<span class="line"><span></span></span>
<span class="line"><span>결과를 트리 구조로 정리하고,</span></span>
<span class="line"><span>데이터 분석 시 우선 확인해야 할 항목 TOP 5도 알려줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>&quot;MECE로 해줘&quot;라고만 하면 Claude가 알아서 하지만, <strong>분류 단계 수</strong>(2단계 vs 3단계)와 <strong>각 분류에 넣을 내용</strong>(예시, 비중, 대응 방안 등)을 지정하면 실무에 바로 쓸 수 있는 결과를 얻습니다.</p></div><hr><h2 id="_11-시나리오-패턴-what-if" tabindex="-1">11. 시나리오 패턴 (What-If) <a class="header-anchor" href="#_11-시나리오-패턴-what-if" aria-label="Permalink to &quot;11. 시나리오 패턴 (What-If)&quot;">​</a></h2><p><strong>공식:</strong> &quot;만약 [조건]이 바뀌면 어떻게 될까? 최선/최악/현실적 시나리오&quot;</p><p><strong>언제 사용:</strong> 중요한 의사결정 전 리스크를 분석하거나, 불확실한 상황에 대비할 때.</p><h3 id="실전-예시-10" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-10" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 회사가 내년에 가격을 20% 인상하려고 해.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음 3가지 시나리오로 분석해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🟢 최선 시나리오 (Best Case):</span></span>
<span class="line"><span>- 어떤 조건에서 가능한지</span></span>
<span class="line"><span>- 예상 매출/이익 변화</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🔴 최악 시나리오 (Worst Case):</span></span>
<span class="line"><span>- 어떤 위험이 있는지</span></span>
<span class="line"><span>- 고객 이탈률 예상</span></span>
<span class="line"><span>- 매출 감소 폭</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🟡 현실적 시나리오 (Most Likely):</span></span>
<span class="line"><span>- 가장 가능성 높은 결과</span></span>
<span class="line"><span>- 구체적 수치 범위</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 시나리오별 대응 전략도 함께 제안해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>시나리오 패턴에서 <strong>구체적 수치 조건</strong>을 넣으면 분석이 훨씬 실용적입니다. &quot;가격을 올리면?&quot;보다 &quot;20% 인상, 현재 고객 1,000명, 월 구독료 5만원&quot;처럼 조건을 특정하세요.</p></div><hr><h2 id="_12-메타-프롬프트-패턴-meta-prompt" tabindex="-1">12. 메타 프롬프트 패턴 (Meta-Prompt) <a class="header-anchor" href="#_12-메타-프롬프트-패턴-meta-prompt" aria-label="Permalink to &quot;12. 메타 프롬프트 패턴 (Meta-Prompt)&quot;">​</a></h2><p><strong>공식:</strong> &quot;이 업무를 Claude에게 시키려면 어떤 프롬프트를 써야 할까?&quot;</p><p><strong>언제 사용:</strong> 어떻게 질문해야 좋을지 모를 때, 프롬프트 자체를 Claude에게 설계하게 하는 고급 기법입니다.</p><h3 id="실전-예시-11" tabindex="-1">실전 예시 <a class="header-anchor" href="#실전-예시-11" aria-label="Permalink to &quot;실전 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>나는 인사팀에서 일하고 있어.</span></span>
<span class="line"><span>매달 전 직원 대상으로 뉴스레터를 발행해야 하는데,</span></span>
<span class="line"><span>Claude를 활용해서 효율적으로 만들고 싶어.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 작업을 Claude에게 매달 시키려면</span></span>
<span class="line"><span>어떤 프롬프트를 써야 가장 좋은 결과가 나올까?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>고려사항:</span></span>
<span class="line"><span>- 매달 반복되는 업무임</span></span>
<span class="line"><span>- 톤은 친근하지만 격식 있게</span></span>
<span class="line"><span>- 주요 섹션: 이달의 소식, 신규 입사자, 사내 이벤트, HR 안내</span></span>
<span class="line"><span>- 분량: A4 2장 이내</span></span>
<span class="line"><span></span></span>
<span class="line"><span>재사용 가능한 프롬프트 템플릿을 만들어줘.</span></span>
<span class="line"><span>[매달 바뀌는 부분]은 빈칸으로 표시해줘.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로 팁</p><p>메타 프롬프트로 만든 템플릿을 <strong>Projects의 지침에 저장</strong>해두면, 매번 복사-붙여넣기 없이 반복 업무를 처리할 수 있습니다.</p></div><hr><h2 id="패턴-조합-가이드" tabindex="-1">패턴 조합 가이드 <a class="header-anchor" href="#패턴-조합-가이드" aria-label="Permalink to &quot;패턴 조합 가이드&quot;">​</a></h2><p>하나의 패턴만 쓰는 것도 좋지만, <strong>2~3개를 조합</strong>하면 효과가 극대화됩니다.</p><h3 id="추천-조합" tabindex="-1">추천 조합 <a class="header-anchor" href="#추천-조합" aria-label="Permalink to &quot;추천 조합&quot;">​</a></h3><table tabindex="0"><thead><tr><th>업무 상황</th><th>추천 패턴 조합</th><th>효과</th></tr></thead><tbody><tr><td>전략 기획서 작성</td><td>역할 부여 + 단계적 사고 + 제약 조건</td><td>전문가 시각으로 논리적인 기획서를 규격에 맞게</td></tr><tr><td>의사결정 보고서</td><td>비교 분석 + 다중 관점 + 시나리오</td><td>객관적이고 균형 잡힌 의사결정 근거 마련</td></tr><tr><td>반복 업무 템플릿화</td><td>메타 프롬프트 + 소수 예시 + 제약 조건</td><td>재사용 가능한 고품질 프롬프트 확보</td></tr><tr><td>보고서 품질 향상</td><td>반복 개선 + 체크리스트 + MECE</td><td>빠짐없이 체계적인 최종 결과물</td></tr><tr><td>신규 사업 검토</td><td>역방향 + 시나리오 + 다중 관점</td><td>성공 요건 분석부터 리스크 대비까지</td></tr><tr><td>문서 표준화</td><td>소수 예시 + 제약 조건 + 체크리스트</td><td>일관된 양식과 품질 유지</td></tr></tbody></table><h3 id="조합-예시" tabindex="-1">조합 예시 <a class="header-anchor" href="#조합-예시" aria-label="Permalink to &quot;조합 예시&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[역할 부여 + 단계적 사고 + 제약 조건 조합]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>너는 10년차 사업개발 전문가야.</span></span>
<span class="line"><span>신규 B2B SaaS 진출 전략을 수립해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>단계별로 분석해줘:</span></span>
<span class="line"><span>1단계: 시장 규모 및 경쟁 환경</span></span>
<span class="line"><span>2단계: 우리의 차별화 포인트</span></span>
<span class="line"><span>3단계: Go-to-Market 전략</span></span>
<span class="line"><span>4단계: 12개월 실행 로드맵</span></span>
<span class="line"><span></span></span>
<span class="line"><span>조건:</span></span>
<span class="line"><span>- A4 3장 이내</span></span>
<span class="line"><span>- 각 단계마다 표 1개 이상 포함</span></span>
<span class="line"><span>- 수치 근거 포함</span></span>
<span class="line"><span>- 경영진 보고용 톤</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">주의</p><p>패턴을 4개 이상 동시에 조합하면 프롬프트가 너무 복잡해져 오히려 품질이 떨어질 수 있습니다. <strong>2~3개 조합</strong>이 가장 효과적입니다.</p></div>`,105)])])}const g=a(e,[["render",l]]);export{u as __pageData,g as default};
