import {imageKey} from "../configuration";
import createBackground from "../DOM/bgImage";

async function getImage() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imageKey}&tags=weather%2C+nature%2C+summer%2C+rain%2C+night&extras=url_o&format=json&nojsoncallback=1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    createBackground(data);
  } catch (e) {
    throw new Error(e);
  }
}

export default getImage;
