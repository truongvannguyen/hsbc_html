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
            slidesNavigation: true,
        });
    }

});
