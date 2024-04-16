import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './page/header.js';
import Main from './page/main.js';
import Footer from './page/footer.js';

import './sass/style.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
      <Header />
      <Main />
      <Footer />

  </React.StrictMode>
);