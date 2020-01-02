import {frame as frameArr} from "../configuration";

function updateFrameArr() {
  const frame = document.querySelectorAll('.frame--preview-canvas');
  frameArr.length = 0;
  [...frame].forEach((v, i) => {
    const dataURL = v.toDataURL();
    if (frameArr[i]) {
      frameArr[i] = dataURL;
    } else {
      frameArr.push(`${dataURL}`);
    }
  })
}

export default updateFrameArr;
