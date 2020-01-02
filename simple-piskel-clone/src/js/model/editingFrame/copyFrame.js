import countFrame from "./countFrame";
import updateFrameArr from "../../utilits/updateFrameArr";
import setClassAndAttributeActiveElement from "../../utilits/setClassAndAttributeActiveElement";

function copyFrame(e){
  const node = e.target.parentNode.parentNode;
  const copyNode = node.cloneNode(true);
  const dataURL = node.firstElementChild.firstElementChild.toDataURL();
  const ctx = copyNode.firstElementChild.firstElementChild.getContext('2d');
  const img = new Image();
  img.src = dataURL;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    updateFrameArr();
  };
  node.after(copyNode);
  countFrame();
  setClassAndAttributeActiveElement(e, true);

}

export default copyFrame;
