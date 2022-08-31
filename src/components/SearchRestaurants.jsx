import * as React from 'react';

import Button from './Button';
import RestaurantData from './RestaurantData';

const SearchRestaurants = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  const data = [
    {
      restaurantName: 'Restaurant 1',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 2',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
    {
      restaurantName: 'Restaurant 3',
      restaurantFood: 'Food Type',
      reservationDate: 'Date',
      reservationTime: 'Time',
    },
  ];

  return (
    <div>
      <Button onClick={handleClick} text='Search Restaurants' />
      {open ? <RestaurantData data={data} /> : null}
    </div>
  );
};

export default SearchRestaurants;
