function liveCordinates(cord) {
  const lat = document.querySelector('.map--cord-lat');
  const lon = document.querySelector('.map--cord-lon');

  const cordArr = [];
  cord.forEach(item => {
    cordArr.push(item.split('.'));
  });

  lat.textContent = `Lat: ${+cordArr[0][0]}${String.fromCharCode(176)}${cordArr[0][1].slice(0, 2)}'`;
  lon.textContent = `Lon: ${+cordArr[1][0]}${String.fromCharCode(176)}${cordArr[1][1].slice(0, 2)}'`;
}

export default liveCordinates;
