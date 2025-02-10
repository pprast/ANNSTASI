// Выбираем элементы карусели
const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

// Загружаем изображения
const images = [];
for (let i = 1; i <= 16; i++) {
    const img = document.createElement('img');
    img.src = `carousel/image${i}.JPG`;
    img.alt = `Image ${i}`;
    carousel.appendChild(img);
    images.push(img);
}

// Клонируем изображения для бесшовной прокрутки
for (let i = 0; i < 4; i++) {
    const clone = images[i].cloneNode();
    carousel.appendChild(clone);
}

for (let i = images.length - 4; i < images.length; i++) {
    const clone = images[i].cloneNode();
    carousel.insertBefore(clone, carousel.firstChild);
}

let index = 4; // Начинаем с первого реального изображения

// Функция для вычисления ширины изображения в зависимости от размера экрана
function getImageWidth() {
    if (window.innerWidth <= 480) {
        return 100; // Для мобильных устройств показываем 1 изображение
    } else if (window.innerWidth <= 1024) {
        return 50; // Для планшетов показываем 2 изображения
    } else {
        return 25; // Для десктопов показываем 4 изображения
    }
}

// Инициализация карусели
function initializeCarousel() {
    const imageWidth = getImageWidth();
    carousel.style.transform = `translateX(-${index * imageWidth}%)`;
}

initializeCarousel();

// Обновление карусели
function updateCarousel() {
    const imageWidth = getImageWidth();
    carousel.style.transition = 'transform 0.5s linear';
    carousel.style.transform = `translateX(-${index * imageWidth}%)`;

    carousel.addEventListener('transitionend', () => {
        if (index >= images.length + 4) {
            carousel.style.transition = 'none';
            index = 4;
            carousel.style.transform = `translateX(-${index * imageWidth}%)`;
        } else if (index < 4) {
            carousel.style.transition = 'none';
            index = images.length + 3;
            carousel.style.transform = `translateX(-${index * imageWidth}%)`;
        }
    }, { once: true });
}

// Навешиваем обработчики событий на кнопки
nextButton.addEventListener('click', () => {
    index++;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index--;
    updateCarousel();
});

// Пересчитываем размеры при изменении окна
window.addEventListener('resize', initializeCarousel);
