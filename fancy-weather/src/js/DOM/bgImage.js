import getRandomPhoto from "../utilities/getRandomPhoto";
function createBackground(data) {
  const photosArr = data.photos.photo;
  let photoURLArr = photosArr.filter(value =>{
    if (value.height_o) return value;
  });

  const body = document.querySelector('body');
  const photo = photoURLArr[getRandomPhoto(photoURLArr.length)];
  body.style.background = `url("${photo.url_o}") center center / cover no-repeat fixed`;
}

export default createBackground;
