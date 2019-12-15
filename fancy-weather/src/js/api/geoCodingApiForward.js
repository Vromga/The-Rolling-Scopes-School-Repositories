import {keyOpenData} from "../configuration";
import alertMessage from "../DOM/alert";

async function geoCoding() {
  try {
    const nameCity = document.querySelector('.header--search-input').value;
    const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${nameCity}&key=${keyOpenData}&language=${localStorage.getItem('lang').toLowerCase()}`;
    const response = await fetch(url);
    const locationData = await response.json();
    const coordinatesCity = locationData.features[0].geometry.coordinates;
    const [lon, lat] = coordinatesCity;
    const arrCord = [];
    arrCord.push(lat.toString()); // переводим в строку, что бы не ломалась логика liveCordinates.
    arrCord.push(lon.toString());
    const ls = arrCord.join(',');
    sessionStorage.setItem('coord', ls);
    window.location.reload();
  } catch (e) {
    alertMessage(e);
  }
}

export default geoCoding;
