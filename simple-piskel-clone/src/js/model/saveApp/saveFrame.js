import {frame} from "../../configuration";

function saveFrame(){
  localStorage.setItem('frame', `${JSON.stringify(frame)}`);
}

export default saveFrame;
