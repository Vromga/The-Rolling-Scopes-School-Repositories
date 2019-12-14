import setTemperatureAfterReload from "./setTemperatureAfterReload";

function setAttributeButtonTemp (){
  if (localStorage.getItem('temperatureScale') === 'F'){
    return;
  }
  const buttonTemp = document.querySelector('.header--switch');

  buttonTemp.setAttribute('data', `${localStorage.getItem('temperatureScale')}`);
  setTemperatureAfterReload();
}

export default setAttributeButtonTemp;
