import * as React from 'react';
import Button from './Button';
import Modal from './Modal';

const SearchAttractions = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => (open ? setOpen(false) : setOpen(true));

  return (
    <div>
      <Button onClick={handleClick} text='Search Attractions' />
      <Modal open={open} onClose={handleClick} />
    </div>
  );
};

export default SearchAttractions;
