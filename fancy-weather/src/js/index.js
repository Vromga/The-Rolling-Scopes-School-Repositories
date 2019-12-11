import '../css/style.css';
import '../css/style.scss';
import createHTMLMarkUp from "./DOM/createHTMLMarkUp";
import getImage from "./api/flickrAPI";
import convertTemperatureToCelsius from "./utilities/convertTemperatureToCelsius";
import getGeoLocation from "./api/geoCodingApi";


createHTMLMarkUp();
getGeoLocation();
getImage();

document.addEventListener('click', (e) => {
  //   console.dir(e.target);
  if (e.target.className === 'header--switch') {
    convertTemperatureToCelsius();
  }
});
