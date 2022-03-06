import React, { useState } from 'react';
import type { FC } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { TSearchCity } from '../../types/TSearchCity';

const SearchCity: FC<TSearchCity> = ({ search, setSearch }) => {
  const [val, setVal] = useState(search);
  const handleSearch = (city: string) => {
    setSearch(city);
  };

  return (
    <Grid
      item
      lg={12}
      md={12}
      sm={12}
      width="100%"
      maxWidth={420}
      maxHeight={90}
      p={2}
      bgcolor="#FFFFFF4F"
      style={{ boxShadow: '0 0 15px #0000001F', borderRadius: 8 }}
    >
      <form>
        <TextField
          fullWidth
          label="Cidade"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                type="submit"
                disableElevation
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch(val);
                }}
              >
                Pesquisar
              </Button>
            ),
          }}
        />
      </form>
    </Grid>
  );
};

export default SearchCity;
