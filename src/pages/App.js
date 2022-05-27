import '../assets/style/main.scss';
import React, { Fragment, useEffect, useRef } from 'react';
import Navbar from '../components/homeComponents/Navbar';
import Header from '../components/homeComponents/Header';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  Redirect,
} from 'react-router-dom';
import AddIncome from './AddIncome';
import AddCost from './AddCost';
import Register from './Register';
import Login from './Login';
import ProtectedRoutes from '../auth/protected.route';
import ProtectedRoutesRegister from '../auth/protectedRoutesRegister';
import IncomeList from './IncomeList';

function App() {
  return (
    <BrowserRouter>
      <div className='overflow'>
        {/* NAVBAR */}
        <Navbar />
        {/* Body */}
        <div className='container is-max-desktop px-1'>
          <Routes>
            {localStorage.getItem('login') == 'true' ? (
              <Route exact path='/' element={<Home />} />
            ) : (
              <Route exact path='/' element={<Login />} />
            )}
            {/* <Route exact path='/' element={<Login />} /> */}
            <Route element={<ProtectedRoutes />}>
              <Route path='/home' element={<Home />} />
              <Route path='/addIncome' element={<AddIncome />} />
              <Route path='/addCost' element={<AddCost />} />
              <Route path='incomeList' element={<IncomeList />} />
              <Route path='*' element={<Navigate to='/' replace />} />
              {/* <Route path='/register' element={<Register />} /> */}
            </Route>
            <Route element={<ProtectedRoutesRegister />}>
              <Route path='/register' element={<Register />} />
            </Route>
            {/* <Route path='/login' element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
