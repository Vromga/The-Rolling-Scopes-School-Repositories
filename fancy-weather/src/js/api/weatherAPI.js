import setWeatherData from "../DOM/setWeatherData";

const proxyApi = `https://cors-anywhere.herokuapp.com/`;

async function darkSkyApi(url) {
  const response = await fetch(proxyApi + url);
  const data = await response.json();
  setWeatherData(data);
}

export default darkSkyApi;
