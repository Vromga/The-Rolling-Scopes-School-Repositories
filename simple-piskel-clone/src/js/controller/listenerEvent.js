import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";
import startDraw from "../model/pencilAndEraserLogic/startDraw";
import draw from "../model/pencilAndEraserLogic/draw";
import finishDraw from "../model/pencilAndEraserLogic/finishDraw";
import chooseTools from "./chooseTools";
import saveColor from "../model/saveApp/saveColor";

function listenerEvent() {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'resize') {
      changeSizeCanvas(e);
    } else if (e.target.getAttribute('data') === 'tools') {
      chooseTools(e);
      setClassActiveElement(e);
    } else if (e.target.type === 'radio') {
      localStorage.setItem('virtualPixel', `${e.target.value}`);
    }
  });
  document.addEventListener('mousedown', (e) => {
    startDraw(e)
  });
  document.addEventListener('mousemove', (e) => {
    draw(e)
  });
  document.addEventListener('mouseup', () => {
    finishDraw();
  });
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  window.addEventListener('unload', () => {
    saveColor();
  })
}

export default listenerEvent;
