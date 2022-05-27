import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutesRegister = () => {
  return localStorage.getItem('login') === 'false' ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace />
  );
};

export default ProtectedRoutesRegister;
