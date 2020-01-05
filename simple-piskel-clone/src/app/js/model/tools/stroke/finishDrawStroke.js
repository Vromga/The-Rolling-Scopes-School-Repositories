import {DOM_ELEMENTS, styleZIndex, tools} from "../../../configuration";
import saveStateApp from "../../saveApp/saveStateApp";
import updateCanvasAfterStoke from "../../../utilits/updateCanvasAfterStoke";

function finishDrawStroke() {
	if (tools.stroke === true) {
		saveStateApp('isDraw', 'false');
		updateCanvasAfterStoke().onload = () => {
			DOM_ELEMENTS.tempCanvas.style.zIndex = styleZIndex.zIndexFinishDrawStroke;
			saveStateApp('canvasImage', DOM_ELEMENTS.mainCanvas.toDataURL());
		}
	}
}

export default finishDrawStroke;
