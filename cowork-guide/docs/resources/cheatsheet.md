# 프롬프트 치트시트

> 인쇄해서 책상에 놓고 쓰세요! A4 한 장에 핵심만 담았습니다.

<script setup>
function handlePrint() {
  window.print()
}
</script>

<button class="print-btn" @click="handlePrint">🖨️ 인쇄하기</button>

<div class="cheatsheet">

<div class="cs-header">
  <h2>Claude 프롬프트 치트시트</h2>
  <p class="cs-subtitle">핵심만 담은 A4 한 장 가이드</p>
</div>

<div class="cs-grid">

<!-- ===== 왼쪽 컬럼 ===== -->
<div class="cs-col">

<div class="cs-section">
<h3>🧩 프롬프트 공식</h3>
<div class="cs-formula">
<span class="tag t1">상황</span> + <span class="tag t2">대상</span> + <span class="tag t3">목적</span> + <span class="tag t4">형식</span> + <span class="tag t5">톤</span>
</div>
<p class="cs-example">"<em>신제품 출시(상황)</em>를 <em>고객(대상)</em>에게 <em>알리기 위한(목적)</em> <em>이메일(형식)</em>을 <em>친근한 톤(톤)</em>으로 써줘"</p>
</div>

<div class="cs-section">
<h3>⭐ 핵심 원칙 5가지</h3>
<ul class="cs-principles">
<li><span class="p-icon">🎯</span> <strong>구체적으로</strong> — 모호한 지시는 모호한 결과</li>
<li><span class="p-icon">🧱</span> <strong>구조를 잡아줘</strong> — 항목·형식을 미리 지정</li>
<li><span class="p-icon">🔄</span> <strong>반복 수정</strong> — 한 번에 완벽할 필요 없음</li>
<li><span class="p-icon">📏</span> <strong>범위를 한정</strong> — 한 번에 한 가지 요청</li>
<li><span class="p-icon">✅</span> <strong>예시를 제공</strong> — 원하는 결과물 샘플 첨부</li>
</ul>
</div>

<div class="cs-section">
<h3>🎨 톤 키워드</h3>
<div class="cs-tone-grid">
<span class="tone-chip tc1">격식체</span>
<span class="tone-chip tc2">친근하게</span>
<span class="tone-chip tc3">공식적으로</span>
<span class="tone-chip tc4">캐주얼</span>
<span class="tone-chip tc5">MZ감성</span>
<span class="tone-chip tc1">간결하게</span>
<span class="tone-chip tc3">설득력 있게</span>
<span class="tone-chip tc2">부드럽게</span>
</div>
</div>

</div>

<!-- ===== 중앙 컬럼 ===== -->
<div class="cs-col">

<div class="cs-section">
<h3>💬 상황별 시작 문장 10선</h3>
<ol class="cs-starters">
<li><strong>이메일</strong><br/><code>[상대]에게 [목적] 이메일 써줘</code></li>
<li><strong>보고서</strong><br/><code>[주제] 보고서를 [분량]으로 써줘</code></li>
<li><strong>데이터</strong><br/><code>[파일명] 데이터를 분석해줘</code></li>
<li><strong>회의록</strong><br/><code>다음 내용을 회의록으로 정리해줘</code></li>
<li><strong>번역</strong><br/><code>[원문]을 [언어]로 번역해줘</code></li>
<li><strong>요약</strong><br/><code>다음 글을 3줄로 요약해줘</code></li>
<li><strong>기획</strong><br/><code>[주제] 기획안 초안 만들어줘</code></li>
<li><strong>비교</strong><br/><code>[A]와 [B]를 표로 비교해줘</code></li>
<li><strong>검토</strong><br/><code>다음 글의 문법/맞춤법 검토해줘</code></li>
<li><strong>아이디어</strong><br/><code>[주제] 관련 아이디어 10개 제안해줘</code></li>
</ol>
</div>

</div>

<!-- ===== 오른쪽 컬럼 ===== -->
<div class="cs-col">

<div class="cs-section">
<h3>✨ 마법의 후속 질문 8가지</h3>
<ol class="cs-followups">
<li>"더 <strong>구체적</strong>으로 써줘"</li>
<li>"<strong>표</strong> 형식으로 바꿔줘"</li>
<li>"<strong>반대</strong> 입장에서도 써줘"</li>
<li>"<strong>초보자</strong>도 이해하게 바꿔줘"</li>
<li>"<strong>핵심만</strong> 3줄로 줄여줘"</li>
<li>"<strong>예시</strong>를 추가해줘"</li>
<li>"<strong>톤</strong>을 더 격식체로 바꿔줘"</li>
<li>"<strong>빠진 내용</strong>이 있으면 추가해줘"</li>
</ol>
</div>

<div class="cs-section">
<h3>🚫 하면 안 되는 것 5가지</h3>
<ul class="cs-donts">
<li>❌ 개인정보·기밀 문서 그대로 입력</li>
<li>❌ 결과를 검증 없이 그대로 사용</li>
<li>❌ 한 번에 너무 많은 요청 몰아넣기</li>
<li>❌ 맥락 없이 "잘 써줘"만 입력</li>
<li>❌ AI 결과물을 본인 검토 없이 발송</li>
</ul>
</div>

<div class="cs-section">
<h3>⌨️ 단축키 모음</h3>
<table class="cs-keys">
<tr><td><kbd>Shift</kbd>+<kbd>Enter</kbd></td><td>줄바꿈</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>C</kbd></td><td>응답 복사</td></tr>
<tr><td><kbd>/</kbd></td><td>명령어 메뉴</td></tr>
<tr><td><kbd>Ctrl</kbd>+<kbd>↑</kbd></td><td>이전 입력 불러오기</td></tr>
</table>
</div>

</div>

