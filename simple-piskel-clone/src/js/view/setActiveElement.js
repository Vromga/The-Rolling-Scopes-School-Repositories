import loadImageCanvas from "../model/loadApp/loadImageCanvas";
import loadTools from "../model/loadApp/loadTools";
import loadCanvasSize from "../model/loadApp/loadCanvasSize";
import loadSizePen from "../model/loadApp/loadSizePen";
import loadColor from "../model/loadApp/loadColor";
import setFrame from "../model/setFrame/setFrame";
import setEditableImage from "../model/setFrame/setEditableImage";

function setActiveElement(e) {
  if (e) {
    if (e.target.className === 'resize') {
      const resize = document.querySelectorAll('.resize');
      [...resize].forEach((v) => v.classList.remove('active_element'));
      e.target.classList.add('active_element');
    } else if (e.target.getAttribute('data') === 'tools') {
      const tools = document.querySelectorAll('.tools');
      [...tools].forEach((v) => v.classList.remove('active_element'));
      e.target.classList.add('active_element');
    } else if (e.target.className === 'frame--preview-canvas') {
      const frame = document.querySelectorAll('.frame--preview');
      const canvasPreview = document.querySelectorAll('.frame--preview-canvas');
      [...canvasPreview].forEach((v)=>v.removeAttribute('data-active'));
      [...frame].forEach((v) => v.classList.remove('active_element'));
      e.target.parentElement.classList.add('active_element');
      e.target.setAttribute('data-active', 'active');
      setEditableImage(e);
    }
  } else {
    loadImageCanvas();
    loadTools();
    loadCanvasSize();
    loadSizePen();
    loadColor();
    setFrame();
  }
}

export default setActiveElement;
