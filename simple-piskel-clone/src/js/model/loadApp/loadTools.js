import resetToolsState from "../../utilits/resetToolsState";
import {tools} from "../../configuration";
import toggleActiveClass from "../../utilits/toggleActiveClass";

function loadTools() {
  const toolsJSON = JSON.parse(localStorage.getItem('tools')) || tools;
  resetToolsState();
  if(!toolsJSON) return;
  tools.fillBucket = toolsJSON.fillBucket || false;
  tools.eraser = toolsJSON.eraser || false;
  tools.pencil = toolsJSON.pencil || true;
  tools.stroke = toolsJSON.stroke || false;
  toggleActiveClass();
}

export default loadTools;
