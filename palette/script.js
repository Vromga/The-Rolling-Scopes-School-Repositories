const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorGet = document.querySelector('.color');
const selectTool = document.querySelector('.tools');

const tools = {
  fillBucket: false,
  chooseColor: false,
  pencil: true,
};

function addRemoveClass() {
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

addRemoveClass();

canvas.width = 512;
canvas.height = 512;
const matrix = 128;

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
  tools.fillBucket = false;
  tools.chooseColor = false;
  tools.pencil = false;
  tools.fillBucket = toolsJSON.fillBucket;
  tools.chooseColor = toolsJSON.chooseColor;
  tools.pencil = toolsJSON.pencil;
  addRemoveClass();

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


colorGet.onclick = (event) => {
  const current = document.querySelector('#current');
  if (event.target.innerText === 'blue') {
    setPrevColor();
    current.value = '#0000FF';
  } else if (event.target.innerText === 'red') {
    setPrevColor();
    current.value = '#FF0000';
  } else if (event.target.innerText === 'Prev color') {
    current.value = event.target.previousElementSibling.getAttribute('data');
  } else if (event.target.innerText === 'Current color' || event.target.type === 'color') {
    setPrevColor();
  }
};

selectTool.onclick = (event) => {
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
  addRemoveClass();
};

canvas.onmousedown = (event) => {
  if (tools.pencil === true) {
    const x = Math.floor(event.offsetX / matrix);
    const y = Math.floor(event.offsetY / matrix);
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(x * matrix, y * matrix, matrix, matrix);
    canvas.onmousemove = function painMove(event) {
      const xMove = Math.floor(event.offsetX / matrix);
      const yMove = Math.floor(event.offsetY / matrix);
      ctx.fillStyle = `${takeColor()}`;
      ctx.fill();
      ctx.fillRect(xMove * matrix, yMove * matrix, matrix, matrix);
    };
    canvas.onmouseleave = () => {
      canvas.onmousemove = null;
    };
    canvas.onmouseup = () => {
      canvas.onmousemove = null;
    };
  } else if (tools.chooseColor === true) {
    const x = event.offsetX;
    const y = event.offsetY;
    const current = document.querySelector('#current');
    const colorPick = ctx.getImageData(0, 0, 512, 512);
    setPrevColor();
    const objColor = getColorAtPixel(colorPick, x, y);
    current.value = `#${(`000000${rgbToHex(objColor.r, objColor.g, objColor.b)}`).slice(-6)}`;
  } else if (tools.fillBucket === true) {
    ctx.fillStyle = `${takeColor()}`;
    ctx.fill();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
};

document.addEventListener(
  'keydown', (event) => {
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
        break;

      default:
        break;
    }
  },
);
