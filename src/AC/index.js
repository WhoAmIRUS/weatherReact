import { LOAD_WEATHER } from '../constants';

export function loadWeather(cityName) {
  return {
    type: LOAD_WEATHER,
    callApi: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50528fdd1f782dd84a6a754b33f7235b&units=metric`,
    payLoad: {
      cityName,
    },
  };
}
