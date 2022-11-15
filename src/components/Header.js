import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Header() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Cursive',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ElevationScroll>
        <AppBar position="static" sx={{ bgcolor: '#a99aaf' }}>
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
      </ElevationScroll>

    </ThemeProvider>
  );
}

export default Header;
