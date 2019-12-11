function createHTMLMarkUp() {
  const body = document.querySelector('body');
  const app = document.createElement('div');
  app.classList.add('app');
  app.innerHTML = `
  <header class="header">
            <button class="header--reload_image"></button>
            <select class="header--select">
                <option value="EN" class="header--select-option" selected>EN</option>
                <option value="RU" class="header--select-option">RU</option>
                <option value="BY" class="header--select-option">BY</option>
            </select>
            <button class="header--switch" data='F'>F&deg;</button>
            <div class="header--search">
                <input type="search" name="searchCity" id="searchCity" class="header--search-input" placeholder="Search city">
                <button class="header--search-button">search</button>
            </div>
        </header>
        <main class="main">
            <section class="weather_today">
                <p class="weather_today--town">Starye Darohi, Belarus</p>
                <p class="weather_today--date">Mon 30 Nov 2019</p>
                <p class="weather_today--time">17:23</p>
                <p class="weather_today--temperature" data="F">17&deg;</p>
                <div class="weather_today--icon"></div>
                <p class="weather_today--recommendation">Облачно, возможно дождь.</p>
                <ul class="weather_today--option">
                    <li class="weather_today--option-feels_like">Feels Like 7C</li>
                    <li class="weather_today--option-wind">wind 2ms</li>
                    <li class="weather_today--option-humidity">Humidity 83%</li>
                </ul>
            </section>
            <section class="weather_future">
                <ul class="weather_future--tomorrow">
                    <li class="weather_future--tomorrow-day">Пн</li>
                    <li class="weather_future--tomorrow-temperature">-18°</li>
                    <li class="weather_future--tomorrow-icon" style="background-image: url(&quot;./img/rain.png&quot;);"></li>
                </ul>
                <ul class="weather_future--after_tomorrow">
                    <li class="weather_future--after_tomorrow-day">Пн</li>
                    <li class="weather_future--after_tomorrow-temperature">-18°</li>
                    <li class="weather_future--after_tomorrow-icon" style="background-image: url(&quot;./img/rain.png&quot;);"></li>
                </ul>
                <ul class="weather_future--after_after_tomorrow">
                    <li class="weather_future--after_after_tomorrow-day">Пн</li>
                    <li class="weather_future--after_after_tomorrow-temperature">-18°</li>
                    <li class="weather_future--after_after_tomorrow-icon" style="background-image: url(&quot;./img/rain.png&quot;);"></li>
                </ul>

            </section>
            <section class="map">
                <div id="map" class="mapboxgl-map"></div>
                <p class="map--cord-text">Your coordinates:</p>
                <p class="map--cord-lat">Latitude: 53° 28'</p>
                <p class="map--cord-lon">Latitude: 28° 08'</p>
            </section>
        </main>
  `;

  body.insertAdjacentElement('afterbegin', app);
}

export default createHTMLMarkUp;
