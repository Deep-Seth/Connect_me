$(function () {

    startUp();
})

function startUp() {

    $(window).resize(function () {
        if ($(window).width() > 1024) {
            if ($('.collapsable').hasClass('open')) {
                $('.collapsable').removeClass('open');
            }

            $('.topLine').removeClass('rightCross');
            $('.midLine').removeClass('hidden');
            $('.bottomLine').removeClass('leftCross');
        }
    });
}

function navFunction() {

    $('.collapsable').toggleClass('open');
    $('.topLine').toggleClass('rightCross');
    $('.midLine').toggleClass('hidden');
    $('.bottomLine').toggleClass('leftCross');
}