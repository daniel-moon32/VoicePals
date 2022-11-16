import * as React from 'react';
import Box from '@mui/material/Box';

import { createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function TimeTravel() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bold Italic',
      ].join(','),
    },
  });

  return (
    <center>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 85 / 100,
            border: 3,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography variant="h6">Messages Time Traveling...</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>5</Typography>
        </Box>
      </ThemeProvider>
    </center>
  );
}
