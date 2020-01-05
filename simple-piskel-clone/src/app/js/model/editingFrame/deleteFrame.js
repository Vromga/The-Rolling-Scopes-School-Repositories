import countFrame from "./countFrame";
import updateFrameArr from "../../utilits/updateFrameArr";

function deleteFrame(e) {
  e.parentNode.parentNode.remove();
  countFrame();
  updateFrameArr();
}

export default deleteFrame;
