import { DOM_ELEMENTS, frame, noIMG } from "../../configuration";
import getFPS from "../../controller/getFPS";

let count = 0;
let intervalID;

function animationFrame() {
  const animationResult = document.querySelector('.layer--canvas');
  const ctx = animationResult.getContext('2d');
  const fps = getFPS();
  clearTimeout(intervalID);
  if (fps < 1) {
    const img = new Image();
    img.src = frame[0] || noIMG;
    img.onload = () => {
      ctx.clearRect(0, 0, DOM_ELEMENTS.animateCanvas.width, DOM_ELEMENTS.animateCanvas.height);
      ctx.drawImage(img, 0, 0);
    };
    return;
  }

  function animation() {
    const img = new Image();
    img.src = frame[count];
    img.onload = () => {
      ctx.clearRect(0, 0, DOM_ELEMENTS.animateCanvas.width, DOM_ELEMENTS.animateCanvas.height);
      ctx.drawImage(img, 0, 0);
    };
    if (count <= frame.length - 2) {
      count += 1;
    } else count = 0;
    intervalID = setTimeout(animation, 1000 / fps);
  }
  animation();
}

export default animationFrame;
