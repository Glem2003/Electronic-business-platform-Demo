import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/header.js';
import Main from './components/Main/main.js';
import Footer from './components/Footer/footer.js';

import './sass/style.sass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
  </React.StrictMode>
);