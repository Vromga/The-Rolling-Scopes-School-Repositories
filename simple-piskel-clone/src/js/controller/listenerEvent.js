import changeSizeCanvas from "../model/changeSizeCanvas";

function listenerEvent() {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'resize') {
      changeSizeCanvas(e);
    }
  })
}

export default listenerEvent;
