import * as React from 'react';
import Box from '@material-ui/core/Box';

import Button from './Button';

const TripHotel = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <Box
      className='trip-hotel'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>HOTEL</Box>
      <Box>
        <Button onClick={handleClick} text='Modify' />
        <Button text='Delete' />
      </Box>
    </Box>
  );
};

export default TripHotel;
