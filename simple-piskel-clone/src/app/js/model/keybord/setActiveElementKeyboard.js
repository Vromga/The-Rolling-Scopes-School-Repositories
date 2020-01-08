import {tools as tool} from "../../configuration";

function setActiveElementKeyboard() {
	const tools = document.querySelectorAll('.tools');
	[...tools].forEach((v)=>{
		v.classList.remove('active_element')
	});
	if (tool.pencil) document.querySelector('.main--tools-pen').classList.add('active_element');
	if (tool.fillAllPixels) document.querySelector('.main--tools-paint_bucket').classList.add('active_element');
	if (tool.eraser) document.querySelector('.main--tools-eraser').classList.add('active_element');
	if (tool.stroke) document.querySelector('.main--tools-stroke').classList.add('active_element');
	if (tool.colorPicker) document.querySelector('.main--tools-color_picker').classList.add('active_element');
}


export default setActiveElementKeyboard;
