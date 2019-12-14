import {week} from "../configuration";

function translate() {
  if (localStorage.getItem('lang') === 'EN'){
    return week.EN;
  }else if (localStorage.getItem('lang') === 'RU'){
    return week.RU;
  }else if (localStorage.getItem('lang') === 'BE'){
    return week.BE;
  }
}

export default translate;
