$(document).ready(function () {
    $('#filter-by-date').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });

    if($('#fullpage').length) {
        $('#fullpage').slick({
            arrows: false,
            autoplay: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            fade: true
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

$('#fullpage').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("#service-container").removeClass (function (index, className) {
        return (className.match (/(^|\s)viewing-start-\S+/g) || []).join(' ');
    });
    $('#service-container').addClass('viewing-start-' + nextSlide);
});

var nextServiceSlide = function() {
    $('#fullpage').slick('slickNext');
};

var goToServiceStep = function(index) {
    $('.service__form').hide();
    $('.service__form:eq(' + index +')').stop().fadeIn("slow");
};
