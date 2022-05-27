import { Navigate, Outlet } from 'react-router-dom';

import React from 'react';

const protectedRoutes = () => {
  return localStorage.getItem('login') === 'true' ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace />
  );
};

export default protectedRoutes;
