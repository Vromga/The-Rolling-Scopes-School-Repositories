import {dragHelper} from "../../configuration";
import copyImageDrag from "./copyImageDrag";
import createEmptyElementForDrag from "./createElementForDrag";

function startDrag(e) {
	const sizeCanvas = localStorage.getItem('sizeCanvas');
	// dragHelper.ulContainer = document.querySelector('.frame_container');
	// dragHelper.ulContainer.style.height = `${dragHelper.ulContainer.clientHeight}px`;
	dragHelper.draggableElement = e.target.closest('.frame');
	dragHelper.draggableElement.classList.remove('droppable');
	dragHelper.dragImage = dragHelper.draggableElement.children[0].children[0].getContext('2d').getImageData(0, 0, `${sizeCanvas}`, `${sizeCanvas}`);
	copyImageDrag();
	dragHelper.draggableElement.style.position = 'absolute';
	dragHelper.draggableElement.style.zIndex = dragHelper.zIndexBeforeMove;
	dragHelper.draggableElement.style.top = `${e.pageY}px;`;
	dragHelper.draggableElement.style.opacity = '0.3';
	createEmptyElementForDrag();
	dragHelper.draggableElement.insertAdjacentElement("afterend", dragHelper.emptyElement);
	dragHelper.drag = true;
}

export default startDrag;
