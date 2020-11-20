const apiKey = '447dcfa912e5f6fa430f8469ed83f7d7';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function renderWeather(data) {
  if (data.cod === '404') {
    alert(data.message);
    return;
  }

  const { description } = data.weather[0];
  const { name } = data;
  const { country } = data.sys;
  const { temp } = data.main;
  const { feels_like: feelsLike } = data.main;
  const { humidity } = data.main;
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const weatherContent = document.querySelector('#weather-content');
  weatherContent.innerHTML = '';
  const weatherHTML = `
                      <nav class="level transparent-bg">
                        <div class="level-item has-text-centered">
                          <div>
                            <p></p>
                            <figure class="image is-128x128">
                              <img src="${iconUrl}" alt="Placeholder image">
                            </figure>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading has-text-black-ter">city</p>
                            <p class="title has-text-black-ter">${name}, ${country}</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading has-text-black-ter">current status</p>
                            <p class="title has-text-black-ter">${description}</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading has-text-black-ter">Humidity</p>
                            <p class="title has-text-black-ter">${humidity}%</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading has-text-black-ter">temperature</p>
                            <p class="title has-text-black-ter">${temp}°</p>
                          </div>
                        </div>
                        <div class="level-item has-text-centered">
                          <div>
                            <p class="heading has-text-black-ter">feels like</p>
                            <p class="title has-text-black-ter">${feelsLike}°</p>
                          </div>
                        </div>
                      </nav>`;
  weatherContent.insertAdjacentHTML('beforeend', weatherHTML);
}

export async function getWeatherInfo() {
  const city = document.querySelector('#city-input').value;
  const url = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url, { mode: 'cors' });

    const jsonResponse = await response.json();
    renderWeather(jsonResponse);
  } catch (error) {
    return null;
  }
}
