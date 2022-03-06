import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { TCreateBox } from '../../types/TCreateBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CreateBox: React.FC<TCreateBox> = ({
  create,
  err,
  setCreate,
  setOpen,
  handleSubmit,
  load,
}) => {
  const [pass, setPass] = useState(true);
  const [conPass, setConPass] = useState(true);
  return (
    <form>
      <Grid container spacing={2} p={2} display="flex" alignItems="flex-end">
        <Grid width="100%" item lg={12} md={12} sm={12}>
          <TextField
            fullWidth
            value={create.name}
            name="name"
            size="small"
            label="Nome"
            type="text"
            onChange={(e) =>
              setCreate({ ...create, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        <Grid width="100%" item lg={12} md={12} sm={12}>
          <TextField
            fullWidth
            value={create.email}
            name="email"
            size="small"
            label="E-mail"
            type="email"
            onChange={(e) =>
              setCreate({ ...create, [e.target.name]: e.target.value })
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
            value={create.password}
            InputProps={{
              endAdornment: (
                <FontAwesomeIcon
                  onClick={() => setPass(!pass)}
                  style={{ cursor: 'pointer' }}
                  icon={pass ? faEye : faEyeSlash}
                />
              ),
            }}
            onChange={(e) =>
              setCreate({ ...create, [e.target.name]: e.target.value })
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
            name="confirmPassword"
            size="small"
            label="Confirmar senha"
            type={conPass ? 'password' : 'text'}
            value={create.confirmPassword}
            InputProps={{
              endAdornment: (
                <FontAwesomeIcon
                  onClick={() => setConPass(!conPass)}
                  style={{ cursor: 'pointer' }}
                  icon={conPass ? faEye : faEyeSlash}
                />
              ),
            }}
            onChange={(e) =>
              setCreate({ ...create, [e.target.name]: e.target.value })
            }
          />
        </Grid>
        {err && (
          <Grid
            width="100%"
            item
            lg={12}
            md={12}
            sm={12}
            display="flex"
            justifyContent="center"
          >
            <Typography color="red">Senhas não correspondem</Typography>
          </Grid>
        )}
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
            Cadastrar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateBox;
