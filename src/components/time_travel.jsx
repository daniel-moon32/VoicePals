import * as React from 'react';
import Box from '@mui/material/Box';

export default function Time_Travel() {
  return (
    <center>
      <Box
        sx={{
          width: 85 / 100,
          border: 3,
          borderRadius: 2,
          // backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <h3>Messages Time Traveling...</h3>
        <h1>5</h1>
      </Box>
    </center>

  );
}