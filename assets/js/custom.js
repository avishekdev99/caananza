$(document).ready(function () {
    var header = $(".site-header");

    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();
        if (scroll >= 50) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});
