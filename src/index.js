import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__
  // && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
