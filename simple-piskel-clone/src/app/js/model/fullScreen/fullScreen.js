function fullScreen(elem) {
  document.fullscreenElement ? document.exitFullscreen() : elem.requestFullscreen()
}

export default fullScreen;
