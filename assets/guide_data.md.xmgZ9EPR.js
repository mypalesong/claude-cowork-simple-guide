import{_ as s,o as n,c as p,a2 as t}from"./chunks/framework.DS_HIvHc.js";const u=JSON.parse('{"title":"데이터 정리 & 분석","description":"","frontmatter":{},"headers":[],"relativePath":"guide/data.md","filePath":"guide/data.md","lastUpdated":1773710852000}'),e={name:"guide/data.md"};function l(i,a,o,c,d,r){return n(),p("div",null,[...a[0]||(a[0]=[t(`<h1 id="데이터-정리-분석" tabindex="-1">데이터 정리 &amp; 분석 <a class="header-anchor" href="#데이터-정리-분석" aria-label="Permalink to &quot;데이터 정리 &amp; 분석&quot;">​</a></h1><blockquote><p>엑셀 수식 몰라도 괜찮아요. 말로 하면 Claude가 정리해줍니다.</p></blockquote><h2 id="이런-걸-할-수-있어요" tabindex="-1">이런 걸 할 수 있어요 <a class="header-anchor" href="#이런-걸-할-수-있어요" aria-label="Permalink to &quot;이런 걸 할 수 있어요&quot;">​</a></h2><table tabindex="0"><thead><tr><th>기능</th><th>설명</th></tr></thead><tbody><tr><td><strong>데이터 정리</strong></td><td>중복 제거, 빈 값 채우기, 형식 통일 (날짜, 전화번호 등)</td></tr><tr><td><strong>요약 &amp; 통계</strong></td><td>합계, 평균, 부서별 집계, 월별 추이 등 한눈에 보기</td></tr><tr><td><strong>비교 분석</strong></td><td>전월 대비, 전년 대비, 팀별 비교 등 의미 있는 인사이트 도출</td></tr><tr><td><strong>보고용 정리</strong></td><td>분석 결과를 표나 글로 정리해서 보고서에 바로 넣을 수 있는 형태로</td></tr></tbody></table><h2 id="실전-예시-매출-데이터-분석" tabindex="-1">실전 예시: 매출 데이터 분석 <a class="header-anchor" href="#실전-예시-매출-데이터-분석" aria-label="Permalink to &quot;실전 예시: 매출 데이터 분석&quot;">​</a></h2><p><strong>상황:</strong> 1분기 매출 데이터를 분석해서 팀장님께 보고해야 할 때</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;1분기_매출현황.xlsx&quot; 파일을 열어서 분석해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>알고 싶은 것:</span></span>
<span class="line"><span>1. 월별 매출 합계와 성장률</span></span>
<span class="line"><span>2. 상위 5개 제품 (매출액 기준)</span></span>
<span class="line"><span>3. 지역별 매출 비중</span></span>
<span class="line"><span>4. 전년 동기 대비 변화</span></span>
<span class="line"><span></span></span>
<span class="line"><span>결과를 표로 정리하고, 핵심 인사이트 3가지를 한 줄씩 뽑아줘.</span></span>
<span class="line"><span>팀장님께 보고할 한 문단 코멘트도 작성해줘.</span></span></code></pre></div><h2 id="실전-예시-설문-결과-정리" tabindex="-1">실전 예시: 설문 결과 정리 <a class="header-anchor" href="#실전-예시-설문-결과-정리" aria-label="Permalink to &quot;실전 예시: 설문 결과 정리&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;직원만족도_설문결과.csv&quot; 파일 분석해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>해줄 것:</span></span>
<span class="line"><span>1. 전체 만족도 평균 점수</span></span>
<span class="line"><span>2. 항목별 (급여, 복지, 성장기회, 문화) 점수 비교</span></span>
<span class="line"><span>3. 부서별 만족도 차이</span></span>
<span class="line"><span>4. 서술형 응답에서 자주 나오는 키워드 Top 10</span></span>
<span class="line"><span>5. 개선이 시급한 영역 3가지와 그 근거</span></span>
<span class="line"><span></span></span>
<span class="line"><span>경영진 보고용으로 깔끔하게 정리해줘.</span></span></code></pre></div><h2 id="실전-예시-명단-리스트-정리" tabindex="-1">실전 예시: 명단 &amp; 리스트 정리 <a class="header-anchor" href="#실전-예시-명단-리스트-정리" aria-label="Permalink to &quot;실전 예시: 명단 &amp; 리스트 정리&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;세미나_신청자.xlsx&quot;와 &quot;추가신청자.csv&quot; 두 파일을 합쳐줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>해줄 것:</span></span>
<span class="line"><span>- 중복 제거 (이름+연락처 기준)</span></span>
<span class="line"><span>- 전화번호 형식 통일 (010-XXXX-XXXX)</span></span>
<span class="line"><span>- 소속별로 정렬</span></span>
<span class="line"><span>- 총 인원수 알려줘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>합친 결과를 &quot;최종_참석자명단.xlsx&quot;로 저장해줘.</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">주의: 민감한 데이터</p><p>주민등록번호, 비밀번호 등 민감한 개인정보가 포함된 파일은 주의가 필요합니다. 회사 보안 정책을 확인하고, 필요하면 해당 열을 제거한 후 분석을 요청하세요.</p></div><h2 id="실전-예시-차트-시각화-요청" tabindex="-1">실전 예시: 차트 &amp; 시각화 요청 <a class="header-anchor" href="#실전-예시-차트-시각화-요청" aria-label="Permalink to &quot;실전 예시: 차트 &amp; 시각화 요청&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;월별_매출.xlsx&quot; 데이터로 시각화를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 월별 매출 추이 꺾은선 그래프</span></span>
<span class="line"><span>2. 제품별 매출 비중 파이 차트</span></span>
<span class="line"><span>3. 지역별 매출 비교 막대 그래프</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 차트에 제목과 단위를 표시하고,</span></span>
<span class="line"><span>보고서에 넣을 수 있는 형태로 만들어줘.</span></span></code></pre></div><h2 id="실전-예시-피벗-분석" tabindex="-1">실전 예시: 피벗 분석 <a class="header-anchor" href="#실전-예시-피벗-분석" aria-label="Permalink to &quot;실전 예시: 피벗 분석&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;거래내역_2026.csv&quot; 파일로 피벗 분석을 해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 행: 월별</span></span>
<span class="line"><span>- 열: 거래 유형 (온라인/오프라인/도매)</span></span>
<span class="line"><span>- 값: 매출 합계</span></span>
<span class="line"><span></span></span>
<span class="line"><span>추가로:</span></span>
<span class="line"><span>- 각 셀에 전월 대비 증감률을 괄호로 표시</span></span>
<span class="line"><span>- 가장 성장률이 높은 조합 Top 3 알려줘</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">시각화 팁</p><p>&quot;경영진 보고용&quot;, &quot;팀 회의용&quot;, &quot;SNS 공유용&quot; 등 용도를 알려주면 적합한 형태로 만들어줍니다.</p></div>`,17)])])}const b=s(e,[["render",l]]);export{u as __pageData,b as default};
