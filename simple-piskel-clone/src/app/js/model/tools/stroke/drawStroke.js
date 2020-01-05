import {cordPixel, DOM_ELEMENTS, realSizeCanvas} from "../../../configuration";
import algorithmBresenham from "../../../utilits/algorithmBresenham";


const dataURL = localStorage.getItem('canvasImage');
const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');

function drawStroke(e) {
  if (localStorage.getItem('isDraw') === 'true') {
    ctx.clearRect(0, 0, DOM_ELEMENTS.mainCanvas.width, DOM_ELEMENTS.mainCanvas.height);
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x1 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y1 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
    algorithmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1, e);
  }
}

export default drawStroke;
