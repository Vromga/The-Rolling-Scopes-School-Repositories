import createData from "../utilities/createDataLocale";
import getDayInFuture from "../utilities/getDayInFuture";

function getTimeZone(dataTime) {

  const todayDate = dataTime.currently.time;
  const offset = dataTime.timezone;
  const optionsDate = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: `${offset}`,
  };

  const formatterDate = new Intl.DateTimeFormat(`${localStorage.getItem('lang')}`, optionsDate);
  const time = new Date(todayDate * 1000);
  getDayInFuture(time.getDay());
  const dateLocale = formatterDate.format(time);
  createData(dateLocale, time, offset);
}


export default getTimeZone;
