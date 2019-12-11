
async function setCityCountry(data){
  const objData = await data;
  const townCountry = document.querySelector('.weather_today--town');
  townCountry.textContent = `${objData.results[0].components.country}, ${objData.results[0].components.city}`;
}

export default setCityCountry;
