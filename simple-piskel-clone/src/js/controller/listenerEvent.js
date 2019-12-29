import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";
import startDraw from "../model/pencilAndEraserLogic/startDraw";
import draw from "../model/pencilAndEraserLogic/draw";
import finishDraw from "../model/pencilAndEraserLogic/finishDraw";

function listenerEvent() {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'resize') {
      changeSizeCanvas(e);
    } else if (e.target.getAttribute('data') === 'tools') {
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
  document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
  })
}

export default listenerEvent;
