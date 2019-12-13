import {userOptions, UI} from "../configuration";

function translateUI() {
  if (userOptions.lang === 'EN'){
    return UI.EN;
  }else if (userOptions.lang === 'RU'){
    return UI.RU;
  }else if (userOptions.lang === 'BE'){
    return UI.BE;
  }
}

export default translateUI;
