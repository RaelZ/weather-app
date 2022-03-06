import React from 'react';
import type { FC } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { TCityInfo } from '../../types/TCityInfo';
import useAuth from '../../hooks/UseAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { cityApi } from '../../api/City';

const CityInfo: FC<TCityInfo> = ({ cityInfo }) => {
  const { logged, user } = useAuth();
  const {
    // cid,
    city,
    city_name,
    // condition_code,
    // condition_slug,
    // currently,
    date,
    description,
    forecast,
    humidity,
    // img_id,
    // latitude,
    // longitude,
    sunrise,
    sunset,
    temp,
    time,
    wind_speedy,
  } = cityInfo;
  const have = user?.favoriteCities!.some((cities) => cities.name.includes(city_name))
  const add = async () => {
    const resWoeId = await cityApi.getWoeId(city_name);
    if (resWoeId.success) await cityApi.addFav(city_name, resWoeId.data.woeid);
  };
  const remove = async () => {
    const resWoeId = await cityApi.getWoeId(city_name);
    if (resWoeId.success) await cityApi.removeFav(resWoeId.data.woeid);
    window.location.reload();
  };

  return (
    <Grid
      maxWidth="480px"
      minWidth="480px"
      height="320px"
      style={{
        boxShadow: '0 0 10px #0000002A',
        backgroundImage: 'linear-gradient(#FFFFFF4F, #FFFFFF4F)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderRadius: 8,
        border: '2px solid #FFFFFFAF',
      }}
    >
      <Grid display="flex" justifyContent="space-between" p={2}>
        <Typography textOverflow="ellipsis" overflow="hidden" variant="h5">
          {logged ? (
            <>
              <FontAwesomeIcon
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  if (!user?.favoriteCities!.some((cities) => cities.name.includes(city_name))) add();
                  else remove();
                }}
                color={have ? '#ffd000' : '#ccc'}
                icon={faStar}
              />{' '}
              {city}
            </>
          ) : (
            city
          )}
        </Typography>
        <Typography textOverflow="ellipsis" overflow="hidden" variant="h5">
          {temp}ºc
        </Typography>
      </Grid>
      <Divider />
      <Grid container height="89%" p={2} display="flex" spacing={2}>
        <Grid item lg={12} md={12} sm={12} width="100%">
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Nascer do Sol:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {sunrise}
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Pôr do Sol:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {sunset}
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Clima
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {description}
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Velocidade do vento:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {wind_speedy}
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Umidade do ar:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {humidity}m³
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          width="100%"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Typography textOverflow="ellipsis" overflow="hidden">
            {time}
          </Typography>
          <Typography textOverflow="ellipsis" overflow="hidden">
            {`${forecast[0].weekday} ${date}`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CityInfo;
