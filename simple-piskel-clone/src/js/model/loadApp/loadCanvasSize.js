import setSizeCanvasAttribute from "../../utilits/setSizeCanvasAttribute";

function loadCanvasSize() {
  const sizeCanvas = localStorage.getItem('sizeCanvas');
  const resize = document.querySelectorAll('.resize');
  const mainCanvas = document.querySelector('.main--draw_container-canvas');
  const layerCanvas = document.querySelector('.layer--canvas');
  const frameCanvas = document.querySelectorAll('.frame--preview-canvas');

  setSizeCanvasAttribute(mainCanvas, sizeCanvas, false);
  setSizeCanvasAttribute(layerCanvas, sizeCanvas, false);
  setSizeCanvasAttribute(frameCanvas, sizeCanvas, true);

  [...resize].forEach((v) => {
      if (v.getAttribute('data') === sizeCanvas) v.classList.add('active_element');
    });
}

export default loadCanvasSize;
