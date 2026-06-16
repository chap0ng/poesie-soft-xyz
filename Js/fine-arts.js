// Fine Arts Portfolio Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Scrolling text: ensure enough repeated segments for seamless loop
    (function () {
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
    })();

    // ASCII creature — fade in, then float continuously
    const asciiCreature = document.querySelector('.ascii-creature');
    if (asciiCreature) {
        // Start invisible
        asciiCreature.style.opacity = '0';
        asciiCreature.style.transform = 'translateY(20px)';
        asciiCreature.style.transition = 'opacity 1s ease, transform 1s ease';

        // Entrance
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                asciiCreature.style.opacity = '1';
                asciiCreature.style.transform = 'translateY(0)';
            });
        });

        // After entrance completes, take over with float loop
        let time = 0;
        function floatAnimation() {
            time += 0.01;
            const floatY = Math.sin(time) * 8;
            const floatX = Math.cos(time * 0.5) * 4;
            asciiCreature.style.transform = `translate(${floatX}px, ${floatY}px)`;
            requestAnimationFrame(floatAnimation);
        }
        setTimeout(() => {
            asciiCreature.style.transition = 'none';
            floatAnimation();
        }, 1100);
    }

    // Gentle hover effect for project titles
    const projectTitles = document.querySelectorAll('.project-title');
    projectTitles.forEach(title => {
        let hue = 0;

        title.addEventListener('mouseover', function() {
            const colorChange = setInterval(() => {
                hue = (hue + 1) % 360;
                const color = `hsl(${hue}, 70%, 60%)`;
                title.style.color = color;
            }, 50);

            title.addEventListener('mouseout', () => {
                clearInterval(colorChange);
                title.style.color = '';
            }, { once: true });
        });
    });

    // -------------------------
    // Sort projects by year (descending)
    // -------------------------
    const projectGrid = document.querySelector('.projects-grid');
    if (projectGrid) {
        let projectEls = Array.from(document.querySelectorAll('.project-card'));
        
        // Helper function to extract year from project
        function getProjectYear(el) {
            const tagEl = el.querySelector('.project-tag');
            if (tagEl) {
                const yearMatch = tagEl.textContent.match(/\d{4}/);
                return yearMatch ? parseInt(yearMatch[0]) : 0;
            }
            return 0;
        }
        
        // Sort projects by year in descending order (newest first)
        projectEls.sort((a, b) => {
            return getProjectYear(b) - getProjectYear(a);
        });
        
        // Re-parent elements in sorted order
        projectEls.forEach(el => {
            projectGrid.appendChild(el);
        });
    }

    // -------------------------
    // Tag Filter System
    // -------------------------
    (function () {
        const projectEls = Array.from(document.querySelectorAll('.project-card'));
        if (!projectEls.length) return;

        // Collect all unique tags
        const allTagsSet = new Set();
        projectEls.forEach(el => {
            const tagsStr = el.dataset.tags || '';
            if (tagsStr) {
                tagsStr.split(',').forEach(tag => {
                    const trimmed = tag.trim().toLowerCase();
                    if (trimmed && trimmed !== '2025' && trimmed !== '2026') {
                        allTagsSet.add(trimmed);
                    }
                });
            }
        });

        const allTags = Array.from(allTagsSet).sort();
        const filterContainer = document.querySelector('.tag-filter-container');

        // Add tag filter buttons
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'tag-filter-btn';
            btn.dataset.tag = tag;
            btn.textContent = tag.replace('-', ' ').toUpperCase();
            btn.addEventListener('click', () => toggleTag(tag));
            filterContainer.appendChild(btn);
        });

        function toggleTag(tag) {
            const allBtn = filterContainer.querySelector('[data-tag="all"]');
            
            // If "All Projects" is clicked
            if (tag === 'all') {
                filterContainer.querySelectorAll('.tag-filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                allBtn.classList.add('active');
                projectEls.forEach(el => el.style.display = '');
                // Update modal tags active state
                document.querySelectorAll('.project-modal-tags .project-modal-tag-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                return;
            }
            
            // Remove "All Projects" active state
            allBtn.classList.remove('active');
            
            // Get current active tags from button states
            const activeTags = new Set();
            filterContainer.querySelectorAll('.tag-filter-btn.active:not([data-tag="all"])').forEach(btn => {
                activeTags.add(btn.dataset.tag);
            });
            
            // Toggle the selected tag
            if (activeTags.has(tag)) {
                activeTags.delete(tag);
            } else {
                activeTags.add(tag);
            }
            
            // Update button styles
            filterContainer.querySelectorAll('.tag-filter-btn:not([data-tag="all"])').forEach(btn => {
                btn.classList.toggle('active', activeTags.has(btn.dataset.tag));
            });
            
            // Update modal tag button styles
            document.querySelectorAll('.project-modal-tags .project-modal-tag-btn').forEach(btn => {
                btn.classList.toggle('active', activeTags.has(btn.dataset.tag));
            });
            
            // If no tags selected, show all
            if (activeTags.size === 0) {
                allBtn.classList.add('active');
                projectEls.forEach(el => el.style.display = '');
                document.querySelectorAll('.project-modal-tags .project-modal-tag-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            } else {
                // Show projects that have ANY of the selected tags
                projectEls.forEach(el => {
                    const projectTags = (el.dataset.tags || '')
                        .split(',')
                        .map(t => t.trim().toLowerCase())
                        .filter(t => t && t !== '2025' && t !== '2026');
                    
                    const hasAnyTag = Array.from(activeTags).some(tag => projectTags.includes(tag));
                    el.style.display = hasAnyTag ? '' : 'none';
                });
            }
        }
        
        
        // Add click handler to "All Projects" button
        const allBtn = filterContainer.querySelector('[data-tag="all"]');
        if (allBtn) {
            allBtn.addEventListener('click', () => toggleTag('all'));
        }
    })();

    // -------------------------
    // Project modal + carousel
    // -------------------------
    (function () {
        const projectEls = Array.from(document.querySelectorAll('.project-card'));
        if (!projectEls.length) return;

        function getProjectData(el) {
            const title = el.dataset.title || (el.querySelector('.project-title') && el.querySelector('.project-title').textContent.trim()) || 'Untitled';
            const description = el.dataset.description || (el.querySelector('.project-description') && el.querySelector('.project-description').textContent.trim()) || '';
            const tags = (el.dataset.tags ? el.dataset.tags.split(',') : Array.from(el.querySelectorAll('.project-tag')).map(t => t.textContent))
                .map(s => s && s.trim()).filter(Boolean);
            const yearRaw = el.dataset.year || (el.querySelector('.project-tag') && el.querySelector('.project-tag').textContent) || '';
            const year = yearRaw.replace(/[\[\]]/g, '').trim();
            const month = el.dataset.month || '';
            const links = (el.dataset.links || '')
                .split(',')
                .map(s => s.trim())
                .filter(Boolean)
                .map((entry) => {
                    const parts = entry.split('|').map(p => p.trim()).filter(Boolean);
                    if (parts.length === 1) return { label: parts[0], url: parts[0] };
                    return { label: parts[0], url: parts[1] };
                });
            const video = el.dataset.video || '';
            const customLink = el.dataset.customLink || el.dataset.link || '';
            const playLink = el.dataset.playLink || '';
            let images = [];
            if (el.dataset.images) {
                images = el.dataset.images.split(',').map(s => s.trim()).filter(Boolean);
            } else {
                const modalImages = Array.from(el.querySelectorAll('img.project-carousel-src'))
                    .map(i => i.getAttribute('src') || i.src)
                    .filter(Boolean);

                if (modalImages.length) {
                    images = modalImages;
                } else {
                    images = Array.from(el.querySelectorAll('img'))
                        .filter(img => !img.closest('.project-preview'))
                        .map(i => i.getAttribute('src') || i.src)
                        .filter(Boolean);
                }
            }
            const producedFor = (el.dataset.institution || el.dataset.producedfor || el.dataset.producedFor || el.dataset.produced_for || el.dataset.produced || '').trim();
            const institutionLink = (el.dataset.institutionLink || el.dataset.institutionlink || el.dataset.institution_link || '').trim();
            const producedFor2 = (el.dataset.institution2 || '').trim();
            const institutionLink2 = (el.dataset.institutionLink2 || el.dataset.institution_link2 || '').trim();
            const collaborators = (el.dataset.collab || el.dataset.collaborators || el.dataset.collaborator || '').trim();
            const commissionedBy = (el.dataset.commissionedBy || el.dataset.commissionedby || el.getAttribute('data-commissioned-by') || '').trim();
            const projectFor = (el.dataset.for || el.getAttribute('data-for') || '').trim();
            const diffusion = (el.dataset.diffusion || el.getAttribute('data-diffusion') || '').trim();
            const medium = (el.dataset.medium || el.getAttribute('data-medium') || '').trim();
            return { el, title, description, tags, images, year, month, links, video, customLink, playLink, producedFor, institutionLink, producedFor2, institutionLink2, collaborators, commissionedBy, projectFor, diffusion, medium };
        }

        const projects = projectEls.map(getProjectData);

        // build modal once
        const overlay = document.createElement('div');
        overlay.className = 'project-modal-overlay';
        overlay.innerHTML = `
            <div class="project-modal" role="dialog" aria-modal="true" aria-hidden="true" tabindex="-1">
                <header class="project-modal-header">
                    <div class="project-modal-left">
                        <button class="project-modal-close" aria-label="Close">×</button>
                    </div>
                    <h2 class="project-modal-title"></h2>
                    <div class="project-modal-right">
                        <button class="project-modal-prev-project" aria-label="Previous Project">←</button>
                        <button class="project-modal-next-project" aria-label="Next Project">→</button>                        
                    </div>
                </header>
                <div class="project-modal-body">
                    <div class="project-modal-meta">
                            <span class="project-modal-year"></span>
                            <div class="project-modal-links"></div>
                        </div>
                        <div class="project-modal-meta-rows"></div>
                        <p class="project-modal-description"></p>
                    <div class="project-modal-tags"></div>
                    <div class="project-modal-video"></div>
                    <div class="project-modal-media"></div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // cached elements
        const modalEl = overlay.querySelector('.project-modal');
        const titleEl = overlay.querySelector('.project-modal-title');
        const closeBtn = overlay.querySelector('.project-modal-close');
        const yearEl = overlay.querySelector('.project-modal-year');
        const linksEl = overlay.querySelector('.project-modal-links');
        const metaRowsEl = overlay.querySelector('.project-modal-meta-rows');
        const videoEl = overlay.querySelector('.project-modal-video');
        const mediaEl = overlay.querySelector('.project-modal-media');
        const descEl = overlay.querySelector('.project-modal-description');
        const tagsEl = overlay.querySelector('.project-modal-tags');
        const prevProjectBtn = overlay.querySelector('.project-modal-prev-project');
        const nextProjectBtn = overlay.querySelector('.project-modal-next-project');

        const lightbox = document.createElement('div');
        lightbox.className = 'image-lightbox';
        lightbox.innerHTML = `
            <div class="image-lightbox-inner">
                <img class="image-lightbox-img" src="" alt="">
            </div>
        `;
        document.body.appendChild(lightbox);
        const lightboxImg = lightbox.querySelector('.image-lightbox-img');

        // performance hint
        modalEl.style.willChange = 'transform, opacity';

        let currentProject = 0;
        let lastFocused = null;
        // Expose for language switcher
        window.__faLoadProject = (i) => loadProject(i);
        window.__faCurrentProject = () => currentProject;

        function openLightbox(src, alt) {
            if (!src) return;
            lightboxImg.src = src;
            lightboxImg.alt = alt || '';
            lightbox.classList.add('open');
        }

        function closeLightbox() {
            lightbox.classList.remove('open');
            lightboxImg.src = '';
            lightboxImg.alt = '';
        }

        function renderLinks(links) {
            linksEl.innerHTML = '';
            if (!links || !links.length) {
                linksEl.style.display = 'none';
                return;
            }
            linksEl.style.display = 'flex';
            links.forEach((link) => {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.label;
                a.target = '_blank';
                a.rel = 'noopener noreferrer';
                linksEl.appendChild(a);
            });
        }

        function renderMediaLink(videoUrl, customLink, playLink) {
            videoEl.innerHTML = '';
            if (!videoUrl && !customLink && !playLink) {
                videoEl.style.display = 'none';
                return;
            }
            videoEl.style.display = 'flex';
            
            // Render video button if URL is provided
            if (videoUrl) {
                const videBtn = document.createElement('a');
                videBtn.href = videoUrl;
                videBtn.textContent = '▶ VIDEO LINK';
                videBtn.target = '_blank';
                videBtn.rel = 'noopener noreferrer';
                videoEl.appendChild(videBtn);
            }
            
            // Render play button if URL is provided
            if (playLink) {
                const playBtn = document.createElement('a');
                playBtn.href = playLink;
                playBtn.textContent = '▶ PLAY';
                playBtn.target = '_blank';
                playBtn.rel = 'noopener noreferrer';
                playBtn.classList.add('play-link');
                videoEl.appendChild(playBtn);
            }
            
            // Render custom link button if URL is provided
            if (customLink) {
                const linkBtn = document.createElement('a');
                linkBtn.href = customLink;
                linkBtn.textContent = '→ LINK';
                linkBtn.target = '_blank';
                linkBtn.rel = 'noopener noreferrer';
                videoEl.appendChild(linkBtn);
            }
        }

        function renderImages(project, projectTitle) {
            mediaEl.innerHTML = '';
            const imgs = project.images || [];
            if (!imgs.length) return;

            let loneLastRaf = null;
            function scheduleLoneLastCheck() {
                if (loneLastRaf) cancelAnimationFrame(loneLastRaf);
                loneLastRaf = requestAnimationFrame(() => {
                    const cards = Array.from(mediaEl.querySelectorAll('.project-modal-image'));
                    cards.forEach(card => card.classList.remove('is-lone-last'));
                    if (cards.length < 2) return;

                    const lastCard = cards[cards.length - 1];
                    const lastTop = Math.round(lastCard.offsetTop);
                    const hasSameRowPeer = cards
                        .slice(0, -1)
                        .some(card => Math.abs(Math.round(card.offsetTop) - lastTop) <= 1);

                    if (!hasSameRowPeer) {
                        lastCard.classList.add('is-lone-last');
                    }
                });
            }

            function applyOrientationClass(buttonEl, imageEl) {
                const mark = () => {
                    const isPortrait = imageEl.naturalHeight > imageEl.naturalWidth;
                    buttonEl.classList.toggle('is-portrait', isPortrait);
                    scheduleLoneLastCheck();
                };

                if (imageEl.complete) {
                    mark();
                } else {
                    imageEl.addEventListener('load', mark, { once: true });
                }
            }

            imgs.forEach((src, i) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'project-modal-image';
                const img = document.createElement('img');
                img.src = src;
                img.alt = `${projectTitle} — image ${i + 1} / ${imgs.length}`;
                applyOrientationClass(button, img);
                button.appendChild(img);
                button.addEventListener('click', () => openLightbox(src, img.alt));
                mediaEl.appendChild(button);
            });

            scheduleLoneLastCheck();
        }

        // load project content
        function loadProject(index, cb) {
            const p = projects[index];
            // Always read live from the card element so language switches are reflected
            const lang = window.__langPref || 'en';
            const currentTitle = (lang === 'fr' && p.el.getAttribute('data-title-fr'))
                ? p.el.getAttribute('data-title-fr')
                : (p.el.getAttribute('data-title-en') || p.el.dataset.title || p.title || 'Untitled');
            p.title = currentTitle;
            titleEl.textContent = currentTitle;
            // Render description with support for newlines and HTML <br> entities.
            // Accept literal newlines, escaped newline entity (&#10;) or existing <br> tags.
            const rawDesc = lang === 'fr'
                ? (p.el.getAttribute('data-description-fr') || p.el.getAttribute('data-description-en') || '')
                : (p.el.getAttribute('data-description-en') || p.el.getAttribute('data-description-fr') || '');
            const processed = rawDesc.replace(/&#10;|\r?\n/g, '<br>');
            descEl.innerHTML = processed;
            // Render exhibits (if provided in the card's data attributes) beneath the description
            const existingExhibit = modalEl.querySelector('.project-modal-exhibits');
            if (existingExhibit) existingExhibit.remove();
            const exhibitsRaw = p.el.getAttribute('data-exhibits') || '';
            if (exhibitsRaw) {
                const exhibitsProcessed = exhibitsRaw.replace(/&#10;|\r?\n/g, '<br>');
                const exhibitEl = document.createElement('p');
                // Reuse modal description layout so exhibits align with content container
                exhibitEl.className = 'project-modal-exhibits project-modal-description about-descript';
                exhibitEl.innerHTML = exhibitsProcessed;
                descEl.insertAdjacentElement('afterend', exhibitEl);
            }
            // Display month and year - remove "Year: " prefix
            if (p.month && p.year) {
                yearEl.textContent = `${p.month} ${p.year}`;
            } else if (p.year) {
                yearEl.textContent = p.year;
            } else {
                yearEl.textContent = '';
            }
            renderLinks(p.links);
            renderMediaLink(p.video, p.customLink, p.playLink);

            // Populate labeled metadata rows inside the modal (Produced for, Collaborators)
            if (metaRowsEl) {
                metaRowsEl.innerHTML = '';
                function createInfoRow(labelText, valueText, link) {
                    if (!valueText) return null;
                    const row = document.createElement('div');
                    row.className = 'project-info-row';
                    const label = document.createElement('div');
                    label.className = 'info-label';
                    label.textContent = labelText;
                    const value = document.createElement('div');
                    value.className = 'info-value';

                    if (link) {
                        const a = document.createElement('a');
                        a.className = 'bio-link bio-highlight';
                        a.href = link;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        a.textContent = valueText;
                        value.appendChild(a);
                    } else {
                        value.textContent = valueText;
                    }

                    row.appendChild(label);
                    row.appendChild(value);
                    return row;
                }

                const producedVal = p.producedFor || '';
                const producedLink = p.institutionLink || '';
                const producedVal2 = p.producedFor2 || '';
                const producedLink2 = p.institutionLink2 || '';
                const collabVal = p.collaborators || '';
                const commissionedByVal = p.commissionedBy || '';
                const projectForVal = p.projectFor || '';
                const diffusionVal = p.diffusion || '';
                const mediumVal = p.medium || '';

                function createCollabRow(labelText, collabText, collabLinksData) {
                    if (!collabText && !collabLinksData) return null;
                    const row = document.createElement('div');
                    row.className = 'project-info-row';
                    const label = document.createElement('div');
                    label.className = 'info-label';
                    label.textContent = labelText;
                    const value = document.createElement('div');
                    value.className = 'info-value';

                    const bioClasses = ['bio-highlight'];

                    // If we have structured collab links with separators, use them
                    if (collabLinksData) {
                        try {
                            const { links, separator } = collabLinksData;
                            if (links && links.length > 0) {
                                links.forEach((collab, idx) => {
                                    // Add separator before this link (if not first)
                                    if (idx > 0) {
                                        const sepSpan = document.createElement('span');
                                        sepSpan.textContent = separator;
                                        sepSpan.style.marginLeft = '4px';
                                        sepSpan.style.marginRight = '4px';
                                        value.appendChild(sepSpan);
                                    }

                                    // If collaborator has a URL, make it a clickable link; otherwise render as plain text
                                    if (collab.url && collab.url.trim()) {
                                        const a = document.createElement('a');
                                        a.className = `bio-link ${bioClasses[idx % bioClasses.length]}`;
                                        a.textContent = collab.name;
                                        a.href = collab.url;
                                        a.target = '_blank';
                                        a.rel = 'noopener noreferrer';
                                        value.appendChild(a);
                                    } else {
                                        const span = document.createElement('span');
                                        span.className = 'bio-link bio-muted';
                                        span.textContent = collab.name;
                                        value.appendChild(span);
                                    }
                                });

                                row.appendChild(label);
                                row.appendChild(value);
                                return row;
                            }
                        } catch (e) {
                            console.warn('Error parsing collaborator links:', e);
                        }
                    }

                    // Fallback: Split collaborators by commas, 'and', or '&'
                    const parts = collabText.split(/\s*,\s*|\s+and\s+|\s*&\s*/i).map(p => p.trim()).filter(Boolean);
                    parts.forEach((part, idx) => {
                        if (idx > 0) {
                            const sepSpan = document.createElement('span');
                            sepSpan.textContent = ', ';
                            value.appendChild(sepSpan);
                        }
                        const span = document.createElement('span');
                        span.textContent = part;
                        // optional: add a neutral class if you want some styling, but no colour
                        value.appendChild(span);
                    });
                    row.appendChild(label);
                    row.appendChild(value);
                    return row;
                }

                // Check for structured collaborator links with separators
                let collabLinksData = null;
                const collabLinksAttr = p.el.getAttribute('data-collab-links');
                if (collabLinksAttr) {
                    try {
                        collabLinksData = JSON.parse(collabLinksAttr);
                    } catch (e) {
                        console.warn('Error parsing data-collab-links:', e);
                    }
                }

            const rows = [
                createInfoRow('Produced for:', producedVal, producedLink),
                producedVal2 ? createInfoRow('Commissioned by:', producedVal2, producedLink2) : null,
                commissionedByVal ? createInfoRow('Commissioned by:', commissionedByVal) : null,
                projectForVal ? createInfoRow('For:', projectForVal) : null,
                diffusionVal ? createInfoRow('Exhibitions:', diffusionVal) : null,
                mediumVal ? createInfoRow('Medium:', mediumVal) : null,
                createCollabRow('Collaborators:', collabVal, collabLinksData)
            ].filter(Boolean);

                rows.forEach(r => metaRowsEl.appendChild(r));
            }
            tagsEl.innerHTML = '';
            
            // Get currently active filter tags
            const filterContainer = document.querySelector('.tag-filter-container');
            const activeTags = new Set();
            if (filterContainer) {
                filterContainer.querySelectorAll('.tag-filter-btn.active:not([data-tag="all"])').forEach(btn => {
                    activeTags.add(btn.dataset.tag);
                });
            }
            
            (p.tags || []).forEach(t => {
                const btn = document.createElement('button');
                btn.className = 'tag-filter-btn project-modal-tag-btn';
                btn.textContent = t;
                // Add data-tag for color styling
                const tagLower = t.trim().toLowerCase();
                btn.setAttribute('data-tag', tagLower);
                
                // Apply active class if this tag is currently filtered
                if (activeTags.has(tagLower)) {
                    btn.classList.add('active');
                }
                
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    // Find and click the corresponding filter button in the intro section
                    const filterBtn = document.querySelector(`.tag-filter-container .tag-filter-btn[data-tag="${tagLower}"]`);
                    if (filterBtn) {
                        filterBtn.click();
                    }
                });
                tagsEl.appendChild(btn);
            });
            renderImages(p, currentTitle);
            if (typeof cb === 'function') cb();
        }

        function openModal(index) {
            lastFocused = document.activeElement;
            currentProject = (index + projects.length) % projects.length;

            // load content and only open the overlay after the image is ready (avoids pop)
            loadProject(currentProject, () => {
                // small RAF to ensure transitions start smoothly
                requestAnimationFrame(() => {
                    overlay.classList.add('open');
                    modalEl.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                    modalEl.focus();
                });
            });
        }

        function closeModal() {
            overlay.classList.remove('open');
            modalEl.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        }

        function changeProject(delta = 1) {
            // Get list of visible projects (respects tag filtering)
            const visibleIndices = projects
                .map((p, idx) => ({ idx, visible: p.el.style.display !== 'none' }))
                .filter(({ visible }) => visible)
                .map(({ idx }) => idx);
            
            if (visibleIndices.length === 0) return; // No visible projects
            
            // Find current position in visible list
            const currentVisibleIndex = visibleIndices.indexOf(currentProject);
            let nextVisibleIndex = (currentVisibleIndex + delta) % visibleIndices.length;
            
            // Handle negative modulo
            if (nextVisibleIndex < 0) nextVisibleIndex += visibleIndices.length;
            
            currentProject = visibleIndices[nextVisibleIndex];
            // load next project then keep modal open (image-ready before swap)
            loadProject(currentProject);
        }

        projectEls.forEach((el, i) => {
            el.addEventListener('click', (e) => {
                if (e.target.closest('a')) return;
                openModal(i);
            });
            if (typeof el.tabIndex !== 'number' || el.tabIndex < 0) el.tabIndex = 0;
            el.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ') {
                    ev.preventDefault();
                    openModal(i);
                }
            });
        });

        const params = new URLSearchParams(window.location.search);
        const requestedProject = (params.get('project') || '').trim().toLowerCase();
        if (requestedProject) {
            const projectIndex = projects.findIndex((project) => {
                const byTitle = (project.title || '').trim().toLowerCase();
                const byDataProject = (project.el.dataset.project || '').trim().toLowerCase();
                return byTitle === requestedProject || byDataProject === requestedProject;
            });
            if (projectIndex !== -1) {
                openModal(projectIndex);
            }
        }

        lightbox.addEventListener('click', closeLightbox);

        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
        prevProjectBtn.addEventListener('click', () => changeProject(-1));
        nextProjectBtn.addEventListener('click', () => changeProject(1));

        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('open') && e.key === 'Escape') {
                e.preventDefault();
                return closeLightbox();
            }
            if (!overlay.classList.contains('open')) return;
            if (e.key === 'Escape') return closeModal();
        });
    })();

    // -------------------------
    // Language switcher
    // -------------------------
    (function () {
        function applyLangToText(lang) {
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
        }



        function applyLangToOpenModal(lang) {
            const isOpen = document.querySelector('.project-modal-overlay.open');
            if (!isOpen) return;
            // Re-render the currently open project using live DOM data
            if (window.__faLoadProject) window.__faLoadProject(window.__faCurrentProject());
        }

        function applyLangToModalUi(lang) {
            const prevBtn = document.querySelector('.project-modal-prev-project');
            const nextBtn = document.querySelector('.project-modal-next-project');
            const closeBtn = document.querySelector('.project-modal-close');
            if (prevBtn) prevBtn.setAttribute('aria-label', lang === 'fr' ? 'Projet précédent' : 'Previous Project');
            if (nextBtn) nextBtn.setAttribute('aria-label', lang === 'fr' ? 'Projet suivant' : 'Next Project');
            if (closeBtn) closeBtn.setAttribute('aria-label', lang === 'fr' ? 'Fermer' : 'Close');

            document.querySelectorAll('.project-modal-video a').forEach(link => {
                const href = (link.getAttribute('href') || '').toLowerCase();
                const isPlay = link.classList.contains('play-link');
                const isVideo = href.includes('youtube') || href.includes('vimeo') || href.includes('video');
                if (isPlay) {
                    link.textContent = lang === 'fr' ? '▶ JOUER' : '▶ PLAY';
                } else if (isVideo) {
                    link.textContent = lang === 'fr' ? '▶ LIEN VIDÉO' : '▶ VIDEO LINK';
                } else {
                    link.textContent = lang === 'fr' ? '→ LIEN' : '→ LINK';
                }
            });
        }

        // header.js owns the button clicks and fires 'language-change'.
        // fine-arts.js listens and syncs card/modal content.
        window.addEventListener('language-change', (e) => {
            const lang = (e && e.detail && e.detail.lang) || 'en';
            applyLangToText(lang);
            applyLangToOpenModal(lang);
            applyLangToModalUi(lang);
        });

        // Re-apply lang when modal opens or navigates so description stays correct
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.project-card, .project-modal-prev-project, .project-modal-next-project')) return;
            requestAnimationFrame(() => {
                const lang = window.__langPref || 'en';
                applyLangToOpenModal(lang);
                applyLangToModalUi(lang);
            });
        });

    })();
});