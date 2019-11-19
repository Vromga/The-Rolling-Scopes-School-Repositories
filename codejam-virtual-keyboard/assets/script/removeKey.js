import styleSet from './styleSetting.js';

function removeKey() {
  const collectionKey = document.querySelectorAll(`.${styleSet.key}`);
  [...collectionKey].forEach((key) => {
    key.remove();
  });
}

export default removeKey;
