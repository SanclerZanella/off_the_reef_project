// -------------------------------------------------------Home Page (Report Script)----------------------------------------------- //
$(document).ready(function () {
    // --------------------------------------------------------------------------- Navbar weather and surf Report toggle slide Script
    $('.forecast-item').each((key, value) => {
        $(value).click(function () {
            let navOption = $(value).text();

            switch (navOption) {
                case "Now":
                    $('.forecast-item').removeClass('forecastActive');
                    $(value).addClass('forecastActive');
                    $('.reportSection').hide(500);
                    $('.currentWeather').toggle(500);
                    break;
                case "Hourly":
                    $('.forecast-item').removeClass('forecastActive');
                    $(value).addClass('forecastActive');
                    $('.reportSection').hide(500);
                    $('.hourlyWeather').toggle(500);
                    break;
                case "Daily":
                    $('.forecast-item').removeClass('forecastActive');
                    $(value).addClass('forecastActive');
                    $('.reportSection').hide(500);
                    $('.dailyWeather').toggle(500);
                    break;
                case "Surf Forecast":
                    $('.forecast-item').removeClass('forecastActive');
                    $(value).addClass('forecastActive');
                    $('.reportSection').hide(500);
                    $('.surfForecast').toggle(500);
                    break;
            };
        });
    });
});

