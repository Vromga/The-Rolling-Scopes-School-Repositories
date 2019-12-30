import {tools} from '../../configuration';
import saveStateApp from "../saveApp/saveStateApp";

function finishDraw() {
  const canvas = document.querySelector('.main--draw_container-canvas');
  if (tools.pencil === true || tools.eraser === true) {
    saveStateApp('canvasImage', canvas.toDataURL());
    saveStateApp('isDraw', 'false');
  }
}

export default finishDraw;
