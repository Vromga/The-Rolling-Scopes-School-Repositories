
function addNewFrame() {
  document.querySelector('.main--frame-lists').append(document.querySelector('.frame_container--list').cloneNode(true));
}

export default addNewFrame;
