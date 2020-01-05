import {DOM_ELEMENTS, tools} from "../../../configuration";
import saveStateApp from "../../saveApp/saveStateApp";
import updateCanvasAfterStoke from "../../../utilits/updateCanvasAfterStoke";

function finishDrawStroke() {
  if (tools.stroke === true) {
    saveStateApp('canvasImage', DOM_ELEMENTS.mainCanvas.toDataURL());
    saveStateApp('isDraw', 'false');
    updateCanvasAfterStoke();
  }
}

export default finishDrawStroke;
