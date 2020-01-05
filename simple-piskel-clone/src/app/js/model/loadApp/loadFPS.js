function loadFPS() {
  document.querySelector('.fps_block--input').value = `${localStorage.getItem('fps')}`;
  document.querySelector('.fps_block--fps').textContent = `${localStorage.getItem('fps')}`;
}

export default loadFPS;
