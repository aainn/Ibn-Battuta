console.log('Starting leaflet test');

var myLocation = [39.9847915, 32.1776579];
var mymap = L.map('mapid').setView(myLocation, 1);

var mapBoxToken = 'pk.eyJ1IjoicGF1bGJvZWNrIiwiYSI6ImNqZmo5Y3dsMzZjd2gyeHBkeHp0Mmt6eXQifQ.8H4_R2UaKJZ_rWH1Z3vdFg';

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: mapBoxToken
}).addTo(mymap);




// var marker = L.marker(myLocation).addTo(mymap);

// var circleLocation = [myLocation[0], myLocation[1] + 0.01];
// var circle = L.circle(circleLocation, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
// //     radius: 500
// }).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

// circle.bindPopup(`I'm a circle.`);


var popup = L.popup();  
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


