import {cordPixel, realSizeCanvas, tools} from "../../configuration";

const canvas = document.querySelector('.main--draw_container-canvas');

function startDraw(e) {
  if (tools.pencil === true && e.target.className === 'main--draw_container-canvas') {
    localStorage.setItem('isDraw', 'true');
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x0 = Math.floor(e.offsetX / (realSizeCanvas / canvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y0 = Math.floor(e.offsetY / (realSizeCanvas / canvas.height) / virtualPixel) * virtualPixel;
  }
}

export default startDraw;
