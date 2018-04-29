var countryDetails = {};
var list;
var ajax = new XMLHttpRequest();
ajax.open("GET", "https://restcountries.eu/rest/v2/all", true);
ajax.onload = function () {
  list = JSON.parse(ajax.responseText);
  var namegeter = document.querySelector("#countrylistoption #countryList");
  for (var i = 0; i < list.length; i++) {
    var name = list[i].name;
    countryDetails[name] = list[i];
    var countryDataList = document.createElement("option");
    countryDataList.className = "NamesOfCountries";
    countryDataList.innerHTML = `
            ${name}`;
    namegeter.appendChild(countryDataList);
  }
};
ajax.send();

var urlInfo;
function searchinfo() {
  var infoName = document.getElementById("names").value;
  if (infoName.indexOf(" ") > 0) {
    if (
      infoName === "Åland Islands" ||
      infoName === "Bosnia and Herzegovina" ||
      infoName === "Bouvet Island" ||
      infoName === "British Indian Ocean Territory" ||
      infoName === "Antigua and Barbuda" ||
      infoName === "United States Minor Outlying Islands" ||
      infoName === "British Indian Ocean Territory" ||
      infoName === "Burkina Faso" ||
      infoName === "Cayman Islands" ||
      infoName === "Central African Republic" ||
      infoName === "Christmas Island" ||
      infoName === "Cocos (Keeling) Islands" ||
      infoName === "Cook Islands" ||
      infoName === "Costa Rica" ||
      infoName === "Czech Republic" ||
      infoName === "Dominican Republic" ||
      infoName === "El Salvador" ||
      infoName === "Equatorial Guinea" ||
      infoName === "Faroe Islands" ||
      infoName === "French Guiana" ||
      infoName === "French Polynesia" ||
      infoName === "Heard Island and McDonald Islands" ||
      infoName === "Holy See" ||
      infoName === "Hong Kong" ||
      infoName === "Isle of Man" ||
      infoName === "Marshall Islands" ||
      infoName === "New Caledonia" ||
      infoName === "New Zealand" ||
      infoName === "Norfolk Island" ||
      infoName === "Northern Mariana Islands" ||
      infoName === "Papua New Guinea" ||
      infoName === "Saint Barthélemy" ||
      infoName === "Sao Tome and Principe" ||
      infoName === "Saint Helena, Ascension and Tristan da Cunha" ||
      infoName === "Saint Lucia" ||
      infoName === "Saint Vincent and the Grenadines" ||
      infoName === "Saint Kitts and Nevis" ||
      infoName === "San Marino" ||
      infoName === "Saudi Arabia" ||
      infoName === "Sierra Leone" ||
      infoName === "Solomon Islands" ||
      infoName === "South Africa" ||
      infoName === "South Georgia and the South Sandwich Islands" ||
      infoName === "South Sudan" ||
      infoName === "Sri Lanka" ||
      infoName === "Svalbard and Jan Mayen" ||
      infoName === "Trinidad and Tobago" ||
      infoName === "Turks and Caicos Islands" ||
      infoName === "United Arab Emirates" ||
      infoName === "Wallis and Futuna" ||
      infoName === "Western Sahara" ||
      infoName === "American Samoa"
    ) {
      infoName = infoName.replace(/\s+/g, "_");
    } else if (infoName === "Virgin Islands (British)") {
      infoName = "British_Virgin_Islands";
    } else if (infoName === "Congo (Democratic Republic of the)") {
      infoName = "Democratic_Republic_of_the_Congo";
    } else if (infoName === "Virgin Islands (U.S.)") {
      infoName = "United_States_Virgin_Islands";
    } else if (infoName === "Lao People's Democratic Republic") {
      infoName = "Laos";
    } else if (infoName === "Macedonia (the former Yugoslav Republic of)") {
      infoName = "Republic_of_Macedonia";
    } else if (infoName === "Côte d'Ivoire") {
      infoName = "Ivory_Coast";
    } else if (infoName === "Falkland Islands (Malvinas)") {
      infoName = "Falkland_Islands";
    } else if (infoName === "French Southern Territories") {
      infoName = "French_Southern_and_Antarctic_Lands";
    } else if (infoName === "Korea (Democratic People's Republic of)") {
      infoName = "North_Korea";
    } else if (infoName === "Palestine, State of") {
      infoName = "State_of_Palestine";
    } else if (infoName === "Republic of Kosovo") {
      infoName = "Kosovo";
    } else if (infoName === "Russian Federation") {
      infoName = "Russia";
    } else if (infoName === "Saint Martin (French part)") {
      infoName = "Saint_Martin";
    } else if (infoName === "Sint Maarten (Dutch part)") {
      infoName = "Sint_Maarten";
    } else if (infoName === "Korea (Republic of)") {
      infoName = "South_Korea";
    } else if (infoName === "Syrian Arab Republic") {
      infoName = "Syria";
    } else if (
      infoName === "United Kingdom of Great Britain and Northern Ireland"
    ) {
      infoName = "United_Kingdom_of_Great_Britain_and_Ireland";
    } else if (infoName === "United States of America") {
      infoName = "United_States";
    } else {
      infoName = infoName.substr(0, infoName.indexOf(" "));
      infoName = infoName.replace(/[^a-zA-Z ]/g, "");
    }
  } else {
    var infoName = infoName;
  }

  urlInfo =
    "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=";
  urlInfo += `${infoName}&callback=?`;

  infoElement();
}
function infoElement() {
  $.ajax({
    type: "GET",
    url: urlInfo,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      var markup = data.parse.text["*"];
      var info = $("<div></div>").html(markup);

      info.find("a").each(function () {
        $(this).replaceWith($(this).html());
      });

      info.find("sup").remove();
      info.find("srcset").remove();

      info.find(".mw-ext-cite-error").remove();

      $("#article").html($(info).find("p"));
    },
    error: function (errorMessage) { }
  });
}
var input = document.getElementById("names");
input.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    submit();
  }
});
function checkInput() {
  var name = input.value;
  if (name.length > 0){
    name = name[0].toUpperCase() + name.substring(1).toLowerCase();
    for (var i = 0; i < list.length; i++) {
      if (name !== list[i].name) {
        console.log("did not find the country: " + name + ", current value: " + list[i].name);
        continue;
      } else {
        console.log("found the country " + name);
        break;
      }
    }  
  }
  else {
    alert("Please search for a valid country")
  }
}
function submit() {
  checkInput();
  document.getElementById("flag").innerHTML = "";
  document.getElementById("article").innerHTML = "";
  document.getElementById("capitalCity").innerHTML = "";
  document.getElementById("language").innerHTML = "";
  document.getElementById("currency").innerHTML = "";
  document.getElementById("timezone").innerHTML = "";
  document.getElementById("region").innerHTML = "";
  document.getElementById("nameOfCountry").innerHTML = "";
  countryName();
  capitalCity();
  language();
  currency();
  timezone();
  region();
  nameOfCountry();
  searchinfo();
  latlnggeo();
}
function getCurrentUserInput() {
  var nameValue = document.getElementById("names").value;
  return nameValue;
}

