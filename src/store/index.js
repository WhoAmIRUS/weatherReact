import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import apiWeather from '../middlewares';

const enhancer = applyMiddleware(apiWeather);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

export default store;
