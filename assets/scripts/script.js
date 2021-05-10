
// -------------------------------------------------------Home Page (Report Script)----------------------------------------------- //
$(document).ready(function () {

    // -----------------------------------------------------------------------------Hourly and daily report slide Script
    let hourlySlideContent = $('.hourlyReportSlide');
    let hourlySmScreen = $('.smHourlyReportSlide');
    let dailySlideContent = $('.dailyReportSlide');
    let dailySmScreen = $('.dailySmReportSlide');
    let surfSlideContent = $('.SurfHourlyReportSlide');
    let surfSmScreen = $('.smSurfHourlyReportSlide');

    // Report Carousel Control
    $('.arrowsControl').each(function () {
        $(this).click(function () {
            let arrowSide = $(this).attr('id');

            switch (arrowSide) {

                // Hourly weather forecast Slide script
                case "hourlyPrev":
                    let currentHourlyPrevSlide = $('.activeHourlyReportSlide').attr('class', 'col-lg-12 col-md-10 hourlyReportSlide activeHourlyReportSlide');
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
                    let currentHourlyNextSlide = $('.activeHourlyReportSlide').attr('class', 'col-lg-12 col-md-10 hourlyReportSlide activeHourlyReportSlide');
                    let nextSlide = currentHourlyNextSlide.next();

                    if (nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        nextSlide.addClass('activeHourlyReportSlide');

                    } else if (!nextSlide.length) {
                        currentHourlyNextSlide.removeClass('activeHourlyReportSlide');
                        hourlySlideContent.first().addClass('activeHourlyReportSlide');

                    };
                    break;

                // Hourly weather forecast Slide script for medium and small screens
                case "smHourlyPrev":
                    let smHourlyPrevSlide = $('.activeSmHourlyReportSlide').attr('class', 'col-lg-12 col-md-12 smHourlyReportSlide activeSmHourlyReportSlide');
                    let smPrevSlide = smHourlyPrevSlide.prev();

                    if (smPrevSlide.length) {
                        smHourlyPrevSlide.removeClass('activeSmHourlyReportSlide');
                        smPrevSlide.addClass('activeSmHourlyReportSlide');

                    } else if (!smPrevSlide.length) {
                        smHourlyPrevSlide.removeClass('activeSmHourlyReportSlide');
                        hourlySmScreen.last().addClass('activeSmHourlyReportSlide');

                    };
                    break;

                case "smHourlyNext":
                    let smHourlyNextSlide = $('.activeSmHourlyReportSlide').attr('class', 'col-lg-12 col-md-12 smHourlyReportSlide activeSmHourlyReportSlide');
                    let smNextSlide = smHourlyNextSlide.next();

                    if (smNextSlide.length) {
                        smHourlyNextSlide.removeClass('activeSmHourlyReportSlide');
                        smNextSlide.addClass('activeSmHourlyReportSlide');

                    } else if (!smNextSlide.length) {
                        smHourlyNextSlide.removeClass('activeSmHourlyReportSlide');
                        hourlySmScreen.first().addClass('activeSmHourlyReportSlide');


                    };
                    break;

                // Daily weather forecast Slide script
                case "dailyPrev":
                    let currentDailyPrevSlide = $('.activeDailyReportSlide').attr('class', 'col-lg-12 dailyReportSlide activeDailyReportSlide');
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
                    let currentDailyNextSlide = $('.activeDailyReportSlide').attr('class', 'col-lg-12 dailyReportSlide activeDailyReportSlide');
                    let dailyNextSlide = currentDailyNextSlide.next();

                    if (dailyNextSlide.length) {
                        currentDailyNextSlide.removeClass('activeDailyReportSlide');
                        dailyNextSlide.addClass('activeDailyReportSlide');

                    } else if (!dailyNextSlide.length) {
                        currentDailyNextSlide.removeClass('activeDailyReportSlide');
                        dailySlideContent.first().addClass('activeDailyReportSlide');
                    };
                    break;

                // Daily weather forecast Slide script for medium and small screens
                case "smDailyPrev":
                    let currentSmDailyPrevSlide = $('.activeSmDailyReportSlide').attr('class', 'col-lg-12 dailySmReportSlide activeSmDailyReportSlide');
                    let smDailyPrevSlide = currentSmDailyPrevSlide.prev();

                    if (smDailyPrevSlide.length) {
                        currentSmDailyPrevSlide.removeClass('activeSmDailyReportSlide');
                        smDailyPrevSlide.addClass('activeSmDailyReportSlide');

                    } else if (!smDailyPrevSlide.length) {
                        currentSmDailyPrevSlide.removeClass('activeSmDailyReportSlide');
                        dailySmScreen.last().addClass('activeSmDailyReportSlide');

                    };
                    break;

                case "smDailyNext":
                    let currentSmDailyNextSlide = $('.activeSmDailyReportSlide').attr('class', 'col-lg-12 dailySmReportSlide activeSmDailyReportSlide');
                    let smDailyNextSlide = currentSmDailyNextSlide.next();

                    if (smDailyNextSlide.length) {
                        currentSmDailyNextSlide.removeClass('activeSmDailyReportSlide');
                        smDailyNextSlide.addClass('activeSmDailyReportSlide');

                    } else if (!smDailyNextSlide.length) {
                        currentSmDailyNextSlide.removeClass('activeSmDailyReportSlide');
                        dailySmScreen.first().addClass('activeSmDailyReportSlide');
                    };
                    break;

                // Hourly surf forecast Slide script
                case "surfHourlyPrev":
                    let currentSurfPrevSlide = $('.activeSurfHourlyReportSlide').attr('class', 'col-lg-12 SurfHourlyReportSlide activeSurfHourlyReportSlide');
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
                    let currentSurfNextSlide = $('.activeSurfHourlyReportSlide').attr('class', 'col-lg-12 SurfHourlyReportSlide activeSurfHourlyReportSlide');
                    let surfNextSlide = currentSurfNextSlide.next();

                    if (surfNextSlide.length) {
                        currentSurfNextSlide.removeClass('activeSurfHourlyReportSlide');
                        surfNextSlide.addClass('activeSurfHourlyReportSlide');

                    } else if (!surfNextSlide.length) {
                        currentSurfNextSlide.removeClass('activeSurfHourlyReportSlide');
                        surfSlideContent.first().addClass('activeSurfHourlyReportSlide');
                    };
                    break;

                // Hourly surf forecast Slide script for medium and small screens
                case "smSurfHourlyPrev":
                    let currentSmSurfPrevSlide = $('.activeSmSurfHourlyReportSlide').attr('class', 'col-lg-12 smSurfHourlyReportSlide activeSmSurfHourlyReportSlide');
                    let smSurfPrevSlide = currentSmSurfPrevSlide.prev();

                    if (smSurfPrevSlide.length) {
                        currentSmSurfPrevSlide.removeClass('activeSmSurfHourlyReportSlide');
                        smSurfPrevSlide.addClass('activeSmSurfHourlyReportSlide');

                    } else if (!smSurfPrevSlide.length) {
                        currentSmSurfPrevSlide.removeClass('activeSmSurfHourlyReportSlide');
                        surfSmScreen.last().addClass('activeSmSurfHourlyReportSlide');
                    };
                    break;

                case "smSurfHourlyNext":
                    let currentSmSurfNextSlide = $('.activeSmSurfHourlyReportSlide').attr('class', 'col-lg-12 smSurfHourlyReportSlide activeSmSurfHourlyReportSlide');
                    let smSurfNextSlide = currentSmSurfNextSlide.next();

                    if (smSurfNextSlide.length) {
                        currentSmSurfNextSlide.removeClass('activeSmSurfHourlyReportSlide');
                        smSurfNextSlide.addClass('activeSmSurfHourlyReportSlide');

                    } else if (!smSurfNextSlide.length) {
                        currentSmSurfNextSlide.removeClass('activeSmSurfHourlyReportSlide');
                        surfSmScreen.first().addClass('activeSmSurfHourlyReportSlide');
                    };
                    break;
            };
        });
    });
});


