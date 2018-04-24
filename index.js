var login = {
    "geonamesUser": "redi_basicfrontend"
    // "geonamesPassword": "K8LJehvaokiAwwHHFYyaneWZytRyPSQYhfvxKCFxbYaVMmT22tkYxmxUt3noESXF"
}



function findCity(searchString) {
    var city = searchString;
    var url = `http://api.geonames.org/searchJSON?q=${city}&cities=cities1000&maxRows=10&username=redi_basicfrontend`

    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(cities => {
            return cities.geonames[0]
        });


}
console.log(findCity("Berlin"));