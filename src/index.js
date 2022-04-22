import React from 'react';
import ReactDOM from 'react-dom/client';
import BarChart from './components/homeComponents/BarChart.js';
import './assets/style/main.scss';
import Home from './pages/Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
