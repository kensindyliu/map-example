'use strict'


const btnTrack = document.querySelector('#btnTrack');
btnTrack.addEventListener('click', showMap);
function showMap(){
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vuc2luZHkiLCJhIjoiY2xxMTlqMThjMDNsbjJranc5ZHcwM2RwMyJ9.HTJ_lJrU16bk_u7VUwbz-A';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15 
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            new mapboxgl.Marker()
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map);
            map.setCenter([position.coords.longitude, position.coords.latitude]);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}