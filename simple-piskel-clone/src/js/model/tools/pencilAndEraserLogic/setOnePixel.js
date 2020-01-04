import {cordPixel, DOM_ELEMENTS, realSizeCanvas, tools} from "../../../configuration";
import getColorPicker from "../../../controller/getColorPicker";

const LEFT_MOUSE_BUTTON = 1;
const RIGHT_MOUSE_BUTTON = 3;


function setOnePixel(e) {
  if (tools.pencil === true && e.target.className === 'main--draw_container-canvas' || tools.eraser === true && e.target.className === 'main--draw_container-canvas') {
    const canvas = document.querySelector('.main--draw_container-canvas');
    const ctx = canvas.getContext('2d');

    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x0 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y0 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;

    if (tools.eraser === true) {
      ctx.clearRect(cordPixel.x0, cordPixel.y0, +virtualPixel, +virtualPixel);
    } else if (tools.pencil === true) {
      if (e.which === LEFT_MOUSE_BUTTON) {
        ctx.fillStyle = getColorPicker().primary;
      } else if (e.which === RIGHT_MOUSE_BUTTON) {
        ctx.fillStyle = getColorPicker().secondary;
      }
      ctx.fill();
      ctx.fillRect(cordPixel.x0, cordPixel.y0, +virtualPixel, +virtualPixel);
    }
  }
}

export default setOnePixel;
