import {key} from "../../configuration";

function removeKeyWindow(){
document.querySelector('.keyboard_shortcut').remove();
localStorage.setItem('hotkey', `${JSON.stringify(key)}`);
window.location.reload();
}

export default removeKeyWindow;
