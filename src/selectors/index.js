import { createSelector } from 'reselect';

const weatherSelector = state => state.weather;

export const getWeatherSelector = createSelector(weatherSelector, (weather) => {
  return weather;
});
