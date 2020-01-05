import {DOM_ELEMENTS} from "../configuration";

function updateCanvasAfterStoke() {
  const collectionFrame = DOM_ELEMENTS.frameCanvas;
  [...collectionFrame].forEach((v)=>{
    if(v.getAttribute('data-active' === 'active')){
      const dataURL = v.toDataURL();
      const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');
      const img = new Image();
      img.src = dataURL;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
    }
  });


}

export default updateCanvasAfterStoke;
