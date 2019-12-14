function setChoiceLang() {
  const optionLang = document.querySelectorAll('.header--select-option');
     optionLang.forEach(item => {
    if (item.value === localStorage.getItem('lang')) item.defaultSelected = true;
  })
}

export default setChoiceLang;
