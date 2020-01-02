import countFrame from "./countFrame";

function deleteFrame(e) {
  e.parentNode.parentNode.remove();
  countFrame();
}

export default deleteFrame;
