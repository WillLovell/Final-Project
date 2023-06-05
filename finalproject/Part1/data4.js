/*jsonfilehandler.js*/
var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;

function loaddata() {
    //event listener
    document.getElementById("Location").addEventListener("keyup", function() { searchSector(this.value); }, false);
    document.getElementById("PermitNum").addEventListener("keyup", function() { searchDesc(this.value); }, false);
    document.getElementById("Year").addEventListener("keyup", function() { searchYear(this.value); }, false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
    xhr.send();

}


function findLocation(latitude, longitude) {

    var lat = latitude;
    var long = longitude;

    var url = "https://maps.google.com/?q=" + lat + "," + long;
    window.open(url);



}


//search by location
function searchSector(Searchlocation) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Location of the Incident" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Permit Number</th><th>Address</th><th>Permit Class Group</th><th>Date Applied</th><th>Location</th></tr>`;
    var searchlocation;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchlocation = obj.originaladdress;
        if (searchlocation.startsWith(Searchlocation)) {

            output += "<tr><td>"
            output += obj.permitnum
            output += "</td><td>"
            output += obj.originaladdress
            output += "</td><td>"
            output += obj.permitclassgroup
            output += "</td><td>"
            output += obj.applieddate
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.latitude},${obj.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}
//search by description
function searchDesc(Searchdesc) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Permit Number" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Location</th><th>Description</th><th>Start Date</th><th>Date Applied</th><th>Location</th></tr>`;
    var searchDesc;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchDesc = obj.permitnum;
        if (searchDesc.startsWith(Searchdesc.toUpperCase())) {

            output += "<tr><td>"
            output += obj.permitnum
            output += "</td><td>"
            output += obj.originaladdress
            output += "</td><td>"
            output += obj.permitclassgroup
            output += "</td><td>"
            output += obj.applieddate
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.latitude},${obj.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}
//search by year
function searchYear(Searchyear) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by the Year of the Incident" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Location</th><th>Description</th><th>Start Date</th><th>Date Applied</th><th>Location</th></tr>`;
    var SearchYear;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        SearchYear = obj.applieddate;
        if (SearchYear.startsWith(Searchyear)) {

            output += "<tr><td>"
            output += obj.permitnum
            output += "</td><td>"
            output += obj.originaladdress
            output += "</td><td>"
            output += obj.permitclassgroup
            output += "</td><td>"
            output += obj.applieddate
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.latitude},${obj.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}




function showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
}