import setWeatherData from "../DOM/setWeatherData";
import getTimeZone from "../DOM/setTime";

const proxyApi = `https://cors-anywhere.herokuapp.com/`;

async function darkSkyApi(url) {
  const response = await fetch(proxyApi + url);
  const data = await response.json();
  setWeatherData(data);
  getTimeZone(data);
}

export default darkSkyApi;
