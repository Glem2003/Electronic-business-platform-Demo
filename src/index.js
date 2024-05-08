import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import ApiData from './api/index.js';

import './sass/style.sass';
import './sass/default-layout.sass';


//--------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiData />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);