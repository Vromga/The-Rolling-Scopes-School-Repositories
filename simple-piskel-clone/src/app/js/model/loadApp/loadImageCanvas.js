import {noIMG} from "../../configuration";

function loadImageCanvas() {
  const canvas = document.querySelector('.main--draw_container-canvas');
  const ctx = canvas.getContext('2d');
  const dataURL = localStorage.getItem('canvasImage');
  const img = new Image();
  img.src = dataURL || noIMG;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

export default loadImageCanvas;
