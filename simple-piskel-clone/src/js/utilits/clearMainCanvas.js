function clearMainCanvas() {
  const canvas = document.querySelector('.main--draw_container-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export default clearMainCanvas;
