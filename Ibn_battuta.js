<<<<<<< HEAD
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

var countryDetails = {}

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
//To get the name of the country in the console Log
function Countryname() {
    var infoEl = document.getElementById('infoCountry');
    var nameValue = document.getElementById('names').value;
    console.log(countryDetails[nameValue].flag)
    var flag = countryDetails[nameValue].flag;
    var flagEl = document.createElement('img')
    flagEl.className = 'flag';
    flagEl.src = flag;
    infoEl.appendChild(flagEl);

}














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
=======
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

var countryDetalis= {}

var ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v2/all", true);
ajax.onload = function() {
    var list = JSON.parse(ajax.responseText);
       var namegeter=document.querySelector("#countrylistoption #countryList");
       for (var i=0; i<list.length; i++){
        var name= list[i].name;
        countryDetalis[name]=list[i];
        
    var countryDataList=document.createElement('option')
    countryDataList.className='NamesOfCountries';
                countryDataList.innerHTML= `
            ${name}`;
            namegeter.appendChild(countryDataList);
            }
       console.log(list);
};
ajax.send();
//To get the name of the country in the console Log
function Countryname (){
    var nameValue = document.getElementById('names').value;
    console.log(nameValue)
}











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
>>>>>>> a61c764b67f44bac7d4c2a36a18d7668e05c2b0f
