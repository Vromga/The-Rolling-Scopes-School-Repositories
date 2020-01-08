import '../css/style.css';
import '../css/style.scss';
import 'normalize.css';

import setConfAfterReload from "./model/loadApp/setConfAfterReload";
import listenerEvent from "./controller/listenerEvent";



setConfAfterReload();

function init() {
  listenerEvent();
}

init();