</div><!-- /cs-grid -->

<div class="cs-footer">
  <div class="cs-qr">[ QR ]</div>
  <p><strong>Claude Cowork Guide</strong> — cowork-guide.github.io</p>
</div>

</div><!-- /cheatsheet -->

<style>
/* ====== Print Button ====== */
.print-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 24px;
  background: #E8714A;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background 0.2s;
}
.print-btn:hover {
  background: #d4613c;
}

/* ====== Cheatsheet Container ====== */
.cheatsheet {
  background: #fff;
  color: #1a1a1a;
  border: 2px solid #E8714A;
  border-radius: 12px;
  padding: 20px 24px 16px;
  font-size: 13px;
  line-height: 1.45;
  max-width: 960px;
}

.cs-header {
  text-align: center;
  border-bottom: 2px solid #E8714A;
  padding-bottom: 8px;
  margin-bottom: 14px;
}
.cs-header h2 {
  margin: 0 0 2px;
  font-size: 20px;
  color: #E8714A;
  border: none;
  padding: 0;
}
.cs-subtitle {
  margin: 0;
  font-size: 12px;
  color: #888;
}

/* ====== 3-Column Grid ====== */
.cs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

.cs-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ====== Section ====== */
.cs-section h3 {
  font-size: 13px;
  margin: 0 0 6px;
  padding: 3px 8px;
  background: #FFF3EE;
  border-left: 3px solid #E8714A;
  border-radius: 0 4px 4px 0;
  color: #c05a2c;
}

/* ====== Formula ====== */
.cs-formula {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  margin: 4px 0;
}
.tag {
  display: inline-block;
  padding: 2px 7px;
  border-radius: 4px;
  font-size: 11px;
  color: #fff;
}
.t1 { background: #E8714A; }
.t2 { background: #2e86de; }
.t3 { background: #10ac84; }
.t4 { background: #8854d0; }
.t5 { background: #f7b731; color: #333; }

.cs-example {
  font-size: 11px;
  color: #666;
  margin: 4px 0 0;
  padding: 4px 6px;
  background: #f9f9f9;
  border-radius: 4px;
}

/* ====== Principles ====== */
.cs-principles {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cs-principles li {
  font-size: 12px;
  margin-bottom: 3px;
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.p-icon {
  flex-shrink: 0;
  width: 18px;
  text-align: center;
}

/* ====== Tone Chips ====== */
.cs-tone-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.tone-chip {
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}
.tc1 { background: #E8714A22; color: #c05a2c; border: 1px solid #E8714A55; }
.tc2 { background: #2e86de22; color: #1a5fa1; border: 1px solid #2e86de55; }
.tc3 { background: #10ac8422; color: #0b7a5e; border: 1px solid #10ac8455; }
.tc4 { background: #8854d022; color: #6237a0; border: 1px solid #8854d055; }
.tc5 { background: #f7b73122; color: #b88a1c; border: 1px solid #f7b73155; }

/* ====== Starters ====== */
.cs-starters {
  padding-left: 18px;
  margin: 0;
}
.cs-starters li {
  font-size: 12px;
  margin-bottom: 4px;
}
.cs-starters code {
  font-size: 11px;
  background: #f4f4f4;
  padding: 1px 5px;
  border-radius: 3px;
  color: #E8714A;
  word-break: keep-all;
}

/* ====== Follow-ups ====== */
.cs-followups {
  padding-left: 18px;
  margin: 0;
}
.cs-followups li {
  font-size: 12px;
  margin-bottom: 2px;
}

/* ====== Don'ts ====== */
.cs-donts {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cs-donts li {
  font-size: 11.5px;
  margin-bottom: 2px;
}

/* ====== Keyboard Shortcuts ====== */
.cs-keys {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
}
.cs-keys td {
  padding: 2px 4px;
  border-bottom: 1px solid #eee;
}
.cs-keys td:first-child {
  white-space: nowrap;
}
.cs-keys kbd {
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0 4px;
  font-size: 10px;
  font-family: inherit;
  box-shadow: 0 1px 0 #bbb;
}

/* ====== Footer ====== */
.cs-footer {
  margin-top: 12px;
  padding-top: 8px;
  border-top: 2px solid #E8714A;
  text-align: center;
  font-size: 12px;
}
.cs-qr {
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 2px dashed #ccc;
  border-radius: 6px;
  line-height: 60px;
  color: #aaa;
  font-size: 14px;
  margin-bottom: 4px;
}
.cs-footer p {
  margin: 4px 0 0;
  color: #666;
}

/* ====== Print Styles ====== */
@media print {
  /* Hide VitePress chrome */
  .VPNav,
  .VPSidebar,
  .VPFooter,
  .VPLocalNav,
  .VPDocFooter,
  nav,
  aside,
  footer,
  .print-btn,
  .content-container > h1,
  .content-container > blockquote,
  .VPDoc > div > div > .info {
    display: none !important;
  }

  body,
  .VPContent,
  .VPDoc {
    margin: 0 !important;
    padding: 0 !important;
    background: #fff !important;
    color: #000 !important;
  }

  .cheatsheet {
    border: 1px solid #999;
    border-radius: 0;
    padding: 12px 16px 10px;
    font-size: 11px;
    max-width: 100%;
    box-shadow: none;
    page-break-inside: avoid;
  }

  .cs-header h2 {
    font-size: 17px;
  }

  .cs-grid {
    gap: 10px;
  }

  .cs-section h3 {
    font-size: 11px;
  }

  .cs-starters li,
  .cs-followups li,
  .cs-principles li {
    font-size: 10.5px;
  }

  .cs-donts li {
    font-size: 10px;
  }

  .cs-keys {
    font-size: 10px;
  }

  @page {
    size: A4;
    margin: 10mm;
  }
}
</style>
