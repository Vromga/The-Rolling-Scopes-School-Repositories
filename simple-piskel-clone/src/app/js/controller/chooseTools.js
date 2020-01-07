import {tools} from "../configuration";
import resetToolsState from "../utilits/resetToolsState";
import saveStateApp from "../model/saveApp/saveStateApp";


function chooseTools(e) {
  resetToolsState();
  if (e.target.classList.contains('main--tools-pen')) tools.pencil = true;
  if (e.target.classList.contains('main--tools-paint_bucket')) tools.fillAllPixels = true;
  if (e.target.classList.contains('main--tools-eraser')) tools.eraser = true;
  if (e.target.classList.contains('main--tools-stroke')) tools.stroke = true;
  if (e.target.classList.contains('main--tools-color_picker')) tools.colorPicker = true;
  const jsonTools = JSON.stringify(tools);
  saveStateApp('tools', jsonTools);
}

export default chooseTools;
