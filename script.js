console.log("jsfileloader")
$("#submit-btn").on("click", function(even){
    even.preventDefault()
    var cityName = $("#search-bar").val()
    console.log(cityName)
    foreCast(cityName)
})

function foreCast(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=40571805cf3b0ae2faaf7476a276be34&units=imperial"
    
    $.ajax({
        url: url, 
        method: "get"
    }).then(function(API){
        console.log(API)
        $("#forecasts").html(`<div class = "card">
        <h6>Temp: ${API.main.temp}</h6>
        <p>Description: ${API.weather[0].description}</p>
        <p>Wind Speed: ${API.wind.speed}</p>
        <p>Humidity: ${API.main.humidity}</p>
        <img class="img-fluid" src="https://openweathermap.org/img/wn/${API.weather[0].icon}@2x.png"/>`)
    })

}

