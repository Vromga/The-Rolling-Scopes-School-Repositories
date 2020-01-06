import {DOM_ELEMENTS, noIMG} from "../../configuration";

function loadImageCanvas() {
  const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');
  const dataURL = localStorage.getItem('canvasImage');
  const img = new Image();
  img.src = dataURL || noIMG;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

export default loadImageCanvas;
