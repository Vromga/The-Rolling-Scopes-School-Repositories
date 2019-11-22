const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const resolutionSection = document.querySelector('#resolution');
const tools = {
  fillBucket: false,
  chooseColor: false,
  pencil: true,
};
let isDraw = false;

function resetToolsState() {
  for (const prop of Object.keys(tools)) {
    tools[prop] = false;
  }
}

function toggleActiveClass() {
  const button = document.querySelectorAll('.tools--buttons-elem');
  [...button].forEach((elem) => {
    elem.classList.remove('active');
  });
  [...button].forEach((elem) => {
    if (tools.fillBucket === true && elem.classList.contains('fillBucket')) {
      elem.classList.add('active');
    }
    if (tools.chooseColor === true && elem.classList.contains('chooseColor')) {
      elem.classList.add('active');
    }
    if (tools.pencil === true && elem.classList.contains('pencil')) {
      elem.classList.add('active');
    }
  });
}

toggleActiveClass();

canvas.width = 512;
canvas.height = 512;
let matrix = 128;
resolutionSection.addEventListener('change', (event) => {
  matrix = event.target.value;
});

function colorSave() {
  const colorObj = {};
  colorObj.current = document.querySelector('#current').value;
  colorObj.prev = document.querySelector('#prev').style.backgroundColor;
  return JSON.stringify(colorObj);
}

function saveApp() {
  localStorage.setItem('canvasImage', canvas.toDataURL());
  localStorage.setItem('tools', JSON.stringify(tools));
  localStorage.setItem('color', colorSave());
}

function restoreCanvas() {
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

function clearCanvas() {
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}


function takeColor() {
  return document.querySelector('#current').value;
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

function rgbToHex(r, g, b) {
  return ((r << 16) | (g << 8) | b).toString(16);
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
function selectTools(event) {
  resetToolsState();
  if (event.target.classList.contains('fillBucket') || event.code === 'KeyB') {
    tools.fillBucket = true;
  } else if (event.target.classList.contains('chooseColor') || event.code === 'KeyC') {
    tools.chooseColor = true;
  } else if (event.target.classList.contains('pencil') || event.code === 'KeyP') {
    tools.pencil = true;
  }
  toggleActiveClass();
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
  ctx.fillRect(x * matrix, y * matrix, matrix, matrix);
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

document.addEventListener('mousedown', (event) => {
  if (tools.pencil === true && event.target.id === 'canvas') {
    isDraw = true;
    cordPixel.x0 = Math.floor(event.offsetX / matrix);
    cordPixel.y0 = Math.floor(event.offsetY / matrix);
  } else if (tools.chooseColor === true && event.target.id === 'canvas') {
    const x = event.offsetX;
    const y = event.offsetY;
    const current = document.querySelector('#current');
    const colorPick = ctx.getImageData(0, 0, 512, 512);
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
    cordPixel.x1 = Math.floor(event.offsetX / matrix);
    cordPixel.y1 = Math.floor(event.offsetY / matrix);
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
    const x = Math.floor(e.offsetX / matrix);
    const y = Math.floor(e.offsetY / matrix);
    setPixel(x, y);
  }

  selectColor(e);

  if (e.target.getAttribute('data') === 'button') selectTools(e);
});


document.addEventListener(
  'keydown', (event) => {
    selectTools(event);
    switch (event.code) {
      case 'KeyS':
        saveApp();
        break;

      case 'KeyR':
        clearCanvas();
        break;

      case 'KeyL':
        restoreCanvas();
        break;

      default:
        break;
    }
  },
);
