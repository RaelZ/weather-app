import React, { useState } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { TModalLogin } from '../../types/TModalLogin';
import useAuth from '../../hooks/UseAuth';
import LoginBox from './LoginBox';
import CreateBox from './CreateBox';

const ModalLogin: React.FC<TModalLogin> = ({ setOpen }) => {
  const { handleLogin, handleCreate } = useAuth();
  const [loginModal, setLoginModal] = useState(true);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false)
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [create, setCreate] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const style = {
    on: { borderBottom: '2px solid #C4e5fe', cursor: 'pointer' },
    off: { borderBottom: 'none', cursor: 'pointer' },
  };
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    setLoad(true);
    const res = await handleLogin(login);
    setLoad(false);
    if (res) setOpen(false);
  };
  const handleSignUp = async (e: any) => {
    setErr(false)
    e.preventDefault();
    setLoad(true);
    if (create.password === create.confirmPassword){
      const res = await handleCreate(create);
      if (res) setOpen(false);
    } else setErr(true)
    setLoad(false);
  };

  return (
    <Grid
      position={'absolute'}
      top={'50%'}
      left={'50%'}
      height={420}
      width={380}
      style={{
        transform: 'translate(-50%, -50%)',
        borderRadius: 8,
        boxShadow: '0 0 15px #0000006F',
        backgroundImage: 'linear-gradient(#fff, #C4e5fe)',
      }}
    >
      <Grid display="flex" width="100%" justifyContent="space-between">
        <Grid display="flex" width="100%" justifyContent="space-between">
          <Grid
            onClick={() => setLoginModal(true)}
            width="100%"
            p={2}
            style={loginModal ? style.on : style.off}
          >
            <Typography textAlign="center">LOGIN</Typography>
          </Grid>
          <Grid
            onClick={() => setLoginModal(false)}
            width="100%"
            p={2}
            style={!loginModal ? style.on : style.off}
          >
            <Typography textAlign="center">CADASTRE-SE</Typography>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid width="100%" height="70%" display="flex" justifyContent="center">
        {loginModal ? (
          <LoginBox
            login={login}
            setLogin={setLogin}
            setOpen={setOpen}
            handleSubmit={handleSignIn}
            load={load}
          />
        ) : (
          <CreateBox
            create={create}
            setCreate={setCreate}
            setOpen={setOpen}
            handleSubmit={handleSignUp}
            load={load}
            err={err}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ModalLogin;
