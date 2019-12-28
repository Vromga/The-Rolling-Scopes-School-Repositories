function setActiveElement(e){
  if (e.target.className === 'resize'){
    const resize = document.querySelectorAll('.resize');
    [...resize].forEach((v)=>v.classList.remove('active_element'));
    e.target.classList.add('active_element');
  }

}

export default setActiveElement;
