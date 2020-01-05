import countFrame from "./countFrame";
import setClassAndAttributeActiveElement from "../../utilits/setClassAndAttributeActiveElement";
import clearMainCanvas from "../../utilits/clearMainCanvas";

function addNewFrame() {
  const newFrame = `<li class="frame_container--list frame" draggable="true">
                <div class="frame--preview">
                    <canvas class="frame--preview-canvas" width="${localStorage.getItem('sizeCanvas')}" height="${localStorage.getItem('sizeCanvas')}"></canvas>
                    <span class="frame--preview-number">1</span>
                    <button class="frame--preview-del"></button>
                    <button class="frame--preview-move"></button>
                    <button class="frame--preview-copy"></button>
                </div>
            </li>`;
  document.querySelector('.main--frame-lists').insertAdjacentHTML('beforeend', newFrame);
  countFrame();
  setClassAndAttributeActiveElement(null, false);
  clearMainCanvas();
}

export default addNewFrame;
