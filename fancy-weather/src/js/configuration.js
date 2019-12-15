const keyWeather = '36991b1be3297e1561963c6ed47c155e';
const keyGeoLocation = '1db8194a2703a0';
const imageKey = 'f258bef5c6ebd9401bba43395eb2fd21';
const keyOpenData = '65467207ccbd4bf1a8d0f1e6c215bbbf';

const optionMap = {
  container: 'map',
  center: [-79.4512, 43.6568],
  zoom: 10,
  style: 'mapbox://styles/mapbox/streets-v11',
};


const week = {
  EN: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  RU: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  BE: ['Панядзелак', 'Аўторак', 'Серада', 'Чацьвер', 'Пятніца', 'Субота', 'Нядзеля'],
  BeSort: ['Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб', 'Няд']
};

const mouthBE = ['Студзень', 'Люты', 'Сакавiк', 'Красавiк', 'Травень', 'Чэрвень', 'Лiпень', 'Жнiвень', 'Верасень', 'Кастрычнiк', 'Лiстапад', 'Снежань'];

const UI = {
  EN: ['Real fell:', 'Wind:', 'Humidity:', 'Your coordinates:', 'Search city', 'Search', 'Oops! Something went wrong! Looks like some service left for lunch &#128521;', 'Reload', 'Reload image', 'Select temperature scale', 'Return home', 'Voice search', 'Enter city name or zip code', 'All day', 'UV-Index', 'Visibility', 'km/h', 'km', 'Pressure', 'mm Hg.st.'],
  RU: ['Ощущается как:', 'Ветер:', 'Влажность:', 'Ваши координаты:', 'Искать город', 'Искать', 'УПС! Что-то пошло не так! Похоже какой-то сервис ушёл на обед &#128521;', 'Перезагрузить', 'Пезагрузить изображение', 'Выбрать шкалу температуры', 'Вернуться домой', 'Голосовой поиск', 'Введите название города или индекс', 'Весь день', 'УФ-индекс', 'Видимость', 'км/ч', 'км', 'Давление', 'мм рт.ст.'],
  BE: ['Адчуваецца як:', 'Вецер:', 'Вільготнасць:', 'Вашы каардынаты:', 'Пошук горада', 'Пошук', 'УПС! Нешта пайшло не так! Падобна нейкі сэрвіс сышоў на абед & # 128521;', 'Перазагрузіць', 'Пезагрузить Малюнак', 'Выбраць шкалу тэмпературы', 'вярнуцца дадому', 'Галасавы пошук', 'Увядзіце назву горада ці індэкс', 'Увесь дзень', 'УФ-індэкс', 'Бачнасць', 'км/г', 'км', 'Ціск', 'мм рт.арт']
};

export {keyWeather, keyGeoLocation, imageKey, optionMap, keyOpenData, week, UI, mouthBE};
