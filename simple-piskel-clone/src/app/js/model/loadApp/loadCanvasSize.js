import setSizeCanvasAttribute from "../../utilits/setSizeCanvasAttribute";
import {DOM_ELEMENTS} from "../../configuration";

function loadCanvasSize() {
  const sizeCanvas = localStorage.getItem('sizeCanvas');
  const resize = document.querySelectorAll('.resize');

  setSizeCanvasAttribute(DOM_ELEMENTS.mainCanvas, sizeCanvas, false);
  setSizeCanvasAttribute(DOM_ELEMENTS.animateCanvas, sizeCanvas, false);
  setSizeCanvasAttribute(DOM_ELEMENTS.tempCanvas, sizeCanvas, false);
  setSizeCanvasAttribute(DOM_ELEMENTS.frameCanvas, sizeCanvas, true);

  [...resize].forEach((v) => {
      if (v.getAttribute('data') === sizeCanvas) v.classList.add('active_element');
    });
}

export default loadCanvasSize;
