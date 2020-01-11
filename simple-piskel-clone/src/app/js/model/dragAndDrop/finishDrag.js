import {dragHelper} from "../../configuration";
import countFrame from "../editingFrame/countFrame";
import updateFrameArr from "../../utilits/updateFrameArr";

function finishDrag() {
	console.log(dragHelper);
	dragHelper.drag = false;
	dragHelper.emptyElement.remove();
	dragHelper.draggableElement.remove();
	countFrame();
	updateFrameArr();
}

export default finishDrag;
