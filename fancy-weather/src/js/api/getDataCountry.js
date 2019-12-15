import {keyOpenData} from "../configuration";
import setCityCountry from "../DOM/setCityCountry";
import alertMessage from "../DOM/alert";


async function getDataCountry(data) {
  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${data}&key=${keyOpenData}&language=${localStorage.getItem('lang').toLowerCase()}`;
    const response = await fetch(url);
    const locationData = await response.json();
    setCityCountry(locationData);
  }catch (e) {
    alertMessage(e);
  }
}

export default getDataCountry;

