import * as React from 'react';
import { Container } from '@material-ui/core';

import Itinerary from './pages/Itinerary.jsx';

const App = () => {
  return (
    <Container fixed>
      <Itinerary />
    </Container>
  );
};

export default App;
