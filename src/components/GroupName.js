import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, createTheme} from '@mui/material';
import Grid from '@mui/material/Grid';

import { ThemeProvider } from '@mui/system';

function GroupName(props){

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
        <AppBar position="sticky" sx={{ bgcolor: "#c8b0bd" }}>
            <Toolbar style={{ minHeight: '45px' }} >
                <Typography 
                align = 'center'
                variant="h6" 
                component="div" 
                sx={{ flexGrow: 1,
                      // color: 'black'
                   }}>
              {props.name}
              </Typography>
            </Toolbar>    
        </AppBar>
        </ThemeProvider>
      </>
    );
}

export default GroupName;