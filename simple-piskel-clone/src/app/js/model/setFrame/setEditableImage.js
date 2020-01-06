import clearMainCanvas from "../../utilits/clearMainCanvas";
import {DOM_ELEMENTS} from "../../configuration";

function setEditableImage(e) {
  clearMainCanvas();
  const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');
  const img = new Image();
  img.src = e.target.toDataURL();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
}

export default setEditableImage;
