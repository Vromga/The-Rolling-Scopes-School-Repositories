import {imageKey} from "../configuration";
import getImage from "../api/flickrAPI";

async function createURLFlickr(data) {
  const dataImg = await data;

  const timestamp = new Date(dataImg.currently.time * 1000);
  const {offset} = dataImg;
  const weatherNow = dataImg.currently.icon.replace(/-/g, "");

  let timeNow;
  let monthNow;
  let hours = timestamp.getUTCHours() + offset;
  if (hours > 23) {
    hours -= 24;
  }

  if (hours >= 21 || hours <= 3) {
    timeNow = `night`;
  } else if (hours >= 4 && hours <= 8) {
    timeNow = `morning`;
  } else if (hours >= 9 && hours <= 14) {
    timeNow = `day`;
  } else if (hours >= 15 && hours <= 20) {
    timeNow = `evening`;
  }

  const month = timestamp.getUTCMonth();

  if (month <= 1 || month === 11) {
    monthNow = `winter`;
  } else if (month >= 2 && month <= 4) {
    monthNow = `spring`;
  } else if (month >= 5 && month <= 7) {
    monthNow = `summer`;
  } else if (month >= 8 && month <= 10) {
    monthNow = `autumn`;
  }

  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imageKey}&tags=weather%2C+${timeNow}%2C+${monthNow}%2C+${weatherNow}&extras=url_o&format=json&nojsoncallback=1`;
  getImage(url);
}

export default createURLFlickr;
