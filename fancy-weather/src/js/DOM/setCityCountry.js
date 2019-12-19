async function setCityCountry(data) {
  const townCountry = document.querySelector('.weather_today--town');
  const {country} = data.results[0].components;
  const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village || data.results[0].components.county || data.results[0].components.state;

  if (country === undefined && city === undefined) {
    townCountry.textContent = ``;
  } else if (country === undefined) {
    townCountry.textContent = `${city}`;
  } else if (city === undefined) {
    townCountry.textContent = `${country}`
  } else {
    townCountry.textContent = `${country}, ${city}`;
  }


}

export default setCityCountry;
