function colorSave() {
    const colorObj = {};
    colorObj.current = document.querySelector('#current').value;
    colorObj.prev = document.querySelector('#prev').style.backgroundColor;
    return JSON.stringify(colorObj);
}

export default colorSave;