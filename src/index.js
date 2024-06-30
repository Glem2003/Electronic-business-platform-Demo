import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import { Provider } from 'react-redux';
import store from './reducer/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);