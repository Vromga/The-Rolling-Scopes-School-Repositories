import setActiveElement from "../../view/setActiveElement";

function setConfAfterReload() {
  localStorage.setItem('isDraw', 'false');
  if (!localStorage.getItem('virtualPixel')) localStorage.setItem('virtualPixel', '1');
  if (!localStorage.getItem('sizeCanvas')) localStorage.setItem('sizeCanvas', '32');

  setActiveElement();
}

export default setConfAfterReload;
