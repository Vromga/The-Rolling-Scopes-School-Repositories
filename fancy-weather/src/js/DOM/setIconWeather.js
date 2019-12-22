const Skycons = require('../../../node_modules/skycons/skycons')(window);

function setIcon(icon, iconID) {
  const skycons = new Skycons({"monochrome": false,color:{"cloud" : "#F00"}});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}

export default setIcon;
