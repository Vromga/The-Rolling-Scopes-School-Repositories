import {tools, DOM_ELEMENTS} from "../src/app/js/configuration";
import resetToolsState from "../src/app/js/utilits/resetToolsState";
import rgbToHex from "../src/app/js/utilits/rgbToHEX";
import setSizeCanvasAttribute from "../src/app/js/utilits/setSizeCanvasAttribute";
import removeCheckedPixel from "../src/app/js/utilits/removeCheckedPixel";


it('tools is object', function () {
	expect(tools).toBeInstanceOf(Object);
});

it('all tools false', function () {
	resetToolsState();
	expect(tools.colorPicker).toBeFalsy();
	expect(tools.pencil).toBeFalsy();
	expect(tools.colorPicker).toBeFalsy();
	expect(tools.stroke).toBeFalsy();
	expect(tools.eraser).toBeFalsy();

});

it('rgbToHex', function () {
	expect(rgbToHex(24, 15, 70)).toEqual('180f46');
	expect(rgbToHex(120, 34, 250)).toEqual('7822fa');
	expect(rgbToHex(17, 250, 30)).toEqual('11fa1e');
});

it('check size canvas', function () {
	document.body.innerHTML = `<canvas class="main--draw_container-canvas"></canvas>
								<canvas class="main--frame"></canvas>
								<canvas class="main--frame"></canvas>
								<canvas class="main--frame"></canvas>
								<canvas class="main--frame"></canvas>`;


	const canvas = document.querySelector('.main--draw_container-canvas');
	const frame = document.querySelectorAll('.main--frame');

	setSizeCanvasAttribute(canvas, 32, false);
	expect(canvas.getAttribute('width')).toEqual('32');
	expect(canvas.getAttribute('height')).toEqual('32');
	setSizeCanvasAttribute(canvas, 64, false);
	expect(canvas.getAttribute('width')).toEqual('64');
	expect(canvas.getAttribute('height')).toEqual('64');
	setSizeCanvasAttribute(canvas, 128, false);
	expect(canvas.getAttribute('width')).toEqual('128');
	expect(canvas.getAttribute('height')).toEqual('128');


	setSizeCanvasAttribute(frame, 32, true);
	expect(frame[0].getAttribute('width')).toEqual('32');
	expect(frame[0].getAttribute('height')).toEqual('32');
	setSizeCanvasAttribute(frame, 64, true);
	expect(frame[1].getAttribute('width')).toEqual('64');
	expect(frame[1].getAttribute('height')).toEqual('64');
	setSizeCanvasAttribute(frame, 128, true);
	expect(frame[2].getAttribute('width')).toEqual('128');
	expect(frame[2].getAttribute('height')).toEqual('128');


});

it('remove attr checkout', () => {
	removeCheckedPixel();
	let isChecked = false;
	[...DOM_ELEMENTS.pixelSize].forEach(v => {
		console.log(v.getAttribute('checked'));
		if (v.getAttribute('checked'))  isChecked = true;
	});
	expect(isChecked).toBeFalsy();
});

it('toggleActiveClass', ()=>{

})