//Current Time Script
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

// Show report section
$(document).on('click', '.reportLink', () => {
    $('#beachReport').show();

    let spotName = $('.reportCard').find('h4').text();
    $('#placeName').text(spotName);
});

// Show and hide scroll top button
let scrollButton = $('#myBtn');
$(window).scroll(() => {
    if ($(window).scrollTop() > 350) {
        scrollButton.css('display', 'block');
    } else {
        scrollButton.css('display', 'none');
    }
});

// Scroll up to the map from the report section and hide the report when click the scroll top button
scrollButton.click(() => {
    $(window).scrollTop(200);
    $('#beachReport').hide();
});

// -------------------------------------------------------Surfboard page Script-------------------------------------------------- //

// Show/Hide text button
let buttonText = $('.showHideText');

$('.showHideText').click(() => {

    if ($('.showHideText p').text() === "Hide") {
        $('.toggleText').toggle('slow');
        $('.showHideText').html('<p class="text-center">Read</p>');

        readTextIn(buttonText);
    } else {
        $('.toggleText').toggle('slow');
        $('.toggleText').css('display', 'flex');
        $('.showHideText').html('<p class="text-center">Hide</p>');

        readTextIn(buttonText);
    }
});

// Add arrowUp and arrowDown Class on mouse over and change the text inside the button
function readTextIn(buttonText) {
    if (buttonText.text() === "Hide") {
        buttonText.mouseover(() => {
            buttonText.addClass('arrowUp');
            buttonText.removeClass('arrowDown');
        }).mouseleave(() => {
            buttonText.removeClass('arrowUp');
        });
    } else {
        buttonText.mouseover(() => {
            buttonText.addClass('arrowDown');
            buttonText.removeClass('arrowUp');
        }).mouseleave(() => {
            buttonText.removeClass('arrowDown');
        });
    }
};
readTextIn(buttonText);

