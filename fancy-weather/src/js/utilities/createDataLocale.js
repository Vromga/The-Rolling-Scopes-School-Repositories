import {week, mouthBE} from "../configuration";

function createData(data, dateBE) {

  const dataArray = data.split(',');
  const dateDay = document.querySelector('.weather_today--date');
  const dateTime = document.querySelector('.weather_today--time');
  const date = dataArray.slice(0, -1).join(', ');
  const time = dataArray[dataArray.length - 1].trim().split(' ');
  let timeForInsert;
  if (time.length > 1) {
    timeForInsert = time[0].split(':');
    if (time[1] === 'PM') {
      timeForInsert[0] = +timeForInsert[0] + 12
    } else {
      timeForInsert[0] = +timeForInsert[0];
    }
  } else {
    timeForInsert = time[0].split(':');
  }

  const [hourStart, minuteStart, secondStart] = timeForInsert;

  function createWatch(h, m, s) {
    let hour = +h;
    let minute = +m;
    let second = +s;
    let timerID = setTimeout(function scope() {
      let tempHour = 0;
      let tempMinute = 0;
      let tempSecond = 0;
      hour < 10 ? tempHour = `0${hour}` : tempHour = hour;
      minute < 10 ? tempMinute = `0${minute}` : tempMinute = minute;
      second < 10 ? tempSecond = `0${second}` : tempSecond = second;
      dateTime.textContent = `${tempHour}:${tempMinute}:${tempSecond}`;

      if (hour > 23) {
        hour = 0;
      }
      if (minute >= 59) {
        minute = 0;
        hour += 1;
      }
      if (second >= 59) {
        second = 0;
        minute += 1;
      }
      second += 1;
      timerID = setTimeout(scope, 1000);
    }, 1000);


  }

  createWatch(hourStart, minuteStart, secondStart);


  const day = dateBE.getUTCDay();
  const mouth = dateBE.getUTCMonth();
  const year = dateBE.getUTCFullYear();
  const dateMouth = dateBE.getUTCDay();
  const hoursBE = dateBE.getHours();
  // if(offset < 0){
  //
  // }
  console.log(hoursBE);
  if (localStorage.getItem('lang') === 'BE') {
    dateDay.textContent = `${week.BE[day]}, ${dateMouth} ${mouthBE[mouth]} ${year}`;
  }else{
    dateDay.textContent = `${date}`;
  }
}

export default createData;

