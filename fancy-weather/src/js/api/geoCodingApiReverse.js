import {keyGeoLocation, keyWeather, optionMap} from "../configuration";
import {createMap} from "./mapBox";
import darkSkyApi from "./weatherAPI";
import getDataCountry from "./getDataCountry";
import liveCordinates from "../DOM/setLiveCoordinates";
import alertMessage from "../DOM/alert";

let urlWeather;

const geoLocationURL = `https://ipinfo.io/json?token=${keyGeoLocation}`;

async function getGeoLocation() {
  try {
    let location;
    if (sessionStorage.getItem('coord')) {
      location = sessionStorage.getItem('coord')
    } else {
      try {
        const response = await fetch(geoLocationURL);
        const data = await response.json();
        location = data.loc;
      }catch (e) {
        alertMessage(e);
      }

    }
    getDataCountry(location);
    const locationArr = location.split(',');
    liveCordinates(locationArr);
    optionMap.center = [locationArr[1], locationArr[0]];
    createMap(optionMap);
    urlWeather = `https://api.darksky.net/forecast/${keyWeather}/${location}?lang=${localStorage.getItem('lang')}`;
    darkSkyApi(urlWeather);
  } catch (e) {
    alertMessage(e);
  }
}

export default getGeoLocation;

