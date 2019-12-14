import {keyOpenData} from "../configuration";
import setCityCountry from "../DOM/setCityCountry";


async function getDataCountry(data) {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${data}&key=${keyOpenData}&language=${localStorage.getItem('lang').toLowerCase()}`;
  const response = await fetch(url);
  const locationData = await response.json();
  setCityCountry(locationData);
}

export default getDataCountry;

