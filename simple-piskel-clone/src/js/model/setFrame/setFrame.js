function setFrame() {
  const frame = document.querySelectorAll('.frame--preview-canvas');

  [...frame].forEach((v) => {
    if (v.getAttribute('data-active') === 'active') {
      const ctx = v.getContext('2d');
      const dataURL = localStorage.getItem('canvasImage');
      const img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  });
}

export default setFrame;
