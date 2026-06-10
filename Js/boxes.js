// Clickable box navigation — reads href from data-href attribute
document.addEventListener('DOMContentLoaded', () => {
    const isTouch = () => window.matchMedia('(hover:none)').matches;
    
    document.querySelectorAll('.clickable-box[data-href]').forEach(box => {
        box.addEventListener('click', () => {
            // On touch devices, require two taps: first to morph, second to navigate
            if (isTouch()) {
                const isActivated = box.dataset.activated === 'true';
                if (!isActivated) {
                    // First tap: menhir component handles morph, we just block nav
                    return;
                }
                // Second tap: reset activation and navigate
                box.dataset.activated = 'false';
            }
            window.location.href = box.dataset.href;
        });
    });

    const eyeLink = document.querySelector('.eye-link[href]');
    if (eyeLink) {
        eyeLink.addEventListener('click', (event) => {
            if (!isTouch()) return;

            const isActivated = eyeLink.dataset.activated === 'true';
            if (!isActivated) {
                // First tap: show hover state only
                event.preventDefault();
                eyeLink.dataset.activated = 'true';
                eyeLink.classList.add('is-activated');
                return;
            }

            // Second tap: reset state, allow normal navigation
            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });

        document.addEventListener('click', (event) => {
            if (!isTouch()) return;
            if (event.target.closest('.eye-link')) return;
            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });
    }
});