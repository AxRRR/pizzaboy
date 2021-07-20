import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PizzaBoy } from './PizzaBoy';

import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaBoy />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

