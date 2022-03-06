import React from 'react';
import { Divider, Grid, LinearProgress, Typography } from '@mui/material';
import CityInfo from '../home/CityInfo';
import MiniCityInfo from '../home/MiniCityInfo';
import useAuth from '../../hooks/UseAuth';
import { TProfile } from '../../types/TProfile';

const Profile: React.FC<TProfile> = (props) => {
  const { userName } = useAuth();
  const cities = props;

  return (
    <Grid width="100%" minWidth="520px" minHeight="380px">
      <Grid p={2}>
        <Typography variant="h5">{`Olá ${userName}, estas são suas cidades favoritas:`}</Typography>
      </Grid>
      <Divider />
      {cities.cities.length > 0 ? (
        <Grid container spacing={2} pt={2}>
          {cities.cities.map((city) => (
            <Grid
              key={city.city_name}
              item
              lg={12}
              md={12}
              sm={12}
              p={2}
              width="100%"
              display="flex"
              style={{
                overflowX: 'auto',
                overflowY: 'hidden',
                backgroundImage: 'linear-gradient(180deg, #fff, #C4e5fe)',
              }}
              alignItems="center"
            >
              <Grid pr={1} pl={2}>
                <CityInfo cityInfo={city} />
              </Grid>
              {city.forecast
                .filter((day) => city.forecast.indexOf(day) !== 0)
                .map((day) => (
                  <Grid key={day.date} px={1}>
                    <MiniCityInfo {...day} />
                  </Grid>
                ))}
            </Grid>
          ))}
        </Grid>
      ) : (
        <LinearProgress color="info" />
      )}
    </Grid>
  );
};

export default Profile;
