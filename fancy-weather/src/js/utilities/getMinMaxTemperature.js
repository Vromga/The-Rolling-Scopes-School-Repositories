async function getMinMaxTemperature(data) {
  const hourlyArr = await data.hourly.data;
  const tempArr = [];
  hourlyArr.forEach((v, i) => {
   if (i < 23) tempArr.push(v.temperature);
  });
  const tempObj = {};
  tempObj.min =Math.trunc(Math.min(...tempArr));
  tempObj.max = Math.trunc(Math.max(...tempArr));
  return tempObj;
}

export default getMinMaxTemperature;
