import {userOptions, UI} from "../configuration";

function translateUI() {
  if (localStorage.getItem('lang') === 'EN'){
    return UI.EN;
  }else if (localStorage.getItem('lang') === 'RU'){
    return UI.RU;
  }else if (localStorage.getItem('lang') === 'BE'){
    return UI.BE;
  }
}

export default translateUI;
