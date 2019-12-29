function setActiveElement(e){
  if (e.target.className === 'resize'){
    const resize = document.querySelectorAll('.resize');
    [...resize].forEach((v)=>v.classList.remove('active_element'));
    e.target.classList.add('active_element');
  } else if (e.target.getAttribute('data') === 'tools'){
    const tools = document.querySelectorAll('.tools');
    [...tools].forEach((v)=>v.classList.remove('active_element'));
    e.target.classList.add('active_element');
  }
}

export default setActiveElement;
