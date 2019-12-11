import {locationData} from "../utilities/getDataCountry";

async function setWeatherData(data) {
  const todayTemperature = document.querySelector('.weather_today--temperature');
  const todaySummary = document.querySelector('.weather_today--recommendation');
  const todayFeelsLike = document.querySelector('.weather_today--option-feels_like');
  const todayWind = document.querySelector('.weather_today--option-wind');
  const todayHumidity = document.querySelector('.weather_today--option-humidity');

  const weatherToday = await data;

  todayTemperature.textContent = `${Math.trunc(weatherToday.currently.temperature)}${String.fromCharCode(176)}`;
  todaySummary.textContent = weatherToday.currently.summary;
  todayFeelsLike.textContent = `Feels like: ${Math.trunc(weatherToday.currently.apparentTemperature)}${String.fromCharCode(176)}`;
  todayFeelsLike.setAttribute('temperature', `${Math.trunc(weatherToday.currently.apparentTemperature)}`);
  todayWind.textContent = `Wind: ${Math.trunc(weatherToday.currently.windSpeed)} m/sec`;
  todayHumidity.textContent = `Humidity: ${Math.trunc(weatherToday.currently.humidity * 100)}%`;

}

export default setWeatherData;
