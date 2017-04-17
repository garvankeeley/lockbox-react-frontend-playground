import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './app/App';
import { appReducer } from './redux/reducer'

let initialData = {
  isShowPwOn: false,
  rows: [
    {c1: 'https://google.com', c2: 'john@smith.com', c3: 30},
    {c1: 'https://example.com', c2: 'bob@smith.com', c3: 50},
    {c1: 'http://insecure.com', c2: 'sally@smith.com', c3: 100}]
};

const persistedState = localStorage.getItem('reduxState') ?
                        JSON.parse(localStorage.getItem('reduxState')) : null

let store = createStore(appReducer, persistedState || initialData);

const render = () => ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

render();

store.subscribe(() => {
  render();
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
