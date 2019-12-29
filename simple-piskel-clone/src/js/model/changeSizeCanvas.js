import removeAttributeData from "../utilits/removeAttributeData";
import setSizeCanvasAttribute from "../utilits/setSizeCanvasAttribute";
import setActiveElement from "../view/setActiveElement";


function changeSizeCanvas(e) {
  const mainCanvas = document.querySelector('.main--draw_container-canvas');
  const layerCanvas = document.querySelector('.layer--canvas');
  const frameCanvas = document.querySelectorAll('.frame--preview-canvas');

  if (e.target.getAttribute('data') === '32') {
      removeAttributeData(mainCanvas);
      setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
      setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
      setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
      setActiveElement(e);
  }else if(e.target.getAttribute('data') === '64'){
    removeAttributeData(mainCanvas);
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
    setActiveElement(e);
  }else if (e.target.getAttribute('data') === '128'){
    removeAttributeData(mainCanvas);
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(layerCanvas, e.target.getAttribute('data'), false);
    setSizeCanvasAttribute(frameCanvas, e.target.getAttribute('data'), true);
    setActiveElement(e);

  }
}

export default changeSizeCanvas;
