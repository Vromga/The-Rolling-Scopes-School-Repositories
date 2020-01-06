import setSizeCanvasAttribute from "../utilits/setSizeCanvasAttribute";
import setActiveElement from "../view/setActiveElement";
import saveStateApp from "./saveApp/saveStateApp";
import {DOM_ELEMENTS} from "../configuration";


function changeSizeCanvas(e) {
	const frames = document.querySelectorAll('.frame--preview-canvas');
	if (e.target.getAttribute('data') === '32') {
		setSizeCanvasAttribute(DOM_ELEMENTS.mainCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.tempCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.animateCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(frames, e.target.getAttribute('data'), true);
		setActiveElement(e);
		saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
	} else if (e.target.getAttribute('data') === '64') {
		setSizeCanvasAttribute(DOM_ELEMENTS.mainCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.tempCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.animateCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(frames, e.target.getAttribute('data'), true);
		setActiveElement(e);
		saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
	} else if (e.target.getAttribute('data') === '128') {
		setSizeCanvasAttribute(DOM_ELEMENTS.mainCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.tempCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(DOM_ELEMENTS.animateCanvas, e.target.getAttribute('data'), false);
		setSizeCanvasAttribute(frames, e.target.getAttribute('data'), true);
		setActiveElement(e);
		saveStateApp('sizeCanvas', `${e.target.getAttribute('data')}`);
	}
}

export default changeSizeCanvas;
