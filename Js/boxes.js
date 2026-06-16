// Clickable box navigation — reads href from data-href attribute
document.addEventListener('DOMContentLoaded', () => {
    const isPhone = window.matchMedia('(pointer: coarse) and (max-width: 600px)').matches;
    
    // ─── Boxes: single‑click navigation ───
    document.querySelectorAll('.clickable-box[data-href]').forEach(box => {
        box.addEventListener('click', () => {
            window.location.href = box.dataset.href;
        });
    });

    // ─── Eye: double‑tap only on phones ───
    const eyeLink = document.querySelector('.eye-link[href]');
    if (eyeLink) {
        eyeLink.addEventListener('click', (event) => {
            if (!isPhone) return;

            const isActivated = eyeLink.dataset.activated === 'true';
            if (!isActivated) {
                event.preventDefault();
                eyeLink.dataset.activated = 'true';
                eyeLink.classList.add('is-activated');
                return;
            }

            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });

        document.addEventListener('click', (event) => {
            if (!isPhone) return;
            if (event.target.closest('.eye-link')) return;
            eyeLink.dataset.activated = 'false';
            eyeLink.classList.remove('is-activated');
        });
    }
});