import {keyGeoLocation, keyWeather, optionMap, userOptions} from "../configuration";
import {createMap} from "./mapBox";
import darkSkyApi from "./weatherAPI";
import getDataCountry from "../utilities/getDataCountry";
import liveCordinates from "../DOM/setLiveCoordinates";

let urlWeather;

const geoLocationURL = `https://ipinfo.io/json?token=${keyGeoLocation}`;

async function getGeoLocation() {
  let location;
  if (sessionStorage.getItem('coord')){
    location = sessionStorage.getItem('coord')
  }else {
    const response = await fetch(geoLocationURL);
    const data = await response.json();
    location = data.loc;
  }
  getDataCountry(location);
  const locationArr = location.split(',');
  liveCordinates(locationArr);
  optionMap.center = [locationArr[1], locationArr[0]];
  createMap(optionMap);
  urlWeather = `https://api.darksky.net/forecast/${keyWeather}/${location}?lang=${userOptions.lang}`;
  darkSkyApi(urlWeather);
}

export default getGeoLocation;

