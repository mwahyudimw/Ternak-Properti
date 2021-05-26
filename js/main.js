$(function() {

    'use strict';

    // loader
    $.fakeLoader({
        spinner: "spinner4",
        bgColor: "#021d38"
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if (onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        } else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });


});