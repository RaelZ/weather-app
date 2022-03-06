import React from 'react';
import { Grid } from '@mui/material';
import { TModalBg } from '../../types/TModalBg';

const ModalBackground: React.FC<TModalBg> = ({ children, setOpen }) => {
  return (
    <Grid
      id="id"
      position={'absolute'}
      zIndex={999}
      top={0}
      left={0}
      bgcolor="#000000DF"
      width="100%"
      height="100%"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px) saturate(180%)',
        WebkitBackdropFilter: 'blur(8px) saturate(180%)',
      }}
      onClick={(e: any) => {
        if (e.target.id === 'id') setOpen(false);
      }}
    >
      {children}
    </Grid>
  );
};

export default ModalBackground;
