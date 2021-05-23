$(document).on('click', '.reportLink', () => {
    const params = 'seaLevel,waterTemperature,swellDirection,swellHeight,swellPeriod,waveDirection,waveHeight,wavePeriod,windWaveDirection,windWaveHeight,windWavePeriod';
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

    // Fetch tide and wave data from API for a specific place chosen by the user
    fetch(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitute}&params=${params}`, {
        headers: {
            'Authorization': surfAPI()
        }
    }).then(checkError).then((jsonData) => {
        surfReportData(jsonData);
    }).catch((error) => {});
});

// Handle error response
function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
};