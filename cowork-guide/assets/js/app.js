/* ============================================
   Claude Desktop Cowork Guide - Application JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');
  const menuToggle = document.querySelector('.menu-toggle');
  const headerBar = document.querySelector('.header-bar');
  const backToTop = document.querySelector('.back-to-top');
  const navLinks = document.querySelectorAll('.sidebar-nav a[data-section]');
  const headerTabs = document.querySelectorAll('.header-tab[data-section]');
  const sections = document.querySelectorAll('.guide-section');
  const searchInput = document.getElementById('search-input');
  const tocList = document.getElementById('toc-list');

  // --- Navigation ---
  function navigateTo(sectionId) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === sectionId);
    });

    // Update header tabs - find matching tab category
    const tabMap = { home:'home', 'what-is-cowork':'home', 'first-steps':'home', 'first-chat':'home',
      writing:'writing', data:'writing', meeting:'writing', daily:'writing', 'by-dept':'writing',
      'test-basic':'test-basic', 'test-advanced':'test-basic',
      prompting:'prompting', mistakes:'prompting', faq:'prompting',
      resources:'resources' };
    headerTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.section === (tabMap[sectionId] || sectionId));
    });

    closeSidebar();
    buildTOC(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.section);
    });
  });

  headerTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(tab.dataset.section);
    });
  });

  // --- TOC Generation ---
  function buildTOC(sectionId) {
    if (!tocList) return;
    tocList.innerHTML = '';

    const section = document.getElementById(sectionId);
    if (!section) return;

    const headings = section.querySelectorAll('h3');
    headings.forEach((h, i) => {
      const id = 'toc-h-' + sectionId + '-' + i;
      h.id = id;

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });

    // Observe scroll for active TOC item
    observeTOC(section);
  }

  function observeTOC(section) {
    const headings = section.querySelectorAll('h3[id]');
    if (!headings.length) return;

    const onScroll = () => {
      let current = '';
      headings.forEach(h => {
        const top = h.getBoundingClientRect().top;
        if (top < 120) current = h.id;
      });
      tocList.querySelectorAll('a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    };

    window.removeEventListener('scroll', window._tocScroll);
    window._tocScroll = onScroll;
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Sidebar Toggle (Mobile) ---
  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) {
        closeSidebar();
      } else {
        sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // --- Scroll Effects ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (headerBar) headerBar.classList.toggle('scrolled', scrollY > 10);
        if (backToTop) backToTop.classList.toggle('visible', scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Accordion ---
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('open');

      item.parentElement.querySelectorAll('.accordion-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.accordion-body').style.maxHeight = '0';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        body.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        body.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // --- Tabs ---
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.closest('.tab-container');
      const tabId = btn.dataset.tab;
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = container.querySelector(`[data-tab-panel="${tabId}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // --- Code Copy ---
  document.querySelectorAll('.code-block-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('pre code') || codeBlock.querySelector('pre');
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // --- Search ---
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) return;
      for (const section of sections) {
        if (section.textContent.toLowerCase().includes(query)) {
          navigateTo(section.id);
          break;
        }
      }
    });
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { searchInput.value = ''; searchInput.blur(); }
    });
  }

  // --- Keyboard ---
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  // --- Init ---
  navigateTo('home');
});
