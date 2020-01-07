import {cordPixel, DOM_ELEMENTS, imgForStroke, realSizeCanvas} from "../../../configuration";
import algorithmBresenham from "../../../utilits/algorithmBresenham";


function drawStroke(e) {
	if (localStorage.getItem('isDraw') === 'true') {
		DOM_ELEMENTS.mainCanvas.getContext('2d').clearRect(0, 0, DOM_ELEMENTS.mainCanvas.width, DOM_ELEMENTS.mainCanvas.height);
		const virtualPixel = localStorage.getItem('virtualPixel');
		DOM_ELEMENTS.mainCanvas.getContext('2d').putImageData(imgForStroke.stroke, 0, 0);
		cordPixel.x1 = Math.floor(e.offsetX / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.width) / virtualPixel) * virtualPixel;
		cordPixel.y1 = Math.floor(e.offsetY / (realSizeCanvas / DOM_ELEMENTS.mainCanvas.height) / virtualPixel) * virtualPixel;
		algorithmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1, e);
	}
}

export default drawStroke;
