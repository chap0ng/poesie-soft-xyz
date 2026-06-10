// ── EYE TRACKING ─────────────────────────────────────────────────────────────
(function () {
  const eye  = document.querySelector('.eye');
  const iris = document.querySelector('.iris');
  if (!eye || !iris) return;

  const MAX   = 10;   // max px iris moves from centre
  const LERP  = 0.12; // smoothing (lower = smoother/slower)

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', (e) => {
    const r = eye.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const angle = Math.atan2(dy, dx);
    const dist  = Math.min(MAX, Math.hypot(dx, dy) / 8);
    targetX = Math.cos(angle) * dist;
    targetY = Math.sin(angle) * dist;
  });

  (function animate() {
    currentX += (targetX - currentX) * LERP;
    currentY += (targetY - currentY) * LERP;
    iris.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  })();
})();

// ── LANGUAGE SWITCHER ─────────────────────────────────────────────────────────
(function () {
  const btnEn = document.getElementById('lang-en');
  const btnFr = document.getElementById('lang-fr');
  if (!btnEn || !btnFr) return;

  // Show language switcher on all pages
  const langSwitch = btnEn.parentElement;
  if (langSwitch) {
    langSwitch.style.display = '';
  }

  function autoTranslateProjectTitle(enTitle, lang) {
    if (!enTitle) return enTitle;
    if (lang === 'fr') {
      return enTitle.replace(/^project(\s+)/i, 'PROJET$1');
    }
    return enTitle;
  }

  function syncProjectCardTitles(lang) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      const titleEl = card.querySelector('.project-title');
      if (!titleEl) return;

      if (!card.dataset.titleEn) {
        card.dataset.titleEn =
          card.dataset.title ||
          titleEl.getAttribute('data-en') ||
          titleEl.textContent.trim();
      }

      if (!card.dataset.titleFr) {
        const explicitFr =
          titleEl.getAttribute('data-fr') ||
          card.getAttribute('data-title-fr') ||
          '';
        if (explicitFr) {
          card.dataset.titleFr = explicitFr;
        }
      }

      const enTitle = card.dataset.titleEn || '';
      const frTitle = card.dataset.titleFr || autoTranslateProjectTitle(enTitle, 'fr');
      const nextTitle = lang === 'fr' ? frTitle : enTitle;

      if (nextTitle) {
        titleEl.textContent = nextTitle;
        card.dataset.title = nextTitle;
      }
    });
  }

  function setLang(lang) {
    btnEn.classList.toggle('active', lang === 'en');
    btnFr.classList.toggle('active', lang === 'fr');

    // Update any element with data-en / data-fr attributes
    document.querySelectorAll('[data-en]').forEach(el => {
      const html = lang === 'fr'
        ? el.getAttribute('data-fr-html')
        : el.getAttribute('data-en-html');
      const text = lang === 'fr'
        ? el.getAttribute('data-fr')
        : el.getAttribute('data-en');
      if (html !== null) {
        el.innerHTML = html;
      } else if (text !== null) {
        el.textContent = text;
      }
    });

    // Update project card titles as well (cards use data-title / .project-title)
    syncProjectCardTitles(lang);

    // Persist choice
    try { localStorage.setItem('lang', lang); } catch(e) {}

    // Update global preference so other modules read latest value
    try { window.__langPref = lang; } catch(e) {}

    // Notify other UI components (e.g., menhir labels)
    window.dispatchEvent(new CustomEvent('language-change', {
      detail: { lang }
    }));
  }

  btnEn.addEventListener('click', () => setLang('en'));
  btnFr.addEventListener('click', () => setLang('fr'));

  // Init from stored preference or default EN
  let saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch(e) {}
  setLang(saved);
  
  // Make buttons visible after initialization
  btnEn.classList.remove('uninitialized');
  btnFr.classList.remove('uninitialized');
})();