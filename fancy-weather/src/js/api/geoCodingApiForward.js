import {keyOpenData, keyWeather, optionMap, userOptions} from "../configuration";
import getDataCountry from "../utilities/getDataCountry";
import liveCordinates from "../DOM/setLiveCoordinates";
import {createMap} from "./mapBox";
import darkSkyApi from "./weatherAPI";


async function geoCoding() {
  const nameCity = document.querySelector('.header--search-input').value;
  const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${nameCity}&key=${keyOpenData}&language=${userOptions.lang.toLowerCase()}`;
  const response = await fetch(url);
  const locationData = await response.json();
  const coordinatesCity = locationData.features[0].geometry.coordinates;
  const [lon, lat] = coordinatesCity;
  const arrCord = [];
  arrCord.push(lat + ""); // переводим в строку, что бы не ломалась логика liveCordinates.
  arrCord.push(lon + "");
  const ls = arrCord.join(',');
  sessionStorage.setItem('coord', ls);
  location.reload();
  // getDataCountry(`${lat},${lon}`);

  // liveCordinates(arrCord);
  // optionMap.center = [lon, lat];
  // createMap(optionMap);
  // const urlWeather = `https://api.darksky.net/forecast/${keyWeather}/${lat},${lon}?lang=${userOptions.lang}`;
  // darkSkyApi(urlWeather);
}

export default geoCoding;
