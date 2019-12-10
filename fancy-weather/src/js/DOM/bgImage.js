import getRandomPhoto from "../utilities/getRandomPhoto";
function createBackground(data) {
  const photosArr = data.photos.photo;
  let photoURLArr = photosArr.filter(value =>{
    if (value.height_o) return value;
  });

  const divPhoto = document.querySelector('.photo');
  const photo = photoURLArr[getRandomPhoto(photoURLArr.length)];
  divPhoto.style.background = `url("${photo.url_o}") center center / cover no-repeat fixed`;
}

export default createBackground;
