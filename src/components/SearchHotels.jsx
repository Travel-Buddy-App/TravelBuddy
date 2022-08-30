import * as React from 'react';
import Button from './Button';
import Modal from './Modal';

const SearchHotels = () => {
  const TODAY = new Date();
  const TODAY_FORMATTED = TODAY.toLocaleDateString('en-ca');
  const TOMORROW = new Date(TODAY);
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  const TOMORROW_FORMATTED = TOMORROW.toLocaleDateString('en-ca');

  const [open, setOpen] = React.useState(false);
  const [checkIn, setCheckIn] = React.useState(TODAY_FORMATTED);
  const [checkOut, setCheckOut] = React.useState(TOMORROW_FORMATTED);

  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <div id='search-hotels'>
      <label htmlFor='hotel-check-in'>Check In</label>
      <input
        value={checkIn}
        type='date'
        id='hotel-check-in'
        min={TODAY_FORMATTED}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <label htmlFor='hotel-check-out'>Check Out</label>
      <input
        value={checkOut}
        type='date'
        id='hotel-check-out'
        min={TOMORROW_FORMATTED}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <Button onClick={handleClick} text='Search Hotels' />
      <Modal open={open} onClose={handleClick} />
    </div>
  );
};

export default SearchHotels;
