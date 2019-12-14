function setButtonTemperatureAfterReload() {
  const buttonTemperature = document.querySelector('.header--switch');
  buttonTemperature.textContent = `${localStorage.getItem('temperatureScale')}${String.fromCharCode(176)}`;
}

export default setButtonTemperatureAfterReload;
