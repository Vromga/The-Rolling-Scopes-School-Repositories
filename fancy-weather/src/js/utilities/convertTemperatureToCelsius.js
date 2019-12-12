import fahrenheitToCelsius from "./fahrenheitToCelsius";
import setLocalStorage from "./setLocalStorage";

const saveTemp = {
  tempNow: 0,
  tempApparentTemperature: 0,
};

function convertTemperatureToCelsius() {
  const tempNow = document.querySelector('.weather_today--temperature');
  const tempApparent = document.querySelector('.weather_today--option-feels_like');
  const buttonSwitch = document.querySelector('.header--switch');

  if (buttonSwitch.getAttribute('data') === 'F') {
    setLocalStorage(`temperatureScale`, 'C');
    saveTemp.tempNow = parseInt(tempNow.textContent, 10);
    saveTemp.tempApparentTemperature = parseInt(tempApparent.getAttribute('temperature'), 10);
    buttonSwitch.textContent = `C${String.fromCharCode(176)}`;
    buttonSwitch.setAttribute('data', 'C');
    tempNow.textContent = `${fahrenheitToCelsius(tempNow.textContent)}${String.fromCharCode(176)}`;
    tempApparent.textContent = `Feels like: ${fahrenheitToCelsius(tempApparent.getAttribute('temperature'))}${String.fromCharCode(176)}`;
  } else if (buttonSwitch.getAttribute('data') === 'C') {
    setLocalStorage(`temperatureScale`, 'F');
    buttonSwitch.textContent = `F${String.fromCharCode(176)}`;
    buttonSwitch.setAttribute('data', 'F');
    tempNow.textContent = `${saveTemp.tempNow}${String.fromCharCode(176)}`
    tempApparent.textContent = `Feels like: ${saveTemp.tempApparentTemperature}${String.fromCharCode(176)}`
  }
}

export default convertTemperatureToCelsius;
