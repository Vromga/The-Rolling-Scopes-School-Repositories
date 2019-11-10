const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let click = document.querySelector('.color');
let currentColor = '#00ff00';
const tools = {
    fillBucket: false,
    chooseColor: false,
    pencil: false
};


function takeColor() {
    return document.querySelector('#current').value;
}

function setPrevColor() {
    let temp = takeColor();
    let prevColor = document.getElementById('prev');
    prevColor.style.backgroundColor = temp;
    prevColor.setAttribute('data', `${temp}`);
}

click.onclick = function (event) {
    console.dir(event.target);
    let current = document.querySelector('#current');
    if (event.target.innerText === 'blue') {
        setPrevColor();
        current.value = `#0000FF`;
    } else if (event.target.innerText === 'red') {
        setPrevColor();
        current.value = `#FF0000`;
    } else if (event.target.innerText === 'Prev color') {
        current.value = event.target.previousElementSibling.getAttribute('data');
    } else if (event.target.innerText === 'Current color' || event.target.type === 'color'){
        setPrevColor();
    }
};

canvas.width = 512;
canvas.height = 512;
const matrix = 128;


canvas.onmousedown = function (event) {
    console.dir(event);
    let x = Math.floor(event.offsetX / matrix);
    let y = Math.floor(event.offsetY / matrix);
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(x * matrix, y * matrix, matrix, matrix);
};




