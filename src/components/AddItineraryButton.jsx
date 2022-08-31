import * as React from 'react';
import Button from './Button';

const AddItineraryButton = ({ onClick }) => {
  return <Button text='Add Itinerary' onClick={onClick} />;
};

export default AddItineraryButton;
