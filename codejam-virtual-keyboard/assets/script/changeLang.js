import createKey from './createKey.js';
import keyboardLayout from './keysSetting.js';

const ruLayout = keyboardLayout.ru.flat();
const enLayout = keyboardLayout.en.flat();
let langLayout = (localStorage.length === 0) ? localStorage.setItem('langLayout', 'en') : localStorage.getItem('langLayout');

function changeLang() {
  if (langLayout === 'en') {
    createKey(enLayout);
    langLayout = 'ru';
    localStorage.setItem('langLayout', 'en');
  } else {
    createKey(ruLayout);
    langLayout = 'en';
    localStorage.setItem('langLayout', 'ru');
  }
}

export default changeLang;
