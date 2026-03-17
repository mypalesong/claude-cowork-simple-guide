import{_ as a,o as n,c as p,a2 as l}from"./chunks/framework.DS_HIvHc.js";const u=JSON.parse('{"title":"워크플로우 레시피","description":"","frontmatter":{},"headers":[],"relativePath":"guide/workflows.md","filePath":"guide/workflows.md","lastUpdated":1773714559000}'),i={name:"guide/workflows.md"};function e(t,s,c,h,o,d){return n(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="워크플로우-레시피" tabindex="-1">워크플로우 레시피 <a class="header-anchor" href="#워크플로우-레시피" aria-label="Permalink to &quot;워크플로우 레시피&quot;">​</a></h1><blockquote><p>단순 질문-답변을 넘어, 여러 단계를 연결하는 <strong>자동화 워크플로우</strong>를 만들어 보세요. 반복 업무를 파이프라인으로 구성하면 매번 같은 품질의 결과물을 빠르게 얻을 수 있습니다.</p></blockquote><div class="tip custom-block"><p class="custom-block-title">이 페이지 활용법</p><p>각 레시피의 <strong>실전 프롬프트</strong>를 복사해서 바로 사용할 수 있습니다. 상황에 맞게 <code>[괄호]</code> 안의 내용만 교체하세요.</p></div><h2 id="레시피-한눈에-보기" tabindex="-1">레시피 한눈에 보기 <a class="header-anchor" href="#레시피-한눈에-보기" aria-label="Permalink to &quot;레시피 한눈에 보기&quot;">​</a></h2><table tabindex="0"><thead><tr><th>#</th><th>레시피</th><th>난이도</th><th>소요 시간</th><th>핵심 산출물</th></tr></thead><tbody><tr><td>1</td><td>주간 보고서 자동 생성</td><td>⭐ 초급</td><td>설정 3분, 실행 2분</td><td>주간 보고서</td></tr><tr><td>2</td><td>이메일 배치 처리</td><td>⭐ 초급</td><td>설정 2분, 실행 3분</td><td>답장 초안 5~10개</td></tr><tr><td>3</td><td>회의 → 회의록 → 공유 이메일</td><td>⭐⭐ 중급</td><td>설정 5분, 실행 5분</td><td>회의록 + 이메일</td></tr><tr><td>4</td><td>매출 데이터 → 분석 → 보고서</td><td>⭐⭐ 중급</td><td>설정 5분, 실행 5분</td><td>분석 보고서</td></tr><tr><td>5</td><td>채용 프로세스 자동화</td><td>⭐⭐ 중급</td><td>설정 10분, 실행 8분</td><td>공고 + 질문 + 평가표</td></tr><tr><td>6</td><td>경쟁사 분석 자동화</td><td>⭐⭐ 중급</td><td>설정 5분, 실행 10분</td><td>비교표 + 보고서</td></tr><tr><td>7</td><td>월간 뉴스레터 자동 생성</td><td>⭐⭐⭐ 고급</td><td>설정 10분, 실행 15분</td><td>뉴스레터 원고</td></tr><tr><td>8</td><td>고객 피드백 분석 파이프라인</td><td>⭐⭐⭐ 고급</td><td>설정 10분, 실행 15분</td><td>인사이트 + 액션플랜</td></tr><tr><td>9</td><td>다국어 콘텐츠 제작</td><td>⭐⭐⭐ 고급</td><td>설정 5분, 실행 20분</td><td>4개 언어 콘텐츠</td></tr><tr><td>10</td><td>프로젝트 킥오프 패키지</td><td>⭐⭐⭐ 고급</td><td>설정 10분, 실행 20분</td><td>기획서 + 일정 + 역할 + 메일</td></tr></tbody></table><hr><h2 id="_1-주간-보고서-자동-생성-⭐-초급" tabindex="-1">1. 주간 보고서 자동 생성 ⭐ 초급 <a class="header-anchor" href="#_1-주간-보고서-자동-생성-⭐-초급" aria-label="Permalink to &quot;1. 주간 보고서 자동 생성 ⭐ 초급&quot;">​</a></h2><blockquote><p>월~금 업무일지 5개를 붙여넣으면, 팀 양식에 맞는 주간 보고서가 완성됩니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 3분, 실행 2분</p><h3 id="상황-설명" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>매주 금요일 오후, 한 주간의 업무일지를 모아 주간 보고서를 작성해야 합니다. 업무일지 5개를 일일이 읽고 요약하는 데 30분 이상 걸리던 작업을 2분으로 단축합니다.</p><h3 id="워크플로우" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[업무일지 5개\\n월~금] --&gt; B[Claude 분석\\n핵심 성과 추출]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[주간 보고서\\n양식에 맞게 생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[검토 후\\n팀장 공유]</span></span></code></pre></div><h3 id="단계별-진행" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li><strong>월~금 업무일지 5개</strong>를 복사합니다</li><li>아래 프롬프트에 붙여넣습니다</li><li>생성된 보고서를 검토하고, 필요시 수정 요청합니다</li><li>완성본을 팀장님께 공유합니다</li></ol><h3 id="실전-프롬프트" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>이번 주(3/9~3/13) 업무일지 5개를 기반으로 주간 보고서를 작성해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[업무일지 월요일]</span></span>
<span class="line"><span>- 오전: A사 미팅, 요구사항 정리</span></span>
<span class="line"><span>- 오후: 기획서 초안 작성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[업무일지 화요일]</span></span>
<span class="line"><span>- 오전: B프로젝트 개발 리뷰</span></span>
<span class="line"><span>- 오후: 고객 VOC 분석</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[업무일지 수요일]</span></span>
<span class="line"><span>- 오전: 팀 회의, 주간 목표 점검</span></span>
<span class="line"><span>- 오후: 제안서 수정 및 발송</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[업무일지 목요일]</span></span>
<span class="line"><span>- 오전: C사 온라인 미팅</span></span>
<span class="line"><span>- 오후: 데이터 분석 보고서 작성</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[업무일지 금요일]</span></span>
<span class="line"><span>- 오전: 신규 기능 테스트</span></span>
<span class="line"><span>- 오후: 주간 마감 정리</span></span>
<span class="line"><span></span></span>
<span class="line"><span>보고서 양식:</span></span>
<span class="line"><span>1. 금주 핵심 성과 (3가지)</span></span>
<span class="line"><span>2. 업무 상세 내역 (일별 정리)</span></span>
<span class="line"><span>3. 이슈 및 대응 현황</span></span>
<span class="line"><span>4. 차주 계획 (우선순위별)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>톤: 간결하고 성과 중심으로</span></span></code></pre></div><h3 id="예상-결과물" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>핵심 성과 3가지가 강조된 주간 보고서</li><li>일별 업무가 카테고리별로 재분류된 상세 내역</li><li>이슈 사항과 대응 방안이 정리된 테이블</li><li>우선순위가 매겨진 차주 계획</li></ul><hr><h2 id="_2-이메일-배치-처리-⭐-초급" tabindex="-1">2. 이메일 배치 처리 ⭐ 초급 <a class="header-anchor" href="#_2-이메일-배치-처리-⭐-초급" aria-label="Permalink to &quot;2. 이메일 배치 처리 ⭐ 초급&quot;">​</a></h2><blockquote><p>답장해야 할 이메일 여러 건을 한 번에 처리합니다. 각 이메일의 맥락과 답장 방향만 알려주면 됩니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 2분, 실행 3분</p><h3 id="상황-설명-1" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-1" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>월요일 아침, 주말 동안 쌓인 이메일이 10통. 하나하나 답장을 쓰면 1시간이 넘지만, Claude에게 한 번에 맡기면 10분이면 충분합니다.</p><h3 id="워크플로우-1" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-1" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[미답장 이메일\\n5~10건 수집] --&gt; B[이메일별\\n답장 방향 메모]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[Claude가\\n맞춤 답장 생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[검토 후\\n일괄 발송]</span></span></code></pre></div><h3 id="단계별-진행-1" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-1" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>답장이 필요한 이메일을 모아 복사합니다</li><li>각 이메일에 대한 <strong>답장 방향</strong>을 간단히 메모합니다</li><li>프롬프트에 함께 입력합니다</li><li>생성된 답장을 각각 검토하고 발송합니다</li></ol><h3 id="실전-프롬프트-1" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-1" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 5개 이메일에 대한 답장을 각각 작성해줘.</span></span>
<span class="line"><span>내 이름은 [김민수], 직함은 [마케팅팀 대리]야.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이메일 1]</span></span>
<span class="line"><span>보낸 사람: 박과장 (거래처 A사)</span></span>
<span class="line"><span>내용: 다음 주 미팅 일정 잡고 싶다</span></span>
<span class="line"><span>→ 답장 방향: 화요일 오후 2시 제안, 장소는 우리 사무실</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이메일 2]</span></span>
<span class="line"><span>보낸 사람: 이대리 (사내)</span></span>
<span class="line"><span>내용: 지난번 요청한 자료 언제 받을 수 있는지</span></span>
<span class="line"><span>→ 답장 방향: 이번 주 금요일까지 전달 예정, 양해 부탁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이메일 3]</span></span>
<span class="line"><span>보낸 사람: 김부장 (본사)</span></span>
<span class="line"><span>내용: 신규 프로젝트 참여 가능한지 확인</span></span>
<span class="line"><span>→ 답장 방향: 관심 있으나 현재 일정상 4월부터 가능</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이메일 4]</span></span>
<span class="line"><span>보낸 사람: 최사원 (후배)</span></span>
<span class="line"><span>내용: 보고서 양식 문의</span></span>
<span class="line"><span>→ 답장 방향: 공유 드라이브 링크 안내, 작성 팁 간단히</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이메일 5]</span></span>
<span class="line"><span>보낸 사람: 외부 세미나 초청</span></span>
<span class="line"><span>내용: 디지털 마케팅 세미나 참석 여부</span></span>
<span class="line"><span>→ 답장 방향: 정중히 거절, 다음 기회에</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 답장의 톤:</span></span>
<span class="line"><span>- 사내: 편하지만 존중하는 톤</span></span>
<span class="line"><span>- 거래처: 비즈니스 격식체</span></span>
<span class="line"><span>- 외부: 정중한 거절 톤</span></span></code></pre></div><h3 id="예상-결과물-1" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-1" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>이메일 5건에 대한 개별 답장 초안</li><li>각 상대방과의 관계에 맞는 적절한 톤</li><li>구체적인 일정/정보가 포함된 실용적 답장</li></ul><hr><h2 id="_3-회의-→-회의록-→-공유-이메일-파이프라인-⭐⭐-중급" tabindex="-1">3. 회의 → 회의록 → 공유 이메일 파이프라인 ⭐⭐ 중급 <a class="header-anchor" href="#_3-회의-→-회의록-→-공유-이메일-파이프라인-⭐⭐-중급" aria-label="Permalink to &quot;3. 회의 → 회의록 → 공유 이메일 파이프라인 ⭐⭐ 중급&quot;">​</a></h2><blockquote><p>회의 내용을 입력하면 정리된 회의록과 참석자 공유용 이메일까지 한 번에 생성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 5분, 실행 5분</p><h3 id="상황-설명-2" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-2" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>1시간 회의가 끝난 직후, 회의록을 정리하고 참석자에게 공유 메일을 보내야 합니다. 메모만 남겨두면 Claude가 체계적인 회의록과 후속 조치 포함 이메일을 만들어 줍니다.</p><h3 id="워크플로우-2" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-2" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[회의 메모\\n핵심 키워드] --&gt; B[Claude가\\n회의록 작성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[결정사항 &amp;\\n액션아이템 추출]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[공유 이메일\\n자동 생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[참석자에게\\n발송]</span></span></code></pre></div><h3 id="단계별-진행-2" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-2" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>회의 중 <strong>핵심 키워드와 결정사항</strong>을 간단히 메모합니다</li><li>프롬프트 1단계: 메모를 바탕으로 회의록을 생성합니다</li><li>프롬프트 2단계: 회의록을 기반으로 공유 이메일을 생성합니다</li><li>회의록은 사내 시스템에, 이메일은 참석자에게 발송합니다</li></ol><h3 id="실전-프롬프트-2" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-2" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 회의 메모를 바탕으로 2가지를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[회의 정보]</span></span>
<span class="line"><span>- 회의명: [2분기 마케팅 전략 회의]</span></span>
<span class="line"><span>- 일시: [2026년 3월 13일 (금) 14:00~15:30]</span></span>
<span class="line"><span>- 참석자: [김팀장, 박대리, 이사원, 최과장(디자인팀)]</span></span>
<span class="line"><span>- 장소: [3층 회의실 A]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[회의 메모]</span></span>
<span class="line"><span>- 2분기 예산 전년 대비 15% 증가 확정</span></span>
<span class="line"><span>- SNS 마케팅 강화 → 인스타 릴스 주 3회 발행</span></span>
<span class="line"><span>- 신규 브랜드 캠페인 4월 런칭 목표</span></span>
<span class="line"><span>- 디자인팀 협업: 캠페인 시안 3월 말까지 필요</span></span>
<span class="line"><span>- 박대리가 인플루언서 리스트 정리 (다음 주 수요일까지)</span></span>
<span class="line"><span>- 이사원이 경쟁사 SNS 분석 보고 (다음 주 금요일까지)</span></span>
<span class="line"><span>- 예산 배분안은 김팀장이 다음 회의 때 공유</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 1: 회의록]</span></span>
<span class="line"><span>양식:</span></span>
<span class="line"><span>1. 회의 개요 (일시, 참석자, 안건)</span></span>
<span class="line"><span>2. 논의 내용 (안건별 정리)</span></span>
<span class="line"><span>3. 결정 사항 (번호 매기기)</span></span>
<span class="line"><span>4. 액션 아이템 (담당자 + 기한을 표로 정리)</span></span>
<span class="line"><span>5. 다음 회의 안건</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 2: 공유 이메일]</span></span>
<span class="line"><span>- 수신: 참석자 전원</span></span>
<span class="line"><span>- 내용: 회의록 요약 + 각자 액션 아이템 리마인드</span></span>
<span class="line"><span>- 톤: 친근하지만 명확하게</span></span></code></pre></div><h3 id="예상-결과물-2" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-2" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>안건별로 구조화된 회의록</li><li>담당자/기한이 명시된 액션 아이템 테이블</li><li>참석자 각자의 할 일이 강조된 공유 이메일</li></ul><hr><h2 id="_4-매출-데이터-→-분석-→-보고서-자동화-⭐⭐-중급" tabindex="-1">4. 매출 데이터 → 분석 → 보고서 자동화 ⭐⭐ 중급 <a class="header-anchor" href="#_4-매출-데이터-→-분석-→-보고서-자동화-⭐⭐-중급" aria-label="Permalink to &quot;4. 매출 데이터 → 분석 → 보고서 자동화 ⭐⭐ 중급&quot;">​</a></h2><blockquote><p>매출 데이터를 붙여넣으면 트렌드 분석과 경영진 보고용 요약 보고서를 자동 생성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 5분, 실행 5분</p><h3 id="상황-설명-3" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-3" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>매월 초, 지난달 매출 데이터를 정리해 경영진에게 보고해야 합니다. 엑셀에서 숫자만 뽑아오면, 분석과 인사이트 도출, 보고서 작성까지 자동화할 수 있습니다.</p><h3 id="워크플로우-3" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-3" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[매출 데이터\\nCSV/표 형태] --&gt; B[데이터 분석\\n전월 대비/전년 대비]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[핵심 인사이트\\n도출]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[경영진 보고서\\n생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[시각화 제안\\n차트 가이드]</span></span></code></pre></div><h3 id="단계별-진행-3" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-3" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>엑셀이나 사내 시스템에서 <strong>매출 데이터를 표 형태</strong>로 복사합니다</li><li>전월/전년 동기 데이터도 함께 제공하면 비교 분석이 가능합니다</li><li>프롬프트에 분석 관점과 보고서 양식을 지정합니다</li><li>생성된 보고서에 실제 차트를 추가해 완성합니다</li></ol><h3 id="실전-프롬프트-3" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-3" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 매출 데이터를 분석하고 경영진 보고서를 작성해줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2월 매출 데이터]</span></span>
<span class="line"><span>| 제품군 | 1월 매출 | 2월 매출 | 전년 2월 |</span></span>
<span class="line"><span>|--------|----------|----------|----------|</span></span>
<span class="line"><span>| A제품  | 5.2억    | 5.8억    | 4.9억    |</span></span>
<span class="line"><span>| B제품  | 3.1억    | 2.7억    | 3.3억    |</span></span>
<span class="line"><span>| C제품  | 1.8억    | 2.4억    | 1.5억    |</span></span>
<span class="line"><span>| D제품  | 4.5억    | 4.6억    | 4.2억    |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[분석 요청]</span></span>
<span class="line"><span>1. 전월 대비 증감 분석 (%, 금액)</span></span>
<span class="line"><span>2. 전년 동기 대비 성장률</span></span>
<span class="line"><span>3. 제품군별 성과 평가</span></span>
<span class="line"><span>4. 주목할 트렌드 3가지</span></span>
<span class="line"><span>5. 리스크 요인과 대응 방안</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[보고서 양식]</span></span>
<span class="line"><span>- 1페이지 요약 (Executive Summary)</span></span>
<span class="line"><span>- 상세 분석 (제품군별)</span></span>
<span class="line"><span>- 향후 전망 및 제안</span></span>
<span class="line"><span>- 추천 차트 종류와 데이터 포인트 안내</span></span>
<span class="line"><span></span></span>
<span class="line"><span>톤: 데이터 기반, 객관적, 경영진이 빠르게 파악할 수 있게</span></span></code></pre></div><h3 id="예상-결과물-3" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-3" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>전월/전년 대비 증감률이 계산된 분석표</li><li>제품군별 성과 하이라이트와 우려 사항</li><li>경영진 1페이지 요약 보고서</li><li>엑셀에서 만들 차트 종류와 데이터 범위 가이드</li></ul><hr><h2 id="_5-채용-프로세스-자동화-⭐⭐-중급" tabindex="-1">5. 채용 프로세스 자동화 ⭐⭐ 중급 <a class="header-anchor" href="#_5-채용-프로세스-자동화-⭐⭐-중급" aria-label="Permalink to &quot;5. 채용 프로세스 자동화 ⭐⭐ 중급&quot;">​</a></h2><blockquote><p>채용 포지션 정보를 입력하면 채용 공고, 면접 질문, 평가표까지 일괄 생성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 10분, 실행 8분</p><h3 id="상황-설명-4" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-4" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>새로운 포지션 채용이 확정되었습니다. 채용 공고 작성, 면접 질문 준비, 평가 기준 수립까지 보통 3~5일 걸리는 작업을 한 번에 처리합니다.</p><h3 id="워크플로우-4" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-4" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[포지션 정보\\nJD 초안] --&gt; B[채용 공고\\n작성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[면접 질문\\n직무별 생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[평가표\\n기준 + 배점]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[채용 패키지\\n완성]</span></span></code></pre></div><h3 id="단계별-진행-4" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-4" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li><strong>포지션의 핵심 정보</strong>를 정리합니다 (직무, 자격요건, 우대사항)</li><li>1단계: 매력적인 채용 공고를 생성합니다</li><li>2단계: 직무 역량을 평가할 면접 질문을 생성합니다</li><li>3단계: 면접관용 평가표를 생성합니다</li><li>각 산출물을 HR팀과 현업 부서에 공유합니다</li></ol><h3 id="실전-프롬프트-4" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-4" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 포지션 정보로 채용 프로세스 3종 세트를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[포지션 정보]</span></span>
<span class="line"><span>- 직무: [디지털 마케팅 매니저]</span></span>
<span class="line"><span>- 소속: [마케팅본부 퍼포먼스팀]</span></span>
<span class="line"><span>- 경력: [5~8년차]</span></span>
<span class="line"><span>- 핵심 업무:</span></span>
<span class="line"><span>  - 디지털 광고 캠페인 기획/운영 (Google, Meta, 네이버)</span></span>
<span class="line"><span>  - 데이터 기반 성과 분석 및 최적화</span></span>
<span class="line"><span>  - 마케팅 예산 관리 (월 5억 규모)</span></span>
<span class="line"><span>  - 대행사 관리 및 협업</span></span>
<span class="line"><span>- 필수 자격:</span></span>
<span class="line"><span>  - 퍼포먼스 마케팅 경력 5년 이상</span></span>
<span class="line"><span>  - GA4, SQL 활용 가능</span></span>
<span class="line"><span>  - 광고 플랫폼 자격증 보유</span></span>
<span class="line"><span>- 우대 사항:</span></span>
<span class="line"><span>  - 이커머스 업종 경험</span></span>
<span class="line"><span>  - 팀 리딩 경험</span></span>
<span class="line"><span>  - 영어 커뮤니케이션 가능</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 1: 채용 공고]</span></span>
<span class="line"><span>- 회사 매력 포인트 강조</span></span>
<span class="line"><span>- 성장 기회, 복지, 팀 문화 포함</span></span>
<span class="line"><span>- MZ세대가 관심 가질 만한 톤</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 2: 면접 질문 15개]</span></span>
<span class="line"><span>- 직무 역량 질문 5개 (실무 경험 중심)</span></span>
<span class="line"><span>- 문제 해결력 질문 5개 (상황 시나리오)</span></span>
<span class="line"><span>- 컬처핏 질문 5개 (가치관, 협업 스타일)</span></span>
<span class="line"><span>- 각 질문에 &quot;좋은 답변 포인트&quot; 포함</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 3: 면접 평가표]</span></span>
<span class="line"><span>- 평가 항목별 배점 (총 100점)</span></span>
<span class="line"><span>- 각 항목 1~5점 척도 기준 설명</span></span>
<span class="line"><span>- 면접관 코멘트 기입란</span></span>
<span class="line"><span>- 최종 추천 의견란 (강력추천/추천/보류/불합격)</span></span></code></pre></div><h3 id="예상-결과물-4" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-4" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>매력적인 채용 공고 (복사해서 채용사이트에 게시 가능)</li><li>역량별 면접 질문 15개 + 평가 포인트</li><li>점수 기준이 명확한 면접 평가표</li></ul><hr><h2 id="_6-경쟁사-분석-자동화-⭐⭐-중급" tabindex="-1">6. 경쟁사 분석 자동화 ⭐⭐ 중급 <a class="header-anchor" href="#_6-경쟁사-분석-자동화-⭐⭐-중급" aria-label="Permalink to &quot;6. 경쟁사 분석 자동화 ⭐⭐ 중급&quot;">​</a></h2><blockquote><p>경쟁사 정보를 수집해 체계적인 비교 분석표와 전략 보고서를 생성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 5분, 실행 10분</p><h3 id="상황-설명-5" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-5" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>분기별 경쟁사 동향을 파악하고 전략 회의 자료를 준비해야 합니다. 여러 소스에서 수집한 정보를 구조화하고 인사이트를 도출하는 과정을 자동화합니다.</p><h3 id="워크플로우-5" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-5" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[경쟁사 정보\\n수집/정리] --&gt; B[항목별\\n비교 분석]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[비교표\\n생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[SWOT &amp;\\n전략 제안]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[경영진\\n보고서]</span></span></code></pre></div><h3 id="단계별-진행-5" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-5" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>경쟁사별 수집한 정보를 <strong>항목별로 정리</strong>합니다</li><li>비교 분석 기준을 설정합니다 (제품, 가격, 마케팅, 기술 등)</li><li>프롬프트에 자사 정보도 함께 제공합니다</li><li>비교표, SWOT 분석, 전략 제안이 포함된 보고서를 받습니다</li></ol><h3 id="실전-프롬프트-5" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-5" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 경쟁사 정보를 바탕으로 경쟁 분석 보고서를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[자사 정보]</span></span>
<span class="line"><span>- 회사명: [우리회사]</span></span>
<span class="line"><span>- 주력 제품: [클라우드 기반 프로젝트 관리 SaaS]</span></span>
<span class="line"><span>- 가격: [월 29,000원/인]</span></span>
<span class="line"><span>- 강점: 한국어 최적화, 국내 대기업 고객 다수</span></span>
<span class="line"><span>- 약점: 글로벌 확장 부족, 모바일 앱 미흡</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[경쟁사 A]</span></span>
<span class="line"><span>- 회사명: [알파소프트]</span></span>
<span class="line"><span>- 주력 제품: [올인원 업무 플랫폼]</span></span>
<span class="line"><span>- 가격: [월 35,000원/인]</span></span>
<span class="line"><span>- 최근 동향: AI 기능 추가, 시리즈C 투자 유치 (500억)</span></span>
<span class="line"><span>- 고객사: 중소기업 위주 3,000사</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[경쟁사 B]</span></span>
<span class="line"><span>- 회사명: [베타웍스]</span></span>
<span class="line"><span>- 주력 제품: [팀 협업 솔루션]</span></span>
<span class="line"><span>- 가격: [월 19,000원/인 (저가 전략)]</span></span>
<span class="line"><span>- 최근 동향: 공격적 할인 프로모션, 스타트업 시장 공략</span></span>
<span class="line"><span>- 고객사: 스타트업 5,000사</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[경쟁사 C]</span></span>
<span class="line"><span>- 회사명: [글로벌PM (해외)]</span></span>
<span class="line"><span>- 주력 제품: [글로벌 PM 도구]</span></span>
<span class="line"><span>- 가격: [$15/인 (한국어 미지원)]</span></span>
<span class="line"><span>- 최근 동향: 한국 시장 진출 검토 중</span></span>
<span class="line"><span>- 고객사: 글로벌 10만사</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[분석 요청]</span></span>
<span class="line"><span>1. 4사 비교표 (기능, 가격, 타겟, 강점, 약점)</span></span>
<span class="line"><span>2. 자사 SWOT 분석</span></span>
<span class="line"><span>3. 경쟁사별 위협 수준 평가</span></span>
<span class="line"><span>4. 대응 전략 제안 (단기/중기/장기)</span></span>
<span class="line"><span>5. 차별화 포인트 3가지</span></span></code></pre></div><h3 id="예상-결과물-5" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-5" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>4사 기능/가격/포지셔닝 비교표</li><li>자사 SWOT 매트릭스</li><li>경쟁사별 위협 수준 (상/중/하) 평가</li><li>단기(1개월), 중기(3개월), 장기(6개월) 대응 전략</li></ul><hr><h2 id="_7-월간-뉴스레터-자동-생성-⭐⭐⭐-고급" tabindex="-1">7. 월간 뉴스레터 자동 생성 ⭐⭐⭐ 고급 <a class="header-anchor" href="#_7-월간-뉴스레터-자동-생성-⭐⭐⭐-고급" aria-label="Permalink to &quot;7. 월간 뉴스레터 자동 생성 ⭐⭐⭐ 고급&quot;">​</a></h2><blockquote><p>한 달간의 소식, 업계 동향, 내부 이벤트를 모아 고객/사내용 뉴스레터를 자동 구성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 10분, 실행 15분</p><h3 id="상황-설명-6" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-6" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>매달 말, 고객에게 발송할 뉴스레터를 준비합니다. 여러 부서에서 수집한 소식을 하나의 매력적인 뉴스레터로 만드는 전 과정을 자동화합니다.</p><h3 id="워크플로우-6" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-6" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[소식 수집\\n각 부서 소식] --&gt; B[콘텐츠 분류\\n카테고리 정리]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[헤드라인 &amp;\\n본문 작성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[CTA 삽입\\n행동 유도 문구]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[HTML 구조\\n최종 편집]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[발송 준비\\n제목 A/B 테스트]</span></span></code></pre></div><h3 id="단계별-진행-6" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-6" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>각 부서에서 <strong>이번 달 주요 소식</strong>을 수집합니다</li><li>업계 동향, 고객 성공 사례, 이벤트 정보를 정리합니다</li><li>프롬프트 1단계: 뉴스레터 구조와 본문을 생성합니다</li><li>프롬프트 2단계: 이메일 제목 후보와 CTA를 생성합니다</li><li>마케팅 도구에 붙여넣어 디자인을 적용합니다</li></ol><h3 id="실전-프롬프트-6" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-6" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>3월 뉴스레터를 작성해줘. 대상은 B2B SaaS 고객사 담당자들이야.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[이번 달 소식]</span></span>
<span class="line"><span>1. 제품 업데이트</span></span>
<span class="line"><span>   - AI 자동 일정 관리 기능 출시</span></span>
<span class="line"><span>   - 모바일 앱 2.0 업데이트 (오프라인 모드 지원)</span></span>
<span class="line"><span>   - API v3 정식 오픈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 고객 성공 사례</span></span>
<span class="line"><span>   - D사: 도입 6개월 만에 프로젝트 납기 준수율 40% 향상</span></span>
<span class="line"><span>   - E사: 팀 간 소통 시간 50% 절감 사례</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 업계 동향</span></span>
<span class="line"><span>   - 프로젝트 관리 시장 2026년 전망</span></span>
<span class="line"><span>   - 원격 근무 트렌드와 협업 도구 변화</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 이벤트</span></span>
<span class="line"><span>   - 4/15 온라인 웨비나: &quot;AI 시대의 프로젝트 관리&quot;</span></span>
<span class="line"><span>   - 4/20~22 서울 IT 엑스포 참가</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[뉴스레터 구성]</span></span>
<span class="line"><span>1. 인사말 (계절감 반영, 짧게)</span></span>
<span class="line"><span>2. 이달의 하이라이트 (가장 중요한 소식 1개를 크게)</span></span>
<span class="line"><span>3. 제품 업데이트 (3개를 짧게)</span></span>
<span class="line"><span>4. 고객 성공 사례 (스토리텔링 형식)</span></span>
<span class="line"><span>5. 업계 인사이트 (간결한 요약 + 시사점)</span></span>
<span class="line"><span>6. 다가오는 이벤트 (CTA 포함)</span></span>
<span class="line"><span>7. 마무리 인사</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[추가 요청]</span></span>
<span class="line"><span>- 이메일 제목 후보 5개 (호기심 유발, 클릭률 높은 스타일)</span></span>
<span class="line"><span>- 각 섹션에 적절한 CTA 버튼 문구</span></span>
<span class="line"><span>- 전체 읽기 시간 3분 이내로</span></span></code></pre></div><h3 id="예상-결과물-6" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-6" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>7개 섹션으로 구성된 뉴스레터 전문</li><li>이메일 제목 A/B 테스트용 후보 5개</li><li>섹션별 CTA 버튼 문구</li><li>이메일 마케팅 도구에 바로 적용 가능한 텍스트</li></ul><hr><h2 id="_8-고객-피드백-분석-파이프라인-⭐⭐⭐-고급" tabindex="-1">8. 고객 피드백 분석 파이프라인 ⭐⭐⭐ 고급 <a class="header-anchor" href="#_8-고객-피드백-분석-파이프라인-⭐⭐⭐-고급" aria-label="Permalink to &quot;8. 고객 피드백 분석 파이프라인 ⭐⭐⭐ 고급&quot;">​</a></h2><blockquote><p>고객 설문/리뷰/VOC 데이터를 수집-분석-인사이트 도출-액션플랜 수립까지 일괄 처리합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 10분, 실행 15분</p><h3 id="상황-설명-7" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-7" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>분기별 고객 만족도 설문 결과가 도착했습니다. 수백 건의 주관식 응답과 점수를 분석해 의미 있는 인사이트를 뽑고, 구체적인 개선 액션플랜까지 도출해야 합니다.</p><h3 id="워크플로우-7" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-7" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[설문 데이터\\n수집] --&gt; B[정량 분석\\n점수/비율]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[정성 분석\\n주관식 분류]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[핵심 인사이트\\n도출]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[액션플랜\\n수립]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[경영진\\n보고서]</span></span></code></pre></div><h3 id="단계별-진행-7" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-7" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>설문 결과를 <strong>정량 데이터</strong>(점수)와 <strong>정성 데이터</strong>(주관식)로 나눕니다</li><li>프롬프트 1단계: 정량 데이터를 분석합니다</li><li>프롬프트 2단계: 주관식 응답을 카테고리별로 분류합니다</li><li>프롬프트 3단계: 인사이트를 도출하고 액션플랜을 수립합니다</li><li>최종 보고서를 경영진과 관련 부서에 공유합니다</li></ol><h3 id="실전-프롬프트-7" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-7" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1분기 고객 만족도 설문 결과를 분석하고 액션플랜을 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[정량 데이터 - 총 응답 847건]</span></span>
<span class="line"><span>| 항목 | 평균 점수(5점) | 전분기 | 증감 |</span></span>
<span class="line"><span>|------|----------------|--------|------|</span></span>
<span class="line"><span>| 전체 만족도 | 4.1 | 3.8 | +0.3 |</span></span>
<span class="line"><span>| 제품 품질 | 4.3 | 4.1 | +0.2 |</span></span>
<span class="line"><span>| 고객 지원 | 3.5 | 3.2 | +0.3 |</span></span>
<span class="line"><span>| 가격 적정성 | 3.2 | 3.4 | -0.2 |</span></span>
<span class="line"><span>| 사용 편의성 | 3.9 | 3.6 | +0.3 |</span></span>
<span class="line"><span>| 추천 의향(NPS) | 42점 | 35점 | +7 |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[주관식 응답 - 주요 피드백 샘플 20건]</span></span>
<span class="line"><span>1. &quot;기능은 좋은데 가격이 올라서 부담된다&quot;</span></span>
<span class="line"><span>2. &quot;고객센터 전화 연결이 너무 오래 걸린다&quot;</span></span>
<span class="line"><span>3. &quot;신규 AI 기능이 정말 유용하다&quot;</span></span>
<span class="line"><span>4. &quot;모바일 앱이 자주 튕긴다&quot;</span></span>
<span class="line"><span>5. &quot;온보딩 가이드가 부실하다&quot;</span></span>
<span class="line"><span>6. &quot;경쟁사 대비 리포트 기능이 우수하다&quot;</span></span>
<span class="line"><span>7. &quot;가격 인상 이유를 모르겠다&quot;</span></span>
<span class="line"><span>8. &quot;채팅 상담은 빠르고 친절하다&quot;</span></span>
<span class="line"><span>9. &quot;대시보드 커스터마이징이 필요하다&quot;</span></span>
<span class="line"><span>10. &quot;교육 자료가 더 있으면 좋겠다&quot;</span></span>
<span class="line"><span>11. &quot;API 연동이 편리해졌다&quot;</span></span>
<span class="line"><span>12. &quot;매뉴얼이 영어로만 되어 있다&quot;</span></span>
<span class="line"><span>13. &quot;자동화 기능 덕분에 업무 시간이 절약된다&quot;</span></span>
<span class="line"><span>14. &quot;결제 수단이 제한적이다&quot;</span></span>
<span class="line"><span>15. &quot;업데이트가 너무 잦아서 적응이 어렵다&quot;</span></span>
<span class="line"><span>16. &quot;고객 성공 매니저가 큰 도움이 된다&quot;</span></span>
<span class="line"><span>17. &quot;데이터 내보내기 형식이 다양했으면 좋겠다&quot;</span></span>
<span class="line"><span>18. &quot;보안 인증 획득이 신뢰감을 준다&quot;</span></span>
<span class="line"><span>19. &quot;초기 설정이 복잡하다&quot;</span></span>
<span class="line"><span>20. &quot;커뮤니티 포럼이 활성화되었으면 좋겠다&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[분석 요청]</span></span>
<span class="line"><span>1. 정량 데이터: 항목별 트렌드 분석, 강점/약점 식별</span></span>
<span class="line"><span>2. 정성 데이터: 카테고리 분류 (제품/서비스/가격/기타)</span></span>
<span class="line"><span>3. 감성 분석: 긍정/부정/중립 비율</span></span>
<span class="line"><span>4. 핵심 인사이트 5가지</span></span>
<span class="line"><span>5. 우선순위별 액션플랜 (긴급/중요/개선)</span></span>
<span class="line"><span>6. 부서별 할당 (제품팀/CS팀/마케팅팀/경영지원)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>보고서 형식: 경영진 1페이지 요약 + 상세 분석</span></span></code></pre></div><h3 id="예상-결과물-7" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-7" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>정량 분석: 항목별 점수 트렌드 및 벤치마크 비교</li><li>정성 분석: 20건 응답의 카테고리 분류 및 감성 분석</li><li>핵심 인사이트 5가지 (데이터 근거 포함)</li><li>우선순위가 매겨진 액션플랜 (긴급 3건, 중요 5건, 개선 4건)</li><li>부서별 담당 과제 배분표</li></ul><hr><h2 id="_9-다국어-콘텐츠-제작-⭐⭐⭐-고급" tabindex="-1">9. 다국어 콘텐츠 제작 ⭐⭐⭐ 고급 <a class="header-anchor" href="#_9-다국어-콘텐츠-제작-⭐⭐⭐-고급" aria-label="Permalink to &quot;9. 다국어 콘텐츠 제작 ⭐⭐⭐ 고급&quot;">​</a></h2><blockquote><p>한국어 원본 콘텐츠를 영어, 일본어, 중국어로 현지화 번역합니다. 단순 번역이 아닌 문화적 맥락까지 반영합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 5분, 실행 20분</p><h3 id="상황-설명-8" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-8" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>글로벌 시장 진출을 위해 한국어로 작성된 제품 소개 페이지, 보도자료, 마케팅 카피를 영어/일본어/중국어로 제작해야 합니다. 번역 에이전시에 맡기면 1주일, Claude와 함께하면 당일 초안 완성이 가능합니다.</p><h3 id="워크플로우-8" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-8" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[한국어 원본\\n콘텐츠] --&gt; B[맥락 &amp; 톤\\n분석]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[영어 버전\\n생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; D[일본어 버전\\n생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; E[중국어 버전\\n생성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; F[4개 언어\\n비교 검토]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; F</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F</span></span></code></pre></div><h3 id="단계별-진행-8" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-8" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>한국어 원본 콘텐츠와 <strong>타겟 시장 정보</strong>를 준비합니다</li><li>각 언어별 톤/스타일 가이드를 지정합니다</li><li>프롬프트 1회로 3개 언어 버전을 동시에 생성합니다</li><li>각 언어 네이티브 검수자에게 리뷰를 요청합니다</li><li>피드백을 반영해 최종본을 완성합니다</li></ol><h3 id="실전-프롬프트-8" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-8" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>아래 한국어 콘텐츠를 영어, 일본어, 중국어(간체)로 현지화해줘.</span></span>
<span class="line"><span>단순 번역이 아니라 각 시장의 문화적 맥락을 반영한 현지화야.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[한국어 원본 - 제품 소개 페이지]</span></span>
<span class="line"><span>제목: 업무가 술술 풀리는 AI 프로젝트 관리</span></span>
<span class="line"><span></span></span>
<span class="line"><span>본문:</span></span>
<span class="line"><span>반복되는 일정 관리, 보고서 작성, 회의 준비에 지치셨나요?</span></span>
<span class="line"><span>[제품명]이 여러분의 업무를 스마트하게 바꿔드립니다.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>핵심 기능:</span></span>
<span class="line"><span>- AI가 자동으로 일정을 최적화합니다</span></span>
<span class="line"><span>- 클릭 한 번으로 주간 보고서가 완성됩니다</span></span>
<span class="line"><span>- 회의록이 실시간으로 정리됩니다</span></span>
<span class="line"><span></span></span>
<span class="line"><span>도입 효과:</span></span>
<span class="line"><span>✓ 관리 업무 시간 60% 절감</span></span>
<span class="line"><span>✓ 팀 생산성 40% 향상</span></span>
<span class="line"><span>✓ 보고서 품질 일관성 확보</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&quot;도입 첫 달부터 매주 3시간을 절약하고 있습니다&quot; - D사 김팀장</span></span>
<span class="line"><span></span></span>
<span class="line"><span>지금 무료 체험을 시작하세요 →</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[현지화 가이드]</span></span>
<span class="line"><span>영어 (미국 시장):</span></span>
<span class="line"><span>- 톤: 프로페셔널하면서 친근한 SaaS 마케팅 톤</span></span>
<span class="line"><span>- &quot;술술 풀리는&quot; 같은 관용구는 영어에 맞게 의역</span></span>
<span class="line"><span>- 수치는 그대로 유지</span></span>
<span class="line"><span>- CTA는 미국 SaaS 관례에 맞게</span></span>
<span class="line"><span></span></span>
<span class="line"><span>일본어 (일본 시장):</span></span>
<span class="line"><span>- 톤: 정중하고 신뢰감 있는 비즈니스 톤 (ですます조)</span></span>
<span class="line"><span>- 일본 비즈니스 문화에 맞는 표현 사용</span></span>
<span class="line"><span>- &quot;무료 체험&quot; → 일본에서 선호하는 CTA 스타일로</span></span>
<span class="line"><span></span></span>
<span class="line"><span>중국어 간체 (중국 시장):</span></span>
<span class="line"><span>- 톤: 세련되고 기술력이 느껴지는 톤</span></span>
<span class="line"><span>- 중국 비즈니스 관행에 맞는 표현</span></span>
<span class="line"><span>- CTA는 중국 시장 관례에 맞게</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[추가 요청]</span></span>
<span class="line"><span>- 각 언어별 SEO 키워드 3개 제안</span></span>
<span class="line"><span>- 각 언어별 메타 디스크립션 (155자 이내)</span></span>
<span class="line"><span>- 현지화 시 변경한 부분과 이유 설명</span></span></code></pre></div><h3 id="예상-결과물-8" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-8" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li>영어/일본어/중국어 3개 버전의 현지화된 제품 소개 페이지</li><li>각 언어별 SEO 키워드 3개 및 메타 디스크립션</li><li>현지화 변경 사항 주석 (원본과 다른 부분과 그 이유)</li><li>네이티브 검수 시 확인할 포인트 리스트</li></ul><hr><h2 id="_10-프로젝트-킥오프-패키지-⭐⭐⭐-고급" tabindex="-1">10. 프로젝트 킥오프 패키지 ⭐⭐⭐ 고급 <a class="header-anchor" href="#_10-프로젝트-킥오프-패키지-⭐⭐⭐-고급" aria-label="Permalink to &quot;10. 프로젝트 킥오프 패키지 ⭐⭐⭐ 고급&quot;">​</a></h2><blockquote><p>프로젝트 기본 정보만 입력하면 기획서, 일정표, 역할분담표, 킥오프 미팅 초대 이메일까지 한 번에 생성합니다.</p></blockquote><p><strong>소요 시간:</strong> 설정 10분, 실행 20분</p><h3 id="상황-설명-9" tabindex="-1">상황 설명 <a class="header-anchor" href="#상황-설명-9" aria-label="Permalink to &quot;상황 설명&quot;">​</a></h3><p>새 프로젝트가 승인되었고, 2주 내에 킥오프 미팅을 열어야 합니다. 기획서 초안, 마일스톤 일정, 팀원별 역할 배분, 킥오프 미팅 안건과 초대 이메일까지 한꺼번에 준비합니다.</p><h3 id="워크플로우-9" tabindex="-1">워크플로우 <a class="header-anchor" href="#워크플로우-9" aria-label="Permalink to &quot;워크플로우&quot;">​</a></h3><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart LR</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    A[프로젝트\\n기본 정보] --&gt; B[기획서\\n초안 작성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    B --&gt; C[마일스톤\\n일정표]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    C --&gt; D[역할분담표\\nR&amp;R 정의]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    D --&gt; E[킥오프 미팅\\n안건 구성]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    E --&gt; F[초대 이메일\\n발송]</span></span></code></pre></div><h3 id="단계별-진행-9" tabindex="-1">단계별 진행 <a class="header-anchor" href="#단계별-진행-9" aria-label="Permalink to &quot;단계별 진행&quot;">​</a></h3><ol><li>프로젝트의 <strong>기본 정보, 목표, 제약 조건</strong>을 정리합니다</li><li>참여 인원과 각자의 전문 분야를 파악합니다</li><li>프롬프트에 모든 정보를 입력해 4종 문서를 생성합니다</li><li>각 문서를 검토하고 필요 시 수정합니다</li><li>킥오프 미팅 이메일을 발송하고 프로젝트를 시작합니다</li></ol><h3 id="실전-프롬프트-9" tabindex="-1">실전 프롬프트 <a class="header-anchor" href="#실전-프롬프트-9" aria-label="Permalink to &quot;실전 프롬프트&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>새 프로젝트의 킥오프 패키지 4종을 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[프로젝트 기본 정보]</span></span>
<span class="line"><span>- 프로젝트명: [모바일 앱 3.0 리뉴얼]</span></span>
<span class="line"><span>- 기간: [2026년 4월 ~ 8월 (5개월)]</span></span>
<span class="line"><span>- 예산: [2억 5천만원]</span></span>
<span class="line"><span>- 목표:</span></span>
<span class="line"><span>  - 사용자 경험(UX) 전면 개선</span></span>
<span class="line"><span>  - 신규 AI 기능 3종 탑재</span></span>
<span class="line"><span>  - 앱 성능 50% 향상</span></span>
<span class="line"><span>  - 다크 모드 지원</span></span>
<span class="line"><span>- 배경: 기존 앱의 사용자 이탈률 증가 (월 15%), 경쟁사 대비 UX 열위</span></span>
<span class="line"><span>- 성공 지표: DAU 30% 증가, 앱스토어 평점 4.5 이상, 이탈률 10% 이하</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[팀 구성]</span></span>
<span class="line"><span>- PM: 김민수 대리 (전체 관리)</span></span>
<span class="line"><span>- UX 디자이너: 박서연 사원 (UI/UX 설계)</span></span>
<span class="line"><span>- 프론트엔드: 이준호 대리 (React Native)</span></span>
<span class="line"><span>- 백엔드: 최지원 과장 (API, 서버)</span></span>
<span class="line"><span>- AI 엔지니어: 정하늘 대리 (ML 모델)</span></span>
<span class="line"><span>- QA: 한소희 사원 (테스트)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 1: 프로젝트 기획서]</span></span>
<span class="line"><span>구성:</span></span>
<span class="line"><span>1. 프로젝트 개요 (배경, 목표, 범위)</span></span>
<span class="line"><span>2. 기대 효과 (정량적 + 정성적)</span></span>
<span class="line"><span>3. 주요 기능 명세 (기능별 설명)</span></span>
<span class="line"><span>4. 기술 스택 및 아키텍처 방향</span></span>
<span class="line"><span>5. 리스크 관리 계획 (위험 요소 + 대응)</span></span>
<span class="line"><span>6. 예산 배분안 (항목별)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 2: 마일스톤 일정표]</span></span>
<span class="line"><span>- 5개월을 4~5단계로 나눠줘</span></span>
<span class="line"><span>- 각 단계: 기간, 주요 산출물, 체크포인트</span></span>
<span class="line"><span>- 주요 마일스톤 날짜 명시</span></span>
<span class="line"><span>- 버퍼 기간 포함</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 3: 역할분담표 (R&amp;R)]</span></span>
<span class="line"><span>- RACI 매트릭스 형태</span></span>
<span class="line"><span>- 업무별 Responsible / Accountable / Consulted / Informed</span></span>
<span class="line"><span>- 각 팀원의 주요 책임과 산출물 명시</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[결과물 4: 킥오프 미팅 안건 및 초대 이메일]</span></span>
<span class="line"><span>- 미팅 안건 (60분 구성): 시간 배분 포함</span></span>
<span class="line"><span>- 초대 이메일: 프로젝트 소개 + 미팅 안건 + 사전 준비 사항</span></span>
<span class="line"><span>- 톤: 기대감을 주면서 전문적인</span></span></code></pre></div><h3 id="예상-결과물-9" tabindex="-1">예상 결과물 <a class="header-anchor" href="#예상-결과물-9" aria-label="Permalink to &quot;예상 결과물&quot;">​</a></h3><ul><li><strong>기획서</strong>: 6개 섹션으로 구성된 프로젝트 기획서 초안 (예산 배분, 리스크 관리 포함)</li><li><strong>일정표</strong>: 5개월을 단계별로 나눈 마일스톤 일정 (주요 체크포인트와 버퍼 포함)</li><li><strong>역할분담표</strong>: 6명 팀원의 RACI 매트릭스 (업무 10~15개 항목)</li><li><strong>킥오프 이메일</strong>: 60분 미팅 안건과 참석자에게 보낼 초대 이메일</li></ul><hr><h2 id="워크플로우-조합-팁" tabindex="-1">워크플로우 조합 팁 <a class="header-anchor" href="#워크플로우-조합-팁" aria-label="Permalink to &quot;워크플로우 조합 팁&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">레시피를 연결하면 더 강력합니다</p><ul><li><strong>레시피 3 + 1</strong>: 회의록에서 나온 액션 아이템을 주간 보고서에 자동 반영</li><li><strong>레시피 4 + 6</strong>: 매출 분석 결과를 경쟁사 분석과 결합해 전략 보고서 작성</li><li><strong>레시피 8 + 7</strong>: 고객 피드백 인사이트를 뉴스레터 콘텐츠로 활용</li><li><strong>레시피 9 + 7</strong>: 뉴스레터를 다국어로 동시 발행</li></ul></div><div class="tip custom-block"><p class="custom-block-title">프롬프트 저장소를 만드세요</p><p>자주 쓰는 워크플로우 프롬프트를 노션이나 사내 위키에 저장해두면, 팀원 누구나 동일한 품질의 결과물을 만들 수 있습니다. 프롬프트 안의 <code>[괄호]</code> 부분만 바꾸면 됩니다.</p></div>`,149)])])}const k=a(i,[["render",e]]);export{u as __pageData,k as default};
