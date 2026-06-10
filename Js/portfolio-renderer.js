/**
 * Portfolio Renderer
 * Renders projects from projects-data.js into HTML
 * Used across all portfolio pages
 */

function renderProjectsFromData(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  const projects = PROJECTS_DATA[category];
  if (!projects || projects.length === 0) {
    console.warn(`No projects found for category "${category}"`);
    return;
  }

  // Clear container
  container.innerHTML = '';

  const normalizeText = (value, separator = ', ') => {
    if (Array.isArray(value)) {
      return value.filter(Boolean).join(separator);
    }
    return (value || '').toString().trim();
  };

  // Render each project
  projects.forEach(project => {
    // Skip projects marked as disabled in the data
    if (project.disabled) return;
    const article = document.createElement('article');
    article.className = 'project-card';
    article.setAttribute('data-project', project.id);
    article.setAttribute('data-title', project.title);
    if (project.institution) article.setAttribute('data-institution', project.institution);
    if (project.institutionLink) article.setAttribute('data-institution-link', project.institutionLink);
    if (project.institution2) article.setAttribute('data-institution2', project.institution2);
    if (project.institutionLink2) article.setAttribute('data-institution-link2', project.institutionLink2);
    if (project.commissionedBy) article.setAttribute('data-commissioned-by', project.commissionedBy);
    if (project['for']) article.setAttribute('data-for', project['for']);
    if (project.diffusion) article.setAttribute('data-diffusion', normalizeText(project.diffusion, '\n'));
    if (project.medium) article.setAttribute('data-medium', project.medium);
    
    // Handle collaborators: either with links or plain text
    let collabText = project.collab || '';
    if (project.collabLinks && project.collabLinks.length > 0) {
      article.setAttribute('data-collab-links', JSON.stringify({
        links: project.collabLinks,
        separator: project.collabSeparator || ', '
      }));
    }
    if (collabText) {
      article.setAttribute('data-collab', collabText);
    }

    article.setAttribute('data-description-en', project.descriptionEn);
    article.setAttribute('data-description-fr', project.descriptionFr);
    if (project.exhibits) article.setAttribute('data-exhibits', project.exhibits);
    article.setAttribute('data-tags', project.tags);
    if (project.video) article.setAttribute('data-video', project.video);
    if (project.link) article.setAttribute('data-link', project.link);
    if (project.link) article.setAttribute('data-custom-link', project.link);

    // Build images HTML
    let imagesHtml = '';
    if (project.images && project.images.length > 0) {
      project.images.forEach((img, index) => {
        imagesHtml += `<img class="project-carousel-src" style="display:none" src="${img.src}" width="${img.width}" height="${img.height}" alt="${img.alt}" />`;
      });
    }

    // Set article content
    article.innerHTML = `
      <div class="project-preview">
        <img src="${project.images[0]?.src || '#'}" alt="${project.title}" />
      </div>
      <div class="project-meta">
        <h4 class="project-title">${project.title}</h4>
        <span class="project-tag">[${project.year}]</span>
      </div>
      ${imagesHtml}
    `;

    container.appendChild(article);
  });
}
