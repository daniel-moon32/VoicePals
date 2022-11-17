import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { Link } from 'react-router-dom';

export default function JumptoListenButton() {
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
        <Link to="/listen/:groupid" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ffffff',
              boxShadow: 10,
              marginTop: 50,
            }}
          >
            Jump
          </Button>
        </Link>

      </ThemeProvider>
    </center>
  );
}