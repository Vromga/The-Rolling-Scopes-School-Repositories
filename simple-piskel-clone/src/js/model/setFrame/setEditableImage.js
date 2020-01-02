import clearMainCanvas from "../../utilits/clearMainCanvas";

function setEditableImage(e) {
  clearMainCanvas();
  const ctx = document.querySelector('.main--draw_container-canvas').canvas.getContext('2d');
  const img = new Image();
  img.src = e.target.toDataURL();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };

}

export default setEditableImage;
