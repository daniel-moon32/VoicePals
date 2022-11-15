import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

function GroupName({ groupName }) {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bold Italic',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <AppBar position="sticky" sx={{ bgcolor: '#c8b0bd' }}>
        <Toolbar style={{ minHeight: '45px' }}>
          <Container>
            <Typography
              align="center"
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                // color: 'black'
              }}
            >
              {groupName}
            </Typography>

          </Container>

        </Toolbar>
      </AppBar>

    </ThemeProvider>
  );
}

export default GroupName;
