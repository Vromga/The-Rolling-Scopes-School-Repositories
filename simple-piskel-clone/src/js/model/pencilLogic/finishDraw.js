import {tools} from '../../configuration';

function finishDraw() {
  if (tools.pencil === true) {
    localStorage.setItem('isDraw', 'false');
  }
}

export default finishDraw;
