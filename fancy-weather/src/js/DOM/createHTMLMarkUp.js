import translateUI from "../utilities/translateUI";

function createHTMLMarkUp() {
  const body = document.querySelector('body');
  const app = document.createElement('div');
  app.classList.add('app');
  app.innerHTML = `
  <header class="header">
            <button class="header--reload_image" title="${translateUI()[8]}"></button>
            <select class="header--select" id="select-lang">            
                <option value="EN" class="header--select-option">EN</option>
                <option value="RU" class="header--select-option">RU</option>
                <option value="BE" class="header--select-option">BЕ</option>
            </select>
            <button class="header--switch" data='F' title="${translateUI()[9]}">F&deg;</button>
            <button class="header--homeland" title="${translateUI()[10]}"></button>
            <div class="header--search">
                <button class="header--search-button_voice" title="${translateUI()[11]}"></button>
                <input type="search" name="searchCity" id="searchCity" class="header--search-input" placeholder="${translateUI()[4]}" title="${translateUI()[12]}">
                <button class="header--search-button">${translateUI()[5]}</button>
            </div>
        </header>
        <main class="main">
            <section class="weather_today">
                <p class="weather_today--town"></p>
                <p class="weather_today--date"></p>
                <p class="weather_today--time"></p>
                <p class="weather_today--temperature"></p>
                <canvas id="weatherToday" width="100%" height="100%" class="weather_today--icon"></canvas>
                <p class="weather_today--recommendation"></p>
                <p class="weather_today--all_day"></p>
                <ul class="weather_today--option">
                    <li class="weather_today--option-feels_like"></li>
                    <li class="weather_today--option-wind"></li>
                    <li class="weather_today--option-humidity"></li>
                    <li class="weather_today--option-uvIndex"></li>
                    <li class="weather_today--option-visibility"></li>
                    <li class="weather_today--option-hectopascals"></li>
                </ul>
            </section>
            <section class="weather_future">
                <ul class="weather_future--tomorrow">
                    <li class="weather_future--tomorrow-day"></li>                   
                    <li class="weather_future--tomorrow-temperature"></li>
                    <li class="weather_future--tomorrow-icon"><canvas id="weatherTomorrow"></canvas></li>
                    <li class="weather_future--tomorrow-summary"></li>
                </ul>
                <ul class="weather_future--after_tomorrow">
                    <li class="weather_future--after_tomorrow-day"></li>                   
                    <li class="weather_future--after_tomorrow-temperature"></li>
                    <li class="weather_future--after_tomorrow-icon"><canvas id="weatherAfterTomorrow"></canvas></li>
                    <li class="weather_future--after_tomorrow-summary"></li>
                </ul>
                <ul class="weather_future--after_after_tomorrow">
                    <li class="weather_future--after_after_tomorrow-day"></li>                    
                    <li class="weather_future--after_after_tomorrow-temperature"></li>
                    <li class="weather_future--after_after_tomorrow-icon"><canvas id="weatherAfterAfterTomorrow"></canvas></li>
                    <li class="weather_future--after_after_tomorrow-summary"></li>
                </ul>

            </section>
            <section class="map">
                <div id="map" class="mapboxgl-map"></div>
                <p class="map--cord-text">${translateUI()[3]}</p>
                <p class="map--cord-lat"></p>
                <p class="map--cord-lon"></p>
            </section> 
        </main>
        </div>
  `;
  const blockScreen = `
            <div class="loader"></div>
            <div class="alertMessage">
            <div class="alertMessage--wrap">
            <div class="alertMessage--wrap-warning">&#9888;</div>
            <p class="alertMessage--wrap-text_error">${translateUI()[6]}</p>
            <button class="alertMessage--wrap-reload">&#128472; ${translateUI()[7]}</button>    
            </div>`;
  body.insertAdjacentHTML('afterbegin', blockScreen);
  body.insertAdjacentElement('afterbegin', app);

}

export default createHTMLMarkUp;
