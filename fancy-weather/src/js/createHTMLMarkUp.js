import {lang} from './configuration';

function createHTMLMarkUp() {

  const weatherArr = [
    'Feels Like 7C',
    'wind 2ms',
    'Humidity 83%'
  ];


  function createSingleHTMLElement(name, className) {
    const elem = document.createElement(name);
    elem.classList.add(className);
    return elem;
  }

  function createNestedHTMLElement(arr, parent, children, parentClass, childrenClass, attributeName) {
    const selectLang = createSingleHTMLElement(parent, parentClass);
    arr.forEach(value => {
      const optionElem = createSingleHTMLElement(children, childrenClass);
      optionElem.setAttribute(attributeName, `${value}`);
      optionElem.textContent = `${value}`;
      selectLang.append(optionElem);
    });
    return selectLang;
  }


  const body = document.querySelector('body');
  const app = createSingleHTMLElement('div', 'app');

  //      ########## HEADER ############      //

  const header = createSingleHTMLElement('header', 'header');
  const reloadImageButton = createSingleHTMLElement('button', 'header--reload_image');
  const selectLanguage = createNestedHTMLElement(lang, 'select', 'option', 'header--select', 'header--select-option', 'value');
  const buttonSwitchTemperature = createSingleHTMLElement('button', 'header--switch');
  buttonSwitchTemperature.textContent = `F${String.fromCharCode(176)}`;
  const searchWrapper = createSingleHTMLElement('div', 'header--search');
  const inputSearch = createSingleHTMLElement('input', 'header--search-input');
  inputSearch.setAttribute('type', 'search');
  inputSearch.setAttribute('placeholder', 'Search city or ZIP');
  const buttonSearch = createSingleHTMLElement('button', 'header--search-button');
  buttonSearch.textContent = 'search';

  searchWrapper.append(inputSearch);
  searchWrapper.append(buttonSearch);

  header.append(reloadImageButton);
  header.append(selectLanguage);
  header.append(buttonSwitchTemperature);
  header.append(searchWrapper);

  //      ########## MAIN ############      //

  const main = createSingleHTMLElement('main', 'main');

  //      ########## Weather today block ############      //

  const sectionWeatherToday = createSingleHTMLElement('section', 'weather_today');
  const town = createSingleHTMLElement('p', 'weather_today--town');
  const dateToday = createSingleHTMLElement('p', 'weather_today--date');
  const timeNow = createSingleHTMLElement('p', 'weather_today--time');
  const temperatureNow = createSingleHTMLElement('p', 'weather_today--temperature');
  const iconWeatherNow = createSingleHTMLElement('div', 'weather_today--icon');
  const recommendationWeather = createSingleHTMLElement('p', 'weather_today--recommendation');
  const weatherOptionToday = createNestedHTMLElement(weatherArr, 'ul', 'li', 'weather_today--option', 'weather_today--option-elem', 'data');

  sectionWeatherToday.append(town);
  sectionWeatherToday.append(dateToday);
  sectionWeatherToday.append(timeNow);
  sectionWeatherToday.append(temperatureNow);
  sectionWeatherToday.append(iconWeatherNow);
  sectionWeatherToday.append(recommendationWeather);
  sectionWeatherToday.append(weatherOptionToday);
  main.append(sectionWeatherToday);

  //      ########## Weather future block ############      //

  const sectionWeatherFuture = createSingleHTMLElement('section', 'weather_future');
  const tomorrowWeather = createSingleHTMLElement('ul', 'weather_future--elem');
  tomorrowWeather.setAttribute('data', 'day1');
  const tomorrowWeatherWeek = createSingleHTMLElement('li', 'weather_future--elem-week');
  const tomorrowWeatherTemperature = createSingleHTMLElement('li', 'weather_future--elem-temperature');
  const tomorrowWeatherIcon = createSingleHTMLElement('li', 'weather_future--elem-icon');

//      ########## Delete after ############      //
  tomorrowWeatherWeek.textContent = 'Пн';
  tomorrowWeatherTemperature.textContent = `-18${String.fromCharCode(176)}`;
  tomorrowWeatherIcon.style.backgroundImage = 'url("./img/rain.png")';
//      ########## Delete after ############      //

  tomorrowWeather.append(tomorrowWeatherWeek);
  tomorrowWeather.append(tomorrowWeatherTemperature);
  tomorrowWeather.append(tomorrowWeatherIcon);

  const afterTomorrowWeather = tomorrowWeather.cloneNode(true);
  afterTomorrowWeather.setAttribute('data', 'day2');
  const afterTheDayAfterTomorrow = tomorrowWeather.cloneNode(true);
  afterTheDayAfterTomorrow.setAttribute('data', 'day3');
  sectionWeatherFuture.append(tomorrowWeather);
  sectionWeatherFuture.append(afterTomorrowWeather);
  sectionWeatherFuture.append(afterTheDayAfterTomorrow);



  main.append(sectionWeatherFuture);

  //      ########## Map block ############      //

  const sectionMap = createSingleHTMLElement('section', 'map');
  const mapBox = createSingleHTMLElement('div', 'map--map');
  const textCordinates = createSingleHTMLElement('p', 'map--cord-text');
  const latitude = createSingleHTMLElement('p', 'map--cord-lat');
  const longitude = createSingleHTMLElement('p', 'map--cord-lon');


  sectionMap.append(mapBox);
  sectionMap.append(textCordinates);
  sectionMap.append(latitude);
  sectionMap.append(longitude);


  main.append(sectionMap);

  app.append(header);
  app.append(main);

  //      ########## Delete after ############      //

  town.textContent = 'Minsk, Belarus';
  dateToday.textContent = 'Mon 30 Nov 2019';
  timeNow.textContent = '22:58';
  temperatureNow.textContent = `-5${String.fromCharCode(176)}`;
  recommendationWeather.textContent = 'Облачно, холодно, одевайтесь потеплее';
  textCordinates.textContent = 'Your coordinates:';
  latitude.textContent = `Latitude: 53${String.fromCharCode(176)} 28'`;
  longitude.textContent = `Latitude: 28${String.fromCharCode(176)} 08'`;

  body.insertAdjacentElement('afterbegin', app);
}

export default createHTMLMarkUp;
