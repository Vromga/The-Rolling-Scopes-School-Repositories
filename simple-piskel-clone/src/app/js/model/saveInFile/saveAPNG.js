import getFPS from "../../controller/getFPS";

const UPNG = require('upng-js');
const download = require('downloadjs');


function saveAPNG(){
	const frameList = document.querySelectorAll('.frame--preview-canvas');
	const arrBuffer = [];
	const arrayFrameTime = new Array(frameList.length).fill(1000 / getFPS());
	frameList.forEach((frame) =>{
	 arrBuffer.push(frame.getContext('2d').getImageData(0, 0, frame.width, frame.height).data.buffer)
	});
	download(UPNG.encode(arrBuffer, frameList[0].width, frameList[0].height, 0, arrayFrameTime), 'animation.apng', 'apng');
}

export default saveAPNG;

