import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { TLoginBox } from '../../types/TLoginBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginBox: React.FC<TLoginBox> = ({
  login,
  setLogin,
  setOpen,
  handleSubmit,
  load,
}) => {
  const [pass, setPass] = useState(true);
  return (
    <form>
      <Grid container spacing={2} p={2} display="flex" alignItems="flex-end">
        <Grid width="100%" item lg={12} md={12} sm={12}>
          <TextField
            fullWidth
            value={login.email}
            name="email"
            size="small"
            label="E-mail"
            type="email"
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid
          width="100%"
          item
          lg={12}
          md={12}
          sm={12}
          display="flex"
          alignItems="flex-start"
        >
          <TextField
            fullWidth
            name="password"
            size="small"
            label="Senha"
            type={pass ? 'password' : 'text'}
            InputProps={{
              endAdornment: (
                <FontAwesomeIcon
                  onClick={() => setPass(!pass)}
                  style={{ cursor: 'pointer' }}
                  icon={pass ? faEye : faEyeSlash}
                />
              ),
            }}
            value={login.password}
            onChange={(e) =>
              setLogin({ ...login, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid
          width="100%"
          item
          lg={12}
          md={12}
          sm={12}
          display="flex"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            color="error"
            disableElevation
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            color="info"
            disableElevation
            disabled={load}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginBox;
