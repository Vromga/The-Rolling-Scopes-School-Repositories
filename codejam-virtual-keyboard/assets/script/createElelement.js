
function createElement(elem, insert, style) {
  const parent = document.querySelector(insert);
  const child = document.createElement(elem);
  child.classList.add(style);
  parent.insertAdjacentElement('afterbegin', child);
}

export default createElement;
