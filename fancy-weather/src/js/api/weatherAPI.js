import setWeatherData from "../DOM/setWeatherData";
import getTimeZone from "../DOM/setTime";

const proxyApi = `https://cors-anywhere.herokuapp.com/`;

async function darkSkyApi(url) {
  try {
    const response = await fetch(proxyApi + url);
    const data = await response.json();
    setWeatherData(data);
    getTimeZone(data);
  }
  catch (e) {
    throw new Error(e);
  }

}

export default darkSkyApi;
