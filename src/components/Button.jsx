import * as React from 'react';
import MUIButton from '@material-ui/core/Button';

const Button = ({ text, onClick }) => {
  return (
    <MUIButton variant='contained' onClick={onClick}>
      {text}
    </MUIButton>
  );
};

export default Button;
