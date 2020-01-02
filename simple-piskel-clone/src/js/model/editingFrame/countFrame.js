function countFrame() {
  const frameNumberCollection = document.querySelectorAll('.frame--preview-number');
  console.log(frameNumberCollection);
  [...frameNumberCollection].forEach((v, i)=>{
    v.textContent = `${i + 1}`;
  })
}

export default countFrame;
