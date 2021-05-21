// Get weather data from API for a specific place chosen by the user, passing a call back function that handles the data received 
function getData(cb) {
    let placeName = $('#placeName').text();
    let latitude;
    let longitute;

    // Get coordinates and place names from dataTables.js file
    surfSpots.forEach(([position, title]) => {
        if (placeName === title) {
            latitude = position.lat;
            longitute = position.lng;
        };
    });

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitute}&units=metric&exclude=&appid=${weatherAPI()}`;

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        } else if (this.readyState == 4 && this.status == 400) {
            alert('Oops! looks like we had some issues, please try again later.');
        } else if (this.readyState == 0 && this.status == 401) {
            alert('Oops! looks like we had some issues, please try again later.');
        } else if (this.readyState == 0 && this.status == 404) {
            alert('Oops! looks like we had some issues, please try again later.');
        } else if (this.readyState == 2 && this.status == 429) {
            alert('Oops! looks like we had some issues, please try again later.');
        };
    };
};