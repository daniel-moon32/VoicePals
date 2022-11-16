import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function DaysLeft() {
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
        <Typography variant="h6" gutterBottom sx={{ display: 'inline' }}>
          You have
          <Box
            sx={{
              width: 5 / 100,
              border: 3,
              boxShadow: 10,
              px: 0.5,
              mx: 1,
              display: 'inline',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            2
          </Box>
          days left to respond
        </Typography>
      </ThemeProvider>
    </center>

  );
}
