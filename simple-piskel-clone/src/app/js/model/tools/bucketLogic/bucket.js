import getColorPicker from "../../../controller/getColorPicker";

const LEFT_MOUSE_BUTTON = 1;
const RIGHT_MOUSE_BUTTON = 3;

function bucket(e) {
  const canvas = document.querySelector('.main--draw_container-canvas');
  const ctx = canvas.getContext('2d');
  if (e.which === LEFT_MOUSE_BUTTON) {
    ctx.fillStyle = getColorPicker().primary;
  } else if (e.which === RIGHT_MOUSE_BUTTON) {
    ctx.fillStyle = getColorPicker().secondary;
  }
  ctx.fill();
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export default bucket;
