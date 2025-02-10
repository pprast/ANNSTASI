document.addEventListener("DOMContentLoaded", function () {
    const burger = document.createElement("div");
    burger.classList.add("burger-menu");
    burger.innerHTML = "<div></div><div></div><div></div>";
    document.body.appendChild(burger);

    const nav = document.createElement("nav");
    nav.classList.add("mobile-nav");
    nav.innerHTML = `
        <a href="#portfolio">Портфолио</a>
        <a href="#price">Прайс</a>
        <a href="#education">Обучение</a>
        <a href="#about">Обо мне</a>
    `;
    document.body.appendChild(nav);

    const mainMenu = document.querySelector('.menu ul'); // Захватываем старое меню

    burger.addEventListener("click", function () {
        nav.classList.toggle("active"); // Открываем/закрываем бургер-меню
        if (nav.classList.contains("active")) {
            mainMenu.style.display = "none"; // Скрываем старое меню
        } else {
            mainMenu.style.display = "flex"; // Показываем старое меню при закрытии бургера
        }
    });
});
