import {userOptions, week} from "../configuration";

function translate() {
  if (userOptions.lang === 'EN'){
    return week.EN;
  }else if (userOptions.lang === 'RU'){
    return week.RU;
  }else if (userOptions.lang === 'BE'){
    return week.BE;
  }
}

export default translate;
