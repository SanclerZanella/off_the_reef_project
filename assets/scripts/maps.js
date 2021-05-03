
let surfSpots = [
    [{ lat: 51.5993402106841, lng: -8.857156973671264 }, "Inchydoney"],
    [{ lat: 53.73590782678734, lng: -9.891694287898071 }, "Carrowniskey"],
    [{ lat: 54.29552145031864, lng: -8.947573634151851 }, "Easky Right"],
    [{ lat: 55.18384443374948, lng: -7.969478152888466 }, "Dunfanaghy"],
    [{ lat: 52.8607468741472, lng: -9.431567462230458 }, "Spanish Point"],
    [{ lat: 53.998696545288176, lng: -10.135475781914675 }, "Achill Island Secret Beach"],
    [{ lat: 54.212718182804394, lng: -9.098796582602265 }, "Enniscrone Beach"],
    [{ lat: 54.46548439586764, lng: -8.448618920219916 }, "Mullaghmore"],
    [{ lat: 54.48354467072368, lng: -8.276469884255313 }, "Bundoran Beach"],
    [{ lat: 52.51363867743349, lng: -9.677578996624085 }, "Ballybunion"],
];

function initMap() {
    let mapZoom;
    if($(window).width() <= 425) {
        mapZoom =  6;
    } else {
        mapZoom = 7;
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.46322656497797, lng: -8.02571174923902 },
        zoom: mapZoom,
    });
    
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
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
                                    <a id=${title.replace(/\s+/g, '')} class="reportLink" href="index.html#beachReport" onclick="showReport()">Click here to open full report</a>
                                </div>
                            </div>`;

        const marker = new google.maps.Marker({
            position,
            icon:'https://imagizer.imageshack.com/img923/4786/hmO874.png',
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
