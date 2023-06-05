/*jsonfilehandler.js*/
var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;

function loaddata() {
    //event listener
    document.getElementById("Sector").addEventListener("keyup", function() { searchSector(this.value); }, false);
    document.getElementById("Count").addEventListener("keyup", function() { searchCount(this.value); }, false);
    document.getElementById("Year").addEventListener("keyup", function() { searchYear(this.value); }, false);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    //get the data
    xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
    xhr.send();

}

//link to the maps using the latitude and longitude
function findLocation(latitude, longitude) {

    var lat = latitude;
    var long = longitude;

    var url = "https://maps.google.com/?q=" + lat + "," + long;
    window.open(url);
}


//search by sector
function searchSector(Searchsector) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Sector of the City" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Sector</th><th>Community Name </th><th>Group Category</th><th>Category</th><th>Year</th><th>Count</th> <th>Month</th><th>Location</th></tr>`;
    var searchsector;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchsector = obj.sector;
        if (searchsector.startsWith(Searchsector.toUpperCase())) {

            output += "<tr><td>"
            output += obj.sector
            output += "</td><td>"
            output += obj.community_name
            output += "</td><td>"
            output += obj.category
            output += "</td><td>"
            output += obj.group_category
            output += "</td><td>"
            output += obj.year
            output += "</td><td>"
            output += obj.count
            output += "</td><td>"
            output += obj.month
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.geocoded_column.latitude},${obj.geocoded_column.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}
//search by count
function searchCount(Searchcount) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Count" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Sector</th><th>Community Name </th><th>Category</th><th>Year</th><th>Count</th> <th>Month</th><th>Location</th></tr>`;
    var searchcount;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchcount = obj.count;
        if (searchcount.startsWith(Searchcount.toUpperCase())) {

            output += "<tr><td>"
            output += obj.sector
            output += "</td><td>"
            output += obj.community_name
            output += "</td><td>"
            output += obj.category
            output += "</td><td>"
            output += obj.year
            output += "</td><td>"
            output += obj.count
            output += "</td><td>"
            output += obj.month
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.geocoded_column.latitude},${obj.geocoded_column.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map  </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}
//search by year
function searchYear(year) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Year" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Sector</th><th>Community Name </th><th>Year</th><th>Category</th><th>Count</th> <th>Month</th><th>Location</th></tr>`;
    var searchyear;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchyear = obj.year;
        if (searchyear.startsWith(year.toUpperCase())) {

            output += "<tr><td>"
            output += obj.sector
            output += "</td><td>"
            output += obj.community_name
            output += "</td><td>"
            output += obj.year
            output += "</td><td>"
            output += obj.category
            output += "</td><td>"
            output += obj.count
            output += "</td><td>"
            output += obj.month
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showMap(${obj.geocoded_column.latitude},${obj.geocoded_column.longitude})"><img src="arrow.webp" alt="Arrow" width="25px"></img> Show On Map </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}




function showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
}