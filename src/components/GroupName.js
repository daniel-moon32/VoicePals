import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container, createTheme} from '@mui/material';
import Slide from '@mui/material/Slide';
import { ThemeProvider } from '@mui/system';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function GroupName({groupName},props){

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Bold Italic',
      ].join(','),
    },
  });
  
    return (
        <>
        <ThemeProvider theme={theme}>

        <HideOnScroll {...props}>
        <AppBar position="sticky" sx={{ bgcolor: "#c8b0bd" }}>
            <Toolbar style={{ minHeight: '45px' }} >
              <Container>
              <Typography 
                align = 'center'
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1,
                      // color: 'black'
                   }}>
              {groupName}
              </Typography>


              </Container>

            </Toolbar>    
        </AppBar>
        </HideOnScroll>
        
        </ThemeProvider>
      </>
    );
}

export default GroupName;