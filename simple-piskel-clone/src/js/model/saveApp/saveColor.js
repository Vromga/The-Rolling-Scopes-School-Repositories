import saveStateApp from "./saveStateApp";

function saveColor() {
  saveStateApp('primary', `${document.querySelector('#primary').value}`);
  saveStateApp('secondary', `${document.querySelector('#secondary').value}`);
}

export default saveColor;
