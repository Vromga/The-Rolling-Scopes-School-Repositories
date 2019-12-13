import averageTemperature from "../utilities/averageTemperature";
import setAttributeButtonTemp from "../utilities/setAttributeButtonTemp";
import setIcon from "./setIconWeather";
import translateUI from "../utilities/translateUI";

async function setWeatherData(data) {
  const todayTemperature = document.querySelector('.weather_today--temperature');
  const todaySummary = document.querySelector('.weather_today--recommendation');
  const todayFeelsLike = document.querySelector('.weather_today--option-feels_like');
  const todayWind = document.querySelector('.weather_today--option-wind');
  const todayHumidity = document.querySelector('.weather_today--option-humidity');
  const tomorrowTemperature = document.querySelector('.weather_future--tomorrow-temperature');
  const afterTomorrowTemperature = document.querySelector('.weather_future--after_tomorrow-temperature');
  const afterafterTomorrowTemperature = document.querySelector('.weather_future--after_after_tomorrow-temperature');
  const tomorrowSummary = document.querySelector('.weather_future--tomorrow-summary');
  const afterTomorrowSummary = document.querySelector('.weather_future--after_tomorrow-summary');
  const afterAfterTomorrowSummary = document.querySelector('.weather_future--after_after_tomorrow-summary');
  const weatherToday = await data;

  todayTemperature.textContent = `${Math.trunc(weatherToday.currently.temperature)}${String.fromCharCode(176)}`;
  todayTemperature.setAttribute('temperature', `${Math.trunc(weatherToday.currently.temperature)}`);
  todaySummary.textContent = weatherToday.currently.summary;
  todayFeelsLike.textContent = `${translateUI()[0]} ${Math.trunc(weatherToday.currently.apparentTemperature)}${String.fromCharCode(176)}`;
  todayFeelsLike.setAttribute('temperature', `${Math.trunc(weatherToday.currently.apparentTemperature)}`);
  todayWind.textContent = `${translateUI()[1]}  ${Math.trunc(weatherToday.currently.windSpeed)} km/h`;
  todayHumidity.textContent = `${translateUI()[2]}  ${Math.trunc(weatherToday.currently.humidity * 100)}%`;
  tomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weatherToday.daily.data[2].temperatureHigh, weatherToday.daily.data[2].temperatureLow))}${String.fromCharCode(176)}`;
  tomorrowTemperature.setAttribute('temperature', `${Math.trunc(averageTemperature(weatherToday.daily.data[2].temperatureHigh, weatherToday.daily.data[2].temperatureLow))}`);
  afterTomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weatherToday.daily.data[3].temperatureHigh, weatherToday.daily.data[3].temperatureLow))}${String.fromCharCode(176)}`;
  afterTomorrowTemperature.setAttribute('temperature', `${Math.trunc(averageTemperature(weatherToday.daily.data[3].temperatureHigh, weatherToday.daily.data[3].temperatureLow))}`);
  afterafterTomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weatherToday.daily.data[4].temperatureHigh, weatherToday.daily.data[5].temperatureLow))}${String.fromCharCode(176)}`;
  afterafterTomorrowTemperature.setAttribute('temperature',`${Math.trunc(averageTemperature(weatherToday.daily.data[4].temperatureHigh, weatherToday.daily.data[5].temperatureLow))}`);
  tomorrowSummary.textContent = `${weatherToday.daily.data[2].summary}`;
  afterTomorrowSummary.textContent = `${weatherToday.daily.data[3].summary}`;
  afterAfterTomorrowSummary.textContent = `${weatherToday.daily.data[4].summary}`;


  setIcon(weatherToday.currently.icon, document.querySelector('#weatherToday'));
  setIcon(weatherToday.daily.data[2].icon, document.querySelector('#weatherTomorrow'));
  setIcon(weatherToday.daily.data[3].icon, document.querySelector('#weatherAfterTomorrow'));
  setIcon(weatherToday.daily.data[4].icon, document.querySelector('#weatherAfterAfterTomorrow'));
  setAttributeButtonTemp();
}

export default setWeatherData;
