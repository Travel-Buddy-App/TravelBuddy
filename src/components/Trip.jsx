import * as React from 'react';
import Box from '@material-ui/core/Box';

import TripLocation from './TripLocation';
import TripDate from './TripDate';
import TripHotel from './TripHotel';
import TripRestaurant from './TripRestaurant';
import TripAttraction from './TripAttraction';

const Trip = () => {
  return (
    <Box className='trip' sx={{ display: 'flex', flexDirection: 'column' }}>
      <TripLocation />
      <TripDate />
      <TripHotel />
      <TripRestaurant />
      <TripAttraction />
    </Box>
  );
};

export default Trip;
