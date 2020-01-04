import loadImageCanvas from "../model/loadApp/loadImageCanvas";
import loadTools from "../model/loadApp/loadTools";
import loadCanvasSize from "../model/loadApp/loadCanvasSize";
import loadSizePen from "../model/loadApp/loadSizePen";
import loadColor from "../model/loadApp/loadColor";
import setEditableImage from "../model/setFrame/setEditableImage";
import loadFrames from "../model/loadApp/loadFrames";
import setClassAndAttributeActiveElement from "../utilits/setClassAndAttributeActiveElement";
import loadFPS from "../model/loadApp/loadFPS";

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
      setClassAndAttributeActiveElement(e, true);
      setEditableImage(e);
    }
  } else {
    loadImageCanvas();
    loadTools();
    loadCanvasSize();
    loadSizePen();
    loadColor();
    loadFrames();
    loadFPS();
  }
}

export default setActiveElement;
