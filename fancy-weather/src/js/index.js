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

getLocalStorage();
createHTMLMarkUp();
setChoiceLang();
getGeoLocation();


document.addEventListener('click', (e) => {
  if (e.target.className === 'header--switch') {
    convertTemperatureToCelsius();
  }
  if (e.target.className === 'header--reload_image') {
    location.reload();
  }
  if (e.target.className === 'header--homeland') {
    sessionStorage.removeItem('coord');
    location.reload();
  }
  if (e.target.className === 'header--search-button_voice') {
    speechRecognition();
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
  //   console.log('Work');
});
