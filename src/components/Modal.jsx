import * as React from 'react';
import MUIModal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

const Modal = ({ open, onClose, data }) => {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box>Hi</Box>
    </MUIModal>
  );
};

export default Modal;
