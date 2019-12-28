import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";

function listenerEvent() {
  document.addEventListener('click', (e) => {
    if (e.target.className === 'resize') {
      changeSizeCanvas(e);
    } else if (e.target.getAttribute('data') === 'tools') {
      setClassActiveElement(e);
    }
  })
}

export default listenerEvent;
