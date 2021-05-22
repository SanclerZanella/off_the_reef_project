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
    $('.arrowReport').children().removeClass('fa-caret-up');
    $('.arrowReport').children().addClass('fa-caret-down');
    $('.valueTable').hide(500);
    $('#beachReport').find('.forecast-item').removeClass('forecastActive');
    $('#beachReport').find('.forecast-item').first().addClass('forecastActive');
    $('.reportSection').hide();
    $('.reportSection').first().show();
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
    $('.arrowReport').children().removeClass('fa-caret-up');
    $('.arrowReport').children().addClass('fa-caret-down');
    $('.valueTable').hide(500);
    $('#beachReport').find('.forecast-item').removeClass('forecastActive');
    $('#beachReport').find('.forecast-item').first().addClass('forecastActive');
    $('.reportSection').hide();
    $('.reportSection').first().show();
    $('#beachReport').hide();
});

// Receive and handle the data from weather API
function dataReport(data) {

    // Define the UVI status, accordingly to the UVI, getting the status from dataTables.js
    function uviStatus(uviVal) {
        let uviLow = uvi.zero_to_two;
        let uviModerate = uvi.three_to_five;
        let uviHigh = uvi.six_to_seven;
        let uviVeryHigh = uvi.eight_to_ten;
        let uviExtreme = uvi.eleven_plus;

        if (($(uviVal).text() >= 0) && ($(uviVal).text() <= 1.99)) {
            $(uviVal).next().text(uviLow);
        } else if (($(uviVal).text() >= 2) && ($(uviVal).text() <= 5.99)) {
            $(uviVal).next().text(uviModerate);
        } else if (($(uviVal).text() >= 6) && ($(uviVal).text() <= 7.99)) {
            uviVal.next().text(uviHigh);
        } else if (($(uviVal).text() >= 8) && ($(uviVal).text() <= 10.99)) {
            $(uviVal).next().text(uviVeryHigh);
        } else if (($(uviVal).text() >= 11)) {
            $(uviVal).next().text(uviExtreme);
        };
    };

    // Define the wind direction, accordingly to the wind angle, getting the direction from dataTables.js
    function windDirectionStatus(uviValElement) {
        let windDirectionVal = $(uviValElement).find('.windDirectionVal');
        let direction = directions[Math.round(windDirectionVal.text() / 45) % 8];

        windDirectionVal.next().text(direction);
    };

    // Print the weather data on "Now" section
    function printNowData() {

        // Fetch the data from API JSON
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

        // Fetch the weather icon from API JSON
        let iconPng = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        let iconHTML = `<img src="${iconPng}" alt="weather status icon">`;

        // Target the elements which will receive the data
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

        // Apply the data to the elements
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
        nowSunset.text(sunset)

        // Define the UVI status and the wind direction
        uviStatus(nowUVI);
        windDirectionStatus($('.forecastTable'));
    };
    printNowData();

    // Print the weather data on "Now" section for small screens
    function printNowDataSm() {

        // Fetch the data from API JSON
        let realFeel = parseInt(data.current.feels_like);
        let clouds = data.current.clouds;
        let humidity = data.current.humidity;
        let uvi = data.current.uvi;
        let visibility = data.current.visibility;
        let windDirection = data.current.wind_deg;
        let windSpeed = data.current.wind_speed;

        // Target the elements which will receive the data
        let nowRealfeelSm = $('#feLikeValNowSm');
        let nowCloudsSm = $('#cloudValNowSm');
        let nowHumiditySm = $('#humidityValNowSm');
        let nowUVISm = $('#uviValNowSm');
        let nowVisibilitySm = $('#visibilityValNowSm');
        let nowWindDirSm = $('#windDegValNowSm');
        let nowWindSpSm = $('#windSpValNowSm');

        // Apply the data to the elements
        nowRealfeelSm.text(realFeel);
        nowCloudsSm.text(clouds);
        nowHumiditySm.text(humidity);
        nowUVISm.text(uvi);
        nowVisibilitySm.text(visibility);
        nowWindDirSm.text(windDirection);
        nowWindSpSm.text(windSpeed);

        // Define the UVI status and the wind direction
        uviStatus(nowUVISm);
        windDirectionStatus($('.forecastTableSm'));
    };
    printNowDataSm();

    // Iterate over each hourly report and print each weather data specific for each hour
    $('.hourlyWeather').each((key, value) => {
        $('#hourly').click(() => {
            if ($(value).attr('id') === 'firstHour') {
                let hourIndex = key;
                let hourElement = $('#firstHour');

                // Execute the print data function for this specific hour report, passing the element index and the element itself 
                printHourlyData(hourIndex, hourElement);
            } else if ($(value).attr('id') === 'secondHour') {
                let hourIndex = key;
                let hourElement = $('#secondHour');

                printHourlyData(hourIndex, hourElement);
            } else if ($(value).attr('id') === 'thirdHour') {
                let hourIndex = key;
                let hourElement = $('#thirdHour');

                printHourlyData(hourIndex, hourElement);
            }
        });
    });

    // Print the hourly weather data
    function printHourlyData(hourIndex, hourElement) {

        // Fetch the data from API JSON
        let time = new Date(data.hourly[hourIndex].dt * 1000).toISOString().substr(11, 5);
        let iconCode = data.hourly[hourIndex].weather[0].icon;
        let description = data.hourly[hourIndex].weather[0].description;
        let temperature = parseInt(data.hourly[hourIndex].temp);
        let realFeel = parseInt(data.hourly[hourIndex].feels_like);
        let clouds = data.hourly[hourIndex].clouds;
        let humidity = data.hourly[hourIndex].humidity;
        let uvi = data.hourly[hourIndex].uvi;
        let visibility = data.hourly[hourIndex].visibility;
        let windDirection = data.hourly[hourIndex].wind_deg;
        let windSpeed = data.hourly[hourIndex].wind_speed;

        // Fetch the weather icon from API JSON
        let iconPng = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        let iconHTML = `<img src="${iconPng}" alt="weather status icon">`;

        // Target the elements which will receive the data
        let hourTime = hourElement.find('.hourlyTime');
        let hourIcon = hourElement.find('.hourIcon');
        let hourDescription = hourElement.find('.hourDesc').children();
        let hourTemp = hourElement.find('.tempValHour');
        let hourRealfeel = hourElement.find('.feLikeValHour');
        let hourClouds = hourElement.find('.cloudValHour');
        let hourHumidity = hourElement.find('.humidityHourVal');
        let hourUVI = hourElement.find('.uviHourVal');
        let hourVisibility = hourElement.find('.visibilityHourVal');
        let hourWindDir = hourElement.find('.windDirHourVal');
        let hourWindSp = hourElement.find('.windSpeedHourVal');

        // Apply the data to the elements
        hourTime.text(time);
        hourIcon.html(iconHTML);
        hourDescription.text(description);
        hourTemp.text(temperature);
        hourRealfeel.text(realFeel);
        hourClouds.text(clouds);
        hourHumidity.text(humidity);
        hourUVI.text(uvi);
        hourVisibility.text(visibility);
        hourWindDir.text(windDirection);
        hourWindSp.text(windSpeed);

        // Set the date in dd/mm format
        let currentTime = new Date();
        let dd = currentTime.getDate();
        let mm = currentTime.getMonth() + 1;
        let currentDate = `${dd}/${mm}`;
        $('.currentDateVal').text(currentDate);

        // Define the UVI status and the wind direction
        uviStatus(hourUVI);
        windDirectionStatus(hourElement);
    };

    // Iterate over each daily report and print each weather data specific for each day
    $('.dailyWeather').each((key, value) => {
        $('#daily').click(() => {
            if ($(value).attr('id') === 'firstDay') {
                let dayIndex = key;
                let dayElement = $('#firstDay');

                // Execute the print data function for this specific day report, passing the element index and the element itself
                printdailyData(dayIndex, dayElement);
            } else if ($(value).attr('id') === 'secondDay') {
                let dayIndex = key;
                let dayElement = $('#secondDay');

                printdailyData(dayIndex, dayElement);
            } else if ($(value).attr('id') === 'thirdDay') {
                let dayIndex = key;
                let dayElement = $('#thirdDay');

                printdailyData(dayIndex, dayElement);
            }
        });
    });

    // Print the daily weather data
    function printdailyData(dayIndex, dayElement) {

        // Fetch the data from API JSON
        let time = new Date(data.daily[dayIndex].dt * 1000).toISOString();
        let day = time.substr(8, 2);
        let month = time.substr(6, 1);
        let dailyReportDay = new Date(time).toString().substr(0, 3);
        let reportDate = `${day}/${month}`;
        let iconCode = data.daily[dayIndex].weather[0].icon;
        let description = data.daily[dayIndex].weather[0].description;
        let tempDay = parseInt(data.daily[dayIndex].temp.day);
        let tempEvening = parseInt(data.daily[dayIndex].temp.eve);
        let mediaTemp = parseInt((tempDay + tempEvening) / 2);
        let realFeelDay = parseInt(data.daily[dayIndex].feels_like.day);
        let realFeelEvening = parseInt(data.daily[dayIndex].feels_like.eve);
        let mediaRealFeel = parseInt((realFeelDay + realFeelEvening) / 2);
        let clouds = data.daily[dayIndex].clouds;
        let sunrise = new Date(data.daily[dayIndex].sunrise * 1000).toISOString().substr(11, 8);
        let sunset = new Date(data.daily[dayIndex].sunset * 1000).toISOString().substr(11, 8);
        let humidity = data.daily[dayIndex].humidity;
        let uvi = data.daily[dayIndex].uvi;
        let windDirection = data.daily[dayIndex].wind_deg;
        let windSpeed = data.daily[dayIndex].wind_speed;

        // Fetch the weather icon from API JSON
        let iconPng = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        let iconHTML = `<img src="${iconPng}" alt="weather status icon">`;

        // Target the elements which will receive the data
        let reportDay = dayElement.find('.dailyReportDay');
        let dateVal = dayElement.find('.dailyDateVal');
        let dayIcon = dayElement.find('.dailyIcon');
        let dayDescription = dayElement.find('.dailyDesc').children();
        let dailyTemp = dayElement.find('.tempValDaily');
        let dayRealfeel = dayElement.find('.feLikeValDaily');
        let dayClouds = dayElement.find('.cloudValDaily');
        let daySunrise = dayElement.find('.sunriseDayVal');
        let daySunset = dayElement.find('.sunsetDayVal');
        let dailyTempDay = dayElement.find('.tempDayVal');
        let dailyTempEve = dayElement.find('.tempEveVal');
        let dailyFeelDay = dayElement.find('.feelDayVal');
        let dailyFeelEve = dayElement.find('.feelEveVal');
        let dayHumidity = dayElement.find('.humidityDailyVal');
        let dayUVI = dayElement.find('.uviDailyVal');
        let dayWindDir = dayElement.find('.windDirDailyVal');
        let dayWindSp = dayElement.find('.windSpeedDailyVal');

        // Apply the data to the elements
        reportDay.text(dailyReportDay);
        dateVal.text(reportDate);
        dayIcon.html(iconHTML);
        dayDescription.text(description);
        dailyTemp.text(mediaTemp);
        dayRealfeel.text(mediaRealFeel);
        dayClouds.text(clouds);
        daySunrise.text(sunrise);
        daySunset.text(sunset);
        dailyTempDay.text(tempDay);
        dailyTempEve.text(tempEvening);
        dailyFeelDay.text(realFeelDay);
        dailyFeelEve.text(realFeelEvening);
        dayHumidity.text(humidity);
        dayUVI.text(uvi);
        dayWindDir.text(windDirection);
        dayWindSp.text(windSpeed);

        // Define the UVI status and the wind direction
        uviStatus(dayUVI);
        windDirectionStatus(dayElement);
    };
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