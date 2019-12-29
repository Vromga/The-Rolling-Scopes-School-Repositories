function setLocalStorage() {
  localStorage.setItem('isDraw', 'false');
  if (!localStorage.getItem('virtualPixel')) localStorage.setItem('virtualPixel', '1');
}

export default setLocalStorage;
