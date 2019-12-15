function alertMessage(e){
  sessionStorage.removeItem('coord');
  localStorage.removeItem('coord');
  const alertMessages = document.querySelector('.alertMessage');
  alertMessages.classList.toggle('show');
}

export default alertMessage;
