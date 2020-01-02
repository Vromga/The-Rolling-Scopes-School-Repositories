import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";
import startDraw from "../model/pencilAndEraserLogic/startDraw";
import draw from "../model/pencilAndEraserLogic/draw";
import finishDraw from "../model/pencilAndEraserLogic/finishDraw";
import chooseTools from "./chooseTools";
import saveColor from "../model/saveApp/saveColor";
import setOnePixel from "../model/pencilAndEraserLogic/setOnePixel";
import {tools} from "../configuration";
import bucket from "../model/bucketLogic/bucket";
import setFrame from "../model/setFrame/setFrame";
import animationFrame from "../model/animation/animationFrame";
import addNewFrame from "../model/editingFrame/addNewFrame";
import copyFrame from "../model/editingFrame/copyFrame";
import deleteFrame from "../model/editingFrame/deleteFrame";
import saveFrame from "../model/saveApp/saveFrame";

function listenerEvent() {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'resize') {
      changeSizeCanvas(e);
    } else if (e.target.getAttribute('data') === 'tools') {
      chooseTools(e);
      setClassActiveElement(e);
    } else if (e.target.type === 'radio') {
      localStorage.setItem('virtualPixel', `${e.target.value}`);
    } else if (e.target.className === 'main--draw_container-canvas') {
      if (tools.pencil || tools.eraser) {
        setOnePixel(e);
      } else if (tools.fillBucket) {
        bucket(e);
      }
    } else if (e.target.className === 'frame--preview-canvas') {
      setClassActiveElement(e);
    } else if (e.target.className === 'main--frame-add') {
      addNewFrame();
    } else if (e.target.className === 'frame--preview-copy') {
      copyFrame(e.target);
    } else if (e.target.className === 'frame--preview-del'){
      deleteFrame(e.target);
    }
  });
  document.addEventListener('mousedown', (e) => {
    startDraw(e)
  });
  document.addEventListener('mousemove', (e) => {
    draw(e)
  });
  document.addEventListener('mouseup', (e) => {
    finishDraw();
    if (e.target.className === 'main--draw_container-canvas') {
      setFrame();
      animationFrame();
    }

  });
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  window.addEventListener('unload', () => {
    saveColor();
    saveFrame();
  })
}

export default listenerEvent;
