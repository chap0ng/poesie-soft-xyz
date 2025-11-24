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

// Eye tracking
const eye = document.querySelector('.eye');
const iris = document.querySelector('.iris');

document.addEventListener('mousemove', (e) => {
  const eyeRect = eye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  
  const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
  const distance = Math.min(15, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);
  
  const irisX = Math.cos(angle) * distance;
  const irisY = Math.sin(angle) * distance;
  
  iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
});

// Language switching
const langEn = document.getElementById('lang-en');
const langFr = document.getElementById('lang-fr');

function updateLanguage(lang) {
  currentLang = lang;
  
  // Update button states
  if (lang === 'en') {
    langEn.classList.add('active');
    langFr.classList.remove('active');
  } else {
    langFr.classList.add('active');
    langEn.classList.remove('active');
  }
  
  // Update all translatable elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-fr');
  });
}

langEn.addEventListener('click', () => updateLanguage('en'));
langFr.addEventListener('click', () => updateLanguage('fr'));

// Initialize
updateLanguage('en');