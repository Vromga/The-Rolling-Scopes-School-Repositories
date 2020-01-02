function setEditableImage(e) {
  const canvas = document.querySelector('.main--draw_container-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.src = e.target.toDataURL();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };

}

export default setEditableImage;
