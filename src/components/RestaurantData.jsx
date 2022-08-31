import * as React from 'react';
import Box from '@material-ui/core/Box';

import Button from './Button';

const RestaurantData = ({ data }) => {
  return (
    <Box
      id='restaurant-data'
      style={{ border: '1px solid black', height: '300px', overflow: 'scroll' }}
    >
      {data.map((datum, i) => (
        <Box key={765432 * i}>
          <strong>{datum.restaurantName}</strong>
          {datum.restaurantFood}
          {datum.reservationDate}
          {datum.reservationTime}

          <Button text='Add Restaurant' />
        </Box>
      ))}
    </Box>
  );
};

export default RestaurantData;
