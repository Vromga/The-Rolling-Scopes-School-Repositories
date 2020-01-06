import {DOM_ELEMENTS, frame} from "../configuration";

function alignCenterImage() {
	if (frame[0]) {
		const img = new Image;
		img.src = frame[0];
		img.onload = () => {

		}

	}
}

export default alignCenterImage;
