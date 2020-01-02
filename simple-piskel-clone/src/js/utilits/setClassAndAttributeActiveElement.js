function setClassAndAttributeActiveElement(e, boolean) {
  const frame = document.querySelectorAll('.frame--preview');
  const canvasPreview = document.querySelectorAll('.frame--preview-canvas');
  [...frame].forEach((v) => v.classList.remove('active_element'));
  [...canvasPreview].forEach((v) => v.removeAttribute('data-active'));
  if (boolean) {
    e.target.parentElement.classList.add('active_element');
    e.target.setAttribute('data-active', 'active');
  } else {
   [...frame][frame.length-1].classList.add('active_element');
   [...canvasPreview][canvasPreview.length-1].setAttribute('data-active', 'active');
  }
}

export default setClassAndAttributeActiveElement;
