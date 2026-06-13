const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const rootElement = document.documentElement;

const translations = {
  en: {
    hero_badge: 'With a creativity of cats',
    hero_title: 'Qzxhysco',
    hero_copy: 'A cozy portfolio in a pixelized style, built for playful projects.',
    btn_primary: 'See My Works',
    btn_secondary: 'Dark Mood',
    btn_secondary_sunny: 'Sunny Mood',
    works_header: 'Sprites',
    works_number: '01',
    gallery_number: '02',
    gallery_header: 'Illustration',
    footer_text: 'Made by smAglo360 with ❤️',
    gallery_close: 'Close'
  },
  ru: {
    hero_badge: 'С творчеством кошек',
    hero_title: 'Qzxhysco',
    hero_copy: 'Уютное портфолио выполненное в пиксельном стиле для проектов.',
    btn_primary: 'Мои работы',
    btn_secondary: 'Темный',
    btn_secondary_sunny: 'Солнечный',
    works_header: 'Мелкоформатки',
    works_number: '01',
    gallery_number: '02',
    gallery_header: 'Иллюстрация',
    footer_text: 'Создано smAglo360 с любовью ❤️',
    gallery_close: 'Закрыть'
  }
};

let currentLanguage = 'en';

function updateThemeToggleText() {
  const isDark = rootElement.classList.contains('theme-dark');
  themeToggle.textContent = isDark ? translations[currentLanguage].btn_secondary_sunny : translations[currentLanguage].btn_secondary;
}

function updateTheme() {
  const isDark = rootElement.classList.toggle('theme-dark');
  themeToggle.textContent = isDark ? translations[currentLanguage].btn_secondary_sunny : translations[currentLanguage].btn_secondary;
}

const galleryItems = [
  { srcFull: 'assets/fullpictures/Picture 1.png' },
  { srcFull: 'assets/fullpictures/Picture 2.png' },
  { srcFull: 'assets/fullpictures/Picture 3.png' }
];

const workItems = [
  { srcFull: 'assets/pictures/Picture 1.png' },
  { srcFull: 'assets/pictures/Picture 2.png' },
  { srcFull: 'assets/pictures/Picture 3.png' },
  { srcFull: 'assets/pictures/Picture 4.png' },
  { srcFull: 'assets/pictures/Picture 5.png' },
  { srcFull: 'assets/pictures/Picture 6.png' },
  { srcFull: 'assets/pictures/Picture 7.png' },
  { srcFull: 'assets/pictures/Picture 8.png' },
  { srcFull: 'assets/pictures/Picture 9.png' },
  { srcFull: 'assets/pictures/Picture 10.png' },
  { srcFull: 'assets/pictures/Picture 11.png' },
  { srcFull: 'assets/pictures/Picture 12.png' }
];

function resolveWorkItemSources() {
  document.querySelectorAll('.thumbnail-card').forEach((card) => {
    const index = Number(card.dataset.viewerIndex);
    const image = card.querySelector('img');
    if (!Number.isNaN(index) && image && workItems[index]) {
      workItems[index].srcFull = image.src;
    }
  });
}

function resolveGalleryItemSources() {
  document.querySelectorAll('.gallery-card').forEach((card) => {
    const index = Number(card.dataset.galleryIndex);
    const image = card.querySelector('img');
    if (!Number.isNaN(index) && image && galleryItems[index]) {
      galleryItems[index].srcFull = image.currentSrc || image.src;
    }
  });
}

let currentGalleryIndex = 0;
let currentGalleryItems = galleryItems;
const galleryViewer = document.getElementById('gallery-viewer');
const galleryViewerImage = document.getElementById('gallery-viewer-image');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const galleryClose = document.getElementById('gallery-close');

function showGalleryViewer(index, items) {
  currentGalleryItems = items;
  currentGalleryIndex = (index + items.length) % items.length;
  const item = items[currentGalleryIndex];
  const isSmallViewer = items === workItems;

  galleryViewer.classList.remove('viewer-anim-in');
  galleryViewer.classList.add('viewer-anim-out');
  galleryViewerImage.classList.remove('fade-in');
  galleryViewerImage.classList.add('fade-out');

  if (isSmallViewer) {
    galleryViewerImage.classList.add('viewer-image--small');
  } else {
    galleryViewerImage.classList.remove('viewer-image--small');
  }

  setTimeout(() => {
    if (item.srcFull) {
      galleryViewerImage.innerHTML = `<img src="${item.srcFull}" alt="Gallery image">`;
    } else {
      galleryViewerImage.textContent = item.icon;
    }

    galleryViewer.classList.remove('hidden');
    galleryViewer.classList.remove('viewer-anim-out');
    galleryViewer.classList.add('viewer-anim-in');

    galleryViewerImage.classList.remove('fade-out');
    galleryViewerImage.classList.add('fade-in');

    window.setTimeout(() => {
      galleryViewerImage.classList.remove('fade-in');
      galleryViewer.classList.remove('viewer-anim-in');
    }, 320);
  }, 180);
}

function changeGalleryIndex(delta) {
  showGalleryViewer(currentGalleryIndex + delta, currentGalleryItems);
}

function hideGalleryViewer() {
  galleryViewer.classList.add('hidden');
}

function setLanguage(lang) {
  currentLanguage = lang;
  rootElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (value != null) {
      element.textContent = value;
    }
  });
  const languageLabel = languageToggle.querySelector('.btn-label');
  if (languageLabel) {
    const newLabel = currentLanguage === 'en' ? 'RU' : 'EN';
    languageLabel.style.opacity = '0';
    window.setTimeout(() => {
      languageLabel.textContent = newLabel;
      languageLabel.style.opacity = '1';
    }, 180);
  }
  updateThemeToggleText();
  galleryClose.textContent = translations[currentLanguage].gallery_close;
}

themeToggle.addEventListener('click', updateTheme);
languageToggle.addEventListener('click', () => {
  setLanguage(currentLanguage === 'en' ? 'ru' : 'en');
});

galleryPrev.addEventListener('click', () => changeGalleryIndex(-1));
galleryNext.addEventListener('click', () => changeGalleryIndex(1));
galleryClose.addEventListener('click', hideGalleryViewer);

document.querySelectorAll('.gallery-card').forEach((card) => {
  card.addEventListener('click', () => {
    const index = Number(card.dataset.galleryIndex) || 0;
    showGalleryViewer(index, galleryItems);
  });
});

document.querySelectorAll('.thumbnail-card').forEach((card) => {
  card.addEventListener('click', () => {
    const index = Number(card.dataset.viewerIndex) || 0;
    showGalleryViewer(index, workItems);
  });
});

window.addEventListener('load', () => {
  resolveWorkItemSources();
  resolveGalleryItemSources();
  setLanguage(currentLanguage);

  const appearItems = document.querySelectorAll(
    '.hero-card, .hero-actions, .section-header, .thumbnail-card, .gallery-card, .page-footer'
  );
  appearItems.forEach((item) => item.classList.add('appear-block'));

  appearItems.forEach((item, index) => {
    window.setTimeout(() => {
      item.classList.add('visible');
    }, 100 * index);
  });
});
