import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';

const RatingComponent = () => {
  const [value, setValue] = useState<number>(2); // Указываем тип number для начального значения

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue ?? 0); 
  };

  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Rating
        name="customized-rating"
        value={value}
        precision={0.5}
        onChange={handleChange}
        size="large"
      />
    </Box>
  );
};

export default RatingComponent;
