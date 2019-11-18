import styleSet from './styleSetting.js';

function specialKeyStyle() {
  const collectionKey = document.querySelectorAll(`.${styleSet.key}`);
  [...collectionKey].forEach((key) => {
    if (key.textContent === 'Backspace') {
      key.classList.add(styleSet.backspace);
    }
    if (key.textContent === 'Tab') {
      key.classList.add(styleSet.tab);
    }
    if (key.textContent === 'CapsLock') {
      key.classList.add(styleSet.caps);
    }
    if (key.textContent === 'Enter') {
      key.classList.add(styleSet.enter);
    }
    if (key.textContent === 'Shift') {
      key.classList.add(styleSet.shift);
    }
    if (key.textContent === 'Ctrl') {
      key.classList.add(styleSet.ctrl);
    }
    if (key.getAttribute('data') === 'Space') {
      key.classList.add(styleSet.space);
    }
    if (key.textContent === 'Fn' || key.textContent === 'Alt' || key.textContent === 'Win' || key.textContent === '<=' || key.textContent === '=>' || key.textContent === 'Up') {
      key.classList.add(styleSet.func);
    }
  });
}

export default specialKeyStyle;
