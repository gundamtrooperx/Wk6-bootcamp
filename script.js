console.log("jsfileloader")
$("#submit-btn").on("click", function(even){
    even.preventDefault()
    var cityName = $("#search-bar").val()
    console.log(cityName)
    foreCast(cityName)
    fivedayforeCast(cityName)
})

function foreCast(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=40571805cf3b0ae2faaf7476a276be34&units=imperial"
    
    $.ajax({
        url: url, 
        method: "get"
    }).then(function(API){
        console.log(API)
        $("#display-4").text(`City: ${API.name}, ${API.sys.country}`)
        var lat = API.coord.lat
        var lon = API.coord.lon
        UV(lat, lon)
        $("#forecasts").html(`<div class = "card">
        <h6>Temp: ${API.main.temp}</h6>
        <p>Description: ${API.weather[0].description}</p>
        <p>Wind Speed: ${API.wind.speed}</p>
        <p>Humidity: ${API.main.humidity}</p>
        <img class="img-fluid" src="https://openweathermap.org/img/wn/${API.weather[0].icon}@2x.png"/>`)
    })

}


function fivedayforeCast(cityName) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=40571805cf3b0ae2faaf7476a276be34&units=imperial"
    
    $.ajax({
        url: url, 
        method: "get"
    }).then(function(API){
        console.log(API)
        $("#5day").empty()
        for(let i =0; i < API.list.length; i = i + 8) {
        
        $("#5day").append(`<div class = "card">
        <h6>Temp: ${API.list[i].main.temp}</h6>
        <p>Description: ${API.list[i].weather[0].description}</p>
        <p>Wind Speed: ${API.list[i].wind.speed}</p>
        <p>Humidity: ${API.list[i].main.humidity}</p>
        <img class="img-fluid" src="https://openweathermap.org/img/wn/${API.list[i].weather[0].icon}@2x.png"/>`)
        }
        
    })

}

//http://samples.openweathermap.org/data/2.5/uvi/forecast?lat=37.75&lon=-122.37&appid=439d4b804bc8187953eb36d2a8c26a02
function UV(lat, lon) {
    var url = `https://api.openweathermap.org/data/2.5/uvi?appid=40571805cf3b0ae2faaf7476a276be34&lat=${lat}&lon=${lon}`
    
    $.ajax({
        url: url, 
        method: "get"
    }).then(function(API){
        console.log(API)
        $("#uv").text(`UV: ${API.value}`)
    })
}
