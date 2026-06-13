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
        footer_text: "Made by smAglo360 with \u2764\uFE0F",
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
        hero_badge: "\u0421 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u043A\u043E\u0448\u0435\u043A",
        hero_title: 'Qzxhysco',
        hero_copy: "\u0423\u044E\u0442\u043D\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0435 \u0432 \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u043C \u0441\u0442\u0438\u043B\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432.",
        btn_primary: "\u041C\u043E\u0438 \u0440\u0430\u0431\u043E\u0442\u044B",
        btn_secondary: "\u0422\u0435\u043C\u043D\u044B\u0439",
        btn_secondary_sunny: "\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439",
        works_header: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B",
        works_number: '01',
        gallery_number: '02',
        project1_title: 'Kitten Code Jam',
        project1_text: "\u0420\u0435\u0442\u0440\u043E UI-\u0434\u0438\u0437\u0430\u0439\u043D \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0438\u0433\u0440\u044B \u043E \u043A\u043E\u0448\u043A\u0430\u0445 \u0441 \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u0447\u0430\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C.",
        project1_tag: "UI / \u0418\u0433\u0440\u0430",
        project2_title: 'Purrfect Portfolio',
        project2_text: "\u0410\u043D\u0438\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0434\u043B\u044F \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u0433\u0440\u0438\u0432\u043E\u0439 \u0430\u0439\u0434\u0435\u043D\u0442\u0438\u043A\u0438.",
        project2_tag: "\u0411\u0440\u0435\u043D\u0434\u0438\u043D\u0433",
        project3_title: 'Pixel Cat Studio',
        project3_text: "\u041C\u0430\u043A\u0435\u0442 \u043B\u0435\u043D\u0434\u0438\u043D\u0433\u0430 \u0441 \u0436\u0438\u0440\u043D\u044B\u043C\u0438 \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0440\u0430\u043C\u043A\u0430\u043C\u0438, \u044F\u0440\u043A\u0438\u043C\u0438 \u0446\u0432\u0435\u0442\u0430\u043C\u0438 \u0438 \u0432\u0435\u0441\u0435\u043B\u043E\u0439 \u043C\u0438\u043A\u0440\u043E\u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043C.",
        project3_tag: "\u0412\u0435\u0431-\u0434\u0438\u0437\u0430\u0439\u043D",
        gallery_header: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439",
        gallery1_title: "\u041A\u0430\u0434\u0440 \u0441\u0442\u0443\u0434\u0438\u0438",
        gallery1_text: "\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043F\u0438\u043A\u0441\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0441\u043A\u0443\u0441\u0441\u0442\u0432\u0430 \u0438\u043B\u0438 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438.",
        gallery2_title: "\u041F\u0440\u0435\u0432\u044C\u044E \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
        gallery2_text: "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 \u044D\u0442\u043E\u0442 \u0431\u043B\u043E\u043A \u043D\u0430 \u0432\u0430\u0448\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0433\u0430\u043B\u0435\u0440\u0435\u0438.",
        gallery3_title: "\u041A\u043E\u0448\u0430\u0447\u044C\u0438 \u043C\u043E\u043C\u0435\u043D\u0442\u044B",
        gallery3_text: "\u0420\u0430\u0437\u0434\u0435\u043B \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u043B\u0443\u0447\u0448\u0438\u0435 \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u044B.",
        footer_text: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E smAglo360 \u0441 \u043B\u044E\u0431\u043E\u0432\u044C\u044E \u2764\uFE0F",
        gallery_close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        work1_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 1",
        work1_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u0435\u0440\u0432\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work2_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 2",
        work2_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work3_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 3",
        work3_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0442\u0440\u0435\u0442\u044C\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work4_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 4",
        work4_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work5_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 5",
        work5_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043F\u044F\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work6_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 6",
        work6_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0448\u0435\u0441\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work7_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 7",
        work7_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0441\u0435\u0434\u044C\u043C\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work8_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 8",
        work8_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0432\u043E\u0441\u044C\u043C\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work9_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 9",
        work9_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0435\u0432\u044F\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work10_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 10",
        work10_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0435\u0441\u044F\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work11_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 11",
        work11_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B.",
        work12_title: "\u041C\u0438\u043D\u0438-\u043F\u0440\u0435\u0432\u044C\u044E 12",
        work12_text: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u043C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B."
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
    document.querySelectorAll('.thumbnail-card').forEach((card)=>{
        const index = Number(card.dataset.viewerIndex);
        const image = card.querySelector('img');
        if (!Number.isNaN(index) && image && workItems[index]) workItems[index].srcFull = image.src;
    });
}
function resolveGalleryItemSources() {
    document.querySelectorAll('.gallery-card').forEach((card)=>{
        const index = Number(card.dataset.galleryIndex);
        const image = card.querySelector('img');
        if (!Number.isNaN(index) && image && galleryItems[index]) galleryItems[index].srcFull = image.currentSrc || image.src;
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
    if (isSmallViewer) galleryViewerImage.classList.add('viewer-image--small');
    else galleryViewerImage.classList.remove('viewer-image--small');
    setTimeout(()=>{
        if (item.srcFull) galleryViewerImage.innerHTML = `<img src="${item.srcFull}" alt="${translations[currentLanguage][item.titleKey] || 'Gallery image'}">`;
        else galleryViewerImage.textContent = item.icon;
        galleryViewer.classList.remove('hidden');
        galleryViewer.classList.remove('viewer-anim-out');
        galleryViewer.classList.add('viewer-anim-in');
        galleryViewerImage.classList.remove('fade-out');
        galleryViewerImage.classList.add('fade-in');
        window.setTimeout(()=>{
            galleryViewerImage.classList.remove('fade-in');
            galleryViewer.classList.remove('viewer-anim-in');
        }, 320);
    }, 180);
}
function updateGalleryViewerText() {
    if (currentGalleryItems !== workItems) return;
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
    document.querySelectorAll('[data-i18n]').forEach((element)=>{
        const key = element.dataset.i18n;
        const value = translations[lang][key];
        if (value != null) element.textContent = value;
    });
    const languageLabel = languageToggle.querySelector('.btn-label');
    if (languageLabel) {
        const newLabel = currentLanguage === 'en' ? 'RU' : 'EN';
        languageLabel.style.opacity = '0';
        window.setTimeout(()=>{
            languageLabel.textContent = newLabel;
            languageLabel.style.opacity = '1';
        }, 180);
    }
    updateThemeToggleText();
    galleryClose.textContent = translations[currentLanguage].gallery_close;
    if (!galleryViewer.classList.contains('hidden')) updateGalleryViewerText();
}
themeToggle.addEventListener('click', updateTheme);
languageToggle.addEventListener('click', ()=>{
    setLanguage(currentLanguage === 'en' ? 'ru' : 'en');
});
galleryPrev.addEventListener('click', ()=>changeGalleryIndex(-1));
galleryNext.addEventListener('click', ()=>changeGalleryIndex(1));
galleryClose.addEventListener('click', hideGalleryViewer);
document.querySelectorAll('.gallery-card').forEach((card)=>{
    card.addEventListener('click', ()=>{
        const index = Number(card.dataset.galleryIndex) || 0;
        showGalleryViewer(index, galleryItems);
    });
});
document.querySelectorAll('.thumbnail-card').forEach((card)=>{
    card.addEventListener('click', ()=>{
        const index = Number(card.dataset.viewerIndex) || 0;
        showGalleryViewer(index, workItems);
    });
});
window.addEventListener('load', ()=>{
    resolveWorkItemSources();
    resolveGalleryItemSources();
    setLanguage(currentLanguage);
    const appearItems = document.querySelectorAll('.hero-card, .hero-actions, .section-header, .thumbnail-card, .gallery-card, .project-card, .feature-box, .page-footer');
    appearItems.forEach((item)=>item.classList.add('appear-block'));
    appearItems.forEach((item, index)=>{
        window.setTimeout(()=>{
            item.classList.add('visible');
        }, 100 * index);
    });
});

//# sourceMappingURL=pixel-cat-portfolio.672d4772.js.map
