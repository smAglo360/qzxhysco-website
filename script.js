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
    works_header: 'Featured Works',
    works_number: '01',
    gallery_number: '02',
    project1_title: 'Kitten Code Jam',
    project1_text: 'Retro UI design for a cat-themed game launch page with pixel charm.',
    project1_tag: 'UI / Game',
    project2_title: 'Purrfect Portfolio',
    project2_text: 'Animated portfolio card system built to celebrate playful brand identity.',
    project2_tag: 'Branding',
    project3_title: 'Pixel Cat Studio',
    project3_text: 'Landing page layout with bold pixel borders, bright colors, and fun micro-interactions.',
    project3_tag: 'Web Design',
    gallery_header: 'Picture Gallery',
    gallery1_title: 'Studio Snapshot',
    gallery1_text: 'Placeholder for an image of pixel art or portfolio photography.',
    gallery2_title: 'Project Preview',
    gallery2_text: 'Swap this placeholder for your next gallery image.',
    gallery3_title: 'Cat Moments',
    gallery3_text: 'A section ready to show off your featured visuals.',
    footer_text: 'Made by smAglo360 with ❤️',
    gallery_close: 'Close',
    work1_title: 'Mini Preview 1',
    work1_text: 'Small thumbnail detail for the first featured work.',
    work2_title: 'Mini Preview 2',
    work2_text: 'Small thumbnail detail for the second featured work.',
    work3_title: 'Mini Preview 3',
    work3_text: 'Small thumbnail detail for the third featured work.',
    work4_title: 'Mini Preview 4',
    work4_text: 'Small thumbnail detail for the fourth featured work.',
    work5_title: 'Mini Preview 5',
    work5_text: 'Small thumbnail detail for the fifth featured work.',
    work6_title: 'Mini Preview 6',
    work6_text: 'Small thumbnail detail for the sixth featured work.',
    work7_title: 'Mini Preview 7',
    work7_text: 'Small thumbnail detail for the seventh featured work.',
    work8_title: 'Mini Preview 8',
    work8_text: 'Small thumbnail detail for the eighth featured work.',
    work9_title: 'Mini Preview 9',
    work9_text: 'Small thumbnail detail for the ninth featured work.',
    work10_title: 'Mini Preview 10',
    work10_text: 'Small thumbnail detail for the tenth featured work.',
    work11_title: 'Mini Preview 11',
    work11_text: 'Small thumbnail detail for the eleventh featured work.',
    work12_title: 'Mini Preview 12',
    work12_text: 'Small thumbnail detail for the twelfth featured work.'
  },
  ru: {
    hero_badge: 'С творчеством кошек',
    hero_title: 'Qzxhysco',
    hero_copy: 'Уютное портфолио выполненное в пиксельном стиле для проектов.',
    btn_primary: 'Мои работы',
    btn_secondary: 'Темный',
    btn_secondary_sunny: 'Солнечный',
    works_header: 'Избранные работы',
    works_number: '01',
    gallery_number: '02',
    project1_title: 'Kitten Code Jam',
    project1_text: 'Ретро UI-дизайн для страницы запуска игры о кошках с пиксельным очарованием.',
    project1_tag: 'UI / Игра',
    project2_title: 'Purrfect Portfolio',
    project2_text: 'Анимированная карта портфолио для демонстрации игривой айдентики.',
    project2_tag: 'Брендинг',
    project3_title: 'Pixel Cat Studio',
    project3_text: 'Макет лендинга с жирными пиксельными рамками, яркими цветами и веселой микровзаимодействием.',
    project3_tag: 'Веб-дизайн',
    gallery_header: 'Галерея изображений',
    gallery1_title: 'Кадр студии',
    gallery1_text: 'Здесь появится изображение пиксельного искусства или фотографии.',
    gallery2_title: 'Превью проекта',
    gallery2_text: 'Замените этот блок на ваше следующее изображение галереи.',
    gallery3_title: 'Кошачьи моменты',
    gallery3_text: 'Раздел готов показать ваши лучшие визуальные работы.',
    footer_text: 'Создано smAglo360 с любовью ❤️',
    gallery_close: 'Закрыть',
    work1_title: 'Мини-превью 1',
    work1_text: 'Маленький миниатюрный просмотр первой работы.',
    work2_title: 'Мини-превью 2',
    work2_text: 'Маленький миниатюрный просмотр второй работы.',
    work3_title: 'Мини-превью 3',
    work3_text: 'Маленький миниатюрный просмотр третьей работы.',
    work4_title: 'Мини-превью 4',
    work4_text: 'Маленький миниатюрный просмотр четвертой работы.',
    work5_title: 'Мини-превью 5',
    work5_text: 'Маленький миниатюрный просмотр пятой работы.',
    work6_title: 'Мини-превью 6',
    work6_text: 'Маленький миниатюрный просмотр шестой работы.',
    work7_title: 'Мини-превью 7',
    work7_text: 'Маленький миниатюрный просмотр седьмой работы.',
    work8_title: 'Мини-превью 8',
    work8_text: 'Маленький миниатюрный просмотр восьмой работы.',
    work9_title: 'Мини-превью 9',
    work9_text: 'Маленький миниатюрный просмотр девятой работы.',
    work10_title: 'Мини-превью 10',
    work10_text: 'Маленький миниатюрный просмотр десятой работы.',
    work11_title: 'Мини-превью 11',
    work11_text: 'Маленький миниатюрный просмотр одиннадцатой работы.',
    work12_title: 'Мини-превью 12',
    work12_text: 'Маленький миниатюрный просмотр двенадцатой работы.'
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
  {
    srcFull: 'assets/fullpictures/Picture 1.png',
    titleKey: 'gallery1_title',
    textKey: 'gallery1_text'
  },
  {
    srcFull: 'assets/fullpictures/Picture 2.png',
    titleKey: 'gallery2_title',
    textKey: 'gallery2_text'
  },
  {
    srcFull: 'assets/fullpictures/Picture 3.png',
    titleKey: 'gallery3_title',
    textKey: 'gallery3_text'
  }
];

