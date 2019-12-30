function getColorPicker() {
  return {
    primary: document.querySelector('#primary').value,
    secondary: document.querySelector('#secondary').value,
  };
}

export default getColorPicker;
