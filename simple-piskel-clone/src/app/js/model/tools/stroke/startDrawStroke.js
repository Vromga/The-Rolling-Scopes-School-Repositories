import {cordPixel, DOM_ELEMENTS, realSizeCanvas, tools} from "../../../configuration";

function startDrawStroke(e) {
  if(tools.stroke === true && e.target.className === 'main--draw_container-canvas'){
    localStorage.setItem('isDraw', 'true');
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x0 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y0 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
  }
}

export default startDrawStroke;
