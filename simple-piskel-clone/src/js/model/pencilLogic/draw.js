import {cordPixel, realSizeCanvas} from "../../configuration";
import algorithmBresenham from "../../utilits/algorithmBresenham";

const canvas = document.querySelector('.main--draw_container-canvas');


function draw(e) {
  if (localStorage.getItem('isDraw') === 'true') {
    const virtualPixel = localStorage.getItem('virtualPixel');
    cordPixel.x1 = Math.floor(e.offsetX / (realSizeCanvas / canvas.width) / virtualPixel) * virtualPixel;
    cordPixel.y1 = Math.floor(e.offsetY / (realSizeCanvas / canvas.height) / virtualPixel) * virtualPixel;
    algorithmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1);
  }
}

export default draw;
