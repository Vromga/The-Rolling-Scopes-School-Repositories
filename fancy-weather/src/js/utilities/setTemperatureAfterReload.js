import setButtonTemperatureAfterReload from "../DOM/setButtonTemperatureAfterReload";
import fahrenheitToCelsius from "./fahrenheitToCelsius";

function setTemperatureAfterReload(){

  setButtonTemperatureAfterReload();
  const tempNow = document.querySelector('.weather_today--temperature');
  const tempApparent = document.querySelector('.weather_today--option-feels_like');
  const tempTomorrow = document.querySelector('.weather_future--tomorrow-temperature');
  const tempAfterTomorrow = document.querySelector('.weather_future--after_tomorrow-temperature');
  const tempAfterAfterTomorrow = document.querySelector('.weather_future--after_after_tomorrow-temperature');

  tempNow.textContent = `${fahrenheitToCelsius(tempNow.textContent)}${String.fromCharCode(176)}`;
  tempApparent.textContent = `Feels like:  ${fahrenheitToCelsius(tempAfterAfterTomorrow.textContent)}${String.fromCharCode(176)}`;
  tempTomorrow.textContent = `${fahrenheitToCelsius(tempTomorrow.textContent)}${String.fromCharCode(176)}`;
  tempAfterTomorrow.textContent = `${fahrenheitToCelsius(tempAfterTomorrow.textContent)}${String.fromCharCode(176)}`;
  tempAfterAfterTomorrow.textContent = `${fahrenheitToCelsius(tempAfterAfterTomorrow.textContent)}${String.fromCharCode(176)}`;
}

export default setTemperatureAfterReload;
