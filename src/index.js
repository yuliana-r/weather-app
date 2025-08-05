/* eslint-disable no-alert */
import DisplayController from './modules/DisplayController';
import Weather from './modules/Data';
import './styles/style.css';

window.onload = () => {
  Weather.getData('London%2CUK')
    .then(DisplayController.displayCurrentWeather)
    .then(DisplayController.displayForecast)
    .catch((err) => {
      alert(err);
    });
};
DisplayController.getData();
