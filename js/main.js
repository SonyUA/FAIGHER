/* MENU */
const menu = document.querySelector('.burger-menu');
let burgerIcon = document.querySelector('.icon-bars');
let closeIcon = document.querySelector('.icon-close');

function showMenu() {
    menu.classList.toggle("burger-menu--show");
    burgerIcon.classList.toggle("icon-close");
    closeIcon.classList.toggle("icon-close");

}
burgerIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', showMenu);