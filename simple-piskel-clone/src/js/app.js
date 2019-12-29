import '../css/style.css';
import '../css/style.scss';
import 'normalize.css';

import setLocalStorage from "./utilits/setLocalStorage";
import listenerEvent from "./controller/listenerEvent";


setLocalStorage();
function init() {
  listenerEvent();
}

init();
