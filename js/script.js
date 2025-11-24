// Language translations
const translations = {
  en: {
    title: "WEBSITE UNDER CONSTRUCTION",
    bio: {
      intro: "basile is an ",
      artist: "Artist",
      artistDesc: " (in red, clickable and link to @chap0ng instagram), ",
      composer: "composer",
      composerDesc: " (in green, clickable and link to my bandcamp) and ",
      designer: "interactive media designer",
      designerDesc: " (in blue, clickable and link to @babaanonyme instagram). Currently working as ",
      soundDesigner: "sound designer for panflip studio",
      soundDesignerDesc: " (in green and link to panflipstudio website), ",
      coCreator: "co creator of ",
      blueAsh: "blue ash studio",
      blueAshDesc: " (in blue) and as an ",
      independent: "independant ",
      artist2d3d: "2d and 3d artist",
      artist2d3dDesc: " (in red)."
    }
  },
  fr: {
    title: "SITE EN CONSTRUCTION",
    bio: {
      intro: "basile est un ",
      artist: "Artiste",
      artistDesc: " (en rouge, cliquable et lien vers @chap0ng instagram), ",
      composer: "compositeur",
      composerDesc: " (en vert, cliquable et lien vers mon bandcamp) et ",
      designer: "designer de médias interactifs",
      designerDesc: " (en bleu, cliquable et lien vers @babaanonyme instagram). Travaille actuellement comme ",
      soundDesigner: "sound designer pour panflip studio",
      soundDesignerDesc: " (en vert et lien vers le site panflipstudio), ",
      coCreator: "co-créateur de ",
      blueAsh: "blue ash studio",
      blueAshDesc: " (en bleu) et en tant qu'",
      independent: "indépendant ",
      artist2d3d: "artiste 2d et 3d",
      artist2d3dDesc: " (en rouge)."
    }
  }
};

// Current language
let currentLang = 'en';

// Eye tracking (mouse only, smooth animation)
const eye = document.querySelector('.eye');
const iris = document.querySelector('.iris');

if (eye && iris) {
  // Target values set by input
  let targetX = 0;
  let targetY = 0;

  // Current displayed values (for smoothing)
  let currentX = 0;
  let currentY = 0;

  const maxDistance = 15; // max px the iris can move from center
  const smoothFactor = 0.14; // lerp factor (0-1), lower = smoother/slower

  function updateTargetFromMouse(e) {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    const angle = Math.atan2(dy, dx);
    const dist = Math.min(maxDistance, Math.hypot(dx, dy) / 10);

    targetX = Math.cos(angle) * dist;
    targetY = Math.sin(angle) * dist;
  }

  // Add mouse listener
  document.addEventListener('mousemove', updateTargetFromMouse);

  // Animation loop to smoothly interpolate to target values
  function animate() {
    // simple linear interpolation (lerp)
    currentX += (targetX - currentX) * smoothFactor;
    currentY += (targetY - currentY) * smoothFactor;

    // apply transform
    iris.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// Language switching
const langEn = document.getElementById('lang-en');
const langFr = document.getElementById('lang-fr');

function updateLanguage(lang) {
  currentLang = lang;

  // Update button states safely
  if (langEn) langEn.classList.toggle('active', lang === 'en');
  if (langFr) langFr.classList.toggle('active', lang === 'fr');

  // Update all translatable elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const enText = el.getAttribute('data-en');
    const frText = el.getAttribute('data-fr');
    if (lang === 'en' && enText !== null) el.textContent = enText;
    else if (lang === 'fr' && frText !== null) el.textContent = frText;
  });
}

if (langEn) langEn.addEventListener('click', () => updateLanguage('en'));
if (langFr) langFr.addEventListener('click', () => updateLanguage('fr'));

// Initialize
updateLanguage('en');