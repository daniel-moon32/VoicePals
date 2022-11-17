import * as React from 'react';
import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

export default function WaitReplyNotice() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#a99aaf',
      },
      secondary: {
        main: '#777490',
      },
    },
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
          Other replies are on the way!
        </Typography>
      </ThemeProvider>
    </center>
  );
}
