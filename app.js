const apiKey = "api_key_here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    let response = await fetch(apiUrl+city +`&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity h2").innerText = data.main.humidity +"%";
    document.querySelector(".wind h2").innerText =data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzzle.png";
    }else if(data.weather[0].main =="Mist") {
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main =="Snow") {
        weatherIcon.src = "images/snow.png"
    }else if(data.weather[0].main=="Wind") {
        weatherIcon.src = "images/wind.png"
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click",()=> {
    getWeather(searchBox.value);
})