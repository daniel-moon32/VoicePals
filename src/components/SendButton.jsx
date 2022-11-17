import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Link } from 'react-router-dom';

export default function SendButton() {
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
        <Link to="/answer/wait/:groupid" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button variant="contained" sx={{ bgcolor: '#777490', boxShadow: 10 }}>
            Send
          </Button>
        </Link>
      </ThemeProvider>
    </center>
  );
}
