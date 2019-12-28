import changeSizeCanvas from "../model/changeSizeCanvas";

function listenerEvent() {
    document.addEventListener('click', (e) => {
      changeSizeCanvas(e);
  })
}

export default listenerEvent;
