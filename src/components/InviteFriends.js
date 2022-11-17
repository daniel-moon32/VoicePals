import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import { createTheme, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const themeFont = createTheme({
  typography: {
    fontFamily: [
      'Bold Italic',
    ].join(','),
  },
});

const Invite = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(10),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const InviteIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const InviteInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function InviteFriends() {
  return (
    <ThemeProvider theme={themeFont}>
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="sticky" sx={{ bgcolor: '#FFFFFF' }}>
          <Toolbar style={{ minHeight: '55px' }}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="left"
                  variant="h6"
                  component="div"
                  color="black"
                  sx={{
                    flexGrow: 1,
                    ml: 1,
                    py: 0.5,
                  }}
                >
                  Invite Friends
                </Typography>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item sx={{ width: '100' }}>
                  <Invite>
                    <InviteIconWrapper>
                      <PhoneIcon />
                    </InviteIconWrapper>
                    <InviteInputBase
                      placeholder="Enter Phone Number"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Invite>
                </Grid>

                <Grid item>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="show more"
                      aria-controls={() => {}}
                      aria-haspopup="true"
                      onClick={() => {}}
                    >
                      <PersonAddIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>

  );
}
