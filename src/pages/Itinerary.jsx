import * as React from 'react';

import DestinationInput from '../components/DestinationInput';
import Trip from '../components/Trip';
import LogOutButton from '../components/LogOutButton';

const Itinerary = () => {
  return (
    <div id='itinerary'>
      <LogOutButton />
      <Trip />
      <DestinationInput />
    </div>
  );
};

export default Itinerary;
