import {cordPixel, tools} from "../../configuration";
import getColorPicker from "../../controller/getColorPicker";

const canvas = document.querySelector('.main--draw_container-canvas');
const ctx = canvas.getContext('2d');

const LEFT_MOUSE_BUTTON = 1;
const RIGHT_MOUSE_BUTTON = 3;


function setPixel(x, y, e) {
  const virtualPixel = localStorage.getItem('virtualPixel');
  ctx.beginPath();
  if (tools.eraser === true) {
    ctx.fillStyle = `rgba(0, 0, 0, 0)`;
  } else if (tools.pencil === true) {
    if (e.which === LEFT_MOUSE_BUTTON) {
      ctx.fillStyle = getColorPicker().primary;
    } else if (e.which === RIGHT_MOUSE_BUTTON) {
      ctx.fillStyle = getColorPicker().secondary;
    }
  }

  ctx.fill();
  ctx.fillRect(x, y, +virtualPixel, +virtualPixel);
  cordPixel.x0 = cordPixel.x1;
  cordPixel.y0 = cordPixel.y1;
}

export default setPixel;

