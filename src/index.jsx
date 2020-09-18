import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppWithHot from './App';
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const mountNode = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <AppWithHot />
  </Provider>,
  mountNode
);
