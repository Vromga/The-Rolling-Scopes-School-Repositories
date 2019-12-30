function loadColor() {
  document.querySelector('#primary').value = localStorage.getItem('primary');
  document.querySelector('#secondary').value = localStorage.getItem('secondary');
}

export default loadColor;
