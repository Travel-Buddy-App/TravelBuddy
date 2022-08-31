import * as React from 'react';
import { Box } from '@material-ui/core';
import Button from './Button';

import HotelData from './HotelData';

const SearchHotels = ({ location }) => {
  const TODAY = new Date();
  const TODAY_FORMATTED = TODAY.toLocaleDateString('en-ca');
  const TOMORROW = new Date(TODAY);
  TOMORROW.setDate(TOMORROW.getDate() + 1);
  const TOMORROW_FORMATTED = TOMORROW.toLocaleDateString('en-ca');

  const [open, setOpen] = React.useState(false);
  const [checkIn, setCheckIn] = React.useState(TODAY_FORMATTED);
  const [checkOut, setCheckOut] = React.useState(TOMORROW_FORMATTED);

  const handleClick = () => {
    open ? setOpen(false) : setOpen(true);
    // FETCH DATA BASED ON LOCATION
  };

  const data = [
    {
      hotelPic: 'Pic',
      hotelName: 'Hotel 1',
      hotelAddress: 'Address',
      price: 'Price',
    },
    {
      hotelPic: 'Pic',
      hotelName: 'Hotel 2',
      hotelAddress: 'Address',
      price: 'Price',
    },
    {
      hotelPic: 'Pic',
      hotelName: 'Hotel 3',
      hotelAddress: 'Address',
      price: 'Price',
    },
    {
      hotelPic: 'Pic',
      hotelName: 'Hotel 4',
      hotelAddress: 'Address',
      price: 'Price',
    },
  ];

  return (
    <>
      <Box
        id='search-hotels'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
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
        </Box>
        <Box>
          <Button onClick={handleClick} text='Search Hotels' />
        </Box>
      </Box>
      {open ? <HotelData data={data} /> : null}
    </>
  );
};

export default SearchHotels;
