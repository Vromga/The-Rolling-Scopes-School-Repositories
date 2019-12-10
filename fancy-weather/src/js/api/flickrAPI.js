import {imageKey} from "../configuration";
import createBackground from "../DOM/bgImage";

async function getImage() {
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${imageKey}&tags=weather%2C+nature%2C+summer%2C+rain%2C+night&extras=url_o&format=json&nojsoncallback=1`;
  //   const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=41ce6dc3ed2f9ff30457b541b61cafb6&tags=winter%2C+night%2C+snow&extras=url_o&format=json&nojsoncallback=1&auth_token=72157712103477676-2f9bb9d05d4b3d9b&api_sig=164c8398c99075481916023be0c09f27`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    createBackground(data);
  } catch (e) {
    throw new Error(e);
  }
}

export default getImage;
