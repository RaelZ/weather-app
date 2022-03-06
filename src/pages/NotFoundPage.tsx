import { Grid, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <Grid display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="calc(100vh - 105px)">
      <Typography fontSize={64}>404</Typography>
      <Typography fontSize={32}>Página não encontrada</Typography>
    </Grid>
  );
};

export default NotFoundPage;
