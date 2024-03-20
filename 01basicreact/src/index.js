import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//react will create its own DOM : virtual dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
