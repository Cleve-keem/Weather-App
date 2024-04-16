
const apiKey = "f66cb607634c9d9950188c426363a353";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const error = document.querySelector(".errorMessage");
// const cityName = document.querySelector("#city-name").value;

async function checkWeather(cityName){
    try{
        var response =  await fetch(apiUrl + cityName + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

    }
    catch(error){
        console.error("Error fetching API");
    }

    if(response.status == 404){
        document.querySelector(".errorMessage").style.display = "block";
    }
    else{
    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        // image replacement
        if(data.weather[0].main === "Clouds"){
            weatherIcon.scr = "image/cloud.png";
        }
        else if(data.weather[0].main === "sunny"){
            weatherIcon.scr = "image/sunny.png";
        }
        else if(data.weather[0].main === "rainny"){
            weatherIcon.scr = "image/rainny.png";
        }
        else if(data.weather[0].main === "clear"){
            weatherIcon.scr = "image/clear.png";
        }
        else if(data.weather[0].main === "drizzle"){
            weatherIcon.scr = "image/drizzle.png";
        }
    
        document.querySelector(".weather").style.display ="block";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});