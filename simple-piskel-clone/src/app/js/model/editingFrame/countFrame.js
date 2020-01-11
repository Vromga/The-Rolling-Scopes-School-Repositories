function countFrame() {
  const frameNumberCollection = document.querySelectorAll('.frame--preview-number');
  const frames = document.querySelectorAll('.frame');
  [...frameNumberCollection].forEach((v, i)=>{
    v.textContent = `${i + 1}`;
  });
  [...frames].forEach((v)=>{
  	v.classList.add('droppable');
  });
}

export default countFrame;
