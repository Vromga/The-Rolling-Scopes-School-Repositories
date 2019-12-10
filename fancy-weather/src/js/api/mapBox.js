
let map;

function createMap(option) {
  mapboxgl.accessToken = 'pk.eyJ1IjoidnJvbWdhIiwiYSI6ImNrM3gyOWcxZjA3eTgzbHM4bXd5aGRpaWcifQ.mxxklV2G8Sz2p2S8yDnKvg';
  map = new mapboxgl.Map(option);
}

export {map, createMap};
