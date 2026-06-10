document.addEventListener('DOMContentLoaded', () => {
    // Expand the marquee so it can loop seamlessly like the other project pages.
    const tracks = document.querySelectorAll('.scrolling-text');
    tracks.forEach(track => {
        const container = track.closest('.scrolling-text-container');
        if (!container) return;

        const baseSegments = Array.from(track.querySelectorAll('.scroll-inner'));
        if (!baseSegments.length) return;

        const targetWidth = container.clientWidth * 2.2;
        let safety = 0;
        while (track.scrollWidth < targetWidth && safety < 12) {
            baseSegments.forEach(seg => track.appendChild(seg.cloneNode(true)));
            safety += 1;
        }

        const allSegments = track.querySelectorAll('.scroll-inner');
        if (allSegments.length % 2 !== 0) {
            track.appendChild(baseSegments[0].cloneNode(true));
        }
    });

    const cards = Array.from(document.querySelectorAll('.dungeon-card'));
    const modal = document.querySelector('.dungeon-modal');
    const closeBtn = document.querySelector('.dungeon-modal-close');
    const imageEl = document.querySelector('.dungeon-modal-image');
    const titleEl = document.querySelector('.dungeon-modal-title');
    const captionEl = document.querySelector('.dungeon-modal-caption');

    if (!cards.length || !modal || !closeBtn || !imageEl || !titleEl || !captionEl) return;

    function closeModal() {
        modal.hidden = true;
        document.body.style.overflow = '';
        imageEl.src = '';
        imageEl.alt = '';
        titleEl.textContent = '';
        captionEl.textContent = '';
    }

    function openModal(card) {
        const img = card.querySelector('img');
        if (!img) return;

        const title = (card.dataset.title || '').trim();
        const caption = (card.dataset.caption || '').trim();

        imageEl.src = img.currentSrc || img.src;
        imageEl.alt = img.alt || title || 'Art Dungeon image';

        titleEl.textContent = title;
        captionEl.textContent = caption;

        titleEl.style.display = title ? '' : 'none';
        captionEl.style.display = caption ? '' : 'none';

        modal.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    cards.forEach((card) => {
        card.addEventListener('click', () => openModal(card));
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });

    // Tag filtering (Sketchbook / WIPs / Series)
    const filterBar = document.querySelector('.tag-filters');
    if (filterBar) {
        const buttons = Array.from(filterBar.querySelectorAll('.tag-btn'));

        function applyFilter(tag) {
            cards.forEach(card => {
                const tags = (card.dataset.tags || '').split(',').map(t => t.trim()).filter(Boolean);
                if (tag === 'all' || tags.includes(tag)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyFilter(btn.dataset.filter);
            });
        });

        applyFilter('all');
    }
});
