const keyWeather = '36991b1be3297e1561963c6ed47c155e';
const keyGeoLocation = '1db8194a2703a0';
const imageKey = 'f258bef5c6ebd9401bba43395eb2fd21';
const keyOpenData = '65467207ccbd4bf1a8d0f1e6c215bbbf';


// const userOptions = {
//   lang: 'EN',
//   temperatureScale: 'F',
// };

const optionMap = {
  container: 'map',
  center: [-79.4512, 43.6568],
  zoom: 10,
  style: 'mapbox://styles/vromga/ck3x27sr35ddl1cmsxvf1zuf6',
};



const week = {
  EN: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  RU: ['Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Сбт', 'Вск'],
  BE: ['Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб', 'Няд']
};

const mouthBE = ['Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Травень', 'Чэрвень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань'];

const UI = {
  EN: ['Real fell:', 'Wind:', 'Humidity:', 'Your coordinates:', 'Search city', 'Search'],
  RU: ['Ощущается как:', 'Ветер:', 'Влажность:', 'Ваши координаты:', 'Искать город', 'Искать'],
  BE: ['Адчуваецца як:', 'Вецер:', 'Вільготнасць:', 'Вашы каардынаты:', 'Пошук горада', 'Пошук']
};

export {keyWeather, keyGeoLocation, imageKey, optionMap, keyOpenData, week, UI, mouthBE};
