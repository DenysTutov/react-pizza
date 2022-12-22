import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import App from 'App';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter basename="react-pizza">
        <App />
      </BrowserRouter>
    </Provider>
  );
}
