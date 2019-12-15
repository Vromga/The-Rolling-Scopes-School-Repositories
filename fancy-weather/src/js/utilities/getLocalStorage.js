function getLocalStorage() {
  if (localStorage.getItem('lang') && localStorage.getItem('temperatureScale')) {
    
  } else {
    localStorage.setItem('lang', 'EN');
    localStorage.setItem('temperatureScale', 'C');
  }
}

export default getLocalStorage;
