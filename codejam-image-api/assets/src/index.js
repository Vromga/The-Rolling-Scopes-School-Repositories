const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const selectTool = document.querySelector('.tools');
const searchInput = document.querySelector('#search');
const alertMess = document.querySelector('.div_message');
const resolution = document.querySelectorAll('.resolution--button');
const clientID = '6eead276a92ca5c7033f38dccfea6eb3aa045a61c5789af291ecd46ceda74be5';
const tools = {
  fillBucket: false,
  chooseColor: false,
  pencil: true,
};

function alert(text) {
  alertMess.textContent = text;
  alertMess.classList.remove('hidden');
  alertMess.classList.add('alert');
  setTimeout(() => {
    alertMess.classList.remove('alert');
    alertMess.classList.add('hidden');
  }, 2000);
}

function message(text) {
  alertMess.textContent = text;
  alertMess.classList.remove('hidden');
  alertMess.classList.add('message');
  setTimeout(() => {
    alertMess.classList.remove('message');
    alertMess.classList.add('hidden');
  }, 2000);
}

function removeResolutionClass() {
  [...resolution].forEach((elem) => {
    elem.classList.remove('active');
  });
}

let isDraw = false;
let isInput = false;
let isGrayscale = true;
searchInput.blur();

function addRemoveClassTools() {
  const button = document.querySelectorAll('.tools--buttons-elem');
  [...button].forEach((elem) => {
    elem.classList.remove('active');
  });
  if (tools.fillBucket === true) {
    button[0].classList.add('active');
  }
  if (tools.chooseColor === true) {
    button[1].classList.add('active');
  }
  if (tools.pencil === true) {
    button[2].classList.add('active');
  }
}

addRemoveClassTools();
const realSizeCanvas = 512;
let virtualPixelCanvas = 4;
canvas.style.width = `${realSizeCanvas}px`;
canvas.style.height = `${realSizeCanvas}px`;
canvas.width = realSizeCanvas / virtualPixelCanvas;
canvas.height = realSizeCanvas / virtualPixelCanvas;
ctx.fillStyle = 'rgba(255,255,255,255)';
ctx.fill();
ctx.fillRect(0, 0, canvas.width, canvas.height);

function colorSave() {
  const colorObj = {};
  colorObj.current = document.querySelector('#current').value;
  colorObj.prev = document.querySelector('#prev').style.backgroundColor;
  return JSON.stringify(colorObj);
}

function grayscale() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  if (data.every((value) => value === 255)) {
    alert('Image not uploaded, canvas is empty');
  }

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg; // red
    data[i + 1] = avg; // green
    data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
}


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
    [...resolution][3].classList.add('active');
  } else if (pixel === 2) {
    [...resolution][2].classList.add('active');
  } else if (pixel === 4) {
    [...resolution][1].classList.add('active');
  } else if (pixel === 8) {
    [...resolution][0].classList.add('active');
  }
  changeSize(pixel);
  const dataURL = localStorage.getItem('canvasImage');
  const img = new Image();
  img.src = dataURL;
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
  };

  const toolsJSON = JSON.parse(localStorage.getItem('tools'));
  tools.fillBucket = false;
  tools.chooseColor = false;
  tools.pencil = false;
  tools.fillBucket = toolsJSON.fillBucket;
  tools.chooseColor = toolsJSON.chooseColor;
  tools.pencil = toolsJSON.pencil;
  addRemoveClassTools();

  const colorJSON = JSON.parse(localStorage.getItem('color'));
  document.querySelector('#current').value = colorJSON.current;
  document.querySelector('#prev').style.backgroundColor = colorJSON.prev;
}

function searchWord() {
  return searchInput.value.split(' ').join(',');
}

function clearCanvas() {
  ctx.fillStyle = 'rgba(255,255,255,255)';
  ctx.fill();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function takeColor() {
  return document.querySelector('#current').value;
}

function setPrevColor() {
  const temp = takeColor();
  const prevColor = document.getElementById('prev');
  prevColor.style.backgroundColor = temp;
  prevColor.setAttribute('data', `${temp}`);
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
  addRemoveClassTools();
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
    const y = Math.floor(event.offsetX / (realSizeCanvas / canvas.height));
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
  isInput = e.target.id === 'text';
  if (e.target.innerText === 'load') {
    clearCanvas();
    const searchQuery = searchWord();
    getLinkToImage(searchQuery).then((value) => loadImage(value));
  }
  if (e.target.innerText === '512px') {
    removeResolutionClass();
    e.target.classList.add('active');
    changeSize(1);
    message('selected resolution canvas 512px');
  }

  if (e.target.innerText === '256px') {
    removeResolutionClass();
    e.target.classList.add('active');
    changeSize(2);
    message('selected resolution canvas 256px');
  }

  if (e.target.innerText === '128px') {
    removeResolutionClass();
    e.target.classList.add('active');
    changeSize(4);
    message('selected resolution canvas 128px');
  }

  if (e.target.innerText === '64px') {
    removeResolutionClass();
    e.target.classList.add('active');
    changeSize(8);
    message('selected resolution canvas 64px');
  }

  if (e.target.className === 'tools--buttons-elem') {
    selectTools(e);
  }
  const current = document.querySelector('#current');
  if (e.target.innerText === 'blue') {
    setPrevColor();
    current.value = '#0000FF';
  } else if (e.target.innerText === 'red') {
    setPrevColor();
    current.value = '#FF0000';
  } else if (e.target.innerText === 'Prev color') {
    current.value = e.target.previousElementSibling.getAttribute('data');
  } else if (e.target.innerText === 'Current color' || e.target.type === 'color') {
    setPrevColor();
  }
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
  if (event.code === 'Enter') {
    const loadButton = document.querySelector('.canvas--load');
    loadButton.click();
  }
  if (isInput === false) {
    switch (event.code) {
      case 'KeyB':
        selectTool.children[0].click();
        message('selected tool fill bucked');
        break;

      case 'KeyP':
        selectTool.children[2].click();
        message('selected tool pencil');
        break;

      case 'KeyC':
        selectTool.children[1].click();
        message('selected tool choose color');
        break;

      case 'KeyS':
        saveApp();
        message('app save');
        break;

      case 'KeyR':
        clearCanvas();
        message('canvas clear');
        break;

      case 'KeyL':
        restoreCanvas();
        message('app load');
        break;

      default:
        break;
    }
  }
});
