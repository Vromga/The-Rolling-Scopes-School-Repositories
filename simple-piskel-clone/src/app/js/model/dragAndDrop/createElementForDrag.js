import {dragHelper} from "../../configuration";

function createElementForDrag() {
	dragHelper.emptyElement = document.createElement('li');
	dragHelper.emptyElement.classList.add('tempElement');
	dragHelper.emptyElement.style.border = `3px dashed gold`;
	dragHelper.emptyElement.style.marginBottom = '5px';
	dragHelper.emptyElement.style.width = '100px';
	dragHelper.emptyElement.style.height = '100px';
}

export default createElementForDrag;
