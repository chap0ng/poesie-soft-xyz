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

// Guard in case elements are missing
if (eye && iris) {
  // Mouse handling (named so we can remove it if gyro is enabled)
  const mouseMoveHandler = (e) => {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const distance = Math.min(15, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);

    const irisX = Math.cos(angle) * distance;
    const irisY = Math.sin(angle) * distance;

    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
  };

  document.addEventListener('mousemove', mouseMoveHandler);

  // Mobile gyroscope support
  let gyroEnabled = false;
  function handleDeviceOrientation(event) {
    if (!eye || !iris) return;
    const maxDistance = 15; // pixels

    // gamma: left-to-right tilt [-90,90], beta: front-to-back tilt [-180,180]
    const gamma = event.gamma || 0;
    const beta = event.beta || 0;

    // Sensitivity tuning: divide to get a smaller normalized range
    const x = Math.max(-1, Math.min(1, gamma / 30));
    const y = Math.max(-1, Math.min(1, beta / 30));

    const irisX = x * maxDistance;
    const irisY = y * maxDistance;

    iris.style.transform = `translate(${irisX}px, ${irisY}px)`;
  }

  function enableGyroscope() {
    // On iOS 13+ permission must be requested via a user gesture
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', handleDeviceOrientation, true);
            gyroEnabled = true;
            // stop mouse tracking to avoid conflicts
            document.removeEventListener('mousemove', mouseMoveHandler);
          }
        })
        .catch(err => console.error('DeviceOrientation permission error:', err));
    } else if (typeof DeviceOrientationEvent !== 'undefined') {
      // Most other mobile browsers
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);
      gyroEnabled = true;
      document.removeEventListener('mousemove', mouseMoveHandler);
    } else {
      console.log('DeviceOrientationEvent not supported on this device.');
    }
  }

  // If on a touch-capable device, offer the user to enable the gyroscope control.
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  if (isTouchDevice) {
    // Use a user gesture (confirm) so iOS will accept a subsequent permission request.
    try {
      // Show a simple confirm prompt; the user gesture is required for iOS permission.
      if (confirm('Enable gyroscope control for the eye?')) {
        enableGyroscope();
      }
    } catch (err) {
      // In some embedded environments confirm might be blocked
      console.error('Error showing gyroscope prompt', err);
    }
  }
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