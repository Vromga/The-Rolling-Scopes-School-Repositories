import resetToolsState from "../utilits/resetToolsState";
import {key, tools} from "../configuration";
import saveStateApp from "../model/saveApp/saveStateApp";
import setActiveElementKeyboard from "../model/keybord/setActiveElementKeyboard";

function chooseToolsKeyboard(e) {
	resetToolsState();
	if (e.code === `${key.pencil}`) tools.pencil = true;
	if (e.code === `${key.fillAllPixels}`) tools.fillAllPixels = true;
	if (e.code === `${key.eraser}`) tools.eraser = true;
	if (e.code === `${key.stroke}`) tools.stroke = true;
	if (e.code === `${key.colorPicker}`) tools.colorPicker = true;
	setActiveElementKeyboard();
	const jsonTools = JSON.stringify(tools);
	saveStateApp('tools', jsonTools);
}

export default chooseToolsKeyboard;
