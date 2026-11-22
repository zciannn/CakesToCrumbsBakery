
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// WEBSITE STYLES
import './styles/global.css';
import './styles/navbar.css';
import './styles/home.css';
import './styles/cakes.css';
import './styles/footer.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
