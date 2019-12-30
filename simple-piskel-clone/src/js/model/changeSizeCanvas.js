import setSizeCanvasAttribute from "../utilits/setSizeCanvasAttribute";
import setActiveElement from "../view/setActiveElement";
import saveStateApp from "./saveApp/saveStateApp";


function changeSizeCanvas(e) {
  const mainCanvas = document.querySelector('.main--draw_container-canvas');
  const layerCanvas = document.querySelector('.layer--canvas');
  const frameCanvas = document.querySelectorAll('.frame--preview-canvas');

  if (e.target.getAttribute('data') === '32') {
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
    setActiveElement(e);
    saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
  } else if (e.target.getAttribute('data') === '64') {
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
    setActiveElement(e);
    saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
  } else if (e.target.getAttribute('data') === '128') {
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
    setActiveElement(e);
    saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
  }
}

export default changeSizeCanvas;
