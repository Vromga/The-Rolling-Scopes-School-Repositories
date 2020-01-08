import resetToolsState from "../utilits/resetToolsState";
import {tools} from "../configuration";
import saveStateApp from "../model/saveApp/saveStateApp";
import setActiveElementKeyboard from "../model/keybord/setActiveElementKeyboard";

function chooseToolsKeyboard(e) {
	resetToolsState();
	if (e.code === 'KeyP') tools.pencil = true;
	if (e.code === 'KeyA') tools.fillAllPixels = true;
	if (e.code === 'KeyE') tools.eraser = true;
	if (e.code === 'KeyL') tools.stroke = true;
	if (e.code === 'KeyO') tools.colorPicker = true;
	setActiveElementKeyboard();
	const jsonTools = JSON.stringify(tools);
	saveStateApp('tools', jsonTools);
}

export default chooseToolsKeyboard;
