import * as React from 'react';

import TripLocation from './TripLocation';
import TripDate from './TripDate';
import TripFlight from './TripFlight';
import TripHotel from './TripHotel';
import TripRestaurant from './TripRestaurant';
import TripAttraction from './TripAttraction';

const Trip: React.FC = () => {
  return (
    <div>
      <TripLocation />
      <TripDate />
      <TripFlight />
      <TripHotel />
      <TripRestaurant />
      <TripAttraction />
    </div>
  );
};

export default Trip;
