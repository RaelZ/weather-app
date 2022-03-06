import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cityApi } from '../../api/City';
import Profile from '../../components/profile/Profile';
import useAuth from '../../hooks/UseAuth';

const ProfilePage: React.FC = () => {
  const { logged, user } = useAuth();
  const [cities, setCities] = useState<any>([]);
  const [cityId, setCityId] = useState<any>(user ? user.favoriteCities : null);

  const auth = axios.defaults.headers.common['Authorization'];
  useEffect(() => {
    if (logged && auth && user) {
      setCityId(user.favoriteCities);
      if (cityId) {
        const getCity = async () => {
          const response = await cityApi.getFavCity();

          if (response.success) {
            response.data.map((map: any) =>
              cityId
                .filter((x: any) => x.name.includes(map.city_name))
                .map((x: any) => (map.cityId = x.cityId))
            );
            setCities(response.data);
          } else console.log(response.data);
        };
        getCity();
      }
    }
  }, [logged, auth, user, cityId]);
  return (
    <Grid
      minHeight="calc(100vh - 105px)"
      display="flex"
      justifyContent="center"
    >
      <Profile cities={cities} />
    </Grid>
  );
};

export default ProfilePage;
