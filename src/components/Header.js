import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: ['sans-serif'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ bgcolor: '#4682B4' }}>
        <Toolbar style={{ minHeight: '55px' }}>
          <Typography
            align="center"
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            VoicePals
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
