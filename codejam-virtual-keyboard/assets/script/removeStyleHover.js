import styleSet from './styleSetting.js';

function removeHover() {
  const collectionKey = document.querySelectorAll(`.${styleSet.key}`);
  [...collectionKey].forEach((key) => {
    key.classList.remove(styleSet.hover);
  });
}

export default removeHover;
