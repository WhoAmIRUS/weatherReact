import 'react-hot-loader/patch';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import store from './store';

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const root = document.getElementById('app');
render(renderApp(), root);
