import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";
import startDraw from "../model/tools/pencilAndEraserLogic/startDraw";
import draw from "../model/tools/pencilAndEraserLogic/draw";
import finishDraw from "../model/tools/pencilAndEraserLogic/finishDraw";
import chooseTools from "./chooseTools";
import saveColor from "../model/saveApp/saveColor";
import setOnePixel from "../model/tools/pencilAndEraserLogic/setOnePixel";
import {tools} from "../configuration";
import bucket from "../model/tools/bucketLogic/bucket";
import setFrame from "../model/setFrame/setFrame";
import addNewFrame from "../model/editingFrame/addNewFrame";
import copyFrame from "../model/editingFrame/copyFrame";
import deleteFrame from "../model/editingFrame/deleteFrame";
import saveFrame from "../model/saveApp/saveFrame";
import saveStateApp from "../model/saveApp/saveStateApp";
import dragAndDrop from "../model/dragAndDrop/dragAndDrop";
import startDrawStroke from "../model/tools/stroke/startDrawStroke";
import finishDrawStroke from "../model/tools/stroke/finishDrawStroke";
import drawStroke from "../model/tools/stroke/drawStroke";
import animationFrame from "../model/animation/animationFrame";
import setFPS from "../view/setFPS";
import saveFPS from "../model/saveApp/saveFPS";
import getFullScreenMode from "./getFullScreenMode";

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
      copyFrame(e);
    } else if (e.target.className === 'frame--preview-del') {
      deleteFrame(e.target);
    }
    if (e.target.className === 'layer--button') {
      getFullScreenMode();
    }
  });
  document.addEventListener('mousedown', (e) => {
    if (e.target.className === 'main--draw_container-canvas') {
      startDraw(e);
      startDrawStroke(e);
    }

    if (document.elementFromPoint(e.clientX, e.clientY).closest('.frame')) {
      dragAndDrop(e);
    }
  });
  document.addEventListener('mousemove', (e) => {
    if (e.target.className === 'main--draw_container-canvas') {
      if (tools.pencil || tools.eraser) {
        draw(e);
      } else if (tools.stroke) {
        drawStroke(e);
      }
    } else saveStateApp('isDraw', 'false');
  });
  document.addEventListener('mouseup', (e) => {
  	if(tools.pencil || tools.eraser){
    finishDraw();
	}
  	if(tools.stroke){
  		finishDrawStroke();
	}
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
    saveFPS();
  });

  document.addEventListener('dragstart', () => {
    return false
  });

  document.addEventListener('change', () => {
    setFPS();
    animationFrame();
  })
}

export default listenerEvent;
