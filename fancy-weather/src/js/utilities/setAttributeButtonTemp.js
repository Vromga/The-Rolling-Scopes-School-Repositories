import {userOptions} from "../configuration";
import setTemperatureAfterReload from "./setTemperatureAfterReload";

function setAttributeButtonTemp (){
  if (localStorage.getItem('temperatureScale') === 'F'){
    return;
  }
  const buttonTemp = document.querySelector('.header--switch');

  buttonTemp.setAttribute('data', `${userOptions.temperatureScale}`);
  setTemperatureAfterReload();
}

export default setAttributeButtonTemp;
