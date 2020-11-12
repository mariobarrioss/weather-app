const content = document.querySelector('#content');

export function createHeroLayout() {
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
                    <input class="input is-rounded" type="text" placeholder="Enter your location...">
                  </div>
                  <div class="control">
                    <a class="button is-info is-rounded">
                      Search
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-foot">
          <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
              <ul>
                <li id="home-tab" class="is-active"><a id="home-link">Weather info</a></li>
              </ul>
            </div>
          </nav>
        </div>`;
  section.insertAdjacentHTML('beforeend', heroContent);
  content.appendChild(section);
}
