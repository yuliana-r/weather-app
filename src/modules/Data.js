/* eslint-disable no-alert */
import format from 'date-fns/format';

export default class Weather {
  static city;

  static region;

  static country;

  static time;

  static weekForecast;

  static current;

  static async getData(city) {
    const apiKey = 'a511c52e142845de9da160517232305';
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=8&aqi=no&alerts=no`,
      { mode: 'cors' },
    );
    const data = await response.json();

    if (response.ok) {
      this.city = await data.location.name;
      this.region = await data.location.region;
      this.country = await data.location.country;
      this.time = await format(new Date(data.location.localtime), 'eeee, do MMM \'\'yy, h:mm aaa');
      this.current = await data.current;
      this.weekForecast = await data.forecast.forecastday;
    } else {
      alert('Location not found.');
    }
  }

  static displayCurrent() {
    const { current } = this;
    const chanceOfRain = this.weekForecast[0].day.daily_chance_of_rain;

    return [
      current.condition.icon,
      current.condition.text,
      Math.round(current.temp_c),
      Math.round(current.feelslike_c),
      Math.round(chanceOfRain), // %
      Math.round(current.humidity), // %
      current.wind_kph,
    ];
  }

  static displayForecast(i) {
    const day = this.weekForecast[i];

    return [
      day.day.condition.icon,
      format(new Date(day.date), 'eee'),
      day.day.condition.text,
      Math.round(day.day.daily_chance_of_rain),
      Math.round(day.day.mintemp_c),
      Math.round(day.day.maxtemp_c),
    ];
  }
}
