import {dragHelper} from "../../configuration";

const correctionPixels = 90;
const correctionPixelsForFindElement = 91;
let currentDroppable = null;

function drag(e) {
	try {
		dragHelper.draggableElement.style.top = `${e.pageY - correctionPixels}px`;
		const elementBelow = document.elementFromPoint(e.clientX, e.clientY - correctionPixelsForFindElement);
		currentDroppable = elementBelow.closest('.droppable');
		if (currentDroppable) {
			currentDroppable.insertAdjacentElement('beforebegin', dragHelper.copyDraggableElement);
			dragHelper.copyDraggableElement.children[0].children[0].getContext('2d').putImageData(dragHelper.dragImage, 0, 0);
		}
	} catch {

	}

}

export default drag;
