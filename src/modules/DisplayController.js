/* eslint-disable no-alert */
import Weather from './Data';

export default class DisplayController {
  static getData() {
    const input = document.getElementById('input');
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const city = input.value.trim();
        Weather.getData(city)
          .then(DisplayController.displayCurrentWeather)
          .then(DisplayController.displayForecast)
          .catch((err) => {
            alert(err);
          });
        input.value = '';
      }
    });
  }

  static displayCurrentWeather() {
    const [dataIcon, dataCondition, dataTemp, dataFeelsLike, dataChanceRain,
      dataHumidity, dataWind] = Weather.getCurrent();

    const tempUnit = '°C';
    const speedUnit = 'km/h';
    const time = document.getElementById('time');
    const city = document.getElementById('city');
    const region = document.getElementById('region');
    const country = document.getElementById('country');
    const icon = document.getElementById('icon');
    const condition = document.getElementById('condition');
    const temp = document.getElementById('temp');

    const feelsLike = document.getElementById('feels-like');
    const chanceRain = document.getElementById('chance-of-rain');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    time.textContent = Weather.time;
    city.textContent = Weather.city;
    region.textContent = Weather.region;
    country.textContent = Weather.country;
    icon.src = dataIcon;
    condition.textContent = dataCondition;
    temp.textContent = `${dataTemp} ${tempUnit}`;

    feelsLike.textContent = `${dataFeelsLike} ${tempUnit}`;
    chanceRain.textContent = `${dataChanceRain}%`;
    humidity.textContent = `${dataHumidity}%`;
    wind.textContent = `${dataWind} ${speedUnit}`;
  }

  static displayForecast() {
    const forecastContainer = document.querySelector('.week-forecast');
    forecastContainer.textContent = '';

    for (let i = 1; i < 8; i++) {
      const [dataDayIcon, dataDayName, dataMaxTemp, dataMinTemp] = Weather.getForecast(i);
      const dayContainer = document.createElement('div');
      dayContainer.classList.add('day');

      const dayIcon = document.createElement('img');
      dayIcon.classList.add('day-icon');
      dayIcon.src = dataDayIcon;

      const dayName = document.createElement('p');
      dayName.classList.add('day-name');
      dayName.textContent = dataDayName;

      const maxTemp = document.createElement('p');
      maxTemp.classList.add('max-temp');
      maxTemp.textContent = `${dataMaxTemp} °C`;

      const minTemp = document.createElement('p');
      minTemp.classList.add('min-temp');
      minTemp.textContent = `${dataMinTemp} °C`;

      dayContainer.appendChild(dayIcon);
      dayContainer.appendChild(dayName);
      dayContainer.appendChild(maxTemp);
      dayContainer.appendChild(minTemp);

      forecastContainer.appendChild(dayContainer);
    }
  }
}
