import saveStateApp from "./saveStateApp";
import getFPS from "../../controller/getFPS";

function saveFPS() {
  saveStateApp('fps', `${getFPS()}`);
}

export default saveFPS;
