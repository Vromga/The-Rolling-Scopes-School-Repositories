import {tools} from '../../configuration';

function finishDraw() {
  if (tools.pencil === true || tools.eraser === true) {
    localStorage.setItem('isDraw', 'false');
  }
}

export default finishDraw;
