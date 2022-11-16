import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
        <Toolbar style={{ minHeight: '50px' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <ArrowBackIcon
              size="large"
              aria-label="show more"
              aria-controls={() => {}}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <ArrowBackIcon />
            </ArrowBackIcon>
          </Box>
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            {groupName}
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default GroupName;
