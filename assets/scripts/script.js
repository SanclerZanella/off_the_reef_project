
// -----------------------------------------------------------------------------Carousel Script
$(document).ready(function () {

    // -----------------------------------------------------------------------------Hourly and daily report slide Script
    let hourlySlideContent = $('.hourlyReportSlide');
    let dailySlideContent = $('.dailyReportSlide');

    $('.arrowsControl').each(function () {
        $(this).click(function () {
            let arrowSide = $(this).attr('id');

            switch (arrowSide) {
                case "hourlyPrev":
                    let currentHourlyPrevSlide = $('.activeHourlyReportSlide').attr('class', 'col-12 hourlyReportSlide activeHourlyReportSlide');
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
                    let currentHourlyNextSlide = $('.activeHourlyReportSlide').attr('class', 'col-12 hourlyReportSlide activeHourlyReportSlide');
                    let nextSlide = currentHourlyNextSlide.next();

                    if (nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        nextSlide.addClass('activeHourlyReportSlide');

                    } else if (!nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        hourlySlideContent.first().addClass('activeHourlyReportSlide');
                    };
                    break;
                case "dailyPrev":
                    let currentDailyPrevSlide = $('.activeDailyReportSlide').attr('class', 'col-12 dailyReportSlide activeDailyReportSlide');
                    let dailyPrevSlide = currentDailyPrevSlide.prev();

                    if (dailyPrevSlide.length) {
                        currentDailyPrevSlide.removeClass('activeDailyReportSlide');
                        dailyPrevSlide.addClass('activeDailyReportSlide');
                        //  

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
            };
        });
    });

    // -----------------------------------------------------------------------------Songs suggestion slide Script
    // fetch all elements with slideContent class
    let slideContent = $('.slideContent');

    // Add functionality on click to the previous button
    $('#leftArrow').click(function () {

        // fetch the current element with activeSlide class, which is shown on screen while the others slide contents are hidden
        let currentDailyPrevSlide = $('.activeSlide');

        // fetch the previous element before the element with activeSlide class, 
        //which is hidden on screen
        let prevSlide = currentDailyPrevSlide.prev();

        // if there is a sibling element before the current element with activeSlide class
        if (prevSlide.length) {

            // then will remove the activeSlide class of the current element, getting this element hidden on flow
            currentDailyPrevSlide.removeClass('activeSlide');

            // and will add activeSlide class to the previous sibling element, getting this element visible on flow
            prevSlide.addClass('activeSlide');

            // if there is not a sibling element before the current element with activeSlide class
        } else if (!prevSlide.length) {

            // then will remove the activeSlide class of the current element, getting this element hidden on flow
            currentDailyPrevSlide.removeClass('activeSlide');

            // and will add activeSlide class to the last sibling element, getting this element visible on flow
            slideContent.last().addClass('activeSlide');
        }
    });

    // Add functionality on click to the next arrow button

    $('#rigthArrow').click(function () {
        let currentDailyPrevSlide = $('.activeSlide');

        // fetch the next element after the element with activeSlide class, 
        //which is hidden on screen
        let nextSlide = currentDailyPrevSlide.next();

        if (nextSlide.length) {
            currentDailyPrevSlide.removeClass('activeSlide');

            // fetch the next element after the element with activeSlide class, 
            //which is hidden on screen
            nextSlide.addClass('activeSlide');

            // if there is not a sibling element after the current element with activeSlide class
        } else if (!nextSlide.length) {
            currentDailyPrevSlide.removeClass('activeSlide');

            // will add activeSlide class to the first sibling element, getting this element visible on flow
            slideContent.first().addClass('activeSlide');
        }
    });
})


// -----------------------------------------------------------------------------Current Time Script

function currentHour() {

    //Fetch the current time
    let currentTime = new Date().toString().substr(0, 24);

    //Apply the current time to an element in the document
    $('#currentTime').html(currentTime);

    //Refresh the time each 1 second, set in milli seconds
    setTimeout('currentHour()', 1000)
}

currentHour();
