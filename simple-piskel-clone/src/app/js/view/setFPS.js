import getFPS from "../controller/getFPS";

function setFps() {
  document.querySelector('.fps_block--fps').textContent = getFPS();
}

export default setFps;
