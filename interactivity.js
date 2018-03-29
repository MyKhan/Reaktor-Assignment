var recObsOfHelsinki = [10, 5, 8, 9, 10, -6];
var recObsOfTokyo = [10, 15, 18, 19, 20, 6];
var recObsOfDubai = [30, 25, 28, 29, 30, 26];
var recObsOfNewYork = [0, -5, 8, -9, -10, -6];
var recObsOfAmsterdam = [15, 15, 18, 19, 10, 16];


function highsAndLows(arrayOfTemps, idOfTable) {
    var max = maxTemperature(arrayOfTemps);
    var min = minTemperature(arrayOfTemps);
    var table = document.getElementById(idOfTable);
    // alert(max);
    // alert(min);
    // alert(table);
    table.rows[0].cells[1].innerHTML = max;
    table.rows[1].cells[1].innerHTML = min;
}


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

function minTemperature(arrayOfTemps) {
    var min = Infinity;
    for (var i = 0; i < arrayOfTemps.length; i++) {
        if (arrayOfTemps[i] < min)
            min = arrayOfTemps[i];
    }
    return min;
}

function latestTemperature(arrayOfTemps) {
    var temp;
    // temp = arrayOfTemps[arrayOfTemps.length - 1];
    temp = arrayOfTemps.slice(-1)[0];
    return temp;
}

var updateShowHighAndLowTemperatures = (function showHighAndLowTemperatures() {
    highsAndLows(recObsOfHelsinki, "table-helsinki_high-and-low");
    highsAndLows(recObsOfTokyo, "table-tokyo_high-and-low");
    highsAndLows(recObsOfDubai, "table-dubai_high-and-low");
    highsAndLows(recObsOfNewYork, "table-newyork_high-and-low");
    highsAndLows(recObsOfAmsterdam, "table-amsterdam_high-and-low");
})();

var updateAllObservations = (function allObservations() {
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


var buttonToggleAddObsSection = document.getElementById("btn_show-add-obs-section");
buttonToggleAddObsSection.addEventListener("click", showAddObservationSection);

function showAddObservationSection() {
    var addObs = document.getElementById("add-obs");
    var displaySetting = addObs.style.display;
    if (displaySetting == "block") {
        window.setTimeout(function () {
            addObs.style.display = "none";
        }, 10);
        buttonToggleAddObsSection.innerHTML = "Add An Observation";
    } else {
        window.setTimeout(function () {
            addObs.style.display = "block";
        }, 10);
        document.getElementById("observation").required = false;
        buttonToggleAddObsSection.innerHTML = "Are You Done?";
    }
};


var submitButton = document.getElementById('btn-submit_obs');
submitButton.addEventListener("click", submitFormData);

function submitFormData(e) {
    if (!document.getElementById("observation").value) {
        alert('Enter Observation');
    }
    else {
        // var serialized = $('form').serializeArray();
        // var serializedText = JSON.stringify(serialized);
        // alert(serializedText);

        var placeInputValue = document.getElementById("place").value;
        var observationInputValue = document.getElementById("observation").value;
        switch (placeInputValue) {
            case "helsinki":
                recObsOfHelsinki.push(observationInputValue);
                // alert(recObsOfHelsinki);
                myChart.data.datasets[0].data[0] = latestTemperature(recObsOfHelsinki);
                myChart.update();
                break;
            case "tokyo":
                recObsOfTokyo.push(observationInputValue);
                // alert(recObsOfTokyo);
                // updateShowHighAndLowTemperatures();
                // updateAllObservations();
                myChart.data.datasets[0].data[1] = latestTemperature(recObsOfTokyo);
                myChart.update();
                break;
            case "dubai":
                recObsOfDubai.push(observationInputValue);
                // alert(recObsOfDubai);
                myChart.data.datasets[0].data[2] = latestTemperature(recObsOfDubai);
                myChart.update();
                break;
            case "newyork":
                recObsOfNewYork.push(observationInputValue);
                // alert(recObsOfNewYork);
                myChart.data.datasets[0].data[3] = latestTemperature(recObsOfNewYork);
                myChart.update();
                break;
            case "amsterdam":
                recObsOfAmsterdam.push(observationInputValue);
                // alert(recObsOfAmsterdam);
                myChart.data.datasets[0].data[4] = latestTemperature(recObsOfAmsterdam);
                myChart.update();
                break;
            default:
                break;
        }
        document.getElementById('place').selectedIndex = 0;
        document.getElementById("observation").value = "";
        // showHighAndLowTemperatures;

        //check invalidity of input field
        $("#observation").blur(function () {
            if (!this.value) {
                document.getElementById('observation').required = true;
            }
        });
        // $(".btn-submit_obs").click(function (event){
        //     $("#observation").addClass('is-invalid');
        //     $("#observation").prop('required', true);
        // });

        var addObs = document.getElementById("add-obs");
        var displaySetting = addObs.style.display;
        window.setTimeout(function () {
            addObs.style.display = "none";
        }, 10);
        buttonToggleAddObsSection.innerHTML = "Add An Observation";
    }
}



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