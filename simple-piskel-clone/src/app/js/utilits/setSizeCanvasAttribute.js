import {canvasSize} from "../configuration";

function setSizeCanvasAttribute(elem, attr, collection) {
  if (collection) {
    elem.forEach((v) => {
      v.setAttribute('width', `${canvasSize[attr]}`);
      v.setAttribute('height', `${canvasSize[attr]}`);
    })
  } else {
    elem.setAttribute('width', `${canvasSize[attr]}`);
    elem.setAttribute('height', `${canvasSize[attr]}`);
  }
}

export default setSizeCanvasAttribute;
