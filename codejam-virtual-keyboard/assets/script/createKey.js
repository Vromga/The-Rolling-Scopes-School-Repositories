import styleSet from './styleSetting.js';
import keyboardLayout from './keysSetting.js';

const keyCode = keyboardLayout.keyCode.flat();

function createKey(layout) {
  const body = document.querySelector(`.${styleSet.body}`);
  for (let i = 0; i < layout.length; i += 1) {
    const key = document.createElement('button');
    key.classList.add(styleSet.key);
    key.textContent = layout[i];
    key.setAttribute('data', `${keyCode[i]}`);
    body.insertAdjacentElement('beforeend', key);
  }
}

export default createKey;
