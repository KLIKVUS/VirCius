window.addEventListener("load", (e) => {
    //  Анимация загрузки
    const load = document.querySelector(".load");
    load.style = `transform: translate(0, -300vh);`;

    // Анимация меню
    const menu = document.querySelector(".navigation");
    const menuOpCl = (e) => {
        console.log("d");
        menu.classList.toggle = "menuOpCl";
    };
    menu.addEventListener("click", menuOpCl);
})