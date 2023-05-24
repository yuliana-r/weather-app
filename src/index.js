import './styles/style.css';
import DisplayController from './modules/DisplayController';

const input = document.querySelector('input');
const output = document.querySelector('output');

// input.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     const city = input.value;
//     fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=a511c52e142845de9da160517232305&q=${city}&days=7&aqi=no&alerts=no`,
//       { mode: 'cors' },
//     ).then((response) => response.json()).then((response) => {
//       console.log(response);
//       console.log(response.current.condition.text);
//       console.log(`Country:${response.location.country}`);
//       console.log(`City:${response.location.name}`);
//       console.log(`Region:${response.location.region}`);
//       console.log(`C:${response.current.temp_c}`);
//       console.log(`F:${response.current.temp_f}`);
//       console.log(`Wind kph:${response.current.wind_kph}`);
//       console.log(`Wind mph:${response.current.wind_mph}`);
//       console.log(`Local time:${response.location.localtime}`);
//       console.log(`Feels like C:${response.current.feelslike_c}`);
//       console.log(`Feels like F:${response.current.feelslike_f}`);
//       console.log(`Humidity:${response.current.humidity}`);
//       console.log(`Forecast:${response.forecast.forecastday}`);

//       input.value = '';
//     }).catch((error) => {
//       console.log(error);
//     });
//   }
// });
