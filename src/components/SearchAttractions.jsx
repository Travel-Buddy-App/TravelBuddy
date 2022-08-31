import * as React from 'react';
import { Box } from '@material-ui/core';

import Button from './Button';
import AttractionData from './AttractionData';

const SearchAttractions = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  const data = [
    {
      attractionPic: 'Pic',
      attractionName: 'Name',
      attractionAddress: 'Address',
    },
  ];

  return (
    <Box>
      <Button onClick={handleClick} text='Search Attractions' />
      {open ? <AttractionData data={data} /> : null}
    </Box>
  );
};

export default SearchAttractions;
