$(function () {
    var projectStart = $('#project-tag').offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > projectStart) {
            //inside projects container
            $('.projects-link').addClass("selected-color");
            $('.work-exp-link').removeClass("selected-color");
        }
        else {
            //outside projects container
            $('.projects-link').removeClass("selected-color");
            $('.work-exp-link').addClass("selected-color");
        }
    });
});