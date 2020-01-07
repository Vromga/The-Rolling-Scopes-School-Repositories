import {cordPixel, DOM_ELEMENTS, realSizeCanvas, imgForStroke, tools} from "../../../configuration";

function startDrawStroke(e) {
  if(tools.stroke === true && e.target.className === 'main--draw_container-canvas'){
    localStorage.setItem('isDraw', 'true');
    const virtualPixel = localStorage.getItem('virtualPixel');
    imgForStroke.stroke = DOM_ELEMENTS.mainCanvas.getContext('2d').getImageData(0,0, DOM_ELEMENTS.mainCanvas.width, DOM_ELEMENTS.mainCanvas.height);
    cordPixel.x0 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y0 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
  }
}

export default startDrawStroke;
