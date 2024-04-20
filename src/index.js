import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/header.js';
import Main from './components/Main/main.js';
import Footer from './components/Footer/footer.js';

import './sass/style.sass';



const Index = () => {
  return (
    <>
      <Header />
      <Main/>
      <Footer/>
    </>
  );
}

//--------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);