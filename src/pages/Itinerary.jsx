import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import DestinationInput from '../components/DestinationInput';
import Trip from '../components/Trip';
import LogOutButton from '../components/LogOutButton';

const Itinerary = () => {
  return (
    <Grid container spacing={8} id='itinerary-page'>
      <Grid item xs={6}>
        <Trip />
      </Grid>
      <Grid item xs={6}>
        <DestinationInput />
      </Grid>
    </Grid>
  );
};

export default Itinerary;
