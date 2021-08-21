$(document).ready(function () {
    var button = $('#button__up');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});