const lang = [
  'EN', 'RU', 'BY'
];

const keyWeather = '36991b1be3297e1561963c6ed47c155e';
const keyGeoLocation = '1db8194a2703a0';
const imageKey = 'f258bef5c6ebd9401bba43395eb2fd21';

const optionsGeoLocationNavigator = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

const optionMap = {
  container: 'map',
  center: [-79.4512, 43.6568],
  zoom: 13,
  style: 'mapbox://styles/vromga/ck3x27sr35ddl1cmsxvf1zuf6',
}



export {lang, keyWeather, keyGeoLocation, imageKey, optionsGeoLocationNavigator, optionMap};
