import * as React from 'react';
import MUIButton from '@material-ui/core/Button';

const Button = ({ text, onClick }) => {
  return (
    <MUIButton variant='contained' onClick={onClick} size='small'>
      {text}
    </MUIButton>
  );
};

export default Button;
