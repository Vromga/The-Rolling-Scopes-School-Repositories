function setIcon(icon, iconID) {
  const skycons = new Skycons({color: 'white'});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}

export default setIcon;
