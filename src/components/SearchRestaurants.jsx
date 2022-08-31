import * as React from 'react';

import Button from './Button';
import RestaurantData from './RestaurantData';

const SearchRestaurants = ({
  restaurantName,
  setRestaurantName,
  restaurantAddress,
  setRestaurantAddress,
  reservationDate,
  setReservationDate,
  reservationTime,
  setReservationTime,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  const data = [
    {
      restaurantPic: 'Pic',
      restaurantName: 'Restaurant 1',
      restaurantAddress: 'Address',
      restaurantCuisine: 'Cuisine',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantPic: 'Pic',
      restaurantName: 'Restaurant 2',
      restaurantAddress: 'Address',
      restaurantCuisine: 'Cuisine',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantPic: 'Pic',
      restaurantName: 'Restaurant 3',
      restaurantAddress: 'Address',
      restaurantCuisine: 'Cuisine',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantPic: 'Pic',
      restaurantName: 'Restaurant 3',
      restaurantAddress: 'Address',
      restaurantCuisine: 'Cuisine',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantPic: 'Pic',
      restaurantName: 'Restaurant 3',
      restaurantAddress: 'Address',
      restaurantCuisine: 'Cuisine',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
  ];

  return (
    <div>
      <label htmlFor='reservation-date'>Reservation Date</label>
      <input
        value={reservationDate}
        type='date'
        id='reservation-date'
        min={reservationDate}
        onChange={(e) => setReservationDate(e.target.value)}
      />
      <input type='time' name='' id='' />
      <Button onClick={handleClick} text='Search Restaurants' />
      {open ? <RestaurantData data={data} /> : null}
    </div>
  );
};

export default SearchRestaurants;
