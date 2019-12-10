import {keyWeather} from '../configuration';

const proxyApi = `https://cors-anywhere.herokuapp.com/`;
const urlWeather = `https://api.darksky.net/forecast/${keyWeather}/53,28?lang=ru`;

async function darkSkyApi() {
  const response = await fetch(proxyApi + urlWeather);
  return await response.json();
}

export  default darkSkyApi;
