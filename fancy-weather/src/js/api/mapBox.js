/*  eslint-disable */
import alertMessage from "../DOM/alert";

let map;

function createMap(option) {
  try {
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js'
    );

    mapboxgl.accessToken = 'pk.eyJ1IjoidnJvbWdhIiwiYSI6ImNrM3gyOWcxZjA3eTgzbHM4bXd5aGRpaWcifQ.mxxklV2G8Sz2p2S8yDnKvg';
    map = new mapboxgl.Map(option);


    map.on('load', function () {
      map.setLayoutProperty('country-label', 'text-field', [
        'format',
        ['get', `name_${localStorage.getItem('lang').toLowerCase()}`],
        {'font-scale': 1.2},
        '\n',
        {},
        ['get', 'name'],
        {
          'font-scale': 0.8,
          'text-font': [
            'literal',
            ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
          ]
        }
      ]);
    });
  } catch (e) {
    alertMessage(e);
  }
}

export {map, createMap};
/*  eslint-enable */
