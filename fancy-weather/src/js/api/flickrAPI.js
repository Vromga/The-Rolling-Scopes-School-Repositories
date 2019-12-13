import {imageKey} from "../configuration";
import createBackground from "../DOM/bgImage";

async function getImage(url) {

  try {
    const urlReady = await url;
    const response = await fetch(urlReady);
    const data = await response.json();
    createBackground(data);
  } catch (e) {
    throw new Error(e);
  }
}

export default getImage;
