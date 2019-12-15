import '../css/style.css';
import '../css/style.scss';
import createHTMLMarkUp from "./DOM/createHTMLMarkUp";
import convertTemperatureToCelsius from "./utilities/convertTemperatureToCelsius";
import getGeoLocation from "./api/geoCodingApiReverse";
import getLanguage from "./utilities/getLanguage";
import getLocalStorage from "./utilities/getLocalStorage";
import setChoiceLang from "./utilities/setChoiceLang";
import geoCoding from "./api/geoCodingApiForward";
import speechRecognition from "./api/speechRecognition";
import loader from "./utilities/loader";

getLocalStorage();
createHTMLMarkUp();
loader();
setChoiceLang();
getGeoLocation();


document.addEventListener('click', (e) => {
  if (e.target.className === 'header--switch') {
    convertTemperatureToCelsius();
  }
  if (e.target.className === 'header--reload_image') {
    window.location.reload();
  }
  if (e.target.className === 'header--homeland') {
    sessionStorage.removeItem('coord');
    window.location.reload();
  }
  if (e.target.className === 'header--search-button_voice') {
    speechRecognition();
  }
  if (e.target.className === 'alertMessage--wrap-reload') {
    window.location.reload();
  }
});

document.addEventListener('change', (e) => {
  if (e.target.id === 'searchCity') {
    geoCoding();
  }
  if (e.target.id === 'select-lang') {
    getLanguage();
  }
});

window.addEventListener('load', () => {

});
