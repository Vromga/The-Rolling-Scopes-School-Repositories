const canvasSize = {
	'32': 32,
	'64': 64,
	'128': 128,

};

const tools = {
	fillAllPixels: false,
	stroke: false,
	pencil: true,
	eraser: false,
	colorPicker: false,

};

const cordPixel = {
	x0: 0,
	y0: 0,
	x1: 0,
	y1: 0,
};

const DOM_ELEMENTS = {
	mainCanvas: document.querySelector('.main--draw_container-canvas'),
	frameCanvas: document.querySelectorAll('.frame--preview-canvas'),
	animateCanvas: document.querySelector('.layer--canvas'),
	pixelSize: document.querySelectorAll('.pick_size--radio'),

};

const elementForHotKey = {};

const key = {
	pencil: 'KeyP',
	fillAllPixels: 'KeyA',
	eraser: 'KeyE',
	stroke: 'KeyL',
	colorPicker: 'KeyO',
	increase: 'BracketRight',
	decrease: 'BracketLeft',
	newFrame: 'KeyN',

};

const realSizeCanvas = '512';

const frame = [];

const noIMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAALUlEQVRYR+3QQREAAAABQfqXFsNnFTizzXk99+MAAQIECBAgQIAAAQIECBAgMBo/ACHo7lH9AAAAAElFTkSuQmCC';

const imgForStroke = {};

export {canvasSize, tools, cordPixel, realSizeCanvas, frame, noIMG, DOM_ELEMENTS, imgForStroke, key, elementForHotKey};
