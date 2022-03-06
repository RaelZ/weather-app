import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import DashboardLayout from './components/dashboard/DashboardLayout';
import GuestGuard from './components/GuestGuard';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';

const PathRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/" element={<GuestGuard />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/" element={<AuthGuard />}>
            <Route path="home" element={<HomePage />} />
            <Route path="account" element={<ProfilePage />} />
          </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PathRoutes;
