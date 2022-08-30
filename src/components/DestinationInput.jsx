import * as React from 'react';

import LocationInput from './LocationInput';
import SearchFlights from './SearchFlights';
import SearchHotels from './SearchHotels';
import SearchRestaurants from './SearchRestaurants';
import SearchAttractions from './SearchAttractions';
import AddItineraryButton from './AddItineraryButton';

const DestinationInput = () => {
  return (
    <div id='destination-input'>
      <LocationInput />
      <SearchFlights />
      <SearchHotels />
      <SearchRestaurants />
      <SearchAttractions />
      <AddItineraryButton />
    </div>
  );
};

export default DestinationInput;
