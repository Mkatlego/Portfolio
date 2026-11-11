import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// For GitHub Pages, we need to handle the base URL
const baseName = process.env.NODE_ENV === 'production' ? '/Portfolio' : '/';

root.render(
  <React.StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
