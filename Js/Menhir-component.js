/**
 * SVG morph component — homepage boxes.
 * On desktop: hover to morph. On mobile (≤600px): scroll to morph.
 */
(function () {

  // ── SHARED MORPH TARGET (rectangle) ──────────────────────────────────────
  const RECT = [
    15,100, 35,100, 58,100, 82,100, 106,100, 130,100,
    154,100, 178,100, 205,100, 205,110, 205,122, 205,134,
    205,146, 205,158, 205,170, 205,182, 205,192, 185,192,
    162,192, 138,192, 114,192,  90,192,  66,192,  42,192,
     15,192,  15,182,  15,170,  15,158,  15,146,  15,134,
     15,122,  15,110,  15,100,  15,100,
  ];

  const RECT_WIDE = [
     4,96,  25,96,  48,96,  72,96,  96,96, 120,96,
   144,96, 168,96, 216,96, 216,108, 216,120, 216,132,
   216,144, 216,156, 216,168, 216,180, 216,192, 196,192,
   172,192, 148,192, 124,192, 100,192,  76,192,  52,192,
     4,192,   4,180,   4,168,   4,156,   4,144,   4,132,
     4,120,   4,108,   4, 96,   4, 96,
  ];

  // ── BOX CONFIG (unchanged) ───────────────────────────────────────────────
  const BOXES = {
    box1: {
      labels: { en: 'FINE ARTS', fr: 'BEAUX-ARTS' },
      outline: [
        98.83,23.043, 72.334,49.923, 63.502,82.948, 61.582,111.364,
        71.566,153.22, 60.046,193.925, 69.262,218.501, 90.766,250.373,
        117.646,257.669, 136.463,236.549, 160.271,210.053, 168.335,182.789,
        159.887,147.844, 159.887,147.844, 159.503,134.788, 157.967,126.34,
        156.431,117.892, 153.743,102.532, 153.743,102.532, 149.903,74.883,
        150.287,48.003, 135.695,22.659, 110,16.899, 98.83,23.043,
        98.83,23.043, 98.83,23.043, 98.83,23.043, 98.83,23.043, 98.83,23.043,
        98.83,23.043, 98.83,23.043, 98.83,23.043, 98.83,23.043, 98.83,23.043,
      ],
      lines: [
        [117.646,24.963, 117.646,246.149, 0.34],
        [90.766,33.027, 148.367,54.531, 0.36],
        [85.39,51.843, 69.262,109.444, 0.36],
        [90.766,135.556, 165.263,183.941, 0.38],
        [64.27,193.157, 157.199,203.909, 0.36],
      ],
    },
    box2: {
      labels: { en: 'INTERACTION\nDESIGN', fr: "DESIGN\nD'INTERACTION" },
      outline: [
        93.092,15.418, 76.726,43.381, 50.084,79.93, 43.172,129.467,
        43.172,129.467, 61.921,164.802, 63.457,170.946, 64.993,177.09,
        57.764,227.388, 61.22,234.3, 64.676,241.212, 82.724,260.412,
        82.724,260.412, 107.684,272.317, 124.965,265.789, 144.165,244.284,
        162.981,218.94, 159.909,188.22, 163.365,162.491, 163.365,162.491,
        169.125,147.899, 169.893,140.987, 170.661,134.075, 161.812,106.821,
        161.812,106.821, 169.509,89.147, 167.205,80.698, 164.901,72.25,
        152.229,47.29, 148.773,41.146, 145.317,35.002, 124.581,16.186,
        124.581,16.186, 93.092,15.418,
      ],
      lines: [
        [86.564,61.498, 155.685,115.472, 0.35],
        [78.5,40.378, 155.685,59.194, 0.35],
        [57.38,103.739, 155.685,182.844, 0.35],
        [63.908,206.268, 139.557,190.14, 0.35],
        [78.5,240.06, 135.333,242.364, 0.35],
        [124.197,37.306, 70.82,155.963, 0.35],
        [117.093,180.924, 94.244,251.58, 0.35],
        [145.317,124.091, 148.005,145, 0.35],
        [131.877,134.545, 135.333,152.891, 0.35],
      ],
    },
    box3: {
      labels: { en: 'GAMES', fr: 'JEUX' },
      outline: [
        83.876,20.794, 35.492,39.61, 33.572,139.067, 34.724,243.132,
        50.084,263.485, 107.684,269.629, 156.837,264.637, 185.253,235.452,
        187.173,173.244, 181.413,56.89, 184.101,49.978, 186.789,43.066,
        159.141,21.946, 159.141,21.946, 119.205,20.794, 115.749,22.714,
        112.293,24.634, 83.876,20.794, 83.876,20.794, 83.876,20.794,
        83.876,20.794, 83.876,20.794, 83.876,20.794, 83.876,20.794,
        83.876,20.794, 83.876,20.794, 83.876,20.794, 83.876,20.794,
        83.876,20.794, 83.876,20.794, 83.876,20.794, 83.876,20.794,
        83.876,20.794, 83.876,20.794,
      ],
      lines: [
        [64.292,54.97, 158.373,56.122, 0.35],
        [57.764,76.858, 148.389,85.307, 0.35],
        [57.764,131.003, 161.061,124.859, 0.35],
        [50.084,167.483, 155.685,187.836, 0.35],
        [57.764,226.236, 158.373,217.788, 0.35],
        [151.845,39.226, 173.349,54.97, 0.35],
        [99.62,21.562, 141.554,250.812, 0.35],
        [56.612,28.474, 55.46,203.964, 0.35],
        [55.46,246.204, 76.964,265.405, 0.35],
      ],
    },
    box4: {
      labels: { en: '3D WORKS', fr: 'PRATIQUE 3D' },
      outline: [
        105.764,7.354, 65.444,54.586, 56.937,102.163, 38.18,149.819,
        55.06,172.042, 59.668,183.562, 64.276,195.083, 63.524,212.028,
        87.246,227.33, 90.702,236.162, 94.158,244.994, 110,260.796,
        141.861,241.679, 146.853,240.143, 151.845,238.607, 164.76,233.071,
        175.042,217.032, 183.005,204.61, 176.962,193.909, 175.042,187.765,
        173.122,181.621, 175.312,167.619, 170.704,154.391, 166.096,141.162,
        163.749,112.955, 161.829,105.275, 159.909,97.595, 158.757,57.274,
        159.141,49.21, 159.525,41.146, 146.853,30.618, 146.853,30.618,
        105.764,7.354, 105.764,7.354,
      ],
      lines: [
        [75.812,60.346, 81.956,198.204, 0.35],
        [102.692,26.17, 88.1,220.86, 0.35],
        [146.853,94.907, 152.229,178.62, 0.35],
        [152.229,178.62, 175.042,213.874, 0.35],
        [120.357,183.612, 140.709,227.004, 0.35],
        [120.357,72.634, 130.533,111.419, 0.35],
        [120.357,26.17, 140.709,54.586, 0.35],
        [140.709,54.586, 156.978,47.367, 0.35],
        [51.62,130.473, 65.06,149.78, 0.35],
        [65.06,149.78, 119.145,182.076, 0.35],
      ],
    },
  };

  // ── UTILS ────────────────────────────────────────────────────────────────
  function pts2path(p) {
    let d = `M${p[0]},${p[1]}`;
    for (let i = 2; i < p.length - 2; i += 2) d += ` L${p[i]},${p[i+1]}`;
    return d + 'Z';
  }

  function lerp(a, b, t) { return a.map((v, i) => v + (b[i] - v) * t); }

  function ease(t) { return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }

  function scaleXPoints(points, factor, centerX = 110) {
    return points.map((v, i) => i % 2 === 0 ? centerX + (v - centerX) * factor : v);
  }

  function scaleXLines(lines, factor, centerX = 110) {
    return (lines || []).map(([x1,y1,x2,y2,op]) => [
      centerX + (x1 - centerX) * factor,
      y1,
      centerX + (x2 - centerX) * factor,
      y2,
      op,
    ]);
  }

  function resolveLabel(cfg, lang) {
    return cfg.labels?.[lang] || cfg.labels?.en || cfg.label || '';
  }

  function setSvgTextLines(textEl, label) {
    const lines = String(label || '').split('\n').filter(Boolean);
    textEl.textContent = '';
    if (!lines.length) return;
    if (lines.length === 1) {
      textEl.textContent = lines[0];
      return;
    }
    lines.forEach((line, i) => {
      const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      tspan.setAttribute('x', '110');
      tspan.setAttribute('dy', i === 0 ? '-0.55em' : '1.1em');
      tspan.textContent = line;
      textEl.appendChild(tspan);
    });
  }

  // ── BUILD ─────────────────────────────────────────────────────────────────
  function build(el, cfg) {
    el.style.backgroundImage = 'none';
    const NS = 'http://www.w3.org/2000/svg';
    const target = cfg.rect === 'wide' ? RECT_WIDE : RECT;
    const slimFactor = cfg.slimFactor || 0.86;
    const sourceOutline = scaleXPoints(cfg.outline, slimFactor);
    const sourceLines = scaleXLines(cfg.lines, slimFactor);
    const defaultLabel = resolveLabel(cfg, 'en');
    const fontSize = cfg.fontSize || (defaultLabel.length > 10 ? 22 : 28);

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '0 0 220 290');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');

    // Lines
    const lineEls = sourceLines.map(([x1,y1,x2,y2,op]) => {
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1',x1); l.setAttribute('y1',y1);
      l.setAttribute('x2',x2); l.setAttribute('y2',y2);
      l.setAttribute('stroke','#a77f4e');
      l.setAttribute('stroke-width','1');
      l.setAttribute('stroke-linecap','round');
      l.setAttribute('opacity', op);
      svg.appendChild(l);
      return { el: l, base: op };
    });

    // Outline
    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', pts2path(sourceOutline));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#d4b896');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('stroke-linejoin', 'miter');
    path.setAttribute('stroke-miterlimit', '8');
    path.setAttribute('stroke-linecap', 'round');
    svg.appendChild(path);

    // Text
    const txt = document.createElementNS(NS, 'text');
    const textY = cfg.textY || (cfg.rect === 'wide' ? '144' : '146');
    txt.setAttribute('x', '110');
    txt.setAttribute('y', textY);
    txt.setAttribute('text-anchor', 'middle');
    txt.setAttribute('dominant-baseline', 'middle');
    txt.setAttribute('font-family', "'VT323',monospace");
    txt.setAttribute('font-size', fontSize);
    txt.setAttribute('letter-spacing', '3');
    txt.setAttribute('fill', '#d4b896');
    txt.setAttribute('opacity', '0');
    txt.setAttribute('pointer-events', 'none');
    setSvgTextLines(txt, defaultLabel);
    svg.appendChild(txt);

    const floatWrap = document.createElement('div');
    floatWrap.className = 'ambient-float';
    floatWrap.style.width = '100%';
    floatWrap.style.height = '100%';
    floatWrap.style.display = 'flex';
    floatWrap.style.alignItems = 'center';
    floatWrap.style.justifyContent = 'center';
    floatWrap.appendChild(svg);
    el.appendChild(floatWrap);

    // ── Animation state ──
    let raf = null, prog = 0, dir = 0, startP = 0, startT = null;
    const DUR = 580;

    function tick(ts) {
      if (!startT) startT = ts;
      const t = ease(Math.min((ts - startT) / DUR, 1));
      prog = dir > 0 ? startP + (1 - startP) * t : startP * (1 - t);
      prog = Math.max(0, Math.min(1, prog));
      applyProgress(prog);
      if ((ts - startT) < DUR) raf = requestAnimationFrame(tick);
      else { raf = null; startT = null; }
    }

    function applyProgress(p) {
      p = Math.max(0, Math.min(1, p));
      path.setAttribute('d', pts2path(lerp(sourceOutline, target, p)));
      lineEls.forEach(({el,base}) => el.setAttribute('opacity', (1-p)*base));
      txt.setAttribute('opacity', p > .58 ? (p-.58)/.42 : 0);
      const r = Math.round(180 + 32*p);
      const g = Math.round(152 + 28*p);
      const b = Math.round(118 + 32*p);
      path.setAttribute('stroke', `rgb(${r},${g},${b})`);
    }

    function morphTo(tgt) {
      if (raf) cancelAnimationFrame(raf);
      startP = prog;
      startT = null;
      dir = tgt > prog ? 1 : -1;
      raf = requestAnimationFrame(tick);
    }

    // ── Decide interaction mode based on screen width ──
    const isMobile = window.matchMedia('(max-width: 600px)').matches;

    if (!isMobile) {
      // Desktop: hover morph
      el.addEventListener('mouseenter', () => morphTo(1));
      el.addEventListener('mouseleave', () => morphTo(0));
    }

    return {
      element: el,
      setLabel(label) { setSvgTextLines(txt, label || ''); },
      deactivate() { morphTo(0); },
      morphTo,
      setProgress(p) { applyProgress(p); } // for scroll observer (mobile only)
    };
  }

  // ── INIT ──────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const instances = {};
    window.__menhirInstances = window.__menhirInstances || [];

    Object.entries(BOXES).forEach(([id, cfg]) => {
      const el = document.getElementById(id);
      if (el) {
        const instance = build(el, cfg);
        instances[id] = instance;
        window.__menhirInstances.push(instance);
      }
    });

    // Language
    function applyLanguage(lang) {
      Object.entries(BOXES).forEach(([id, cfg]) => {
        const inst = instances[id];
        if (inst) inst.setLabel(resolveLabel(cfg, lang));
      });
    }

    let initialLang = 'en';
    try { initialLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
    applyLanguage(initialLang);

    window.addEventListener('language-change', (e) => {
      applyLanguage(e?.detail?.lang || 'en');
    });
  });

})();