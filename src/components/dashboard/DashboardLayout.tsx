import { Grid } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const DashboardLayout: React.FC = () => {
  return (
    <Grid position="relative" minHeight="100vh" minWidth="100%">
      <Header />
      <Outlet />
      <Footer />
    </Grid>
  );
};

export default DashboardLayout;
