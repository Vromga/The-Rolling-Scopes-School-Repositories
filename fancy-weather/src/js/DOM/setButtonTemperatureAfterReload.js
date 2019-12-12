import {userOptions} from "../configuration";

function setButtonTemperatureAfterReload() {
  const buttonTemperature = document.querySelector('.header--switch');
  buttonTemperature.textContent = `${userOptions.temperatureScale}${String.fromCharCode(176)}`;
}

export default setButtonTemperatureAfterReload;
