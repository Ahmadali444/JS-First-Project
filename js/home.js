
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewla", "Sheikhupura", "Kashmir"];

let fullName = sessionStorage.getItem("fullName");
console.log(fullName);

document.getElementById("navName").innerHTML += fullName;

function printCities() {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + '<br />';
    }
}
function cheak() {
    let newCity = document.getElementById("inCity").value;
    let ch = 0;
    let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < newCity.length; i++) {
        for (let j = 0; j < alph.length; j++) {
            if (newCity.charAt(i) == alph.charAt(j)) {
                ch++;
                break;
            }
        }
    }
    if (newCity.length == ch) {
        return 1;
    }
    else {
        return 0;
    }
}
function addCity() {
    if (cheak() == 1) {
        let newCity = document.getElementById("inCity").value;
        let res = 0;
        if (newCity.length <= 2) {
            showcityToast();
            printCities();
            return;
        }
        for (let i = 0; i < cities.length; i++) {
            if (newCity.toLowerCase() === cities[i].toLowerCase()) {
                res = 1;
            }
        }
        if (res === 1) {
            showalcityToast();
            document.getElementById("output").innerHTML = "";
            document.getElementById("output").innerHTML += "<span class='rednewCity'>" + newCity + "</span> has been Alraedy Exist!" + "<br />";
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + '<br />';
            }
            return;
        }
        else {
            cities.push(newCity);
            showDonecityToast();
            document.getElementById("output").innerHTML = "";
            document.getElementById("output").innerHTML += "<span class='greennewCity'>" + newCity + "</span> has been Successful Add!" + "<br />";
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + '<br />';
            }
        }
    }
    else {
        showToastNotAdd();
    }
}
function seeCity() {
    if (cheak() == 1) {
        let newCity = document.getElementById("inCity").value;
        let res = 0;
        if (newCity.length <= 2) {
            showcityToast();
            printCities();
            return;
        }
        for (let i = 0; i < cities.length; i++) {
            if (newCity.toLowerCase() === cities[i].toLowerCase()) {
                res = 1;
            }
        }
        if (res === 1) {
            showDonecityToast();
            document.getElementById("output").innerHTML = "";
            document.getElementById("output").innerHTML += "<span class='greennewCity'>" + newCity + "</span> City Exist In List." + "<br />";
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + '<br />';
            }
        }
        else {
            showalNotcityToast();
            document.getElementById("output").innerHTML = "";
            document.getElementById("output").innerHTML += "<span class='rednewCity'>" + newCity + "</span> Not found in list." + "<br />";
            for (let i = 0; i < cities.length; i++) {
                document.getElementById("output").innerHTML += i + 1 + ") " + cities[i] + '<br />';
            }
        }
    }
    else {
        showToastNotAdd();
    }
}

// Show Tosat on Enter City
function showcityToast() {
    Toastify({
        text: " Sorry! Please Enter City. ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}


// Show Tosat on Not Add City
function showToastNotAdd() {
    Toastify({
        text: " Sorry! Enter Correctly City Name . ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Show Tosat on Already Exist City
function showalcityToast() {
    Toastify({
        text: " Sorry! This City Already Exist. ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Show Tosat on City In List
function showDonecityToast() {
    Toastify({
        text: " Done! This City In List. ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Show Tosat on City Not Found
function showalNotcityToast() {
    Toastify({
        text: " Sorry! This City not found. ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

// Show Tosat on City In List
function showDonecityToast() {
    Toastify({
        text: " Done! This City In List. ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

function inputClear() {
    document.getElementById("inCity").value = " ";
}

function outclear() {
    document.getElementById("output").innerHTML = " ";
}
