import * as React from 'react';
import Button from './Button';
import Modal from './Modal';

const SearchFlights = () => {
  const TODAY = new Date();
  const TODAY_FORMATTED = TODAY.toLocaleDateString('en-ca');
  const TOMORROW = new Date(TODAY);
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  const TOMORROW_FORMATTED = TOMORROW.toLocaleDateString('en-ca');

  const [open, setOpen] = React.useState(false);
  const [departureDate, setDepartureDate] = React.useState(TODAY_FORMATTED);
  const [returnDate, setReturnDate] = React.useState(TOMORROW_FORMATTED);

  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <div id='search-flights'>
      <label htmlFor='flight-departure'>Departure</label>
      <input
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
        type='date'
        id='flight-departure'
        min={TODAY_FORMATTED}
      />
      <label htmlFor='flight-return'>Return</label>
      <input
        type='date'
        id='flight-return'
        min={TOMORROW_FORMATTED}
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />
      <Button onClick={handleClick} text='Search Flights' />
      <Modal open={open} onClose={handleClick} />
    </div>
  );
};

export default SearchFlights;
