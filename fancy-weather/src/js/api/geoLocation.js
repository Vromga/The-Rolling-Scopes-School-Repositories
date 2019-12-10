import {optionsGeoLocationNavigator, optionMap} from '../configuration';
import {createMap} from "./mapBox";

function getGeoLocation() {

  function success(pos) {
    const crd = pos.coords;
    optionMap.center = [crd.longitude, crd.latitude];
    createMap(optionMap);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);

  };

  navigator.geolocation.getCurrentPosition(success, error, optionsGeoLocationNavigator);
}

export default getGeoLocation;
