//  Initialize the map specifying the center and zoom for different screen sizes
function initMap() {
    let mapZoom;
    if ($(window).width() <= 425) {
        mapZoom = 6;
    } else {
        mapZoom = 7;
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 53.46322656497797,
            lng: -8.02571174923902
        },
        zoom: mapZoom,
    });

    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();

    // Create the markers and info window, getting the coordinates and title from sufSpot table from dataTables.js file
    surfSpots.forEach(([position, title], i) => {

        let preReportCard = `<div class="row no-gutters text-center reportCard">
                                <div class="col-12 d-none d-md-block">
                                    <img id="localCoverImg" src="assets/images/index/map/${title.replace(/\s+/g, '')}.jpg" alt="">
                                </div>
                                <div class="col-12">
                                    <h4>${title}</h4>
                                    <hr class="fineHr">
                                </div>
                                <div class="col">
                                    <h5><i class="fas fa-water"></i> Tide (m)</h5>
                                    <div class="col">
                                        <p id="tide">12</p>
                                    </div>
                                </div>

                                <div class="col">
                                    <h5><i class="fas fa-wind"></i> Wind (mph)</h5>
                                    <div class="col">
                                        <p id="wind">12</p>
                                    </div>
                                </div>

                                <div class="col">
                                    <h5><i class="fas fa-thermometer-three-quarters"></i> Temp (°c)</h5>
                                    <div class="col">
                                        <p id="temp">12</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row no-gutters text-center">
                                <div class="col">
                                    <a id=${title.replace(/\s+/g, '')} class="reportLink" href="index.html#beachReport">Click here to open full report</a>
                                </div>
                            </div>`;

        const marker = new google.maps.Marker({
            position,
            icon: 'assets/images/index/map/marker.png',
            map,
            animation: google.maps.Animation.DROP,
            title: title,
            optimized: false,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
            infoWindow.close();
            infoWindow.setContent(preReportCard);
            infoWindow.open(marker.getMap(), marker);

            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(4);
            }
        });


    });
};