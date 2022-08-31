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
        <Box
          key={765432 * i}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box>{datum.restaurantPic}</Box>
          <strong>{datum.restaurantName}</strong>
          <Box>{datum.restaurantAddress}</Box>
          <Box>{datum.restaurantCuisine}</Box>

          <Button text='Add Restaurant' />
        </Box>
      ))}
    </Box>
  );
};

export default RestaurantData;
