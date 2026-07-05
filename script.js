const apiKey = "6ab52ede0fb998cdc2e9c576e97acdf0"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        document.querySelector(".weather-img").src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
        document.querySelector(".weather-img").src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
        document.querySelector(".weather-img").src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-img").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
        document.querySelector(".weather-img").src = "images/mist.png";
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})


