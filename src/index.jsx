import React from 'react';
import ReactDOM from 'react-dom';
import AppWithHot from './App';
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const mountNode = document.getElementById('app');

ReactDOM.render(<AppWithHot />, mountNode);
