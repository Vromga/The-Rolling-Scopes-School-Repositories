function getFrameForAnimation() {
  let count = 0;
  const frameArr = [];
  while(localStorage.getItem(`frame${count}`)){
    frameArr.push(localStorage.getItem(`frame${count}`));
    count += 1;
  }
  return  frameArr;
}

export default getFrameForAnimation;


