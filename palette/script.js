const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorGet = document.querySelector('.color');
const selectTool = document.querySelector('.tools');

const tools = {
    fillBucket: false,
    chooseColor: false,
    pencil: true
};


canvas.width = 512;
canvas.height = 512;
const matrix = 128;

function saveApp() {
    localStorage.setItem('canvasImage', canvas.toDataURL());
    console.log('Saved...');
}

function restoreCanvas() {
    let dataURL = localStorage.getItem('canvasImage');
    let img = new Image;
    img.src = dataURL;
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    };
}

function clearCanvas() {
    ctx.fillStyle = `#ffffff`;
    ctx.fill();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function takeColor() {
    return document.querySelector('#current').value;
}

function setPrevColor() {
    let temp = takeColor();
    let prevColor = document.getElementById('prev');
    prevColor.style.backgroundColor = temp;
    prevColor.setAttribute('data', `${temp}`);
}

const getColorAtPixel = (imageData, x, y) => {
    const {width, data} = imageData;

    return {
        r: data[4 * (width * y + x)],
        g: data[4 * (width * y + x) + 1],
        b: data[4 * (width * y + x) + 2],
        a: data[4 * (width * y + x) + 3]
    };
};

function rgbToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}


colorGet.onclick = function (event) {
    let current = document.querySelector('#current');
    if (event.target.innerText === 'blue') {
        setPrevColor();
        current.value = `#0000FF`;
    } else if (event.target.innerText === 'red') {
        setPrevColor();
        current.value = `#FF0000`;
    } else if (event.target.innerText === 'Prev color') {
        current.value = event.target.previousElementSibling.getAttribute('data');
    } else if (event.target.innerText === 'Current color' || event.target.type === 'color') {
        setPrevColor();
    }
};

selectTool.onclick = function (event) {
    tools.fillBucket = false;
    tools.chooseColor = false;
    tools.pencil = false;
    if (event.target.innerText === 'Fill bucket') {
        tools.fillBucket = true;
    } else if (event.target.innerText === 'Choose color') {
        tools.chooseColor = true;
    } else if (event.target.innerText === 'Pencil') {
        tools.pencil = true;
    }
};

canvas.onmousedown = function (event) {
    if (tools.pencil === true) {
        let x = Math.floor(event.offsetX / matrix);
        let y = Math.floor(event.offsetY / matrix);
        ctx.fillStyle = `${takeColor()}`;
        ctx.fill();
        ctx.fillRect(x * matrix, y * matrix, matrix, matrix);
        canvas.onmousemove = function (event) {
            let x = Math.floor(event.offsetX / matrix);
            let y = Math.floor(event.offsetY / matrix);
            ctx.fillStyle = `${takeColor()}`;
            ctx.fill();
            ctx.fillRect(x * matrix, y * matrix, matrix, matrix);
        };
        canvas.onmouseleave = function () {
            canvas.onmousemove = null;
        };
        canvas.onmouseup = function () {
            canvas.onmousemove = null;
        };
    } else if (tools.chooseColor === true) {
        let x = event.offsetX;
        let y = event.offsetY;
        let current = document.querySelector('#current');
        let colorPick = ctx.getImageData(0, 0, 512, 512);
        setPrevColor();
        let objColor = getColorAtPixel(colorPick, x, y);
        current.value = '#' + ('000000' + rgbToHex(objColor.r, objColor.g, objColor.b)).slice(-6);

    } else if (tools.fillBucket === true) {
        ctx.fillStyle = `${takeColor()}`;
        ctx.fill();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};

document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'KeyB':
            selectTool.children[0].click();
            break;

        case 'KeyP':
            selectTool.children[2].click();
            break;

        case 'KeyC':
            selectTool.children[1].click();
            break;

        case 'KeyS':
            saveApp();
            break;

        case 'KeyR':
            clearCanvas();
            break;

        case 'KeyL':
            restoreCanvas();
    }
});




