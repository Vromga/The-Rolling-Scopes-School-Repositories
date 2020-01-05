import {cordPixel, DOM_ELEMENTS, tools} from "../../../configuration";
import getColorPicker from "../../../controller/getColorPicker";

const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');
const ctxTemp = DOM_ELEMENTS.tempCanvas.getContext('2d');

const LEFT_MOUSE_BUTTON = 1;
const RIGHT_MOUSE_BUTTON = 3;


function setPixel(x, y, e) {
  const virtualPixel = localStorage.getItem('virtualPixel');
  ctx.beginPath();
  if (tools.stroke === false) {
    if (tools.eraser === true) {
      ctx.clearRect(x, y, +virtualPixel, +virtualPixel);
    } else if (tools.pencil === true) {
      if (e.which === LEFT_MOUSE_BUTTON) {
        ctx.fillStyle = getColorPicker().primary;
      } else if (e.which === RIGHT_MOUSE_BUTTON) {
        ctx.fillStyle = getColorPicker().secondary;
      }
      ctx.fill();
      ctx.fillRect(x, y, +virtualPixel, +virtualPixel);
    }
    cordPixel.x0 = cordPixel.x1;
    cordPixel.y0 = cordPixel.y1;
  } else if (tools.stroke === true) {
    if (e.which === LEFT_MOUSE_BUTTON) {
      ctxTemp.fillStyle = getColorPicker().primary;
    } else if (e.which === RIGHT_MOUSE_BUTTON) {
      ctxTemp.fillStyle = getColorPicker().secondary;
    }
    ctxTemp.fill();
    ctxTemp.fillRect(x, y, +virtualPixel, +virtualPixel);
  }

}

export default setPixel;

