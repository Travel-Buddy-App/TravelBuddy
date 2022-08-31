import * as React from 'react';
import Box from '@material-ui/core/Box';

import Button from './Button';

const HotelData = ({ data }) => {
  return (
    <Box
      id='hotel-data'
      style={{ border: '1px solid black', height: '300px', overflow: 'scroll' }}
    >
      {data.map((datum, i) => (
        <Box
          key={89289012 * i}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box>{datum.hotelPic}</Box>
          <strong>{datum.hotelName}</strong>
          <Box>{datum.hotelAddress}</Box>
          <Box>{datum.price}</Box>

          <Button text='Add Hotel' />
        </Box>
      ))}
    </Box>
  );
};

export default HotelData;
