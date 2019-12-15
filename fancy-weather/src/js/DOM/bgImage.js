import getRandomPhoto from "../utilities/getRandomPhoto";
import loader from "../utilities/loader";

function createBackground(data) {
  const photosArr = data.photos.photo;
  const photoURLArr = photosArr.filter(value => {
    if (value.height_o) return value;
  });

  const body = document.querySelector('body');
  const photo = photoURLArr[getRandomPhoto(photoURLArr.length)];
  body.style.background = `url("${photo.url_o}") center center / cover no-repeat fixed`;
  loader();
}

export default createBackground;
