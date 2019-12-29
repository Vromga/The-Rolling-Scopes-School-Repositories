import {cordPixel} from "../../configuration";

const canvas = document.querySelector('.main--draw_container-canvas');
const ctx = canvas.getContext('2d');


function setPixel(x, y) {
  const virtualPixel = localStorage.getItem('virtualPixel');
  ctx.beginPath();
  ctx.fillStyle = `#000000`;
  ctx.fill();
  ctx.fillRect(x, y, +virtualPixel, +virtualPixel);
  cordPixel.x0 = cordPixel.x1;
  cordPixel.y0 = cordPixel.y1;
}

export default setPixel;

