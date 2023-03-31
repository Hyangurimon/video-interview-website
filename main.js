$(document).ready(function () {
    // video-vertical-buttons
    $('.expand-vertical').click(function () {
        $('.media-canvas-container').addClass("expand-canvas");
        $('.form-wrapper').addClass("minimize-form");
        $(this).addClass('hide-btn');
        $('.minimize-vertical').removeClass('hide-btn');
    })

    $('.minimize-vertical').click(function () {
        $('.media-canvas-container').removeClass("expand-canvas");
        $('.form-wrapper').removeClass("minimize-form");
        $(this).addClass('hide-btn');
        $('.expand-vertical').removeClass('hide-btn');
    })


    //video-horizontal-buttons
    $('.expand-horizontal').click(function () {
        $('.panel-left-wrapper').toggleClass('full-screen');
        $('.panel-center-wrapper').toggleClass('full-screen');
        $('.panel-right-wrapper').toggleClass('full-screen');
    })


    // panel-right-nav-bar
    $(".level-2 .panel-heading").hover(function () {
        $(this).addClass("panel-heading-hovered");
    }, function () {
        $(this).removeClass("panel-heading-hovered");
    })

    $('.maximize-content-btn').click(function () {
        $('.panel-right-wrapper').addClass('maximize-panel-right');
        $(this).addClass('hide-btn');
        $('.minimize-content-btn').removeClass('hide-btn');
    })

    $('.minimize-content-btn').click(function () {
        $('.panel-right-wrapper').removeClass('maximize-panel-right');
        $(this).addClass('hide-btn');
        $('.maximize-content-btn').removeClass('hide-btn');
    })

    $(".panel-right-nav-wrapper").children().hover(function () {
        $(this).addClass("hovered");
    }, function () {
        $(this).removeClass("hovered");
    })

    $(".detailed-profile").click(function () {
        $('.panel-right-container').addClass("show");
        $('.content-1-container').addClass("show");
    })

    $(".applicant-schedule").click(function () {
        $('.panel-right-container').addClass("show");
        $('.content-2-container').addClass("show");
    })

    $(".level-2 .panel-heading").click(function () {
        $('.panel-right-container').removeClass("show");
        $('.content-1-container').removeClass("show");
        $('.content-2-container').removeClass("show");
    })

    $(".btn-hamburger").click(function () {
        $('.panel-right-wrapper').addClass("show");
    })

    $(".close-content-btn").click(function () {
        $('.panel-right-wrapper').removeClass("show");
    })
});