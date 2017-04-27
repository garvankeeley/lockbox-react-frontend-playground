import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './app/App';
import { appReducer } from './redux/reducer'
import { initialData } from './app/initialData'

const persistedState = localStorage.getItem('reduxState') ?
                        JSON.parse(localStorage.getItem('reduxState')) : null

let store = createStore(appReducer);

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
