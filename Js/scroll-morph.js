// scroll-morph.js – IntersectionObserver morph, only for small screens (≤600px)
// Box1 smoothly resets to 0 when scrolling back to top.

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 600px)').matches;
  if (!isMobile) return;

  setTimeout(() => {
    const instances = window.__menhirInstances || [];
    if (!instances.length) return;

    const boxes = document.querySelectorAll('.clickable-box');
    if (!boxes.length) return;

    const boxData = [];
    boxes.forEach(box => {
      const instance = instances.find(inst => inst.element === box);
      if (instance) {
        boxData.push({ box, instance, current: 0, target: 0 });
      }
    });
    if (!boxData.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const box = entry.target;
        const data = boxData.find(d => d.box === box);
        if (!data) return;

        // ---- box1: force target to 0 when at top of page ----
        if (box.id === 'box1' && window.scrollY < 50) {
          data.target = 0;
          return; // ignore intersection ratio
        }

        const raw = Math.min(1, Math.max(0, entry.intersectionRatio));
        // Full morph at 90% visibility
        const mapped = Math.min(1, raw / 0.9);
        data.target = mapped;
      });
      startLoop();
    }, {
      threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      rootMargin: '0px 0px -10% 0px'
    });

    boxes.forEach(box => observer.observe(box));

    let rafId = null;
    const SMOOTH = 0.12; // adjust for faster/slower

    function update() {
      let anyChanged = false;
      boxData.forEach(data => {
        // box1 guard – also enforce target 0 while at top (in case observer lags)
        if (data.box.id === 'box1' && window.scrollY < 50) {
          data.target = 0;
        }

        const diff = data.target - data.current;
        if (Math.abs(diff) > 0.0005) {
          anyChanged = true;
          data.current += diff * SMOOTH;
          data.current = Math.max(0, Math.min(1, data.current));
          data.instance.setProgress(data.current);
        } else if (data.current !== data.target) {
          data.current = data.target;
          data.instance.setProgress(data.target);
          anyChanged = true;
        }
      });
      if (anyChanged) rafId = requestAnimationFrame(update);
      else rafId = null;
    }

    function startLoop() {
      if (!rafId) rafId = requestAnimationFrame(update);
    }

    // Start all at 0
    boxData.forEach(d => { d.current = 0; d.instance.setProgress(0); });
    startLoop();

    // Re‑run the update when scrolling (passive)
    window.addEventListener('scroll', () => {}, { passive: true });

  }, 0);
});