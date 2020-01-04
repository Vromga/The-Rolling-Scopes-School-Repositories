import {frame as frameArr} from '../../configuration'

function setFrame() {
  const frame = document.querySelectorAll('.frame--preview-canvas');

  [...frame].forEach((v, i) => {
    if (v.getAttribute('data-active') === 'active') {
      const ctx = v.getContext('2d');
      const dataURL = localStorage.getItem('canvasImage');
      const img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.clearRect(0, 0, v.width, v.height);
        ctx.drawImage(img, 0, 0);
        localStorage.setItem('canvasImage', `${v.toDataURL()}`);
      };
      if (frameArr[i]) {
        frameArr[i] = dataURL;
      } else {
        frameArr.push(`${dataURL}`);
      }
    }
  });
}

export default setFrame;
