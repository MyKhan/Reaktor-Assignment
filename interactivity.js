var recObsOfHelsinki = [10, 5, 8, 9, 10, 6];
var recObsOfTokyo = [10, 15, 18, 19, 20, 6];
var recObsOfDubai = [30, 25, 28, 29, 30, 26];
var recObsOfNewYork = [0, -5, 8, -9, -10, -6];
var recObsOfAmsterdam = [15, 15, 18, 19, 10, 16];





function iterateOverAndShowTemperatures(appendingText, arrayOfTemps, idOfTable) {
    var observations = document.getElementById(idOfTable);
    arrayOfTemps.forEach(function (temperature) {
        appendingText += "<tr><td>" + temperature + "</td></tr>";
    })
    $(observations).append(appendingText);
}

function maxTemperature(arrayOfTemps) {
    var max = -Infinity;
    for (var i = 0; i < arrayOfTemps.length; i++) {
        if (arrayOfTemps[i] > max)
            max = arrayOfTemps[i];
    }
    return max;
}

function latestTemperature(arrayOfTemps) {
    var temp;
    // temp = arrayOfTemps[arrayOfTemps.length - 1];
    temp = arrayOfTemps.slice(-1)[0];
    return temp;
}


(function allObservations() {
    var helsinkiTemps = "";
    var tokyoTemps = "";
    var dubaiTemps = "";
    var newyorkTemps = "";
    var amsterdamTemps = "";
    iterateOverAndShowTemperatures(helsinkiTemps, recObsOfHelsinki, "table_helsinki-past-observations");
    iterateOverAndShowTemperatures(tokyoTemps, recObsOfTokyo, "table_tokyo-past-observations");
    iterateOverAndShowTemperatures(dubaiTemps, recObsOfDubai, "table_dubai-past-observations");
    iterateOverAndShowTemperatures(newyorkTemps, recObsOfNewYork, "table_newyork-past-observations");
    iterateOverAndShowTemperatures(amsterdamTemps, recObsOfAmsterdam, "table_amsterdam-past-observations");
})();


var ctx = document.getElementById("temperature-chart").getContext("2d");
Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Helsinki", "Tokyo", "Dubai", "New York", "Amsterdam"],
        datasets: [
            {
                label: "Current Temperature (in " + String.fromCharCode(176) + "C)",
                data: [latestTemperature(recObsOfHelsinki), latestTemperature(recObsOfTokyo), latestTemperature(recObsOfDubai), latestTemperature(recObsOfNewYork), latestTemperature(recObsOfAmsterdam)],
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 0, 0)",
                pointHoverBorderColor: "black",
                pointHoverRadius: 5,
                pointHoverBorderWidth: 5
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false
                    }
                }
            ]
        }
    }
});


var button = document.getElementById("btn_show-add-obs-section");
button.addEventListener("click", showHighsAndLows);

function showHighsAndLows() {
    var addObs = document.getElementById("add-obs");
    var displaySetting = addObs.style.display;
    if (displaySetting == "block") {
        window.setTimeout(function () {
            addObs.style.display = "none";
        }, 10);
        button.innerHTML = "Add An Observation";
    } else {
        window.setTimeout(function () {
            addObs.style.display = "block";
        }, 10);
        button.innerHTML = "Are You Done?";
    }
};

/*
    $("#checking").load("api.openweathermap.org/data/2.5/weather?lat=35&lon=139", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            $("#checking").innerHtml = responseTxt;
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
By geographic coordinates
API call:
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
Parameters:
lat, lon coordinates of the location of your interest
Examples of API calls:
api.openweathermap.org/data/2.5/weather?lat=35&lon=139
API respond:
{"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200}
*/