import createBackground from "../DOM/bgImage";
import alertMessage from "../DOM/alert";

async function getImage(url) {
  try {
    let data;
    try {
      const urlReady = await url;
      const response = await fetch(urlReady);
      data = await response.json();
    }catch (e) {
      alertMessage(e);
    }
    createBackground(data);
  } catch (e) {
    alertMessage(e);
  }
}

export default getImage;
