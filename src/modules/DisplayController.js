import Weather from './Data';

export default class DisplayController {
  static async getData() {
    const input = document.getElementById('input');
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const city = input.value.trim();
        Weather.getData(city)
          .then(DisplayController.displayCurrentWeather)
          .then(DisplayController.displayForecast)
          .catch((err) => {
            alert(err);
          });

        // try {
        //   await Weather.getData(city);
        //   DisplayController.displayCurrentWeather();
        //   DisplayController.displayForecast();

        //   console.log(Weather.getForecast(2));
        //   console.log(Weather.time);
        //   input.value = '';
        // } catch (err) {
        //   console.error(err);
        // }

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

  }
}
