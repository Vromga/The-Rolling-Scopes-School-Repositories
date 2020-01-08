function keyboardHotKey(e) {


	switch (e.code) {
		case 'KeyP':

			break;
		case 'KeyA':
			console.log('A');
			break;
		case 'KeyE':
			console.log('E');
			break;
		case 'KeyL':
			console.log('L');
			break;
		case 'KeyO':
			console.log('O');
			break;
		case 'KeyF':
			console.log('F');
			break;
		case 'KeyN':
			console.log('N');
			break;
		case 'BracketRight':
			console.log(']');
			break;
		case 'BracketLeft':
			console.log('[');
			break;
		//   no default
	}
}

export default keyboardHotKey;
