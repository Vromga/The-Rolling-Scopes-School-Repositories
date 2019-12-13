import translate from "./translateFutureDay";

function getDayInFuture(day) {
  const tomorrowDay = document.querySelector('.weather_future--tomorrow-day');
  const afterTomorrowDay = document.querySelector('.weather_future--after_tomorrow-day');
  const afterAfterTomorrowDay = document.querySelector('.weather_future--after_after_tomorrow-day');


  if (day === 5){
    tomorrowDay.textContent = translate()[5];
    afterTomorrowDay.textContent = translate()[6];
    afterAfterTomorrowDay.textContent = translate()[0];
  }

  if (day === 6){
    tomorrowDay.textContent = translate()[6];
    afterTomorrowDay.textContent = translate()[0];
    afterAfterTomorrowDay.textContent = translate()[1];
  }

  if (day === 7){
    tomorrowDay.textContent = translate()[0];
    afterTomorrowDay.textContent = translate()[1];
    afterAfterTomorrowDay.textContent = translate()[2];
  }

  if (day < 5){
    tomorrowDay.textContent = translate()[day];
    afterTomorrowDay.textContent = translate()[day+1];
    afterAfterTomorrowDay.textContent = translate()[day+2];
  }
}

export default getDayInFuture;
