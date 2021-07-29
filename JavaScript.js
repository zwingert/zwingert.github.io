const iconElement = document.querySelector(".weather-pic");
const tempElement = document.querySelector(".temp-degree");
const descElement = document.querySelector(".temp-desc");
const addressElement = document.querySelector(".address");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temp = {
    unit : "celsius"
}

const KELVIN = 273;
const API_KEY = "67764089c1e83a1cf40d9e50ec616f70";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}
else{
    console.log("blocked");
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = '<p> ${error.message} </p>';
}

function getWeather(latitude, longitude){
    let api = 'http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=67764089c1e83a1cf40d9e50ec616f70';

    console.log(api);
}