import removeAttributeData from "../utilits/removeAttributeData";
import setSizeCanvasAttribute from "../utilits/setSizeCanvasAttribute";
import setActiveElement from "../view/setActiveElement";


function changeSizeCanvas(e) {
  const mainCanvas = document.querySelector('.main--draw_container-canvas');
  if (e.target.getAttribute('data') === '32') {
      removeAttributeData(mainCanvas);
      setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'));
      setActiveElement(e);
  }else if(e.target.getAttribute('data') === '64'){
    removeAttributeData(mainCanvas);
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'));
    setActiveElement(e);
  }else if (e.target.getAttribute('data') === '128'){
    removeAttributeData(mainCanvas);
    setSizeCanvasAttribute(mainCanvas, e.target.getAttribute('data'));
    setActiveElement(e);
  }
}

export default changeSizeCanvas;
