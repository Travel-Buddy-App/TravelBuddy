import * as React from 'react';

import DestinationInput from '../components/DestinationInput';
import LogOutButton from '../components/LogOutButton';

const Itinerary: React.FC = () => {
  return (
    <div>
      <LogOutButton />
      <DestinationInput />
    </div>
  );
};

export default Itinerary;
