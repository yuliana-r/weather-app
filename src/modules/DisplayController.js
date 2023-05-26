import Weather from './Data';

export default class DisplayController {
  static async renderForecast() {
    const input = document.getElementById('input');
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const city = input.value;
        try {
          await Weather.getData(city);
          console.log(Weather.displayCurrent());
          //   console.log(Weather.displayForecast());
          console.log(Weather.displayForecast(2));
          console.log(Weather.time);
          // console.log(Weather.formatToday(Weather.time));
          input.value = '';
        } catch (err) {
          console.error(err);
        }
      }
    });
  }
}
