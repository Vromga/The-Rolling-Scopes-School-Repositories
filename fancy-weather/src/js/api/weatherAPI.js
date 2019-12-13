import setWeatherData from "../DOM/setWeatherData";
import getTimeZone from "../DOM/setTime";
import createURLFlickr from "../utilities/createUrlFlickr";

const proxyApi = `https://cors-anywhere.herokuapp.com/`;

async function darkSkyApi(url) {
  try {
    const response = await fetch(proxyApi + url);
    const data = await response.json();
    setWeatherData(data);
    getTimeZone(data);
    createURLFlickr(data);
  }
  catch (e) {
    throw new Error(e);
  }

}

export default darkSkyApi;
