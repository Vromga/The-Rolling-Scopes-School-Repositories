
async function setCityCountry(data){
  const objData = await data;
  const townCountry = document.querySelector('.weather_today--town');
  const city = objData.results[0].components.city || objData.results[0].components.town || objData.results[0].components.village || objData.results[0].components.county || objData.results[0].components.state;
  townCountry.textContent = `${objData.results[0].components.country}, ${city}`;
}

export default setCityCountry;
