import {dragHelper} from "../../configuration";

function copyImageDrag() {
	dragHelper.copyDraggableElement = dragHelper.draggableElement.cloneNode(true);
}

export default copyImageDrag
