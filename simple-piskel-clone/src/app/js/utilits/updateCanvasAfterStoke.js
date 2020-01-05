import {DOM_ELEMENTS} from "../configuration";

function updateCanvasAfterStoke() {
	const dataURL = DOM_ELEMENTS.tempCanvas.toDataURL();
	const ctx = DOM_ELEMENTS.mainCanvas.getContext('2d');
	const img = new Image();
	img.src = dataURL;
	img.onload = () => {
		ctx.drawImage(img, 0, 0);
	};
}

export default updateCanvasAfterStoke;
