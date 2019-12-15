import averageTemperature from "../utilities/averageTemperature";
import setAttributeButtonTemp from "../utilities/setAttributeButtonTemp";
import setIcon from "./setIconWeather";
import translateUI from "../utilities/translateUI";
import alertMessage from "./alert";
import convertPressure from "../utilities/converPressure";

async function setWeatherData(data) {
  try {
    const todayTemperature = document.querySelector('.weather_today--temperature');
    const todaySummary = document.querySelector('.weather_today--recommendation');
    const todayAllDay = document.querySelector('.weather_today--all_day');
    const todayFeelsLike = document.querySelector('.weather_today--option-feels_like');
    const todayWind = document.querySelector('.weather_today--option-wind');
    const todayHumidity = document.querySelector('.weather_today--option-humidity');
    const todayUvIndex = document.querySelector('.weather_today--option-uvIndex');
    const todayVisibility = document.querySelector('.weather_today--option-visibility');
    const todayHectopascals = document.querySelector('.weather_today--option-hectopascals');
    const tomorrowTemperature = document.querySelector('.weather_future--tomorrow-temperature');
    const afterTomorrowTemperature = document.querySelector('.weather_future--after_tomorrow-temperature');
    const afterAfterTomorrowTemperature = document.querySelector('.weather_future--after_after_tomorrow-temperature');
    const tomorrowSummary = document.querySelector('.weather_future--tomorrow-summary');
    const afterTomorrowSummary = document.querySelector('.weather_future--after_tomorrow-summary');
    const afterAfterTomorrowSummary = document.querySelector('.weather_future--after_after_tomorrow-summary');
    const weather = await data;
    console.log(weather);
    todayTemperature.textContent = `${Math.trunc(weather.currently.temperature)}${String.fromCharCode(176)}`;
    todayTemperature.setAttribute('temperature', `${Math.trunc(weather.currently.temperature)}`);
    todaySummary.textContent = weather.currently.summary;
    todayAllDay.textContent = `${translateUI()[13]}: ${weather.daily.data[1].summary}`;
    todayFeelsLike.textContent = `${translateUI()[0]} ${Math.trunc(weather.currently.apparentTemperature)}${String.fromCharCode(176)}`;
    todayFeelsLike.setAttribute('temperature', `${Math.trunc(weather.currently.apparentTemperature)}`);
    todayWind.textContent = `${translateUI()[1]}  ${Math.trunc(weather.currently.windSpeed)} ${translateUI()[16]}`;
    todayHumidity.textContent = `${translateUI()[2]}  ${Math.trunc(weather.currently.humidity * 100)}%`;
    todayUvIndex.textContent = `${translateUI()[14]}: ${weather.currently.uvIndex}`;
    todayVisibility.textContent = `${translateUI()[15]}: ${weather.currently.visibility} ${translateUI()[17]}`;
    todayHectopascals.textContent = `${translateUI()[18]}: ${convertPressure(weather.currently.pressure)} ${translateUI()[19]}`;
    tomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weather.daily.data[2].temperatureHigh, weather.daily.data[2].temperatureLow))}${String.fromCharCode(176)}`;
    tomorrowTemperature.setAttribute('temperature', `${Math.trunc(averageTemperature(weather.daily.data[2].temperatureHigh, weather.daily.data[2].temperatureLow))}`);
    afterTomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weather.daily.data[3].temperatureHigh, weather.daily.data[3].temperatureLow))}${String.fromCharCode(176)}`;
    afterTomorrowTemperature.setAttribute('temperature', `${Math.trunc(averageTemperature(weather.daily.data[3].temperatureHigh, weather.daily.data[3].temperatureLow))}`);
    afterAfterTomorrowTemperature.textContent = `${Math.trunc(averageTemperature(weather.daily.data[4].temperatureHigh, weather.daily.data[5].temperatureLow))}${String.fromCharCode(176)}`;
    afterAfterTomorrowTemperature.setAttribute('temperature', `${Math.trunc(averageTemperature(weather.daily.data[4].temperatureHigh, weather.daily.data[5].temperatureLow))}`);
    tomorrowSummary.textContent = `${weather.daily.data[2].summary}`;
    afterTomorrowSummary.textContent = `${weather.daily.data[3].summary}`;
    afterAfterTomorrowSummary.textContent = `${weather.daily.data[4].summary}`;


    setIcon(weather.currently.icon, document.querySelector('#weatherToday'));
    setIcon(weather.daily.data[2].icon, document.querySelector('#weatherTomorrow'));
    setIcon(weather.daily.data[3].icon, document.querySelector('#weatherAfterTomorrow'));
    setIcon(weather.daily.data[4].icon, document.querySelector('#weatherAfterAfterTomorrow'));
    setAttributeButtonTemp();
  }catch (e) {
    alertMessage(e);
  }
}

export default setWeatherData;
