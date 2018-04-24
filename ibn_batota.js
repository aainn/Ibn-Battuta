  console.log('Starting leaflet test');
  
  var myLocation = [52.5107365, 13.3699008];
  var mymap = L.map('mapid').setView(myLocation, 3);
  
  var mapBoxToken = 'pk.eyJ1IjoicGF1bGJvZWNrIiwiYSI6ImNqZmo5Y3dsMzZjd2gyeHBkeHp0Mmt6eXQifQ.8H4_R2UaKJZ_rWH1Z3vdFg';
  
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: mapBoxToken
  }).addTo(mymap);

  function myFunction() {
 console.log('myFunction is called') 
    if(myFunction=td){
      console.log("");
    }
     else{
      console.log("");
    }
    var str = "Visit W3Schools!"; 
    var n = str.search("W3Schools");
    document.getElementById("demo").innerHTML = n;
}
  
  
  // var circleLocation = [myLocation[0], myLocation[1] + 0.01];
  // var circle = L.circle(circleLocation, {
  //     color: 'red',
  //     fillColor: '#f03',
  //     fillOpacity: 0.5,
  //     radius: 500
  // }).addTo(mymap);
  var marker = L.marker(myLocation).addTo(mymap);
marker.bindPopup("<b>deutshland!</b><br>berlin.").openPopup();
var marker = L.marker([48.864716, -2.349014]).addTo(mymap);
marker.bindPopup("<b>french</b><br>paris.").openPopup();
var marker = L.marker([39.925533, 32.866287]).addTo(mymap);
marker.bindPopup("<b>Turkey</b><br>Ankara.").openPopup();
var marker = L.marker([ 36.778259, -119.417931]).addTo(mymap);
marker.bindPopup("<b>usa</b><br>Kalifornia.").openPopup();
var marker = L.marker([ 42.648613, -73.761391]).addTo(mymap);
marker.bindPopup("<b>Usa</b><br>New York.").openPopup();
var marker = L.marker([55.751770, 37.608868]).addTo(mymap);
marker.bindPopup("<b>Russian State</b><br>Moscow.").openPopup();
var marker = L.marker([35.715298, 51.404343]).addTo(mymap);
marker.bindPopup("<b>iran</b><br>tehran.").openPopup();
var marker = L.marker([51.509865, -0.118092]).addTo(mymap);
marker.bindPopup("<b>london</b><br>Uk.").openPopup();
var marker = L.marker([43.769562, 11.255814]).addTo(mymap);
marker.bindPopup("<b>Italy</b><br>Florence.").openPopup();
var marker = L.marker([30.044281, 31.340002]).addTo(mymap);
marker.bindPopup("<b>Egypt</b><br>Cairo.").openPopup();

var marker = L.marker([49.246292, -123.116226]).addTo(mymap);
marker.bindPopup("<b>Vancouver, BC, Canada</b>.").openPopup();
var marker = L.marker([ 28.644800, 77.216721]).addTo(mymap);
marker.bindPopup("<b>indian</b><br>delhi.").openPopup();
var marker = L.marker([64.608571, -17.578125]).addTo(mymap);
marker.bindPopup("<b>Island</b>.").openPopup();
var marker = L.marker([36.737232,	3.086472]).addTo(mymap);
marker.bindPopup("<b>Algeria</b>.").openPopup();
var marker = L.marker([41.085562, -2.8125]).addTo(mymap);
marker.bindPopup("<b>EspaniaFederal District</b>.").openPopup();
var marker = L.marker([19.432608, -99.133209]).addTo(mymap);
marker.bindPopup("<b>Mexico</b><br>.").openPopup();
var marker = L.marker([15.564836, 32.529831]).addTo(mymap);
marker.bindPopup("<b>sudan</b><br>khartom.").openPopup();
var marker = L.marker([31.02234, -5.800781]).addTo(mymap);
marker.bindPopup("<b>marokko</b>.").openPopup();
var marker = L.marker([26.201000, 50.606998]).addTo(mymap);
marker.bindPopup("<b>Bahrain</b><br>Manama.").openPopup();
  // circle.bindPopup(`I'm a circle.`);
 

  var popup = L.popup();
  function onMapClick(e) {
      popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(mymap);
  }
  
  mymap.on('click', onMapClick);