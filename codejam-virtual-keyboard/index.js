import styleSet from './assets/script/styleSetting.js';
import createElement from './assets/script/createElelement.js';
import specialKeyStyle from './assets/script/specialKeyStyle.js';
import addHover from './assets/script/addStyleHover.js';
import removeHover from './assets/script/removeStyleHover.js';
import removeKey from './assets/script/removeKey.js';
import changeLang from './assets/script/changeLang.js';


function keyboardInit() {
  let out = '';

  createElement('input', 'body', styleSet.input);
  createElement('div', 'body', styleSet.body);

  const input = document.querySelector(`.${styleSet.input}`);
  input.setAttribute('placeholder', 'Welcome to virtual keyboard...');
  const bodyDocument = document.querySelector('body');

  function letter(event) {
    if (event.key.length === 1) {
      const letterData = document.querySelector(`.${styleSet.key}[data='${event.code}']`);
      out += letterData.textContent;
      input.value = '';
      input.value = out;
    }
  }

  changeLang();
  specialKeyStyle();

  bodyDocument.addEventListener('keydown', (event) => {
    addHover();
    letter(event);
    if (event.ctrlKey) { // change lang
      removeKey();
      changeLang();
      specialKeyStyle();
      addHover();
    }
  });

  bodyDocument.addEventListener('keyup', () => {
    removeHover();
  });

  bodyDocument.addEventListener('mousedown', (event) => {
    if (event.target.textContent.length === 1) {
      out += event.target.textContent;
      input.value = '';
      input.value = out;
    }

    if (event.target.type === 'submit') {
      event.target.classList.add(styleSet.hover);
    }

    if (event.target.textContent === 'Ctrl') { // change lang
      removeKey();
      changeLang();
      specialKeyStyle();
      event.target.classList.add(styleSet.hover);
    }
  });

  bodyDocument.addEventListener('mouseup', () => {
    removeHover();
  });
}

keyboardInit();