// Surfboard Calculator Script
$('#btnCalculator').click(() => {
    let weightAbility = weightAbilityRel();
    let age = ageFactorCalc();
    let fitness = fitnessFactorCalc();
    let sizes = boardSizesCalc();
    let type = $('#styleInput option:selected').text().substr(0, 10);

    var boardVolume = volumeCalc(weightAbility.weiAbFactor, age.ageFactor, fitness.fitnessFactor);

    boardCalcValidation(sizes, boardVolume, type);

    $('#btnCalculator').addClass('btnCalculatorOnClick');
    setTimeout(() => {
        $('#btnCalculator').removeClass('btnCalculatorOnClick');
    }, 500);
});

// Reset the form without refresh the page
$('#btnReset').click(() => {
    let selectEl = $('.custom-select');

    selectEl.each((key, value) => {
        if ($(value).val() === null) {
            $(value).removeClass('warningBorders');
            $(value).next().css('display', 'none');
        } else if ($(value).val() !== null) {
            $(value).val('Choose one option');
            $('#boardSizes').removeClass('boardSizesDisplay');
            $('#boardSizes').addClass('boardSizesDisplayHide');
        };
    });
});

//Calculates the board volume
function volumeCalc(volume, ageFactor, fitnessFactor) {
    return parseFloat((volume * ageFactor * fitnessFactor).toFixed(2));
};

//Prints the answer (board sizes, volume and board type) on output element underneath the clear form button
function printedAnswer(boardLength, boardWidth, boardThickness, boardVolume, boardType) {
    $('#boardType').text(boardType);
    $('#boardLength').text(boardLength);
    $('#boardWidth').text(boardWidth);
    $('#boardThickness').text(boardThickness);
    $('#boardVolume').text(`${boardVolume} Ltrs`);
};

// validates the form checking then executes the print function on screen if each input is filled properly
function boardCalcValidation(sizes, boardVolume, type) {
    let selectEl = $('.custom-select');
   
    selectEl.each((key, value) => {
        if ($(value).val() === null) {
            $(value).addClass('warningBorders');
            $(value).next().css('display', 'inline-block');
            $('#boardSizes').removeClass('boardSizesDisplay');
            $('#boardSizes').addClass('boardSizesDisplayHide');
        } else if ($('#weightInput').val() === null || $('#ageInput').val() === null || $('#abilityInput').val() === null || $('#fitnessInput').val() === null || $('#styleInput').val() === null) {
            $('#boardSizes').removeClass('boardSizesDisplay');
            $('#boardSizes').addClass('boardSizesDisplayHide');
        } else if ($(value).val() !== null) {
            $(value).removeClass('warningBorders');
            $(value).next().css('display', 'none');
            $('#boardSizes').removeClass('boardSizesDisplayHide');
            $('#boardSizes').addClass('boardSizesDisplay');
            printedAnswer(sizes.boardLength, sizes.boardWidth, sizes.boardThickness, boardVolume, type);
        }
    });
};











