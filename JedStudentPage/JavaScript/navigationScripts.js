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

function loginSignupForm() {
    $('.loginSignupForm').toggleClass('show');
    if(!$('.loginForm').hasClass('show')){
        $('.loginForm').addClass('show');
        $('.signup').addClass('inactive');
        $('.signupForm').removeClass('show');
        $('.login').removeClass('inactive');
    }
}

function activeTab(a) {
    if(a=="login"){
        if(!$('.loginForm').hasClass('show')){
            $('.signupForm').removeClass('show');
            $('.loginForm').addClass('show');
            $('.signup').addClass('inactive');
            $('.login').removeClass('inactive');
        }
    }
    if(a=="signup"){
        if(!$('.signupForm').hasClass('show')){
            $('.loginForm').removeClass('show');
            $('.signupForm').addClass('show');
            $('.login').addClass('inactive');
            $('.signup').removeClass('inactive');
        }
    }
}

function showPassword(b) {
    console.log(b + " has been selected");
}