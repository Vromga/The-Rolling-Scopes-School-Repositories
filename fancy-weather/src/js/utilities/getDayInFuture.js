import {week} from "../configuration";

function getDayInFuture(day) {
  const tomorrowDay = document.querySelector('.weather_future--tomorrow-day');
  const afterTomorrowDay = document.querySelector('.weather_future--after_tomorrow-day');
  const afterAfterTomorrowDay = document.querySelector('.weather_future--after_after_tomorrow-day');

  if (day === 5){
    tomorrowDay.textContent = week.en[6];
    afterTomorrowDay.textContent = week.en[7];
    afterAfterTomorrowDay.textContent = week.en[0];
  }

  if (day === 6){
    tomorrowDay.textContent = week.en[7];
    afterTomorrowDay.textContent = week.en[0];
    afterAfterTomorrowDay.textContent = week.en[1];
  }

  if (day === 7){
    tomorrowDay.textContent = week.en[0];
    afterTomorrowDay.textContent = week.en[1];
    afterAfterTomorrowDay.textContent = week.en[2];
  }

  if (day < 5){
    tomorrowDay.textContent = week.en[day];
    afterTomorrowDay.textContent = week.en[day+1];
    afterAfterTomorrowDay.textContent = week.en[day+2];
  }
}

export default getDayInFuture;
