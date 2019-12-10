import '../css/style.css';
import '../css/style.scss';
import createHTMLMarkUp from "./DOM/createHTMLMarkUp";
import getImage from "./api/flickrAPI";
import getGeoLocation from "./api/geoLocation";

createHTMLMarkUp();

getGeoLocation();

getImage();

//${Math.trunc(fahrenheitToCelsius(data.currently.temperature))}${String.fromCharCode(176)} / ${Math.trunc(data.currently.temperature)}${String.fromCharCode(176)}
