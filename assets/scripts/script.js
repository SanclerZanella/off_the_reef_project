
// -----------------------------------------------------------------------------Carousel Script
$(document).ready(function () {

    // -----------------------------------------------------------------------------Hourly and daily report slide Script
    let hourlySlideContent = $('.hourlyReportSlide');
    let dailySlideContent = $('.dailyReportSlide');
    let surfSlideContent = $('.SurfHourlyReportSlide');

    $('.arrowsControl').each(function () {
        $(this).click(function () {
            let arrowSide = $(this).attr('id');

            switch (arrowSide) {

                // Hourly weather forecast Slide script
                case "hourlyPrev":
                    let currentHourlyPrevSlide = $('.activeHourlyReportSlide').attr('class', 'col-12 col-md-10 hourlyReportSlide activeHourlyReportSlide');
                    let prevSlide = currentHourlyPrevSlide.prev();

                    if (prevSlide.length) {
                        currentHourlyPrevSlide.removeClass('activeHourlyReportSlide');
                        prevSlide.addClass('activeHourlyReportSlide');

                    } else if (!prevSlide.length) {
                        currentHourlyPrevSlide.removeClass('activeHourlyReportSlide');
                        hourlySlideContent.last().addClass('activeHourlyReportSlide');
                        
                    };
                    break;

                case "hourlyNext":
                    let currentHourlyNextSlide = $('.activeHourlyReportSlide').attr('class', 'col-12 col-md-10 hourlyReportSlide activeHourlyReportSlide');
                    let nextSlide = currentHourlyNextSlide.next();

                    if (nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        nextSlide.addClass('activeHourlyReportSlide');

                    } else if (!nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        hourlySlideContent.first().addClass('activeHourlyReportSlide');

                    };
                    break;

                // Daily weather forecast Slide script
                case "dailyPrev":
                    let currentDailyPrevSlide = $('.activeDailyReportSlide').attr('class', 'col-12 dailyReportSlide activeDailyReportSlide');
                    let dailyPrevSlide = currentDailyPrevSlide.prev();

                    if (dailyPrevSlide.length) {
                        currentDailyPrevSlide.removeClass('activeDailyReportSlide');
                        dailyPrevSlide.addClass('activeDailyReportSlide');

                    } else if (!dailyPrevSlide.length) {
                        currentDailyPrevSlide.removeClass('activeDailyReportSlide');
                        dailySlideContent.last().addClass('activeDailyReportSlide');

                    };
                    break;

                case "dailyNext":
                    let currentDailyNextSlide = $('.activeDailyReportSlide').attr('class', 'col-12 dailyReportSlide activeDailyReportSlide');
                    let prevDailyNextSlide = currentDailyNextSlide.next();

                    if (prevDailyNextSlide.length) {
                        currentDailyNextSlide.removeClass('activeDailyReportSlide');
                        prevDailyNextSlide.addClass('activeDailyReportSlide');

                    } else if (!prevDailyNextSlide.length) {
                        currentDailyNextSlide.removeClass('activeDailyReportSlide');
                        dailySlideContent.first().addClass('activeDailyReportSlide');
                    };
                    break;

                // Hourly surf forecast Slide script
                case "surfHourlyPrev":
                    let currentSurfPrevSlide = $('.activeSurfHourlyReportSlide').attr('class', 'col-12 SurfHourlyReportSlide activeSurfHourlyReportSlide');
                    let surfPrevSlide = currentSurfPrevSlide.prev();

                    if (surfPrevSlide.length) {
                        currentSurfPrevSlide.removeClass('activeSurfHourlyReportSlide');
                        surfPrevSlide.addClass('activeSurfHourlyReportSlide');

                    } else if (!surfPrevSlide.length) {
                        currentSurfPrevSlide.removeClass('activeSurfHourlyReportSlide');
                        surfSlideContent.last().addClass('activeSurfHourlyReportSlide');
                    };
                    break;

                case "surfHourlyNext":
                    let currentSurfNextSlide = $('.activeSurfHourlyReportSlide').attr('class', 'col-12 SurfHourlyReportSlide activeSurfHourlyReportSlide');
                    let surfNextSlide = currentSurfNextSlide.next();

                    if (surfNextSlide.length) {
                        currentSurfNextSlide.removeClass('activeSurfHourlyReportSlide');
                        surfNextSlide.addClass('activeSurfHourlyReportSlide');

                    } else if (!surfNextSlide.length) {
                        currentSurfNextSlide.removeClass('activeSurfHourlyReportSlide');
                        surfSlideContent.first().addClass('activeSurfHourlyReportSlide');
                    };
                    break;
            };
        });
    });
});


// -----------------------------------------------------------------------------Current Time Script

function currentHour() {

    //Fetch the current time
    let currentTime = new Date();
    let date = currentTime.toString().substr(0, 15);
    let time = currentTime.toString().substr(15, 10);

    //Apply the current time to an element in the document
    $('#currentTime').html(`<p>${date} - ${time} </p>`);

    //Refresh the time each 1 second, set in milli seconds
    setTimeout('currentHour()', 1000)
}

currentHour();
