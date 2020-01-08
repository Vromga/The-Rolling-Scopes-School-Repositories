import changeSizeCanvas from "../model/changeSizeCanvas";
import setClassActiveElement from "../view/setActiveElement";
import startDraw from "../model/tools/pencilAndEraserLogic/startDraw";
import draw from "../model/tools/pencilAndEraserLogic/draw";
import finishDraw from "../model/tools/pencilAndEraserLogic/finishDraw";
import chooseTools from "./chooseTools";
import saveColor from "../model/saveApp/saveColor";
import setOnePixel from "../model/tools/pencilAndEraserLogic/setOnePixel";
import {tools} from "../configuration";
import fillAllPixels from "../model/tools/bucketLogic/fillAllPixels";
import setFrame from "../model/setFrame/setFrame";
import addNewFrame from "../model/editingFrame/addNewFrame";
import copyFrame from "../model/editingFrame/copyFrame";
import deleteFrame from "../model/editingFrame/deleteFrame";
import saveFrame from "../model/saveApp/saveFrame";
import saveStateApp from "../model/saveApp/saveStateApp";
import startDrawStroke from "../model/tools/stroke/startDrawStroke";
import finishDrawStroke from "../model/tools/stroke/finishDrawStroke";
import drawStroke from "../model/tools/stroke/drawStroke";
import animationFrame from "../model/animation/animationFrame";
import setFPS from "../view/setFPS";
import saveFPS from "../model/saveApp/saveFPS";
import getFullScreenMode from "./getFullScreenMode";
import colorPicker from "../model/tools/colorPicker/colorPicker";
import showSaveForm from "../model/saveInFile/showSaveForm";
import hideSaveForm from "../model/saveInFile/hideSaveForm";
import saveAPNG from "../model/saveInFile/saveAPNG";
import getGif from "../model/saveInFile/saveGIF";
import keyboardHotKey from "../model/keybord/keyboardHotKey";
import chooseToolsKeyboard from "./chooseToolsKeyboard";
import choosePixelSizeKeyBoard from "./choosePixelSize";

function listenerEvent() {
	document.addEventListener('click', (e) => {
		if (e.target.className === 'resize') {
			changeSizeCanvas(e);
		} else if (e.target.getAttribute('data') === 'tools') {
			chooseTools(e);
			setClassActiveElement(e);
		} else if (e.target.type === 'radio') {
			localStorage.setItem('virtualPixel', `${e.target.value}`);
		} else if (e.target.className === 'main--draw_container-canvas') {
			if (tools.pencil || tools.eraser) {
				setOnePixel(e);
				setFrame();
			} else if (tools.fillAllPixels) {
				fillAllPixels(e);
				setFrame();
			} else if (tools.colorPicker) {
				colorPicker(e);
			}
		} else if (e.target.className === 'frame--preview-canvas') {
			setClassActiveElement(e);
		} else if (e.target.className === 'main--frame-add') {
			addNewFrame();
		} else if (e.target.className === 'frame--preview-copy') {
			copyFrame(e);
		} else if (e.target.className === 'frame--preview-del') {
			deleteFrame(e.target);
		}
		if (e.target.className === 'layer--button') {
			getFullScreenMode();
		}
		if (e.target.className === 'main--setting-save') {
			showSaveForm();
		}
		if (e.target.className === 'save--wrap-button apng') {
			saveAPNG();
			hideSaveForm();
		}
		if (e.target.className === 'save--wrap-button gif') {
			getGif();
			hideSaveForm();
		}

		if (e.target.className === 'save--wrap-button chancel') {
			hideSaveForm();
		}
	});
	document.addEventListener('mousedown', (e) => {
		if (e.target.className === 'main--draw_container-canvas') {
			startDraw(e);
			startDrawStroke(e);
		}

		// if (document.elementFromPoint(e.clientX, e.clientY).closest('.frame')) {
		//   dragAndDrop(e);
		// }
	});
	document.addEventListener('mousemove', (e) => {
		if (e.target.className === 'main--draw_container-canvas') {
			if (tools.pencil || tools.eraser) {
				draw(e);
			} else if (tools.stroke) {
				drawStroke(e);
			}
		} else saveStateApp('isDraw', 'false');
	});
	document.addEventListener('mouseup', (e) => {
		if (tools.pencil || tools.eraser) {
			finishDraw();
		}
		if (tools.stroke) {
			finishDrawStroke();
		}
		if (e.target.className === 'main--draw_container-canvas') {
			setFrame();
			animationFrame();
		}
	});
	document.addEventListener('contextmenu', (e) => {
		if (e.target.className === 'main--draw_container-canvas') {
			e.preventDefault();
		}
	});
	window.addEventListener('unload', () => {
		saveColor();
		saveFrame();
		saveFPS();
	});

	document.addEventListener('dragstart', () => {
		return false
	});

	document.addEventListener('change', () => {
		setFPS();
		animationFrame();
	});

	document.addEventListener('keyup', (e)=>{
		//   keyboardHotKey(e);
		if (e.code === 'KeyP' || e.code === 'KeyA' || e.code === 'KeyE' || e.code === 'KeyL' || e.code === 'KeyO'){
		chooseToolsKeyboard(e);
		setClassActiveElement(e);
		}
		if(e.code === 'BracketRight' || e.code === 'BracketLeft'){
			choosePixelSizeKeyBoard(e);
		}
	})
}

export default listenerEvent;
