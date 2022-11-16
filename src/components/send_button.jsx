import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function SendButton() {
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
        <Button variant="contained" sx={{ bgcolor: '#777490' }}>
          Send
        </Button>
      </ThemeProvider>
    </center>
  );
}
