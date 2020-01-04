import {DOM_ELEMENTS, tools} from '../../../configuration';
import saveStateApp from "../../saveApp/saveStateApp";

function finishDraw() {
  if (tools.pencil === true || tools.eraser === true) {
    saveStateApp('canvasImage', DOM_ELEMENTS.mainCanvas.toDataURL());
    saveStateApp('isDraw', 'false');
  }
}

export default finishDraw;
