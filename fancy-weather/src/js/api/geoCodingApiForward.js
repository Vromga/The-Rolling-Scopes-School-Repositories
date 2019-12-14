import {keyOpenData} from "../configuration";

async function geoCoding() {
  const nameCity = document.querySelector('.header--search-input').value;
  const url = `https://api.opencagedata.com/geocode/v1/geojson?q=${nameCity}&key=${keyOpenData}&language=${localStorage.getItem('lang').toLowerCase()}`;
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
}

export default geoCoding;
