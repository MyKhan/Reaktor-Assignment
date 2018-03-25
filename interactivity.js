// var recObs = [{ "Helsinki": 10 },
// { "Helsinki": 18 },
// { "Helsinki": 8 },
// { "Helsinki": 0 },
// { "Helsinki": -2 },
// { "Helsinki": 8 },
// { "Tokyo": 10 },
// { "Tokyo": 18 },
// { "Tokyo": 8 },
// { "Tokyo": 0 },
// { "Tokyo": -2 },
// { "Tokyo": 8 },
// { "Dubai": 10 },
// { "Dubai": 30 },
// { "Dubai": 20 },
// { "Dubai": 10 },
// { "Dubai": 30 },
// { "New York": 10 },
// { "New York": 18 },
// { "New York": 8 },
// { "New York": 0 },
// { "New York": -2 },
// { "New York": 8 },
// { "Amsterdam": 10 },
// { "Amsterdam": 18 },
// { "Amsterdam": 8 },
// { "Amsterdam": 0 },
// { "Amsterdam": -2 },
// { "Amsterdam": 8 }
// ];


// (function allObservations() {
//   var text = "";
//   recObs.forEach(function (arrayItem) {
//     var x = JSON.stringify(arrayItem);
//     text += x + "<br >";
//   });
//   document.getElementById('observations').innerHTML = text + "<br>";
// })();
// var recObsOfHelsinki = [10, 5, 8, 9, 10, 6];
// var recObsOfTokyo = [10, 15, 18, 19, 20, 6];
// var recObsOfDubai = [30, 25, 28, 29, 30, 26];
// var recObsOfNewYork = [0, -5, 8, -9, -10, -6];
// var recObsOfAmsterdam = [15, 15, 18, 19, 10, 16];
// (function allObservations() {
//   var text = "";
//   var observations = document.getElementById("observations");
//   alert(observations);
//   recObsOfHelsinki.forEach(function (temperature) {
//     text += temperature + "<br >";
//   });
//   alert(text);
//   observations.innerHTML = text;
// })();




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
         data: [0, 10, 30, -10, 5],
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



/*
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
              data: [20, 50, 100, 75, 25, 0],
              label: 'Left dataset',
              // This binds the dataset to the left y axis
              yAxisID: 'left-y-axis'
          }, {
              data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
              label: 'Right dataset',
              // This binds the dataset to the right y axis
              yAxisID: 'right-y-axis',
          }],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      options: {
          scales: {
              yAxes: [{
                  id: 'left-y-axis',
                  type: 'linear',
                  position: 'left'
              }, {
                  id: 'right-y-axis',
                  type: 'linear',
                  position: 'right'
              }]
          }
      }
  });



  */



var button = document.getElementById("btn_show-add-obs-section");
button.addEventListener("click", showHighsAndLows);

function showHighsAndLows() {
    var addObs = document.getElementById("add-obs");
    var displaySetting = addObs.style.display;
    if (displaySetting == "block") {
        window.setTimeout(function() {
            addObs.style.display = "none";
        }, 10);
        button.innerHTML = "Add An Observation";
    } else {
        window.setTimeout(function() {
            addObs.style.display = "block";
        }, 10);
        button.innerHTML = "Are You Done?";
    }
};

// $(document).ready(function () {
//   $('#btn_show-add-obs-section').click(function () {
//     $('#add-obs').toggle();
//   });
// });

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