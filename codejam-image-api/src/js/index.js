import '../css/style.css';
import '../css/style.scss';
import { toggleActiveClass, tools } from "./module/toggleActiveClass";
import showMessage from "./module/showMessage";
import grayscale from "./module/grayscale";
import clearCanvas from "./module/clearCanvas";
import takeColor from "./module/takeColor";
import colorSave from "./module/colorSave";
import rgbToHex from "./module/rgbToHex";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const searchInput = document.querySelector('#search');
const resolutionSection = document.querySelectorAll('.resolution--button');
const clientID = '6eead276a92ca5c7033f38dccfea6eb3aa045a61c5789af291ecd46ceda74be5';

function removeResolutionClass() {
    [...resolutionSection].forEach((elem) => {
        elem.classList.remove('active');
    });
}

let isDraw = false;
let isInput = false;
let isGrayscale = true;
searchInput.blur();

function resetToolsState() {
    for (const prop of Object.keys(tools)) {
        tools[prop] = false;
    }
}

toggleActiveClass();
const realSizeCanvas = 512;
let virtualPixelCanvas = 4;
canvas.style.width = `${realSizeCanvas}px`;
canvas.style.height = `${realSizeCanvas}px`;
canvas.width = realSizeCanvas / virtualPixelCanvas;
canvas.height = realSizeCanvas / virtualPixelCanvas;
ctx.fillStyle = 'rgba(255,255,255,255)';
ctx.fill();
ctx.fillRect(0, 0, canvas.width, canvas.height);

function saveApp() {
    localStorage.setItem('canvasImage', canvas.toDataURL());
    localStorage.setItem('tools', JSON.stringify(tools));
    localStorage.setItem('color', colorSave());
    localStorage.setItem('pixel', JSON.stringify(virtualPixelCanvas));
}

function restoreCanvas() {
    const pixel = +JSON.parse(localStorage.getItem('pixel'));
    removeResolutionClass();
    if (pixel === 1) {
        [...resolutionSection][3].classList.add('active');
    } else if (pixel === 2) {
        [...resolutionSection][2].classList.add('active');
    } else if (pixel === 4) {
        [...resolutionSection][1].classList.add('active');
    } else if (pixel === 8) {
        [...resolutionSection][0].classList.add('active');
    }
    changeSize(pixel);
    const dataURL = localStorage.getItem('canvasImage');
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    };

    const toolsJSON = JSON.parse(localStorage.getItem('tools'));
    resetToolsState();
    tools.fillBucket = toolsJSON.fillBucket;
    tools.chooseColor = toolsJSON.chooseColor;
    tools.pencil = toolsJSON.pencil;
    toggleActiveClass();

    const colorJSON = JSON.parse(localStorage.getItem('color'));
    document.querySelector('#current').value = colorJSON.current;
    document.querySelector('#prev').style.backgroundColor = colorJSON.prev;
}

function searchWord() {
    return searchInput.value.split(' ').join(',');
}

function setPrevColor() {
    const temp = takeColor();
    const prevColor = document.querySelectorAll('.prev');
    const circlePrevColor = document.querySelector('#prev');
    circlePrevColor.style.backgroundColor = temp;
    [...prevColor].map((element) => element.setAttribute('dataColor', `${temp}`));
}

const getColorAtPixel = (imageData, x, y) => {
    const { width, data } = imageData;

    return {
        r: data[4 * (width * y + x)],
        g: data[4 * (width * y + x) + 1],
        b: data[4 * (width * y + x) + 2],
        a: data[4 * (width * y + x) + 3],
    };
};

async function getLinkToImage(search) {
    const url = `https://api.unsplash.com/photos/random?query=${search}&client_id=${clientID}`;
    const response = await fetch(url);
    const data = await response.json();
    const img = new Image();
    img.src = data.urls.regular;
    img.crossOrigin = 'Anonymous';
    return img;
}

function loadImage(img) {
    img.onload = function f() {
        let ratio;
        let width;
        let height;
        let x;
        let y;

        function checkSizeImage() {
            if (img.width > img.height) {
                ratio = img.width / img.height;
                width = canvas.width;
                height = width / ratio;
            } else {
                ratio = img.height / img.width;
                height = canvas.height;
                width = height / ratio;
            }
        }

        function alignCenter() {
            x = canvas.width / 2 - width / 2;
            y = canvas.height / 2 - height / 2;
        }

        function drawImg(img, x, y, w, h) {
            ctx.drawImage(img, x, y, w, h);
        }

        checkSizeImage();
        alignCenter();
        drawImg(img, x, y, width, height);
    };
}

function selectTools(event) {
    resetToolsState();
    if (event.target.classList.contains('fillBucket') || event.code === 'KeyB') {
        tools.fillBucket = true;
        showMessage('selected tool fill bucked');
    } else if (event.target.classList.contains('chooseColor') || event.code === 'KeyC') {
        tools.chooseColor = true;
        showMessage('selected tool pencil');
    } else if (event.target.classList.contains('pencil') || event.code === 'KeyP') {
        tools.pencil = true;
        showMessage('selected tool choose color');
    }
    toggleActiveClass();
}

function selectColor(event) {
    const current = document.querySelector('#current');
    if (event.target.getAttribute('data') === 'blue') {
        setPrevColor();
        current.value = '#0000FF';
    } else if (event.target.getAttribute('data') === 'red') {
        setPrevColor();
        current.value = '#FF0000';
    } else if (event.target.getAttribute('data') === 'prev') {
        current.value = event.target.previousElementSibling.getAttribute('dataColor');
    } else if (event.target.getAttribute('data') === 'current' || event.target.type === 'color') {
        setPrevColor();
    }
}

