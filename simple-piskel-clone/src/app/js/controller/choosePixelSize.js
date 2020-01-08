import {DOM_ELEMENTS} from "../configuration";
import removeCheckedPixel from "../utilits/removeCheckedPixel";

function choosePixelSizeKeyBoard(e) {
	let posElem;
	[...DOM_ELEMENTS.pixelSize].forEach((v, i) => {
		if (v.getAttribute('checked') === 'checked') posElem = i;
	});
	if (e.code === 'BracketRight') {
		if (posElem < 3) {
			removeCheckedPixel();
			posElem += 1;
			DOM_ELEMENTS.pixelSize[posElem].setAttribute('checked', 'checked');
			localStorage.setItem('virtualPixel', `${posElem + 1}`);
		}
	} else if (e.code === 'BracketLeft') {
		if (posElem >= 1) {
			removeCheckedPixel();
			posElem -= 1;
			DOM_ELEMENTS.pixelSize[posElem].setAttribute('checked', 'checked');
			if (posElem < 1) {
				localStorage.setItem('virtualPixel', `${1}`);
			} else {
				localStorage.setItem('virtualPixel', `${posElem + 1}`)
			}
		}
	}
}

export default choosePixelSizeKeyBoard;
