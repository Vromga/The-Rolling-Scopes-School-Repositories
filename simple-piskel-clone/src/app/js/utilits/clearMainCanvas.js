import {DOM_ELEMENTS} from "../configuration";

function clearMainCanvas() {
  DOM_ELEMENTS.mainCanvas.getContext('2d').clearRect(0, 0, DOM_ELEMENTS.mainCanvas.width, DOM_ELEMENTS.mainCanvas.height);
}

export default clearMainCanvas;
