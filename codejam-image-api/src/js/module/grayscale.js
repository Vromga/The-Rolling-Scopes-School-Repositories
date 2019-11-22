import showAlert from "./showAlert";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function grayscale() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;
    if (data.every((value) => value === 255)) {
        showAlert('Image not uploaded, canvas is empty');
    }

    for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg; // red
        data[i + 1] = avg; // green
        data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
}

export default grayscale;