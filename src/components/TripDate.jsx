import * as React from 'react';
import Button from './Button';
import Modal from './Modal';

const TripDate = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <div className='trip-date'>
      DATE
      <Button onClick={handleClick} text='Modify' />
      <Button text='Delete' />
      <Modal open={open} onClose={handleClick} />
    </div>
  );
};

export default TripDate;
