/* eslint-disable no-alert */
import format from "date-fns/format";

export default class Weather {
  static city;

  static country;

  static time;

  static weekForecast;

  static current;

  static async getData(city) {
    const apiKey = process.env.KEY;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&include=days%2Ccurrent&iconSet=icons2&key=${apiKey}&contentType=json`,
      { mode: "cors" }
    );

    const data = await response.json();

    if (response.ok) {
      const split = await data.resolvedAddress.indexOf(",");
      this.city = (await data.resolvedAddress.includes(","))
        ? data.resolvedAddress.slice(0, split)
        : data.resolvedAddress;
      this.country = await data.resolvedAddress.slice(split + 1).trim();
      this.time = await format(
        new Date(`${data.days[0].datetime} ${data.currentConditions.datetime}`),
        "eeee, do MMM ''yy, h:mm aaa"
      );
      this.current = await data.currentConditions;
      this.weekForecast = await data.days;
    } else {
      alert("Location not found.");
    }
  }

  static getCurrent() {
    const { current } = this;
    const { weekForecast } = this;

    return [
      current.icon,
      current.conditions,
      Math.round(current.temp),
      Math.round(current.feelslike),
      Math.round(weekForecast[0].precipprob),
      Math.round(current.humidity),
      current.windspeed,
    ];
  }

  static getForecast(i) {
    const day = this.weekForecast[i];

    return [
      day.icon,
      format(new Date(day.datetime), "eee"),
      Math.round(day.tempmax),
      Math.round(day.tempmin),
    ];
  }
}
