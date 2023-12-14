'use strict'


const btnTrack = document.querySelector('#btnTrack');
btnTrack.addEventListener('click', showMap);
function showMap(){
//     mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vuc2luZHkiLCJhIjoiY2xxMTlqMThjMDNsbjJranc5ZHcwM2RwMyJ9.HTJ_lJrU16bk_u7VUwbz-A';

//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         zoom: 15 
//     });
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//             new mapboxgl.Marker()
//             .setLngLat([position.coords.longitude, position.coords.latitude])
//             .addTo(map);
//             map.setCenter([position.coords.longitude, position.coords.latitude]);
//         });
//     } else {
//         console.log('Geolocation is not supported by this browser.');
//     }
}


const options = {
    enableHighAccuracy: true, 
    maximumAge: 0
};

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vuc2luZHkiLCJhIjoiY2xxMTlqMThjMDNsbjJranc5ZHcwM2RwMyJ9.HTJ_lJrU16bk_u7VUwbz-A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15 
});

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(getPosition, failedGetPosition, options);
} else {
    console.log('Geolocation is not supported by this browser.');
}

const marker = new mapboxgl.Marker()
function getPosition(position) {
    marker
    .setLngLat([position.coords.longitude, position.coords.latitude])
    .addTo(map);
    map.setCenter([position.coords.longitude, position.coords.latitude]);

    // console.log("Latitude: " + position.coords.latitude);
    // console.log("Longitude: " + position.coords.longitude);
    // console.log("Accuracy: " + position.coords.accuracy + " meters");
    // You can use position.coords.latitude and position.coords.longitude here
    // For example, to show the location on a map
}

function failedGetPosition(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
}

