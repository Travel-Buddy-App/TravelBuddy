import * as React from 'react';
import Box from '@material-ui/core/Box';

import Button from './Button';

const TripLocation = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <Box
      className='trip-location'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>LOCATION</Box>
      <Box>
        <Button onClick={handleClick} text='Modify' />
        <Button text='Delete' />
      </Box>
    </Box>
  );
};

export default TripLocation;
