import createData from "../utilities/createDataLocale";

function getTimeZone(dataTime) {

  const todayDate = dataTime.currently.time;
  const offset = dataTime.timezone;
  const optionsDate = {
    weekday: 'short',
    year: '2-digit',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: `${offset}`,
  };

  const formatterDate = new Intl.DateTimeFormat('en', optionsDate);
  const time = new Date(todayDate * 1000);
  const dateLocale = formatterDate.format(time);
  createData(dateLocale);
}


export default getTimeZone;
