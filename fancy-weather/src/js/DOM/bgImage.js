import getRandomPhoto from "../utilities/getRandomPhoto";
import loader from "../utilities/loader";

function createBackground(data) {
  const photosArr = data.photos.photo;
  const docWidth = document.documentElement.offsetWidth;
  const body = document.querySelector('body');

  if (docWidth < 1024) {
    const photo = photosArr[getRandomPhoto(photosArr.length)];
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    body.style.background = `url("${url}") center center / cover no-repeat fixed`;
  } else {
    const photoURLArr = photosArr.filter(value => {
      if (value.height_o) return value;
    });
    const photo = photoURLArr[getRandomPhoto(photoURLArr.length)];
    body.style.background = `url("${photo.url_o}") center center / cover no-repeat fixed`;
  }

  loader()
}

export default createBackground;
