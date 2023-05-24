/* eslint-disable no-alert */
export default class Weather {
  static city;

  static region;

  static country;

  static currentCondition;

  static tempC;

  static windKph;

  static time;

  static weekForecast;

  static async getData(city) {
    const apiKey = 'a511c52e142845de9da160517232305';
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=8&aqi=no&alerts=no`,
      { mode: 'cors' },
    );
    const data = await response.json();

    if (response.ok) {
      this.city = data.location.name;
      this.region = data.location.region;
      this.country = data.location.country;
      this.condition = data.current.condition.text;
      this.tempC = data.current.temp_c;
      this.windKph = data.current.wind_kph;
      this.time = data.location.localtime;
      this.weekForecast = data.forecast.forecastday;
    } else {
      alert('Location not found.');
    }
  }

  //     console.log(`F:${response.current.temp_f}`);
  //     console.log(`Wind mph:${response.current.wind_mph}`);
}
