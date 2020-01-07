import resetToolsState from "../../utilits/resetToolsState";
import {tools} from "../../configuration";
import toggleActiveClass from "../../utilits/toggleActiveClass";

function loadTools() {
  const toolsJSON = JSON.parse(localStorage.getItem('tools')) || tools;
  resetToolsState();
  if(!toolsJSON) return;
  tools.fillAllPixels = toolsJSON.fillAllPixels;
  tools.eraser = toolsJSON.eraser;
  tools.pencil = toolsJSON.pencil;
  tools.stroke = toolsJSON.stroke;
  tools.colorPicker = toolsJSON.colorPicker;
  toggleActiveClass();
}

export default loadTools;
