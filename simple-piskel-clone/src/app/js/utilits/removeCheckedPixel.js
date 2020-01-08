import {DOM_ELEMENTS} from "../configuration";

function  removeCheckedPixel() {
	[...DOM_ELEMENTS.pixelSize].forEach((v)=>{
		v.removeAttribute('checked');
	});
}

export default removeCheckedPixel;
