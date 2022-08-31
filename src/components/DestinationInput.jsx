import * as React from 'react';
import { Box } from '@material-ui/core';

import LocationInput from './LocationInput';
import SearchHotels from './SearchHotels';
import SearchRestaurants from './SearchRestaurants';
import SearchAttractions from './SearchAttractions';
import AddItineraryButton from './AddItineraryButton';

const DestinationInput = () => {
  const [location, setLocation] = React.useState('');

  return (
    <Box id='destination-input'>
      <LocationInput location={location} setLocation={setLocation} />
      <SearchHotels />
      <SearchRestaurants />
      <SearchAttractions />
      <AddItineraryButton />
    </Box>
  );
};

export default DestinationInput;
