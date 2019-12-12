import {userOptions} from "../configuration";

function getLocalStorage() {
  userOptions.lang = localStorage.getItem('lang');
  userOptions.temperatureScale = localStorage.getItem('temperatureScale');
}

export default getLocalStorage;
