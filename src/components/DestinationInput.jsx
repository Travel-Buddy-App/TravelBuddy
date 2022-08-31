import * as React from 'react';
import { Box } from '@material-ui/core';

import LocationInput from './LocationInput';
import SearchHotels from './SearchHotels';
import SearchRestaurants from './SearchRestaurants';
import SearchAttractions from './SearchAttractions';
import AddItineraryButton from './AddItineraryButton';

const DestinationInput = () => {
  const TODAY = new Date();
  const TODAY_FORMATTED = TODAY.toLocaleDateString('en-ca');

  const [location, setLocation] = React.useState('');
  const [hotel, setHotel] = React.useState('');
  const [restaurantName, setRestaurantName] = React.useState('');
  const [restaurantAddress, setRestaurantAddress] = React.useState('');
  const [reservationDate, setReservationDate] = React.useState(TODAY_FORMATTED);
  const [reservationTime, setReservationTime] = React.useState('');
  const [attraction, setAttraction] = React.useState('');

  const handleClick = () => {
    // Save data to DB
  };

  return (
    <Box id='destination-input'>
      <LocationInput location={location} setLocation={setLocation} />
      <SearchHotels location={location} setHotel={setHotel} />
      <SearchRestaurants
        location={location}
        restaurantName={restaurantName}
        setRestaurantName={setRestaurantName}
        restaurantAddress={restaurantAddress}
        setRestaurantAddress={setRestaurantAddress}
        reservationDate={reservationDate}
        setReservationDate={setReservationDate}
        reservationTime={reservationTime}
        setReservationTime={setReservationTime}
      />
      <SearchAttractions location={location} />
      <AddItineraryButton onClick={handleClick} />
    </Box>
  );
};

export default DestinationInput;
