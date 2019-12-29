import {canvasSize} from "../configuration";

function setSizeCanvasAttribute(elem, attr) {
  elem.setAttribute('width', `${canvasSize[attr]}`);
  elem.setAttribute('height', `${canvasSize[attr]}`);
}

export default setSizeCanvasAttribute;
