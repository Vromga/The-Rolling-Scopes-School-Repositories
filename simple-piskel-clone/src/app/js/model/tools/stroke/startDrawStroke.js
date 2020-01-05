import {cordPixel, DOM_ELEMENTS, realSizeCanvas, styleZIndex, tools} from "../../../configuration";

function startDrawStroke(e) {
  if(tools.stroke === true && e.target.className === 'main--draw_container-canvas' || e.target.className === 'main--draw_container-canvas_temp'){
    localStorage.setItem('isDraw', 'true');
    DOM_ELEMENTS.tempCanvas.style.zIndex = styleZIndex.zIndexStartDrawStroke;
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x0 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y0 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
  }
}

export default startDrawStroke;
