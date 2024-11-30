const visualCrossingKey = "3U8A6THF3NYCX76N9T6G9PD8Y";
const body = document.querySelector("body");

const weatherInfoContainer = document.createElement("div");
weatherInfoContainer.classList.add("weather-info")
const cityName = document.createElement("p");
cityName.classList.add("city");
const dateAndTime = document.createElement("p");
dateAndTime.classList.add("date-and-time");
const weatherImage = document.createElement("img");
weatherImage.classList.add("weather-image");
const temperature = document.createElement("p");
temperature.classList.add("temperature");
const conditions = document.createElement("p");
conditions.classList.add("conditions");
const description = document.createElement("p");
description.classList.add("description");

weatherInfoContainer.append(cityName, dateAndTime, weatherImage, temperature, conditions, description);

body.appendChild(weatherInfoContainer);

async function getWeather(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${visualCrossingKey}`
    );
    const data = await response.json();

    const cityNameData = data.resolvedAddress;
    cityName.innerText = cityNameData;
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    dateAndTime.innerText = `Today, ${formattedDate} ${hours}:${minutes}`;
}

//getWeather('london');