/*jsonfilehandler.js*/
var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;

function loaddata() {
    //event listener
    document.getElementById("quadrant").addEventListener("keyup", function() { searchQuadrant(this.value); }, false);
    document.getElementById("location").addEventListener("keyup", function() { searchLocation(this.value); }, false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/k7p9-kppz.json", true);
    xhr.send();

}


function findLocation(latitude, longitude) {

    var lat = latitude;
    var long = longitude;

    var url = "https://maps.google.com/?q=" + lat + "," + long;
    window.open(url);



}


//search by quadrant
function searchQuadrant(Searchquadrant) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Quadrant of the City" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Quadrant</th><th>Location</th><th>Map Location</th></tr>`;
    var SearchQuadrant;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        SearchQuadrant = obj.quadrant;
        if (SearchQuadrant.startsWith(Searchquadrant.toUpperCase())) {

            output += "<tr><td>"
            output += obj.quadrant
            output += "</td><td>"
            output += obj.camera_location
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.point.coordinates[1]},${obj.point.coordinates[0]})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults").innerHTML = output;


}
//search by location
function searchLocation(Searchlocation) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Location of the City" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Quadrant</th><th>Location</th><th>Map Location</th></tr>`;
    var SearchLocation;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        SearchLocation = obj.camera_location;
        if (SearchLocation.startsWith(Searchlocation)) {

            output += "<tr><td>"
            output += obj.quadrant
            output += "</td><td>"
            output += obj.camera_location
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.point.coordinates[1]},${obj.point.coordinates[0]})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";
        }

    }
    document.getElementById("searchresults").innerHTML = output;


}




function showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
}