import addNewFrame from "../editingFrame/addNewFrame";
import {frame, noIMG} from "../../configuration";

function loadFrames() {

  if (JSON.parse(localStorage.getItem('frame')) <= 1) {
    addNewFrame();
    document.querySelector('.frame--preview').classList.add('active_element');
    document.querySelector('.frame--preview-canvas').setAttribute('data-active', 'active');
  }

  const JSONFrame = JSON.parse(localStorage.getItem('frame')) || [];
  JSONFrame.forEach((v)=>{
    frame.push(v);
  });
  frame.forEach(()=> addNewFrame());
  const framePreview = document.querySelectorAll('.frame--preview-canvas');
  [...framePreview].forEach((v, i) => {
    const ctx = v.getContext('2d');
    const img = new Image();
    img.src = frame[i] || noIMG;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  });
}

export default loadFrames;
