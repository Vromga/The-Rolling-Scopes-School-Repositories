import {DOM_ELEMENTS, tools} from "../../../configuration";
import saveStateApp from "../../saveApp/saveStateApp";

function finishDrawStroke() {
	if (tools.stroke === true) {
		saveStateApp('isDraw', 'false');
		saveStateApp('canvasImage', DOM_ELEMENTS.mainCanvas.toDataURL());
	}
}

export default finishDrawStroke;
