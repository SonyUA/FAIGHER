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

/*ANCHOR */

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

/* ANIMATION SCROLL */

$(window).scroll(function() {
    $('.movLeft').each(function() {
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            $(this).addClass('slideInLeft ');
        }
    });
});