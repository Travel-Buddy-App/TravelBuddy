import * as React from 'react';
import Button from './Button';
import Modal from './Modal';

const TripFlight = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <div className='trip-flight'>
      FLIGHT
      <Button onClick={handleClick} text='Modify' />
      <Button text='Delete' />
      <Modal open={open} onClose={handleClick} />
    </div>
  );
};

export default TripFlight;
