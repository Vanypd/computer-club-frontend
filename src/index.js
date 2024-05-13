import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@src/css/GLOBAL_STYLES.css';
import '@src/css/normalize.css';
import '@src/css/style.css';

export const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);