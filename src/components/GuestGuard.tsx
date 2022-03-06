import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';

const GuestGuard: React.FC = () => {
    const { logged } = useAuth();
    if (!logged) return <Outlet />;
    else return <Navigate to="/home" />;
}

export default GuestGuard;