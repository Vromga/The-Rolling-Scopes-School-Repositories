function countFrame() {
  const frameNumberCollection = document.querySelectorAll('.frame--preview-number');
  [...frameNumberCollection].forEach((v, i)=>{
    v.textContent = `${i + 1}`;
  })
}

export default countFrame;
