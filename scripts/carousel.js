const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

const images = [];
for (let i = 1; i <= 16; i++) {
    const img = document.createElement('img');
    img.src = `carousel/image${i}.JPG`;
    img.alt = `Image ${i}`;
    carousel.appendChild(img);
    images.push(img);
}

// Клонируем первые четыре изображения для бесшовной прокрутки
for (let i = 0; i < 4; i++) {
    const clone = images[i].cloneNode();
    carousel.appendChild(clone);
}

// Клонируем последние четыре изображения для бесшовной прокрутки назад
for (let i = images.length - 4; i < images.length; i++) {
    const clone = images[i].cloneNode();
    carousel.insertBefore(clone, carousel.firstChild);
}

let index = 4; // Начинаем с первого реального изображения
const imageWidth = 25; // Каждое изображение занимает 25% ширины контейнера

carousel.style.transform = `translateX(-${index * imageWidth}%)`;

function updateCarousel() {
    carousel.style.transition = 'transform 0.5s linear';
    carousel.style.transform = `translateX(-${index * imageWidth}%)`;

    carousel.addEventListener('transitionend', () => {
        if (index >= images.length + 4) { // Если дошли до конца
            carousel.style.transition = 'none';
            index = 4;
            carousel.style.transform = `translateX(-${index * imageWidth}%)`;
        } else if (index < 4) { // Если дошли до начала
            carousel.style.transition = 'none';
            index = images.length + 3;
            carousel.style.transform = `translateX(-${index * imageWidth}%)`;
        }
    }, { once: true });
}

nextButton.addEventListener('click', () => {
    index++;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    index--;
    updateCarousel();
});