// --------------------------------------------------------------------------- Weather and Surf Report toggle slide Script
$('.reportSection').each((key, value) => {

    $(value).click(() => {
        if ($(value).find('.arrowReport').children().attr('class') === 'fas fa-caret-down') {
            $('.arrowReport').children().removeClass('fa-caret-up');
            $('.arrowReport').children().addClass('fa-caret-down');
            $('.valueTable').hide(500);
            $(value).find('.valueTable').show(500);
            $(value).find('.arrowReport').children().removeClass('fa-caret-down');
            $(value).find('.arrowReport').children().addClass('fa-caret-up');
        } else {
            $(value).find('.arrowReport').children().removeClass('fa-caret-up');
            $(value).find('.arrowReport').children().addClass('fa-caret-down');
            $(value).find('.valueTable').hide(500);
        }
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

    // Execute the weatherAPI when open the report, passing the callback function
    getData(dataReport);
});

// Show and hide scroll top button
let scrollButton = $('#myBtn');
$(window).scroll(() => {
    if ($(window).scrollTop() > 350) {
        scrollButton.css('display', 'block');
    } else {
        scrollButton.css('display', 'none');
    };
});

// Scroll up to the map from the report section and hide the report when click the scroll top button
scrollButton.click(() => {
    $(window).scrollTop(200);
    $('#beachReport').find('.forecast-item').removeClass('forecastActive');
    $('#beachReport').find('.forecast-item').first().addClass('forecastActive');
    $('.reportSection').hide();
    $('.reportSection').first().show();
    $('#beachReport').hide();
});

// Receive and handle the data from weather API
function dataReport(data) {

    // Define the UVI status, accordingly to the UVI, getting the status from dataTables.js
    function uviStatus() {
        let uviVal = $('.uviVal');
        let uviLow = uvi.zero_to_two;
        let uviModerate = uvi.three_to_five;
        let uviHigh = uvi.six_to_seven;
        let uviVeryHigh = uvi.eight_to_ten;
        let uviExtreme = uvi.eleven_plus;

        if ((uviVal.text() >= 0) && (uviVal.text() <= 2)) {
            uviVal.next().text(uviLow);
        } else if ((uviVal.text() >= 3) && (uviVal.text() <= 5)) {
            uviVal.next().text(uviModerate);
        } else if ((uviVal.text() >= 6) && (uviVal.text() <= 7)) {
            uviVal.next().text(uviHigh);
        } else if ((uviVal.text() >= 8) && (uviVal.text() <= 10)) {
            uviVal.next().text(uviVeryHigh);
        } else if ((uviVal.text() >= 11)) {
            uviVal.next().text(uviExtreme);
        }
    };

    // Define the wind direction, accordingly to the wind angle, getting the direction from dataTables.js
    function windDirectionStatus() {
        let windDirectionVal = $('.windDirectionVal');
        let direction = directions[Math.round(windDirectionVal.text() / 45) % 8];

        windDirectionVal.next().text(direction);
    };

    // Print the weather data on "Now" section
    (function printNowData() {
        let iconCode = data.current.weather[0].icon;
        let description = data.current.weather[0].description;
        let temperature = parseInt(data.current.temp);
        let realFeel = parseInt(data.current.feels_like);
        let clouds = data.current.clouds;
        let humidity = data.current.humidity;
        let uvi = data.current.uvi;
        let visibility = data.current.visibility;
        let windDirection = data.current.wind_deg;
        let windSpeed = data.current.wind_speed;
        let sunrise = new Date(data.current.sunrise * 1000).toISOString().substr(11, 8);
        let sunset = new Date(data.current.sunset * 1000).toISOString().substr(11, 8);

        let iconPng = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        let iconHTML = `<img src="${iconPng}" alt="weather status icon">`;

        let nowIcon = $('#nowIcon');
        let nowDescription = $('#nowDesc').children();
        let nowTemp = $('#tempValNow');
        let nowRealfeel = $('#feLikeValNow');
        let nowClouds = $('#cloudValNow');
        let nowHumidity = $('#humidityValNow');
        let nowUVI = $('#uviValNow');
        let nowVisibility = $('#visibilityValNow');
        let nowWindDir = $('#windDegValNow');
        let nowWindSp = $('#windSpValNow');
        let nowSunrise = $('#sunriseNowVal');
        let nowSunset = $('#sunsetNowVal');

        nowIcon.html(iconHTML);
        nowDescription.text(description);
        nowTemp.text(temperature);
        nowRealfeel.text(realFeel);
        nowClouds.text(clouds);
        nowHumidity.text(humidity);
        nowUVI.text(uvi);
        nowVisibility.text(visibility);
        nowWindDir.text(windDirection);
        nowWindSp.text(windSpeed);
        nowSunrise.text(sunrise);
        nowSunset.text(sunset);

        uviStatus();
        windDirectionStatus();

    })();

    // Print the weather data on "Now" section for small screens
    (function printNowDataSm() {
        let realFeel = parseInt(data.current.feels_like);
        let clouds = data.current.clouds;
        let humidity = data.current.humidity;
        let uvi = data.current.uvi;
        let visibility = data.current.visibility;
        let windDirection = data.current.wind_deg;
        let windSpeed = data.current.wind_speed;

        let nowRealfeelSm = $('#feLikeValNowSm');
        let nowCloudsSm = $('#cloudValNowSm');
        let nowHumiditySm = $('#humidityValNowSm');
        let nowUVISm = $('#uviValNowSm');
        let nowVisibilitySm = $('#visibilityValNowSm');
        let nowWindDirSm = $('#windDegValNowSm');
        let nowWindSpSm = $('#windSpValNowSm');

        nowRealfeelSm.text(realFeel);
        nowCloudsSm.text(clouds);
        nowHumiditySm.text(humidity);
        nowUVISm.text(uvi);
        nowVisibilitySm.text(visibility);
        nowWindDirSm.text(windDirection);
        nowWindSpSm.text(windSpeed);

        uviStatus();
        windDirectionStatus();

    })();
};

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

    // Retrieve the weight, age and fitness condition factor from dataTables.js to calculate the board volume
    let weightAbility = weightAbilityRel();
    let age = ageFactorCalc();
    let fitness = fitnessFactorCalc();

    // Retrieve the boardsizes from dataTables.js for specific factors like weight, fitness condition and board style 
    let sizes = boardSizesCalc();
    let type = $('#styleInput option:selected').text().substr(0, 10);

    // Calculate the board volume
    var boardVolume = volumeCalc(weightAbility.weiAbFactor, age.ageFactor, fitness.fitnessFactor);

    // Check if the form is properly filled before calculate
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

// -------------------------------------------------------Feedback page Script----------------------------------------------------- //

// Show the feedback form in a modal popup and close the modal when click on close button or any place outside the modal
let modal = $('#feedbackModal');
let feedbackButton = $('#feedbackButton');
let closeButton = $('.close').first();

$(document).ready(() => {
    feedbackButton.click(() => {
        modal.show(500);
    });

    closeButton.click(() => {
        modal.hide(500);
    });

    $(document).click((event) => {
        if (!$(event.target).closest('#feedbackButton,.modal-content').length) {
            modal.hide(500);
        };
    });
});

// Validation for feedback form
function validForm(contactForm) {

    let userName = $(contactForm).find('#feedbackName');
    let userEmail = $(contactForm).find('#feedbackEmail');
    let userMessage = $(contactForm).find('#feedbackText');
    let formInput = $('.feedBackInput');

    formInput.each((key, value) => {
        if ($(value).val() === "") {
            $(value).addClass('inputWarning');
            $(value).next().css('display', 'block');

        } else if (userName.val() === "" || userEmail.val() === "" || userMessage.val() === "") {
            //test
        } else if ($(value).val() !== "") {
            $(value).removeClass('inputWarning');
            $(value).next().css('display', 'none');

            sendMail(contactForm);

            return false;
        };
    });

    return false;
};

// Reset the feedback form
$('#feedbackReset').click(() => {
    $('.feedBackInput').removeClass('inputWarning');
    $('.feedBackInput').next().css('display', 'none');
});