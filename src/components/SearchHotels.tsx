import * as React from 'react';

const SearchHotels: React.FC = () => {
  const TODAY = new Date();
  const TOMORROW = new Date(TODAY);
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  return (
    <div id='search-hotels'>
      <label htmlFor='hotel-check-in'>Check In</label>
      <input
        type='date'
        id='hotel-check-in'
        min={TODAY.toLocaleDateString('en-ca')}
      />
      <label htmlFor='hotel-check-out'>Check Out</label>
      <input
        type='date'
        id='hotel-check-out'
        min={TOMORROW.toLocaleDateString('en-ca')}
      />
      <button>Search Hotels</button>
    </div>
  );
};

export default SearchHotels;
