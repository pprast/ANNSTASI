// Отслеживаем прокрутку страницы
window.addEventListener('scroll', function() {
    let menu = document.querySelector('.menu'); // Меню
    let secondBlock = document.querySelector('.second-block'); // Второй блок на странице

    // Проверяем, находится ли верхняя часть второго блока на экране
    if (window.scrollY >= secondBlock.offsetTop) {
        menu.classList.add('menu-scrolled'); // Добавляем класс для изменения фона
    } else {
        menu.classList.remove('menu-scrolled'); // Убираем класс, если второй блок не виден
    }
});
