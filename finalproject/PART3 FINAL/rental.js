/*jsonfilehandler.js*/
var xhr = new XMLHttpRequest();
var r;
window.onload = loaddata;

function loaddata() {
    //event listener
    document.getElementById("lastName").addEventListener("keyup", function() { searchLastName(this.value); }, false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            r = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "rentalclients.json", true);
    xhr.send();

    var last;

    var first;

    var address;

    var state;

    var email;

    var phone;


}


function findLocation(latitude, longitude) {

    var lat = latitude;
    var long = longitude;

    var url = "https://maps.google.com/?q=" + lat + "," + long;
    window.open(url);



}



function searchLastName(Searchlastname) {
    //var r=JSON.parse(xhr.responseText);
    document.getElementById("searchvalue").innerHTML = "Search by Last Name" + "<br>";
    //structure table
    var output = `<tr id="HEADER"><th>Last Name</th><th>First Name</th><th>Order</th></tr>`;
    var searchlastname;
    for (var i = 0; i < r.length; i++) {
        var obj = r[i];
        searchlastname = obj.last_name;
        if (searchlastname.startsWith(Searchlastname)) {

            output += "<tr><td>"
            output += obj.last_name
            output += "</td><td>"
            output += obj.first_name
            output += "</td><td>"
            output += `<a href="#" class="map-btn" onclick="showOrder('${obj.last_name}','${obj.first_name}','${obj.address}','${obj.state_prov}','${obj.email}','${obj.phone}')"><img src="addIcon.png" alt="Add" width="25px"></img> Select Customer </a>`
            output += "</td></tr>";

        }

    }
    document.getElementById("searchresults").innerHTML = output;


}





function showOrder(lname, fname, address, state, email, phone) {

    cssChange();
    //changing css stuff

    last = lname;
    document.getElementById("OUT-LastName").value = last;
    first = fname;
    document.getElementById("OUT-FirstName").value = first;
    address = address;
    document.getElementById("OUT-Address").value = address;
    state = state;
    document.getElementById("OUT-State").value = state;
    email = email;
    document.getElementById("OUT-Email").value = email;
    phone = phone;
    document.getElementById("OUT-Phone").value = phone;



}

function LoadForms(CarType) {
    // Tell the AJAXCalls where it should put the information it retrieve
    AJAXCalls.options.webPanelId = 'formArea-FormType';

    switch (CarType) {
        case "Compact":
            GetContentUsingAJAX('./compact.html');
            break;

        case "Mid-size":
            GetContentUsingAJAX('./midsize.html');
            break;

        case "Luxury":
            GetContentUsingAJAX('./luxury.html');
            break;

        case "Van/Truck":
            GetContentUsingAJAX('./van.html');
            break;

        default:
            break;
    }
}

function cssChange() {

    document.getElementById('info').style.marginLeft = "20%";
    document.getElementById('info').style.paddingRight = "10%";
    document.getElementById('info').style.marginRight = "70%";
    document.getElementById('info').style.cssFloat = "left";

    document.getElementById('outputForm').style.display = 'block';
    document.getElementById('outputForm').style.marginLeft = "70%";
}




