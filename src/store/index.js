import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import apiWeather from '../middlewares';

const enhancer = applyMiddleware(apiWeather);

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      apiWeather
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;
