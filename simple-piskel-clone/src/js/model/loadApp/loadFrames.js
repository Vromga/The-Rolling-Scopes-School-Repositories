import addNewFrame from "../editingFrame/addNewFrame";

function loadFrames() {

  if (JSON.parse(localStorage.getItem('frame')) <= 1) {
    addNewFrame();
    document.querySelector('.frame--preview').classList.add('active_element');
    document.querySelector('.frame--preview-canvas').setAttribute('data-active', 'active');
  }
  const frame = JSON.parse(localStorage.getItem('frame'));
  frame.forEach(()=> addNewFrame());
  const framePreview = document.querySelectorAll('.frame--preview-canvas');
  [...framePreview].forEach((v, i) => {
    const ctx = v.getContext('2d');
    const img = new Image();
    img.src = frame[i];
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  });
}

export default loadFrames;
