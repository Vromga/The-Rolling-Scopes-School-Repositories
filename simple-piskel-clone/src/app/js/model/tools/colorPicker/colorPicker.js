import {DOM_ELEMENTS, realSizeCanvas} from "../../../configuration";
import rgbToHex from "../../../utilits/rgbToHEX";

const getColorAtPixel = (imageData, x, y) => {
	const {width, data} = imageData;
	return {
		r: data[4 * (width * y + x)],
		g: data[4 * (width * y + x) + 1],
		b: data[4 * (width * y + x) + 2],
		a: data[4 * (width * y + x) + 3],
	};
};


function colorPicker(e) {
	const virtualPixel = localStorage.getItem('virtualPixel');
	const x = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
	const y = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
	const current = document.querySelector('#primary');
	const colorPick = DOM_ELEMENTS.mainCanvas.getContext('2d').getImageData(0, 0, `${realSizeCanvas}`, `${realSizeCanvas}`);
	const objColor = getColorAtPixel(colorPick, x, y);
	current.value = `#${(`000000${rgbToHex(objColor.r, objColor.g, objColor.b)}`).slice(-6)}`;
}

export default colorPicker;
