console.log('Starting leaflet test');


var countryDetails = {};


var ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v2/all", true);
ajax.onload = function () {
    var list = JSON.parse(ajax.responseText);
    var namegeter = document.querySelector("#countrylistoption #countryList");
    for (var i = 0; i < list.length; i++) {
        var name = list[i].name;
        countryDetails[name] = list[i];
        var countryDataList = document.createElement('option')
        countryDataList.className = 'NamesOfCountries';
        countryDataList.innerHTML = `
            ${name}`;
        namegeter.appendChild(countryDataList);

    }
    console.log(list);
};
ajax.send();
var input = document.getElementById("names");
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        submit();
    }
});
//To get the name of the country in the console Log
function submit() {
    document.getElementById("flag").innerHTML = "";
    countryName();
}
function countryName() {

    var infoEl = document.getElementById('flag');
    var nameValue = document.getElementById('names').value;
    var flag = countryDetails[nameValue].flag;
    var flagEl = document.createElement('img');
    flagEl.className = 'flagimg';
    flagEl.src = flag;
    flagEl.alt = nameValue;
    infoEl.appendChild(flagEl);
    latlnggeo();
}

var myLocation = [51, 9];

function latlnggeo() {
    var nameValue = document.getElementById('names').value;
    var geoLocation = countryDetails[nameValue].latlng;
   data1= geoLocation[0];
   data2= geoLocation[1];
      console.log(geoLocation);
    // mymap.setView(new L.LatLng(geoLocation));
    mymap.panTo(new L.LatLng(data1, data2));
    
    var marker2 = new L.marker(new L.LatLng(data1, data2)).addTo(mymap);
    marker2.bindPopup(nameValue).openPopup();
}


var mymap = L.map('mapid').setView(myLocation, 6);
var marker = L.marker([51.5, 9]).addTo(mymap);
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


// var popup = L.popup();  
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);
