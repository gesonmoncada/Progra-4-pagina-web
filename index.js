import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

ReactDOM.render(
  <Router>
    <Navbar /> {/* Renderiza el componente Navbar en la página principal */}
    <App />
  </Router>,
  document.getElementById('root')
);
ReactDOM.render(
  <Auth0Provider domain="dev-8yxbg364t8qdhp1z.us.auth0.com"clientId="C437ZllmQAexzFQrYQOtRpiUTXOOfsgw"redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
