import * as React from 'react';

const SearchFlights: React.FC = () => {
  const TODAY = new Date();
  const TOMORROW = new Date(TODAY);
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  return (
    <div id='search-flights'>
      <label htmlFor='flight-departure'>Departure</label>
      <input
        type='date'
        id='flight-departure'
        min={TODAY.toLocaleDateString('en-ca')}
      />
      <label htmlFor='flight-return'>Return</label>
      <input
        type='date'
        id='flight-return'
        min={TOMORROW.toLocaleDateString('en-ca')}
      />
      <button>Search Flights</button>
    </div>
  );
};

export default SearchFlights;
