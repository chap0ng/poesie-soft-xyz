// Clickable box navigation — reads href from data-href attribute
document.addEventListener('DOMContentLoaded', () => {
    const isTouch = () => window.matchMedia('(hover:none)').matches;
    
    // ─── Boxes: single‑click navigation (morph handled by hover or scroll) ───
    document.querySelectorAll('.clickable-box[data-href]').forEach(box => {
        box.addEventListener('click', () => {
            window.location.href = box.dataset.href;
        });
    });

    // ─── Eye: double‑tap on touch devices to show label, then navigate ──────
    const eyeLink = document.querySelector('.eye-link[href]');
    if (eyeLink) {
        eyeLink.addEventListener('click', (event) => {
            if (!isTouch()) return;

            const isActivated = eyeLink.dataset.activated === 'true';
            if (!isActivated) {
                // First tap: show hover state (morph via CSS)
                event.preventDefault();
                eyeLink.dataset.activated = 'true';
                eyeLink.classList.add('is-activated');
                return;
            }

            // Second tap: reset state and allow navigation
            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });

        // Click outside deactivates the eye
        document.addEventListener('click', (event) => {
            if (!isTouch()) return;
            if (event.target.closest('.eye-link')) return;
            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });
    }
});