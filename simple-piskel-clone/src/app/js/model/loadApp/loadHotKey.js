import {key} from "../../configuration";

function loadHotKey() {
	const objHotKey = JSON.parse(localStorage.getItem('hotkey')) || key;
	key.pencil = objHotKey.pencil;
	key.fillAllPixels = objHotKey.fillAllPixels;
	key.eraser = objHotKey.eraser;
	key.stroke = objHotKey.stroke;
	key.colorPicker = objHotKey.colorPicker;
	key.increase = objHotKey.increase;
	key.decrease = objHotKey.decrease;
	key.newFrame = objHotKey.newFrame;
}

export default loadHotKey;
