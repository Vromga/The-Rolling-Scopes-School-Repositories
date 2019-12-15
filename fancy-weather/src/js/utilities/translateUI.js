import {UI} from "../configuration";

function translateUI() {
  if (localStorage.getItem('lang') === 'EN'){
    return UI.EN;
  }if (localStorage.getItem('lang') === 'RU'){
    return UI.RU;
  }if (localStorage.getItem('lang') === 'BE'){
    return UI.BE;
  }
}

export default translateUI;
