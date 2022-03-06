import { Grid } from '@mui/material';
import React from 'react';
import { THome } from '../../types/THome';
import CityInfo from './CityInfo';
import MiniCityInfo from './MiniCityInfo';
import SearchCity from './SearchCity';

const Home: React.FC<THome> = ({ cityInfo, name, setName }) => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      minHeight="calc(100vh - 105px)"
      style={{ backgroundImage: 'linear-gradient(#C4e5fe, #fff)' }}
    >
      <Grid width="50%">
        <SearchCity search={name} setSearch={setName} />
      </Grid>
      <Grid
        container
        spacing={2}
        display="flex"
        width="80%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          display="flex"
          justifyContent="center"
        >
          {cityInfo && <CityInfo cityInfo={cityInfo} />}
        </Grid>
        <Grid
          item
          lg={6}
          md={12}
          sm={12}
          display="flex"
          justifyContent="center"
        >
          <Grid container spacing={2} display="flex">
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
            >
              {cityInfo && <MiniCityInfo {...cityInfo.forecast[0]} />}
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
            >
              {cityInfo && <MiniCityInfo {...cityInfo.forecast[1]} />}
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
            >
              {cityInfo && <MiniCityInfo {...cityInfo.forecast[2]} />}
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              display="flex"
              justifyContent="center"
            >
              {cityInfo && <MiniCityInfo {...cityInfo.forecast[3]} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