const workItems = [
  {
    srcFull: 'assets/pictures/Picture 1.png',
    titleKey: 'work1_title',
    textKey: 'work1_text'
  },
  {
    srcFull: 'assets/pictures/Picture 2.png',
    titleKey: 'work2_title',
    textKey: 'work2_text'
  },
  {
    srcFull: 'assets/pictures/Picture 3.png',
    titleKey: 'work3_title',
    textKey: 'work3_text'
  },
  {
    srcFull: 'assets/pictures/Picture 4.png',
    titleKey: 'work4_title',
    textKey: 'work4_text'
  },
  {
    srcFull: 'assets/pictures/Picture 5.png',
    titleKey: 'work5_title',
    textKey: 'work5_text'
  },
  {
    srcFull: 'assets/pictures/Picture 6.png',
    titleKey: 'work6_title',
    textKey: 'work6_text'
  },
  {
    srcFull: 'assets/pictures/Picture 7.png',
    titleKey: 'work7_title',
    textKey: 'work7_text'
  },
  {
    srcFull: 'assets/pictures/Picture 8.png',
    titleKey: 'work8_title',
    textKey: 'work8_text'
  },
  {
    srcFull: 'assets/pictures/Picture 9.png',
    titleKey: 'work9_title',
    textKey: 'work9_text'
  },
  {
    srcFull: 'assets/pictures/Picture 10.png',
    titleKey: 'work10_title',
    textKey: 'work10_text'
  },
  {
    srcFull: 'assets/pictures/Picture 11.png',
    titleKey: 'work11_title',
    textKey: 'work11_text'
  },
  {
    srcFull: 'assets/pictures/Picture 12.png',
    titleKey: 'work12_title',
    textKey: 'work12_text'
  }
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
const galleryViewerTitle = document.getElementById('gallery-viewer-title');
const galleryViewerText = document.getElementById('gallery-viewer-text');
const galleryViewerTextBlock = document.querySelector('.viewer-text-block');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
const galleryClose = document.getElementById('gallery-close');

function showGalleryViewer(index, items) {
  currentGalleryItems = items;
  currentGalleryIndex = (index + items.length) % items.length;
  const item = items[currentGalleryIndex];
  const showTextBlock = items === workItems;

  const isSmallViewer = items === workItems;
  galleryViewer.classList.remove('viewer-anim-in');
  galleryViewer.classList.add('viewer-anim-out');
  galleryViewerImage.classList.remove('fade-in');
  galleryViewerImage.classList.add('fade-out');
  galleryViewerTextBlock.style.display = showTextBlock ? '' : 'none';

  if (isSmallViewer) {
    galleryViewerImage.classList.add('viewer-image--small');
  } else {
    galleryViewerImage.classList.remove('viewer-image--small');
  }

  setTimeout(() => {
    if (item.srcFull) {
      galleryViewerImage.innerHTML = `<img src="${item.srcFull}" alt="${translations[currentLanguage][item.titleKey] || 'Gallery image'}">`;
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

function updateGalleryViewerText() {
  if (currentGalleryItems !== workItems) {
    return;
  }

  const item = currentGalleryItems[currentGalleryIndex];
  galleryViewerTitle.textContent = translations[currentLanguage][item.titleKey];
  galleryViewerText.textContent = translations[currentLanguage][item.textKey];
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
  if (!galleryViewer.classList.contains('hidden')) {
    updateGalleryViewerText();
  }
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
    '.hero-card, .hero-actions, .section-header, .thumbnail-card, .gallery-card, .project-card, .feature-box, .page-footer'
  );
  appearItems.forEach((item) => item.classList.add('appear-block'));

  appearItems.forEach((item, index) => {
    window.setTimeout(() => {
      item.classList.add('visible');
    }, 100 * index);
  });
});
