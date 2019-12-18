import setLocalStorage from "./setLocalStorage";

function getLanguage() {
  const selectLang = document.querySelector('.header--select').value;
  setLocalStorage('lang', selectLang);
  window.location.reload();
}
export default getLanguage;

