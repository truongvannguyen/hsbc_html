$(document).ready(function () {
    $('#filter-by-date').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });

    if($('#fullpage').length) {
        $('#fullpage').fullpage({
            //options here
            anchors: ['start'],
            autoScrolling: false,
            controlArrows: false,
            slidesNavigation: true

        });
    }

    if($('.service__choices').length) {
        $('.service__choices').slick({
            arrows: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

});

var goToServiceStep = function(index) {
    $('.service__form').hide();
    $('.service__form:eq(' + index +')').stop().fadeIn("slow");
};
