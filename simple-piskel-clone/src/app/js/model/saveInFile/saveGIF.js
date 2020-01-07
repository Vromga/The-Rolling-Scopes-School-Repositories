import GIF from '../../../assets/library/gif'
import getFPS from "../../controller/getFPS";

function getGif() {
	let gifUrl;
	const gif = new GIF({
		workers: 2,
		quality: 10,
		background: '#c9bdbd',
		transparent: '0xc9bdbd',
	});

	const frameList = document.querySelectorAll('.frame--preview-canvas');

	frameList.forEach((item) => {
		const speed = 1000 / getFPS();
		gif.addFrame(item, {delay: `${speed}`});
	});

	gif.on('finished', (blob) => {
		gifUrl = URL.createObjectURL(blob);

		const downloadLink = document.createElement('a');
		downloadLink.setAttribute('href', `${gifUrl}`);
		downloadLink.setAttribute('download', 'piskel-gif');

		downloadLink.style.display = 'none';
		document.body.appendChild(downloadLink);

		downloadLink.click();

		document.body.removeChild(downloadLink);
	});

	gif.render();
}


export default getGif;
