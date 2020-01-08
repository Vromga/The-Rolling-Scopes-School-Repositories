import {elementForHotKey, key} from "../../configuration";


function changeHotKey(e) {
	try {
		if (e.code === key.pencil
			|| e.code === key.newFrame
			|| e.code === key.decrease
			|| e.code === key.increase
			|| e.code === key.colorPicker
			|| e.code === key.fillAllPixels
			|| e.code === key.stroke
			|| e.code === key.eraser) {
			alert('This key now used, try another.');
		} else {
			elementForHotKey.tempKey.innerText = e.key.toUpperCase();
			switch (elementForHotKey.tempKey.getAttribute('data')) {
				case 'pen':
					key.pencil = e.code;
					break;
				case 'fill':
					key.fillAllPixels = e.code;
					break;
				case 'eraser':
					key.eraser = e.code;
					break;
				case 'stroke':
					key.stroke = e.code;
					break;
				case 'color':
					key.colorPicker = e.code;
					break;
				case 'increase':
					key.increase = e.code;
					break;
				case 'decrease':
					key.decrease = e.code;
					break;
				case 'newFrame':
					key.newFrame = e.code;
					break;
				//   no default
			}
		}
	} catch (err) {
		alert('Element unchangeable')
	}
}


export default changeHotKey;
