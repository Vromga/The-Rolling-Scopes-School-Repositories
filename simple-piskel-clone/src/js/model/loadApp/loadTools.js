import resetToolsState from "../../utilits/resetToolsState";
import {tools} from "../../configuration";
import toggleActiveClass from "../../utilits/toggleActiveClass";

function loadTools() {
  const toolsJSON = JSON.parse(localStorage.getItem('tools')) || tools;
  resetToolsState();
  if(!toolsJSON) return;
  tools.fillBucket = toolsJSON.fillBucket;
  tools.eraser = toolsJSON.eraser;
  tools.pencil = toolsJSON.pencil;
  tools.stroke = toolsJSON.stroke;
  toggleActiveClass();
}

export default loadTools;
