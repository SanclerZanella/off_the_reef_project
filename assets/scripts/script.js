// -----------------------------------------------------------------------------Hourly report carousel Script
$(document).ready(function () {
    let slideContent = $('.hourlyReportSlide');

    $('#prev').click(function () {
        let currentSlide = $('.activeReportSlide');
        let prevSlide = currentSlide.prev();

        if (prevSlide.length) {
            currentSlide.removeClass('activeReportSlide');
            prevSlide.addClass('activeReportSlide');

         } else if (!prevSlide.length) {
             currentSlide.removeClass('activeReportSlide');
             slideContent.last().addClass('activeReportSlide');
         }
    });

    $('#next').click(function () {
        let currentSlide = $('.activeReportSlide');

        let nextSlide = currentSlide.next();

        if (nextSlide.length) {
            currentSlide.removeClass('activeReportSlide');

            nextSlide.addClass('activeReportSlide');

        } else if (!nextSlide.length) {
             currentSlide.removeClass('activeReportSlide');
             slideContent.first().addClass('activeReportSlide');
         }
    });
});


// -----------------------------------------------------------------------------Carousel Script
$(document).ready(function () {

    // fetch all elements with slideContent class
    let slideContent = $('.slideContent');

    // Add functionality on click to the previous button
    $('#leftArrow').click(function () {

        // fetch the current element with activeSlide class, which is shown on screen while the others slide contents are hidden
        let currentSlide = $('.activeSlide');

        // fetch the previous element before the element with activeSlide class, 
        //which is hidden on screen
        let prevSlide = currentSlide.prev();

        // if there is a sibling element before the current element with activeSlide class
        if (prevSlide.length) {

            // then will remove the activeSlide class of the current element, getting this element hidden on flow
            currentSlide.removeClass('activeSlide');

            // and will add activeSlide class to the previous sibling element, getting this element visible on flow
            prevSlide.addClass('activeSlide');

            // if there is not a sibling element before the current element with activeSlide class
        } else if (!prevSlide.length) {

            // then will remove the activeSlide class of the current element, getting this element hidden on flow
            currentSlide.removeClass('activeSlide');

            // and will add activeSlide class to the last sibling element, getting this element visible on flow
            slideContent.last().addClass('activeSlide');
        }
    });

    // Add functionality on click to the next arrow button

    $('#rigthArrow').click(function () {
        let currentSlide = $('.activeSlide');

        // fetch the next element after the element with activeSlide class, 
        //which is hidden on screen
        let nextSlide = currentSlide.next();

        if (nextSlide.length) {
            currentSlide.removeClass('activeSlide');

            // fetch the next element after the element with activeSlide class, 
            //which is hidden on screen
            nextSlide.addClass('activeSlide');

        // if there is not a sibling element after the current element with activeSlide class
        } else if (!nextSlide.length) {
            currentSlide.removeClass('activeSlide');

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
