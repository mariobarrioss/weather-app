const content = document.querySelector('#content');

export default function createHeroLayout() {
  const section = document.createElement('section');
  section.className = 'hero is-fullheight has-bg-img';
  const heroContent = `  
        <div class="hero-head">
          <div class="container has-text-centered">
            <h1 class="title has-text-black-ter mt-6">
              Weather App
            </h1>
            <h2 class="subtitle has-text-black-ter">
              Get the weather information from your city.  
            </h2>
          </div>
        </div>

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-half">
                <div class="field has-addons">
                  <div class="control is-expanded">
                    <input class="input is-rounded" id='city-input' type="text" placeholder="Enter your location..." pattern="[a-zA-Z]+">
                  </div>
                  <div class="control">
                    <a class="button is-info is-rounded" id="search-button">
                      Search
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <label class="radio has-text-black-ter">
                      <input type="radio" name="units" value="metric" checked>
                      Celsius
                    </label>
                    <label class="radio has-text-black-ter">
                      <input type="radio" name="units" value="imperial">
                      Fahrenheit
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container" id="weather-content">
            </div>
          </nav>
        </div>`;
  section.insertAdjacentHTML('beforeend', heroContent);
  content.appendChild(section);
}
