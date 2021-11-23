import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './Context/token'

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
