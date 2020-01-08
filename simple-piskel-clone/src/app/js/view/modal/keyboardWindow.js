
function createWindowHotKey() {
	const anchor = document.querySelector('.save');

	const element = `<aside class="keyboard_shortcut">
    <div class="keyboard_shortcut--wrap">
        <p class="keyboard_shortcut--wrap-text">Pen: <span class="keyName">P</span></p>
        <p class="keyboard_shortcut--wrap-text">Fill all canvas: <span class="keyName">A</span></p>
        <p class="keyboard_shortcut--wrap-text">Eraser: <span class="keyName">E</span></p>
        <p class="keyboard_shortcut--wrap-text">Stroke: <span class="keyName">L</span></p>
        <p class="keyboard_shortcut--wrap-text">Color chose: <span class="keyName">O</span></p>
        <p class="keyboard_shortcut--wrap-text">Increase pen size: <span class="keyName">[</span></p>
        <p class="keyboard_shortcut--wrap-text">Decrease size pen: <span class="keyName">]</span></p>
        <p class="keyboard_shortcut--wrap-text">Add frame: <span class="keyName">N</span></p>
        <p class="keyboard_shortcut--wrap-text" title="unchangeable">Open save form: <span class="keyName">Shift + S</span></p>
        <button class="keyboard_shortcut--wrap-default">Set default key</button>
        <button class="keyboard_shortcut--wrap-save">Save and close form</button>
    </div>
</aside>`;

	anchor.insertAdjacentHTML('afterend', element);
}

export default createWindowHotKey;