function countryName() {
  var userInput = getCurrentUserInput();
  var infoEl = document.getElementById("flag");
  var flag = countryDetails[userInput].flag;
  var flagEl = document.createElement("img");
  flagEl.className = "flagimg";
  flagEl.src = flag;
  flagEl.alt = userInput;
  infoEl.appendChild(flagEl);
  mymap.removeLayer(marker);
}
function capitalCity() {
  var capitalCity = document.getElementById("capitalCity");
  var capitalName = document.getElementById("names").value;
  var capital = countryDetails[capitalName].capital;
  var capitalEl = document.createElement("p");
  capitalEl.className = "capital";
  capitalEl.innerHTML = `
    ${capital}`;
  capitalCity.appendChild(capitalEl);
}
function language() {
  var languageID = document.getElementById("language");
  var languageName = document.getElementById("names").value;
  var language = countryDetails[languageName].languages[0].name;
  var languageEl = document.createElement("p");
  languageEl.className = "language";
  languageEl.innerHTML = `
    ${language}`;
  languageID.appendChild(languageEl);
}
function currency() {
  var currencyId = document.getElementById("currency");
  var currencyName = document.getElementById("names").value;
  var currency = countryDetails[currencyName].currencies[0].name;
  var currencyEl = document.createElement("p");
  currencyEl.className = "currency";
  currencyEl.innerHTML = `
    ${currency}`;
  currencyId.appendChild(currencyEl);
}
function timezone() {
  var timezoneId = document.getElementById("timezone");
  var timezoneName = document.getElementById("names").value;
  var timezone = countryDetails[timezoneName].timezones[0];
  var timezoneEl = document.createElement("p");
  timezoneEl.className = "currency";
  timezoneEl.innerHTML = `
    ${timezone}`;
  timezoneId.appendChild(timezoneEl);
}

function region() {
  var regionId = document.getElementById("region");
  var regionName = document.getElementById("names").value;
  var region = countryDetails[regionName].region;
  var regionEl = document.createElement("p");
  regionEl.className = "currency";
  regionEl.innerHTML = `
    ${region}`;
  regionId.appendChild(regionEl);
}
function nameOfCountry() {
  var countryNameId = document.getElementById("nameOfCountry");
  var countryName = document.getElementById("names").value;
  var country = countryDetails[countryName].name;
  var countryNameEl = document.createElement("h1");
  countryNameEl.id = "NameOftheCountry";
  countryNameEl.innerHTML = `
    ${country}`;
  countryNameId.appendChild(countryNameEl);
}

var myLocation = [51, 9];

function latlnggeo() {
  var nameValue = document.getElementById("names").value;
  var geoLocation = countryDetails[nameValue].latlng;
  LatLng1 = geoLocation[0];
  LatLng2 = geoLocation[1];
  mymap.setView(new L.LatLng(LatLng1, LatLng2), 6);
  marker = new L.marker(new L.LatLng(LatLng1, LatLng2)).addTo(mymap);
  marker.bindPopup("<strong>" + nameValue + "</strong>").openPopup();
}

var mymap = L.map("mapid").setView(myLocation, 6);
var marker = L.marker([51, 9]).addTo(mymap);
marker.bindPopup("<strong>" + "Germany" + "</strong>").openPopup();
var mapBoxToken =
  "pk.eyJ1IjoicGF1bGJvZWNrIiwiYSI6ImNqZmo5Y3dsMzZjd2gyeHBkeHp0Mmt6eXQifQ.8H4_R2UaKJZ_rWH1Z3vdFg";
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: mapBoxToken
  }
).addTo(mymap);
