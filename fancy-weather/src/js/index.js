import '../css/style.css';
import '../css/style.scss';
import '.'
import createHTMLMarkUp from "./DOM/createHTMLMarkUp";
import getImage from "./api/flickrAPI";
import convertTemperatureToCelsius from "./utilities/convertTemperatureToCelsius";
import getGeoLocation from "./api/geoCodingApi";
import getLanguage from "./utilities/getLanguage";
import getLocalStorage from "./utilities/getLocalStorage";
import setChoiceLang from "./utilities/setChoiceLang";

getLocalStorage();
createHTMLMarkUp();
setChoiceLang();
getGeoLocation();
getImage();



document.addEventListener('click', (e) => {
  if (e.target.className === 'header--switch') {
    convertTemperatureToCelsius();
  }
});

document.addEventListener('change',()=>{
  getLanguage();
});
