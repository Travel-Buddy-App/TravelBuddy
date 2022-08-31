import * as React from 'react';
import { Input, Box } from '@material-ui/core';

import Button from './Button';

const LocationInput = ({ location, setLocation }) => {
  const [save, setSave] = React.useState(false);
  const handleClick = () => (save ? setSave(false) : setSave(true));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <Input
          required
          type='text'
          placeholder='Location'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          readOnly={save}
        />
      </Box>
      <Box>
        <Button text={save ? 'Edit' : 'Save'} onClick={handleClick} />
      </Box>
    </Box>
  );
};

export default LocationInput;
