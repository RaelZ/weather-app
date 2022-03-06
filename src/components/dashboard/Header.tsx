import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ModalBackground from '../modais/ModalBackground';
import ModalLogin from '../modais/ModalLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/UseAuth';

const Header: React.FC = () => {
  const { handleLogout, logged } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Grid
        bgcolor="#C4e5fe"
        display="flex"
        width="100%"
        height="70px"
        alignItems="center"
        justifyContent="space-between"
        px={2}
      >
        <Typography
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer', textShadow: '0 0 3px #0000001F' }}
          fontSize={24}
          color="white"
          fontWeight={600}
        >
          <FontAwesomeIcon icon={faCloud} /> Weather
        </Typography>
        {logged ? (
          <Grid display="flex" alignItems="center">
            <Button
              disableElevation
              variant="contained"
              size="small"
              style={{ marginRight: 8, borderRadius: 100 }}
              onClick={() => navigate('/account')}
            >
              Perfil
            </Button>
            <Button
              disableElevation
              variant="contained"
              size="small"
              style={{ marginLeft: 8, borderRadius: 100 }}
              onClick={() => handleLogout()}
            >
              Sair
            </Button>
          </Grid>
        ) : (
          <Grid display="flex" alignItems="center">
            <Button
              disableElevation
              variant="contained"
              size="small"
              style={{ marginRight: 8, borderRadius: 100 }}
              color="info"
            >
              cadastre-se
            </Button>
            <Button
              disableElevation
              variant="contained"
              size="small"
              style={{ marginLeft: 8, borderRadius: 100 }}
              onClick={() => setOpen(true)}
            >
              login
            </Button>
          </Grid>
        )}
      </Grid>
      {open && (
        <ModalBackground setOpen={setOpen}>
          <ModalLogin setOpen={setOpen} />
        </ModalBackground>
      )}
    </>
  );
};

export default Header;
