import {cordPixel, DOM_ELEMENTS, realSizeCanvas} from "../../../configuration";
import algorithmBresenham from "../../../utilits/algorithmBresenham";

function draw(e) {
  if (localStorage.getItem('isDraw') === 'true') {
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x1 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y1 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
    algorithmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1, e);
  }
}

export default draw;
