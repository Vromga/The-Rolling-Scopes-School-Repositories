import '../css/style.css';
import '../css/style.scss';
import createHTMLMarkUp from "./DOM/createHTMLMarkUp";
import getImage from "./api/flickrAPI";
import convertTemperatureToCelsius from "./utilities/convertTemperatureToCelsius";
import getGeoLocation from "./api/geoCodingApiReverse";
import getLanguage from "./utilities/getLanguage";
import getLocalStorage from "./utilities/getLocalStorage";
import setChoiceLang from "./utilities/setChoiceLang";
import geoCoding from "./api/geoCodingApiForward";

getLocalStorage();
createHTMLMarkUp();
setChoiceLang();
getGeoLocation();
//getImage();


document.addEventListener('click', (e) => {
  if (e.target.className === 'header--switch') {
    convertTemperatureToCelsius();
  }
});

document.addEventListener('change',(e)=>{
  if(e.target.id === 'searchCity'){
    geoCoding();
  }
  if (e.target.id === 'select-lang'){
    getLanguage();
  }
});
