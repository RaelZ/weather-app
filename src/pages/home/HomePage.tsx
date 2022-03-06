import React, { useEffect, useState } from 'react';
import { cityApi } from '../../api/City';
import Home from '../../components/home/Home';

const HomePage: React.FC = () => {
  const [cityInfo, setCityInfo] = useState<any>();
  const [name, setName] = useState('');

  useEffect(() => {
    if (name !== '') {
      const getCity = async () => {
        const response = await cityApi.getCity(name);
        if (response.success) setCityInfo(response.data);
        else if (!response.success) console.log(response.data);
      };
      getCity();
    } else setCityInfo(undefined);
  }, [name]);

  return <Home cityInfo={cityInfo} name={name} setName={setName} />;
};

export default HomePage;
