import{_ as a,o as n,c as t,a2 as p}from"./chunks/framework.DS_HIvHc.js";const h=JSON.parse('{"title":"Projects & Memory 활용법","description":"","frontmatter":{},"headers":[],"relativePath":"guide/projects.md","filePath":"guide/projects.md","lastUpdated":1773710852000}'),e={name:"guide/projects.md"};function l(o,s,i,c,r,d){return n(),t("div",null,[...s[0]||(s[0]=[p(`<h1 id="projects-memory-활용법" tabindex="-1">Projects &amp; Memory 활용법 <a class="header-anchor" href="#projects-memory-활용법" aria-label="Permalink to &quot;Projects &amp; Memory 활용법&quot;">​</a></h1><blockquote><p>매번 같은 설명을 반복하지 마세요. 프로젝트를 만들면 Claude가 &quot;우리 팀 규칙&quot;을 기억하고, Memory 기능으로 대화할수록 더 똑똑해집니다.</p></blockquote><h2 id="projects란" tabindex="-1">Projects란? <a class="header-anchor" href="#projects란" aria-label="Permalink to &quot;Projects란?&quot;">​</a></h2><p>프로젝트(Projects)는 <strong>주제별로 Claude와의 작업 공간을 분리하는 기능</strong>입니다.</p><table tabindex="0"><thead><tr><th>프로젝트 없이</th><th>프로젝트 사용 시</th></tr></thead><tbody><tr><td>매번 &quot;보고서는 존댓말로 써줘&quot; 반복</td><td>한 번 설정하면 자동 적용</td></tr><tr><td>모든 대화가 한 곳에 섞임</td><td>주제별로 깔끔하게 분리</td></tr><tr><td>이전 맥락을 매번 설명</td><td>프로젝트 안에서 맥락 유지</td></tr><tr><td>팀원과 공유 불가</td><td>팀원과 프로젝트 공유 가능</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">쉽게 이해하기</p><p>프로젝트 = <strong>&quot;Claude 전용 업무 폴더&quot;</strong> 라고 생각하면 됩니다. 이메일 작업은 &quot;이메일&quot; 폴더에, 보고서 작업은 &quot;보고서&quot; 폴더에 넣는 것처럼요.</p></div><h2 id="프로젝트-만들기-관리" tabindex="-1">프로젝트 만들기 &amp; 관리 <a class="header-anchor" href="#프로젝트-만들기-관리" aria-label="Permalink to &quot;프로젝트 만들기 &amp; 관리&quot;">​</a></h2><h3 id="새-프로젝트-만들기" tabindex="-1">새 프로젝트 만들기 <a class="header-anchor" href="#새-프로젝트-만들기" aria-label="Permalink to &quot;새 프로젝트 만들기&quot;">​</a></h3><ol><li>Claude Desktop 좌측 사이드바에서 <strong>&quot;Projects&quot;</strong> 클릭</li><li><strong>&quot;+ New Project&quot;</strong> 버튼 클릭</li><li>프로젝트 이름 입력 (예: <code>주간보고</code>, <code>거래처 관리</code>)</li><li>필요 시 설명(Description) 추가</li></ol><h3 id="프로젝트-이름-규칙-추천" tabindex="-1">프로젝트 이름 규칙 추천 <a class="header-anchor" href="#프로젝트-이름-규칙-추천" aria-label="Permalink to &quot;프로젝트 이름 규칙 추천&quot;">​</a></h3><table tabindex="0"><thead><tr><th>분류</th><th>이름 예시</th><th>설명</th></tr></thead><tbody><tr><td>정기 업무</td><td><code>주간보고</code>, <code>월간실적</code></td><td>반복 업무별로 분리</td></tr><tr><td>부서/팀</td><td><code>마케팅팀 콘텐츠</code>, <code>인사팀 채용</code></td><td>부서 업무별로 분리</td></tr><tr><td>프로젝트</td><td><code>2026 신제품 론칭</code>, <code>사옥 이전</code></td><td>한시적 프로젝트별로 분리</td></tr><tr><td>거래처</td><td><code>A사 커뮤니케이션</code>, <code>B사 제안서</code></td><td>거래처별로 분리</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">이름 짓기 팁</p><p>프로젝트 이름은 <strong>짧고 명확하게</strong> 지어야 나중에 빨리 찾을 수 있습니다. &quot;김대리가 부탁한 그 건&quot;보다 &quot;2026 상반기 예산안&quot;이 훨씬 낫습니다.</p></div><h3 id="프로젝트-관리" tabindex="-1">프로젝트 관리 <a class="header-anchor" href="#프로젝트-관리" aria-label="Permalink to &quot;프로젝트 관리&quot;">​</a></h3><ul><li><strong>이름 변경</strong>: 프로젝트 설정(⚙️)에서 이름 수정 가능</li><li><strong>삭제</strong>: 프로젝트 설정에서 삭제 (삭제 시 안의 대화도 함께 삭제되니 주의)</li><li><strong>보관(Archive)</strong>: 당장 쓰지 않지만 삭제하긴 아까운 프로젝트는 보관 처리</li></ul><div class="warning custom-block"><p class="custom-block-title">주의</p><p>프로젝트를 삭제하면 <strong>안에 포함된 모든 대화 기록이 함께 삭제</strong>됩니다. 중요한 결과물은 반드시 별도로 저장한 뒤 삭제하세요.</p></div><h2 id="custom-instructions-설정" tabindex="-1">Custom Instructions 설정 <a class="header-anchor" href="#custom-instructions-설정" aria-label="Permalink to &quot;Custom Instructions 설정&quot;">​</a></h2><p>Custom Instructions는 프로젝트의 <strong>핵심 기능</strong>입니다. 프로젝트 안에서 Claude가 항상 따라야 할 규칙을 미리 정해두는 것이죠.</p><h3 id="설정-방법" tabindex="-1">설정 방법 <a class="header-anchor" href="#설정-방법" aria-label="Permalink to &quot;설정 방법&quot;">​</a></h3><ol><li>프로젝트 열기</li><li>프로젝트 이름 옆 <strong>설정(⚙️) 아이콘</strong> 클릭</li><li><strong>&quot;Custom Instructions&quot;</strong> 영역에 규칙 입력</li><li>저장</li></ol><h3 id="실전-예시-보고서-작성-규칙" tabindex="-1">실전 예시: 보고서 작성 규칙 <a class="header-anchor" href="#실전-예시-보고서-작성-규칙" aria-label="Permalink to &quot;실전 예시: 보고서 작성 규칙&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>이 프로젝트에서는 아래 규칙을 항상 따라줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 문체: 존댓말(합니다체) 사용</span></span>
<span class="line"><span>2. 분량: A4 기준 2장 이내</span></span>
<span class="line"><span>3. 구조: 반드시 표(table) 포함</span></span>
<span class="line"><span>4. 머리말: &quot;OO팀 주간 업무 보고&quot; 제목으로 시작</span></span>
<span class="line"><span>5. 날짜: 보고 기간을 상단에 표시 (예: 2026.03.09 ~ 2026.03.13)</span></span>
<span class="line"><span>6. 마무리: &quot;이슈사항&quot; → &quot;다음 주 계획&quot; 순서로 끝내기</span></span></code></pre></div><h3 id="실전-예시-브랜드-톤-회사-정보" tabindex="-1">실전 예시: 브랜드 톤 &amp; 회사 정보 <a class="header-anchor" href="#실전-예시-브랜드-톤-회사-정보" aria-label="Permalink to &quot;실전 예시: 브랜드 톤 &amp; 회사 정보&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>우리 회사 기본 정보:</span></span>
<span class="line"><span>- 회사명: (주)한빛솔루션</span></span>
<span class="line"><span>- 영문명: Hanbit Solutions Inc.</span></span>
<span class="line"><span>- 대표: 박진우</span></span>
<span class="line"><span>- 업종: IT 컨설팅 / 디지털 전환 솔루션</span></span>
<span class="line"><span>- 슬로건: &quot;기술로 밝히는 내일&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>브랜드 톤:</span></span>
<span class="line"><span>- 전문적이되 딱딱하지 않게</span></span>
<span class="line"><span>- 자신감 있되 겸손하게</span></span>
<span class="line"><span>- &quot;파트너&quot;라는 단어를 자주 사용</span></span>
<span class="line"><span>- &quot;솔루션 제공&quot;보다 &quot;함께 해결&quot;이라는 표현 선호</span></span>
<span class="line"><span>- 외래어 남용 금지 (가능하면 한국어 표현 사용)</span></span></code></pre></div><h3 id="실전-예시-이메일-커뮤니케이션-규칙" tabindex="-1">실전 예시: 이메일 커뮤니케이션 규칙 <a class="header-anchor" href="#실전-예시-이메일-커뮤니케이션-규칙" aria-label="Permalink to &quot;실전 예시: 이메일 커뮤니케이션 규칙&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>이메일 작성 시 규칙:</span></span>
<span class="line"><span>- 서두: 인사말 포함 (&quot;안녕하세요, OOO입니다.&quot;)</span></span>
<span class="line"><span>- 본문: 핵심을 먼저, 배경 설명은 그 다음</span></span>
<span class="line"><span>- 요청사항: 번호 매기기로 명확하게</span></span>
<span class="line"><span>- 마무리: &quot;검토 부탁드립니다. 감사합니다.&quot;</span></span>
<span class="line"><span>- 서명: 내 이름/직책/연락처 포함</span></span>
<span class="line"><span>- 회신 기한이 있으면 반드시 명시</span></span>
<span class="line"><span></span></span>
<span class="line"><span>내 정보:</span></span>
<span class="line"><span>- 이름: 김서연</span></span>
<span class="line"><span>- 직책: 마케팅팀 과장</span></span>
<span class="line"><span>- 연락처: 02-1234-5678 (내선 302)</span></span>
<span class="line"><span>- 이메일: sy.kim@hanbit.co.kr</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Custom Instructions를 잘 쓰는 비결</p><p><strong>&quot;매번 반복해서 말하는 것&quot;을 적으세요.</strong> 대화할 때 &quot;아, 또 이거 설명해야 하네&quot; 싶은 내용이 바로 Custom Instructions에 넣어야 할 내용입니다.</p></div><h2 id="memory-기능" tabindex="-1">Memory 기능 <a class="header-anchor" href="#memory-기능" aria-label="Permalink to &quot;Memory 기능&quot;">​</a></h2><p>Memory는 Claude가 <strong>여러 대화에 걸쳐 배운 내용을 기억하는 기능</strong>입니다. Custom Instructions가 &quot;내가 직접 알려준 규칙&quot;이라면, Memory는 &quot;Claude가 대화하면서 스스로 학습한 내용&quot;입니다.</p><h3 id="memory가-기억하는-것" tabindex="-1">Memory가 기억하는 것 <a class="header-anchor" href="#memory가-기억하는-것" aria-label="Permalink to &quot;Memory가 기억하는 것&quot;">​</a></h3><table tabindex="0"><thead><tr><th>기억함 ✅</th><th>기억하지 않음 ❌</th></tr></thead><tbody><tr><td>선호하는 문체/톤</td><td>일회성 대화 내용</td></tr><tr><td>자주 사용하는 양식</td><td>민감한 개인정보 (비밀번호 등)</td></tr><tr><td>사용자의 역할/직책</td><td>특정 대화의 세부 내용 전체</td></tr><tr><td>피드백으로 교정한 내용</td><td>다른 사용자의 정보</td></tr><tr><td>반복적으로 요청한 스타일</td><td>한 번만 언급된 임시 정보</td></tr></tbody></table><h3 id="memory가-쌓이는-과정" tabindex="-1">Memory가 쌓이는 과정 <a class="header-anchor" href="#memory가-쌓이는-과정" aria-label="Permalink to &quot;Memory가 쌓이는 과정&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[1차 대화]</span></span>
<span class="line"><span>나: &quot;보고서 써줘&quot; → Claude가 기본 스타일로 작성</span></span>
<span class="line"><span>나: &quot;아, 우리 팀은 불릿 포인트 대신 번호 매기기를 써&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[2차 대화]</span></span>
<span class="line"><span>나: &quot;보고서 써줘&quot; → Claude가 번호 매기기 스타일로 작성 ✅</span></span>
<span class="line"><span>(이전에 배운 선호사항을 기억)</span></span></code></pre></div><h3 id="기억-확인-관리" tabindex="-1">기억 확인 &amp; 관리 <a class="header-anchor" href="#기억-확인-관리" aria-label="Permalink to &quot;기억 확인 &amp; 관리&quot;">​</a></h3><p><strong>확인 방법:</strong></p><ol><li>Claude Desktop 설정(Settings)으로 이동</li><li><strong>&quot;Memory&quot;</strong> 섹션 확인</li><li>Claude가 기억하고 있는 항목 목록 확인</li></ol><p><strong>특정 기억 삭제:</strong></p><ul><li>기억 목록에서 개별 항목 옆 <strong>삭제 버튼</strong> 클릭</li></ul><p><strong>전체 기억 초기화:</strong></p><ul><li>Memory 설정에서 <strong>&quot;Clear All Memory&quot;</strong> 선택</li></ul><p><strong>대화 중 관리:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>지금부터 보고서 양식은 이전 스타일 말고,</span></span>
<span class="line"><span>표 중심으로 바꿔서 기억해줘.</span></span></code></pre></div><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>내가 전에 &quot;반말로 써달라&quot;고 한 거 잊어줘.</span></span>
<span class="line"><span>앞으로는 존댓말로 작성해줘.</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Memory 관리 팁</p><p>Claude가 잘못 기억한 정보가 있으면 빨리 수정하세요. 잘못된 기억이 누적되면 이후 모든 대화에 영향을 줍니다. 정기적으로 Memory 목록을 확인하는 습관을 들이세요.</p></div><h2 id="프로젝트-활용-시나리오" tabindex="-1">프로젝트 활용 시나리오 <a class="header-anchor" href="#프로젝트-활용-시나리오" aria-label="Permalink to &quot;프로젝트 활용 시나리오&quot;">​</a></h2><h3 id="시나리오-1-주간보고-프로젝트" tabindex="-1">시나리오 1: &quot;주간보고&quot; 프로젝트 <a class="header-anchor" href="#시나리오-1-주간보고-프로젝트" aria-label="Permalink to &quot;시나리오 1: &quot;주간보고&quot; 프로젝트&quot;">​</a></h3><p><strong>목표:</strong> 매주 같은 양식으로 보고서를 빠르게 작성</p><p><strong>Custom Instructions 설정:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>주간 업무 보고서 규칙:</span></span>
<span class="line"><span>- 제목: &quot;[마케팅팀] 주간 업무 보고 (MM.DD ~ MM.DD)&quot;</span></span>
<span class="line"><span>- 구조: 핵심 성과(3개) → 진행 중(표) → 이슈 → 다음 주 계획</span></span>
<span class="line"><span>- 성과는 수치(%, 건, 원)를 반드시 포함</span></span>
<span class="line"><span>- 전체 분량 A4 1.5장 이내</span></span>
<span class="line"><span>- 보고 대상: 김 팀장님</span></span></code></pre></div><p><strong>매주 이렇게만 입력하면 끝:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>이번 주(3/9~3/13) 보고서 써줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>한 일:</span></span>
<span class="line"><span>- 인스타 캠페인 집행, 도달 12만</span></span>
<span class="line"><span>- 블로그 포스팅 3건 발행</span></span>
<span class="line"><span>- A사 콜라보 미팅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이슈:</span></span>
<span class="line"><span>- 예산 소진율 87%, 추가 배정 필요</span></span>
<span class="line"><span></span></span>
<span class="line"><span>다음 주:</span></span>
<span class="line"><span>- 2분기 캠페인 기획안 제출</span></span>
<span class="line"><span>- 유튜브 채널 리뉴얼 시안 검토</span></span></code></pre></div><h3 id="시나리오-2-거래처-관리-프로젝트" tabindex="-1">시나리오 2: &quot;거래처 관리&quot; 프로젝트 <a class="header-anchor" href="#시나리오-2-거래처-관리-프로젝트" aria-label="Permalink to &quot;시나리오 2: &quot;거래처 관리&quot; 프로젝트&quot;">​</a></h3><p><strong>목표:</strong> 거래처별 히스토리와 커뮤니케이션을 체계적으로 관리</p><p><strong>Custom Instructions 설정:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>거래처 커뮤니케이션 규칙:</span></span>
<span class="line"><span>- 항상 &quot;귀사&quot;가 아닌 회사명으로 지칭</span></span>
<span class="line"><span>- 이전 미팅/통화 내용을 요약에 포함</span></span>
<span class="line"><span>- 후속 조치(Action Item)를 반드시 목록으로 정리</span></span>
<span class="line"><span>- 이메일은 항상 격식체, CC 대상 제안 포함</span></span>
<span class="line"><span></span></span>
<span class="line"><span>주요 거래처:</span></span>
<span class="line"><span>- A사 (담당: 이 과장) - SI 프로젝트 진행 중</span></span>
<span class="line"><span>- B사 (담당: 박 대리) - 유지보수 계약</span></span>
<span class="line"><span>- C사 (담당: 최 차장) - 신규 제안 단계</span></span></code></pre></div><p><strong>활용 예시:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>오늘 A사 이 과장님과 통화한 내용 정리해줘:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 3차 테스트 결과 공유받음, 2건 버그 발견</span></span>
<span class="line"><span>- 버그 수정 후 다음 주 화요일까지 재배포 요청</span></span>
<span class="line"><span>- 4월 1일 오픈 일정은 유지</span></span>
<span class="line"><span>- 추가 교육 일정 잡아달라고 함</span></span>
<span class="line"><span></span></span>
<span class="line"><span>이 내용으로:</span></span>
<span class="line"><span>1. 통화 요약 메모</span></span>
<span class="line"><span>2. A사에 보낼 확인 이메일</span></span>
<span class="line"><span>3. 우리 팀 내부 공유용 요약</span></span>
<span class="line"><span>이 3개를 만들어줘.</span></span></code></pre></div><h3 id="시나리오-3-팀-온보딩-프로젝트" tabindex="-1">시나리오 3: &quot;팀 온보딩&quot; 프로젝트 <a class="header-anchor" href="#시나리오-3-팀-온보딩-프로젝트" aria-label="Permalink to &quot;시나리오 3: &quot;팀 온보딩&quot; 프로젝트&quot;">​</a></h3><p><strong>목표:</strong> 신입/이동 팀원의 적응을 돕는 교육 자료 관리</p><p><strong>Custom Instructions 설정:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>온보딩 자료 작성 규칙:</span></span>
<span class="line"><span>- 대상: IT 비전공자도 이해할 수 있는 수준</span></span>
<span class="line"><span>- 문체: 친근하고 편안한 말투 (~해요, ~이에요)</span></span>
<span class="line"><span>- 전문 용어는 반드시 괄호 안에 쉬운 설명 추가</span></span>
<span class="line"><span>- 단계별 설명 시 스크린샷 위치 표시 (예: [스크린샷: 로그인 화면])</span></span>
<span class="line"><span>- 체크리스트 형태 활용</span></span>
<span class="line"><span></span></span>
<span class="line"><span>우리 팀 정보:</span></span>
<span class="line"><span>- 팀명: 디지털혁신팀 (15명)</span></span>
<span class="line"><span>- 사용 툴: Slack, Notion, Jira, Google Workspace</span></span>
<span class="line"><span>- 근무 시간: 09:00~18:00 (유연근무제)</span></span></code></pre></div><p><strong>활용 예시:</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>신입 팀원용 &quot;첫 주 가이드&quot;를 만들어줘.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Day 1~5로 나눠서:</span></span>
<span class="line"><span>- Day 1: 계정 설정, 자리 배치, 인사</span></span>
<span class="line"><span>- Day 2: 주요 툴 사용법 (Slack, Notion)</span></span>
<span class="line"><span>- Day 3: 진행 중인 프로젝트 브리핑</span></span>
<span class="line"><span>- Day 4: 실습 과제 (간단한 Notion 문서 작성)</span></span>
<span class="line"><span>- Day 5: 1:1 미팅, 질문 정리</span></span>
<span class="line"><span></span></span>
<span class="line"><span>각 날짜별로 체크리스트와 참고 링크 넣어줘.</span></span></code></pre></div><h2 id="팀-프로젝트-공유" tabindex="-1">팀 프로젝트 공유 <a class="header-anchor" href="#팀-프로젝트-공유" aria-label="Permalink to &quot;팀 프로젝트 공유&quot;">​</a></h2><p>팀원과 프로젝트를 공유하면 <strong>같은 Custom Instructions 아래에서 일관된 결과</strong>를 얻을 수 있습니다.</p><h3 id="공유-방법" tabindex="-1">공유 방법 <a class="header-anchor" href="#공유-방법" aria-label="Permalink to &quot;공유 방법&quot;">​</a></h3><ol><li>공유할 프로젝트의 <strong>설정(⚙️)</strong> 클릭</li><li><strong>&quot;Share&quot;</strong> 또는 <strong>&quot;Manage Members&quot;</strong> 선택</li><li>팀원의 이메일 주소 입력</li><li>권한 설정 (보기/편집)</li><li>초대 전송</li></ol><h3 id="공유-시-권한-구분" tabindex="-1">공유 시 권한 구분 <a class="header-anchor" href="#공유-시-권한-구분" aria-label="Permalink to &quot;공유 시 권한 구분&quot;">​</a></h3><table tabindex="0"><thead><tr><th>권한</th><th>할 수 있는 것</th><th>할 수 없는 것</th></tr></thead><tbody><tr><td><strong>뷰어(Viewer)</strong></td><td>프로젝트 내 대화, Instructions 확인</td><td>Instructions 수정, 프로젝트 삭제</td></tr><tr><td><strong>편집자(Editor)</strong></td><td>Instructions 수정, 대화 생성</td><td>프로젝트 삭제, 멤버 관리</td></tr><tr><td><strong>소유자(Owner)</strong></td><td>모든 권한</td><td>-</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">팀 공유 활용 아이디어</p><ul><li><strong>팀 공통 프로젝트</strong>: &quot;마케팅팀 공통&quot; 프로젝트에 브랜드 가이드라인을 Instructions로 설정 → 누가 작성해도 일관된 톤</li><li><strong>인수인계 프로젝트</strong>: 담당자 변경 시 프로젝트를 공유하면 맥락 전달이 쉬움</li><li><strong>교육용 프로젝트</strong>: 프롬프트 잘 쓰는 팀원의 프로젝트를 공유해 다른 팀원 학습에 활용</li></ul></div><h2 id="프로젝트-정리-팁" tabindex="-1">프로젝트 정리 팁 <a class="header-anchor" href="#프로젝트-정리-팁" aria-label="Permalink to &quot;프로젝트 정리 팁&quot;">​</a></h2><h3 id="프로젝트-구조-설계" tabindex="-1">프로젝트 구조 설계 <a class="header-anchor" href="#프로젝트-구조-설계" aria-label="Permalink to &quot;프로젝트 구조 설계&quot;">​</a></h3><div class="info custom-block"><p class="custom-block-title">추천 프로젝트 구조 (사무직 기준)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>📁 정기 업무</span></span>
<span class="line"><span>  ├─ 주간보고</span></span>
<span class="line"><span>  ├─ 월간실적</span></span>
<span class="line"><span>  └─ 분기 리뷰</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📁 커뮤니케이션</span></span>
<span class="line"><span>  ├─ 이메일 작성</span></span>
<span class="line"><span>  ├─ 거래처 A사</span></span>
<span class="line"><span>  └─ 거래처 B사</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📁 현재 프로젝트</span></span>
<span class="line"><span>  ├─ 2026 신제품 론칭</span></span>
<span class="line"><span>  └─ 사내시스템 개편</span></span>
<span class="line"><span></span></span>
<span class="line"><span>📁 팀 운영</span></span>
<span class="line"><span>  ├─ 팀 온보딩</span></span>
<span class="line"><span>  └─ 회의록 정리</span></span></code></pre></div></div><h3 id="프로젝트-정리-체크리스트" tabindex="-1">프로젝트 정리 체크리스트 <a class="header-anchor" href="#프로젝트-정리-체크리스트" aria-label="Permalink to &quot;프로젝트 정리 체크리스트&quot;">​</a></h3><table tabindex="0"><thead><tr><th>주기</th><th>할 일</th></tr></thead><tbody><tr><td><strong>매주</strong></td><td>완료된 대화 정리 / 결과물 별도 저장</td></tr><tr><td><strong>매월</strong></td><td>안 쓰는 프로젝트 보관(Archive) 처리</td></tr><tr><td><strong>분기별</strong></td><td>Custom Instructions 업데이트 / 프로젝트 구조 재점검</td></tr><tr><td><strong>반기별</strong></td><td>보관된 프로젝트 삭제 여부 검토</td></tr></tbody></table><h3 id="custom-instructions-관리-요령" tabindex="-1">Custom Instructions 관리 요령 <a class="header-anchor" href="#custom-instructions-관리-요령" aria-label="Permalink to &quot;Custom Instructions 관리 요령&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[좋은 예 - 구체적이고 구조화]</span></span>
<span class="line"><span>보고서 규칙:</span></span>
<span class="line"><span>1. 문체: 존댓말</span></span>
<span class="line"><span>2. 분량: A4 2장</span></span>
<span class="line"><span>3. 필수 포함: 표, 수치</span></span>
<span class="line"><span>4. 보고 대상: 김 팀장</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[나쁜 예 - 모호하고 너무 김]</span></span>
<span class="line"><span>보고서 잘 써줘. 깔끔하게.</span></span>
<span class="line"><span>너무 길지 않게. 적당히.</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">프로젝트를 너무 잘게 나누지 마세요</p><p>프로젝트가 20개가 넘어가면 오히려 찾기 어렵습니다. <strong>&quot;하나의 업무 맥락 = 하나의 프로젝트&quot;</strong> 원칙으로, 5~10개 수준이 관리하기 가장 좋습니다.</p></div><div class="warning custom-block"><p class="custom-block-title">보안 주의사항</p><p>Custom Instructions에 <strong>비밀번호, API 키, 개인정보(주민번호 등)</strong> 를 절대 입력하지 마세요. Instructions는 프로젝트를 공유할 때 다른 사람에게도 보입니다.</p></div>`,78)])])}const g=a(e,[["render",l]]);export{h as __pageData,g as default};
