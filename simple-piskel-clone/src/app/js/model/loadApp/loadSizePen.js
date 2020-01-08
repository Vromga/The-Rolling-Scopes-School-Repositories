function loadSizePen() {
  const virtualPixel = localStorage.getItem('virtualPixel');
  const penSize = document.querySelectorAll('.pick_size--radio');

  [...penSize].forEach((v)=>{
    if(v.value === virtualPixel) v.setAttribute('checked', 'checked') //   v.checked = 'checked';
  })
}

export default loadSizePen;
