import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

import './sass/style.sass';
import './sass/default-layout.sass';


const Index = () => {

  React.useEffect(() => {
    fetch("./api/data.json")
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
      })
      .catch((error) => {
        console.log("Response error", error);
      });
  }, []);
}

//--------------------------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Index />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);