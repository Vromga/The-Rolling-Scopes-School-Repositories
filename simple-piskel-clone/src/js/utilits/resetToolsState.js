import {tools} from "../configuration";

function resetToolsState() {
  for (const prop of Object.keys(tools)) {
    tools[prop] = false;
  }
}

export default resetToolsState;
