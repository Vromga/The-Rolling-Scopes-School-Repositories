import fahrenheitToCelsius from "./fahrenheitToCelsius";
import setLocalStorage from "./setLocalStorage";
import translateUI from "./translateUI";

function convertTemperatureToCelsius() {
  const tempNow = document.querySelector('.weather_today--temperature');
  const tempApparent = document.querySelector('.weather_today--option-feels_like');
  const tempTomorrow = document.querySelector('.weather_future--tomorrow-temperature');
  const tempAfterTomorrow = document.querySelector('.weather_future--after_tomorrow-temperature');
  const tempAfterAfterTomorrow = document.querySelector('.weather_future--after_after_tomorrow-temperature');
  const buttonSwitch = document.querySelector('.header--switch');

  if (buttonSwitch.getAttribute('data') === 'F') {
    setLocalStorage(`temperatureScale`, 'C');
    buttonSwitch.textContent = `C${String.fromCharCode(176)}`;
    buttonSwitch.setAttribute('data', 'C');
    tempNow.textContent = `${fahrenheitToCelsius(tempNow.getAttribute('temperature'))}${String.fromCharCode(176)}`;
    tempApparent.textContent = `${translateUI()[0]} ${fahrenheitToCelsius(tempApparent.getAttribute('temperature'))}${String.fromCharCode(176)}`;
    tempTomorrow.textContent = `${fahrenheitToCelsius(tempTomorrow.getAttribute('temperature'))}${String.fromCharCode(176)}`
    tempAfterTomorrow.textContent = `${fahrenheitToCelsius(tempAfterTomorrow.getAttribute('temperature'))}${String.fromCharCode(176)}`
    tempAfterAfterTomorrow.textContent = `${fahrenheitToCelsius(tempAfterAfterTomorrow.getAttribute('temperature'))}${String.fromCharCode(176)}`

  } else if (buttonSwitch.getAttribute('data') === 'C') {
    setLocalStorage(`temperatureScale`, 'F');
    buttonSwitch.textContent = `F${String.fromCharCode(176)}`;
    buttonSwitch.setAttribute('data', 'F');
    tempNow.textContent = `${tempNow.getAttribute('temperature')}${String.fromCharCode(176)}`;
    tempApparent.textContent = `${translateUI()[0]} ${tempApparent.getAttribute('temperature')}${String.fromCharCode(176)}`;
    tempTomorrow.textContent = `${tempTomorrow.getAttribute('temperature')}${String.fromCharCode(176)}`;
    tempAfterTomorrow.textContent = `${tempAfterTomorrow.getAttribute('temperature')}${String.fromCharCode(176)}`;
    tempAfterAfterTomorrow.textContent = `${tempAfterAfterTomorrow.getAttribute('temperature')}${String.fromCharCode(176)}`;

  }
}

export default convertTemperatureToCelsius;
