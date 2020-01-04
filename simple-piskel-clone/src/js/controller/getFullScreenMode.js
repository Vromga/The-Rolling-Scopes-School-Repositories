import fullScreen from "../model/fullScreen/fullScreen";

function getFullScreenMode() {
  fullScreen(document.querySelector('.layer--canvas'));
}
export default getFullScreenMode;
