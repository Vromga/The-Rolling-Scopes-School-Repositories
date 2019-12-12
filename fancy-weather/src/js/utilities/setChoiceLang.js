import {userOptions} from "../configuration";

function setChoiceLang() {
  const optionLang = document.querySelectorAll('.header--select-option');
     optionLang.forEach(item => {
       console.log(item.value);
    if (item.value === userOptions.lang) item.defaultSelected = true;
  })
}

export default setChoiceLang;
