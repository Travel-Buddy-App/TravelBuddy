import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Itinerary from './pages/Itinerary';

interface Props {
  name: string;
}

const App: React.FC = () => {
  return <Itinerary />;
};

export default hot(App);
