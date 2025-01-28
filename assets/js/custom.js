// A $( document ).ready() block.
$( document ).ready(function() {
    $(function() {
        var header = $(".navbar");
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        });
      
    });
});