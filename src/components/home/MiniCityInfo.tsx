import React from 'react';
import type { FC } from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { IForecast } from '../../models/ICity';

const MiniCityInfo: FC<IForecast> = (forecast) => {
  return (
    <Grid
      minWidth="250px"
      minHeight="180px"
      maxWidth="250px"
      maxHeight="180px"
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
          {forecast.weekday}
        </Typography>
        <Typography textOverflow="ellipsis" overflow="hidden" variant="h5">
          {forecast.date}
        </Typography>
      </Grid>
      <Divider />
      <Grid container height="89%" p={2} display="flex" spacing={2}>
        <Grid item lg={12} md={12} sm={12} width="100%">
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Min:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {forecast.min}ºc
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Max:
            </Typography>
            <Typography textOverflow="ellipsis" overflow="hidden">
              {forecast.max}ºc
            </Typography>
          </Grid>
          <Grid display="flex" justifyContent="space-between" width="100%">
            <Typography textOverflow="ellipsis" overflow="hidden">
              Clima:
            </Typography>
            <Typography align="right" textOverflow="ellipsis" overflow="hidden">
              {forecast.description}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MiniCityInfo;
