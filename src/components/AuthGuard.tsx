import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

const AuthGuard: React.FC = () => {
  const { logged } = useAuth();
  if (logged) return <Outlet />;
  else return <Navigate to="/" />;
};

export default AuthGuard;
