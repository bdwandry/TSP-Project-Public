import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';

import RouterLink from '../node_modules/react-metismenu-router-link';
import MetisMenu from '../node_modules/react-metismenu/dist/react-metismenu';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
