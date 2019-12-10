function getRandomPhoto(photo) {
  const min = 0;
  return Math.floor(Math.random() * (photo - min)) + min;
}

export default getRandomPhoto;
