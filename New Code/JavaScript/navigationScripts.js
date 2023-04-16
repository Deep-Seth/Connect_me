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

    if ($('.collapsableTwo').hasClass('open')) {    
        $('.collapsable').toggleClass('open');
        $('.collapsableTwo').removeClass('open');
        $('.topLine').toggleClass('rightCross');
        $('.midLine').toggleClass('hidden');
        $('.bottomLine').toggleClass('leftCross');
    }
    else {
        $('.collapsable').toggleClass('open');
        $('.topLine').toggleClass('rightCross');
        $('.midLine').toggleClass('hidden');
        $('.bottomLine').toggleClass('leftCross');
    }
}

function profileFunction() {
    if ($('.collapsable').hasClass('open')) {    
        $('.collapsableTwo').toggleClass('open');
        $('.collapsable').removeClass('open');
        $('.topLine').toggleClass('rightCross');
        $('.midLine').toggleClass('hidden');
        $('.bottomLine').toggleClass('leftCross');
    }
    else {
        $('.collapsableTwo').toggleClass('open');
    }
}