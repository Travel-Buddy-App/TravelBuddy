import * as React from 'react';
import Box from '@material-ui/core/Box';

import Button from './Button';

const AttractionData = ({ data }) => {
  return (
    <Box
      id='attraction-data'
      style={{ border: '1px solid black', height: '300px', overflow: 'scroll' }}
    >
      {data.map((datum, i) => (
        <Box
          key={3452345 * i}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box>{datum.attractionPic}</Box>
          <strong>{datum.attractionName}</strong>
          <Box>{datum.attractionAddress}</Box>

          <Button text='Add Attraction' />
        </Box>
      ))}
    </Box>
  );
};

export default AttractionData;
