import * as React from 'react';
import Box from '@mui/material/Box';

export default function DaysLeft() {
  return (
    <center>
    <h3 sx={{display: 'inline'}}>
        You have 
        <Box
            sx={{
            width: 5 / 100,
            border: 3,
            boxShadow: 10,
            px: 0.5,
            mx: 1,
            display: 'inline',
            // backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            },
            }}
        >
        2
      </Box>
      days left to respond
    </h3>
    </center>

  );
}
