import {keyWeather, keyGeoLocation, optionMap} from "../configuration";
import {createMap} from "./mapBox";
import darkSkyApi from "./weatherAPI";
import getDataCountry from "../utilities/getDataCountry";
import liveCordinates from "../DOM/setLiveCordinates";

let urlWeather;

const geoLocationURL = `https://ipinfo.io/json?token=${keyGeoLocation}`;
async function getGeoLocation() {
  const response = await fetch(geoLocationURL);
  const data = await response.json();
  const location = data.loc;
  getDataCountry(location);
  const locationArr = location.split(',')//.map(value => +value);
  liveCordinates(locationArr);
  optionMap.center = [locationArr[1], locationArr[0]];
  createMap(optionMap);
  urlWeather = `https://api.darksky.net/forecast/${keyWeather}/${location}?lang=en`;
  darkSkyApi(urlWeather);
}

export default getGeoLocation;

