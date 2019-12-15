import setWeatherData from "../DOM/setWeatherData";
import getTimeZone from "../DOM/setTime";
import createURLFlickr from "../utilities/createUrlFlickr";
import alertMessage from "../DOM/alert";

const proxyApi = `https://cors-anywhere.herokuapp.com/`;

async function darkSkyApi(url) {
  try {
    let data;
    try {
      const response = await fetch(proxyApi + url);
       data = await response.json();
    }
    catch (e) {
      alertMessage(e);
    }
    setWeatherData(data);
    getTimeZone(data);
    createURLFlickr(data);
  } catch (e) {
    alertMessage(e);
  }

}

export default darkSkyApi;
