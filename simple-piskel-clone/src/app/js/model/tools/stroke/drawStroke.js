import {cordPixel, DOM_ELEMENTS, realSizeCanvas} from "../../../configuration";
import algorithmBresenham from "../../../utilits/algorithmBresenham";



const ctx = DOM_ELEMENTS.tempCanvas.getContext('2d');

function drawStroke(e) {
  if (localStorage.getItem('isDraw') === 'true') {
    ctx.clearRect(0, 0, DOM_ELEMENTS.tempCanvas.width, DOM_ELEMENTS.tempCanvas.height);
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x1 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.tempCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y1 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.tempCanvas.height) / virtualPixel) * virtualPixel;
    algorithmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1, e);
  }
}

export default drawStroke;
