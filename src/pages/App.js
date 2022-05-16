import '../assets/style/main.scss';
import React, { Fragment, useRef } from 'react';
import Navbar from '../components/homeComponents/Navbar';
import Header from '../components/homeComponents/Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddIncome from './AddIncome';
import AddCost from './AddCost';

function App() {
  return (
    <BrowserRouter>
      <div className="overflow">
        {/* NAVBAR */}
        <Navbar />
        {/* Body */}
        <div className="container is-max-widescreen px-1">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addIncome" element={<AddIncome />} />
            <Route path="/addCost" element={<AddCost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