function selectResolution(e) {
    if (e.target.getAttribute('data') === '512') {
        removeResolutionClass();
        e.target.classList.add('active');
        changeSize(1);
        showMessage('selected resolution canvas 512px');
    }

    if (e.target.getAttribute('data') === '256') {
        removeResolutionClass();
        e.target.classList.add('active');
        changeSize(2);
        showMessage('selected resolution canvas 256px');
    }

    if (e.target.getAttribute('data') === '128') {
        removeResolutionClass();
        e.target.classList.add('active');
        changeSize(4);
        showMessage('selected resolution canvas 128px');
    }

    if (e.target.getAttribute('data') === '64') {
        removeResolutionClass();
        e.target.classList.add('active');
        changeSize(8);
        showMessage('selected resolution canvas 64px');
    }

    if (e.target.className === 'tools--buttons-elem') {
        selectTools(e);
    }
}

const cordPixel = {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
};

function setPixel(x, y) {
    ctx.beginPath();
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(x, y, 1, 1);
    cordPixel.x0 = cordPixel.x1;
    cordPixel.y0 = cordPixel.y1;
}

function algoritmBresenham(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const sx = x0 < x1 ? 1 : -1;
    const dy = Math.abs(y1 - y0);
    const sy = y0 < y1 ? 1 : -1;
    let err = (dx > dy ? dx : -dy) / 2;
    while (true) {
        setPixel(x0, y0);
        if (x0 === x1 && y0 === y1) break;
        const e2 = err;
        if (e2 > -dx) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dy) {
            err += dx;
            y0 += sy;
        }
    }
}

function changeSize(n) {
    localStorage.setItem('canvas', canvas.toDataURL());
    clearCanvas();
    virtualPixelCanvas = n;
    canvas.width = realSizeCanvas / virtualPixelCanvas;
    canvas.height = realSizeCanvas / virtualPixelCanvas;
    const dataURL = localStorage.getItem('canvas');
    const img = new Image();
    img.src = dataURL;
    loadImage(img);
}

document.addEventListener('mousedown', (event) => {
            if (tools.pencil === true && event.target.id === 'canvas') {
                isDraw = true;
                cordPixel.x0 = Math.floor(event.offsetX / (realSizeCanvas / canvas.width));
                cordPixel.y0 = Math.floor(event.offsetY / (realSizeCanvas / canvas.height));
            } else if (tools.chooseColor === true && event.target.id === 'canvas') {
                const x = Math.floor(event.offsetX / (realSizeCanvas / canvas.width));
                const y = Math.floor(event.offsetY / (realSizeCanvas / canvas.height));
                const current = document.querySelector('#current');
                const colorPick = ctx.getImageData(0, 0, realSizeCanvas, realSizeCanvas);
                setPrevColor();
                const objColor = getColorAtPixel(colorPick, x, y);
                current.value = `#${(`000000${rgbToHex(objColor.r, objColor.g, objColor.b)}`).slice(-6)}`;
  } else if (tools.fillBucket === true && event.target.id === 'canvas') {
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
});
document.addEventListener('mousemove', (event) => {
  if (isDraw === true) {
    cordPixel.x1 = Math.floor(event.offsetX / (realSizeCanvas / canvas.width));
    cordPixel.y1 = Math.floor(event.offsetY / (realSizeCanvas / canvas.height));
    algoritmBresenham(cordPixel.x0, cordPixel.y0, cordPixel.x1, cordPixel.y1);
  }
});
document.addEventListener('mouseup', () => {
  if (tools.pencil === true) {
    isDraw = false;
  }
});
document.addEventListener('click', (e) => {
  if (tools.pencil === true && e.target.id === 'canvas') {
    const x = Math.floor(e.offsetX / (realSizeCanvas / canvas.width));
    const y = Math.floor(e.offsetY / (realSizeCanvas / canvas.height));
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(x, y, 1, 1);
  }
  isInput = e.target.id === 'search';

  if (e.target.innerText === 'load') {
    clearCanvas();
    const searchQuery = searchWord();
    getLinkToImage(searchQuery).then((value) => loadImage(value));
  }

  selectColor(e);

  if (e.target.getAttribute('data') === 'button') selectTools(e);

  selectResolution(e);

  if (e.target.innerText === 'b/w') {
    if (isGrayscale) {
      localStorage.setItem('canvas', canvas.toDataURL());
      grayscale();
      isGrayscale = false;
    } else {
      const dataURL = localStorage.getItem('canvas');
      const img = new Image();
      img.src = dataURL;
      img.onload = function imgDraw() {
        ctx.drawImage(img, 0, 0);
      };
      isGrayscale = true;
    }
  }
});
document.addEventListener('keydown', (event) => {
  if (isInput === false) {
    selectTools(event);
    switch (event.code) {
      case 'KeyS':
        saveApp();
        showMessage('app save');
        break;

      case 'KeyR':
        clearCanvas();
        showMessage('canvas clear');
        break;

      case 'KeyL':
        restoreCanvas();
        showMessage('app load');
        break;

      default:
        break;
    }
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    const loadButton = document.querySelector('.canvas--load');
    loadButton.click();
  }
});