function ordered() {

    document.getElementById('receipt').style.display = 'block';
    var totalPrice = 0;
    var totalTime = document.getElementById('time').value;
    console.log(totalTime);
    var type = RetrieveRadioButtonValue('OUT-TYPE');

    switch (type) {
        case "Compact":
            totalPrice += 15;
            var addons = RetrieveCheckBoxValues('addons');

            if (addons[0] == 'on') {
                totalPrice += 5;
            }
            if (addons[1] == 'on') {
                totalPrice += 10;
            }
            if (addons[2] == 'on') {
                totalPrice += 0;
            }

            var final = totalPrice * totalTime;




            var address = document.getElementById("OUT-Address").value;

            var state = document.getElementById("OUT-State").value;

            var email = document.getElementById("OUT-Email").value;

            var phone = document.getElementById("OUT-Phone").value;


            document.getElementById('R-NAME').innerHTML = last + " " + first;
            document.getElementById('R-PHONE').innerHTML = phone;
            document.getElementById('R-ADDRESS').innerHTML = address;
            document.getElementById('R-STATE').innerHTML = state;
            document.getElementById('R-EMAIL').innerHTML = email;
            document.getElementById('R-DATE').innerHTML = totalTime + " days";
            document.getElementById('R-CAR').innerHTML = type;
            document.getElementById('R-TOTAL').innerHTML = final + "$";


    }
    switch (type) {
        case "Mid-size":
            totalPrice += 20;
            var addons = RetrieveCheckBoxValues('addons');

            if (addons[0] == 'on') {
                totalPrice += 5;
            }
            if (addons[1] == 'on') {
                totalPrice += 10;
            }
            if (addons[2] == 'on') {
                totalPrice += 0;
            }

            var final = totalPrice * totalTime;




            var address = document.getElementById("OUT-Address").value;

            var state = document.getElementById("OUT-State").value;

            var email = document.getElementById("OUT-Email").value;

            var phone = document.getElementById("OUT-Phone").value;


            document.getElementById('R-NAME').innerHTML = last + " " + first;
            document.getElementById('R-PHONE').innerHTML = phone;
            document.getElementById('R-ADDRESS').innerHTML = address;
            document.getElementById('R-STATE').innerHTML = state;
            document.getElementById('R-EMAIL').innerHTML = email;
            document.getElementById('R-DATE').innerHTML = totalTime + " days";
            document.getElementById('R-CAR').innerHTML = type;
            document.getElementById('R-TOTAL').innerHTML = final + "$";


    }
    switch (type) {
        case "Luxury":
            totalPrice += 35;
            var addons = RetrieveCheckBoxValues('addons');

            if (addons[0] == 'on') {
                totalPrice += 5;
            }
            if (addons[1] == 'on') {
                totalPrice += 10;
            }
            if (addons[2] == 'on') {
                totalPrice += 0;
            }

            var final = totalPrice * totalTime;




            var address = document.getElementById("OUT-Address").value;

            var state = document.getElementById("OUT-State").value;

            var email = document.getElementById("OUT-Email").value;

            var phone = document.getElementById("OUT-Phone").value;


            document.getElementById('R-NAME').innerHTML = last + " " + first;
            document.getElementById('R-PHONE').innerHTML = phone;
            document.getElementById('R-ADDRESS').innerHTML = address;
            document.getElementById('R-STATE').innerHTML = state;
            document.getElementById('R-EMAIL').innerHTML = email;
            document.getElementById('R-DATE').innerHTML = totalTime + " days";
            document.getElementById('R-CAR').innerHTML = type;
            document.getElementById('R-TOTAL').innerHTML = final + "$";


    }
    switch (type) {
        case "Van/Truck":
            totalPrice += 40;
            var addons = RetrieveCheckBoxValues('addons');

            if (addons[0] == 'on') {
                totalPrice += 5;
            }
            if (addons[1] == 'on') {
                totalPrice += 10;
            }
            if (addons[2] == 'on') {
                totalPrice += 0;
            }

            var final = totalPrice * totalTime;




            var address = document.getElementById("OUT-Address").value;

            var state = document.getElementById("OUT-State").value;

            var email = document.getElementById("OUT-Email").value;

            var phone = document.getElementById("OUT-Phone").value;


            document.getElementById('R-NAME').innerHTML = last + " " + first;
            document.getElementById('R-PHONE').innerHTML = phone;
            document.getElementById('R-ADDRESS').innerHTML = address;
            document.getElementById('R-STATE').innerHTML = state;
            document.getElementById('R-EMAIL').innerHTML = email;
            document.getElementById('R-DATE').innerHTML = totalTime + " days";
            document.getElementById('R-CAR').innerHTML = type;
            document.getElementById('R-TOTAL').innerHTML = final + "$";


    }
}