function inputMistakeCity() {
  sessionStorage.removeItem('coord');
  localStorage.removeItem('coord');
  const alertMessages = document.querySelector('.mistakeCity');
  alertMessages.classList.toggle('show');
}

export default inputMistakeCity;
