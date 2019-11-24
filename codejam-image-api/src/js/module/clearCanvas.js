const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

function clearCanvas() {
    ctx.fillStyle = 'rgba(255,255,255,255)';
    ctx.fill();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export default clearCanvas;