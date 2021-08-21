$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav__item').click(function () {
        $('.header__burger,.nav__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});