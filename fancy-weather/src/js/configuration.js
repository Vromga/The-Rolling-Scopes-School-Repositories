const keyWeather = '36991b1be3297e1561963c6ed47c155e';
const keyGeoLocation = '1db8194a2703a0';
const imageKey = 'f258bef5c6ebd9401bba43395eb2fd21';
const keyOpenData = '65467207ccbd4bf1a8d0f1e6c215bbbf';


const userOptions ={
  lang: 'EN',
  temperatureScale: 'F'
};

const optionMap = {
  container: 'map',
  center: [-79.4512, 43.6568],
  zoom: 13,
  style: 'mapbox://styles/vromga/ck3x27sr35ddl1cmsxvf1zuf6',
};

const week = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
};

export {keyWeather, keyGeoLocation, imageKey, optionMap, keyOpenData, week, userOptions};
