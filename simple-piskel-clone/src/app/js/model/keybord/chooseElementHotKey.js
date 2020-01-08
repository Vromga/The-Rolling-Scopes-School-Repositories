import {elementForHotKey} from "../../configuration";

function chooseElementHotKey(e) {
	if (e.target.getAttribute('data') === 'unchangeable') return;
	elementForHotKey.tempKey = e.target;
}


export default chooseElementHotKey;
