import countFrame from "./countFrame";

function copyFrame(e){
  const node = e.parentNode.parentNode;
  const copyNode = node.cloneNode(true);
  const dataURL = node.firstElementChild.firstElementChild.toDataURL();
  const ctx = copyNode.firstElementChild.firstElementChild.getContext('2d');
  const img = new Image();

  img.src = dataURL;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };
  node.after(copyNode);
  countFrame();
}

export default copyFrame;
