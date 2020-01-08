
function createWindowHotKey() {
	const anchor = document.querySelector('.save');

	const element = `<aside class="keyboard_shortcut">
    <div class="keyboard_shortcut--wrap">
        <p class="keyboard_shortcut--wrap-text">Pen: <span class="keyName" data="pen">P</span></p>
        <p class="keyboard_shortcut--wrap-text">Fill all canvas: <span class="keyName" data="fill">A</span></p>
        <p class="keyboard_shortcut--wrap-text">Eraser: <span class="keyName" data="eraser">E</span></p>
        <p class="keyboard_shortcut--wrap-text">Stroke: <span class="keyName" data="stroke">L</span></p>
        <p class="keyboard_shortcut--wrap-text">Color chose: <span class="keyName" data="color">O</span></p>
        <p class="keyboard_shortcut--wrap-text">Increase pen size: <span class="keyName" data="increase">[</span></p>
        <p class="keyboard_shortcut--wrap-text">Decrease size pen: <span class="keyName" data="decrease">]</span></p>
        <p class="keyboard_shortcut--wrap-text">Add frame: <span class="keyName" data="newFrame">N</span></p>
        <p class="keyboard_shortcut--wrap-text" title="unchangeable">Open save form: <span class="keyName" data="unchangeable">Shift + S</span></p>
        <button class="keyboard_shortcut--wrap-default">Set default key</button>
        <button class="keyboard_shortcut--wrap-save">Save and close form</button>
    </div>
</aside>`;

	anchor.insertAdjacentHTML('afterend', element);
}

export default createWindowHotKey;
